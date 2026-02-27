import { useEffect } from "react";

/**
 * Tracks mouse position and updates two CSS custom properties
 * (--cx, --cy) on <html>. The actual visual glow is rendered
 * purely in CSS inside style.css (.cursor-glow class on a fixed div).
 */
function CursorSpotlight() {
  useEffect(() => {
    const root = document.documentElement;

    const move = (e) => {
      root.style.setProperty("--cx", `${e.clientX}px`);
      root.style.setProperty("--cy", `${e.clientY}px`);
    };

    window.addEventListener("mousemove", move, { passive: true });
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return null; // rendering is done via the div in App.js
}

export default CursorSpotlight;
