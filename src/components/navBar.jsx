import React, { useState, useEffect } from "react";
import "../../src/index.css";
import icon from "../imgs/icon.png";

function NavBar() {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 10);
    });
  });
  return (
    <div className={`headerMain ${scroll ? "sticky" : ""}`}>
      <div className="mx-auto p-4 bg-gradient-to-b from-[#09090b] to-[#09090b]/80">
        <ul className="flex justify-between">
          <li>
            <div className="flex items-center justify-center">
              <p className="font-roboto font-bold text-2xl self-center">Use</p>
              <div className="flex-shrink-0 mx-1">
                <p className="font-bold text-2xl">
                  <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">{`{`}J</span>
                  <span className="relative -bottom-1 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">J</span>
                  <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">{`}`}</span>
                </p>
              </div>
              <p className="font-roboto font-bold text-2xl self-center">Dev</p>
            </div>
          </li>
          <div className="flex gap-4 font-bold ">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#education">Education</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
