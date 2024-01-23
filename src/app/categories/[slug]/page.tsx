import { allBlogs, Blog } from "@/.contentlayer/generated";
import BlogLayoutThree from "@/src/components/Blog/BlogLayoutThree";
import Categories from "@/src/components/Blog/Categories";
import Footer from "@/src/components/Footer";
import GithubSlugger, { slug } from "github-slugger";
import HomeCoverSection from "@/src/components/Home/HomeCoverSection";
import Search from '@/src/components/Blog/search'
const slugger = new GithubSlugger();


export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const categories: string[] = [];
  const paths: { slug: string }[] = [{ slug: "all" }];

  allBlogs.map((blog: Blog) => {
    if (blog.isPublished && blog.tags) {
      blog.tags.map((tag: string) => {
        let slugified = slugger.slug(tag);
        if (!categories.includes(slugified)) {
          categories.push(slugified);
          paths.push({ slug: slugified });
        }
      });
    }
  });

  return paths;
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<{ title: string; description: string }> {
  return {
    title: `${params.slug.replaceAll("-", " ")} Articles`,
    description: `Learn more about ${params.slug === "all" ? "web development" : params.slug} through our collection of expert blogs and tutorials`,
  };
}

const CategoryPage = ({ params }: { params: { slug: string } }) => {
  const maxFeaturedBlogs = 4;
  const featuredBlogs = allBlogs.filter((blog) => blog.jfkFeatured === true).slice(0, maxFeaturedBlogs);
  
  const allCategories: string[] = ["all"];
  const blogs = allBlogs.filter((blog: Blog) => {
    return blog.tags && blog.tags.some((tag: string) => {  // Add a check for the existence of blog.tags
      const slugified = slug(tag);
      if (!allCategories.includes(slugified)) {
        allCategories.push(slugified);
      }
      if (params.slug === "all") {
        return true;
      }
      return slugified === params.slug;
    });
  });

  return (
    <article className="mt-12 flex gap-5 flex-col text-white px-5 sm:px-10 md:px-24 sxl:px-32">
      <div className="flex flex-col">
        <h1 className="mt-6 font-semibold text-2xl md:text-4xl lg:text-5xl">#{params.slug}</h1>
        <span className="mt-2 inline-block">Discover more categories and expand your knowledge!</span>
      </div>
      
      {/* <HomeCoverSection blogs={allBlogs} featuredBlogs={featuredBlogs} /> */}
      
      <Search parmy={params} />
      
      {/* <Categories categories={allCategories} currentSlug={params.slug} /> */}
      <Footer />

    </article>
  );
};

export default CategoryPage;
