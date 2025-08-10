import React from "react";
import { useParams, Link } from "react-router-dom";
import ProjectDetail from "../components/ProjectDetail";
import { projectsData } from "../data/projectsData";

const ProjectDetailPage = () => {
  const { id } = useParams();
  const project = projectsData.find((p) => p.id === id);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#09090b] to-[#18181b] text-white">
      <div className="max-w-6xl mx-auto pt-8">
        <Link to="/" className="text-blue-400 hover:underline text-sm mb-4 inline-block">← Volver al inicio</Link>
        <ProjectDetail project={project} />
      </div>
    </div>
  );
};

export default ProjectDetailPage;
