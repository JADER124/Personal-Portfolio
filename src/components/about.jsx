import React from "react";
import prueba from "../imgs/img1.jpg";
import CV from "../utils/files/CV.pdf"

function About() {
  return (
    <div id="about">
      <div>
        <div>
          <div className="align-middle text-center my-10">
            <h1 className="text-5xl font-bold capitalize p-10">About Me</h1>
          </div>
        </div>
        <div>
          <div className=" bg-slate-700 rounded-3xl align-middle text-center mx-52 mb-10">
            <p className="text-xl p-28">
              Hi, i am Jhon Jader Lopez , i am a software developer and a great personal trainer....
            </p>
          </div>
        </div>
        <div className="mb-10">
          <div className="text-center">
            <button className=" bg-cyan-500 font-bold py-2 px-10 rounded-lg hover:bg-cyan-600 animate-jump-in animate-delay-300 animate-once">
              <a
                href={CV}
                target="_blank"
                rel="noopener noreferrer"
                download="nombre_pretendido_del archivo.pdf"
              >
                Dowload My CV
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
