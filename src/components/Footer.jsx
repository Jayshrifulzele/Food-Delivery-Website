import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaGithub,
  FaEnvelope,
} from "react-icons/fa";
import { MdFastfood } from "react-icons/md";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-20">

      <div className="max-w-7xl mx-auto px-6 py-14 grid md:grid-cols-4 gap-10">

        {/* Logo */}

        <div>
          <div className="flex items-center gap-2">
            <MdFastfood className="text-4xl text-green-500" />

            <h2 className="text-3xl font-bold">
              FoodieHub
            </h2>
          </div>

          <p className="text-gray-400 mt-5 leading-7">
            Delicious food delivered to your doorstep.
            Fresh ingredients, fast delivery and the best experience.
          </p>
        </div>

        {/* Quick Links */}

        <div>
          <h3 className="font-bold text-xl mb-5">
            Quick Links
          </h3>

          <ul className="space-y-3 text-gray-400">

            <li>
              <Link to="/" className="hover:text-green-400">
                Home
              </Link>
            </li>

            <li>
              <Link to="/about" className="hover:text-green-400">
                About
              </Link>
            </li>

            <li>
              <Link to="/contact" className="hover:text-green-400">
                Contact
              </Link>
            </li>

            <li>
              <Link to="/orders" className="hover:text-green-400">
                Orders
              </Link>
            </li>

          </ul>
        </div>

        {/* Contact */}

        <div>
          <h3 className="font-bold text-xl mb-5">
            Contact
          </h3>

          <p className="text-gray-400">
            📍 Nagpur, Maharashtra
          </p>

          <p className="text-gray-400 mt-3">
            📞 +91 9876543210
          </p>

          <p className="text-gray-400 mt-3">
            ✉ support@foodiehub.com
          </p>
        </div>

        {/* Newsletter */}

        <div>

          <h3 className="font-bold text-xl mb-5">
            Newsletter
          </h3>

          <p className="text-gray-400 mb-4">
            Subscribe for latest offers.
          </p>

          <div className="flex">

            <input
              type="email"
              placeholder="Email"
              className="flex-1 px-4 py-3 rounded-l-xl text-black outline-none"
            />

            <button className="bg-green-500 hover:bg-green-600 px-5 rounded-r-xl">
              <FaEnvelope />
            </button>

          </div>

          <div className="flex gap-4 mt-6 text-xl">

            <FaFacebookF className="cursor-pointer hover:text-green-400" />

            <FaInstagram className="cursor-pointer hover:text-green-400" />

            <FaTwitter className="cursor-pointer hover:text-green-400" />

            <FaGithub className="cursor-pointer hover:text-green-400" />

          </div>

        </div>

      </div>

      <div className="border-t border-gray-700 py-5 text-center text-gray-400">

        © 2026 FoodieHub • Designed & Developed by Jayshri Fulzele ❤️

      </div>

    </footer>
  );
}

export default Footer;