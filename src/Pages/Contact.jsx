import React from "react";
import ParticlesBackground from "../Components/ParticlesBackground";
import coding4 from "../assets/coding4.png";

function Contact() {
  return (
    <section id="contact" className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-black px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
      <ParticlesBackground />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl gap-10 lg:grid-cols-2 lg:gap-12">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-xl sm:p-8">
          <h1 className="text-center text-3xl font-extrabold text-white sm:text-4xl">
            Get in touch
          </h1>

          <div className="mt-8 space-y-4 text-sm text-gray-200 sm:text-base">
            <div className="flex items-center justify-center gap-3 rounded-xl border border-white/10 p-4 transition-colors hover:bg-white/10 sm:justify-start">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" className="h-6 w-6 text-gray-400">
                <path d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z" />
                <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="text-center font-semibold sm:text-left">Noida, Uttar Pradesh, India</span>
            </div>

            <div className="flex items-center justify-center gap-3 rounded-xl border border-white/10 p-4 transition-colors hover:bg-white/10 sm:justify-start">
              <span className="font-semibold">📞 +91 9554120959</span>
            </div>

            <div className="flex items-center justify-center gap-3 rounded-xl border border-white/10 p-4 transition-colors hover:bg-white/10 sm:justify-start">
              <a href="mailto:rajveer786067@gmail.com" className="break-all font-semibold text-blue-400 hover:underline">
                📧 rajveer786067@gmail.com
              </a>
            </div>

            <div className="flex items-center justify-center gap-3 rounded-xl border border-white/10 p-4 transition-colors hover:bg-white/10 sm:justify-start">
              <a href="https://www.linkedin.com/in/rajveersingh9554" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-400 hover:underline">
                🔗 LinkedIn Profile
              </a>
            </div>

            <div className="flex items-center justify-center gap-3 rounded-xl border border-white/10 p-4 transition-colors hover:bg-white/10 sm:justify-start">
              <a href="https://www.instagram.com/__rajveer_pra_14" target="_blank" rel="noopener noreferrer" className="font-semibold text-pink-400 hover:underline">
                📸 Instagram Profile
              </a>
            </div>

            <div className="flex items-center justify-center gap-3 rounded-xl border border-white/10 p-4 transition-colors hover:bg-white/10 sm:justify-start">
              <svg viewBox="0 0 32 32" fill="currentColor" className="h-6 w-6 text-green-400">
                <path d="M16.002 3.2c-7.06 0-12.8 5.742-12.8 12.8 0 2.257.59 4.463 1.713 6.414L3.2 28.8l6.558-1.686A12.734 12.734 0 0016.002 28.8c7.058 0 12.798-5.742 12.798-12.8 0-7.058-5.74-12.8-12.798-12.8z" />
              </svg>
              <a href="https://wa.me/919554120959?text=Hello%20Rajveer,%20I%20visited%20your%20portfolio" target="_blank" rel="noopener noreferrer" className="font-semibold text-green-400 hover:underline">
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <img src={coding4} alt="coding illustration" className="h-auto w-full max-w-xs sm:max-w-sm md:max-w-md" />
        </div>
      </div>
    </section>
  );
}

export default Contact;
