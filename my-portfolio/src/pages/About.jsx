import React from "react";
import "./About.css";

export default function About() {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section className="about" id="about">
      <div className="about-container">
        {/* Bio Section */}
        <div className="about-bio">
          <h2>Behind the Code</h2>
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

          <div className="skill-category">
            <h3>Languages</h3>
            <div className="skill-list">
              <span className="skill-pill">Java</span>
              <span className="skill-pill">Python</span>
              <span className="skill-pill">SQL</span>
              <span className="skill-pill">HTML</span>
              <span className="skill-pill">CSS</span>
            </div>
          </div>

          <div className="skill-category">
            <h3>Frameworks and Libraries</h3>
            <div className="skill-list">
              <span className="skill-pill">React.js</span>
              <span className="skill-pill">Express.js</span>
              <span className="skill-pill">Node.js</span>
              <span className="skill-pill">Bootstrap</span>
              <span className="skill-pill">Java Swing</span>
              <span className="skill-pill">Numpy</span>
              <span className="skill-pill">Pandas</span>
              <span className="skill-pill">Matplotlib</span>
              <span className="skill-pill">Seaborn</span>
            </div>
          </div>

          <div className="skill-category">
            <h3>Databases and Tools</h3>
            <div className="skill-list">
              <span className="skill-pill">MySQL</span>
              <span className="skill-pill">MongoDB</span>
              <span className="skill-pill">GitHub</span>
              <span className="skill-pill">VSCode</span>
              <span className="skill-pill">Arduino</span>
            </div>
          </div>

          <div className="skill-category">
            <h3>Networking and Others</h3>
            <div className="skill-list">
              <span className="skill-pill">Cisco Packet Tracer</span>
              <span className="skill-pill">Wireshark</span>
              <span className="skill-pill">Canva</span>
              <span className="skill-pill">MS PowerPoint</span>
            </div>
          </div>
        </div>
      </div>
      {/* New Collab Section */}
      <div className="about-collab">
        <h3>Interested in collaborating or just want to chat?</h3>
        <p>
          I’m always open to exciting projects, collaborations, or just a
          friendly conversation.
        </p>
        <div className="arrow" onClick={scrollToContact}>
          ↓
        </div>
      </div>
    </section>
  );
}
