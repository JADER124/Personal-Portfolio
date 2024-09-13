import React from "react";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact,FaNodeJs ,FaGitAlt} from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";

function Skills() {
  return (
    <div>
      <div className="" id="skills">
        <div>
          <div className="align-middle text-center my-10">
            <h1 className="text-5xl font-bold capitalize p-10">
              Skills and Tools
            </h1>
          </div>
        </div>
        <div className="mb-10">
          <div className="mx-72 p-7 bg-white rounded-lg ">
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
        <div>
          <div>
            <div className="grid grid-cols-3 mx-20 mb-10">
              <div className="bg-slate-700 border-r-2 rounded-l-xl">
                <div className="text-center my-10">
                  <h1 className="text-2xl pb-7">Lenguajes de programacion</h1>
                  <p>JavaScript</p>
                  <p>Python</p>
                </div>
                <div className="text-right mb-10 mr-10">
                  <button className="bg-gray-500 py-3 px-10 rounded-lg">
                    hello
                  </button>
                </div>
              </div>
              <div className="bg-slate-700">
                <div className="text-center my-10">
                <h1 className="text-2xl pb-7">Frameworks y Librerias</h1>
                  <p>React</p>
                  <p>Tailwind CSS</p>
                  <p>Bootstrap</p>
                <h1 className="text-2xl py-7">Bases de datos</h1>
                <p>Firebase</p>
                <p>SQL Server</p>
                </div>
                <div className="text-right mb-10 mr-10">
                  <button className="bg-gray-500 py-3 px-10 rounded-lg">
                    hello
                  </button>
                </div>
              </div>
              <div className="bg-slate-700 border-l-2 rounded-r-xl">
                <div className="text-center my-10 ">
                  <h1 className="text-2xl pb-7">Otras herramientas</h1>
                  <p>Vs Code</p>
                  <p>Git & GitHub</p>
                  <p>Pycharm</p>
                  <p>Trello</p>
                  <p>Bootstrap</p>

                </div>
                <div className="text-right mb-10 mr-10">
                  <button className="bg-gray-500 py-3 px-10 rounded-lg">
                    hello
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
