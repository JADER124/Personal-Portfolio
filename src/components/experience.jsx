import React from 'react'
import { FaAward,FaBriefcase  } from "react-icons/fa";

function experience() {
  return (
    <section className="py-16 bg-black/20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-5xl mb-10 text-center font-bold capitalize p-10 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
          Mi Experiencia Profesional
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Experiencia Laboral */}
          <div className="bg-white rounded-lg shadow-lg p-6 transform hover:scale-105 transition-transform duration-300">
            <div className="flex items-center mb-4">
              <FaBriefcase className="w-6 h-6 text-blue-600 mr-2" />
              <h3 className="text-xl font-semibold text-gray-800">Experiencia Laboral</h3>
            </div>
            <div className="border-l-2 border-blue-500 pl-4">
              <h4 className="font-semibold text-gray-700">Desarrollador Frontend</h4>
              <p className="text-gray-600">Nombre de la Empresa</p>
              <p className="text-sm text-gray-500">2023 - Presente</p>
              <ul className="mt-2 space-y-2 text-gray-600">
                <li>• Desarrollo de interfaces de usuario con React</li>
                <li>• Implementación de diseños responsive</li>
                <li>• Colaboración en proyectos ágiles</li>
              </ul>
            </div>
          </div>

          {/* Logros y Certificaciones */}
          <div className="bg-white rounded-lg shadow-lg p-6 transform hover:scale-105 transition-transform duration-300">
            <div className="flex items-center mb-4">
              <FaAward  className="w-6 h-6 text-yellow-600 mr-2" />
              <h3 className="text-xl font-semibold text-gray-800">Logros</h3>
            </div>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <div className="w-2 h-2 mt-2 rounded-full bg-yellow-500"></div>
                <p className="text-gray-600">Desarrollo de proyectos personales con impacto en la comunidad de desarrolladores</p>
              </div>
              <div className="flex items-start space-x-2">
                <div className="w-2 h-2 mt-2 rounded-full bg-yellow-500"></div>
                <p className="text-gray-600">Participación activa en eventos y hackathons de desarrollo web</p>
              </div>
              <div className="flex items-start space-x-2">
                <div className="w-2 h-2 mt-2 rounded-full bg-yellow-500"></div>
                <p className="text-gray-600">Contribuciones a proyectos open source</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default experience