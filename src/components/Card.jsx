import React from "react";
import image1 from "../assets/image1.avif"
import { LuLeafyGreen } from "react-icons/lu";
import { GiChickenOven } from "react-icons/gi";
import { AddItem } from "../redux/cartSlice";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { FaStar, FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { addToWishlist, removeFromWishlist } from "../redux/wishlistSlice";

function Card({
  name,
  image,
  price,
  id,
  type,
  rating,
  description,
  popular,
}) {
    const dispatch = useDispatch();

const wishlist = useSelector((state) => state.wishlist);

const isWishlisted = wishlist.some((item) => item.id === id);
    return (
  <div className="w-[300px] bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">

    {/* Image */}
    <div className="relative w-full h-56 overflow-hidden">

      <Link to={`/food/${id}`}>
  <img
    src={image}
    alt={name}
    className="w-full h-full object-cover hover:scale-110 transition duration-500"
  />
</Link>

      {/* Popular Badge */}
      {popular && (
        <span className="absolute top-3 left-3 bg-red-500 text-white text-xs px-3 py-1 rounded-full">
          🔥 Popular
        </span>
      )}

      {/* Favourite */}
      <button
  onClick={() => {
    if (isWishlisted) {
      dispatch(removeFromWishlist(id));
      toast.info("Removed from Wishlist");
    } else {
      dispatch(
        addToWishlist({
          id,
          name,
          image,
          price,
          rating,
          type,
          description,
          popular,
        })
      );
      toast.success("Added to Wishlist");
    }
  }}
  className={`absolute top-3 right-3 p-2 rounded-full shadow-md transition ${
    isWishlisted
      ? "bg-red-500 text-white"
      : "bg-white text-gray-600 hover:bg-red-500 hover:text-white"
  }`}
>
  <FaHeart />
</button>

    </div>

    {/* Card Body */}
    <div className="p-4">

      {/* Rating */}
      <div className="flex items-center gap-2 mb-2">
        <FaStar className="text-yellow-400" />
        <span className="font-semibold">{rating}</span>
      </div>

      {/* Food Name */}
      <Link to={`/food/${id}`}>
  <h2 className="text-xl font-bold text-gray-800 hover:text-green-600 transition cursor-pointer">
    {name}
  </h2>
</Link>

      {/* Description */}
      <p className="text-sm text-gray-500 mt-2 h-10">
        {description}
      </p>

      {/* Price & Type */}
      <div className="flex justify-between items-center mt-4">

        <span className="text-2xl font-bold text-green-600">
          ₹{price}
        </span>

        <div className="flex items-center gap-2">

          {type === "veg" ? (
            <LuLeafyGreen className="text-green-600 text-xl" />
          ) : (
            <GiChickenOven className="text-red-600 text-xl" />
          )}

          <span className="capitalize text-sm font-medium">
            {type.replace("_", " ")}
          </span>

        </div>

      </div>

      {/* Button */}
      <button
        className="w-full mt-5 py-3 bg-green-500 text-white rounded-xl hover:bg-green-600 transition"
        onClick={() => {
          dispatch(
            AddItem({
              id,
              name,
              price,
              image,
              qty: 1,
            })
          );
          toast.success("Item Added Successfully");
        }}
      >
        Add to Cart
      </button>

    </div>

  </div>
);
}
export default Card;