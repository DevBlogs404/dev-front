import React from 'react'
import aboutImage from '../assets/aboutImage.png'
const About = () => {
  return (
    <div className='flex flex-col h-[90vh] gap-2 p-2  lg:flex-row lg:gap-10'>
    <div className='flex-1 w-full bg-aboutBg bg-cover bg-center bg-no-repeat items-center h-full p-8 md:items-center md:justify-center lg:bg-none lg:p-16'>
     <h1 className='text-5xl text-center font-extrabold md:text-left'>ABOUT US.</h1>
     <p className='w-full mt-10 text-definedGrey text-lg break-words  md:max-w-[70%]' style={{lineHeight:"24px"}}>
     Avira caters to thoughtful shoppers who appreciate unique designs and top quality pieces you just can’t find elsewhere. We are constantly curating fresh new collections and looking for the next big thing our customers will love. Founded in Vienna in 2019, we are proud to be your Online Clothing Shop that you can rely on for our expert service and care. <br />
     We are here to serve you and make sure you find the Perfect Look for every occasion. Our passion for fashion is the reason why we are here. We absolutely love what we do, and our goal is to help our customers by providing them with unique outfit and accessories that make them stand-out from the crowd.
     </p>
     <div className='w-full flex flex-row items-center justify-center gap-4  md:gap-10 md:w-4/5 md:mt-20'>
        <div>
        <p className='font-extrabold text-2xl md:text-5xl'>50k+</p>
        <p className='font-extrabold text-xl text-pink-400 mt-4'>Happy Customers</p>
        </div>
        <div>
        <p className='font-extrabold text-2xl md:text-5xl'>60+</p>
        <p className='font-extrabold text-xl text-pink-400 mt-4'>Partners</p>
        </div>
        <div>
        <p className='font-extrabold text-2xl md:text-5xl'>5+</p>
        <p className='font-extrabold text-xl text-pink-400 mt-4'>Years of Trust</p>
        </div>
     </div>
    </div>
    <div className='hidden md:block flex-1 md:w-full md:h-full'>
    <img src={aboutImage} className='w-full h-full object-cover' alt="aboutImage" />
    </div>
     </div>
  )
}

export default About
