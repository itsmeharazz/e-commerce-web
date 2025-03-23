import React, {useState} from 'react'
import HeroSection from '../compenent/HeroSection';
import Category from '../compenent/Category';
import FruitsProducts from '../compenent/FruitsProducts';
import BreakfastProducts from '../compenent/BreakfastProducts';

const HomePage = () => {
     const [category, setCategory] = useState("All");
  return (
    <div>
        <HeroSection />
        <Category categoryes={category} setCategory={setCategory}/>
        <FruitsProducts />
        <BreakfastProducts />
    </div>
  )
}

export default HomePage