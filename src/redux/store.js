import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import wishlistSlice from "./wishlistSlice";
import orderSlice from "./orderSlice";

// Load data from localStorage
const loadState = () => {
  try {
    const savedState = localStorage.getItem("foodiehub");

    if (savedState === null) return undefined;

    return JSON.parse(savedState);
  } catch (err) {
    return undefined;
  }
};

const store = configureStore({
  reducer: {
    cart: cartSlice,
    wishlist: wishlistSlice,
    orders: orderSlice,
  },
  preloadedState: loadState(),
});

// Save Redux state whenever it changes
store.subscribe(() => {
  localStorage.setItem(
    "foodiehub",
    JSON.stringify(store.getState())
  );
});

export default store;