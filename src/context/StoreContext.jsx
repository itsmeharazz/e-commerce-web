import {createContext, useState,useEffect } from "react";
import {products} from'../assets/data';
export const StoreContext = createContext(null);
const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});

   const addToCart = (itemId) => {
     if (!cartItems[itemId]) {
       setCartItems((prev) => ({
         ...prev,
         [itemId]: 1,
       }));
     } else {
       setCartItems((prev) => ({
         ...prev,
         [itemId]: prev[itemId] + 1,
       }));
     }
   };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: prev[itemId] - 1,
    }));
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = products.find((product) => product.id === item);
        totalAmount += itemInfo.Price * cartItems[item];
      }
    }
    return totalAmount;
  };



  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);

  const contextValue = {
    products,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
  };
  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};



export default StoreContextProvider;
