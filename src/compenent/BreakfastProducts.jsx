import React from 'react'
import { assets, products } from "../assets/data";
import ProductCard from "./ProductCard";
const BreakfastProducts = () => {
   
  return (
    <div className='container pt-16'>
      <div className='lg:flex justify-between items-center'>
        <div className=''>
          <h3 className='font-semibold text-2xl'>Fruits & Vegetables</h3>
          <p className='text-gray-600 mt-2'>
            Buy farm fresh fruits and vegetable online at the best prices
          </p>
        </div>
        <div className='space-x-4 mt-8 lg:mt-0'>
          <button className='feature_btn bg-accent'>Fruits</button>
          <button className='text-gray-600 hover:text-green-700'>
            Vegetables
          </button>
          <button className='text-gray-600 hover:text-green-700'>
            Bread & Bakery
          </button>
        </div>
      </div>
      <div className='grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 pt-8 gap-5'>
        <div className=''>
          <img
            src={assets.feature_2}
            alt=''
            className='w-full h-full object-cover'
          />
        </div>
        {products.slice(1, 5).map((item, index) => (
          <ProductCard
            key={item.id}
            img={item.image}
            name={item.products_name}
            price={item.Price}
          />
        ))}
      </div>
    </div>
  );
}

export default BreakfastProducts