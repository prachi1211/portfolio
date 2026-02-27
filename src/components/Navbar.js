import React, { useState, useEffect, useCallback, useRef } from "react";
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineFundProjectionScreen,
  AiOutlineMail,
} from "react-icons/ai";
import { MdOutlineTimeline } from "react-icons/md";
import { BsSun, BsMoon } from "react-icons/bs";

const NAV_ITEMS = [
  { id: "hero",     label: "Home",     Icon: AiOutlineHome },
  { id: "about",    label: "About",    Icon: AiOutlineUser },
  { id: "journey",  label: "Journey",  Icon: MdOutlineTimeline,
    sub: [
      { id: "experience",     label: "Experience" },
      { id: "education",      label: "Education" },
      { id: "extracurricular",label: "Extra Curricular" },
    ]
  },
  { id: "projects", label: "Projects", Icon: AiOutlineFundProjectionScreen },
  { id: "contact",  label: "Contact",  Icon: AiOutlineMail },
];

/* IDs tracked by IntersectionObserver for active highlighting */
const ALL_SECTION_IDS = ["hero", "about", "journey", "projects", "contact"];

function Navbar() {
  const [scrolled,  setScrolled]  = useState(false);
  const [active,    setActive]    = useState("hero");
  const [menuOpen,  setMenuOpen]  = useState(false);
  const [journeyOpen, setJourneyOpen] = useState(false);
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "dark");
  const dropdownRef = useRef(null);

  /* Apply + persist theme */
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((t) => (t === "dark" ? "light" : "dark"));
  }, []);

  /* Glass effect on scroll */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Active section tracking */
  useEffect(() => {
    const observers = ALL_SECTION_IDS.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id); },
        { rootMargin: "-45% 0px -45% 0px" }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  /* Close Journey dropdown when clicking outside */
  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setJourneyOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const scrollTo = useCallback((id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
    setJourneyOpen(false);
  }, []);

  return (
    <nav className={`navbar-custom${scrolled ? " scrolled" : ""}`}>
      <div className="navbar-container">
        {/* Logo */}
        <button
          className="navbar-logo"
          onClick={() => scrollTo("hero")}
          aria-label="Back to top"
        >
          PJ.
        </button>

        {/* Desktop links */}
        <ul className="navbar-links">
          {NAV_ITEMS.map(({ id, label, sub }) => (
            <li key={id} style={{ position: "relative" }} ref={id === "journey" ? dropdownRef : null}>
              {sub ? (
                <>
                  <button
                    className={`nav-link${active === id ? " active" : ""}`}
                    onClick={() => { scrollTo(id); setJourneyOpen((o) => !o); }}
                    onMouseEnter={() => setJourneyOpen(true)}
                  >
                    {label}
                    <span style={{ marginLeft: 4, fontSize: "0.65rem", opacity: 0.6 }}>▾</span>
                  </button>
                  {journeyOpen && (
                    <div className="nav-dropdown" onMouseLeave={() => setJourneyOpen(false)}>
                      {sub.map((s) => (
                        <button
                          key={s.id}
                          className="nav-dropdown-item"
                          onClick={() => scrollTo(s.id)}
                        >
                          {s.label}
                        </button>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <button
                  className={`nav-link${active === id ? " active" : ""}`}
                  onClick={() => scrollTo(id)}
                >
                  {label}
                </button>
              )}
            </li>
          ))}
        </ul>

        {/* Theme toggle */}
        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
        >
          {theme === "dark" ? <BsSun size={18} /> : <BsMoon size={18} />}
        </button>

        {/* Hamburger */}
        <button
          className="hamburger"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile dropdown */}
      <div className={`mobile-menu${menuOpen ? " open" : ""}`}>
        {NAV_ITEMS.map(({ id, label, Icon, sub }) => (
          <React.Fragment key={id}>
            <button
              className={`mobile-nav-link${active === id ? " active" : ""}`}
              onClick={() => scrollTo(id)}
            >
              <Icon size={16} />
              {label}
            </button>
            {sub && sub.map((s) => (
              <button
                key={s.id}
                className="mobile-nav-link mobile-nav-sub"
                onClick={() => scrollTo(s.id)}
              >
                <span style={{ marginLeft: 8, fontSize: "0.7rem", color: "var(--purple)" }}>↳</span>
                {s.label}
              </button>
            ))}
          </React.Fragment>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;
