import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { placeOrder } from "../redux/orderSlice";
import { FaMapMarkerAlt, FaCreditCard, FaMoneyBillWave, FaMobileAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ClearCart } from "../redux/cartSlice";

function Checkout() {
  const items = useSelector((state) => state.cart);

  const subtotal = items.reduce(
    (total, item) => total + item.price * item.qty,
    0
  );

  const deliveryFee = 20;
  const tax = subtotal * 0.005;
  const total = Math.floor(subtotal + deliveryFee + tax);

  const [payment, setPayment] = useState("cod");
  const navigate = useNavigate()
  const dispatch = useDispatch();

  return (
    <div className="min-h-screen bg-slate-100 py-10 px-5">

      <div className="max-w-6xl mx-auto">

        <h1 className="text-4xl font-bold text-green-600 mb-8">
          Checkout
        </h1>

        <div className="grid md:grid-cols-3 gap-8">

          {/* Left Side */}
          <div className="md:col-span-2 space-y-6">

            {/* Address */}
            <div className="bg-white rounded-2xl shadow-md p-6">

              <h2 className="text-xl font-bold flex items-center gap-2 mb-4">
                <FaMapMarkerAlt className="text-green-600" />
                Delivery Address
              </h2>

              <input
                type="text"
                placeholder="Full Name"
                className="w-full border rounded-lg p-3 mb-3 outline-none"
              />

              <input
                type="text"
                placeholder="Phone Number"
                className="w-full border rounded-lg p-3 mb-3 outline-none"
              />

              <textarea
                rows="4"
                placeholder="Complete Address"
                className="w-full border rounded-lg p-3 outline-none"
              />
            </div>

            {/* Payment */}
            <div className="bg-white rounded-2xl shadow-md p-6">

              <h2 className="text-xl font-bold mb-5">
                Payment Method
              </h2>

              <div className="space-y-4">

                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="radio"
                    checked={payment === "cod"}
                    onChange={() => setPayment("cod")}
                  />
                  <FaMoneyBillWave className="text-green-600" />
                  Cash on Delivery
                </label>

                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="radio"
                    checked={payment === "upi"}
                    onChange={() => setPayment("upi")}
                  />
                  <FaMobileAlt className="text-blue-500" />
                  UPI
                </label>

                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="radio"
                    checked={payment === "card"}
                    onChange={() => setPayment("card")}
                  />
                  <FaCreditCard className="text-purple-500" />
                  Credit / Debit Card
                </label>

              </div>

            </div>

          </div>

          {/* Right Side */}
          <div>

            <div className="bg-white rounded-2xl shadow-md p-6 sticky top-24">

              <h2 className="text-2xl font-bold mb-5">
                Order Summary
              </h2>

              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between mb-3"
                >
                  <span>
                    {item.name} × {item.qty}
                  </span>

                  <span>
                    ₹{item.price * item.qty}
                  </span>
                </div>
              ))}

              <hr className="my-4" />

              <div className="flex justify-between mb-2">
                <span>Subtotal</span>
                <span>₹{subtotal}</span>
              </div>

              <div className="flex justify-between mb-2">
                <span>Delivery</span>
                <span>₹20</span>
              </div>

              <div className="flex justify-between mb-2">
                <span>Tax</span>
                <span>₹{Math.floor(tax)}</span>
              </div>

              <hr className="my-4" />

              <div className="flex justify-between text-xl font-bold text-green-600">
                <span>Total</span>
                <span>₹{total}</span>
              </div>

              <button
  onClick={() => {
  const order = {
    id: "#" + Math.floor(Math.random() * 900000 + 100000),
    date: new Date().toLocaleDateString(),
    items: items,
    total: total,
    status: "Preparing",
  };

  dispatch(placeOrder(order));
dispatch(ClearCart())
  navigate("/order-success");
}}
  className="mt-6 w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-xl font-semibold transition"
>
  Place Order
</button>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Checkout;