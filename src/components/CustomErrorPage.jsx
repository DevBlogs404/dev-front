import React from 'react'
import { Link } from 'react-router-dom';
import { BiError, BsArrowLeft } from "react-icons/all";

const CustomErrorPage = ({ title, description }) => {
  return (
    <div className="flex flex-col h-[100vh] gap-5 items-center justify-center md:flex-row">
      <h2 className="text-4xl md:text-6xl font-bold text-pink-500 align-bottom">{title}</h2>
      <div className="hidden md:block md:w-1 md:h-16 md:bg-gray-500"></div>
      <div className="flex flex-col gap-5 items-center justify-center">
        {/* <BiError size={50} className="text-pink-500" /> */}
        <h2 className="text-4xl text-center md:text-6xl font-bold text-pink-500">
          {description}
        </h2>
      </div>
      <div className='w-full flex gap-4 items-center justify-center  absolute bottom-32 md:bottom-64'>
        <BsArrowLeft  size={20} />
         <Link to="/">Go Back to Home Page</Link>
         </div>
    </div>
  )
}

export default CustomErrorPage