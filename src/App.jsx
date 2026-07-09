import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import PersonalProjects from "./components/PersonalProjects";
import Skills from "./components/Skills";
import UpcomingProjects from "./components/UpcomingProjects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import About from "./components/About";


function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Projects />
      <PersonalProjects />
      <Skills />
      <UpcomingProjects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;