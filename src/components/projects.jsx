import React from "react";
import prom from "../assets/images/prom.png";
import toDo from "../assets/images/toDo.jpg";
import { Star, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

function Projects() {
  return (
    <section data-aos="fade-up" id="projects" className="bg-black/20">
      {/* Título */}
      <div className="text-center my-10">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold capitalize p-6 lg:p-10 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
          My Projects
        </h1>
      </div>

      {/* Contenedor único y centrado para TODOS los layouts */}
      <div className="container mx-auto px-4 sm:px-8 md:px-16 lg:px-24 xl:px-36 pb-20">
        {/* Desktop Grid - visible en pantallas grandes */}
        <div className="hidden lg:grid grid-rows-8 grid-cols-5 gap-4 h-[600px]">
          {/* ToDoList - columna izquierda */}
          <div className="relative row-start-1 row-end-9 col-start-1 col-end-3 rounded-xl group">
            <img
              src={toDo}
              loading="lazy"
              className="w-full h-full object-cover rounded-xl"
              alt="ToDo List Project"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black from-30% to-transparent opacity-0 transition duration-300 ease-in-out group-hover:opacity-75 rounded-xl">
              <div className="h-full w-full flex items-end justify-center pb-8">
                <Link
                  to="/projects/todo"
                  className="transform hover:scale-105 transition-transform flex items-center gap-2"
                  aria-label="Open ToDoList project"
                >
                  <p className="text-3xl xl:text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
                    ToDoList
                  </p>
                  <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                </Link>
              </div>
            </div>
          </div>

          {/* MyAverage grande - parte superior derecha */}
          <div className="relative row-start-1 row-end-5 col-start-3 col-end-6 rounded-xl group">
            <img
              src={prom}
              loading="lazy"
              className="w-full h-full object-cover rounded-xl"
              alt="MyAverage Project"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black from-55% to-transparent opacity-0 transition duration-300 ease-in-out group-hover:opacity-75 rounded-xl">
              <div className="h-full w-full flex items-end justify-center pb-8">
                <Link
                  to="/projects/myaverage"
                  className="transform hover:scale-105 transition-transform flex items-center gap-2"
                  aria-label="Open MyAverage site"
                >
                  <p className="text-3xl xl:text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
                    MyAverage
                  </p>
                  <ExternalLink className="w-6 h-6" />
                </Link>
              </div>
            </div>
          </div>

          {/* MyAverage mediano - abajo derecha */}
          <div className="relative row-start-5 row-end-9 col-start-3 col-end-5 rounded-xl group">
            <img
              src={prom}
              loading="lazy"
              className="w-full h-full object-cover rounded-xl"
              alt="MyAverage Project"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black from-30% to-transparent opacity-0 transition duration-300 ease-in-out group-hover:opacity-75 rounded-xl">
              <div className="h-full w-full flex items-end justify-center pb-6">
                <Link to="/projects/myaverage" className="transform hover:scale-105 transition-transform">
                  <p className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
                    MyAverage
                  </p>
                </Link>
              </div>
            </div>
          </div>

          {/* MyAverage pequeño 1 - abajo derecha arriba */}
          <div className="relative row-start-5 row-end-7 col-start-5 col-end-6 rounded-xl group">
            <img
              src={prom}
              loading="lazy"
              className="w-full h-full object-cover rounded-xl"
              alt="MyAverage Project"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black from-30% to-transparent opacity-0 transition duration-300 ease-in-out group-hover:opacity-75 rounded-xl">
              <div className="h-full w-full flex items-end justify-center pb-4">
                <Link to="/projects/myaverage" className="transform hover:scale-105 transition-transform">
                  <p className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
                    MyAverage
                  </p>
                </Link>
              </div>
            </div>
          </div>

          {/* MyAverage pequeño 2 - abajo derecha abajo */}
          <div className="relative row-start-7 row-end-9 col-start-5 col-end-6 rounded-xl group">
            <img
              src={prom}
              loading="lazy"
              className="w-full h-full object-cover rounded-xl"
              alt="MyAverage Project"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black from-30% to-transparent opacity-0 transition duration-300 ease-in-out group-hover:opacity-75 rounded-xl">
              <div className="h-full w-full flex items-end justify-center pb-4">
                <Link to="/projects/myaverage" className="transform hover:scale-105 transition-transform">
                  <p className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
                    MyAverage
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Layout Responsive para Tablets */}
        <div className="hidden md:grid lg:hidden grid-cols-4 gap-4">
          {/* ToDoList */}
          <div className="relative col-span-2 h-80 rounded-xl group">
            <img
              src={toDo}
              loading="lazy"
              className="w-full h-full object-cover rounded-xl"
              alt="ToDo List Project"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black from-30% to-transparent opacity-0 transition duration-300 ease-in-out group-hover:opacity-75 rounded-xl">
              <div className="h-full w-full flex items-end justify-center pb-6">
                <a href="#" className="transform hover:scale-105 transition-transform">
                  <p className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
                    ToDoList
                  </p>
                </a>
              </div>
            </div>
          </div>

          {/* MyAverage grande */}
          <div className="relative col-span-2 h-80 rounded-xl group">
            <img
              src={prom}
              loading="lazy"
              className="w-full h-full object-cover rounded-xl"
              alt="MyAverage Project"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black from-30% to-transparent opacity-0 transition duration-300 ease-in-out group-hover:opacity-75 rounded-xl">
              <div className="h-full w-full flex items-end justify-center pb-6">
                <a
                  href="https://mipromedio.site/"
                  target="_blank"
                  rel="noreferrer"
                  className="transform hover:scale-105 transition-transform"
                >
                  <p className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
                    MyAverage
                  </p>
                </a>
              </div>
            </div>
          </div>

          {/* Tres MyAverage más pequeños */}
          <div className="relative col-span-1 h-48 rounded-xl group">
            <img
              src={prom}
              loading="lazy"
              className="w-full h-full object-cover rounded-xl"
              alt="MyAverage Project"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black from-30% to-transparent opacity-0 transition duration-300 ease-in-out group-hover:opacity-75 rounded-xl">
              <div className="h-full w-full flex items-end justify-center pb-4">
                <a href="#" className="transform hover:scale-105 transition-transform">
                  <p className="text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
                    MyAverage
                  </p>
                </a>
              </div>
            </div>
          </div>

          <div className="relative col-span-1 h-48 rounded-xl group">
            <img
              src={prom}
              loading="lazy"
              className="w-full h-full object-cover rounded-xl"
              alt="MyAverage Project"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black from-30% to-transparent opacity-0 transition duration-300 ease-in-out group-hover:opacity-75 rounded-xl">
              <div className="h-full w-full flex items-end justify-center pb-4">
                <a href="#" className="transform hover:scale-105 transition-transform">
                  <p className="text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
                    MyAverage
                  </p>
                </a>
              </div>
            </div>
          </div>

          <div className="relative col-span-2 h-48 rounded-xl group">
            <img
              src={prom}
              loading="lazy"
              className="w-full h-full object-cover rounded-xl"
              alt="MyAverage Project"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black from-30% to-transparent opacity-0 transition duration-300 ease-in-out group-hover:opacity-75 rounded-xl">
              <div className="h-full w-full flex items-end justify-center pb-4">
                <a href="#" className="transform hover:scale-105 transition-transform">
                  <p className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
                    MyAverage
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Layout Mobile - Stack vertical */}
        <div className="grid md:hidden grid-cols-1 gap-6 max-w-md mx-auto">
          {/* ToDoList */}
          <div className="relative h-64 rounded-xl group">
            <img
              src={toDo}
              loading="lazy"
              className="w-full h-full object-cover rounded-xl"
              alt="ToDo List Project"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black from-30% to-transparent opacity-0 transition duration-300 ease-in-out group-hover:opacity-75 rounded-xl">
              <div className="h-full w-full flex items-end justify-center pb-6">
                <a href="#" className="transform hover:scale-105 transition-transform">
                  <p className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
                    ToDoList
                  </p>
                </a>
              </div>
            </div>
          </div>

          {/* MyAverage proyectos */}
          <div className="grid grid-cols-2 gap-4">
            <div className="relative h-48 rounded-xl group">
              <img
                src={prom}
                loading="lazy"
                className="w-full h-full object-cover rounded-xl"
                alt="MyAverage Project"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black from-30% to-transparent opacity-0 transition duration-300 ease-in-out group-hover:opacity-75 rounded-xl">
                <div className="h-full w-full flex items-end justify-center pb-4">
                  <a
                    href="https://mipromedio.site/"
                    target="_blank"
                    rel="noreferrer"
                    className="transform hover:scale-105 transition-transform"
                  >
                    <p className="text-lg font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
                      MyAverage
                    </p>
                  </a>
                </div>
              </div>
            </div>

            <div className="relative h-48 rounded-xl group">
              <img
                src={prom}
                loading="lazy"
                className="w-full h-full object-cover rounded-xl"
                alt="MyAverage Project"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black from-30% to-transparent opacity-0 transition duration-300 ease-in-out group-hover:opacity-75 rounded-xl">
                <div className="h-full w-full flex items-end justify-center pb-4">
                  <a href="#" className="transform hover:scale-105 transition-transform">
                    <p className="text-lg font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
                      MyAverage
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="relative h-48 rounded-xl group">
            <img
              src={prom}
              loading="lazy"
              className="w-full h-full object-cover rounded-xl"
              alt="MyAverage Project"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black from-30% to-transparent opacity-0 transition duration-300 ease-in-out group-hover:opacity-75 rounded-xl">
              <div className="h-full w-full flex items-end justify-center pb-4">
                <a href="#" className="transform hover:scale-105 transition-transform">
                  <p className="text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
                    MyAverage
                  </p>
                </a>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="relative h-32 rounded-xl group">
              <img
                src={prom}
                loading="lazy"
                className="w-full h-full object-cover rounded-xl"
                alt="MyAverage Project"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black from-30% to-transparent opacity-0 transition duration-300 ease-in-out group-hover:opacity-75 rounded-xl">
                <div className="h-full w-full flex items-end justify-center pb-3">
                  <a href="#" className="transform hover:scale-105 transition-transform">
                    <p className="text-sm font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
                      MyAverage
                    </p>
                  </a>
                </div>
              </div>
            </div>

            <div className="relative h-32 rounded-xl group">
              <img
                src={prom}
                loading="lazy"
                className="w-full h-full object-cover rounded-xl"
                alt="MyAverage Project"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black from-30% to-transparent opacity-0 transition duration-300 ease-in-out group-hover:opacity-75 rounded-xl">
                <div className="h-full w-full flex items-end justify-center pb-3">
                  <a href="#" className="transform hover:scale-105 transition-transform">
                    <p className="text-sm font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
                      MyAverage
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /Mobile */}
      </div>
      {/* /container */}
    </section>
  );
}

export default Projects;
