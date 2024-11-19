import React from "react";
import perfil from "../imgs/perfil.jpg";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Home() {
  return (
    <div className="" id="home">
      {/*bg-gradient-to-br from-cyan-600   to-zinc-900 to-80% before:h-96 before:w-96 before:bg-black before:absolute before:rounded-br-full before:bg-gradient-to-r before:from-slate-900 before:to-cyan-900*/}
      <div className="flex max-h-max text-center ">
        <div className="w-1/2 z-30">
          <div className="px-10 py-4 text-left my-52 ml-20">
            {/* Texto con efecto de superposición */}
            <h1 className="text-6xl -mt-7 ml-10 opacity-80 p-2 font-roboto font-bold text-cyan-50/15 absolute">
              Jhon&nbsp;Jader&nbsp;López
            </h1>
            <h1 className="text-6xl p-2 font-roboto font-bold animate-typing overflow-hidden text-cyan-50">
              Jhon&nbsp;Jader&nbsp;López
            </h1>

            {/* Subtítulos */}
            <p className="text-xl p-2 font-roboto font-bold text-cyan-200 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
              Software&nbsp;Developer
            </p>
            <p className="p-2 font-bold text-gray-300">
              Desarrollador apasionado por crear soluciones innovadoras
            </p>

            {/* Iconos de redes sociales */}
            <div className="flex space-x-4 mt-6 ml-2">
              <a
                href="#"
                className="p-2 rounded-full bg-gray-900 hover:bg-gray-900 transition-colors duration-300 text-blue-600 hover:text-blue-300"
              >
                <FaGithub className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="p-2 rounded-full bg-gray-900 hover:bg-gray-900 transition-colors duration-300 text-blue-600 hover:text-blue-300"
              >
                <FaLinkedin className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="p-2 rounded-full bg-gray-900 hover:bg-gray-900 transition-colors duration-300 text-blue-600 hover:text-blue-300"
              >
                <MdEmail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="w-1/2 my-auto">
          <div className="ml-44 relative w-[400px] h-[400px]">
            {/* Efecto de resplandor ajustado para centrarse con la imagen */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-2xl opacity-40 animate-pulse"></div>

            <img
              src={perfil}
              alt="Tu foto de perfil"
              className="relative w-full h-full rounded-full bg-cover bg-center 
                 border-y-2 border-cyan-200 shadow-lg shadow-black 
                 object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
