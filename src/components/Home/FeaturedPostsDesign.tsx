'use client'

import { Button, Card, CardFooter, CardHeader, Image } from "@nextui-org/react";
import React from "react";
import { sortBlogs } from "../../utils";


export default function FeaturedPostsDesign({ blogs, featuredBlogs }: {blogs: any, featuredBlogs: any}) {
    const sortedBlogs = sortBlogs(blogs);

    // Use the featuredBlogs prop to display the featured blogs
    const blogsToDisplay =
    featuredBlogs.length > 0 ? featuredBlogs : [sortedBlogs[5]];
  if (!blogsToDisplay.length) {
    return <div>No blogs to display.</div>;
  }

  const firstBlog  =  blogsToDisplay[1];
  const secondBlog =  blogsToDisplay[0];
  const thirdBlog  =  blogsToDisplay[2];
  const fourthBlog =  blogsToDisplay[3];
  const fifthBlog  =  blogsToDisplay[4];
  
  return (
    <div className="max-w-[900px] gap-2 grid grid-cols-12 grid-rows-2 px-8">
      {/* 1st Post */}
      <Card className="col-span-12 sm:col-span-4 h-[300px]">
        <CardHeader className="absolute top-1 flex-col !items-start">
          <p className="text-tiny text-white/60 uppercase font-bold">
            {firstBlog.tags[0]}
          </p>
          <h4 className="text-white font-medium text-lg">
            {firstBlog.title}
          </h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Card background"
          className="z-0 w-full h-full object-cover"
          src={firstBlog.image?.filePath.replace("../public", "")}
        />
      </Card>

      {/* 2nd Post */}
      <Card className="col-span-12 sm:col-span-4 h-[300px]">
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
          <p className="text-tiny text-white/60 uppercase font-bold">
            {secondBlog.tags[0]}
          </p>
          <h4 className="text-white font-medium text-large">
            {secondBlog.title}
          </h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Card background"
          className="z-0 w-full h-full object-cover"
          src={secondBlog.image?.filePath.replace("../public", "")}
        />
      </Card>

      {/* 3rd Post */}
      <Card className="col-span-12 sm:col-span-4 h-[300px]">
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
          <p className="text-tiny text-white/60 uppercase font-bold">
            {thirdBlog.tags[0]}
          </p>
          <h4 className="text-white font-medium text-large">
            {thirdBlog.title}
          </h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Card background"
          className="z-0 w-full h-full object-cover"
          src={thirdBlog.image?.filePath.replace("../public", "")}
        />
      </Card>

      {/* 4th Post */}
      <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-5">
        <CardHeader className="absolute z-10 top-1 flex-col items-start">
          <p className="text-tiny text-white/60 uppercase font-bold">
            {fourthBlog.tags[0]}
          </p>
          <h4 className="text-black font-medium text-2xl">
            {fourthBlog.title}
          </h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Card example background"
          className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
          src={fourthBlog.image?.filePath.replace("../public", "")}
        />
        <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
          <div>
            <p className="text-black text-tiny">{fourthBlog.title[0]}</p>
            <p className="text-black text-tiny">20 words description</p>
          </div>
          <Button className="text-tiny" color="primary" radius="full" size="sm">
            Learn More
          </Button>
        </CardFooter>
      </Card>

      {/* 5th Post */}
      <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-7">
        <CardHeader className="absolute z-10 top-1 flex-col items-start">
          <p className="text-tiny text-white/60 uppercase font-bold">
            {fifthBlog.tags[0]}
          </p>
          <h4 className="text-white/90 font-medium text-xl">
            {fifthBlog.title}
          </h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Relaxing app background"
          className="z-0 w-full h-full object-cover"
          src={fifthBlog.image?.filePath.replace("../public", "")}
        />
        <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
          <div className="flex flex-grow gap-2 items-center">
            <Image
              alt="Breathing app icon"
              className="rounded-full w-10 h-11 bg-black"
              src={fifthBlog.image?.filePath.replace("../public", "")}
            />
            <div className="flex flex-col">
              <p className="text-tiny text-white/60">{fifthBlog.tags[0]}</p>
              <p className="text-tiny text-white/60">{fifthBlog.title[0]}</p>
            </div>
          </div>
          <Button radius="full" size="sm">
            Get App
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}