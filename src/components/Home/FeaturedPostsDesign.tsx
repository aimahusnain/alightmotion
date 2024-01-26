"use client";

import { Button, Card, CardFooter, CardHeader, Image } from "@nextui-org/react";
import React from "react";
import { sortBlogs } from "../../utils";
import Link from "next/link";
import FeaturedLayout from "./FeaturedLayout";

export default function FeaturedPostsDesign({
  blogs,
  featuredBlogs,
}: {
  blogs: any;
  featuredBlogs: any;
}) {
  const sortedBlogs = sortBlogs(blogs);

  // Use the featuredBlogs prop to display the featured blogs
  const blogsToDisplay =
    featuredBlogs.length > 0 ? featuredBlogs : [sortedBlogs[5]];
  if (!blogsToDisplay.length) {
    return <div>No blogs to display.</div>;
  }

  const firstBlog = blogsToDisplay[1];
  const secondBlog = blogsToDisplay[0];
  const thirdBlog = blogsToDisplay[2];
  // const fourthBlog = blogsToDisplay[3];
  // const fifthBlog   =   blogsToDisplay[4];

  return (
    <div>
      {/* 1st Post */}
      <div className="grid items-start gap-6 mt-10 xl:grid-cols-2">
        <div className="col-span-1">
          <section className="grid grid-cols-1 gap-5">
            <div className="col-span-1">
              <div className="sm:mx-0">
                <Link
                  aria-label={`Image of ${firstBlog.title}`}
                  href={firstBlog.url}
                >
                  <div className="relative pt-[52.5%]">
                    <img
                      alt={`Image of ${firstBlog.title}`}
                      decoding="async"
                      data-nimg="fill"
                      className="w-full rounded-md border object-cover hover:opacity-90 dark:border-neutral-800"
                      style={{
                        position: "absolute",
                        height: "100%",
                        width: "100%",
                        left: "0",
                        top: "0",
                        right: "0",
                        bottom: "0",
                        color: "transparent",
                      }}
                      src={`${firstBlog.image?.filePath.replace(
                        "../public",
                        ""
                      )}?w=1600&amp;h=840&amp;fit=crop&amp;crop=entropy&amp;auto=compress,format&amp;format=webp`}
                    />
                  </div>
                </Link>
              </div>
            </div>
            <div className="col-span-1 flex flex-col gap-2">
              <h1 className="text-xl font-bold leading-snug text-slate-800 dark:text-neutral-50 lg:text-3xl">
                <a
                  className="hover:text-primary leading-tight tracking-tight hover:underline"
                  href={firstBlog.url}
                >
                  {firstBlog.title}
                </a>
              </h1>
              <Link href={firstBlog.url}>
                <p className="text-md leading-snug text-slate-500 dark:text-neutral-400">
                  {firstBlog.description.slice(0, 250)}...
                </p>
              </Link>
            </div>
          </section>
        </div>

        <div className="col-span-1 flex flex-col gap-6">
          <FeaturedLayout nameBlog={firstBlog} />
          <FeaturedLayout nameBlog={secondBlog} />
          <FeaturedLayout nameBlog={thirdBlog} />
        </div>
      </div>

    </div>
  );
}
