import React from 'react'
import HomeCoverSection from "@/src/components/Home/HomeCoverSection";
import { allBlogs, Blog } from "@/.contentlayer/generated";

const FeaturedPosts = () => {
    const maxFeaturedBlogs = 4;

    const featuredBlogs = allBlogs.filter((blog) => blog.jfkFeatured === true).slice(0, maxFeaturedBlogs);

  return (
    <div>
            <HomeCoverSection blogs={allBlogs} featuredBlogs={featuredBlogs} />
    
    </div>
  )
}

export default FeaturedPosts