import React from "react";
import VerticalCategoryCard from "../components/VerticalCategoryCard";
import SquareCategoryCard from "../components/SquareCategoryCard";
import { CategoryOne, CategoryTwo, CategoryThree } from "../data/data";

const Shop = () => {
  return (
    <>
      <div className="w-full h-[90vh] p-4 md:p-10">
        <div className="flex flex-col w-full h-full gap-4 mt-2">
          <div className="uppercase pointer-events-none text-left text-2xl font-semibold">
            Shop by Category
          </div>
          <div className="grid grid-cols-1 gap-4 w-full h-full md:grid-cols-4 md:gap-8">
            {CategoryOne?.map((category) => {
              return (
                <VerticalCategoryCard
                  key={category.id}
                  title={category.title}
                  imageUrl={category.image}
                />
              );
            })}

            <div className="flex flex-col gap-4 h-full">
            {CategoryTwo?.map((category) => {
              return (
                <SquareCategoryCard
                  key={category.id}
                  title={category.title}
                  imageUrl={category.image}
                />
              );
            })}
            </div>

            <div className="flex flex-col gap-4 h-full">
            {CategoryThree?.map((category) => {
              return (
                <SquareCategoryCard
                  key={category.id}
                  title={category.title}
                  imageUrl={category.image}
                />
              );
            })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;
