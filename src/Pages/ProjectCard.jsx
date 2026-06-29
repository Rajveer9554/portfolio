import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

export default function ProjectCard({ image, title, description, tech, live, github }) {
  return (
    <div className="group overflow-hidden rounded-3xl border border-green-400/70 bg-[#111] shadow-lg duration-500 hover:shadow-green-500/30">
      <div className="overflow-hidden">
        <img src={image} alt={title} className="h-56 w-full object-cover duration-500 group-hover:scale-105 sm:h-64" />
      </div>

      <div className="p-5 sm:p-6 lg:p-7">
        <h2 className="text-2xl font-bold text-white sm:text-3xl">{title}</h2>
        <p className="mt-4 text-sm leading-7 text-gray-300 sm:text-base">{description}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {tech.map((item, index) => (
            <span key={index} className="rounded-full border border-green-500/60 bg-green-900/30 px-3 py-2 text-xs sm:text-sm">
              {item}
            </span>
          ))}
        </div>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
          <a href={live} target="_blank" rel="noreferrer" className="flex flex-1 items-center justify-center gap-2 rounded-full bg-green-600 px-4 py-3 font-semibold transition-colors hover:bg-green-700">
            <ExternalLink size={18} />
            View Live
          </a>

          <a href={github} target="_blank" rel="noreferrer" className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-600 transition-colors hover:bg-gray-800">
            <FaGithub size={22} />
          </a>
        </div>
      </div>
    </div>
  );
}