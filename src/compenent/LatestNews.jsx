import React from "react";
import { LuMailOpen } from "react-icons/lu";
const LatestNews = () => {
  return (
    <div className='bg-accent-dark mt-16'>
      <div className='container py-8 flex flex-col md:flex-row justify-between items-center gap-4 text-white'>
        <LuMailOpen className='text-[60px]' />
        <div>
          <h3 className='text-xl sm:text-2xl font-semibold'>
            Sign Up To Our LatestNews
          </h3>
          <p>...and receive $20 coupon for first shopping</p>
        </div>
        {/* ✅ Wrap input and button together */}
        <div className='w-full max-w-[500px] relative'>
          <input
            type='text'
            className='py-4 px-6 w-full rounded-full bg-gray-400 text-black'
            placeholder='Your Email Address...'
          />
          <button className='bg-accent-dark absolute top-[50%] right-2 translate-y-[-50%] py-2 px-4 rounded-full text-white hover:bg-accent'>
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default LatestNews;
