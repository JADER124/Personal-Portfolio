import React from 'react';

function Experience() {
  const experiences = [
    {
      id: 1,
      position: "Data Engineer Analyst",
      company: "Iris Neofinanciera",
      period: "Nov 2025 - Actualidad",
      current: true,
      description: "Diseño e implementación de pipelines de datos y soluciones de analítica en la nube.",
      tasks: [
        "Desarrollo de jobs en AWS Glue para procesamiento de datos",
        "Infraestructura como código con CloudFormation",
        "Arquitecturas de datos en AWS (S3, Glue, Athena)",
        "Automatización de procesos ETL"
      ],
      tech: ["AWS", "Glue", "CloudFormation", "Python", "SQL"]
    },
    {
      id: 2,
      position: "Auxiliar Mesa de Servicios TI",
      company: "Iris Neofinanciera",
      period: "Feb 2025 - Nov 2025",
      current: false,
      description: "Soporte técnico de primer y segundo nivel para usuarios internos.",
      tasks: [
        "Atención y resolución de incidentes de TI",
        "Gestión de tickets en sistema ITSM",
        "Documentación de procedimientos técnicos",
        "Soporte en hardware y software corporativo"
      ],
      tech: ["ITSM", "Windows", "Active Directory", "Office 365"]
    },
    {
      id: 3,
      position: "Aprendiz - Soporte Técnico",
      company: "Alcaldía de Medellín",
      period: "Jun 2023 - Dic 2023",
      current: false,
      description: "Soporte técnico y gestión documental electrónica en entidad gubernamental.",
      tasks: [
        "Soporte técnico de equipos y periféricos",
        "Gestión documental electrónica",
        "Mantenimiento preventivo y correctivo",
        "Digitalización de archivos institucionales"
      ],
      tech: ["Soporte Técnico", "Gestión Documental", "Windows"]
    }
  ];

  return (
    <section id="experience" className="pb-20" data-aos="fade-up">
      {/* Título */}
      <div className="text-center my-10">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold capitalize p-6 lg:p-10 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
          Experiencia
        </h1>
      </div>

      {/* Cards horizontales */}
      <div className="px-4 sm:px-8 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className="p-6 border border-gray-800 rounded-xl hover:border-gray-700 transition-colors flex flex-col"
              data-aos="fade-up"
              data-aos-delay={index * 50}
            >
              {/* Header */}
              <div className="mb-4">
                <div className="flex items-center gap-2 mb-2">
                  {exp.current && (
                    <span className="text-[10px] px-2 py-0.5 bg-green-500/20 text-green-400 rounded">
                      Actual
                    </span>
                  )}
                  <p className="text-gray-500 text-xs">{exp.period}</p>
                </div>
                <h3 className="text-lg font-semibold text-white mb-1">
                  {exp.position}
                </h3>
                <p className="text-blue-400 text-sm">{exp.company}</p>
              </div>

              {/* Descripción */}
              <p className="text-gray-400 text-sm mb-4">
                {exp.description}
              </p>

              {/* Tareas */}
              <ul className="space-y-2 mb-5 flex-grow">
                {exp.tasks.map((task, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-500 text-xs">
                    <span className="text-blue-500 mt-0.5">·</span>
                    {task}
                  </li>
                ))}
              </ul>

              {/* Tecnologías */}
              <div className="flex flex-wrap gap-1.5 mt-auto">
                {exp.tech.map((item, i) => (
                  <span
                    key={i}
                    className="text-[10px] px-2 py-1 bg-gray-800/50 text-gray-400 rounded"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
