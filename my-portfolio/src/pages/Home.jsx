import React from "react";
import "./Home.css";
import heroBg from "../assets/hero-bg.jpg"; 

const Home = ({ refs }) => {
  return (
    <section className="home" style={{ backgroundImage: `url(${heroBg})` }}>
      <div className="hero">
        <div className="hero-card">
          <h1 className="hero-title">
            Hi, I'm <span className="highlight">Abhik Das</span>
          </h1>
          <p className="hero-subtitle">
            A passionate developer who loves building clean, modern, and
            user-friendly web applications.
          </p>
          <div className="hero-buttons">
            <button
              className="btn primary-btn"
              onClick={() =>
                refs.projectsRef.current.scrollIntoView({ behavior: "smooth" })
              }
            >
              View My Work
            </button>
            <button
              className="btn secondary-btn"
              onClick={() =>
                refs.contactRef.current.scrollIntoView({ behavior: "smooth" })
              }
            >
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
