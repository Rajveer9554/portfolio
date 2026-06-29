import { ExternalLink} from "lucide-react";
import { FaGithub } from "react-icons/fa";
export default function ProjectCard({
  image,
  title,
  description,
  tech,
  live,
  github,
}) {
  return (
    <div className="group overflow-hidden rounded-3xl border border-green-400 bg-[#111] shadow-lg hover:shadow-green-500/30 duration-500">

      {/* Image */}

      <div className="overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-72 w-full object-cover group-hover:scale-105 duration-500"
        />
      </div>

      {/* Content */}

      <div className="p-7">

        <h2 className="text-4xl font-bold text-white">
          {title}
        </h2>

        <p className="mt-4 text-gray-300 leading-8">
          {description}
        </p>

        <div className="flex flex-wrap gap-3 mt-6">
          {tech.map((item, index) => (
            <span
              key={index}
              className="rounded-full bg-green-900/30 border border-green-500 px-4 py-2 text-sm"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-4 mt-8">

          <a
            href={live}
            target="_blank"
            className="flex-1 flex justify-center items-center gap-2 bg-green-600 hover:bg-green-700 rounded-full py-4 font-semibold"
          >
            <ExternalLink size={20}/>
            View Live
          </a>

          <a
            href={github }
            target="_blank"
            className="h-16 w-16 rounded-full border border-gray-600 flex justify-center items-center hover:bg-gray-800"
          >
            <FaGithub size={24}/>
          </a>

        </div>

      </div>

    </div>
  );
}