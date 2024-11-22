import React from "react";
import NavBar from "./components/navBar";
import Home from "./components/home";
import Presentation from "./components/presentation";
import Projects from "./components/projects";
import Education from "./components/education";
import Skills from "./components/skills";
import About from "./components/about";
import Gallery from "./components/gallery";
import Contact from "./components/contact";
import Footer from "./components/footer";
import Experience from "./components/experience";

function App() {
  return (
    <>
      <NavBar/>
      <Home/>
      <Presentation/>
      <About/>
      <Projects/>
      <Skills/>
      <Education/>
      <Experience/>
      {/*<Gallery/>*/}
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
