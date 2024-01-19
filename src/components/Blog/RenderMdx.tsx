"use client"
import React from 'react'
import { useMDXComponent } from 'next-contentlayer/hooks'
import Image from 'next/image'


const mdxComponents = {
    Image
}

const RenderMdx = ({blog}: {blog: any}) => {

    const MDXContent = useMDXComponent(blog.body.code)

  return (
    <div className='col-span-12
    lg:col-span-8
    font-in prose sm:prose-base md:prose-lg max-w-max
    prose-blockquote:bg-primary/20 
    prose-blockquote:p-2
    prose-blockquote:px-6
    prose-blockquote:border-primary
    prose-blockquote:not-italic
    prose-blockquote:rounded-r-lg

    prose-li:marker:text-primary

    dark:prose-invert
    dark:prose-blockquote:border-primary
    dark:prose-blockquote:bg-primary/20
    dark:prose-li:marker:text-primary

    first-letter:text-3xl
    sm:first-letter:text-5xl'>
        <MDXContent components={mdxComponents}/>
    </div>
  )
}

export default RenderMdx