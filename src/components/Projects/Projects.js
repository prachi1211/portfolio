import React, { useState } from "react";
import { AiFillGithub } from "react-icons/ai";
import { FiExternalLink } from "react-icons/fi";

const PROJECTS = [
  {
    title: "Arcova",
    subtitle: "Unified Travel Platform",
    description:
      "Full-stack travel marketplace with role-based dashboards for travelers, hosts, and admins. Delivers hotel & flight search, booking management, dynamic pricing, a streaming AI trip planner via SSE, and secure multi-tenant access enforced by Supabase Auth + Row Level Security.",
    tags: ["React", "TypeScript", "Node.js", "Supabase", "Claude AI"],
    github: "https://github.com/prachi1211/arcova-frontend",
    live: "https://witharcova.vercel.app",
    media: "m1",
    initials: "Ar",
  },
  {
    title: "HomeSync",
    subtitle: "Household Operating System",
    description:
      "Household OS for shared living — unifying grocery management with auto-categorisation, smart chore rotation (fixed, rotating, self-assigned), Splitwise-style expense splitting with receipt photos, and per-member contribution analytics.",
    tags: ["React", "TypeScript", "Node.js", "Express", "PostgreSQL"],
    github: "https://github.com/prachi1211/homesync_frontend",
    live: "https://homesync-frontend-pink.vercel.app/",
    media: "m2",
    initials: "Hs",
  },
  {
    title: "Course Compass",
    subtitle: "AI Academic Advisor",
    description:
      "AI-powered course selection assistant generating personalised academic plans and career roadmaps with Gemini AI. Achieves 90% recommendation accuracy while validating all prerequisites, credit limits, and schedule conflicts.",
    tags: ["React", "Tailwind CSS", "MongoDB", "Gemini API"],
    github: "https://github.com/prachi1211/iu-course-compass-ai",
    live: "https://course-compass-beryl.vercel.app/",
    media: "m3",
    initials: "Cc",
  },
  {
    title: "VacayBuddy",
    subtitle: "Flight Booking Platform",
    description:
      "Full-stack flight booking and itinerary management platform with intelligent destination recommendations. Surfaces 5 similar places based on search history with Redis-cached suggestions for fast repeat lookups.",
    tags: ["React", "Node.js", "PostgreSQL", "Redis"],
    github: "https://github.com/juyee1698/VacayBuddy-backend",
    live: null,
    media: "m4",
    initials: "Vb",
  },
  {
    title: "Unveiling Cloud Trends",
    subtitle: "YouTube Data Analytics",
    description:
      "Cloud-driven data pipeline analysing YouTube's trending dataset to surface emerging video categories and audience demographics — delivering actionable insights for content creators and businesses via interactive dashboards.",
    tags: ["Python", "AWS", "ETL", "Analytics"],
    github: "https://github.com/prachi1211/ECC",
    live: null,
    media: "m5",
    initials: "Ct",
  },
  {
    title: "Fix Your Resume",
    subtitle: "AI Resume Optimizer",
    description:
      "AI-powered resume optimisation tool using Google Gemini. Upload a resume and job description to receive targeted keyword suggestions, content alignment improvements, and ATS optimisation tips — instantly.",
    tags: ["React", "Gemini API", "Prompt Engineering"],
    github: "https://github.com/prachi1211/FixYourResume",
    live: null,
    media: "m6",
    initials: "Fr",
  },
];

const VISIBLE_COUNT = 3;

function ProjectRow({ project }) {
  return (
    <div className="proj-row">
      <div className={`proj-media ${project.media}`}>
        <span>{project.initials}</span>
      </div>
      <div className="proj-info">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="proj-tags">
          {project.tags.map((t) => <span key={t} className="tag">{t}</span>)}
        </div>
        <div className="proj-links">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="social-icon-link"
            aria-label={`${project.title} GitHub repository`}
          >
            <AiFillGithub />
          </a>
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="social-icon-link"
              aria-label={`${project.title} live demo`}
            >
              <FiExternalLink />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

function Projects() {
  const [showMore, setShowMore] = useState(false);
  const primary = PROJECTS.slice(0, VISIBLE_COUNT);
  const rest = PROJECTS.slice(VISIBLE_COUNT);

  return (
    <section id="projects" className="section paneled projects-section">
      <div className="section-container">
        <div className="panel">
        <div className="section-label">Selected Work</div>
        <h2 className="section-title">Projects</h2>
        <div className="section-rule" style={{ marginBottom: 40 }} />

        <div style={{ marginTop: 16 }}>
          {primary.map((p) => <ProjectRow key={p.title} project={p} />)}

          <div id="moreProjects" className={showMore ? "show" : ""}>
            {rest.map((p) => <ProjectRow key={p.title} project={p} />)}
          </div>

          {!showMore && rest.length > 0 && (
            <div className="load-more-wrap">
              <button className="btn btn-ghost btn-pill" onClick={() => setShowMore(true)}>
                Load More Projects
              </button>
            </div>
          )}
        </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
