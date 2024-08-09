import React from "react";

function Education() {
  return (
    <div>
      <div className="" id="education">
        <div>
          <div className="align-middle text-center my-10">
            <h1 className="text-5xl font-bold capitalize p-10">Education</h1>
          </div>
        </div>
        <div>
          <div className="grid grid-cols-3 mx-20 gap-10 mb-10">
            <div className="bg-slate-200 rounded-lg">
              <div className="my-10 mx-10 bg-orange-400 p-20 rounded-lg"></div>
              <div className="text-center my-10">
              <p className="text-3xl font-bold italic text-black">Tecnica Profesional En Sistemas</p>
                <p className="text-lg font-bold italic text-black">Tecnologico De Antioquia</p>
                <p className="text-lg font-bold italic text-black">2024</p>
              </div>
              <div className="text-right mt-14 mb-8 mr-10">
                <button className="bg-black text-cyan-600 outline border-cyan-600 hover:text-cyan-700 hover:border-cyan-700 py-2 px-14 rounded-lg">
                  hello
                </button>
              </div>
            </div>
            <div className="bg-green-400 rounded-lg">
              <div className="my-10 mx-10 bg-orange-400 p-20 rounded-lg"></div>
              <div className="text-center my-10">
                <p className="text-3xl font-bold italic text-black">Tecnología En Sistemas</p>
                <p className="text-lg font-bold italic text-black">Tecnologico De Antioquia</p>
                <p className="text-lg font-bold italic text-black">2024</p>
              </div>
              <div className="text-right mt-14 mb-8 mr-10">
                <button className="bg-black text-cyan-600 outline border-cyan-600 hover:text-cyan-700 hover:border-cyan-700 py-2 px-14 rounded-lg">
                  hello
                </button>
              </div>
            </div>
            <div className="bg-blue-400 rounded-lg">
              <div className="my-10 mx-10 bg-orange-400 p-20 rounded-lg"></div>
              <div className="text-center my-10">
              <p className="text-3xl font-bold italic text-black">Ingeniería En Desarrollo De Software</p>
                <p className="text-lg font-bold italic text-black">Tecnologico De Antioquia</p>
                <p className="text-lg font-bold italic text-black">En curso...</p>
              </div>
              <div className="text-right mt-14 mb-8 mr-10">
                <button className="bg-black text-cyan-600 outline border-cyan-600 hover:text-cyan-700 hover:border-cyan-700 py-2 px-14 rounded-lg">
                  hello
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
