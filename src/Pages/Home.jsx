import React, { useEffect } from "react";
import ParticlesBackground from "../Components/ParticlesBackground.jsx";
import { motion } from "framer-motion";
import { useMemo } from "react";
import { useState } from "react";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import coding2 from "../assets/coding2.png";

function Home() {
  const roles = useMemo(() => ["Web Developer", "Frontend Developer"], []);
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[index]; // current role jisse type krna h
    const timeout = setTimeout(
      () => {
        if (!deleting && subIndex < currentRole.length)
          setSubIndex((v) => v + 1); // typing krna h
        else if (!deleting && subIndex === currentRole.length)
          setTimeout(() => setDeleting(true), 1200); // wait krna h thoda sa jb pura word type ho jaye
        else if (deleting && subIndex > 0)
          setSubIndex((v) => v - 1); // deleting krna h
        else if (deleting && subIndex === 0) {
          setDeleting(false);
          setIndex((v) => (v + 1) % roles.length);
        } // next role pr jana h
      },
      deleting ? 40 : 60,
    ); // deleting fast krna h typing se
    return () => clearTimeout(timeout); // cleanup krna h timeout ka
  }, [subIndex, deleting, index, roles]);

  return (
    <section
      id="home"
      className="h-screen w-full relative bg-black overflow-hidden"
    >
      <ParticlesBackground />
      {/* div for hold 2 gradient circle */}
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
        <div className=" flex flex-col justify-center text-center h-full lg:text-left relative ">
          {" "}
          {/* create left  for large screen */}
          <div className="w-full lg:px-34 mx-auto max-w-[48rem] ">
            {/* typerighter */}
            <motion.div
              className="mb-3 text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white  tracking-wide min-h-[1.6em] font-semibold "
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span>{roles[index].substring(0, subIndex)}</span>
              <span
                className="inline-block w-[2px] ml-1 bg-white animate-pulse align-middle"
                style={{ height: "1em" }}
              ></span>
            </motion.div>

            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-linear-to-r from-blue-500 to-green-600  drop-shadow-2xl"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.1 }}
            >
              Hello, I'm <br />{" "}
              <span className=" font-bold text-5xl sm:text-xl md:text-7xl lg:text-5xl lg:whitespace-nowrap text-transparent bg-clip-text bg-linear-to-r from-purple-500 to-green-600  drop-shadow-lg ">
                Rajveer Pratap Singh
              </span>{" "}
              <br />
            </motion.h1>
            <motion.p
              className=" mt-6 text-base sm:text-xl text-gray-300 max-w-2xl mx-auto lg:mx-0 font-light"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              I’m a passionate and dedicated Full Stack Web Developer with a
              strong focus on the MERN Stack (MongoDB, Express.js, React.js, and
              Node.js). I love building modern, responsive, and user-friendly
              web applications that solve real-world problems.
            </motion.p>

            {/* buttons */}
            <motion.div
              className="mt-10 flex flex-row items-center justify-center lg:justify-start gap-4 "
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <a
                href="/Rajveer Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className=" bg-linear-to-r from-pink-400 to-blue-500  px-6 py-3 rounded-full text-white font-semibold shadow-lg hover:opacity-90 transition-opacity duration-300 text-center "
                // initial={{opacity:0, y: 20}}
                // animate={{opacity:1, y:0}}
                // transition={{delay:0.6, duration:0.8}}
              >
                My Resume
              </a>

              <a
                href="/project"
                className=" bg-linear-to-r from-pink-400 to-blue-500  px-6 py-3 rounded-full text-white font-semibold shadow-lg hover:opacity-90 transition-opacity duration-300 text-center "
                // initial={{opacity:0, y: 20}}
                // animate={{opacity:1, y:0}}
                // transition={{delay:0.6, duration:0.8}}
              >
                My Projects
              </a>
            </motion.div>
            <div>
              {/* social media icons */}
              <motion.div
                className="mt-5 flex flex-row items-center justify-center lg:justify-start gap-6 text-white text-3xl "
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                <a
                  href="https://www.linkedin.com/in/rajveersingh9554"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className="hover: transition-colors duration-300" />
                </a>
                <a
                  href="https://github.com/Rajveer9554"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className=" transition-colors duration-300" />
                </a>
                <a
                  href="https://www.instagram.com/__rajveer_pra_14"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagramSquare className=" transition-colors duration-300" />
                </a>
                <div className=" flex items-center  space-x-4 ">
                  <a
                    href="#contact"
                    className="bg-linear-to-r  from-pink-400 t0-blue-500 px-5 text-white py-2 rounded-full font-semibold shadow-lg hover:opacity-90 transition-opacity duration-300  "
                  >
                    Reach Out
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* right side */}
        <div className="">
          <motion.img
            src={coding2}
            alt="Rajveer"
            className=" hover:animate-bounce w-full max-w-lg mx-auto"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          />
          <p className="text-center font-bold  text-gray-400 italic text-xl animate-bounce">
            💡Behind every successful app is a programmer who didn’t give up.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Home;
