import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaArrowRight,
} from "react-icons/fa";
import { MdFastfood } from "react-icons/md";

function SignupForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
  e.preventDefault();

  if (formData.password !== formData.confirmPassword) {
    toast.error("Passwords do not match!");
    return;
  }

  const users = JSON.parse(localStorage.getItem("users")) || [];

  const alreadyExists = users.find(
    (user) => user.email === formData.email
  );

  if (alreadyExists) {
    toast.error("Email already registered!");
    return;
  }

  const newUser = {
    name: formData.name,
    email: formData.email,
    password: formData.password,
  };

  users.push(newUser);

  localStorage.setItem("users", JSON.stringify(users));

  toast.success("Account Created Successfully!");

  setFormData({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  setTimeout(() => {
    navigate("/login");
  }, 1000);
};

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100 flex justify-center items-center px-4">

      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl hover:shadow-2xl transition duration-300 p-8">

        <div className="flex justify-center mb-3">
          <div className="bg-green-100 p-4 rounded-full">
            <MdFastfood className="text-5xl text-green-600" />
          </div>
        </div>

        <h1 className="text-4xl font-bold text-center text-green-600">
          FoodieHub
        </h1>

        <p className="text-center text-gray-500 mt-2">
          Create your account 🚀
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-5">

          {/* Name */}
          <div className="relative">
            <FaUser className="absolute top-4 left-4 text-gray-400" />
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border rounded-xl py-3 pl-12 pr-4 outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

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
              className="absolute top-4 right-4"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          {/* Confirm Password */}
          <div className="relative">
            <FaLock className="absolute top-4 left-4 text-gray-400" />

            <input
              type={showConfirm ? "text" : "password"}
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full border rounded-xl py-3 pl-12 pr-12 outline-none focus:ring-2 focus:ring-green-500"
              required
            />

            <button
              type="button"
              className="absolute top-4 right-4"
              onClick={() => setShowConfirm(!showConfirm)}
            >
              {showConfirm ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          {/* Terms */}
          <label className="flex items-center gap-2 text-sm text-gray-600">
            <input type="checkbox" required />
            I agree to the Terms & Conditions
          </label>

          {/* Button */}
          <button className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-xl font-semibold flex justify-center items-center gap-2 transition">

            Create Account

            <FaArrowRight />

          </button>

        </form>

        <p className="text-center mt-6 text-gray-600">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-green-600 font-semibold hover:underline"
          >
            Login
          </Link>
        </p>

      </div>

    </div>
  );
}

export default SignupForm;