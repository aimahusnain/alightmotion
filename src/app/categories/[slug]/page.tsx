import { allBlogs, Blog } from "@/.contentlayer/generated";
import BlogLayoutThree from "@/src/components/Blog/BlogLayoutThree";
import Categories from "@/src/components/Blog/Categories";
import Footer from "@/src/components/Footer";
import GithubSlugger, { slug } from "github-slugger";
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
    title: `${params.slug.replaceAll("-", " ")} Blogs`,
    description: `Learn more about ${params.slug === "all" ? "web development" : params.slug} through our collection of expert blogs and tutorials`,
  };
}

const CategoryPage = ({ params }: { params: { slug: string } }) => {
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
      
      <Categories categories={allCategories} currentSlug={params.slug} />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-rows-2 gap-16 mt-5 sm:mt-10 md:mt-24 sxl:mt-32">
        {blogs.map((blog: Blog, index: number) => (
          <article key={index} className="col-span-1 row-span-1 relative">
            <BlogLayoutThree blog={blog} />
          </article>
        ))}
      </div>
      <Footer />

    </article>
  );
};

export default CategoryPage;
