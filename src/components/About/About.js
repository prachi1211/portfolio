import React, { useEffect, useRef } from "react";

const STATS = [
  { number: "3+", label: "Years Building" },
  { number: "6+", label: "Projects Shipped" },
  { number: "3",  label: "Industry Roles" },
];

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
    <section id="about" className="section about-section">
      <div className="section-container animate-in" ref={ref}>
        <div className="section-label">About Me</div>
        <h2 className="section-title">Who I Am</h2>

        <div className="about-grid">
          <div className="about-text">
            <p>
              I'm a <span className="text-accent">Software Engineer</span> with
              a Master's in Computer Science from{" "}
              <span className="text-accent">Indiana University Bloomington</span>,
              passionate about building products that are technically solid and
              genuinely useful.
            </p>
            <p>
              I specialize in full-stack development — designing clean REST APIs,
              building responsive React frontends, and architecting scalable
              backend systems. I've taken production platforms from zero to
              launch, integrating AI capabilities and enforcing secure,
              multi-tenant access patterns.
            </p>
            <p>
              Beyond code, I led the{" "}
              <span className="text-accent">Women Who Code</span> alliance at IU,
              running workshops on SQL, Python, data structures, and networking
              to help others grow in tech.
            </p>
          </div>

          <div className="about-stats">
            {STATS.map(({ number, label }) => (
              <div className="stat-card" key={label}>
                <span className="stat-number">{number}</span>
                <span className="stat-label">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
