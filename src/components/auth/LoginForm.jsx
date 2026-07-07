import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../context/AuthContext";
import {
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaArrowRight,
} from "react-icons/fa";
import { MdFastfood } from "react-icons/md";

function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();
const { login } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
  e.preventDefault();

  const users = JSON.parse(localStorage.getItem("users")) || [];

  const user = users.find(
    (u) =>
      u.email === formData.email &&
      u.password === formData.password
  );

  if (!user) {
    toast.error("Invalid Email or Password");
    return;
  }

  login(user);

  toast.success(`Welcome ${user.name}!`);

  navigate("/");
};

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100 flex justify-center items-center px-4">

      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 p-8">

        {/* Logo */}
        <div className="flex justify-center mb-3">
          <div className="bg-green-100 p-4 rounded-full">
            <MdFastfood className="text-5xl text-green-600" />
          </div>
        </div>

        <h1 className="text-4xl font-bold text-center text-green-600">
          FoodieHub
        </h1>

        <p className="text-center text-gray-500 mt-2">
          Welcome Back 👋
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-5">

          {/* Email */}
          <div className="relative">
            <FaEnvelope className="absolute top-4 left-4 text-gray-400" />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="w-full border rounded-xl py-3 pl-12 pr-4 outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          {/* Password */}
          <div className="relative">

            <FaLock className="absolute top-4 left-4 text-gray-400" />

            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full border rounded-xl py-3 pl-12 pr-12 outline-none focus:ring-2 focus:ring-green-500"
              required
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute top-4 right-4 text-gray-500"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>

          </div>

          {/* Forgot Password */}
          <div className="text-right">
            <Link
              to="/forgot-password"
              className="text-green-600 text-sm hover:underline"
            >
              Forgot Password?
            </Link>
          </div>

          {/* Login Button */}
          <button className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-xl font-semibold flex justify-center items-center gap-2 transition">

            Login

            <FaArrowRight />

          </button>

        </form>

        {/* Divider */}
        <div className="flex items-center my-6">

          <div className="flex-1 border"></div>

          <span className="px-3 text-gray-400 text-sm">
            OR
          </span>

          <div className="flex-1 border"></div>

        </div>

        {/* Google Button */}

        <button className="w-full border py-3 rounded-xl hover:bg-gray-100 transition">
          Continue with Google
        </button>

        <p className="text-center mt-6 text-gray-600">
          Don't have an account?{" "}
          <Link
            to="/signup"
            className="text-green-600 font-semibold hover:underline"
          >
            Sign Up
          </Link>
        </p>

      </div>

    </div>
  );
}

export default LoginForm;