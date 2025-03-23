import React, { useContext} from "react";
import { AiFillStar, AiOutlineStar, AiOutlineShopping } from "react-icons/ai";
import { StoreContext } from "../context/StoreContext";
import { TiPlus } from "react-icons/ti";
import { HiMinus } from "react-icons/hi";
const ProductCard = ({id, img, name, price }) => {
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);
  return (
    <div className='border w-[90%]  border-gray-200 hover:border-gray-300 hover:scale-105 transition-transform rounded-lg relative'>
      <img src={img} alt='' className='w-full aspect-square' />
      <div className='space-y-2 relative p-4'>
        <div className='text-yellow-400 flex gap-[2px] text-[20px]'>
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiOutlineStar />
        </div>
        <h3 className='font-medium'>{name}</h3>
        <h3 className='text-2xl font-medium text-red-600'>$ {price} </h3>
        {!cartItems[id] ? (
          <button className='absolute -top-4 right-2 bg-accent text-white text-[28px] w-[50px] h-[50px] rounded-full grid place-items-center cursor-pointer'>
            <AiOutlineShopping onClick={() => addToCart(id)} />
          </button>
        ) : (
          <div className='flex justify-baseline items-center gap-3.5 bg-accent p-1 px-2.5 rounded-3xl text-white absolute -top-4 right-2'>
            <HiMinus
              onClick={() => removeFromCart(id)}
              className='cursor-pointer'
            />
            <p> {cartItems[id]} </p>
            <TiPlus onClick={() => addToCart(id)} className='cursor-pointer' />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
