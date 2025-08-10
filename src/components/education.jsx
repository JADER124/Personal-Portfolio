import React from "react";

function Education() {
  return (
  <div data-aos="fade-up">
      <div className="bg-black/20" id="education">
        {/* Education Section */}
        <section id="education" className="py-20 px-4 ">
          <div className="max-w-6xl mx-auto my-10">
            <h2 className="text-5xl font-bold mb-16 p-10 text-center bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
              Mi Trayectoria Educativa
            </h2>

            {/* Timeline Container */}
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500"></div>

              {/* Education Items */}
              <div className="space-y-20">
                {/* Universidad */}
                <div className="relative flex items-center justify-between">
                  <div className="w-5/12 pr-8 text-right">
                    <h3 className="text-xl font-bold text-blue-400">
                      Técnica profesional en sistemas
                    </h3>
                    <p className="text-gray-400">Tecnológico de Antioquia</p>
                    <p className="text-sm text-gray-500">2021 - 2022</p>
                  </div>

                  <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-blue-500 rounded-full border-4 border-gray-900 z-10"></div>

                  <div className="w-5/12 pl-8">
                    <p className="text-gray-300">
                    Tecnica profesional en el area de sistemas , para el desarrollo de software y conocimiento en informatica, adquirido a través de un enfoque de formación por ciclos propedéuticos.
                    </p>
                  </div>
                </div>

                {/* universidad */}
                <div className="relative flex items-center justify-between">
                  <div className="w-5/12 pr-8 text-right">
                    <p className="text-gray-300">
                      Tecnología en sistemas enfocada en la construcción de software apoyado en conocimientos generales de hardware, comunicaciones y negociación tecnológica, adquirido a través de un enfoque de formación por ciclos propedéuticos.
                    </p>
                  </div>

                  <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-purple-500 rounded-full border-4 border-gray-900 z-10"></div>

                  <div className="w-5/12 pl-8">
                    <h3 className="text-xl font-bold text-purple-400">
                      Tecnología en sistemas
                    </h3>
                    <p className="text-gray-400">Tecnológico de Antioquia</p>
                    <p className="text-sm text-gray-500">2021-2023</p>
                  </div>
                </div>

                {/* Certificación */}
                <div className="relative flex items-center justify-between">
                  <div className="w-5/12 pr-8 text-right">
                    <h3 className="text-xl font-bold text-green-400">
                      Ingeniería en desarrollo de software
                    </h3>
                    <p className="text-gray-400">Tecnológico de Antioquia</p>
                    <p className="text-sm text-gray-500">2024 (En curso)</p>
                  </div>

                  <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-green-500 rounded-full border-4 border-gray-900 z-10"></div>

                  <div className="w-5/12 pl-8">
                    <p className="text-gray-300">
                    Ingeniería en Desarrollo de Software enfocada en el diseño, desarrollo, prueba, implementación y mantenimiento de sistemas y aplicaciones, optimizando procesos mediante soluciones tecnológicas innovadoras.
                    </p>
                  </div>
                </div>

                {/* Curso Especializado */}
                <div className="relative flex items-center justify-between">
                  <div className="w-5/12 pr-8 text-right">
                    <p className="text-gray-300">
                      Especialización avanzada en React y su ecosistema. Enfoque
                      en performance y mejores prácticas.
                    </p>
                  </div>

                  <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-yellow-500 rounded-full border-4 border-gray-900 z-10"></div>

                  <div className="w-5/12 pl-8">
                    <h3 className="text-xl font-bold text-yellow-400">
                      React Advanced Patterns
                    </h3>
                    <p className="text-gray-400">Frontend Masters</p>
                    <p className="text-sm text-gray-500">2024</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Education;
