import React from "react";
import "./Home.css";
import profilePic from "../assets/Profile.png"; // replace with your actual profile image path
import { TypeAnimation } from "react-type-animation";

const Home = () => {
  return (
    <section className="home">
      <div className="home-left">
        <p className="greeting">Hey there! I am</p>
        <h1 className="intro">
          <span className="highlight">Abhik</span>
        </h1>

        {/* Typing animation tagline */}
        <h2>
          <TypeAnimation
            sequence={[
              "Full-Stack developer",
              3000,
              "Problem solver",
              3000,
              "Tech enthusiast",
              3000,
              "Lifelong learner",
              3000,
            ]}
            wrapper="p"
            cursor={true}
            repeat={Infinity}
            className="tagline"
          />
        </h2>

        <div className="cta-buttons">
          <a href="#projects" className="btn primary">
            View Projects
          </a>
          <a href="#contact" className="btn primary">
            Contact Me
          </a>
          <a
            href="https://ao811.github.io/Abhik_Das_Resume/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn primary"
          >
            My Resume
          </a>
        </div>
      </div>

      <div className="home-right">
        <div className="profile-container">
          <img src={profilePic} alt="Abhik Profile" className="profile-pic" />
        </div>
      </div>
    </section>
  );
};

export default Home;
