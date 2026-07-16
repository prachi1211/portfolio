import React, { useEffect, useRef } from "react";

/* ================================================================ */
/*  DATA                                                             */
/* ================================================================ */

const EXPERIENCE = [
  {
    id: "yourssafety",
    type: "work",
    current: true,
    title: "Software Engineer",
    org: "Yours Safety App LLC",
    period: "Jun 2026 – Present",
    points: [
      "Building and shipping features for a live personal safety iOS application with 100+ users, using JavaScript, Expo, and Firebase; developing user-facing functionality with full ownership from local development through TestFlight validation to App Store production release.",
      "Integrating Firebase backend services for real-time data sync, authentication flows, and user state management; maintaining reliability and responsiveness for safety-critical features used by real consumers every day.",
    ],
    tags: ["JavaScript", "Expo", "React Native", "Firebase", "iOS"],
  },
  {
    id: "heartland",
    type: "work",
    title: "Senior Consultant – Software Engineer",
    org: "Heartland Community Network",
    period: "Jun 2025 – Jun 2026",
    points: [
      "Led end-to-end development of a full-stack auction platform (React + Node.js), designing REST APIs, PostgreSQL schemas, and role-based dashboards — 40% increase in fundraising outcomes post-MVP.",
      "Designed scalable architecture with documented APIs, ERDs, and system flows, making the platform straightforward to extend and maintain.",
      "Managed sprint cycles and client communication, translating evolving requirements into actionable technical deliverables.",
    ],
    tags: ["React", "Node.js", "TypeScript", "PostgreSQL", "Python"],
  },
  {
    id: "dreamleo",
    type: "work",
    title: "Software Engineer Intern",
    org: "Dream Leo",
    period: "Sept 2022 – Jun 2023",
    points: [
      "Improved SEO and Google PageSpeed scores by resolving React bottlenecks, lazy loading, and eliminating redundant API calls — 35% performance boost.",
      "Redesigned site navigation and layout with UI/UX designers, reducing bounce rate by 15% and increasing average session duration by 10%.",
      "Strengthened backend with Redis caching, optimised SQL queries, and restructured API endpoints — 20% reduction in server response time.",
    ],
    tags: ["React", "Redis", "SQL", "JavaScript", "CI/CD", "Figma", "WordPress"],
  },
  {
    id: "capgemini",
    type: "work",
    title: "Software Engineer (ML) Intern",
    org: "Capgemini",
    period: "Jul 2022 – Aug 2022",
    points: [
      "Automated resume parsing pipeline, cutting manual data-entry from 5 min → 1 min and improving field accuracy by 40% using contour detection and NLP.",
      "Led weekly Agile sprints as Scrum Master for an AI-driven MERN-stack resume analysis platform, improving sprint velocity by 30%.",
      "Engineered a data-extraction pipeline achieving 60% parsing accuracy on complex layouts via HaarCascade, Bounding Box, and Regex-based NER.",
    ],
    tags: ["Python", "MERN Stack", "HaarCascade", "NLP", "Regex", "Jira"],
  },
];

const EDUCATION = [
  {
    id: "ms",
    type: "education",
    title: "M.S. in Computer Science",
    org: "Indiana University Bloomington",
    period: "Aug 2023 – May 2025",
    gpa: "GPA: 3.6 / 4.0",
    points: [],
    tags: ["Distributed Systems", "Machine Learning", "Algorithms", "Cloud Computing", "NLP"],
  },
  {
    id: "be",
    type: "education",
    title: "B.E. in Computer Engineering",
    org: "LDRP Institute of Technology and Research",
    period: "Jul 2019 – Jun 2023",
    gpa: "GPA: 8.8 / 10.0",
    points: [],
    tags: ["Data Structures", "Algorithms", "Web Development", "Machine Learning", "OOP"],
  },
];

const EXTRA = [
  {
    id: "ra",
    type: "extra",
    title: "Research Assistant",
    org: "Kelley School of Business, Indiana University Bloomington",
    period: "Jan 2026 – Jun 2026",
    points: [
      "Processed FEC political donation datasets, performing fuzzy matching of employer names to stock tickers across firm-year observations — handling inconsistent naming conventions (e.g., 'Walmart' vs 'Walmart Co.') using NLP-based similarity techniques.",
      "Consolidated CEO and employee political contribution data into structured firm-year metrics to support quantitative research on corporate political behaviour.",
    ],
    tags: ["Python", "NLP", "Fuzzy Matching", "FEC Data", "Data Engineering", "Research"],
  },
  {
    id: "cewit",
    type: "extra",
    title: "Data Intern → Lead Intern",
    org: "CEWIT – Center of Excellence for Women & Technology, IU",
    period: "Aug 2023 – May 2025",
    points: [
      "Automated Power BI dashboards to track 13K affiliates and 5K event attendees, enabling the marketing and leadership teams to identify trends and make smarter, data-driven decisions.",
      "Led the Women Who Code alliance at IU as Lead Intern — organising workshops, managing interns, and partnering with organisations to promote diversity in tech across 9 months.",
    ],
    tags: ["Power BI", "Data Analytics", "Leadership", "Community Building", "Workshops"],
  },
  {
    id: "btb",
    type: "extra",
    title: "Web Development Team Member",
    org: "Break the Barrier — National Level Hackathon",
    period: "Mar 2022 – Aug 2022",
    points: [
      "Built the official website for a national-level hackathon using React (frontend) and Flask (backend).",
      "Collaborated with a cross-functional team to implement real-time features and ensure a smooth participant experience across the event.",
    ],
    tags: ["React", "Flask", "Python", "JavaScript", "HTML/CSS"],
  },
];

/* ================================================================ */
/*  SINGLE ENTRY COMPONENT                                          */
/* ================================================================ */
function Entry({ item, side }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add("visible"); },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className={`tl-entry ${side} animate-in`}>
      <div className="tl-dot" aria-hidden="true" />
      <div className="tl-card">
        <div className="tl-meta">
          <div className="tl-badges">
            <span className={`tl-badge ${item.type}`}>
              {item.type === "work" ? "Work" : item.type === "education" ? "Education" : "Activity"}
            </span>
            {item.current && <span className="tl-badge current">Current</span>}
          </div>
          <span className="tl-period">{item.period}</span>
        </div>

        <h3 className="tl-title">{item.title}</h3>
        <p className="tl-company">{item.org}</p>
        {item.gpa && <p className="tl-gpa">{item.gpa}</p>}

        {item.points.length > 0 && (
          <ul className="tl-points">
            {item.points.map((pt, i) => <li key={i}>{pt}</li>)}
          </ul>
        )}

        {item.tags.length > 0 && (
          <div className="tl-tags">
            {item.tags.map((t) => <span key={t} className="tag">{t}</span>)}
          </div>
        )}
      </div>
    </div>
  );
}

/* ================================================================ */
/*  REUSABLE BLOCK                                                   */
/* ================================================================ */
function Block({ label, title, subtitle, items, blockClass, id }) {
  const headerRef = useRef(null);

  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add("visible"); },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div id={id} className={`journey-block ${blockClass}`}>
      <div className="journey-block-header animate-in" ref={headerRef}>
        <div className="section-label">{label}</div>
        <h2 className="section-title">{title}</h2>
        {subtitle && <p className="section-subtitle">{subtitle}</p>}
      </div>

      <div className="timeline-wrapper">
        <div className="timeline-spine" aria-hidden="true" />
        {items.map((item, i) => (
          <Entry key={item.id} item={item} side={i % 2 === 0 ? "left" : "right"} />
        ))}
      </div>
    </div>
  );
}

/* ================================================================ */
/*  JOURNEY SECTION                                                  */
/* ================================================================ */
function Journey() {
  return (
    <section id="journey" className="section journey-section">
      <div className="section-container">

        <Block
          id="experience"
          label="Work Experience"
          title="Where I've Worked"
          subtitle="Roles where I've shipped production software and led engineering efforts."
          items={EXPERIENCE}
          blockClass="exp"
        />

        <div className="journey-divider" aria-hidden="true" />

        <Block
          id="education"
          label="Education"
          title="Academic Background"
          subtitle="The foundations behind my engineering thinking."
          items={EDUCATION}
          blockClass="edu"
        />

        <div className="journey-divider" aria-hidden="true" />

        <Block
          id="extracurricular"
          label="Extra Curricular"
          title="Beyond the Desk"
          subtitle="Research, community, and events that have shaped who I am."
          items={EXTRA}
          blockClass="extra"
        />

      </div>
    </section>
  );
}

export default Journey;
