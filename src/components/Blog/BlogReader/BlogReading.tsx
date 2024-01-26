import { allBlogs } from "contentlayer/generated";
import Footer from "../../Footer";
import BlogDetails from "../BlogDetails";
import RenderMdx from "../RenderMdx";
import Butybar from "./Floating Bar";
import TableofContents from "./TableofContents";
import BlogReaderImage from "./image";

const BlogReading = ({ parmy, blogy }: { parmy: any; blogy: any }) => {
  const blog = allBlogs.find((blog) => blog._raw.flattenedPath === parmy.slug);
  if (!blog) {
    // Handle case where the blog is not found
    return <div>Blog not found</div>;
  }
  return (
    <div>
      <div className="mb-20 mt-16 flex items-center flex-col text-left">
        <div className="lg:w-[60%] md:w-[72%] sm:w-[62%] text-center space-y-5">
          <BlogDetails blog={blogy} slug={parmy.slug} />
          <h1 className="capitalize sm:text-4xl md:text-5xl lg:text-6xl text-4xl font-bold leading-tight">
            {blog.title}
          </h1>
        </div>

        <div className="sm:px-32 px-5 w-full sm:my-16 my-10">
          <BlogReaderImage parmy={parmy} />
        </div>

        <Butybar blogy={blogy} />
        <div className="lg:w-[60%] md:w-[72%] sm:w-[62%] w-[80%]">
          <TableofContents parmy={parmy} />
          <RenderMdx blog={blogy} />
        </div>

        {/* <BlogReaderImage parmy={parmy} />
        <BlogContent parmy={parmy} blogy={blogy} /> */}
      </div>
        <Footer />
    </div>
  );
};

export default BlogReading;
