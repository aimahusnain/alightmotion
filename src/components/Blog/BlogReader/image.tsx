import React from 'react';
import Tag from "@/src/components/Elements/Tag";
import { allBlogs } from "contentlayer/generated";
import { slug } from "github-slugger";
import Image from "next/image";

interface BlogReaderImageProps {
    parmy: any;
}

const BlogReaderImage: React.FC<BlogReaderImageProps> = ({ parmy }) => {
  const blog = allBlogs.find((blog) => blog._raw.flattenedPath === parmy.slug);

  if (!blog) {
    // Handle case where the blog is not found
    return <div>Blog not found</div>;
  }

  return (
    <div className="mb-8 text-center relative w-full h-[70vh] bg-dark">
      <div className="w-full z-10 flex flex-col items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <Tag
          name={blog.tags ? blog.tags[0] : ''}
          link={`/categories/${slug(blog.tags ? blog.tags[0] : '')}`}
          className="px-6 text-sm py-2"
        />
        <h1
          className="inline-block mt-6 font-semibold capitalize text-light text-2xl md:text-3xl lg:text-5xl !leading-normal relative w-5/6"
        >
          {blog.title}
        </h1>
      </div>
      <div className="absolute top-0 left-0 right-0 bottom-0 h-full bg-dark/60 dark:bg-dark/40" />
      {blog.image && (
        <Image
          src={blog.image.filePath.replace("../public", "")}
          placeholder="blur"
          blurDataURL={blog.image.blurhashDataUrl}
          alt={blog.title}
          width={blog.image.width}
          height={blog.image.height}
          className="aspect-square w-full h-full object-cover object-center"
          priority
          sizes="100vw"
        />
      )}
    </div>
  );
};

export default BlogReaderImage;
