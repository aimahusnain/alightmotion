import { allBlogs } from "contentlayer/generated";
import React from "react";
import BlogDetails from "../BlogDetails";
import RenderMdx from "../RenderMdx";

interface BlogReaderImageProps {
  parmy: any;
  blogy: any;
}

const BlogContent: React.FC<BlogReaderImageProps> = ({ parmy, blogy }) => {
  const blog = allBlogs.find((blog) => blog._raw.flattenedPath === parmy.slug);
  if (!blog) {
    // Handle case where the blog is not found
    return <div>Blog not found</div>;
  }
  return (
    // <div className="grid grid-cols-12 gap-y-8 lg:gap-8 sxl:gap-16 mt-8 px-5 md:px-10">
    //       <div className="col-span-12 lg:col-span-4">
    //         <details
    //           className="border-[1px] border-solid border-dark dark:border-light text-dark dark:text-light rounded-xl p-4 sticky top-16 max-h-[80vh] overflow-hidden overflow-y-auto"
    //           open
    //         >
    //           <summary className="text-lg font-semibold capitalize cursor-pointer">
    //             Table Of Content
    //           </summary>
    //           <ul className="mt-4 font-in text-base">
    //             {blog.toc.map((heading: any) => {
    //               return (
    //                 <li key={`#${heading.slug}`} className="py-1">
    //                     <a
    //                       href={`#${heading.slug}`}
    //                       data-level={heading.level}
    //                       className="data-[level=two]:pl-0 data-[level=two]:pt-2
    //                                      data-[level=two]:border-t border-solid border-dark/40
    //                                      data-[level=three]:pl-4
    //                                      sm:data-[level=three]:pl-6
    //                                      flex items-center justify-start
    //                                      "
    //                     >
    //                       {heading.level === "three" ? (
    //                         <span className="flex w-1 h-1 rounded-full bg-dark mr-2">
    //                           &nbsp;
    //                         </span>
    //                       ) : null}

    //                       <span className="hover:underline">{heading.text}</span>
    //                     </a>
    //                 </li>
    //               );
    //             })}
    //           </ul>
    //         </details>
    //       </div>
    //       <RenderMdx blog={blog} />
    //     </div>
    <div className="px-11 space-y-8 flex flex-col mt-10">
    <div className="text-center space-y-8">
      <h1 className="capitalize font-bold text-4xl">{blog.title}</h1>
      <p className="capitalize font-normal text-2xl text-slate-400">
        {blog.description}
      </p>
      {/* <BlogDetails blog={blog} slug={params.slug} /> */}
      <BlogDetails blog={blogy} slug={parmy.slug} />
    </div>



      {/* <details
        className="border-[1px] border-solid border-zinc-600 text-light rounded-xl p-4 max-h-[80vh] overflow-hidden my-7"
        open
      >
        <summary className="text-lg font-semibold capitalize cursor-pointer">
          Table Of Content
        </summary>
        <ul className="mt-4 font-in text-base !text-left text-white
        ">
          {blog.toc.map((heading: any) => {
            return (
              <li key={`#${heading.slug}`} className="py-1">
                <a
                  href={`#${heading.slug}`}
                  data-level={heading.level}
                  className="data-[level=two]:pl-0 data-[level=two]:pt-2
                                         data-[level=two]:border-t border-solid border-white/40
                                         data-[level=three]:pl-4
                                         sm:data-[level=three]:pl-6
                                         flex items-center justify-start
                                         "
                >
                  {heading.level === "three" ? (
                    <span className="flex w-1 h-1 rounded-full bg-alightdarkbg mr-2">
                      &nbsp;
                    </span>
                  ) : null}

                  <span className="hover:underline">{heading.text}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </details> */}
      <details
        className="border-[1px] border-solid border-zinc-600 text-light rounded-xl p-4 max-h-[80vh] overflow-hidden my-7"
        open
      >
        <summary className="text-lg font-semibold capitalize cursor-pointer">
          Table Of Content
        </summary>
        <ul className="mt-4 font-in text-base !text-left text-white
        ">
          {blog.toc.map((heading: any) => {
            return (
              <li key={`#${heading.slug}`} className="py-1">
                <a
                  href={`#${heading.slug}`}
                  data-level={heading.level}
                  className="data-[level=two]:pl-0 data-[level=two]:pt-2 data-[level=two]:border-t border-solid border-white/40 data-[level=three]:pl-4 sm:data-[level=three]:pl-6 flex items-center justify-start "
                >
                  {heading.level === "three" ? (
                    <span className="flex w-1 h-1 rounded-full bg-light mr-2">
                      &nbsp;
                    </span>
                  ) : null}

                  <span className="hover:underline">{heading.text}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </details>
      
      <RenderMdx blog={blogy} />
    </div>
  );
};

export default BlogContent;
