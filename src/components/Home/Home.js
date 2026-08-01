import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import avatarImg from "../../Assets/photo.png";

function Hero() {
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="hero" className="hero-section">
      <div className="hero-blob" aria-hidden="true" />
      <div className="hero-blob front" aria-hidden="true" />
      <div className="hero-photo">
        <img src={avatarImg} alt="Prachi Jethava" />
      </div>

      <div className="hero-grid section-container">
        <div className="hero-content">
          <div className="hero-eyebrow">Software Engineer</div>
          <h1 className="hero-heading">
            Hello, my name
            <br />
            is <em>Prachi.</em>
          </h1>
          <p className="hero-lede">
            Software engineer who builds products end to end — frontend,
            backend, databases, and the agentic AI systems behind them. MS in
            Computer Science from Indiana University. I like owning a problem
            from the stakeholder conversation all the way to production.
          </p>

          <div className="hero-cta">
            <button className="btn btn-primary" onClick={() => scrollTo("projects")}>
              View Work
            </button>
            <button className="btn btn-ghost" onClick={() => scrollTo("contact")}>
              Get in Touch
            </button>
          </div>

          <div className="hero-socials">
            <a
              href="https://github.com/prachi1211"
              target="_blank"
              rel="noreferrer"
              className="social-icon-link"
              aria-label="GitHub"
            >
              <AiFillGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/prachijethava/"
              target="_blank"
              rel="noreferrer"
              className="social-icon-link"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="mailto:prachi.jethava2001@gmail.com"
              className="social-icon-link"
              aria-label="Email"
            >
              <HiOutlineMail />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
