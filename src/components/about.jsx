import React from "react";
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
            Aunque mi enfoque es claramente técnico, disfruto enormemente del proceso creativo que conlleva el desarrollo de software. Me motiva encontrar soluciones eficientes y ver cómo cada línea de código se convierte en algo tangible y útil para los demás. Me considero alguien adaptable y siempre dispuesto a aprender nuevas tecnologías y herramientas que me permitan mejorar en cada proyecto. Trabajar en equipo y compartir conocimientos es algo que valoro mucho, porque creo que las mejores ideas surgen de la colaboración.
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
