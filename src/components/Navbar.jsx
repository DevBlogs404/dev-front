import React from 'react'
import {Link,useNavigate} from 'react-router-dom';
import {BiUser,BiSearch,BiHeart,BiCart} from 'react-icons/all';
import logo from '../assets/Logo.png'

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className='w-full h-20 flex items-center justify-between p-4 shadow-md'>
        <div>
            <img src={logo} alt="logo" className='w-20 object-cover bg-red-300' />
        </div>
        <div className='sm:hidden md:flex items-center justify-center gap-8 h-full'>
            <Link to='/' className='text-black text-lg hover:text-pink-400'>Home</Link>
            <Link to='/shop' className='text-black text-lg hover:text-pink-400'>Shop</Link>
            <Link to='/blogs' className='text-black text-lg hover:text-pink-400'>Blogs</Link>
            <Link to='/about' className='text-black text-lg hover:text-pink-400'>About</Link>
            <Link to='/contact' className='text-black text-lg hover:text-pink-400'>Contact</Link>
        </div>
        <div className='flex items-center justify-center gap-6 h-full mx-4'>
            <span className='text-pink-400 font-bold cursor-pointer' onClick={()=>navigate('/SignIn')}><BiUser className='inline-block text-pink-400 mr-2' size={20} />Login/Register</span>
             <span><BiSearch className='inline-block text-pink-400' size={20}  /></span>
            <span><BiCart className='inline-block text-pink-400' size={20} /></span>
            <span><BiHeart className='inline-block text-pink-400'size={20}  /></span>
        </div>
    </div>
  )
}

export default Navbar