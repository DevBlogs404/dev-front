import React,{lazy,Suspense} from "react";
const SquareCategoryCard = lazy(()=> import('../components/SquareCategoryCard'))
const VerticalCategoryCard = lazy(()=> import('../components/VerticalCategoryCard'))
import { CategoryOne, CategoryTwo, CategoryThree } from "../data/data";
import Loading from "../components/Loading";

const Shop = () => {
  return (
      <div className="w-full min-h-[90vh] p-4 md:p-10">
        <div className="flex flex-col w-full h-full gap-4 mt-2">
          <div className="uppercase pointer-events-none text-left text-2xl font-semibold">
            Shop by Category
          </div>
          <div className="grid grid-cols-1 gap-4 w-full h-full md:grid-cols-4 md:gap-8">
            <Suspense fallback={<Loading />}>
            {CategoryOne?.map((category) => {
              return (
                <VerticalCategoryCard
                  key={category.id}
                  title={category.title}
                  imageUrl={category.image}
                />
              );
            })}
            </Suspense>

            <div className="flex flex-col gap-4 h-full">
            <Suspense fallback={<Loading />}>
            {CategoryTwo?.map((category) => {
              return (
                <SquareCategoryCard
                  key={category.id}
                  title={category.title}
                  imageUrl={category.image}
                />
              );
            })}
               </Suspense>
            </div>

            <div className="flex flex-col gap-4 h-full">
            <Suspense fallback={<Loading />}>
            {CategoryThree?.map((category) => {
              return (
                <SquareCategoryCard
                  key={category.id}
                  title={category.title}
                  imageUrl={category.image}
                />
              );
            })}
               </Suspense>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Shop;
