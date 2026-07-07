import React from "react";
import { useSelector } from "react-redux";
import Card from "../components/Card";

function Wishlist() {
  const wishlist = useSelector((state) => state.wishlist);

  return (
    <div className="min-h-screen bg-slate-100 p-8">

      <h1 className="text-4xl font-bold text-green-600 mb-8">
        ❤️ My Wishlist
      </h1>

      {wishlist.length === 0 ? (
        <div className="text-center mt-20">
          <h2 className="text-2xl font-semibold text-gray-600">
            Your Wishlist is Empty
          </h2>

          <p className="text-gray-500 mt-3">
            Save your favourite dishes here.
          </p>
        </div>
      ) : (
        <div className="flex flex-wrap gap-8 justify-center">
          {wishlist.map((item) => (
            <Card
              key={item.id}
              id={item.id}
              name={item.name}
              image={item.image}
              price={item.price}
              type={item.type}
              rating={item.rating}
              description={item.description}
              popular={item.popular}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Wishlist;