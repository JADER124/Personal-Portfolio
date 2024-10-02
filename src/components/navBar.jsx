import React, { useState, useEffect } from "react";
import "../../src/index.css";
import icon from "../imgs/icon.png"

function NavBar() {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 10);
    });
  });
  return (
    <div className={`headerMain ${scroll ? "sticky" : ""}`}>
      <div className="mx-auto p-4 bg-gradient-to-b from-[#09090b] to-[#09090b]/50">
        <ul className="flex justify-between">
          <li>Icon</li>
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
