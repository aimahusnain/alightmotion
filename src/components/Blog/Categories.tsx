import { slug } from "github-slugger";
import React from "react";
import Category from "./Category";

const Categories = ({ categories, currentSlug }: {categories: any, currentSlug: any}) => {
  return (
    <div className="px-0 mt-10 border-t-2 text-light border-b-2 border-solid border-zinc-500 py-4 flex items-start flex-wrap font-medium">
      {categories.map((cat: any) => (
        <Category
          key={cat}
          link={`/categories/${cat}`}
          name={cat}
          active={currentSlug === slug(cat)}
        />
      ))}
    </div>
  );
};

export default Categories;
