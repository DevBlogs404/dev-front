import React from 'react'
import mens from '../assets/men.png'
import women from '../assets/women.png'
import shoes from '../assets/shoes.png'
import kids from '../assets/kids.png'
import accessories from '../assets/accessories.png'
import beauty from '../assets/beauty.png'
import {BsArrowRight} from 'react-icons/all'
import { useNavigate } from 'react-router-dom'

const Shop = () => {
  const navigate = useNavigate();
  return (
    <>
    <div className='w-full h-full mx-5 md:mx-10'>
      <div className='flex flex-col w-full gap-4 mt-2 md:mt-6'>
        <div className='uppercase font-semibold'>Shop by Category</div>
        <div className='sm:grid grid-cols-1 gap-4 w-full h-80  md:grid-cols-4' onClick={()=>navigate('/products')}>
          <div className='w-full h-full relative'>
                <img src={mens} alt="mens" className='w-full h-full object-cover' />
                <div className='absolute bottom-6 left-6'>
                <div className='text-lg mt-2 font-bold bg-white p-2 px-4 md:text-xl'>Mens</div>
                </div>
          </div>
          <div className=' w-full h-full relative'>
                <img src={women} alt="womens" className='w-full h-full object-cover' />
                <div className='absolute bottom-6 left-6'>
                <div className='text-lg mt-2 font-bold bg-white p-2 px-4 md:text-xl cursor-pointer'>Womens</div>
                </div>
          </div>
          <div className='flex flex-col gap-4 h-full'>
            <div className='flex-1 relative'>
            <img src={accessories} alt="accessories" className='w-full h-full object-cover' />
            <div className='absolute bottom-6 left-6'>
                <div className='text-lg mt-2 font-bold bg-white p-2 px-4 md:text-xl'>accessories</div>
                </div>
            </div>
            <div className='flex-1 relative'>
              <img src={shoes} alt="shoes" className='w-full h-full object-cover' />
              <div className='absolute top-6 left-6'>
                <div className='text-lg mt-2 font-bold bg-white p-2 px-4 md:text-xl'>shoes</div>
                </div>
            </div>
          </div>
          <div className='flex flex-col gap-4 h-full'>
            <div className='flex-1 relative'>
            <img src={kids} alt="kids" className='w-full h-full object-cover' />
            <div className='absolute bottom-6 left-6'>
                <div className='text-lg mt-2 font-bold bg-white p-2 px-4 md:text-xl'>accessories</div>
                </div>
            </div>
            <div className='flex-1 relative'>
              <img src={beauty} alt="beauty" className='w-full h-full object-cover' />
              <div className='absolute top-6 left-6'>
                <div className='text-lg mt-2 font-bold bg-white p-2 px-4 md:text-xl'>shoes</div>
                </div>
            </div>
          </div>
        </div>
      </div>
   </div>
   </>
  )
}

export default Shop