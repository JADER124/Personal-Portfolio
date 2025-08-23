import React from "react";
import perfil from "../assets/images/perfil.jpg";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Home() {
  return (
    <div className="bg-gradient-to-b from-[#09090b] " id="home">
      <div className="flex flex-col-reverse md:flex-row items-center justify-center max-w-7xl mx-auto px-4 md:px-8 gap-8 min-h-[80vh]">
        <div className="w-full md:w-1/2 flex justify-center md:justify-start">
          <div className="px-2 md:px-10 py-4 text-left md:my-32 md:ml-10 w-full max-w-xl relative">
            {/* Texto con efecto de superposición */}
            <h1 className="text-4xl md:text-6xl font-roboto font-bold animate-typing overflow-hidden text-cyan-50 mb-2">
              Jhon&nbsp;Jader&nbsp;López
            </h1>

            {/* Subtítulos */}
            <p className="text-lg md:text-xl font-roboto font-bold text-cyan-200 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text mb-1">
              Software&nbsp;Developer
            </p>
            <p className="text-base md:text-lg font-bold text-gray-300 mb-4">
              Apasionado por el desarrollo de software<br></br>
               la nube y la innovación
            </p>

            {/* Iconos de redes sociales */}
            <div className="flex space-x-4 mt-4 md:mt-6 ml-0 md:ml-2 justify-center md:justify-start">
              <a
                href="https://github.com/JADER124"
                target="_blank"
                className="p-2 rounded-full bg-gray-900 hover:bg-gray-900 transition-colors duration-300 text-blue-600 hover:text-blue-300"
              >
                <FaGithub className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/jhon-jader-lopez-blandon-5751a6236/"
                target="_blank"
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
        <div className="w-full md:w-1/2 flex justify-center items-center mb-8 md:mb-0">
          <div className="relative w-48 h-48 md:w-80 md:h-80">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-2xl opacity-40 animate-pulse"></div>
            <img
              src={perfil}
              alt="Tu foto de perfil"
              className="relative w-full h-full rounded-full bg-cover bg-center border-y-2 border-cyan-200 shadow-lg shadow-black object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
