import React, { useEffect, useRef } from "react";

/* ================================================================ */
/*  DATA                                                             */
/* ================================================================ */

const EXPERIENCE = [
  {
    id: "yourssafety",
    current: true,
    title: "Software Engineer",
    org: "Anagh",
    period: "Jun 2026 – Present",
    points: [
      "Ship features for a live personal-safety iOS app with 100+ users end-to-end — JavaScript, Expo, Firebase — from local dev through TestFlight to App Store release.",
      "Own Firebase backend integration for real-time sync, auth, and state, keeping safety-critical features dependable for real people every day.",
    ],
  },
  {
    id: "heartland",
    title: "Senior Consultant",
    org: "Heartland Community Network",
    period: "Jun 2025 – Jun 2026",
    points: [
      "Built a full-stack auction platform end-to-end (React + Node.js) that drove a 40% increase in fundraising outcomes post-launch.",
      "Designed scalable APIs, PostgreSQL schemas, and role-based dashboards, and ran sprint cycles that turned shifting client asks into shipped features.",
    ],
  },
  {
    id: "dreamleo",
    title: "Software Engineer Intern",
    org: "Dream Leo",
    period: "Sep 2022 – Jun 2023",
    points: [
      "Cut React bottlenecks and redundant API calls, lifting PageSpeed and SEO scores by 35%.",
      "Redesigned site navigation with the UX team — 15% lower bounce rate, 10% longer average sessions.",
    ],
  },
  {
    id: "kelley-ra",
    title: "Research Assistant",
    org: "Kelley School of Business, Indiana University",
    period: "Jan 2026 – Jun 2026",
    points: [
      "Fuzzy-matched employer names to stock tickers across FEC political-donation records using NLP similarity techniques, resolving inconsistent naming at scale.",
      "Consolidated CEO and employee contribution data into structured firm-year metrics powering active research on corporate political behaviour.",
    ],
  },
];

const LEADERSHIP = [
  {
    id: "cewit",
    title: "Lead Intern, Women Who Code",
    org: "CEWIT, Indiana University",
    period: "Aug 2023 – May 2025",
    points: [
      "Led the Women Who Code alliance at IU as Lead Intern — ran workshops and built partnerships that grew tech diversity on campus over 9 months.",
      "Automated Power BI dashboards tracking 13K affiliates and 5K event attendees, giving leadership real-time visibility into engagement trends.",
    ],
  },
  {
    id: "capgemini",
    title: "Scrum Master",
    org: "Capgemini",
    period: "Jul – Aug 2022",
    points: [
      "Ran weekly Agile sprints as Scrum Master for an AI-driven resume-analysis platform, lifting sprint velocity 30%.",
      "Automated the resume-parsing pipeline behind it — manual entry dropped from 5 minutes to 1, field accuracy up 40%.",
    ],
  },
  {
    id: "btb",
    title: "Web Development Team Member",
    org: "Break the Barrier — National Level Hackathon",
    period: "Mar – Aug 2022",
    points: [
      "Built the official website for a national-level hackathon (React + Flask) against a fixed event deadline with a cross-functional team.",
      "Shipped real-time schedule and announcement features that kept hundreds of live participants in sync throughout the event.",
    ],
  },
];

const EDUCATION = [
  {
    id: "ms",
    title: "M.S., Computer Science",
    org: "Indiana University Bloomington · GPA 3.6",
    period: "2023 – 2025",
  },
  {
    id: "be",
    title: "B.E., Computer Engineering",
    org: "LDRP Institute of Technology & Research · GPA 8.8/10",
    period: "2019 – 2023",
  },
];

/* ================================================================ */
/*  REVEAL WRAPPER                                                   */
/* ================================================================ */
function Reveal({ children, className = "" }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add("visible"); },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
    <div ref={ref} className={`animate-in ${className}`}>
      {children}
    </div>
  );
}

/* ================================================================ */
/*  ENTRY / COLUMN COMPONENTS                                        */
/* ================================================================ */
function ExpItem({ item }) {
  return (
    <div className={`exp-item${item.current ? " current" : ""}`}>
      <div className="exp-period">{item.period}</div>
      <h4>{item.title}</h4>
      <div className="exp-org">{item.org}</div>
      <ul className="exp-points">
        {item.points.map((pt, i) => <li key={i}>{pt}</li>)}
      </ul>
      {item.current && <span className="exp-tag">Current</span>}
    </div>
  );
}

/* ================================================================ */
/*  JOURNEY SECTION                                                  */
/* ================================================================ */
function Journey() {
  return (
    <section id="journey" className="section paneled journey-section">
      <div className="section-container">
        <div className="panel tinted">
        <Reveal>
          <div className="section-label">Journey</div>
          <h2 className="section-title">Experience &amp; Leadership</h2>
          <div className="section-rule" />
        </Reveal>

        <Reveal>
          <div className="exp-grid">
            <div id="experience">
              <div className="exp-col-head">
                <span className="dot-key" aria-hidden="true" />
                <h3>Work Experience</h3>
              </div>
              <div className="exp-line">
                {EXPERIENCE.map((item) => <ExpItem key={item.id} item={item} />)}
              </div>
            </div>

            <div id="leadership">
              <div className="exp-col-head lead">
                <span className="dot-key" aria-hidden="true" />
                <h3>Leadership</h3>
              </div>
              <div className="exp-line">
                {LEADERSHIP.map((item) => <ExpItem key={item.id} item={item} />)}
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal className="subgroup" >
          <div id="education">
            <div className="subgroup-head">
              <h3>Education</h3>
            </div>
            <div className="mini-grid">
              {EDUCATION.map((item) => (
                <div className="mini-card" key={item.id}>
                  <div className="mini-period">{item.period}</div>
                  <h4>{item.title}</h4>
                  <div className="mini-org">{item.org}</div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
        </div>
      </div>
    </section>
  );
}

export default Journey;
