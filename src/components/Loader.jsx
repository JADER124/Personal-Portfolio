import React from "react";

const Loader = () => (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-[#09090b] to-gray-900">
    <div className="flex flex-col items-center">
      <div className="w-24 h-24 border-8 border-blue-500 border-t-transparent border-b-purple-500 rounded-full animate-spin mb-6"></div>
      <span className="text-xl font-bold text-blue-400 animate-pulse">Cargando portafolio...</span>
    </div>
  </div>
);

export default Loader;
