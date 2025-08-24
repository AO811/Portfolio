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
      time: "2 Weeks",
      tech: "Python, Tkinter, Folium, AbuseIPDB API, VirusTotal API",
      img: WiresharkImg1,
      live: "#",
      github: "#",
    },
    {
      title: "Employee Management System",
      desc: "Employee management system built using Java Swing and MySQL.",
      client: "University Project",
      time: "1 Month",
      tech: "Java Swing, MySQL",
      img: EMSImg,
      live: "#",
      github: "#",
    },
    {
      title: "Spotify EDA",
      desc: "Exploratory Data Analysis on Spotify dataset using Pandas, NumPy, Matplotlib, Seaborn.",
      client: "Research Project",
      time: "1 Week",
      tech: "Python, Pandas, NumPy, Matplotlib, Seaborn",
      img: SpotifyImg,
      live: "#",
      github: "#",
    },
    {
      title: "MERN Hotel Booking System",
      desc: "A hotel booking system with authentication and booking features.",
      client: "Self Project",
      time: "3 Weeks",
      tech: "MongoDB, Express, React, Node.js, Bootstrap",
      img: HotelImg,
      live: "#",
      github: "#",
    },
  ];

  const [currentProject, setCurrentProject] = useState(0);

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  // 🔥 Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProject((prev) => (prev + 1) % projects.length);
    }, 5000); // change every 5 seconds

    return () => clearInterval(interval); // cleanup
  }, [projects.length]);

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
          <p>
            <strong>Client:</strong> {project.client}
          </p>
          <p>
            <strong>Completion Time:</strong> {project.time}
          </p>
          <p>
            <strong>Technologies:</strong> {project.tech}
          </p>

          <div className="project-links">
            <a href={project.live} target="_blank" rel="noreferrer">
              🔗 Live Demo
            </a>
            <a href={project.github} target="_blank" rel="noreferrer">
              💻 GitHub
            </a>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="project-nav">
        <button onClick={prevProject}>❮</button>
        <span>
          {currentProject + 1} / {projects.length}
        </span>
        <button onClick={nextProject}>❯</button>
      </div>
    </section>
  );
}

export default Projects;
