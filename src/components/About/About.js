import React, { useEffect, useRef } from "react";

const STATS = [
  { number: "3+", label: "Years Building" },
  { number: "6+", label: "Projects Shipped" },
  { number: "∞",  label: "Curious Mind" },
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
              I'm Prachi — a{" "}
              <span className="text-accent">Software Engineer</span> by trade,
              but a curious mind first. I love figuring out how things work,
              whether that's a stubborn bug in production code or a new recipe
              I'm attempting for the fifth time.
            </p>
            <p>
              I did my Master's in Computer Science at{" "}
              <span className="text-accent">Indiana University Bloomington</span>,
              and I genuinely enjoy the craft of building — clean APIs,
              thoughtful interfaces, systems that hold up under real use. But
              the same curiosity that pulls me into a hard engineering problem
              also pulls me onto a soccer field, into a kitchen experimenting
              with a new dish, or in front of a canvas trying to get a colour
              just right.
            </p>
            <p>
              I think the best engineers stay students — so I'm always picking
              up something new, whether it's a framework, a sport, or a
              painting that didn't turn out right the first three times.
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
