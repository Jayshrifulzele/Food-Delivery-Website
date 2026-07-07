import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Orders() {
  
  const orders = useSelector((state) => state.orders);

  return (
    <div className="min-h-screen bg-slate-100 p-8">

      <div className="max-w-5xl mx-auto">

        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-green-600">
            My Orders
          </h1>

          <Link
            to="/"
            className="bg-green-500 text-white px-5 py-2 rounded-lg hover:bg-green-600"
          >
            Back Home
          </Link>
        </div>

        <div className="space-y-6">

          {orders.length === 0 ? (
  <div className="text-center mt-20">
    <h2 className="text-2xl font-semibold text-gray-600">
      No Orders Yet
    </h2>

    <p className="text-gray-500 mt-2">
      Place your first order to see it here.
    </p>
  </div>
) : (
  <div className="space-y-6">
    {orders.map((order) => (
      <div
        key={order.id}
        className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition"
      >
        <div className="flex justify-between">

          <div>
            <h2 className="text-xl font-bold">
              {order.id}
            </h2>

            <p className="text-gray-500 mt-1">
              {order.date}
            </p>

            <div className="mt-3 space-y-2">
  {order.items.map((item) => (
    <div
      key={item.id}
      className="flex justify-between border-b pb-2"
    >
      <div className="flex items-center gap-3">

        <img
          src={item.image}
          alt={item.name}
          className="w-14 h-14 rounded-lg object-cover"
        />

        <div>
          <h3 className="font-semibold">
            {item.name}
          </h3>

          <p className="text-sm text-gray-500">
            Qty: {item.qty}
          </p>
        </div>

      </div>

      <p className="font-semibold text-green-600">
        ₹{item.price * item.qty}
      </p>

    </div>
  ))}
</div>
          </div>

          <div className="text-right">

            <p className="text-2xl font-bold text-green-600">
              ₹{order.total}
            </p>

            <span className="inline-block mt-2 px-4 py-1 rounded-full bg-yellow-500 text-white">
              {order.status}
            </span>

          </div>

        </div>
      </div>
    ))}
  </div>
)}

        </div>

      </div>

    </div>
  );
}

export default Orders;