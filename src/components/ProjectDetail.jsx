import React from "react";

const ProjectDetail = ({ project }) => {
  if (!project) return <div className="text-center py-20 text-gray-400">Proyecto no encontrado.</div>;
  return (
    <div className="max-w-4xl mx-auto py-12 px-4 md:px-8">
      {/* Cabecera */}
      <div className="flex flex-col md:flex-row gap-10 items-center md:items-start mb-8">
        <img
          src={project.img}
          alt={project.title}
          className="w-64 h-64 object-cover rounded-3xl shadow-2xl border-4 border-blue-500/40"
        />
        <div className="flex-1 w-full">
          <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text mb-2">
            {project.title}
          </h2>
          <div className="flex flex-wrap gap-2 mb-3">
            {project.technologies?.map((tech, i) => (
              <span key={i} className="px-3 py-1 bg-blue-600/20 text-blue-200 rounded-full text-xs font-semibold tracking-wide">
                {tech}
              </span>
            ))}
          </div>
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2 px-5 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-bold shadow hover:scale-105 transition"
            >
              Ver Proyecto
            </a>
          )}
        </div>
      </div>
      {/* Descripción y detalles */}
      <div className="bg-black/30 rounded-2xl p-6 shadow-lg border border-blue-900/30">
        <h3 className="text-2xl font-bold mb-2 text-blue-300">Descripción</h3>
        <p className="text-base md:text-lg text-gray-200 mb-2 leading-relaxed">{project.description}</p>
        {/* Aquí puedes agregar más detalles, features, links, etc. */}
      </div>
    </div>
  );
};

export default ProjectDetail;
