import React, { useEffect } from "react";
import NavBar from "./components/navBar";
import AOS from 'aos';
import Home from "./components/home";
import Presentation from "./components/presentation";
import Projects from "./components/projects";
import Education from "./components/education";
import Skills from "./components/skills";
import About from "./components/about";

import Contact from "./components/contact";

import Footer from "./components/footer";

import Experience from "./components/experience";

import Testimonials from "./sections/Testimonials";

import Blog from "./sections/Blog";
import Loader from "./components/Loader";

import ScrollToTop from "./components/ScrollToTop";

function App() {
  const [loading, setLoading] = React.useState(true);
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      easing: 'ease-in-out',
    });
    const timer = setTimeout(() => setLoading(false), 1800);
    return () => clearTimeout(timer);
  }, []);
  if (loading) return <Loader />;
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
      <ScrollToTop/>
    </>
  );
}

export default App;
