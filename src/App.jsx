import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./compenent/Navbar";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import PlaceOrder from "./pages/PlaceOrder";
const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/cart' element={<CartPage />} />
        <Route path='/order' element={<PlaceOrder />} />
      </Routes>
    </>
  );
};

export default App;
