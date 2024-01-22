import React from 'react'
import Footer from '../Footer'

const bgcolors = ({children}: {children: React.ReactNode}) => {
  return (
    <div>
      <div className="absolute z-[10] p-7 pt-20 w-full h-full">
        <div className="justify-center items-center flex flex-col gap-4">
          {children}
          <div className='w-full mx-8'>
          <Footer />
          </div>
        </div>
      </div>

      <img src="/bg.png" className="hidden md:block h-full w-full" alt="sdf" />

      <img
        src="/stars.png"
        alt=""
        className="hidden sm:block h-full w-full absolute top-[600px]"
      />
      <img
        src="/vertical_stars.png"
        alt=""
        className="sm:hidden h-full w-full absolute top-[500px]"
      />
    </div>
  )
}

export default bgcolors