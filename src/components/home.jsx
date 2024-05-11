import React from "react";

function Home() {
  return (
    
    <div className="" id="home">
      {/*bg-gradient-to-br from-cyan-600   to-zinc-900 to-80% before:h-96 before:w-96 before:bg-black before:absolute before:rounded-br-full before:bg-gradient-to-r before:from-slate-900 before:to-cyan-900*/}
      <div className="flex max-h-max text-center ">
        <div className="w-1/2 z-30">
          <div className="px-10 py-4 text-left my-52 ml-20 ">
            <h1 className="text-6xl -mt-7 ml-10 opacity-80 p-2 font-roboto font-bold text-cyan-50/15 absolute">
              Jhon&nbsp;Jader&nbsp;López
            </h1>
            <h1 className="text-6xl p-2 font-roboto font-bold animate-typing overflow-hidden text-cyan-50">
              Jhon&nbsp;Jader&nbsp;López
            </h1>
            <p className="text-xl p-2 font-roboto font-bold text-cyan-200">
              Software&nbsp;Developer
            </p>
            <p className="p-2 font-bold">Frase</p>
          </div>
        </div>
        <div className="w-1/2 my-auto">
          <div className="h-1/2 ml-44">
            <img
              className="rounded-full bg-cover bg-center w-[400px] h-[400px]  "
              src="https://cdn.pixabay.com/photo/2021/11/20/05/15/car-6810885_1280.jpg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
