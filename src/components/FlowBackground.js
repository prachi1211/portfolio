import { useEffect, useRef } from "react";

/* ================================================================
   FlowBackground — slowly drifting particle nodes with faint
   gradient connection lines. No tails, no fast-moving elements.
   ================================================================ */

const PAL_DARK = [
  [168,  85, 247],   // purple
  [236,  72, 153],   // pink
  [ 45, 212, 191],   // teal
  [ 96, 165, 250],   // blue
];
const PAL_LIGHT = [
  [139,  92, 246],   // violet
  [217,  70, 239],   // fuchsia
  [ 20, 184, 166],   // teal
  [ 99, 102, 241],   // indigo
];

const rand = (lo, hi) => Math.random() * (hi - lo) + lo;

class Particle {
  constructor(w, h) {
    this.x   = rand(0, w);
    this.y   = rand(0, h);
    this.vx  = rand(-0.22, 0.22);
    this.vy  = rand(-0.22, 0.22);
    this.rad = rand(1, 2.2);
    this.ci  = Math.floor(rand(0, 4));
    this.op  = rand(0.38, 0.88);
  }
  update(w, h, mx, my) {
    this.vx += rand(-0.003, 0.003);
    this.vy += rand(-0.003, 0.003);
    const cap = 0.28;
    this.vx = Math.max(-cap, Math.min(cap, this.vx));
    this.vy = Math.max(-cap, Math.min(cap, this.vy));

    if (mx !== null) {
      const dx = this.x - mx, dy = this.y - my;
      const d  = Math.sqrt(dx * dx + dy * dy);
      if (d < 150 && d > 1) {
        this.vx += (dx / d) * 0.012;
        this.vy += (dy / d) * 0.012;
      }
    }

    this.x += this.vx;
    this.y += this.vy;
    if (this.x < -12) this.x = w + 12;
    if (this.x > w + 12) this.x = -12;
    if (this.y < -12) this.y = h + 12;
    if (this.y > h + 12) this.y = -12;
  }
}

function FlowBackground() {
  const cvs = useRef(null);

  useEffect(() => {
    const canvas = cvs.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let w = window.innerWidth, h = window.innerHeight;
    let raf;
    const mouse = { x: null, y: null };

    const NP = w < 600 ? 36 : 62;
    const MD = 124;

    const resize = () => {
      w = window.innerWidth; h = window.innerHeight;
      canvas.width = w; canvas.height = h;
    };
    resize();

    const particles = Array.from({ length: NP }, () => new Particle(w, h));

    const onMove  = (e) => { mouse.x = e.clientX; mouse.y = e.clientY; };
    const onLeave = ()  => { mouse.x = null; mouse.y = null; };

    window.addEventListener("resize",     resize,  { passive: true });
    window.addEventListener("mousemove",  onMove,  { passive: true });
    window.addEventListener("mouseleave", onLeave);

    const frame = () => {
      const dark = document.documentElement.getAttribute("data-theme") !== "light";
      const pal  = dark ? PAL_DARK : PAL_LIGHT;

      ctx.clearRect(0, 0, w, h);

      particles.forEach(p => p.update(w, h, mouse.x, mouse.y));

      /* connection web */
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const d  = Math.sqrt(dx * dx + dy * dy);
          if (d < MD) {
            const a  = (1 - d / MD) * (dark ? 0.12 : 0.075);
            const c1 = pal[particles[i].ci], c2 = pal[particles[j].ci];
            const grd = ctx.createLinearGradient(
              particles[i].x, particles[i].y,
              particles[j].x, particles[j].y
            );
            grd.addColorStop(0, `rgba(${c1[0]},${c1[1]},${c1[2]},${a})`);
            grd.addColorStop(1, `rgba(${c2[0]},${c2[1]},${c2[2]},${a})`);
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = grd;
            ctx.lineWidth = 0.8;
            ctx.stroke();
            ctx.restore();
          }
        }
      }

      /* node dots */
      particles.forEach(p => {
        const [rv, gv, bv] = pal[p.ci];
        const ba = dark ? 0.85 : 0.58;

        const grd = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.rad * 4.5);
        grd.addColorStop(0, `rgba(${rv},${gv},${bv},${p.op * ba})`);
        grd.addColorStop(1, `rgba(${rv},${gv},${bv},0)`);
        ctx.save();
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.rad * 4.5, 0, Math.PI * 2);
        ctx.fillStyle = grd;
        ctx.fill();
        ctx.restore();

        ctx.save();
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.rad, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${rv},${gv},${bv},${p.op * (dark ? 0.9 : 0.65)})`;
        ctx.fill();
        ctx.restore();
      });

      raf = requestAnimationFrame(frame);
    };

    raf = requestAnimationFrame(frame);
    return () => {
      window.removeEventListener("resize",     resize);
      window.removeEventListener("mousemove",  onMove);
      window.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <canvas
      ref={cvs}
      aria-hidden="true"
      style={{
        position: "fixed",
        top: 0, left: 0,
        width: "100%", height: "100%",
        zIndex: 1,
        pointerEvents: "none",
      }}
    />
  );
}

export default FlowBackground;
