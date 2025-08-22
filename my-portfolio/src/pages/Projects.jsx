import "./Projects.css";
import { useState, useEffect } from "react";

import WiresharkImg1 from "../assets/Wireshark1.png";
import WiresharkImg2 from "../assets/Wireshark2.png";
import WiresharkImg3 from "../assets/Wireshark3.png";
import WiresharkImg4 from "../assets/Wireshark4.png";
import WiresharkImg5 from "../assets/Wireshark5.png";

import EMSImg from "../assets/EMS.png";
import SpotifyImg from "../assets/Spotify.png";
import HotelImg from "../assets/Hotel.png";

function Projects() {
  const projects = [
    {
      title: "Wireshark Network Tracking with Google Maps",
      desc: "Network threat monitoring tool using Python, Tkinter, Folium, and AbuseIPDB+VirusTotal APIs",
      img: [WiresharkImg1, WiresharkImg2, WiresharkImg3, WiresharkImg4, WiresharkImg5]
    },
    {
      title: "Employee Management System",
      desc: "Developed using Java Swing and MySQL",
      img: [EMSImg]
    },
    {
      title: "Spotify EDA",
      desc: "EDA using Pandas, NumPy, Matplotlib, Seaborn",
      img: [SpotifyImg]
    },
    {
      title: "MERN Hotel Booking System",
      desc: "Built with MERN Stack + Bootstrap",
      img: [HotelImg]
    },
  ];

  const [hovered, setHovered] = useState(null);
  const [indexes, setIndexes] = useState(projects.map(() => 0));

  // Run slideshow only when card is hovered
  useEffect(() => {
    if (hovered === null) return;
    const interval = setInterval(() => {
      setIndexes((prev) =>
        prev.map((val, idx) =>
          idx === hovered
            ? (val + 1) % projects[idx].img.length
            : val
        )
      );
    }, 2000); // slower speed (2s)
    return () => clearInterval(interval);
  }, [hovered]);

  return (
    <section className="projects">
      <h2>Projects</h2>
      <div className="card-grid">
        {projects.map((project, index) => (
          <div
            className={`card ${hovered === index ? "hovered" : ""}`}
            key={index}
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
          >
            <h3>{project.title}</h3>
            <p>{project.desc}</p>
            <figure>
              <div className="slideshow-container">
                <img
                  src={project.img[indexes[index]]}
                  alt={project.title}
                  className="slide-image"
                />
              </div>
              <figcaption>{project.caption}</figcaption>
            </figure>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
