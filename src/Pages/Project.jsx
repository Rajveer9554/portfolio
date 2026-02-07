import React from 'react'
import coding1 from "../assets/coding1.png";

function Project() {
  return (
    <div id='project' className='min-h-screen relative w-full bg-black text-white flex justify-center overflow-hidden '>
      {/* main div */}
      <div className='relative z-10 mt-10 w-full h-full max:w-7xl mx-auto px-4 grid grid:cols-1 lg:grid-cols-2  text-center' >
       {/* left */}
       <div className='relative'>
        <img src={coding1} alt='img' className='w-full max-w-lg mx-auto'/>
       </div>
        {/* right */}   
         <div className=" mb-10 justify-center  h-full lg:text-left relative lg:px-10 ">
          {" "}
          {/* create left  for large screen */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-5xl font-bold text-transparent bg-clip-text bg-linear-to-r from-purple-500 to-green-600  drop-shadow-lg ">
            {" "}
            My Works
          </h1>
          <p className=" mt-2 text-base sm:text-xl text-gray-300 max-w-2xl mx-auto lg:mx-0 font-light">
            Here are some of my projects that showcase my skills and expertise in web development. 
          </p>
          <li className="mt-3 border-2 border-gray-500 p-4 rounded-lg  hover:shadow-lg hover:shadow-amber-500 transition-shadow">
            <span className='text-xl font-bold'>
            Awaze-E-Janata:👉🏻👉🏻
            </span>
            <a
              href="https://awaze-e-janta.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-500 hover:underline transition-colors text-white"
            >
              Click Here
            </a>
            <h1 className="text-xl text-semibold text-white mt-1 ">
              {" "}
              Awaze-E-Janata is designed to give citizens a simple and efficient
              way to report their problems using AI. I built this platform to
              empower users, making it easier for them to communicate their
              issues and for authorities to respond effectively. The project
              also allowed me to enhance my MERN Stack skills, especially in
              frontend design and AI integration. I have used
              Technologies:React.js, Tailwind Css, Javascript{" "}
            </h1>
          </li>
          <li className="mt-7 border-2 border-gray-500 p-4 rounded-lg  hover:shadow-lg hover:shadow-amber-500 transition-shadow">
            <span className='text-xl font-bold mt-7'> Myself Porfolio:{" 👉🏻👉🏻 "} </span>
            <a
              href="https://rajveer9554.github.io/Myself-portfolio/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-500 hover:underline transition-colors text-white"
            >
              Click Here
            </a>
            <h1 className="text-xl text-semibold text-white mt-1 ">
              I created my personal portfolio to highlight my projects,
              technical skills, and design abilities in one place. It allows me
              to demonstrate my frontend expertise, creativity in UI/UX, and
              working knowledge of frontend development, giving recruiters a
              comprehensive view of my capabilities.
            </h1>
          </li>
          <li className="mt-7 border-2 border-gray-500 p-4 rounded-lg hover:shadow-lg hover:shadow-amber-500 transition-shadow">
            <span className='text-xl font-bold'> Tic-Tac-Toe:{" 👉🏻👉🏻 "} </span>
            <a
              href="https://rajveer9554.github.io/Tic-Tac-Toe/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-500 hover:underline transition-colors text-white"
            >
              Click Here
            </a>
            <h1 className="text-xl text-semibold text-white mt-1  ">
              As a Practicing Coding and programming i have developed this
              project usingHTML,CSS,Javascript. This Tic-Tac-Toe game is a web
              application where two players take turns marking X and O on a 3x3
              grid. The game checks for winning combinations and draws
              dynamically using JavaScript logic. I built this project to
              practice DOM manipulation, event handling, and responsive frontend
              design while creating a fun interactive game.
            </h1>
          </li>
          </div>
        
      </div>
      
    </div>
  )
}

export default Project
