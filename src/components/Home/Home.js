import React, { useEffect, useState } from "react";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn, FaFutbol, FaPaintBrush } from "react-icons/fa";
import { GiCookingPot } from "react-icons/gi";
import { HiOutlineMail } from "react-icons/hi";
import avatarImg from "../../Assets/photo.png";
// import { AvatarBody, AvatarPeek } from "./Avatar";
// import photo from "../../Assets/prachi_formal_final.jpg";
// import { FiDownload } from "react-icons/fi";
// import resumePDF from "../../Assets/Prachi_Piyushbhai_Jethava_resume.pdf";

const ROLES = ["Software Engineer", "Full Stack Developer", "Web Developer"];

function useTypewriter(words) {
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const current = words[index];
    let timeout;

    if (typing) {
      if (displayed.length < current.length) {
        timeout = setTimeout(
          () => setDisplayed(current.slice(0, displayed.length + 1)),
          80,
        );
      } else {
        timeout = setTimeout(() => setTyping(false), 2200);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
      } else {
        setIndex((i) => (i + 1) % words.length);
        setTyping(true);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, typing, index, words]);

  return displayed;
}

function Hero() {
  const role = useTypewriter(ROLES);

  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="hero" className="hero-section">
      <div className="hero-container">
        {/* ── Text Column ── */}
        <div className="hero-text-col">
          {/* Each child has a staggered hero-animate class */}
          <div className="hero-animate hero-animate-1">
            <span className="hero-tag">
              Open to new opportunities
            </span>
          </div>

          <div className="hero-animate hero-animate-2">
            <p className="hero-greeting">Hi, I'm</p>
            <h1 className="hero-name">Prachi Jethava</h1>
          </div>

          <div className="hero-animate hero-animate-3">
            <div className="hero-role" aria-live="polite">
              <span className="typewriter-text">{role}</span>
              <span className="typewriter-cursor" aria-hidden="true">
                |
              </span>
            </div>
          </div>

          <div className="hero-animate hero-animate-4">
            <p className="hero-bio">
              Software Engineer experienced in building full-stack web
              applications using React, TypeScript, and Node.js — with strong
              foundations in API design, system architecture, and scalable
              backend services.
            </p>
          </div>

          <div className="hero-animate hero-animate-5">
            <div className="hero-cta">
              <button
                className="btn-primary"
                onClick={() => scrollTo("projects")}
              >
                View Projects
              </button>
              {/* <a
                href={resumePDF}
                download="Prachi_Jethava_Resume.pdf"
                className="btn-outline"
              >
                <FiDownload size={15} />
                Resume
              </a> */}
            </div>
          </div>

          <div className="hero-animate hero-animate-6">
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

        {/* ── Avatar Column ── */}
        <div className="hero-image-col hero-img-animate">
          <div className="hero-avatar-frame">
            <div className="hero-image-wrapper">
              <img
                src={avatarImg}
                alt="Illustrated avatar of Prachi"
                className="hero-avatar-img"
              />
            </div>
            <span
              className="hero-badge hero-badge-sports"
              aria-label="Enjoys sports"
              title="Sports"
            >
              <FaFutbol />
            </span>
            <span
              className="hero-badge hero-badge-cooking"
              aria-label="Enjoys cooking"
              title="Cooking"
            >
              <GiCookingPot />
            </span>
            <span
              className="hero-badge hero-badge-painting"
              aria-label="Enjoys painting"
              title="Painting"
            >
              <FaPaintBrush />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
