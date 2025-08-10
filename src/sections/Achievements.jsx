import React from 'react';
import { FaAward, FaTrophy, FaRocket, FaHandsHelping } from 'react-icons/fa';

const Achievements = () => {
  const achievements = [
    {
      icon: <FaRocket className="w-4 h-4" />,
      title: "Proyectos con Impacto",
      description: "Desarrollo de proyectos personales con impacto significativo en la comunidad de desarrolladores"
    },
    {
      icon: <FaTrophy className="w-4 h-4" />,
      title: "Eventos y Hackathons",
      description: "Participación activa y premiaciones en eventos de desarrollo web y hackathons tecnológicos"
    },
    {
      icon: <FaHandsHelping className="w-4 h-4" />,
      title: "Open Source",
      description: "Contribuciones constantes a proyectos de código abierto y colaboración con la comunidad global"
    }
  ];

  return (
    <div className="bg-gradient-to-br from-slate-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl shadow-lg hover:shadow-xl border border-gray-200 dark:border-gray-700 p-6 transform hover:-translate-y-1 transition-all duration-300" 
         data-aos="fade-up" 
         data-aos-delay="200">
      
      {/* Header */}
      <div className="flex items-center mb-6">
        <div className="w-10 h-10 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center mr-3">
          <FaAward className="w-5 h-5 text-white" />
        </div>
        <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">Logros Destacados</h3>
      </div>

      {/* Lista de logros */}
      <div className="space-y-4">
        {achievements.map((achievement, index) => (
          <div key={index} className="flex items-start space-x-3">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center text-white shadow-sm flex-shrink-0 mt-1">
              {achievement.icon}
            </div>
            
            <div className="flex-1">
              <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-1">
                {achievement.title}
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                {achievement.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;