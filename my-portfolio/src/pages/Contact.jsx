import React, { useRef, useState } from "react";
import "./Contact.css";
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import emailjs from "emailjs-com";

export default function Contact() {
  const form = useRef();
  const [status, setStatus] = useState(""); // ✅ status message

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current, // ✅ use form reference
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setStatus("Message sent successfully!");
          e.target.reset();
        },
        (error) => {
          console.error(error.text);
          setStatus("Something went wrong. Please try again.");
        }
      );
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        {/* Left Column – Contact Form */}
        <div className="contact-form">
          <h2>Let's Connect</h2>
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name="name" placeholder="Your Name" required />
            <div className="form-row">
              <input
                type="text"
                name="phone"
                placeholder="Your Phone"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
              />
            </div>
            <input type="text" name="subject" placeholder="Subject" />
            <textarea
              name="message"
              placeholder="Your Message"
              required
            ></textarea>
            <button type="submit">
              Send Message <FiArrowUpRight />
            </button>
          </form>

          {/* ✅ Status Message */}
          {status && <p className="form-status">{status}</p>}
        </div>

        {/* Right Column – Contact Info & Social */}
        <div className="contact-info">
          <h2>Reach Me At</h2>
          <p>
            Email:{" "}
            <a href="mailto:abhikdas0811@gmail.com">abhikdas0811@gmail.com</a>
          </p>
          <p>Phone: +91 9096563257</p>
          <p>Address: Hyderabad, India</p>
          <div className="social-links">
            <a
              href="https://github.com/AO811"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/abhik-das-284b0a253/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.instagram.com/__abhik__das__/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://x.com/AbhikDa08116820"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

      {/* ✅ Back to Top Button */}
      <div className="back-to-top-container">
        <button
          className="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <svg className="svgIcon" viewBox="0 0 384 512">
            <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"></path>
          </svg>
        </button>
      </div>
    </section>
  );
}
