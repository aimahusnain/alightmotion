import { slug } from "github-slugger";
import React from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import Category from "./Category";
import { Card, CardContent } from "@/src/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/src/components/ui/carousel";

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
  return (
    // <AwesomeSlider className="slider">
    //   {categories.map((cat: any) => (
    //     <div key={cat}>
    //       <Category
    //         link={`/categories/${cat}`}
    //         name={cat}
    //         active={currentSlug === slug(cat)}
    //         extraClassName={extraClassnames[cat]}
    //       />
    //     </div>
    //   ))}
    // </AwesomeSlider>
    <Carousel
      opts={{
        align: "start",
      }}
      className="max-w-full sm:mx-0 mx-10 md:mx-10"
    >
      <CarouselContent className="px-6">

        {categories.map((cat: any) => (
      <CarouselItem className="flex w-fit basis-auto">
          <Category
            key={cat}
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
