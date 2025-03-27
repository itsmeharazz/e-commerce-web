import React from "react";
import {assets} from '../assets/data'
const Banner = () => {
  return (
    <div className='container py-16'>
      <div className='grid sm:grid-cols-2 gap-4 sm:gap-8'>
        <div className='overflow-hidden rounded-lg'>
          <img
            src={assets.banner_1}
            alt=''
            className='hover:scale-105 transition-transform'
          />
        </div>
        <div className='overflow-hidden rounded-lg'>
          <img
            src={assets.banner_2}
            alt=''
            className='hover:scale-105 transition-transform'
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
