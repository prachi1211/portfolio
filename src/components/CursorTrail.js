import { useEffect, useRef } from "react";

/**
 * Two-layer lerp-animated cursor glow.
 *
 * Outer orb (700 × 700 px) — lerp factor 0.055 → lags dreamily behind.
 * Inner orb (260 × 260 px) — lerp factor 0.13  → stays close to cursor.
 *
 * Both use mix-blend-mode: screen on dark theme (lights up whatever's under
 * the cursor) and switch to a softer effect on light theme via CSS class.
 */
function CursorTrail() {
  const outerRef = useRef(null);
  const innerRef = useRef(null);

  useEffect(() => {
    const cx = window.innerWidth  / 2;
    const cy = window.innerHeight / 2;

    const target = { x: cx, y: cy };
    const outer  = { x: cx, y: cy };
    const inner  = { x: cx, y: cy };
    let raf;

    const onMove = (e) => {
      target.x = e.clientX;
      target.y = e.clientY;
    };

    const lerp = (a, b, t) => a + (b - a) * t;

    const tick = () => {
      // Outer: slow, dreamy trail
      outer.x = lerp(outer.x, target.x, 0.055);
      outer.y = lerp(outer.y, target.y, 0.055);

      // Inner: quick, stays near cursor
      inner.x = lerp(inner.x, target.x, 0.14);
      inner.y = lerp(inner.y, target.y, 0.14);

      if (outerRef.current) {
        outerRef.current.style.transform =
          `translate(${outer.x - 350}px, ${outer.y - 350}px)`;
      }
      if (innerRef.current) {
        innerRef.current.style.transform =
          `translate(${inner.x - 130}px, ${inner.y - 130}px)`;
      }

      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div ref={outerRef} className="cursor-trail-outer" aria-hidden="true" />
      <div ref={innerRef} className="cursor-trail-inner" aria-hidden="true" />
    </>
  );
}

export default CursorTrail;
