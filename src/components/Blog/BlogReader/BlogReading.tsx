import React from 'react'
import BlogReaderImage from './image'
import BlogContent from './BlogContent'
import Footer from '../../Footer'

const BlogReading = ({parmy, blogy}: {parmy: any, blogy: any}) => {
  return (
    <div className='sm:mx-64 mx-0 mt-5 flex items-center flex-col text-left'>
        <BlogReaderImage parmy={parmy} />
        <BlogContent parmy={parmy} blogy={blogy} />
    </div>
  )
}

export default BlogReading