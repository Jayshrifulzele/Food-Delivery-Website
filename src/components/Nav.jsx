import React, { useContext, useEffect, useRef, useState } from "react";
import { MdFastfood } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import { LuShoppingBag } from "react-icons/lu";
import { dataContext } from "../context/UserContext";
import { food_items } from "../food";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { FaClipboardList } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { AuthContext } from "../context/AuthContext";
import { toast } from "react-toastify";
import { FaChevronDown } from "react-icons/fa";


// import { useSelector } from "react-redux";

function Nav(){
    const { input, setInput, cate, setCate, showCart, setShowCart } = useContext(dataContext);
    const { user, logout } = useContext(AuthContext);
   const [showMenu, setShowMenu] = useState(false);
    const menuRef = useRef(null);
    useEffect(() => {
  const newList = food_items.filter((item) =>
    item.food_name.toLowerCase().includes(input.toLowerCase())
  );
  setCate(newList);
}, [input]);

useEffect(() => {
  function handleClickOutside(event) {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setShowMenu(false);
    }
  }

  document.addEventListener("mousedown", handleClickOutside);

  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };
}, []);

const items = useSelector((state) => state.cart);

const cartCount = items.reduce(
  (total, item) => total + item.qty,
  0
);
const wishlist = useSelector((state) => state.wishlist);

    return (
  <div className="bg-white shadow-md sticky top-0 z-50">

    <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

      {/* Logo */}
      <Link
        to="/"
        className="flex items-center gap-2"
      >
        <MdFastfood className="text-green-500 text-4xl" />

        <span className="text-2xl font-bold text-green-600">
          FoodieHub
        </span>
      </Link>

      {/* Navigation */}

      <div className="hidden md:flex items-center gap-8 font-semibold">

  <NavLink
  to="/"
  className={({ isActive }) =>
    isActive
      ? "text-green-600 font-bold"
      : "hover:text-green-600 transition"
  }
>
  Home
</NavLink>

  <NavLink
  to="/about"
  className={({ isActive }) =>
    isActive
      ? "text-green-600 font-bold"
      : "hover:text-green-600 transition"
  }
>
  About
</NavLink>

<NavLink
  to="/contact"
  className={({ isActive }) =>
    isActive
      ? "text-green-600 font-bold"
      : "hover:text-green-600 transition"
  }
>
  Contact
</NavLink>

  <NavLink
  to="/wishlist"
  className={({ isActive }) =>
    `${
      isActive
        ? "text-green-600 font-bold"
        : "hover:text-green-600 transition"
    } flex items-center gap-1`
  }
>
    <FaHeart />
    Wishlist ({wishlist.length})
  </NavLink>

  <NavLink
  to="/orders"
  className={({ isActive }) =>
    `${
      isActive
        ? "text-green-600 font-bold"
        : "hover:text-green-600 transition"
    } flex items-center gap-1`
  }
>
    <FaClipboardList />
    Orders
  </NavLink>

</div>

      {/* Search */}

      <form
        className="hidden lg:flex w-[350px] bg-slate-100 rounded-xl px-4 py-2 items-center gap-2"
        onSubmit={(e) => e.preventDefault()}
      >
        <IoIosSearch className="text-xl text-gray-500" />

        <input
          type="text"
          placeholder="Search delicious food..."
          className="bg-transparent outline-none w-full"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </form>

      {/* Right Side */}

      <div className="flex items-center gap-5">

       {user ? (
  <div className="relative" ref={menuRef}>

    <button
  onClick={() => setShowMenu(!showMenu)}
  className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-green-50 transition-all"
>
  <FaUserCircle className="text-4xl text-green-600" />

  <div className="hidden md:flex flex-col items-start leading-tight">
    <span className="font-semibold text-gray-800">
      {user.name}
    </span>

    <span className="text-xs text-gray-500">
      My Account
    </span>
  </div>

  <FaChevronDown
    className={`text-gray-500 transition-transform duration-300 ${
      showMenu ? "rotate-180" : ""
    }`}
  />
</button>

    {showMenu && (
      <div className="absolute right-0 mt-3 w-64 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden animate-fadeIn">

        <div className="px-4 py-3 border-b">
          <h3 className="font-bold">{user.name}</h3>
          <p className="text-sm text-gray-500">{user.email}</p>
        </div>

        <Link
  to="/profile"
  className="flex items-center gap-3 px-5 py-3 hover:bg-green-50 transition"
  onClick={() => setShowMenu(false)}
>
  👤 My Profile
</Link>

        <Link
  to="/orders"
  className="flex items-center gap-3 px-5 py-3 hover:bg-green-50 transition"
  onClick={() => setShowMenu(false)}
>
  📦 My Orders
</Link>

        <Link
  to="/wishlist"
  className="flex items-center gap-3 px-5 py-3 hover:bg-green-50 transition"
  onClick={() => setShowMenu(false)}
>
  ❤️ Wishlist
</Link>

        <button
          onClick={() => {
            logout();
            toast.success("Logged Out Successfully");
            setShowMenu(false);
          }}
          className="w-full text-left flex items-center gap-3 px-5 py-3 text-red-500 hover:bg-red-50 transition"
        >
          🚪 Logout
        </button>

      </div>
    )}

  </div>
) : (
  <>
    <Link
      to="/login"
      className="hidden md:flex items-center gap-1 hover:text-green-500"
    >
      <FaUserCircle />
      Login
    </Link>

    <Link
      to="/signup"
      className="hidden md:block bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
    >
      Sign Up
    </Link>
  </>
)}

        <div
          className="relative cursor-pointer"
          onClick={() => setShowCart(true)}
        >
          <LuShoppingBag className="text-3xl text-green-600" />

          <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full text-xs px-2">
            {cartCount}
          </span>
        </div>

      </div>

    </div>

  </div>
);
}
export default Nav