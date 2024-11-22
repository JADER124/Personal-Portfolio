import React from "react";
import prom from "../imgs/prom.png";
import toDo from "../imgs/toDo.jpg";
import { FaStar } from "react-icons/fa6";

function Projects() {
  return (
    <div>
      <div className="bg-black/20" id="projects">
        <div>
          <div className="align-middle text-center my-10">
            <h1 className="text-5xl font-bold capitalize p-10 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">My Projects</h1>
          </div>
        </div>
        <div>
          <div class="grid grid-rows-8 grid-col-7 gap-4 mx-36 my-20 ">
            <div class="relative row-start-1 row-end-8 col-start-1 col-end-3 rounded-xl ">
              <img src={toDo} className="w-full bg-cover h-full rounded-xl " />
              <div class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-gradient-to-t from-black from-30% to-transparent  bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-75 ">
                <div className="  h-full w-full text-center mt-[530px]">
                  <a href="#">
                    <p className="text-4xl font-roboto font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">ToDoList</p>
                  </a>
                </div>
              </div>
            </div>
            <div class="relative row-start-1 row-end-4 col-start-3 col-end-7 rounded-xl">
              <img src={prom} className="w-full bg-cover h-full rounded-xl" />
              <div class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-gradient-to-t from-black from-55% to-transparent  bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-75 ">
                <div className="w-full h-full text-center mt-[175px]">
                  <a href="https://mipromedio.site/" target="_blank">
                    <p className="text-4xl font-roboto font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">MyAverage</p>
                  </a>
                </div>
              </div>
            </div>
            <div class="relative row-start-4 row-end-8 col-start-3 col-end-5  rounded-xl">
              <img src={prom} className="w-full bg-cover h-full rounded-xl" />
              <div class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-gradient-to-t from-black from-30% to-transparent  bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-75 ">
                <div className="  h-full w-full text-center mt-[255px]">
                  <a href="#">
                    <p className="text-4xl font-roboto font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">MyAverage</p>
                  </a>
                </div>
              </div>
            </div>
            <div class="relative row-start-4 row-end-6 col-start-5 col-end-7 rounded-xl">
              <img src={prom} className="w-full bg-cover h-full rounded-xl" />
              <div class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-gradient-to-t from-black from-30% to-transparent  bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-75 ">
                <div className="  h-full w-full text-center mt-[90px]">
                  <a href="#">
                    <p className="text-4xl font-roboto font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">MyAverage</p>
                  </a>
                </div>
              </div>
            </div>
            <div class="relative row-start-6 row-end-8 col-start-5 col-end-7  rounded-xl">
              <img src={prom} className="w-full bg-cover h-full rounded-xl" />
              <div class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-gradient-to-t from-black from-30% to-transparent  bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-75 ">
                <div className="  h-full w-full text-center mt-[90px]">
                  <a href="#">
                    <p className="text-4xl font-roboto font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">MyAverage</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
