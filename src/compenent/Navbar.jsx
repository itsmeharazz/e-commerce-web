import React from 'react'
import { BsSearch } from "react-icons/bs";
import { AiOutlineUser, AiOutlineShoppingCart } from "react-icons/ai";
import {assets} from '../assets/data'; 
import CartCountBadge from "./CartCountBadge";
import { Link } from 'react-router-dom';
const Navbar = ({setShowLogin}) => {
  return (
    <div className='sticky top-0 bg-white z-10'>
      <div className='container hidden lg:block'>
        <div className='flex justify-between items-center py-1'>
          <Link to={"/"}>
            <img src={assets.logo} className='w-[5.5em] h-[5.5em]' alt='' />
          </Link>
          <div className='relative w-full max-w-[500px]'>
            <input
              type='text'
              className='bg-[#f2f3f5] border-none outline-none px-6 py-3 rounded-[30px] w-full'
              placeholder='Search Product....'
            />
            <BsSearch
              className='absolute top-0 right-0 mt-4 mr-5 text-gray-500'
              size={20}
            />
          </div>
          <div className='flex gap-4'>
            <div
              onClick={() => setShowLogin(true)}
              className='icon__wrapper cursor-pointer '>
              <AiOutlineUser />
            </div>
            <Link to={"/cart"}>
              <div className='icon__wrapper relative'>
                <AiOutlineShoppingCart />
                <CartCountBadge size='w-[25px] h-[25px]' />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar