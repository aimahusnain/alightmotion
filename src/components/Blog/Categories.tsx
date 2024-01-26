import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/src/components/ui/carousel";
import { slug } from "github-slugger";
import React from "react";
import Category from "./Category";
import { allBlogs } from "@/.contentlayer/generated";

interface CategoriesProps {
  categories: any;
  currentSlug: any;
  extraClassnames: { [key: string]: string };
}

const Categories: React.FC<CategoriesProps> = ({
  categories,
  currentSlug,
  extraClassnames,
}) => {
  const filteredCategories = categories.filter((cat: any) => {
    if (cat === "all") {
      return true; // "all" is always included
    }

    const isCategoryFeatured = allBlogs.some(
      (blog) =>
        blog.tags &&
        blog.tags.some(
          (tag: string) => slug(tag) === slug(cat) && !blog.jfkFeatured
        )
    );

    return isCategoryFeatured;
  });

  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="max-w-full sm:mx-0 mx-10 md:mx-10"
    >
      <CarouselContent className="px-6">
        {filteredCategories.map((cat: any) => (
          <CarouselItem className="flex w-fit basis-auto" key={cat}>
            <Category
              link={`/categories/${cat}`}
              name={cat}
              active={currentSlug === slug(cat)}
              extraClassName={extraClassnames[cat]}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default Categories;