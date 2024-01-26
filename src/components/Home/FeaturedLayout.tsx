import Link from "next/link";
import React from "react";

const FeaturedLayout = ({ nameBlog }: { nameBlog: any }) => {
  return (
    <section className="grid items-center gap-5 md:grid-cols-2">
      <div className="col-span-1">
        <div className="sm:mx-0">
          <Link aria-label={`Image of ${nameBlog.title}`} href={nameBlog.url}>
            <div className="relative pt-[52.5%]">
              <img
                alt={`Image of ${nameBlog.title}`}
                loading="lazy"
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
                src={`${nameBlog.image?.filePath.replace(
                  "../public",
                  ""
                )}?w=1600&amp;h=840&amp;fit=crop&amp;crop=entropy&amp;auto=compress,format&amp;format=webp`}
              />
            </div>
          </Link>
        </div>
      </div>
      <div className="col-span-1 flex flex-col gap-2">
        <h1 className="text-lg font-semibold leading-tight text-slate-800 dark:text-neutral-50">
          <a
            className="hover:text-primary hover:underline"
            href={nameBlog.url}
          >
            {nameBlog.title}
          </a>
        </h1>
        <a href={nameBlog.url}>
          <p className="text-md leading-snug text-slate-500 dark:text-neutral-400">
            {nameBlog.description.slice(0, 103)}...
          </p>
        </a>
      </div>
    </section>
  );
};

export default FeaturedLayout;
