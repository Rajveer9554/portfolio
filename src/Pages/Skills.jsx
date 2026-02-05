import React from "react";
import { motion } from "framer-motion";

import { FaReact } from "react-icons/fa";
import { FaJsSquare } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa6"
import { FaCss3Alt } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiPostman } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { FaNode } from "react-icons/fa6";
import coding3 from "../assets/coding3.png";

function Skills() {
  return (
    <section
      id="skills"
      className="w-full min-h-screen flex  justify-center relative bg-black text-white overflow-hidden "
    >
      <div className="absolute inset-0">
        {/* // right top */}
        <div
          className="absolute -top-32 -left-32 w-[70vw] sm:w-[z-500vw] md:w-[50vw]  h-[70vw] sm:h-[50vw] md:h-[40vw] max-w-[500px] max-h-[500px] rounded-full
     bg-linear-to-r from-green-400 to-blue-500  filter  opacity-30 sm:opacity-20 md:opacity-10 blur-[100px] sm:blur-[130px] md:blur-[150px]  animate-pulse"
        ></div>
        {/* //left bottom */}
        <div
          className="absolute bottom-0 right-0 w-[70vw] sm:w-[z-500vw] md:w-[50vw]  h-[70vw] sm:h-[50vw] md:h-[40vw] max-w-[500px] max-h-[500px] rounded-full
      bg-linear-to-r from-green-400 to-blue-500  filter  opacity-30 sm:opacity-20 md:opacity-10 blur-[100px] sm:blur-[130px] md:blur-[150px]  animate-pulse delay-500"
        ></div>
      </div>
      {/* content */}
      <div className="relative z-10 mt-10 w-full h-full max:w-7xl mx-auto px-4 grid grid:cols-1 lg:grid-cols-2  text-center  ">
        <div className=" flex flex-col justify-center text-center h-full lg:text-left relative lg:px-10 ">
          {" "}
          {/* create left  for large screen */}
          <h1 className="text-center text-4xl sm:text-5xl md:text-6xl lg:text-5xl font-bold text-transparent bg-clip-text bg-linear-to-r from-purple-500 to-green-600  drop-shadow-lg ">
            {" "}
            My Skills
          </h1>
         <motion.div
  className="
    flex 
    flex-wrap 
    mt-40 
    text-gray-300 
    max-w-2xl 
    text-center
    lg:mx-0 animate-pulse mx-auto
  "
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
>
  {/* Skill Item */}
  <div className="w-1/2 sm:w-1/3 lg:w-1/5 flex flex-col items-center gap-2 mb-12">
    <FaReact size={60} className="hover:text-cyan-400 transition-colors duration-300" />
    <p>React</p>
  </div>

  <div className="w-1/2 sm:w-1/3 lg:w-1/5 flex flex-col items-center gap-2 mb-12">
    <RiTailwindCssFill size={60} className="hover:text-sky-400 transition-colors duration-300" />
    <p>Tailwind</p>
  </div>

  <div className="w-1/2 sm:w-1/3 lg:w-1/5 flex flex-col items-center gap-2 mb-12">
    <FaJsSquare size={60} className="hover:text-yellow-400 transition-colors duration-300" />
    <p>JavaScript</p>
  </div>

  <div className="w-1/2 sm:w-1/3 lg:w-1/5 flex flex-col items-center gap-2 mb-12">
    <FaHtml5 size={60} className="hover:text-yellow-400 transition-colors duration-300" />
    <p>HTML</p>
  </div>

  <div className="w-1/2 sm:w-1/3 lg:w-1/5 flex flex-col items-center gap-2 mb-12">
    <FaCss3Alt size={60} className="hover:text-yellow-400 transition-colors duration-300" />
    <p>CSS</p>
  </div>

  <div className="w-1/2 sm:w-1/3 lg:w-1/5 flex flex-col items-center gap-2 mb-12">
    <DiMongodb size={60} className="hover:text-yellow-400 transition-colors duration-300" />
    <p>MongoDB</p>
  </div>
  <div className="w-1/2 sm:w-1/3 lg:w-1/5 flex flex-col items-center gap-2 mb-12">
    <SiPostman size={60} className="hover:text-yellow-400 transition-colors duration-300" />
    <p>Postman</p>
  </div>
  <div className="w-1/2 sm:w-1/3 lg:w-1/5 flex flex-col items-center gap-2 mb-12">
    <FaGithub size={60} className="hover:text-yellow-400 transition-colors duration-300" />
    <p>GitHub</p>
  </div>
  <div className="w-1/2 sm:w-1/3 lg:w-1/5 flex flex-col items-center gap-2 mb-12">
    <FaNode size={60} className="hover:text-yellow-400 transition-colors duration-300" />
    <p>Node Js</p>
  </div>
</motion.div>

        </div>

        {/* right */}
        <div className="relative">
          <motion.img
            src={coding3}

            alt="Rajveer"
            className="mt-10 hover:animate-pulse w-full max-w-lg mx-auto"
          />
         </div>

      </div>
    </section>
  );
}

export default Skills;
