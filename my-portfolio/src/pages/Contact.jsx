import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        {/* Left Column – Contact Form */}
        <div className="contact-form">
          <h2>Let's Connect</h2>
          <form>
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
            <button type="submit">Send Message</button>
          </form>
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
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
