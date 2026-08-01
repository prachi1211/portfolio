import React, { useEffect, useRef, useState } from "react";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const WEB3FORMS_KEY = process.env.REACT_APP_WEB3FORMS_KEY;

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
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null); // null | "sending" | "success" | "error" | "unconfigured"

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add("visible"); },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!WEB3FORMS_KEY) {
      setStatus("unconfigured");
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `New message from ${form.name} via prachi.vercel.app`,
          ...form,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="section-container animate-in" ref={ref}>
        <div className="section-label" style={{ textAlign: "center" }}>Contact</div>
        <h2 className="section-title" style={{ textAlign: "center" }}>Let's Talk</h2>
        <div className="section-rule" style={{ margin: "0 auto 40px" }} />

        <div className="contact-grid">
          <form onSubmit={handleSubmit}>
            <div className="field">
              <label htmlFor="name">Name</label>
              <input
                id="name" name="name" type="text" placeholder="Your name"
                value={form.name} onChange={handleChange} required
              />
            </div>
            <div className="field">
              <label htmlFor="email">Email</label>
              <input
                id="email" name="email" type="email" placeholder="you@email.com"
                value={form.email} onChange={handleChange} required
              />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea
                id="message" name="message" placeholder="Say hello..."
                value={form.message} onChange={handleChange} required
              />
            </div>
            <button className="btn btn-primary" type="submit" disabled={status === "sending"}>
              {status === "sending" ? "Sending…" : "Send Message"}
            </button>

            {status === "success" && (
              <p className="form-status success">Thanks — your message is on its way. I'll get back to you soon.</p>
            )}
            {status === "error" && (
              <p className="form-status error">Something went wrong sending that. Try again, or email me directly.</p>
            )}
            {status === "unconfigured" && (
              <p className="form-status error">This form isn't wired up yet — email me directly below instead.</p>
            )}
          </form>

          <div className="contact-side">
            <p>
              Whether it's a role, a collaboration, or just a good problem to
              talk through — my inbox is open.
            </p>
            <div className="contact-links">
              <a href="mailto:prachi.jethava2001@gmail.com" className="contact-link">
                <HiOutlineMail /> prachi.jethava2001@gmail.com
              </a>
              {LINKS.map(({ label, href, icon, aria }) => (
                <a key={label} href={href} target="_blank" rel="noreferrer" className="contact-link" aria-label={aria}>
                  {icon} {label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="wave-wrap">
        <svg viewBox="0 0 1440 130" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0,70 C 220,140 460,0 720,40 C 980,80 1220,130 1440,55 L1440,130 L0,130 Z"
            fill="url(#waveGrad)"
          />
          <defs>
            <linearGradient id="waveGrad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0" stopColor="#DE9C1E" />
              <stop offset="1" stopColor="#F5B93A" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="wave-fill">
        <div className="section-container footer-inner">
          <div className="footer-socials">
            <a className="footer-social-circle" href="https://github.com/prachi1211" target="_blank" rel="noreferrer" aria-label="GitHub">
              <AiFillGithub />
            </a>
            <a className="footer-social-circle" href="https://www.linkedin.com/in/prachijethava/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>
            <a className="footer-social-circle" href="mailto:prachi.jethava2001@gmail.com" aria-label="Email">
              <HiOutlineMail />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
