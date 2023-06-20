import React from 'react'
import aboutImage from '../assets/aboutImage.png'
const About = () => {
  return (
    <div className='flex flex-col h-full gap-2 p-2  md:flex-row md:gap-10'>
    <div className='flex-1 h-full p-20'>
     <h1 className='text-5xl font-extrabold'>ABOUT US.</h1>
     <p className='mt-10 text-lg' style={{color:"#737373",lineHeight:"24px",maxWidth:"70%"}}>
     Avira caters to thoughtful shoppers who appreciate unique designs and top quality pieces you just can’t find elsewhere. We are constantly curating fresh new collections and looking for the next big thing our customers will love. Founded in Vienna in 2019, we are proud to be your Online Clothing Shop that you can rely on for our expert service and care.
     </p>
     <p className='mt-6 text-lg ' style={{color:"#737373",lineHeight:"24px",maxWidth:"70%"}}>
     We are here to serve you and make sure you find the Perfect Look for every occasion. Our passion for fashion is the reason why we are here. We absolutely love what we do, and our goal is to help our customers by providing them with unique outfit and accessories that make them stand-out from the crowd.
     </p>
     <div className='w-3/4 flex items-center justify-between gap-4 mt-20'>
        <div>
        <p className='font-extrabold text-5xl'>50k+</p>
        <p className='font-extrabold text-xl text-pink-400 mt-4'>Happy Customers</p>
        </div>
        <div>
        <p className='font-extrabold text-5xl'>60+</p>
        <p className='font-extrabold text-xl text-pink-400 mt-4'>Partners</p>
        </div>
        <div>
        <p className='font-extrabold text-5xl'>5+</p>
        <p className='font-extrabold text-xl text-pink-400 mt-4'>Years of Trust</p>
        </div>
     </div>
    </div>
    <div>
    <img src={aboutImage} alt="aboutImage" />
    </div>
     </div>
  )
}

export default About
