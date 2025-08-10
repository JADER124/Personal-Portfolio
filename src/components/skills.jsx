import React from "react";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact, FaNodeJs, FaGitAlt, FaCode, FaHtml5, FaCss3Alt, FaPython, FaDocker, FaFigma } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript, SiExpress, SiMysql, SiMongodb, SiVisualstudiocode, SiPostman } from "react-icons/si";

function Skills() {
  const skills = [
    { name: 'Frontend', items: ['React', 'HTML5', 'CSS3', 'JavaScript', 'Tailwind'] },
    { name: 'Backend', items: ['Node.js', 'Express', 'Python', 'MySQL', 'MongoDB'] },
    { name: 'Herramientas', items: ['Git', 'VS Code', 'Docker', 'Postman', 'Figma'] }
  ];

  const topSkills = [
    { name: 'JavaScript', icon: IoLogoJavascript, color: 'shadow-yellow-500', iconColor: 'text-yellow-400' },
    { name: 'React', icon: FaReact, color: 'shadow-blue-800', iconColor: 'text-blue-400' },
    { name: 'Tailwind', icon: RiTailwindCssFill, color: 'shadow-teal-400', iconColor: 'text-teal-400' },
    { name: 'Node.js', icon: FaNodeJs, color: 'shadow-green-800', iconColor: 'text-green-400' },
    { name: 'TypeScript', icon: SiTypescript, color: 'shadow-sky-500', iconColor: 'text-sky-400' },
    { name: 'Git', icon: FaGitAlt, color: 'shadow-red-400', iconColor: 'text-red-400' }
  ];

  const getSkillIcon = (skillName) => {
    const iconMap = {
      'React': FaReact,
      'HTML5': FaHtml5,
      'CSS3': FaCss3Alt,
      'JavaScript': IoLogoJavascript,
      'Tailwind': RiTailwindCssFill,
      'Node.js': FaNodeJs,
      'Express': SiExpress,
      'Python': FaPython,
      'MySQL': SiMysql,
      'MongoDB': SiMongodb,
      'Git': FaGitAlt,
      'VS Code': SiVisualstudiocode,
      'Docker': FaDocker,
      'Postman': SiPostman,
      'Figma': FaFigma
    };
    
    const IconComponent = iconMap[skillName] || FaCode;
    return <IconComponent className="w-4 h-4 mr-3 text-gray-400 group-hover/item:text-blue-400 transition-colors" />;
  };

  return (
    <div data-aos="fade-up">
      <div className="" id="skills">
        {/* Título */}
        <div>
          <div className="align-middle text-center my-10">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold capitalize p-6 lg:p-10 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
              Skills and Tools
            </h1>
          </div>
        </div>

        {/* Iconos principales - responsive */}
        <div className="mb-10 px-4 sm:px-8 md:px-16 lg:px-24">
          <div className="max-w-6xl mx-auto p-4 sm:p-6 lg:p-7 rounded-lg">
            
            {/* Desktop - 6 columnas */}
            <div className="hidden lg:flex gap-6 xl:gap-10 justify-center items-center">
              {topSkills.map((skill) => {
                const IconComponent = skill.icon;
                return (
                  <div key={skill.name} className="group cursor-pointer text-center">
                    <div className={`rounded-full bg-black p-6 shadow-lg ${skill.color} hover:shadow-xl hover:scale-110 transition-all duration-300`}>
                      <IconComponent className={`w-12 h-12 ${skill.iconColor}`} />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Tablet - 3 columnas con 2 filas */}
            <div className="hidden md:grid lg:hidden grid-cols-3 gap-6 justify-items-center">
              {topSkills.map((skill) => {
                const IconComponent = skill.icon;
                return (
                  <div key={skill.name} className="group cursor-pointer text-center">
                    <div className={`rounded-full bg-black p-5 shadow-lg ${skill.color} hover:shadow-xl hover:scale-110 transition-all duration-300`}>
                      <IconComponent className={`w-10 h-10 ${skill.iconColor}`} />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Mobile - 2 columnas con 3 filas */}
            <div className="grid md:hidden grid-cols-2 gap-4 justify-items-center">
              {topSkills.map((skill) => {
                const IconComponent = skill.icon;
                return (
                  <div key={skill.name} className="group cursor-pointer text-center">
                    <div className={`rounded-full bg-black p-4 shadow-lg ${skill.color} hover:shadow-xl hover:scale-110 transition-all duration-300`}>
                      <IconComponent className={`w-8 h-8 ${skill.iconColor}`} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Skills categorías - responsive */}
        <section className="py-10 px-4 sm:px-8 md:px-16">
          <div className="max-w-6xl mx-auto">
            
            {/* Desktop y Tablet - 3 columnas */}
            <div className="hidden md:grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
              {skills.map((category, index) => (
                <div 
                  key={category.name} 
                  className="bg-gray-900/80 backdrop-blur-sm p-6 rounded-lg shadow-lg hover:transform hover:scale-105 transition-all duration-300 border border-gray-800 hover:border-gray-700"
                >
                  <div className="flex items-center mb-4">
                    {index === 0 && <FaCode className="w-6 h-6 mr-3 text-blue-500" />}
                    {index === 1 && <FaNodeJs className="w-6 h-6 mr-3 text-green-500" />}
                    {index === 2 && <FaGitAlt className="w-6 h-6 mr-3 text-purple-500" />}
                    <h3 className="text-xl font-semibold text-blue-400">{category.name}</h3>
                  </div>
                  <ul className="space-y-3">
                    {category.items.map((item) => (
                      <li key={item} className="flex items-center group/item">
                        {getSkillIcon(item)}
                        <span className="text-gray-300 group-hover/item:text-white transition-colors">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Mobile - 1 columna stack */}
            <div className="grid md:hidden grid-cols-1 gap-6">
              {skills.map((category, index) => (
                <div 
                  key={category.name} 
                  className="bg-gray-900/80 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-gray-800"
                >
                  <div className="flex items-center mb-4">
                    {index === 0 && <FaCode className="w-5 h-5 mr-3 text-blue-500" />}
                    {index === 1 && <FaNodeJs className="w-5 h-5 mr-3 text-green-500" />}
                    {index === 2 && <FaGitAlt className="w-5 h-5 mr-3 text-purple-500" />}
                    <h3 className="text-lg font-semibold text-blue-400">{category.name}</h3>
                  </div>
                  
                  {/* Grid responsive para los items en mobile */}
                  <div className="grid grid-cols-1 gap-2">
                    {category.items.map((item) => (
                      <div key={item} className="flex items-center group/item">
                        {getSkillIcon(item)}
                        <span className="text-sm text-gray-300 group-hover/item:text-white transition-colors">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Skills;