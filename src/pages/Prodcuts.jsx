import React, { useState,useEffect } from 'react'
// import Product from '../components/Product'
// import { useNavigate} from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { add } from "../store/cartSlice";
import { BsStarFill, BsHeartFill, BsHeart } from "react-icons/all";
import { STATUS, fetchProducts } from '../store/productSlice';


const Prodcuts = () => {
  const dispatch = useDispatch();
  const [notLiked, setNotLiked] = useState(true);
  const [addToCart, setAddToCart] = useState(true);

  const {data:products,status} = useSelector((state)=> state.product)

  useEffect(() => {
    dispatch(fetchProducts())
  //   const fetchProducts = async ()=> {
  //     let data = await fetch("http://localhost:6969/products")
  //     data = await data.json()
  //     setProducts(data)
  //     console.log(data);
  // }
  // fetchProducts()
  },[])

  const addItem = (item)=>{
    dispatch(add(item))
  }

  if(status === STATUS.LOADING){
    return <h2 className='text-4xl text-pink-500 flex w-full h-full items-center justify-center'>LOADING....</h2>
  }
  if(status === STATUS.ERROR){
    return <h2 className='text-4xl text-pink-500 flex w-full h-full items-center justify-center'>Something went wrong....</h2>
  }

  return (
    <div className='flex flex-col  w-full h-full gap-4 p-8 md:flex-row md:items-center md:justify-center md:flex-wrap md:gap-4 md:p-10'>
      {
        products.map((product)=>{
         return(<div className="h-30 flex flex-col items-center justify-center" key={product._id}>
         <div className=" w-30 bg-green-300 relative rounded-lg transition-all hover:-translate-y-2 hover:-translate-x-2">
           <img src={`data:image/png;b_64,${product.photo.data}`} alt="prdct1" className="h-full rounded-lg object-cover" />
           <div className="absolute bottom-4 left-4 flex gap-1 items-center justify-center">
             <BsStarFill color="#FFCE31" className="inline-block" />
             <span className="text-sm">{product.rating}</span>
           </div>
           <div
             className="absolute bottom-4 right-4 cursor-pointer"
             onClick={() => (notLiked ? setNotLiked(false) : setNotLiked(true))}
           >
             {notLiked ? (
               <BsHeart color="rgb(244 114 182) " className="inline-block" />
             ) : (
               <BsHeartFill color="rgb(244 114 182) " className="inline-block" />
             )}
           </div>
         </div>
         <div className="flex flex-col w-30 gap-2 my-2">
           <h3 className="font-semibold text-xl">{product.name}</h3>
           <p className="text-gray-500">{product.desc}</p>
           <div>
             <span className="font-bold text-pink-400">{product.price}</span>
           </div>
         </div>
         <button className="p-2 w-40 bg-black text-white rounded-lg font-bold" onClick={()=>addItem(product)}>
           Add to Cart
         </button>
       </div>)  
        })
      } 
      
    </div>
  )
}

export default Prodcuts






  {/* <Product name={"Green high-neck green sweater"} price={"Rs. 2299"} rating={"4.9"} />
        <Product name={"Green high-neck green sweater"} price={"Rs. 2299"} rating={"4.9"} />
        <Product name={"Green high-neck green sweater"} price={"Rs. 2299"} rating={"4.9"} />
        <Product name={"Green high-neck green sweater"} price={"Rs. 2299"} rating={"4.9"} />
        <Product name={"Green high-neck green sweater"} price={"Rs. 2299"} rating={"4.9"} />
        <Product name={"Green high-neck green sweater"} price={"Rs. 2299"} rating={"4.9"} />
        <Product name={"Green high-neck green sweater"} price={"Rs. 2299"} rating={"4.9"} />
        <Product name={"Green high-neck green sweater"} price={"Rs. 2299"} rating={"4.9"} />
        <Product name={"Green high-neck green sweater"} price={"Rs. 2299"} rating={"4.9"} />
        <Product name={"Green high-neck green sweater"} price={"Rs. 2299"} rating={"4.9"} />
        <Product name={"Green high-neck green sweater"} price={"Rs. 2299"} rating={"4.9"} />
        <Product name={"Green high-neck green sweater"} price={"Rs. 2299"} rating={"4.9"} />
        <Product name={"Green high-neck green sweater"} price={"Rs. 2299"} rating={"4.9"} /> */}