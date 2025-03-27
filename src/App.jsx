import React,{useState} from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./compenent/Navbar";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import PlaceOrder from "./pages/PlaceOrder";
import SignInPopUp from "../src/compenent/SigninPopUp";
import Footer from "./compenent/Footer";
import LatestNews from "./compenent/LatestNews";
const App = () => {
   const [showLogin, setShowLogin] = useState(false);
  return (
    <>
      {showLogin ? <SignInPopUp setShowLogin={setShowLogin} /> : <></>}
      <Navbar setShowLogin={setShowLogin} />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/cart' element={<CartPage />} />
        <Route path='/order' element={<PlaceOrder />} />
      </Routes>
      <LatestNews />
      <Footer />
    </>
  );
};

export default App;
