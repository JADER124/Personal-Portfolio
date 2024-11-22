import React from "react";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact,FaNodeJs ,FaGitAlt,FaCode } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";

function Skills() {
  const skills = [
    { name: 'Frontend', items: ['React', 'HTML5', 'CSS3', 'JavaScript', 'Tailwind'] },
    { name: 'Backend', items: ['Node.js', 'Express', 'Python', 'MySQL', 'MongoDB'] },
    { name: 'Herramientas', items: ['Git', 'VS Code', 'Docker', 'Postman', 'Figma'] }
  ];
  return (
    <div>
      <div className="" id="skills">
        <div>
          <div className="align-middle text-center my-10">
            <h1 className="text-5xl font-bold capitalize p-10 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
              Skills and Tools
            </h1>
          </div>
        </div>
        <div className="mb-10">
          <div className="mx-72 p-7 bg-bg-black/20 rounded-lg ">
            <ul className="flex gap-10 justify-between mx-10">
              <li>
                <div className="rounded-full bg-black p-6 shadow-lg shadow-yellow-500">
                <IoLogoJavascript className="size-12 " />
                </div>
              </li>
              <li>
                <div className="rounded-full bg-black p-6 shadow-lg shadow-blue-800">
                <FaReact className="size-12" />
                </div>
              </li>
              <li>
                <div className="rounded-full bg-black p-6 shadow-lg shadow-teal-400 ">
                <RiTailwindCssFill className="size-12" />
                </div>
              </li>
              <li>
                <div className="rounded-full bg-black p-6 shadow-lg shadow-green-800">
                <FaNodeJs className="size-12"/>
                </div>
              </li>
              <li>
                <div className="rounded-full bg-black p-6 shadow-lg shadow-sky-500">
                <SiTypescript className="size-12" />
                </div>
              </li>
              <li>
                <div className="rounded-full bg-black p-6 shadow-lg shadow-red-400">
                <FaGitAlt className="size-12" />
                </div>
              </li>
            </ul>
          </div>
        </div>
        {/* Skills Section */}
      <section id="skills" className="py-20 px-4 ">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((category) => (
              <div key={category.name} className="bg-gray-900 p-6 rounded-lg shadow-lg hover:transform hover:scale-105 transition-transform duration-300">
                <h3 className="text-xl font-semibold mb-4 text-blue-500">{category.name}</h3>
                <ul className="space-y-2">
                  {category.items.map((item) => (
                    <li key={item} className="flex items-center">
                      <FaCode className="w-4 h-4 mr-2 text-gray-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      </div>
    </div>
  );
}

export default Skills;
