import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Wishlist from "./pages/Wishlist";
import Orders from "./pages/Orders";
import FoodDetails from "./pages/FoodDetails";
import Checkout from "./pages/Checkout";
import OrderSuccess from "./pages/OrderSuccess";
import Profile from "./pages/Profile";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";


import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Nav from "./components/Nav";
import { useLocation } from "react-router-dom";

function App() {
   const location = useLocation();

  const hideLayout =
    location.pathname === "/login" ||
    location.pathname === "/signup";
  return (
  <>
    
     {!hideLayout && <Nav />}
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/wishlist" element={<Wishlist />} />
      <Route path="/orders" element={<Orders />} />
      <Route path="/food/:id" element={<FoodDetails />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/order-success" element={<OrderSuccess />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>

    {!hideLayout && <Footer />}

<ScrollToTop />
  </>
);
}

export default App;