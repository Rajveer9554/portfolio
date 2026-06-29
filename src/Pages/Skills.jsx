import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaJsSquare, FaHtml5, FaCss3Alt, FaGithub, FaNode, FaFigma } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiPostman } from "react-icons/si";
import coding3 from "../assets/coding3.png";

const skills = [
  { icon: <FaReact size={48} />, label: "React" },
  { icon: <RiTailwindCssFill size={48} />, label: "Tailwind" },
  { icon: <FaJsSquare size={48} />, label: "JavaScript" },
  { icon: <FaHtml5 size={48} />, label: "HTML" },
  { icon: <FaCss3Alt size={48} />, label: "CSS" },
  { icon: <DiMongodb size={48} />, label: "MongoDB" },
  { icon: <SiPostman size={48} />, label: "Postman" },
  { icon: <FaGithub size={48} />, label: "GitHub" },
  { icon: <FaNode size={48} />, label: "Node Js" },
  { icon: <FaFigma size={48} />, label: "Figma" },
];

function Skills() {
  return (
    <section id="skills" className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-black px-4 py-20 text-white sm:px-6 sm:py-24 lg:px-8 lg:py-28">
      <div className="absolute inset-0">
        <div className="absolute -top-32 -left-32 h-[70vw] w-[70vw] max-h-[500px] max-w-[500px] rounded-full bg-linear-to-r from-green-400 to-blue-500 opacity-30 blur-[100px] animate-pulse sm:h-[50vw] sm:w-[50vw] sm:opacity-20 sm:blur-[130px] md:h-[40vw] md:w-[40vw] md:opacity-10 md:blur-[150px]" />
        <div className="absolute bottom-0 right-0 h-[70vw] w-[70vw] max-h-[500px] max-w-[500px] rounded-full bg-linear-to-r from-green-400 to-blue-500 opacity-30 blur-[100px] animate-pulse delay-500 sm:h-[50vw] sm:w-[50vw] sm:opacity-20 sm:blur-[130px] md:h-[40vw] md:w-[40vw] md:opacity-10 md:blur-[150px]" />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
        <div className="flex flex-col items-center justify-center text-center lg:items-start lg:text-left">
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-linear-to-r from-purple-500 to-green-600 drop-shadow-lg sm:text-5xl lg:text-6xl">
            My Skills
          </h1>

          <motion.div
            className="mt-8 grid w-full grid-cols-2 gap-4 text-gray-300 sm:grid-cols-3 lg:mt-10 lg:grid-cols-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            {skills.map((skill, index) => (
              <div key={index} className="flex flex-col items-center gap-2 rounded-2xl border border-white/10 bg-white/5 p-4 text-center transition-all duration-300 hover:border-green-400 hover:shadow-lg hover:shadow-green-500/20">
                <div className="transition-colors duration-300 hover:text-cyan-400">{skill.icon}</div>
                <p className="text-sm sm:text-base">{skill.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="flex items-center justify-center">
          <motion.img src={coding3} alt="Rajveer" className="mt-2 w-full max-w-md rounded-3xl object-cover hover:animate-pulse sm:max-w-lg" />
        </div>
      </div>
    </section>
  );
}

export default Skills;
