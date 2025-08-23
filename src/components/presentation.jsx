import React from "react";

function Presentation() {
  return (
    <div>
      <div className="bg-black/20">
        {/* Container responsive con padding adaptable */}
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-16 py-8 sm:py-12 md:py-16">
          <div className="rounded-3xl font-bold align-middle text-center">
            {/* Título responsive */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-roboto bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text p-6 sm:p-8 md:p-10 mb-6 md:mb-8">
              Hola, Soy Jader...
            </h1>

            {/* Párrafo responsive */}
            <div className="max-w-4xl mx-auto">
  <p className="text-base sm:text-lg md:text-xl lg:text-xl text-white font-normal leading-relaxed px-4 sm:px-6 md:px-8 lg:px-10 pb-6 sm:pb-8 md:pb-10">
    Soy un apasionado por la tecnología y el desarrollo de software.
    Me formé en sistemas e ingeniería de software, y he fortalecido
    mi camino con experiencia práctica en soporte técnico,
    desarrollo web y automatización de procesos. Trabajo con
    tecnologías como JavaScript, React, Python y SQL Server, y
    también con herramientas modernas como Git, GitHub y servicios
    en la nube (AWS y Google Cloud).
  </p>

  <p className="text-base sm:text-lg md:text-xl lg:text-xl text-white font-normal leading-relaxed px-4 sm:px-6 md:px-8 lg:px-10">
    Mi objetivo es sencillo: crear soluciones útiles que hagan la diferencia,
    mientras sigo creciendo como profesional y explorando nuevas ideas en la nube,
    la innovación y el trabajo en equipo.
  </p>
</div>


            {/* Elementos decorativos opcionales para mejorar el diseño */}
            <div className="flex justify-center items-center gap-4 mt-6 sm:mt-8">
              <div className="w-12 sm:w-16 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"></div>
              <div className="w-12 sm:w-16 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Presentation;
