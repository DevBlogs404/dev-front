import React from "react";
import { ImCross } from "react-icons/all";
import { BiCheckCircle } from "react-icons/bi";


const CartCard = ({ item, removeItem }) => {

  return (
    <div className="w-full mt-8 mx-auto" key={item._id}>
      <div className="flex flex-col items-center p-2 w-full h-full rounded-lg border-2 gap-2  lg:flex-row lg:p-4 lg:gap-8">
        <img
          src={item.images[0]}
          alt={item.title}
          className="max-w-2/3 max-h-60 object-cover"
        />
        <div className="h-full w-full flex flex-col gap-4 ">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-xl">{item.title}</h3>
            <button onClick={() => removeItem(item._id)}>
              <ImCross />
            </button>
          </div>
          <p>{item.desc}</p>
          <div className="flex gap-4">
            <span className="bg-gray-200 px-2 font-bold">
              Size:{item.size.toUpperCase().slice(0, 1)}
            </span>
            <span className="bg-gray-200 px-2 font-bold">
              Qty:{item.cartQuantity}
            </span>
          </div>
          <p>Rs.{item.price}</p>
          <div className="flex items-center gap-2 ">
            <BiCheckCircle size={20} color="green" />{" "}
            <small>Delivery by</small>
            <span className="font-bold"> 8th June,2023</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
