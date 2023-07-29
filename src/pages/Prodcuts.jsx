import React, {useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../store/cartSlice";
import {
  STATUS,
  fetchProducts,
  fetchProductsByCategory,
} from "../store/productSlice";
import { Toaster, toast } from "react-hot-toast";
import { BiSearch } from "react-icons/all";
import ProductCard from "../components/ProductCard";


const Products = () => {
  const [search, setSearch] = useState("");
  const { category } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    category === "all"
      ? dispatch(fetchProducts())
      : dispatch(fetchProductsByCategory(category));
  }, [category, dispatch]);

  const { data: products, status } = useSelector((state) => state.product);

  const addItem = (item) => {
    dispatch(addItemToCart(item));
    toast.success(`${item.title} added successfully`);
  };

  if (status === STATUS.LOADING) {
    return (
      <h2 className="text-4xl text-pink-500 flex w-100 h-100 items-center justify-center">
        LOADING....
      </h2>
    );
  }
  if (status === STATUS.ERROR) {
    return (
      <h2 className="text-4xl text-pink-500 flex w-100 h-100 items-center justify-center">
        Something went wrong....
      </h2>
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
            onChange={(e) => setSearch(e.target.value.toLowerCase().trim())}
          />
          <div className="absolute top-3.5 right-3.5">
            <BiSearch size={30} className=" text-pink-400" />
          </div>
        </div>
      </div>
      {products
        ?.filter(
          (product) =>
            product.title.toLowerCase().includes(search) ||
            product.description.toLowerCase().includes(search)
        )
        .map((product) => (
            <ProductCard
            product={product}
            addToCart={addItem}
            key={product._id}
          />
        ))}
      <Toaster />
    </div>
  );
};

export default Products;
