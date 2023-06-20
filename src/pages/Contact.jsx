import React from 'react'
import {BiLocationPlus,IoCall,BsClock,BiMessage,BsInstagram,FaFacebook,BsTwitter} from 'react-icons/all'
import draw from '../assets/draw.png'

const Contact = () => {
  return (
    <div className='flex flex-col h-full gap-2 p-2 relative md:flex-row md:p-10 md:gap-10'>
   <div className='flex-1 h-full '>
    <form action="" method='post' className='flex p-6 flex-col items-center justify-center gap-8 md:p-20'>
        <h1 className='w-full text-left text-2xl font-semibold'>CONTACT US</h1>
        <p className='w-full text-left'>Feel free to contact us any time. We will get back to you as soon as we can</p>
        <input type="text" name="name" id="name" placeholder='Name' className='p-2 rounded-lg text-black bg-gray-200 w-full' />
        <input type="email" name='email' id='email' placeholder='Email' className='p-2 rounded-lg text-black bg-gray-200 w-full' />
        <textarea style={{resize:'none'}} name="message" id="message" cols="30" rows="8" placeholder='Message' className='w-full rounded-lg bg-gray-200 text-black p-2' spellCheck={true}></textarea>
        <button type='button' className='bg-black w-full text-white p-2 rounded-lg'>Send</button>
    </form>
   </div>
   <div className='flex-1 bg-pink-400 flex items-start justify-center p-10 flex-col gap-4 md:my-20 md:gap-8 md:p-20'>
    <div className='flex gap-6 md:gap-10'>
    <BiLocationPlus size={20}  className='inline-block text-white'/>
    <span className='text-white'> 14 Green Road St.</span>
    </div>
    <div className='flex gap-6 md:gap-10'>
    <IoCall size={20}  className='inline-block text-white'/>
    <span  className='text-white'>14 Green Road St.</span>
    </div>
    <div className='flex gap-6 md:gap-10'>
    <BiMessage size={20}  className='inline-block text-white'/>
    <span  className='text-white'>avira@getinfo.com</span>
    </div>
    <div className='flex gap-6 md:gap-10'>
    <BsClock size={20}  className='inline-block text-white'/>
    <span  className='text-white'>Mon-Fri:9:00AM-8:00PM</span>
    </div>
    <div className='flex gap-6 md:gap-10'>
        <BsInstagram size={20}  className='inline-block text-white'/>
        <BsTwitter size={20}  className='inline-block text-white'/>
        <FaFacebook  size={20} className='inline-block  text-white'/>
    </div>
   </div>
   <img src={draw} alt="kit" className='hidden md:block absolute bottom-0 right-0' />
    </div>
  )
}

export default Contact