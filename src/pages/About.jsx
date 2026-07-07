import React from "react";
import { Link } from "react-router-dom";
import {
  FaUtensils,
  FaTruck,
  FaSmile,
  FaLeaf,
} from "react-icons/fa";

function About() {
  return (
    <div className="bg-slate-50 min-h-screen">

      {/* Hero Section */}
      <section className="bg-green-600 text-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h1 className="text-5xl font-bold">
            About FoodieHub
          </h1>

          <p className="mt-6 text-lg max-w-3xl mx-auto">
            FoodieHub is a modern food ordering platform that brings
            your favorite meals directly to your doorstep with speed,
            freshness, and quality.
          </p>

        </div>
      </section>

      {/* Story */}
      <section className="max-w-6xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-2 gap-12 items-center">

          <img
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4"
            alt="Restaurant"
            className="rounded-3xl shadow-lg"
          />

          <div>

            <h2 className="text-4xl font-bold text-gray-800">
              Our Story
            </h2>

            <p className="mt-6 text-gray-600 leading-8">
              FoodieHub was created with one simple goal —
              making delicious food available anytime, anywhere.
              We connect customers with trusted restaurants and
              ensure every meal is delivered fresh and on time.
            </p>

          </div>

        </div>

      </section>

      {/* Features */}

      <section className="bg-white py-16">

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-12">
            Why Choose Us
          </h2>

          <div className="grid md:grid-cols-4 gap-8">

            <div className="bg-green-50 rounded-2xl p-6 text-center shadow">

              <FaUtensils className="text-5xl text-green-600 mx-auto mb-4" />

              <h3 className="font-bold text-xl">
                Fresh Food
              </h3>

              <p className="text-gray-500 mt-3">
                Prepared using quality ingredients.
              </p>

            </div>

            <div className="bg-green-50 rounded-2xl p-6 text-center shadow">

              <FaTruck className="text-5xl text-green-600 mx-auto mb-4" />

              <h3 className="font-bold text-xl">
                Fast Delivery
              </h3>

              <p className="text-gray-500 mt-3">
                Delivered quickly to your location.
              </p>

            </div>

            <div className="bg-green-50 rounded-2xl p-6 text-center shadow">

              <FaSmile className="text-5xl text-green-600 mx-auto mb-4" />

              <h3 className="font-bold text-xl">
                Happy Customers
              </h3>

              <p className="text-gray-500 mt-3">
                Thousands of satisfied food lovers.
              </p>

            </div>

            <div className="bg-green-50 rounded-2xl p-6 text-center shadow">

              <FaLeaf className="text-5xl text-green-600 mx-auto mb-4" />

              <h3 className="font-bold text-xl">
                Healthy Choices
              </h3>

              <p className="text-gray-500 mt-3">
                Plenty of healthy meal options.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* Statistics */}

      <section className="py-16">

        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 px-6">

          <div className="text-center">
            <h2 className="text-5xl font-bold text-green-600">
              10K+
            </h2>
            <p className="text-gray-600 mt-2">
              Happy Customers
            </p>
          </div>

          <div className="text-center">
            <h2 className="text-5xl font-bold text-green-600">
              500+
            </h2>
            <p className="text-gray-600 mt-2">
              Restaurants
            </p>
          </div>

          <div className="text-center">
            <h2 className="text-5xl font-bold text-green-600">
              25K+
            </h2>
            <p className="text-gray-600 mt-2">
              Orders Delivered
            </p>
          </div>

          <div className="text-center">
            <h2 className="text-5xl font-bold text-green-600">
              4.9★
            </h2>
            <p className="text-gray-600 mt-2">
              Customer Rating
            </p>
          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="bg-green-600 text-white py-16">

        <div className="text-center px-6">

          <h2 className="text-4xl font-bold">
            Ready to Order?
          </h2>

          <p className="mt-4 text-lg">
            Discover delicious meals from your favorite restaurants.
          </p>

          <Link
            to="/"
            className="inline-block mt-8 bg-white text-green-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100"
          >
            Explore Menu
          </Link>

        </div>

      </section>

    </div>
  );
}

export default About;