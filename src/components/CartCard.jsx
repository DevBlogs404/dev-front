import React, {useCallback} from "react";
import { ImCross } from "react-icons/all";
import { BiCheckCircle } from "react-icons/bi";
import { useDispatch } from "react-redux";
import {
  incrementItemQuantity,
  decrementItemQuantity,
} from "../store/cartSlice";

const CartCard = ({ item, removeItem }) => {

  const { _id, title,desc,images, cartQuantity, price,size} = item;
  const dispatch = useDispatch();

  const handleIncrement = useCallback((item) => {
    dispatch(incrementItemQuantity(item));
  });

  const handleDecrement = useCallback((item) => {
    dispatch(decrementItemQuantity(item));
  });

  return (
    <div className="w-full mt-8 mx-auto" key={_id}>
      <div className="flex flex-col items-center p-2 w-full h-full rounded-lg border-2 gap-2  lg:flex-row lg:p-4 lg:gap-8">
        <img
          src={images[0]}
          alt={title}
          className="max-w-2/3 max-h-60 object-cover"
        />
        <div className="h-full w-full flex flex-col gap-4 ">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-xl">{title}</h3>
            <button
              onClick={() => {
                removeItem(_id);
              }}
            >
              <ImCross />
            </button>
          </div>
          <p>{desc}</p>
          <div className="flex items-center justify-start gap-4">
            <span className="bg-gray-200 px-2 font-bold">
              Size:{size.toUpperCase().slice(0, 1)}
            </span>
            <span className="bg-gray-200 px-2 font-bold">
              Qty:{cartQuantity}
            </span>
            <div className=" flex items-center justify-center gap-4">
              <button
                className="w-8 h-8 bg-pink-400 rounded-lg"
                onClick={() => handleDecrement(item)}
              >
                -
              </button>

              <span>{cartQuantity}</span>

              <button
                className="w-8 h-8 bg-pink-400 rounded-lg"
                onClick={() => handleIncrement(item)}
              >
                +
              </button>
            </div>
          </div>
          <p>Rs.{price}</p>
          <div className="flex items-center gap-2 ">
            <BiCheckCircle size={20} color="green" /> <small>Delivery by</small>
            <span className="font-bold"> 8th June,2023</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
