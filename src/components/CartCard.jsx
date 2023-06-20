// import React from 'react'
// import prdct1 from "../assets/prdct1.png";
// import { BiCheckCircle } from 'react-icons/bi'
// import {ImCross} from 'react-icons/all'

// const CartCard = (items) => {
  
//   return (
//         <div className='h-full w-full md:w-5/6 mt-8 mx-auto'>
//     <div className='flex flex-col items-center p-2 h-full rounded-lg border-2 gap-2 md:flex-row md:p-4 md:gap-8'>
//         <img src={prdct1} alt="" className='object-cover rounded-lg' style={{width:'200px',height:'250px'}} />
//         <div className='h-full w-full flex flex-col gap-4 md:gap-6'>
//             <div className='flex items-center justify-between'>
//             <h3 className='font-bold text-xl'>{items.name}</h3>
//             <ImCross />
//                 </div>
//             <p>{items.desc}</p>
//             <div className='flex gap-4'>
//             <span className='bg-gray-200 px-2 font-bold'>Size:S</span>
//             <span className='bg-gray-200 px-2 font-bold'>Qty:1</span>
//             </div>
//             <p>Rs.{items.price}</p>
//             <div className='flex items-center gap-2 '><BiCheckCircle size={20} color='green' /> <small>Delivery by</small><span className='font-bold'> 8th June,2023</span></div>
//         </div>
//     </div>
// </div>
//   )
// }

// export default CartCard