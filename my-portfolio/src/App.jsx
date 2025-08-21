import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* Sticky Navbar */}
      <nav className="navbar">
        <h1 className="logo">MyPortfolio</h1>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <h2>Hello, I'm <span className="highlight">Abhik</span></h2>
          <p>
            A passionate <strong>Web Developer</strong> who loves creating clean,
            modern, and user-friendly websites.
          </p>
          <a href="#projects" className="btn">View My Work</a>
        </div>
      </section>

      {/* About Section */}
      <section id="about">
        <About />
      </section>

      {/* Projects Section */}
      <section id="projects">
        <Projects />
      </section>

      {/* Contact Section */}
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}

export default App;
