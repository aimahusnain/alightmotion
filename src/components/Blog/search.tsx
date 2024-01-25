"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import BlogLayoutThree from "@/src/components/Blog/BlogLayoutThree";
import { allBlogs } from "@/.contentlayer/generated";
import Categories from "@/src/components/Blog/Categories";
import { slug } from "github-slugger";
import SocialMediaIcons from "../Footer/SocialMediaIcons";

const SearchPage = ({ parmy }: { parmy: any }) => {
  const router: any = useRouter();
  const { q } = router.query || { q: "" };
  const allCategories: string[] = ["all"];
  const [searchTerm, setSearchTerm] = useState(q);
  const filteredBlogs = allBlogs.filter((blog) => {
    const normalizedTitle = blog.title.toLowerCase();
    const normalizedQuery = searchTerm.toLowerCase();
    return (
      normalizedTitle.includes(normalizedQuery) &&
      blog.tags &&
      blog.tags.some((tag: string) => {
        const slugified = slug(tag);
        if (!allCategories.includes(slugified)) {
          allCategories.push(slugified);
        }
        if (parmy.slug === "all") {
          return true;
        }
        return slugified === parmy.slug;
      })
    );
  });
  
  const extraClassnames: { [key: string]: string } = {
    "all": "mr-5",
  };

  return (
    <div>

      <Categories categories={allCategories} currentSlug={parmy.slug}  extraClassnames={extraClassnames} />
      
      <div className="flex flex-col">
        <h1 className="capitalize mt-6 font-semibold text-2xl md:text-4xl lg:text-5xl">
          {parmy.slug}
        </h1>
      </div>
      <div className="grid grid-cols-1 items-center gap-5 pt-2 text-sm md:grid-cols-2">
        <div className="relative col-span-1">
          <input
            type="text"
            placeholder="Search articles…"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full rounded-full border focus:!border-primary border-slate-200 bg-slate-50 px-4 py-2 text-base focus:bg-transparent dark:border-neutral-800 dark:bg-neutral-800 dark:text-neutral-50 transition-all dark:placeholder:text-neutral-400 dark:hover:bg-neutral-950"
          />
        </div>
        <div className="col-span-1 flex flex-row flex-wrap gap-1 text-slate-600 dark:text-neutral-300 md:flex-nowrap justify-end">
          <SocialMediaIcons gap="gap-10" />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-rows-2 gap-16 mt-5 sm:mt-10 md:mt-24 sxl:mt-32">
        {filteredBlogs.map((blog, index: number) => (
          <article key={index} className="col-span-1 row-span-1 relative">
            <BlogLayoutThree blog={blog} />
          </article>
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
