import { format, parseISO } from "date-fns";
import Link from "next/link";
import React from "react";
import { slug } from "github-slugger";
import ViewCounter from "./ViewCounter";
import { BookOpen } from "lucide-react";
import { Tooltip } from "@nextui-org/tooltip";

const BlogDetails = ({ blog, slug: blogSlug }: { blog: any; slug: any }) => {
  return (
    // <div className="shadow-xl shadow-primary/25 px-2 md:px-10 bg-primary relative bottom-16 -mb-7 text-white py-2 flex items-center justify-around flex-wrap text-lg sm:text-xl font-medium mx-5 md:mx-10 rounded-xl">
    //   <time className="m-3">
    //     {format(parseISO(blog.publishedAt), "LLLL d, yyyy")}
    //   </time>
    //   <span className="m-3">
    //     <ViewCounter slug={blogSlug} />
    //   </span>
    //   <div className="m-3">{blog.readingTime.text}</div>
    //   <Link href={`/categories/${slug(blog.tags[0])}`} className="m-3">
    //     #{blog.tags[0]}
    //   </Link>
    // </div>
    <div className="flex w-full items-center flex-wrap justify-center text-xl gap-5 text-slate-500">
      <Link
        href={`/categories/${slug(blog.tags[0])}`}
        className="m-3 hover:text-white"
      >
        #{blog.tags[0]}
      </Link>
      <Tooltip
      showArrow
      placement="bottom"
      content={format(parseISO(blog.publishedAt), "LLL d, yyyy")}
      >
      <time className="m-3">
        {format(parseISO(blog.publishedAt), "LLL d, yyyy")}
      </time>
      </Tooltip>
      <div className="m-3 flex items-center justify-center gap-2">
        <BookOpen />
        {blog.readingTime.text}
      </div>
      
      
    </div>
  );
};

export default BlogDetails;
