import React, { useEffect, useRef } from "react";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const LINKS = [
  {
    label: "GitHub",
    href: "https://github.com/prachi1211",
    icon: <AiFillGithub />,
    aria: "GitHub profile",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/prachijethava/",
    icon: <FaLinkedinIn />,
    aria: "LinkedIn profile",
  },
];

function Contact() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add("visible"); },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="contact" className="section contact-section">
      <div className="section-container animate-in" ref={ref}>
        <div className="section-label">Get In Touch</div>
        <h2 className="section-title">Let's Connect</h2>
        <p className="contact-desc">
          I'm actively looking for new opportunities. Whether you have a role
          in mind, want to collaborate on a project, or just want to say hi —
          my inbox is always open.
        </p>

        <div className="contact-cta">
          <a
            href="mailto:prachi.jethava2001@gmail.com"
            className="btn-primary"
          >
            <HiOutlineMail size={17} />
            prachi.jethava2001@gmail.com
          </a>
        </div>

        <div className="contact-links">
          {LINKS.map(({ label, href, icon, aria }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="contact-link"
              aria-label={aria}
            >
              {icon}
              {label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Contact;
