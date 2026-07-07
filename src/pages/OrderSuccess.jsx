import React from "react";
import { Link } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";

function OrderSuccess() {
  const orderId = "#" + Math.floor(Math.random() * 900000 + 100000);

  return (
    <div className="min-h-screen bg-green-50 flex justify-center items-center px-4">

      <div className="bg-white shadow-xl rounded-3xl p-10 text-center max-w-lg w-full">

        <FaCheckCircle className="text-7xl text-green-500 mx-auto mb-6" />

        <h1 className="text-4xl font-bold text-green-600">
          Order Placed!
        </h1>

        <p className="text-gray-600 mt-4">
          Thank you for ordering with FoodieHub.
        </p>

        <div className="bg-slate-100 rounded-xl p-5 mt-8">

          <h3 className="font-bold text-lg">
            Order ID
          </h3>

          <p className="text-green-600 font-bold mt-2">
            {orderId}
          </p>

          <p className="text-gray-500 mt-4">
            Estimated Delivery
          </p>

          <h2 className="font-bold text-xl mt-2">
            25 - 30 Minutes
          </h2>

        </div>

        <div className="flex gap-4 mt-8">

          <Link
            to="/"
            className="flex-1 bg-green-500 text-white py-3 rounded-xl hover:bg-green-600"
          >
            Home
          </Link>

          <Link
            to="/orders"
            className="flex-1 border-2 border-green-500 text-green-600 py-3 rounded-xl hover:bg-green-100"
          >
            My Orders
          </Link>

        </div>

      </div>

    </div>
  );
}

export default OrderSuccess;