import React from 'react';
import {
  FaBriefcase,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaDatabase,
  FaHeadset,
  FaLaptopCode
} from 'react-icons/fa';
import {
  SiAmazonaws,
  SiPython,
  SiMysql
} from 'react-icons/si';

const WorkExperience = () => {
  const experiences = [
    {
      id: 1,
      position: "Data Engineer Analyst",
      company: "Iris Neofinanciera",
      period: "Nov 2025 - Actualidad",
      location: "Medellín, Colombia",
      type: "Tiempo Completo",
      current: true,
      icon: FaDatabase,
      iconBg: "from-purple-500 to-indigo-600",
      description: "Diseño e implementación de pipelines de datos y soluciones de analítica en la nube.",
      responsibilities: [
        "Desarrollo y mantenimiento de jobs en AWS Glue para procesamiento de datos",
        "Implementación de infraestructura como código con CloudFormation",
        "Diseño de arquitecturas de datos en AWS (S3, Glue, Athena, Redshift)",
        "Creación de dashboards y reportes analíticos para toma de decisiones",
        "Automatización de procesos ETL y optimización de queries"
      ],
      skills: ["AWS", "Glue", "CloudFormation", "Python", "SQL", "S3", "Athena"]
    },
    {
      id: 2,
      position: "Auxiliar Mesa de Servicios TI",
      company: "Iris Neofinanciera",
      period: "Feb 2025 - Nov 2025",
      location: "Medellín, Colombia",
      type: "Tiempo Completo",
      current: false,
      icon: FaHeadset,
      iconBg: "from-blue-500 to-cyan-500",
      description: "Soporte técnico de primer y segundo nivel para usuarios internos.",
      responsibilities: [
        "Atención y resolución de incidentes de TI en mesa de servicios",
        "Soporte técnico a usuarios en hardware y software corporativo",
        "Gestión de tickets y seguimiento de casos en sistema ITSM",
        "Documentación de procedimientos y base de conocimiento",
        "Escalamiento de incidentes complejos a equipos especializados"
      ],
      skills: ["ITSM", "Windows", "Active Directory", "Office 365", "Networking"]
    },
    {
      id: 3,
      position: "Aprendiz SENA - Soporte Técnico",
      company: "Alcaldía de Medellín",
      period: "Jun 2023 - Dic 2023",
      location: "Medellín, Colombia",
      type: "Contrato Aprendizaje",
      current: false,
      icon: FaLaptopCode,
      iconBg: "from-green-500 to-emerald-500",
      description: "Soporte técnico y gestión documental electrónica en entidad gubernamental.",
      responsibilities: [
        "Soporte técnico de equipos de cómputo y periféricos",
        "Gestión documental electrónica y digitalización de archivos",
        "Mantenimiento preventivo y correctivo de equipos",
        "Atención a usuarios y resolución de problemas técnicos",
        "Apoyo en la administración de sistemas de información"
      ],
      skills: ["Soporte Técnico", "Gestión Documental", "Windows", "Hardware", "Ofimática"]
    }
  ];

  const getTypeStyles = (type, current) => {
    if (current) {
      return "bg-green-500/20 text-green-400 border border-green-500/30";
    }
    switch (type) {
      case "Tiempo Completo":
        return "bg-blue-500/20 text-blue-400 border border-blue-500/30";
      case "Contrato Aprendizaje":
        return "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30";
      default:
        return "bg-gray-500/20 text-gray-400 border border-gray-500/30";
    }
  };

  return (
    <div className="relative">
      {/* Línea del timeline - visible solo en desktop */}
      <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-blue-500 to-green-500"></div>

      <div className="space-y-8">
        {experiences.map((exp, index) => {
          const IconComponent = exp.icon;
          return (
            <div
              key={exp.id}
              className="relative group"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Card */}
              <div className="md:ml-20 bg-gray-900/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-800 hover:border-gray-700 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/5">

                {/* Icono del timeline - visible solo en desktop */}
                <div className={`hidden md:flex absolute left-4 top-6 w-8 h-8 rounded-full bg-gradient-to-r ${exp.iconBg} items-center justify-center shadow-lg ring-4 ring-gray-900`}>
                  <IconComponent className="w-4 h-4 text-white" />
                </div>

                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                  <div className="flex items-start gap-3">
                    {/* Icono móvil */}
                    <div className={`md:hidden w-10 h-10 rounded-xl bg-gradient-to-r ${exp.iconBg} flex items-center justify-center shadow-lg flex-shrink-0`}>
                      <IconComponent className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                        {exp.position}
                      </h4>
                      <p className="text-blue-400 font-semibold mt-1">
                        {exp.company}
                      </p>
                    </div>
                  </div>

                  <span className={`self-start px-3 py-1 text-xs rounded-full font-medium whitespace-nowrap ${getTypeStyles(exp.type, exp.current)}`}>
                    {exp.current ? "Actual" : exp.type}
                  </span>
                </div>

                {/* Descripción */}
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {exp.description}
                </p>

                {/* Info de fecha y ubicación */}
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-2">
                    <FaCalendarAlt className="w-3.5 h-3.5 text-purple-400" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaMapMarkerAlt className="w-3.5 h-3.5 text-red-400" />
                    <span>{exp.location}</span>
                  </div>
                </div>

                {/* Responsabilidades */}
                <div className="space-y-2 mb-5">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Responsabilidades</p>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((resp, respIndex) => (
                      <li key={respIndex} className="flex items-start gap-3 text-sm text-gray-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 mt-2 flex-shrink-0"></span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Skills */}
                <div className="pt-4 border-t border-gray-800">
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-gray-800 hover:bg-gray-700 text-gray-300 text-xs rounded-lg font-medium transition-colors duration-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WorkExperience;
