import React, { useEffect, useMemo, useState } from "react";
import ParticlesBackground from "../Components/ParticlesBackground.jsx";
import { motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import coding5 from "../assets/coding5.jpeg";

function Home() {
  const roles = useMemo(() => ["MERN Stack Developer","Web Developer","Agentic Ai", "Frontend Developer"], []);
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[index];
    const timeout = setTimeout(() => {
      if (!deleting && subIndex < currentRole.length) {
        //setSubIndex((v) => v + 1) → ek character add karta hai
        setSubIndex((v) => v + 1);
      } else if (!deleting && subIndex === currentRole.length) {
        setTimeout(() => setDeleting(true), 1200);
      } else if (deleting && subIndex > 0) {
        // setSubIndex((v) => v - 1) → ek character remove karta hai
        setSubIndex((v) => v - 1);
      } else if (deleting && subIndex === 0) {
        setDeleting(false);
        //setIndex((v) => (v + 1) % roles.length) → next role par jaata hai
        setIndex((v) => (v + 1) % roles.length);
      }
    }, deleting ? 40 : 60);

    return () => clearTimeout(timeout);
  }, [subIndex, deleting, index, roles]);

  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden bg-black">
      <ParticlesBackground />

      <div className="absolute inset-0">
        <div className="absolute -top-32 -left-32 h-[70vw] w-[70vw] max-h-[500px] max-w-[500px] rounded-full bg-linear-to-r from-green-400 to-blue-500 opacity-30 blur-[100px] animate-pulse sm:h-[50vw] sm:w-[50vw] sm:opacity-20 sm:blur-[130px] md:h-[40vw] md:w-[40vw] md:opacity-10 md:blur-[150px]" />
        <div className="absolute bottom-0 right-0 h-[70vw] w-[70vw] max-h-[500px] max-w-[500px] rounded-full bg-linear-to-r from-green-400 to-blue-500 opacity-30 blur-[100px] animate-pulse delay-500 sm:h-[50vw] sm:w-[50vw] sm:opacity-20 sm:blur-[130px] md:h-[40vw] md:w-[40vw] md:opacity-10 md:blur-[150px]" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl flex-col items-center justify-center gap-10 px-4 py-20 sm:px-6 sm:py-24 lg:grid lg:grid-cols-[1.1fr_0.9fr] lg:gap-12 lg:px-8 lg:py-28">
        <div className="flex flex-col items-center justify-center text-center lg:items-start lg:text-left">
          <div className="w-full max-w-2xl">
            <motion.div
              className="mb-3 min-h-[1.6em] text-xl font-semibold tracking-wide text-white sm:text-2xl md:text-3xl lg:text-4xl"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span>{roles[index].substring(0, subIndex)}</span>
              <span className="ml-1 inline-block w-[2px] animate-pulse bg-white align-middle" style={{ height: "1em" }} />
            </motion.div>

            <motion.h1
              className="text-4xl font-bold text-transparent bg-clip-text bg-linear-to-r from-blue-500 to-green-600 drop-shadow-2xl sm:text-5xl md:text-6xl lg:text-7xl"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.1 }}
            >
              Hello, I&apos;m <br />
              <span className="text-4xl font-bold text-transparent bg-clip-text bg-linear-to-r from-purple-500 to-green-600 drop-shadow-lg sm:text-5xl md:text-6xl lg:text-5xl lg:whitespace-nowrap">
                Rajveer Pratap Singh
              </span>
            </motion.h1>

            <motion.p
              className="mx-auto mt-6 max-w-2xl text-base font-light text-gray-300 sm:text-lg lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              I&apos;m a passionate and dedicated Full Stack Web Developer with a strong focus on the MERN Stack. I love building modern, responsive, and user-friendly web applications that solve real-world problems.
            </motion.p>

            <motion.div
              className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <a href="/Rajveer_PR_Singh_Resume.pdf" target="_blank" rel="noopener noreferrer" className="w-full rounded-full bg-linear-to-r from-pink-400 to-blue-500 px-6 py-3 text-center font-semibold text-white shadow-lg transition-opacity duration-300 hover:opacity-90 sm:w-auto">
                My Resume
              </a>
              <a href="#project" className="w-full rounded-full bg-linear-to-r from-pink-400 to-blue-500 px-6 py-3 text-center font-semibold text-white shadow-lg transition-opacity duration-300 hover:opacity-90 sm:w-auto">
                My Projects
              </a>
            </motion.div>

            <motion.div
              className="mt-6 flex flex-wrap items-center justify-center gap-4 text-2xl text-white sm:justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <a href="https://www.linkedin.com/in/rajveersingh9554" target="_blank" rel="noopener noreferrer" className="transition-colors duration-300 hover:text-cyan-400">
                <FaLinkedin />
              </a>
              <a href="https://github.com/Rajveer9554" target="_blank" rel="noopener noreferrer" className="transition-colors duration-300 hover:text-cyan-400">
                <FaGithub />
              </a>
              <a href="https://www.instagram.com/__rajveer_pra_14" target="_blank" rel="noopener noreferrer" className="transition-colors duration-300 hover:text-cyan-400">
                <FaInstagramSquare />
              </a>
              <a href="#contact" className="rounded-full bg-linear-to-r from-pink-400 to-blue-500 px-5 py-2 text-sm font-semibold text-white shadow-lg transition-opacity duration-300 hover:opacity-90">
                Reach Out
              </a>
            </motion.div>
          </div>
        </div>

        <div className="w-full">
          <motion.img
            src={coding5}
            alt="Rajveer"
            className="mx-auto w-full max-w-md rounded-full object-cover shadow-2xl hover:animate-pulse sm:max-w-lg"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          />
          <p className="mt-4 text-center text-sm font-bold italic text-gray-400 sm:text-lg">
            💡 Behind every successful app is a programmer who didn&apos;t give up.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Home;
