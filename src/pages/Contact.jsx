import React, { useState } from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaPaperPlane,
} from "react-icons/fa";
import { toast } from "react-toastify";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    toast.success("Message sent successfully!");

    setForm({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="bg-slate-50 min-h-screen py-14">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800">
            Contact Us
          </h1>

          <p className="text-gray-500 mt-3">
            We'd love to hear from you. Send us your questions or feedback.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">

          {/* Left */}

          <div className="space-y-6">

            <div className="bg-white rounded-2xl shadow-md p-6 flex gap-4">
              <div className="bg-green-100 p-4 rounded-full h-fit">
                <FaMapMarkerAlt className="text-green-600 text-xl" />
              </div>

              <div>
                <h3 className="font-bold text-lg">Address</h3>

                <p className="text-gray-500 mt-2">
                  Nagpur, Maharashtra, India
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-md p-6 flex gap-4">
              <div className="bg-green-100 p-4 rounded-full h-fit">
                <FaEnvelope className="text-green-600 text-xl" />
              </div>

              <div>
                <h3 className="font-bold text-lg">Email</h3>

                <p className="text-gray-500 mt-2">
                  support@foodiehub.com
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-md p-6 flex gap-4">
              <div className="bg-green-100 p-4 rounded-full h-fit">
                <FaPhoneAlt className="text-green-600 text-xl" />
              </div>

              <div>
                <h3 className="font-bold text-lg">Phone</h3>

                <p className="text-gray-500 mt-2">
                  +91 9876543210
                </p>
              </div>
            </div>

          </div>

          {/* Right */}

          <div className="bg-white rounded-2xl shadow-md p-8">

            <form onSubmit={handleSubmit} className="space-y-5">

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                className="w-full border rounded-xl p-3 outline-none focus:ring-2 focus:ring-green-500"
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={form.email}
                onChange={handleChange}
                className="w-full border rounded-xl p-3 outline-none focus:ring-2 focus:ring-green-500"
                required
              />

              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={form.subject}
                onChange={handleChange}
                className="w-full border rounded-xl p-3 outline-none focus:ring-2 focus:ring-green-500"
                required
              />

              <textarea
                rows="6"
                name="message"
                placeholder="Write your message..."
                value={form.message}
                onChange={handleChange}
                className="w-full border rounded-xl p-3 outline-none focus:ring-2 focus:ring-green-500 resize-none"
                required
              />

              <button
                className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-xl flex justify-center items-center gap-2 transition"
              >
                <FaPaperPlane />
                Send Message
              </button>

            </form>

          </div>

        </div>

        {/* Map */}

        <div className="mt-14">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps?q=Nagpur&output=embed"
            className="w-full h-[400px] rounded-2xl shadow-md border-0"
            loading="lazy"
          ></iframe>
        </div>

      </div>
    </div>
  );
}

export default Contact;