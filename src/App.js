import React, { useState, useEffect } from "react";
import Pre from "./components/Pre";
import Navbar from "./components/Navbar";
import Hero from "./components/Home/Home";
import About from "./components/About/About";
import Journey from "./components/Timeline/Timeline";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer";
import CursorTrail from "./components/CursorTrail";
import FlowBackground from "./components/FlowBackground";
import "./style.css";

function App() {
  const [load, setLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoad(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* ── z-index 0: aurora gradient (body::before) + dot grid + orbs ── */}
      <div className="bg-grid" aria-hidden="true" />
      <div className="bg-orbs" aria-hidden="true">
        <div className="bg-orb bg-orb-1" />
        <div className="bg-orb bg-orb-2" />
        <div className="bg-orb bg-orb-3" />
      </div>

      {/* ── z-index 1: particle network + energy pulses ── */}
      <FlowBackground />

      {/* ── z-index 4: grain texture ── */}
      <div className="grain-overlay" aria-hidden="true" />

      {/* ── z-index 9998/9999: cursor trail ── */}
      <CursorTrail />

      {/* ── App shell (z-index 3) ── */}
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
