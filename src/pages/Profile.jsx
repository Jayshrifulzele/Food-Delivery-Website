import React, { useState, useEffect, useRef } from "react";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaCamera,
  FaArrowLeft,
  FaHeart,
  FaClipboardList,
} from "react-icons/fa";

function Profile() {
  const fileInputRef = useRef(null);

  const wishlist = useSelector((state) => state.wishlist);
  const orders = useSelector((state) => state.orders);

  const [profile, setProfile] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const [image, setImage] = useState(
    localStorage.getItem("profileImage") ||
      "https://i.pravatar.cc/200?img=12"
  );

  useEffect(() => {
    const saved = localStorage.getItem("profile");

    if (saved) {
      setProfile(JSON.parse(saved));
    }
  }, []);

  const completed = Object.values(profile).filter(
    (value) => value.trim() !== ""
  ).length;

  const percentage = completed * 25;

  const saveProfile = () => {
    localStorage.setItem("profile", JSON.stringify(profile));
    localStorage.setItem("profileImage", image);
    toast.success("Profile Saved Successfully!");
  };

  const changeImage = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onloadend = () => {
      setImage(reader.result);
    };

    reader.readAsDataURL(file);
  };

  return (
    <div className="min-h-screen bg-slate-100 py-10 px-5">

      <div className="max-w-xl mx-auto">

        {/* Back Button */}

        <Link
          to="/"
          className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-semibold mb-6"
        >
          <FaArrowLeft />
          Back Home
        </Link>

        {/* Card */}

        <div className="bg-white rounded-3xl shadow-xl p-8">

          {/* Profile Image */}

          <div className="flex flex-col items-center">

            <div className="relative">

              <img
                src={image}
                alt="Profile"
                className="w-36 h-36 rounded-full object-cover border-4 border-green-500 shadow-lg"
              />

              <button
                onClick={() => fileInputRef.current.click()}
                className="absolute bottom-2 right-2 bg-green-500 text-white p-3 rounded-full hover:bg-green-600 transition"
              >
                <FaCamera />
              </button>

              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                hidden
                onChange={changeImage}
              />

            </div>

            <h2 className="text-3xl font-bold mt-5">
              {profile.name || "Welcome!"}
            </h2>

            <p className="text-gray-500">
              Manage your personal information
            </p>

          </div>

          {/* Form */}

          <div className="space-y-5 mt-8">

            <div className="relative">

              <FaUser className="absolute left-4 top-4 text-green-600" />

              <input
                type="text"
                placeholder="Full Name"
                value={profile.name}
                onChange={(e) =>
                  setProfile({
                    ...profile,
                    name: e.target.value,
                  })
                }
                className="w-full border rounded-xl p-3 pl-12 outline-none focus:ring-2 focus:ring-green-500"
              />

            </div>

            <div className="relative">

              <FaEnvelope className="absolute left-4 top-4 text-green-600" />

              <input
                type="email"
                placeholder="Email Address"
                value={profile.email}
                onChange={(e) =>
                  setProfile({
                    ...profile,
                    email: e.target.value,
                  })
                }
                className="w-full border rounded-xl p-3 pl-12 outline-none focus:ring-2 focus:ring-green-500"
              />

            </div>

            <div className="relative">

              <FaPhone className="absolute left-4 top-4 text-green-600" />

              <input
                type="text"
                placeholder="Phone Number"
                value={profile.phone}
                onChange={(e) =>
                  setProfile({
                    ...profile,
                    phone: e.target.value,
                  })
                }
                className="w-full border rounded-xl p-3 pl-12 outline-none focus:ring-2 focus:ring-green-500"
              />

            </div>

            <div className="relative">

              <FaMapMarkerAlt className="absolute left-4 top-4 text-green-600" />

              <textarea
                rows="3"
                placeholder="Address"
                value={profile.address}
                onChange={(e) =>
                  setProfile({
                    ...profile,
                    address: e.target.value,
                  })
                }
                className="w-full border rounded-xl p-3 pl-12 outline-none focus:ring-2 focus:ring-green-500"
              />

            </div>

          </div>

          



          {/* Save Button */}

          <button
  onClick={saveProfile}
  className="w-full mt-8 bg-green-600 hover:bg-green-700 text-white py-4 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transition duration-300"
>
  Save Changes
</button>

        </div>

      </div>

    </div>
  );
}

export default Profile;