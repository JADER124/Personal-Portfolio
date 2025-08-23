import React, { useState } from "react";

function About() {
  const [showMore, setShowMore] = useState(false);
  return (
    <div data-aos="fade-up">
      {/* About Me Section */}
      <section id="about" className="py-20 px-4 ">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left side - Personal Story */}
            <div className="space-y-6">
              <h1 className="text-5xl  font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
                Sobre Mí
              </h1>
              <div className="prose prose-invert">
                <p className="text-lg text-gray-300 leading-relaxed ">
                  Mi camino en el desarrollo de software nació de una curiosidad
                  genuina por entender cómo funcionan las cosas. Desde pequeño
                  me gustaba explorar y desarmar dispositivos, y con el tiempo
                  descubrí que esa misma inquietud podía llevarme al mundo del
                  software, donde encontré un espacio infinito para aprender y
                  crear.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed mt-4">
                  Fuera del código, disfruto de actividades que me permiten
                  desconectarme y ver el mundo desde otras perspectivas, como la
                  tecnología, los videojuegos o simplemente explorar nuevas
                  ideas. Creo que estos intereses alimentan mi creatividad y me
                  ayudan a aportar una mirada diferente a cada proyecto.
                </p>

                <div
                  className={`transition-all duration-500 ease-in-out ${
                    showMore ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  } overflow-hidden`}
                >
                  <div className="mt-4 space-y-4">
                    <p className="text-lg text-gray-300 leading-relaxed">
                      Aunque mi trabajo está muy ligado a la parte técnica, lo
                      que realmente me apasiona es el proceso creativo:
                      convertir una idea en una solución útil y amigable para
                      las personas. Para mí, el desarrollo de software no es
                      solo programar, sino construir experiencias digitales que
                      funcionen bien y al mismo tiempo sean fáciles e intuitivas
                      de usar.
                    </p>
                    <p className="text-lg text-gray-300 leading-relaxed">
                      Me gusta mantenerme en constante aprendizaje, explorando
                      nuevas tecnologías, servicios en la nube y tendencias del
                      sector. También disfruto compartir lo que aprendo y
                      conectarme con otros desarrolladores, porque estoy
                      convencido de que el conocimiento se multiplica cuando se
                      comparte.
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setShowMore(!showMore)}
                  className="text-sm mt-4 font-medium bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text hover:opacity-80 transition-opacity"
                >
                  {showMore ? "Ver menos..." : "Ver más..."}
                </button>
                <div className="flex flex-wrap gap-4 mt-6">
                  <span className="px-4 py-2 bg-gray-700 rounded-full text-sm text-blue-300">
                    Autodidacta
                  </span>
                  <span className="px-4 py-2 bg-gray-700 rounded-full text-sm text-purple-300">
                    Creativo
                  </span>
                  <span className="px-4 py-2 bg-gray-700 rounded-full text-sm text-green-300">
                    Team Player
                  </span>
                  <span className="px-4 py-2 bg-gray-700 rounded-full text-sm text-yellow-300">
                    Problem Solver
                  </span>
                </div>
              </div>
            </div>

            {/* Right side - Stats/Interests */}
            <div className="grid grid-cols-2 gap-6">
              <div className="p-6 bg-gray-800 rounded-lg shadow-xl transform hover:scale-105 transition-transform">
                <h3 className="text-2xl font-bold text-blue-400 mb-2">2+</h3>
                <p className="text-gray-400">Años de Experiencia</p>
              </div>
              <div className="p-6 bg-gray-800 rounded-lg shadow-xl transform hover:scale-105 transition-transform">
                <h3 className="text-2xl font-bold text-purple-400 mb-2">15+</h3>
                <p className="text-gray-400">Proyectos Completados</p>
              </div>
              <div className="p-6 bg-gray-800 rounded-lg shadow-xl transform hover:scale-105 transition-transform">
                <h3 className="text-2xl font-bold text-green-400 mb-2">5+</h3>
                <p className="text-gray-400">Tecnologías Dominadas</p>
              </div>
              <div className="p-6 bg-gray-800 rounded-lg shadow-xl transform hover:scale-105 transition-transform">
                <h3 className="text-2xl font-bold text-yellow-400 mb-2">∞</h3>
                <p className="text-gray-400">Ganas de Aprender</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
