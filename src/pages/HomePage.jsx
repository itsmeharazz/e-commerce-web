import React, {useState} from 'react'
import HeroSection from '../compenent/HeroSection';
import Category from '../compenent/Category';

const HomePage = () => {
     const [category, setCategory] = useState("All");
  return (
    <div>
        <HeroSection />
        <Category categoryes={category} setCategory={setCategory}/>
    </div>
  )
}

export default HomePage