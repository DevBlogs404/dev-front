import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BsStarFill, BsHeartFill, BsHeart } from "react-icons/all";

const ProductCard = ({ product, addToCart }) => {
  const navigate = useNavigate();
  const [isLiked, setIsLiked] = useState(true);

  const toggleLike = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div
      className="flex flex-col items-center justify-center h-30"
      key={product._id}
    >
      <div className="relative w-56 h-72  rounded-lg overflow-hidden transition-all hover:-translate-y-2 hover:-translate-x-2">
        <img
          src={product.images[0]}
          alt={product.title}
          className="w-full h-full object-cover rounded-lg"
          loading="lazy"
          onClick={() => navigate(`/product/${product._id}`)}
        />
        <div className="absolute bottom-4 left-4 flex items-center gap-1">
          <BsStarFill
            color="#FFCE31"
            className="inline-block text-yellow-800"
          />
          <span className="text-sm">{product.rating}</span>
        </div>
        <div
          className="absolute bottom-4 right-4 cursor-pointer"
          onClick={toggleLike}
        >
          {isLiked ? (
            <BsHeart
              color="rgb(244 114 182) "
              className="inline-block text-pink-400"
            />
          ) : (
            <BsHeartFill
              color="rgb(244 114 182) "
              className="inline-block text-pink-400"
            />
          )}
        </div>
      </div>
      <div className="flex flex-col w-30 gap-2 my-2">
        <h3 className="font-semibold text-xl">{product.title}</h3>
        <p className="text-gray-500">{product.description}</p>
        <div className="flex items-center justify-between">
          <div>
            <span className="font-bold">Price:</span> {product.price}
          </div>
          {product.earlierPrice && (
            <div>
              <span className="font-bold">Earlier Price:</span>{" "}
              <span className="text-gray-400 line-through">
                {product.earlierPrice}
              </span>
            </div>
          )}
        </div>
      </div>
      <button
        className="p-2 w-40 bg-black text-white rounded-lg font-bold"
        onClick={() => {
          addToCart(product);
        }}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
