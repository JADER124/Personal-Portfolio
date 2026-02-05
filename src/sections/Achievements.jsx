import React from 'react';
import { FaAward, FaTrophy, FaRocket, FaGraduationCap, FaCertificate } from 'react-icons/fa';
import { SiAmazonaws } from 'react-icons/si';

const Achievements = () => {
  const achievements = [
    {
      icon: <FaGraduationCap className="w-4 h-4" />,
      iconBg: "from-blue-500 to-indigo-500",
      title: "Tecnólogo en Análisis y Desarrollo de Software",
      description: "SENA - Formación técnica en desarrollo de aplicaciones y sistemas de información"
    },
    {
      icon: <SiAmazonaws className="w-4 h-4" />,
      iconBg: "from-orange-500 to-yellow-500",
      title: "AWS Cloud Practitioner",
      description: "Certificación en fundamentos de servicios cloud de Amazon Web Services"
    },
    {
      icon: <FaRocket className="w-4 h-4" />,
      iconBg: "from-purple-500 to-pink-500",
      title: "Proyectos Personales",
      description: "Desarrollo de aplicaciones web con React, Node.js y tecnologías modernas"
    },
    {
      icon: <FaTrophy className="w-4 h-4" />,
      iconBg: "from-green-500 to-emerald-500",
      title: "Aprendizaje Continuo",
      description: "Constante actualización en Data Engineering, Cloud y DevOps"
    }
  ];

  return (
    <div className="bg-gray-900/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-800">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center shadow-lg">
          <FaAward className="w-5 h-5 text-white" />
        </div>
        <h3 className="text-lg font-bold text-white">Logros y Certificaciones</h3>
      </div>

      {/* Lista de logros */}
      <div className="space-y-4">
        {achievements.map((achievement, index) => (
          <div
            key={index}
            className="flex items-start gap-3 p-3 rounded-xl hover:bg-gray-800/50 transition-colors duration-200"
          >
            <div className={`w-8 h-8 bg-gradient-to-r ${achievement.iconBg} rounded-lg flex items-center justify-center text-white shadow-sm flex-shrink-0`}>
              {achievement.icon}
            </div>

            <div className="flex-1 min-w-0">
              <h4 className="font-semibold text-white text-sm mb-1">
                {achievement.title}
              </h4>
              <p className="text-xs text-gray-400 leading-relaxed">
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
