import React, { useEffect, useState, lazy, Suspense, useMemo, useCallback } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../store/cartSlice";
import {
  STATUS,
  fetchProducts,
  fetchProductsByCategory,
} from "../store/productSlice";
import { Toaster, toast } from "react-hot-toast";
import { BiSearch, GiDress } from "react-icons/all";
import { addItemToWishList } from '../store/wishListSlice'
import Loading from "../components/Loading";
const ProductCard = lazy(() => import('../components/ProductCard'))
const CustomErrorComponent = lazy(() => import('../components/CustomErrorComponent'))


const Products = () => {
  const [search, setSearch] = useState("");
  const { category } = useParams();
  const dispatch = useDispatch();

  const { data: products } = useSelector((state) => state.product);
  const status = useSelector((state) => state.product.status)

  useEffect(() => {
    category === "all"
      ? dispatch(fetchProducts())
      : dispatch(fetchProductsByCategory(category));
  }, [category, dispatch]);

  const onchange = (e) => {
    setTimeout(() => {
     setSearch(e.target.value);
    }, 1000);
   };

  // debouncing implemented
  useEffect(() => {
    const timeout  = onchange  
    return () => clearTimeout(timeout)
  }, [search])


  const addItem = (item) => {
    dispatch(addItemToCart(item)) && toast.success(`${item.title} added to Cart`);
  };

  const addItemsToWishList = (item) => {
    dispatch(addItemToWishList(item)) && toast.success(`${item.title} added to WishList `);
  }

  const filteredProducts = search ? products.filter((products)=>
    products.title.toLowerCase().includes(search.toLowerCase())
  ) : products ;


  if (status === STATUS.LOADING) {
    return (
      <div className=" flex flex-col w-100 h-[100vh] items-center justify-center">
        <GiDress size={50} className=" text-pink-500 animate-bounce" />
        <h2 className="text-4xl text-pink-500">
          LOADING....
        </h2>
      </div>

    );
  }
  if (status === STATUS.ERROR) {
    return (
      <Suspense fallback={<Loading />}>
        <CustomErrorComponent title={"404"} description={"Something went wrong"} />
      </Suspense>
    );
  }

  return (
    <div className="flex flex-col w-full h-full gap-6 p-6 md:flex-row md:items-center md:justify-center md:flex-wrap md:gap-10 md:p-10">
      <div className="flex items-center justify-center w-full">
        <div className="w-full flex items-center justify-center relative md:w-3/4">
          <input
            className="p-4 w-full bg-gray-200 text-pink text-xl rounded-2xl outline-none border-none  hover:bg-pink-200 hover:text-black"
            type="text"
            id="search"
            name="search"
            placeholder="Search product...."
            onChange={(e)=>onchange(e)
            }
          />
          <div className="absolute top-3.5 right-3.5">
            <BiSearch size={30} className=" text-pink-400" />
          </div>
        </div>
      </div>


      <Suspense fallback={<Loading />}>
        {/* {products
          ?.filter(
            (product) =>
              product.title.toLowerCase().includes(search)
          )
          .map((product) => (
            <ProductCard
              product={product}
              addToCart={addItem}
              addItemToWishList={addItemsToWishList}
              key={product._id}
            />
          ))} */}
          {filteredProducts
          .map((product) => (
            <ProductCard
              product={product}
              addToCart={addItem}
              addItemToWishList={addItemsToWishList}
              key={product._id}
            />
          ))}
      </Suspense>
      <Toaster position="bottom-center" />
    </div>
  );
};

export default Products;
