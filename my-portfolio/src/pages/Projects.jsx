import "./Projects.css";
import { useState, useEffect } from "react";

import WiresharkImg1 from "../assets/Wireshark1.png";
import EMSImg from "../assets/EMS.png";
import SpotifyImg from "../assets/Spotify.png";
import HotelImg from "../assets/Hotel.png";

function Projects() {
  const projects = [
    {
      title: "Wireshark Network Tracking with Google Maps",
      desc: "Network threat monitoring tool using Python, Tkinter, Folium, and AbuseIPDB+VirusTotal APIs.",
      client: "Personal Project",
      time: "1 Week",
      tech: "Python, Tkinter, Folium, AbuseIPDB API, VirusTotal API",
      img: WiresharkImg1,
      live: "#",
      github: "https://github.com/AO811/Wireshark-Network-Tracking-With-Google-Maps",
    },
    {
      title: "Employee Management System",
      desc: "Employee management system built using Java Swing and MySQL.",
      client: "University Project",
      time: "4 Weeks",
      tech: "Java Swing, MySQL",
      img: EMSImg,
      live: "#",
      github: "https://github.com/AO811/Employee-Management-System",
    },
    {
      title: "Spotify EDA",
      desc: "Exploratory Data Analysis on Spotify dataset using Pandas, NumPy, Matplotlib, Seaborn.",
      client: "Personal Project",
      time: "1 Week",
      tech: "Python, Pandas, NumPy, Matplotlib, Seaborn",
      img: SpotifyImg,
      live: "#",
      github: "https://github.com/AO811/SpotifyEDA",
    },
    {
      title: "MERN Hotel Booking System",
      desc: "A hotel booking system with authentication and booking features.",
      client: "Personal Project",
      time: "2 Weeks",
      tech: "MongoDB, Express, React, Node.js, Bootstrap",
      img: HotelImg,
      live: "#",
      github: "https://github.com/AO811/MERN-Hotel-Booking-System",
    },
  ];

  const [currentProject, setCurrentProject] = useState(0);

  // 🔥 Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProject((prev) => (prev + 1) % projects.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [projects.length]);

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const project = projects[currentProject];

  return (
    <section className="projects">
      <h2>Projects</h2>

      <div className="project-slide fade">
        {/* Left: Image */}
        <div className="project-image">
          <img src={project.img} alt={project.title} />
        </div>

        {/* Right: Details */}
        <div className="project-details">
          <h3>{project.title}</h3>
          <p className="desc">{project.desc}</p>

          <h4>Project Info</h4>
          <div className="project-info">
            <div className="project-info-row">
              <strong>Client</strong>
              <span>{project.client}</span>
            </div>
            <div className="project-info-row">
              <strong>Completion Time</strong>
              <span>{project.time}</span>
            </div>
            <div className="project-info-row">
              <strong>Technologies</strong>
              <span>{project.tech}</span>
            </div>
          </div>

          {/* Buttons */}
          <div className="button-group">
            <a href={project.github} target="_blank" rel="noreferrer" className="btn">
              <i className="fab fa-github"></i> GitHub
            </a>
          </div>
        </div>
      </div>

      {/* Glowing Arrow Navigation */}
      <div className="container">
        <div className="pane">
          <label className="label" onClick={prevProject}>
            <span>❮</span>
          </label>
          <label className="label" onClick={nextProject}>
            <span>❯</span>
          </label>
          <span className="selection"></span>
        </div>
      </div>
    </section>
  );
}

export default Projects;
