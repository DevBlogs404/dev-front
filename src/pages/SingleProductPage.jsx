import React,{useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import  {addItemToCart}  from '../store/cartSlice';
import { fetchSingleProduct } from '../store/productSlice'
import {useParams} from 'react-router-dom'
import { toast, Toaster } from 'react-hot-toast';
import ProductCard from '../components/ProductCard';

const SingleProductPage = () => {
  const { urlId } = useParams()
  console.log(urlId);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchSingleProduct(urlId))
  }, [urlId]);

  const {data:products} = useSelector((state) => state.product);
    console.log(products);

  const addItem = (item) => {
    dispatch(addItemToCart(item));
    toast.success(`${item.title} added successfully`);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {
        products?.map((product)=>{
           return(
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex justify-center items-center">
          <div className="w-full max-w-md">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
          <p className="text-lg mb-4">{product.description}</p>
          <p className="text-2xl font-bold mb-4">Price: ₹{product.price}</p>
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
            onClick={addItem}
          >
            Add to Cart
          </button>
        </div>
      </div>
           )
        })
      }
      <Toaster />
    </div>
  );
};

export default SingleProductPage;
