import React from 'react'
import {category_list} from '../assets/data';
const Category = ({categoryes, setCategory}) => {
  return (
    <div className='container my-10'>
      <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {category_list.map((category, index) => (
          <div
            key={index}
            onClick={() =>
              setCategory((prev) =>
              (prev === category.menu_name? "All":category.menu_name
              ))
            }
            className='border cursor-pointer border-gray-200 hover:border-gray-300 hover:scale-105 transition-transform rounded-lg'>
            <div className='flex justify-between items-center p-6'>
              <div className='space-y-4'>
                <h3 className='font-medium text-xl'>{category.menu_name}</h3>
                <p className='text-gray-500'> {category.stock} </p>
              </div>
              <img
                src={category.image}
                alt={category.menu_name}
                className={`rounded-full  object-cover w-[100px] aspect-square transition-all duration-300 ${
                  categoryes === category.menu_name
                    ? "border-2 border-[#f5922a] p-2"
                    : ""
                }`}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category