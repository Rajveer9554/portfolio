import React from "react";
import ParticlesBackground from "../Components/ParticlesBackground";
import coding4 from "../assets/coding4.png";

function Contact() {
  return (
    <div
      id="contact"
      className="relative w-full min-h-screen bg-black flex items-center justify-center overflow-hidden"
    >
      <ParticlesBackground />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24 grid grid-cols-1 md:grid-cols-2 gap-10">
        
        {/* LEFT */}
        <div className="p-6 sm:p-8  rounded-lg shadow-lg">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-800 text-center">
            Get in touch
          </h1>

          {/* Contact Items */}
          <div className="mt-8 space-y-4 text-gray-600 text-sm sm:text-base">

            {/* Location */}
            <div className="flex items-center justify-center sm:justify-start gap-3 border-2 border-gray-300 rounded-lg p-4 hover:bg-gray-100 transition-colors">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                className="w-6 h-6 text-gray-500"
              >
                <path d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z" />
                <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="font-semibold text-center sm:text-left">
                Lucknow, Uttar Pradesh, India
              </span>
            </div>

            {/* Phone */}
            <div className="flex items-center justify-center sm:justify-start gap-3 border-2 border-gray-300 rounded-lg p-4 hover:bg-gray-100 transition-colors">
              <span className="font-semibold">
                📞 +91 9554120959
              </span>
            </div>

            {/* Email */}
            <div className="flex items-center justify-center sm:justify-start gap-3 border-2 border-gray-300 rounded-lg p-4 hover:bg-gray-100 transition-colors">
              <a
                href="mailto:rajveer786067@gmail.com"
                className="text-blue-600 font-semibold hover:underline break-all"
              >
                📧 rajveer786067@gmail.com
              </a>
            </div>

            {/* LinkedIn */}
            <div className="flex items-center justify-center sm:justify-start gap-3 border-2 border-gray-300 rounded-lg p-4 hover:bg-gray-100 transition-colors">
              <a
                href="https://www.linkedin.com/in/rajveer-pratap-singh"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 font-semibold hover:underline"
              >
                🔗 LinkedIn Profile
              </a>
            </div>

            {/* Instagram */}
            <div className="flex items-center justify-center sm:justify-start gap-3 border-2 border-gray-300 rounded-lg p-4 hover:bg-gray-100 transition-colors">
              <a
                href="https://www.instagram.com/__rajveer_pra_14"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-500 font-semibold hover:underline"
              >
                📸 Instagram Profile
              </a>
            </div>

            {/* WhatsApp */}
            <div className="flex items-center justify-center sm:justify-start gap-3 border-2 border-gray-300 rounded-lg p-4 hover:bg-gray-100 transition-colors">
              <svg
                viewBox="0 0 32 32"
                fill="currentColor"
                className="w-6 h-6 text-green-500"
              >
                <path d="M16.002 3.2c-7.06 0-12.8 5.742-12.8 12.8 0 2.257.59 4.463 1.713 6.414L3.2 28.8l6.558-1.686A12.734 12.734 0 0016.002 28.8c7.058 0 12.798-5.742 12.798-12.8 0-7.058-5.74-12.8-12.798-12.8z" />
              </svg>
              <a
                href="https://wa.me/919554120959?text=Hello%20Rajveer,%20I%20visited%20your%20portfolio"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 font-semibold hover:underline"
              >
                Chat on WhatsApp
              </a>
            </div>

          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex items-center justify-center">
          <img
            src={coding4}
            alt="coding illustration"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md h-auto"
          />
        </div>

      </div>
    </div>
  );
}

export default Contact;
