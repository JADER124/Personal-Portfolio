import React,{useState} from "react";

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
                  Mi viaje en el mundo del desarrollo comenzó con una curiosidad
                  insaciable por entender cómo funcionan las cosas. Desde
                  pequeño, desarmaba dispositivos solo para ver sus componentes,
                  una curiosidad que eventualmente evolucionó hacia el software.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed mt-4">
                  Fuera del código, soy un entusiasta de [tus hobbies, por
                  ejemplo: la fotografía, los videojuegos, el senderismo]. Creo
                  firmemente que estas pasiones complementan mi trabajo como
                  desarrollador, aportando creatividad y perspectivas únicas a
                  cada proyecto.
                </p>

                <div className={`transition-all duration-500 ease-in-out ${showMore ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
                <div className="mt-4 space-y-4">
                  <p className="text-lg text-gray-300 leading-relaxed">
                  Aunque mi enfoque es claramente técnico, disfruto enormemente del proceso creativo que conlleva el desarrollo de software. Me apasiona crear experiencias digitales que no solo funcionen perfectamente, sino que también sean intuitivas y agradables para el usuario.
                  </p>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    Constantemente me mantengo actualizado con las últimas tecnologías y tendencias en el mundo del desarrollo, participando en comunidades online y compartiendo conocimientos con otros desarrolladores.
                  </p>
                </div>
              </div>
              
              <button 
                onClick={() => setShowMore(!showMore)}
                className="text-sm mt-4 font-medium bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text hover:opacity-80 transition-opacity"
              >
                {showMore ? 'Ver menos...' : 'Ver más...'}
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
