import React from 'react'
import {category_list} from '../../assets/data';

const Category = () => {
  return (
    <div className='container py-16'>
      <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {category_list.map((category, index) => (
          <div key={index} className='flex justify-between items-center p-6'>
            <div className='space-y-4'>
              <h3 className='font-medium text-xl'>{category.menu_name}</h3>
              <p className='text-gray-500'>{category.stock}</p>
            </div>
            <img src={category.image} alt='' />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Category