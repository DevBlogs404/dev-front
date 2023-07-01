import React from "react";
import mens from "../assets/men.png";
import women from "../assets/women.png";
import shoes from "../assets/shoes.png";
import kids from "../assets/kids.png";
import accessories from "../assets/accessories.png";
import beauty from "../assets/beauty.png";
import { useNavigate } from "react-router-dom";

const Shop = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="w-full h-[90vh] p-4 md:p-10">
        <div className="flex flex-col w-full h-full gap-4 mt-2">
          <div className="uppercase pointer-events-none text-left text-2xl font-semibold">
            Shop by Category
          </div>
          <div className="grid grid-cols-1 gap-4 w-full h-full md:grid-cols-4 md:gap-8">
            <div
              className="w-full h-full relative"
              onClick={() => navigate("/products/men")}
            >
              <img
                src={mens}
                alt="mens"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-6 left-6">
                <div className="text-lg mt-2 font-bold  bg-[rgb(255,255,255,0.3)] pointer-events-none p-2 px-4  md:text-xl">
                  Mens
                </div>
              </div>
            </div>
            <div
              className=" w-full h-full relative"
              onClick={() => navigate("/products/women")}
            >
              <img
                src={women}
                alt="womens"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-6 left-6">
                <div className="text-lg mt-2 font-bold bg-[rgb(255,255,255,0.3)] pointer-events-none p-2 px-4 md:text-xl cursor-pointer">
                  Womens
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4 h-full">
              <div
                className="flex-1 relative"
                onClick={() => navigate("/products/accessories")}
              >
                <img
                  src={accessories}
                  alt="accessories"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute top-6 left-6">
                  <div className="text-lg mt-2 font-bold bg-[rgb(255,255,255,0.3)] pointer-events-none p-2 px-4  md:text-xl">
                    Accessories
                  </div>
                </div>
              </div>
              <div
                className="flex-1 relative"
                onClick={() => navigate("/products/shoes")}
              >
                <img
                  src={shoes}
                  alt="shoes"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute top-6 left-6">
                  <div className="text-lg mt-2 font-bold bg-[rgb(255,255,255,0.3)] pointer-events-none p-2 px-4 md:text-xl">
                    Shoes
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4 h-full">
              <div
                className="flex-1 relative"
                onClick={() => navigate("/products/kids")}
              >
                <img
                  src={kids}
                  alt="kids"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute top-6 left-6">
                  <div className="text-lg mt-2 font-bold bg-[rgb(255,255,255,0.3)] pointer-events-none p-2 px-4  md:text-xl">
                    Kids
                  </div>
                </div>
              </div>
              <div
                className="flex-1 relative"
                onClick={() => navigate("/products/beauty")}
              >
                <img
                  src={beauty}
                  alt="beauty"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute top-6 left-6">
                  <div className="text-lg mt-2 font-bold  bg-[rgb(255,255,255,0.3)] pointer-events-none p-2 px-4  md:text-xl">
                    Beauty
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;
