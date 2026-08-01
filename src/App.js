import React, { useState, useEffect } from "react";
import Pre from "./components/Pre";
import Navbar from "./components/Navbar";
import Hero from "./components/Home/Home";
import About from "./components/About/About";
import Journey from "./components/Timeline/Timeline";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer";
import "./style.css";

function App() {
  const [load, setLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoad(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  /* Highlight whichever panel is sitting in the middle band of the viewport. */
  useEffect(() => {
    const panels = document.querySelectorAll(".panel");
    if (!panels.length || !("IntersectionObserver" in window)) return;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach(({ target, isIntersecting }) =>
          target.classList.toggle("in-view", isIntersecting)
        );
      },
      { rootMargin: "-32% 0px -32% 0px", threshold: 0 }
    );

    panels.forEach((p) => obs.observe(p));
    return () => obs.disconnect();
  }, []);

  return (
    <>
      {/* ── static background grid ── */}
      <div className="bg-grid" aria-hidden="true" />

      {/* ── App shell ── */}
      <Pre load={load} />
      <div className={`site-content${load ? " no-scroll" : ""}`}>
        <Navbar />
        <main>
          <Hero />
          <About />
          <Journey />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
