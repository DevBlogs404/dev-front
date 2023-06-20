// import React, { useState } from "react";
// import prdct1 from "../assets/prdct1.png";
// import { useDispatch } from "react-redux";
// import { add } from "../store/cartSlice";
// import { BsStarFill, BsHeartFill, BsHeart } from "react-icons/all";

// const Product = (product) => {
//   const dispatch = useDispatch();
//   const [notLiked, setNotLiked] = useState(true);
//   const [addToCart, setAddToCart] = useState(true);

//   const sendToCart = (product)=>{
//     dispatch(add(product))
//   }
//   return (
//     <div className="h-30 flex flex-col items-center justify-center">
//       <div className=" w-30 bg-green-300 relative rounded-lg transition-all hover:-translate-y-2 hover:-translate-x-2">
//         <img src={`data:image/png;b_64,${product.photo}`} alt="prdct1" className="h-full rounded-lg object-cover" />
//         <div className="absolute bottom-4 left-4 flex gap-1 items-center justify-center">
//           <BsStarFill color="#FFCE31" className="inline-block" />
//           <span className="text-sm">{product.rating}</span>
//         </div>
//         <div
//           className="absolute bottom-4 right-4 cursor-pointer"
//           onClick={() => (notLiked ? setNotLiked(false) : setNotLiked(true))}
//         >
//           {notLiked ? (
//             <BsHeart color="rgb(244 114 182) " className="inline-block" />
//           ) : (
//             <BsHeartFill color="rgb(244 114 182) " className="inline-block" />
//           )}
//         </div>
//       </div>
//       <div className="flex flex-col w-30 gap-2 my-2">
//         <h3 className="font-semibold text-xl">{product.name}</h3>
//         <p className="text-gray-500">{product.desc}</p>
//         <div>
//           {/* <span className='font-bold mr-2'>2999</span> */}
//           <span className="font-bold text-pink-400">{product.price}</span>
//         </div>
//       </div>
//       <button className="p-2 w-40 bg-black text-white rounded-lg font-bold" onClick={()=>sendToCart(product)}>
//         Add to Cart
//       </button>
//     </div>
//   );
// };

// export default Product;