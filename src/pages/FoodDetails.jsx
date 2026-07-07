import React from "react";
import { useParams } from "react-router-dom";
import { food_items } from "../food";

function FoodDetails() {
  const { id } = useParams();

  const food = food_items.find((item) => item.id === Number(id));

  if (!food) {
    return (
      <div className="min-h-screen flex justify-center items-center text-2xl">
        Food Not Found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-100 py-10 px-6">

      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden md:flex">

        {/* Left */}

        <div className="md:w-1/2">

          <img
            src={food.food_image}
            alt={food.food_name}
            className="w-full h-full object-cover"
          />

        </div>

        {/* Right */}

        <div className="md:w-1/2 p-8">

          <h1 className="text-4xl font-bold">
            {food.food_name}
          </h1>

          <p className="text-yellow-500 text-xl mt-3">
            ⭐ {food.rating}
          </p>

          <p className="text-3xl font-bold text-green-600 mt-4">
            ₹{food.price}
          </p>

          <p className="text-gray-600 mt-6">
            {food.description}
          </p>

          <div className="mt-8 space-y-3">

            <p>
              <strong>Category:</strong> {food.food_category}
            </p>

            <p>
              <strong>Type:</strong> {food.food_type}
            </p>

            <p>
              <strong>Delivery:</strong> {food.deliveryTime}
            </p>

          </div>

          <button className="mt-10 w-full bg-green-500 hover:bg-green-600 text-white py-4 rounded-xl font-semibold transition">
            Add To Cart
          </button>

        </div>

      </div>

    </div>
  );
}

export default FoodDetails;