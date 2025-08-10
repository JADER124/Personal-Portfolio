import React from 'react';
import WorkExperience from '../sections/WorkExperience';
import Achievements from '../sections/Achievements';


function Experience() {
  return (
  <section className="py-16 " data-aos="fade-up">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-5xl mb-10 text-center font-bold capitalize p-10 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
          Mi Experiencia Profesional
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <WorkExperience />
          <Achievements />
        </div>
      </div>
    </section>
  );
}

export default Experience;