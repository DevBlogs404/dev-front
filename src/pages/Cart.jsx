import React, {  useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import { BsTruck } from "react-icons/all";
import { useSelector, useDispatch } from "react-redux";
import { removeItemFromCart, totalPrice, clear } from "../store/cartSlice";
import { toast, Toaster } from "react-hot-toast";
import CartCard from "../components/CartCard";

const Cart = () => {
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const deliveryPrice = 40;
  const totalQuantity = cart.cartTotalQuantity;
  const totalItemsPrice = cart.cartTotalAmount;
  const totalDiscount = cart.cartTotalDiscount;
  const delivery = totalQuantity * deliveryPrice;
  const totalAmount = totalItemsPrice - totalDiscount + delivery;

  useEffect(() => {
    dispatch(totalPrice());
  }, [cart]);

  const removeItem = (itemId) => {
    dispatch(removeItemFromCart(itemId)) && toast.success("item removed successfully");
  };
  const clearCart = () => {
    dispatch(clear()) && localStorage.removeItem("cartItems") && toast.error("cart is empty") && navigate("/products/all");
  };

  return (
    <div className="w-full h-full p-4 flex flex-col gap-4 items-center justify-between md:flex-row md:p-10 md:gap-0">
      <div className="w-full h-full flex-1">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-center font-bold uppercase text-xl">
            <BiLeftArrowAlt
              size={40}
              className="cursor-pointer"
              onClick={() => navigate("/products/all")}
            />{" "}
            Order Summary - {cart.cartItems.length}
            {cart.cartItems.length > 1 ? " items" : " item"}
          </div>
          {cart.cartItems.length > 0 && (
            <button
              className="block px-5 py-1 text-xl text-white bg-pink-400 rounded "
              onClick={clearCart}
            >
              Clear
            </button>
          )}
        </div>
        {cart.cartItems.map((item) => {
          return (
            <CartCard item={item} removeItem={removeItem} key={item._id} />
          );
        })}
      </div>

      <div className="w-full h-full flex-1">
        <div className="w-full h-full flex flex-col gap-6 md:w-4/5 md:gap-10 mx-auto">
          <div className="w-full h-20 bg-gray-100 rounded-md flex items-center justify-center">
            <BsTruck size={40} className="mr-4" />
            <span>
              {totalAmount > 1200
                ? "Yay! No Delivery Charge On This Order."
                : "Delivery Charges Applied!"}
            </span>
          </div>
          <div className="flex flex-col gap-8">
            <h3 className="font-bold uppercase text-xl">
              Price Details ({cart.cartItems.length}{" "}
              {cart.cartItems.length > 1 ? " items" : " item"})
            </h3>
            <div className="flex items-center justify-between">
              <span>Total MRP</span>
              <span>Rs {totalItemsPrice}</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Discount on MRP</span>
              <span className="text-green-500">-Rs {totalDiscount}</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Delivery Charge</span>
              <span className="text-green-500">
                {totalAmount > 1200 ? "Free" : delivery}
              </span>
            </div>
            <hr />
            <div className="flex items-center justify-between">
              <span className="font-bold text-lg">Total Amount</span>
              <span className="text-pink-500">
                Rs {totalAmount <= 0 ? 0 : totalAmount}
              </span>
            </div>
            <button className="w-full h-14 rounded-lg bg-black text-white text-xl flex items-center justify-center">
              Place Order
              <BiRightArrowAlt size={30} className="ml-4" />
            </button>
          </div>
        </div>
      </div>
      <Toaster position="bottom-center" />
    </div>
  );
};

export default Cart;
