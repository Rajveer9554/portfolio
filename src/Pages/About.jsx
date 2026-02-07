import React from 'react'
import { motion } from 'framer-motion';
import ParticlesBackground from '../Components/ParticlesBackground';

function About() {
  return (
    <section id='about' className='w-full min-h-screen flex  justify-center relative bg-black text-white overflow-hidden '>
      <ParticlesBackground />
      {/* div for hold 2 gradient circle */}  
      <div className='absolute inset-0'>
        {/* // right top */}
     <div
     className='absolute -top-32 -left-32 w-[70vw] sm:w-[z-500vw] md:w-[50vw]  h-[70vw] sm:h-[50vw] md:h-[40vw] max-w-[500px] max-h-[500px] rounded-full
     bg-linear-to-r from-green-400 to-blue-500  filter  opacity-30 sm:opacity-20 md:opacity-10 blur-[100px] sm:blur-[130px] md:blur-[150px]  animate-pulse'>
     
     </div>
     {/* //left bottom */}
     <div
     className='absolute bottom-0 right-0 w-[70vw] sm:w-[z-500vw] md:w-[50vw]  h-[70vw] sm:h-[50vw] md:h-[40vw] max-w-[500px] max-h-[500px] rounded-full
     bg-linear-to-r from-green-400 to-blue-500  filter  opacity-30 sm:opacity-20 md:opacity-10 blur-[100px] sm:blur-[130px] md:blur-[150px]  animate-pulse delay-500'>
     
     </div>
      </div>

    {/* content */}
      <motion.div
        className=" max-w-4xl mr-4 mx-auto   mt-24 p-10 mb-50 rounded-3xl bg-transparent  border-2 border-transparent"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl font-bold py-3 text-transparent bg-clip-text bg-linear-to-r from-white to-purple-800 animate-bounce">
          Hello! I'm Rajveer Pratap Singh
        </h2>

        <p className="font- mt-6 text-white text-xl ">
          <li className=''>
  
            {" "}
            A passionate Final-Year B.Tech Computer Science Student with a deep
            interest in building modern web applications.
          </li>
          <li className='mt-5   '>
            I specialize in creating beautiful, responsive, and interactive
            front-end designs using React.js, Tailwind CSS, and other
            cutting-edge tools.
          </li>
          <li className='mt-5'>
            I have a strong focus on user experience and clean UI design,
            ensuring every website I build feels smooth and professional.
          </li>
          <li className='mt-5'>
            On the backend, I possess around 40% working knowledge of Node.js
            and Express.js, enabling me to connect powerful logic with
            attractive design.
          </li>
          <li className='mt-5'>
            {" "}
            I also have experience working with databases like MongoDB, allowing
            me to create full-stack applications that are both functional and
            visually appealing.
          </li>
          <li className='mt-5'>
            I enjoy transforming creative ideas into real-world digital
            experiences that are both functional and visually appealing.
          </li>
          <li className='mt-5'>
            My goal is to become a Full Stack Developer who blends technical
            precision with creative innovation.
          </li>

          <li className='mt-5'>
            {" "}
            With every project I build, I aim to learn something new and solve
            real-world problems. I'm always eager to improve my skills,
            contribute to exciting tech communities, and collaborate with
            like-minded people.{" "}
          </li>
        </p>

        
      </motion.div>

    </section>
  )
}

export default About
