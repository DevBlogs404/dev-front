import React from 'react'
import { BiError } from "react-icons/all";

const CustomErrorPage = () => {
  return (
    <div className="flex flex-col h-[100vh] gap-5 items-center justify-center md:flex-row">
        <h2 className="text-4xl md:text-6xl font-bold text-pink-500 align-bottom">404</h2>
        <div className="hidden md:block md:w-1 md:h-16 md:bg-gray-500"></div>
        <div className="flex items-center justify-center">
        {/* <BiError size={50} className="text-pink-500" /> */}
        <h2 className="text-4xl text-center md:text-6xl font-bold text-pink-500">
        Something went wrong
        </h2>
      </div>
      </div>
  )
}

export default CustomErrorPage