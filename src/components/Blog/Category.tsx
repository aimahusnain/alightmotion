import { cx } from "@/src/utils";
import Link from "next/link";
import React from "react";

interface CategoryProps {
  link?: string;
  name: string;
  active?: boolean;
  className?: string;
}

const Category: React.FC<CategoryProps> = ({
  link = "#",
  name,
  active,
  ...props
}) => {
  return (
    <Link
      href={link}
      className={cx(
        "inline-block py-1.5 md:py-2 px-6 md:px-10 rounded-full border-2 border-solid border-dark dark:border-light hover:scale-105 transition-all ease duration-200 m-2",
        props.className,
        active ? "bg-primary text-light" : "bg-black text-light"
      )}
    >
      #{name}
    </Link>
  );
};

export default Category;
