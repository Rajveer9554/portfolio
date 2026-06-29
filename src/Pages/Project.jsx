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
      description:
        "AI-powered complaint management platform where citizens can report local issues, track complaint status, and communicate with authorities.",
      tech: ["React", "Tailwind", "Node", "MongoDB","JWT Authentication", "Agentic AI"],
      live: "https://awaze-e-janta.vercel.app/",
      github: "https://github.com/Rajveer9554/",
    },
    {
      image: project2,
      title: "Rajveer Portfolio",
      description:
        "Modern developer portfolio showcasing projects, skills, and achievements with smooth animations and responsive UI.",
      tech: ["React", "Tailwind", "Framer Motion"],
      live: "https://rajveer9554.github.io/Myself-portfolio/",
      github: "https://github.com/Rajveer9554/",
    },
    {
      image: project3,
      title: "Tic Tac Toe",
      description:
        "Classic Tic Tac Toe game with JavaScript game logic, responsive UI, and dynamic winner detection.",
      tech: ["HTML", "CSS", "JavaScript"],
      live: "https://rajveer9554.github.io/Tic-Tac-Toe/",
      github: "https://github.com/Rajveer9554/",
    },
  ];

  return (
    <section
      id="project"
      className="bg-black min-h-screen text-white py-20"
    >

      <div className="max-w-7xl mx-auto px-6">

        <h1 className="text-5xl font-bold text-center bg-gradient-to-r from-purple-500 to-green-500 bg-clip-text text-transparent">
          My Works
        </h1>

        <p className="text-center text-gray-400 mt-4 mb-16">
          Some of my featured projects.
        </p>

        <div className="grid lg:grid-cols-2 gap-10">

          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              {...project}
            />
          ))}

        </div>

      </div>

    </section>
  );
}

export default Project;