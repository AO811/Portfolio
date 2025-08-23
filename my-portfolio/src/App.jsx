import React, { useRef } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  // Create refs for each section
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const sectionRefs = { homeRef, aboutRef, projectsRef, contactRef };

  return (
    <div className="App flex flex-col min-h-screen">
      {/* Navbar with sectionRefs */}
      <Navbar refs={sectionRefs} />

      {/* Sections with refs */}
      <main className="flex-grow">
        <section ref={homeRef}>
          <Home refs={sectionRefs} />
        </section>

        <section ref={aboutRef}>
          <About />
        </section>

        <section ref={projectsRef}>
          <Projects />
        </section>

        <section ref={contactRef}>
          <Contact />
        </section>
      </main>

      {/* Footer always at bottom */}
      <Footer />
    </div>
  );
}

export default App;
