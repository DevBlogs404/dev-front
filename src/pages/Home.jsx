import React from 'react';
import image1 from '../assets/image1.png';
import image6 from '../assets/image6.png';
import image9 from '../assets/image9.png';
import image10 from '../assets/image10.png';
import {BsArrowRight} from 'react-icons/all'

const Home = () => {
  return (
    <div className='w-full h-full p-10'>
        <div className='grid grid-cols-1 w-full  md:grid-cols-3 grid-rows-2 gap-4 '>
            <div className='row-span-2 relative'>
                <img src={image1} alt="image1" className='w-full h-full object-cover' />
                <div className='absolute top-6 left-6'>
                <span className='text-pink-400 font-bold'>Brand's Everyone Crushing on</span>
                <div className='text-lg mt-2 font-bold md:text-xl'>Explore All<BsArrowRight className='inline-block ml-2' size={28} /></div>
                </div>
            </div>
            <div className='col-span-2 relative'>
            <img src={image6} alt="image6" className='w-full h-full object-cover shadow-sm'  />
            <div className='absolute top-6 left-6'>
                <span className='text-pink-400 font-bold'>100 items</span>
                <div className='text-lg mt-2 font-bold md:text-xl'>Footwear<BsArrowRight className='inline-block ml-2' size={28} /></div>
                </div>
            </div>
            <div className=' col-span-2 grid grid-cols-2 gap-4'>
            <div className='w-full relative'>
            <img src={image10} alt="image10" className='w-full h-full object-cover' />
            <div className='absolute top-6 left-6'>
                <span className='text-pink-400 font-bold'>345 items</span>
                <div className='text-lg mt-2 font-bold md:text-xl'>Sweaters<BsArrowRight className='inline-block ml-2' size={28} /></div>
                </div>
            </div>
            <div className='relative'>
            <img src={image9} alt="image9" className='w-full h-full object-cover' />
            <div className='absolute top-6 left-6'>
                <span className='text-pink-400 font-bold'>230 items</span>
                <div className='text-lg mt-2 font-bold md:text-xl'>Denims<BsArrowRight className='inline-block ml-2' size={28} /></div>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Home