// App.jsx
import React, { useRef, useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Research from "./pages/Research";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Loading from "./components/Loading"; 
import "./App.css";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading delay
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 4000); // 4s delay
    return () => clearTimeout(timer);
  }, []);

  // Refs for sections
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const researchRef = useRef(null);
  const contactRef = useRef(null);

  const sectionRefs = { homeRef, aboutRef, projectsRef, researchRef, contactRef };

  if (isLoading) {
    return <Loading />; // 👈 show loading screen
  }

  return (
    <div className="App">
      <Navbar refs={sectionRefs} />

      <main className="main-content">
        <section ref={homeRef}>
          <Home refs={sectionRefs} />
        </section>

        <section ref={aboutRef}>
          <About />
        </section>

        <section ref={projectsRef}>
          <Projects />
        </section>

        <section ref={researchRef}>
          <Research />
        </section>

        <section ref={contactRef}>
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
