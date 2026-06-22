import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
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
      <Contact />
      <Footer />
    </>
  );
}

export default App;