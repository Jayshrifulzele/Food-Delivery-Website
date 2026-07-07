import React, { createContext, useState } from "react";
import { food_items } from "../food"; // ← Make sure to import this!

export const dataContext = createContext();

function UserContext({ children }) {
  const [cate, setCate] = useState(food_items); // default: show all items
  const [input, setInput] = useState("");       // search input
  const [showCart, setShowCart] = useState(false)

  return (
    <dataContext.Provider value={{ cate, setCate, input, setInput, showCart, setShowCart }}>
      {children}
    </dataContext.Provider>
  );
}

export default UserContext;
