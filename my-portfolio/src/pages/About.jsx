import React from "react";
import "./About.css";

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">
        {/* Bio Section */}
        <div className="about-bio">
          <h2>Who Am I?</h2>
          <p>
            Hi, I’m <span className="highlight">Abhik Das</span>, a final-year
            B.Tech student with a strong interest in software development,
            cybersecurity, and data analytics. My dream is to grow into a tech
            genius who creates impactful solutions through innovation and
            problem-solving.
          </p>
          <p>
            Originally from Kolkata and raised in Pune, I discovered my
            fascination with computers and coding at an early age. Over time,
            this curiosity grew into a passion, shaping my ambitions and guiding
            my career goals.
          </p>
          <p>
            I’m proficient in Java, Python, and MySQL, and currently focusing on
            Data Structures & Algorithms to prepare for placements. My aim is to
            become a proficient and innovative software engineer capable of
            designing and developing secure, scalable, and user-friendly
            solutions for real-world challenges.
          </p>
          <p>
            Beyond academics, I enjoy playing chess, reading crime novels,
            football, experimenting with AI-based projects, and exploring the
            intersection of technology and storytelling.
          </p>
        </div>

        {/* Skills Section */}
        <div className="about-skills">
          <h2>Skills</h2>
          <ul>
            <li>
              <strong>Programming Languages:</strong> Java, Python, SQL
            </li>
            <li>
              <strong>Developer Tools:</strong> GitHub, VS Code, Eclipse, Spyder,
              MySQL Workbench, MongoDB, Arduino
            </li>
            <li>
              <strong>Styling & Markup:</strong> HTML, CSS
            </li>
            <li>
              <strong>Frameworks:</strong> Java Swing, Express.js, React.js,
              Node.js, Bootstrap
            </li>
            <li>
              <strong>Libraries:</strong> Numpy, Pandas, Matplotlib, Seaborn
            </li>
            <li>
              <strong>Networking Tools:</strong> Cisco Packet Tracer, Wireshark
            </li>
            <li>
              <strong>Non-Developer Tools:</strong> Canva, MS PowerPoint
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
