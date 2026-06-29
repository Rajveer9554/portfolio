import React from "react";
import ProjectCard from "./ProjectCard.jsx";
import project1 from "../assets/Project1.png";
import project2 from "../assets/Project2.png";
import project3 from "../assets/Project3.png";

function Project() {
  const projects = [
    {
      image: project1,
      title: "Awaze-E-Janata",
      description: "AI-powered complaint management platform where citizens can report local issues, track complaint status, and communicate with authorities.",
      tech: ["React", "Tailwind", "Node", "MongoDB", "JWT Authentication", "Agentic AI"],
      live: "https://awaze-e-janta.vercel.app/",
      github: "https://github.com/Rajveer9554/",
    },
    {
      image: project2,
      title: "Rajveer Portfolio",
      description: "Modern developer portfolio showcasing projects, skills, and achievements with smooth animations and responsive UI.",
      tech: ["React", "Tailwind", "Framer Motion"],
      live: "https://rajveer9554.github.io/Myself-portfolio/",
      github: "https://github.com/Rajveer9554/",
    },
    {
      image: project3,
      title: "Tic Tac Toe",
      description: "Classic Tic Tac Toe game with JavaScript game logic, responsive UI, and dynamic winner detection.",
      tech: ["HTML", "CSS", "JavaScript"],
      live: "https://rajveer9554.github.io/Tic-Tac-Toe/",
      github: "https://github.com/Rajveer9554/",
    },
  ];

  return (
    <section id="project" className="min-h-screen bg-black px-4 py-20 text-white sm:px-6 sm:py-24 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <h1 className="text-center text-4xl font-bold text-transparent bg-gradient-to-r from-purple-500 to-green-500 bg-clip-text sm:text-5xl">
          My Works
        </h1>

        <p className="mx-auto mb-10 mt-4 max-w-2xl text-center text-gray-400 sm:mb-14">
          Some of my featured projects.
        </p>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Project;