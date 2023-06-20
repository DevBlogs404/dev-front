import React, { useState, useEffect } from 'react'
import {useNavigate} from 'react-router-dom'
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi'
// import prdct1 from "../assets/prdct1.png";
import {BsTruck} from 'react-icons/all'
// import CartCard from '../components/CartCard';
import { useSelector, useDispatch } from 'react-redux';
import {ImCross} from 'react-icons/all'
import { BiCheckCircle } from 'react-icons/bi'
import { remove, totalPrice } from '../store/cartSlice';


const Cart = () => {
    const navigate = useNavigate()
    const cart = useSelector((state)=> state.cart)
    // console.log(cart);
    const dispatch = useDispatch()
    const [discount,setDiscount] = useState(100);
    const [delCharge,setDelCharge] = useState("Free");

    useEffect(() => {
     dispatch(totalPrice())
    }, [cart])
    
    
    const removeItem = (itemId)=>{
        dispatch(remove(itemId))
    }

    // function add(arr){
    //     for (let i = 0; i < arr.length; i++) {
    //         if(arr.length === 1){
    //             return arr[i]
    //         }else{
    //         const sum = arr[i] + arr[i+1]
    //         return sum
    //     }
    //     }
    // }
    // let totalMRP = cart.cartItems.map(item=> item.price)
    // totalMRP =  add(totalMRP)
    // console.log(totalMRP);

    const totalQuantity = cart.cartTotalQuantity
    const totalItemsPrice = cart.cartTotalAmount
    const totalAmount = totalItemsPrice - discount

    // const totalPrice = totalMRP - discount
    
  return (
    <div className='w-full h-full p-4 flex flex-col gap-4 items-center justify-between md:flex-row md:p-10 md:gap-0'>
        <div className='w-full h-full md:w-1/2'>
            <div className='flex items-center'>
                <BiLeftArrowAlt size={40} className='cursor-pointer' onClick={()=> navigate('/products')} />
                <span className='font-bold uppercase text-xl'>Order Summary - {totalQuantity} items</span>
            </div>

            {cart.cartItems.map((item)=>{
                return (
                    <div className='h-full w-full md:w-5/6 mt-8 mx-auto' key={item._id}>
    <div className='flex flex-col items-center p-2 h-full rounded-lg border-2 gap-2 md:flex-row md:p-4 md:gap-8'>
        <img src={item.photo.data} alt="" className='object-cover rounded-lg' style={{width:'200px',height:'250px'}} />
        <div className='h-full w-full flex flex-col gap-4 md:gap-6'>
            <div className='flex items-center justify-between'>
            <h3 className='font-bold text-xl'>{item.name}</h3>
            <button onClick={()=>removeItem(item._id)}><ImCross /></button>
                </div>
            <p>{item.desc}</p>
            <div className='flex gap-4'>
            <span className='bg-gray-200 px-2 font-bold'>Size:S</span>
            <span className='bg-gray-200 px-2 font-bold'>Qty:{item.cartQuantity}</span>
            </div>
            <p>Rs.{item.price}</p>
            <div className='flex items-center gap-2 '><BiCheckCircle size={20} color='green' /> <small>Delivery by</small><span className='font-bold'> 8th June,2023</span></div>
        </div>
    </div>
</div>
                )
            })}

        </div>

        {/* vertical divider */}
        {/* <div className=' h-full w-10 bg-yellow-200'>
            <span className='h-full w-10 bg-red-500'></span>
        </div> */}

        <div className='w-full h-full md:w-1/2'>
            <div className='w-4/5 flex flex-col gap-6 md:gap-10 mx-auto'>
                <div className='w-full h-20 bg-gray-100 rounded-md flex items-center justify-center'>
                    <BsTruck size={40} className='mr-4' />
                    <span>{delCharge === "Free" ? "Yay! No Delivery Charge On This Order." : "Delivery Charges Applied!"}</span>
                </div>
                <div className='flex flex-col gap-8'>
                    <h3 className='font-bold uppercase text-xl'>Price Details({totalQuantity} items)</h3>
                    <div className='flex items-center justify-between'>
                        <span>Total MRP</span>
                        <span>Rs {totalItemsPrice}</span>
                    </div>
                    <div className='flex items-center justify-between'>
                        <span>Discount on MRP</span>
                        <span className='text-green-500'>-Rs {discount}</span>
                    </div>
                    <div className='flex items-center justify-between'>
                        <span>Delivery Charge</span>
                        <span className='text-green-500'>{delCharge}</span>
                    </div>
                    <hr />
                    <div className='flex items-center justify-between'>
                        <span className='font-bold text-lg'>Total Amount</span>
                        <span className='text-pink-500'>Rs {totalAmount <=0 ? 0 :totalAmount }</span>
                    </div>
                    <button className='w-full h-14 rounded-lg bg-black text-white text-xl flex items-center justify-center'>Place Order<BiRightArrowAlt size={30} className='ml-4' /></button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cart