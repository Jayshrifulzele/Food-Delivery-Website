import React from "react";
import heroImage from "../../assets/jay.jpg"; // at the top
function Hero() {
  return (
    <section className="bg-green-50 py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-10">

        {/* Left Side */}
        <div className="md:w-1/2">
          <p className="text-green-600 font-semibold text-lg">
            Fresh & Healthy Food
          </p>

          <h1 className="text-5xl font-bold text-gray-800 mt-3 leading-tight">
            Delicious Food <br />
            Delivered To Your Door
          </h1>

          <p className="mt-6 text-gray-600 text-lg">
            Order delicious food from your favourite restaurants.
            Fast delivery, fresh ingredients and amazing offers.
          </p>

          <button className="mt-8 bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition">
            Order Now
          </button>
        </div>

        {/* Right Side */}
        <div className="md:w-1/2 flex justify-center items-center">

  <div className="relative">

    <div className="absolute inset-0 bg-green-300 rounded-full blur-3xl opacity-40"></div>

    <img
      src={heroImage}
      alt="Delicious Food"
      className="relative w-[450px] rounded-full object-cover shadow-2xl hover:scale-105 transition duration-500"
    />

  </div>

</div>

      </div>
    </section>
  );
}

export default Hero;