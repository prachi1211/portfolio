import React, { useEffect, useRef } from "react";
import { AiFillGithub } from "react-icons/ai";
import { FiExternalLink } from "react-icons/fi";

const PROJECTS = [
  {
    title: "Arcova",
    subtitle: "Unified Travel Platform",
    description:
      "Full-stack travel marketplace with role-based dashboards for travelers, hosts, and admins. Delivers hotel & flight search, booking management, dynamic pricing, a streaming AI trip planner via SSE, and secure multi-tenant access enforced by Supabase Auth + Row Level Security.",
    tags: [
      "React",
      "TypeScript",
      "Node.js",
      "Supabase",
      "Tailwind CSS",
      "Claude AI",
      "Vite",
    ],
    github: "https://github.com/prachi1211/arcova-frontend",
    live: "https://witharcova.vercel.app",
    featured: true,
  },
  {
    title: "HomeSync",
    subtitle: "Household Operating System",
    description:
      "Household OS for shared living — unifying grocery management with auto-categorisation, smart chore rotation (fixed, rotating, self-assigned), Splitwise-style expense splitting with receipt photos, and per-member contribution analytics.",
    tags: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "Supabase",
      "PostgreSQL",
    ],
    github: "https://github.com/prachi1211/homesync_frontend",
    live: "https://homesync-frontend-pink.vercel.app/",
    featured: true,
  },
  {
    title: "Course Compass",
    subtitle: "AI Academic Advisor",
    description:
      "AI-powered course selection assistant generating personalised academic plans and career roadmaps with Gemini AI. Achieves 90% recommendation accuracy while validating all prerequisites, credit limits, and schedule conflicts.",
    tags: ["React", "Tailwind CSS", "MongoDB", "Vite", "Gemini API"],
    github: "https://github.com/prachi1211/iu-course-compass-ai",
    live: "https://course-compass-beryl.vercel.app/",
    featured: false,
  },
  {
    title: "VacayBuddy",
    subtitle: "Flight Booking Platform",
    description:
      "Full-stack flight booking and itinerary management platform with intelligent destination recommendations. Surfaces 5 similar places based on search history with Redis-cached suggestions for fast repeat lookups.",
    tags: ["React", "Node.js", "PostgreSQL", "REST API", "Redis"],
    github: "https://github.com/juyee1698/VacayBuddy-backend",
    live: null,
    featured: false,
  },
  {
    title: "Unveiling Cloud Trends",
    subtitle: "YouTube Data Analytics",
    description:
      "Cloud-driven data pipeline analysing YouTube's trending dataset to surface emerging video categories and audience demographics — delivering actionable insights for content creators and businesses via interactive dashboards.",
    tags: ["Python", "AWS", "Cloud", "ETL", "Data Engineering", "Analytics"],
    github: "https://github.com/prachi1211/ECC",
    live: null,
    featured: false,
  },
  {
    title: "Fix Your Resume",
    subtitle: "AI Resume Optimizer",
    description:
      "AI-powered resume optimisation tool using Google Gemini. Upload a resume and job description to receive targeted keyword suggestions, content alignment improvements, and ATS optimisation tips — instantly.",
    tags: ["React", "Gemini API", "Prompt Engineering", "JavaScript"],
    github: "https://github.com/prachi1211/FixYourResume",
    live: null,
    featured: false,
  },
];

function ProjectCard({ project, index }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) el.classList.add("visible");
      },
      { threshold: 0.1 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const delay = `${(index % 2) * 0.1}s`;

  return (
    <article
      ref={ref}
      className={`project-card animate-in${project.featured ? " featured" : ""}`}
      style={{ "--delay": delay }}
    >
      <div className="project-num">
        <span className="project-num-label">
          {String(index + 1).padStart(2, "0")}
        </span>
        <div className="project-links">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="project-link"
              aria-label={`${project.title} GitHub repository`}
            >
              <AiFillGithub />
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="project-link project-link-live"
              aria-label={`${project.title} live demo`}
            >
              <FiExternalLink />
            </a>
          )}
        </div>
      </div>

      <h3 className="project-title">{project.title}</h3>
      <span className="project-subtitle">{project.subtitle}</span>
      <p className="project-description">{project.description}</p>

      <div className="project-divider" aria-hidden="true" />

      <div className="project-tags">
        {project.tags.map((t) => (
          <span key={t} className="tag">
            {t}
          </span>
        ))}
      </div>
    </article>
  );
}

function Projects() {
  return (
    <section id="projects" className="section projects-section">
      <div className="section-container">
        <div className="section-label">Projects</div>
        <h2 className="section-title">Things I've Built</h2>
        <p className="section-subtitle">
          A curated selection of projects — from AI-powered platforms to cloud
          data pipelines.
        </p>

        <div className="projects-grid">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
