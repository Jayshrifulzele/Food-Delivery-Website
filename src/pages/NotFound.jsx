import React from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

function NotFound() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-green-50 px-6">

      <h1 className="text-8xl font-bold text-green-600">
        404
      </h1>

      <h2 className="text-3xl font-bold mt-4">
        Page Not Found
      </h2>

      <p className="text-gray-500 mt-3 text-center max-w-md">
        Oops! The page you are looking for doesn't exist or has been moved.
      </p>

      <Link
        to="/"
        className="mt-8 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl flex items-center gap-2"
      >
        <FaHome />
        Back to Home
      </Link>

    </div>
  );
}

export default NotFound;