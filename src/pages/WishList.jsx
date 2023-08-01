import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addItemToCart } from "../store/cartSlice";
import { removeItemFromWishList, addItemToWishList } from "../store/wishListSlice";
import { Toaster, toast } from "react-hot-toast";
import WishListCard from "../components/WishListCard";
import CustomErrorPage from "../components/CustomErrorPage";

const WishList = () => {

  const wishList = useSelector((state) => state.wishList);
  const dispatch = useDispatch();

  // add item to cart
  const addItem = (item) => {
    dispatch(addItemToCart(item));
    toast.success(`${item.title} added successfully`);
  };

  // remove item from wishlist
  const removeItemsFromWish = (itemId) => {
    dispatch(removeItemFromWishList(itemId)) && toast.success(`successfully removed from WishList`);
  }
  

   // add item to wishlist
  const addItemsToWishList = (item) => {
    dispatch(addItemToWishList(item)) && toast.success(`${item.title} added to WishList `);
  }


  return (
    <div className="flex flex-col w-full h-full gap-6 p-6 md:flex-row md:items-center md:justify-center md:flex-wrap md:gap-10 md:p-10">
      {
          wishList.wishListItems > 0 ? wishList.wishListItems?.map((item) => {
          return (
            <WishListCard key={item._id} product={item} addToCart={addItem} addItemToWishList={addItemsToWishList} removeItem={removeItemsFromWish} />
          )
      }) : <CustomErrorPage title={"Oops"} description={"No items in WishList"} />
      }
      <Toaster position="bottom-center" />

    </div>
  )
}

export default WishList