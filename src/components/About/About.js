import React, { useEffect, useRef } from "react";

const STATS = [
  { number: "3+", label: "Years Building" },
  { number: "6+", label: "Products Shipped" },
];

const ARC = [
  {
    title: "Scope",
    body: "Talk to the people who'll actually use it — clients, PMs, non-technical stakeholders.",
  },
  {
    title: "Design",
    body: "Data model, API surface, and the tradeoffs behind both.",
  },
  {
    title: "Build",
    body: "Frontend, services, pipelines — whatever the product needs.",
  },
  {
    title: "Ship",
    body: "Deploy, watch it in production, fix what reality breaks.",
  },
];

const STACK = [
  "TypeScript", "JavaScript", "Go", "Python", "Node.js",
  "React", "SQL", "AWS", "GCP", "Agentic AI", "RAG",
];

// TODO: replace with the real Credly profile URL.
const CREDLY_URL = "https://www.credly.com/users/prachi-jethava";

function About() {
  const ref = useRef(null);

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

  return (
    <section id="about" className="section paneled about-section">
      <div className="section-container animate-in" ref={ref}>
        <div className="panel">
        <div className="section-label">About</div>
        <h2 className="section-title">Who I Am</h2>
        <div className="section-rule" style={{ marginBottom: 40 }} />

        <div className="about-grid">
          <div className="about-text">
            <p className="about-claim">
              Most engineers pick a side of the stack. I never did.
            </p>
            <p>
              I've shipped production apps in <span className="text-accent">React</span> and
              React Native, written the <span className="text-accent">Go</span> and{" "}
              <span className="text-accent">Node</span> services behind them, designed the
              schemas underneath, and built <span className="text-accent">agentic AI</span> and
              RAG systems on top — often on the same project, often as the person who also
              had to explain it to the client.
            </p>
            <p>
              That's why I'm after backend, full-stack, and forward-deployed roles: the ones
              where shipping the thing and understanding who it's for are the same job.
            </p>
          </div>

          <div>
            <div className="about-stats">
              {STATS.map(({ number, label }) => (
                <div className="stat-card" key={label}>
                  <span className="stat-number">{number}</span>
                  <span className="stat-label">{label}</span>
                </div>
              ))}
              <a
                className="stat-card stat-link"
                href={CREDLY_URL}
                target="_blank"
                rel="noreferrer"
              >
                <span className="stat-number">11</span>
                <span className="stat-label">Google Cloud Certs</span>
                <span className="stat-cta">View on Credly ↗</span>
              </a>
            </div>
          </div>
        </div>

        <div className="about-arc">
          <h3 className="about-arc-title">Give me the problem, not the ticket.</h3>
          <div className="arc-grid">
            {ARC.map(({ title, body }, i) => (
              <div className={`arc-step${i === 0 ? " active" : ""}`} key={title}>
                <span className="arc-step-title">{title}</span>
                <span className="arc-step-body">{body}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="about-stack">
          <div className="about-stack-label">Stack</div>
          <div className="stack-chips">
            {STACK.map((tech) => (
              <span className="stack-chip" key={tech}>{tech}</span>
            ))}
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}

export default About;
