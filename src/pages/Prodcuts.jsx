import React, { useEffect, useState } from 'react'
import { useParams} from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { add } from "../store/cartSlice";
import { STATUS, fetchProducts, fetchProductsByCategory } from '../store/productSlice';
import { Toaster} from 'react-hot-toast'
import ProductCard from '../components/ProductCard';


const Products = () => {
  const [search,setSearch] = useState('')
  const { category } = useParams()
  const dispatch = useDispatch();
  useEffect(() => {
    category === 'all' ? dispatch(fetchProducts()) : dispatch(fetchProductsByCategory(category))
    }
  ,[category,dispatch])
  const {data:products,status} = useSelector((state)=> state.product)
  // console.log(products);
  // console.log(category);

  
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
    <div className="flex flex-col w-full h-full gap-4 p-8 md:flex-row md:items-center md:justify-center md:flex-wrap md:gap-10 md:p-10">
      {/* <div className='flex flex-row items-center justify-center gap-4'>
        <label htmlFor="search">Search</label>
        <input className='p-2 bg-gray-400 text-black rounded-lg outline-none border-none hover:p-4 hover:bg-pink-200 hover:text-white' type="text" id='search' name='search' value={search} placeholder='Search product....' onChange={(e)=>setSearch(e.target.value.trim())} />
      </div> */}
      {products?.filter((product)=>product.title.toLowerCase().includes(search) || product.description.toLowerCase().includes(search)).map((product) => (
        <ProductCard product={product} addToCart={addItem} key={product._id} />
      ))}
      <Toaster />
    </div>
  );
};

export default Products;