import React from 'react'
import prdct1 from '../assets/prdct1.png'
import {BsStarFill,BsHeartFill} from 'react-icons/all'

const Product = (props) => {
  return (
    <div className='h-30 flex flex-col items-center justify-center'>
        <div className=' w-30 bg-green-300 relative'>
          <img src={prdct1} alt="prdct1" className='h-full object-cover' />
          <div className='absolute bottom-4 left-4 flex gap-1 items-center justify-center'>
          <BsStarFill color='#FFCE31' className='inline-block' />
          <span className='text-sm'>{props.rating}</span>
          </div>
          <div className='absolute bottom-4 right-4'>
          <BsHeartFill color='rgb(244 114 182) ' className='inline-block' />
          </div>
        </div>
        <div className='flex flex-col w-30 gap-2 my-2'>
          <h3 className='font-semibold text-xl'>Zara</h3>
          <p className='text-gray-500'>{props.name}</p>
          <div>
          {/* <span className='font-bold mr-2'>2999</span> */}
          <span className='font-bold text-pink-400'>{props.price}</span>
          </div>
        </div>
        <button className='p-2 w-40 bg-black text-white rounded-lg font-bold'>Add to Cart</button>
    </div>
  )
}

export default Product