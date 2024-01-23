import { slug } from "github-slugger";
import React from "react";
import Category from "./Category";

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
    <div className="px-0 text-light border-solid border-zinc-500 py-4 flex items-start flex-wrap font-medium">
      {categories.map((cat: any) => (
        <Category
          key={cat}
          link={`/categories/${cat}`}
          name={cat}
          active={currentSlug === slug(cat)}
          extraClassName={extraClassnames[cat]}
        />
      ))}
    </div>
  );
};

export default Categories;
