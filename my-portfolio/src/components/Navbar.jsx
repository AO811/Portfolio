import React, { useState, useEffect } from "react";
import "./Navbar.css";

function Navbar({ refs }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  // Update active link on scroll
  useEffect(() => {
    const sections = [
      { id: "home", ref: refs.homeRef },
      { id: "about", ref: refs.aboutRef },
      { id: "projects", ref: refs.projectsRef },
      { id: "contact", ref: refs.contactRef },
    ];

    const handleScroll = () => {
      const scrollPos = window.scrollY + 100;
      sections.forEach(({ id, ref }) => {
        if (ref.current) {
          const offsetTop = ref.current.offsetTop;
          const offsetHeight = ref.current.offsetHeight;
          if (scrollPos >= offsetTop && scrollPos < offsetTop + offsetHeight) {
            setActive(id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [refs]);

  // Scroll to section on click
  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
    setOpen(false); // close mobile menu
  };

  return (
    <nav className="navbar">
      <h1 className="logo">A B H I K &nbsp; D A S</h1>

      <div className={`nav-links ${open ? "open" : ""}`}>
        <button
          className={active === "home" ? "active" : ""}
          onClick={() => scrollToSection(refs.homeRef)}
        >
          Home
        </button>
        <button
          className={active === "about" ? "active" : ""}
          onClick={() => scrollToSection(refs.aboutRef)}
        >
          About
        </button>
        <button
          className={active === "projects" ? "active" : ""}
          onClick={() => scrollToSection(refs.projectsRef)}
        >
          Projects
        </button>
        <button
          className={active === "contact" ? "active" : ""}
          onClick={() => scrollToSection(refs.contactRef)}
        >
          Contact
        </button>
      </div>

      <div
        className={`hamburger ${open ? "open" : ""}`}
        onClick={() => setOpen(!open)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
}

export default Navbar;
