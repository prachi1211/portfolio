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
