import React from 'react';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

const WorkExperience = () => {
const experiences = [{
  position: "Tu Nuevo Puesto",
  company: "Nueva Empresa",
  period: "2021 - 2022",
  location: "Ciudad, País",
  type: "Freelance", // o "Tiempo Completo", "Medio Tiempo", etc.
  responsibilities: [
    "Primera responsabilidad",
    "Segunda responsabilidad",
    "Tercera responsabilidad"
  ],
  skills: ["Skill1", "Skill2", "Skill3"]
}]
return(
  <div className="bg-gradient-to-br from-slate-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl shadow-lg hover:shadow-xl border border-gray-200 dark:border-gray-700 p-6 transform hover:-translate-y-1 transition-all duration-300" 
       data-aos="fade-up">
    
    {/* Header */}
    <div className="flex items-center mb-6">
      <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center mr-3">
        <FaBriefcase className="w-5 h-5 text-white" />
      </div>
      <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">Experiencia Laboral</h3>
    </div>

    {/* Lista de experiencias */}
    <div className="space-y-6">
      {experiences.map((exp, index) => (
        <div key={index} className="border-l-4 border-blue-500 pl-6 relative">
          <div className="absolute left-0 top-2 w-3 h-3 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full -translate-x-2"></div>
          
          <div className="space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between">
              <h4 className="font-bold text-lg text-gray-800 dark:text-gray-200">
                {exp.position}
              </h4>
              <span className={`px-2 py-1 text-xs rounded-md font-medium self-start mt-1 sm:mt-0 ${
                exp.type === "Tiempo Completo" 
                  ? "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300"
                  : "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300"
              }`}>
                {exp.type}
              </span>
            </div>
            
            <p className="font-semibold text-gray-700 dark:text-gray-300">
              {exp.company}
            </p>
            
            {/* Info adicional */}
            <div className="flex flex-col sm:flex-row sm:items-center space-y-1 sm:space-y-0 sm:space-x-4 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center">
                <FaCalendarAlt className="w-3 h-3 mr-2 text-blue-500" />
                <span>{exp.period}</span>
              </div>
              <div className="flex items-center">
                <FaMapMarkerAlt className="w-3 h-3 mr-2 text-red-500" />
                <span>{exp.location}</span>
              </div>
            </div>

            {/* Responsabilidades */}
            <div className="mt-4 space-y-2">
              {exp.responsibilities.map((resp, respIndex) => (
                <div key={respIndex} className="flex items-start space-x-3">
                  <div className="w-2 h-2 mt-2 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600"></div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {resp}
                  </p>
                </div>
              ))}
            </div>

            {/* Skills */}
            <div className="mt-4 pt-3 border-t border-gray-200 dark:border-gray-700">
              <div className="flex flex-wrap gap-2">
                {exp.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs rounded-md font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);
};

export default WorkExperience;