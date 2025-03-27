import React, {useState} from 'react'
import HeroSection from '../compenent/HeroSection';
import Category from '../compenent/Category';
import FruitsProducts from '../compenent/FruitsProducts';
import BreakfastProducts from '../compenent/BreakfastProducts';
import Banner from '../compenent/Banner';
import LatestNews from '../compenent/LatestNews';
import BlogSection from '../compenent/BlockSection/BlockSection'
const HomePage = () => {
     const [category, setCategory] = useState("All");
  return (
    <div>
        <HeroSection />
        <Category categoryes={category} setCategory={setCategory}/>
        <FruitsProducts />
        <BreakfastProducts />
        <Banner />
        <BlogSection /> 
    </div>
  )
}

export default HomePage