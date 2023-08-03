import React from 'react'
import { useNavigate } from "react-router-dom";

const SquareCategoryCard = ({title,imageUrl}) => {
  const navigate = useNavigate();

  const handleClick =()=>{
    navigate(`/products/${title.toLowerCase()}`)
  }
  return (
    <div
    className="flex-1 relative md:cursor-pointer"
    onClick={handleClick}
  >
    <img
      src={imageUrl}
      alt="accessories"
      className="w-full h-full object-cover"
    />
    <div className="absolute top-6 left-6">
      <div className="text-lg mt-2 font-bold bg-[rgb(255,255,255,0.3)] pointer-events-none p-2 px-4  md:text-xl">
        {title}
      </div>
    </div>
  </div>
     
  )
}

export default SquareCategoryCard