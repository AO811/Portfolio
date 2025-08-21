import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <section className="home">
      <div className="hero">
        <div className="hero-card">
          <img
            src="https://via.placeholder.com/150"
            alt="Profile"
            className="hero-img"
          />
          <h1 className="hero-title">Hi, I'm Abhik Das</h1>
          <p className="hero-subtitle">
            A passionate developer who loves building clean, modern, and
            user-friendly web applications.
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn primary-btn">
              View My Work
            </a>
            <a href="#contact" className="btn secondary-btn">
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
