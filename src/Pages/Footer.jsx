import React from 'react';
import { FaGithub } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="border-y border-white/10 bg-black">
      <div className="mx-auto w-full max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <span className="text-sm text-white">
            <a href="https://instagram.com/__rajveer_pra_14/" className="hover:text-blue-400">
              __rajveer_pra_14
            </a>
            . Follow Us
          </span>

          <h1 className="text-lg font-bold animate-pulse text-blue-400 sm:text-xl">
            ❤️❤️ Thank you for visiting my portfolio!
          </h1>

          <div className="flex items-center justify-center gap-2 text-sm text-white sm:justify-end">
            <a href="https://github.com/Rajveer9554" className="hover:text-blue-400">
              Rajveer Github
            </a>
            <FaGithub size={20} className="transition-colors duration-300 hover:text-yellow-400" />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
