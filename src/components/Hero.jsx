import { useTypingEffect } from "../hooks";
import { OWNER } from "../data";

/* ── Particle dot ── */
function Particle({ style }) {
  return (
    <div style={{
      position: "absolute", width: "2px", height: "2px",
      borderRadius: "50%", backgroundColor: "#7C3AED",
      animation: `particleFade ${style.dur}s ease-in-out ${style.delay}s infinite`,
      ...style,
    }} />
  );
}

const PARTICLES = Array.from({ length: 28 }, (_, i) => ({
  left:  `${Math.random() * 100}%`,
  top:   `${Math.random() * 100}%`,
  dur:   2 + Math.random() * 3,
  delay: Math.random() * 4,
}));

export default function Hero({ dark }) {
  const typed = useTypingEffect(OWNER.typedPhrases);

  return (
    <section style={{
      minHeight: "100vh", display: "flex", flexDirection: "column",
      alignItems: "center", justifyContent: "center",
      textAlign: "center", padding: "6rem 2rem 4rem",
      position: "relative", overflow: "hidden",
    }}>

      {/* ── Animated grid background ── */}
      <div aria-hidden style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        backgroundImage: dark
          ? "linear-gradient(rgba(124,58,237,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(124,58,237,0.07) 1px, transparent 1px)"
          : "linear-gradient(rgba(124,58,237,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(124,58,237,0.04) 1px, transparent 1px)",
        backgroundSize: "40px 40px",
        animation: "gridDrift 8s linear infinite",
        maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)",
        WebkitMaskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)",
      }} />

      {/* ── Scanline sweep ── */}
      <div aria-hidden style={{
        position: "absolute", left: 0, right: 0, height: "8px",
        background: "linear-gradient(transparent, rgba(124,58,237,0.12), transparent)",
        animation: "scanline 5s linear infinite",
        pointerEvents: "none", zIndex: 1,
      }} />

      {/* ── Radial glow ── */}
      <div aria-hidden style={{
        position: "absolute", top: "50%", left: "50%",
        transform: "translate(-50%, -55%)",
        width: "650px", height: "650px", borderRadius: "50%",
        background: dark
          ? "radial-gradient(circle, rgba(124,58,237,0.22) 0%, transparent 68%)"
          : "radial-gradient(circle, rgba(124,58,237,0.12) 0%, transparent 68%)",
        pointerEvents: "none",
      }} />

      {/* ── Floating particles ── */}
      {PARTICLES.map((p, i) => <Particle key={i} style={p} />)}

      {/* ── Badge ── */}
      {OWNER.available && (
        <div style={{
          display: "inline-flex", alignItems: "center", gap: "0.5rem",
          padding: "0.35rem 1rem", borderRadius: "999px",
          border: `1px solid ${dark ? "rgba(124,58,237,0.45)" : "rgba(124,58,237,0.3)"}`,
          backgroundColor: dark ? "rgba(124,58,237,0.12)" : "rgba(124,58,237,0.07)",
          marginBottom: "1.75rem",
          fontFamily: "'Space Grotesk', sans-serif", fontSize: "0.78rem",
          fontWeight: 600, letterSpacing: "0.1em", color: "#7C3AED",
          textTransform: "uppercase", position: "relative", zIndex: 2,
        }}>
          <span style={{
            width: "7px", height: "7px", borderRadius: "50%",
            backgroundColor: "#22C55E", display: "inline-block",
            boxShadow: "0 0 6px #22C55E",
          }} />
          Available for work
          {/* pulse ring */}
          <span style={{
            position: "absolute", left: "10px", top: "50%",
            transform: "translateY(-50%)",
            width: "7px", height: "7px", borderRadius: "50%",
            border: "1px solid #22C55E",
            animation: "pulseRing 1.8s ease-out infinite",
          }} />
        </div>
      )}

      {/* ── Name ── */}
      <h1 style={{
        fontFamily: "'Space Grotesk', sans-serif",
        fontSize: "clamp(2.6rem, 7.5vw, 5.2rem)", fontWeight: 700,
        letterSpacing: "-0.04em", lineHeight: 1.05,
        color: dark ? "#F8F9FF" : "#0A0F1E",
        marginBottom: "1.25rem", position: "relative", zIndex: 2,
      }}>
        {OWNER.name}
      </h1>

      {/* ── Typewriter ── */}
      <p style={{
        fontFamily: "'Inter', sans-serif",
        fontSize: "clamp(1rem, 2.5vw, 1.35rem)",
        color: dark ? "#94A3B8" : "#64748B",
        minHeight: "2rem", position: "relative", zIndex: 2,
      }}>
        {OWNER.tagline}
        <span style={{ color: "#7C3AED", fontWeight: 600 }}>
          {typed}
          <span aria-hidden style={{
            display: "inline-block", width: "2px", height: "1.1em",
            backgroundColor: "#7C3AED", marginLeft: "2px",
            verticalAlign: "text-bottom",
            animation: "blink 1s step-start infinite",
          }} />
        </span>
      </p>

      {/* ── CTAs ── */}
      <div className="hero-ctas" style={{
        display: "flex", gap: "1rem", marginTop: "2.5rem",
        flexWrap: "wrap", justifyContent: "center",
        position: "relative", zIndex: 2,
      }}>
        <CTAButton href="#projects" variant="primary">View Projects</CTAButton>
        <CTAButton href={OWNER.cvUrl} variant="cv" download>Download CV</CTAButton>
        <CTAButton href="#contact" variant="ghost" dark={dark}>Get in Touch</CTAButton>
      </div>

      {/* ── Scroll hint ── */}
      <div aria-hidden style={{
        position: "absolute", bottom: "2rem", left: "50%",
        transform: "translateX(-50%)",
        display: "flex", flexDirection: "column", alignItems: "center",
        gap: "0.4rem", opacity: 0.38, zIndex: 2,
      }}>
        <span style={{
          fontFamily: "'Inter', sans-serif", fontSize: "0.7rem",
          letterSpacing: "0.12em", textTransform: "uppercase",
          color: dark ? "#94A3B8" : "#64748B",
        }}>scroll</span>
        <div style={{ width: "1px", height: "36px", background: "rgba(124,58,237,0.4)" }} />
      </div>
    </section>
  );
}

function CTAButton({ href, children, variant, dark, download }) {
  const styles = {
    primary: {
      background: "linear-gradient(135deg, #7C3AED, #6366F1)",
      color: "#fff", border: "none",
      boxShadow: "0 0 20px rgba(124,58,237,0.35)",
    },
    cv: {
      background: "transparent",
      color: "#7C3AED",
      border: "1px solid #7C3AED",
      boxShadow: "0 0 12px rgba(124,58,237,0.2)",
    },
    ghost: {
      background: "transparent",
      color: dark ? "#94A3B8" : "#475569",
      border: `1px solid ${dark ? "rgba(148,163,184,0.3)" : "rgba(71,85,105,0.25)"}`,
    },
  };

  return (
    <a href={href} download={download || undefined}
      style={{
        ...styles[variant],
        padding: "0.72rem 1.75rem", borderRadius: "8px",
        fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: "0.9rem",
        textDecoration: "none", display: "inline-block",
        transition: "transform 0.2s, box-shadow 0.2s, color 0.2s, border-color 0.2s",
        cursor: "pointer",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-3px) scale(1.03)";
        if (variant === "primary") e.currentTarget.style.boxShadow = "0 0 32px rgba(124,58,237,0.6)";
        if (variant === "cv")      e.currentTarget.style.boxShadow = "0 0 20px rgba(124,58,237,0.45)";
        if (variant === "ghost")  { e.currentTarget.style.borderColor = "#7C3AED"; e.currentTarget.style.color = "#7C3AED"; }
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0) scale(1)";
        if (variant === "primary") e.currentTarget.style.boxShadow = "0 0 20px rgba(124,58,237,0.35)";
        if (variant === "cv")      e.currentTarget.style.boxShadow = "0 0 12px rgba(124,58,237,0.2)";
        if (variant === "ghost")  {
          e.currentTarget.style.borderColor = dark ? "rgba(148,163,184,0.3)" : "rgba(71,85,105,0.25)";
          e.currentTarget.style.color = dark ? "#94A3B8" : "#475569";
        }
      }}
    >
      {variant === "cv" && <span style={{ marginRight: "0.4rem" }}>↓</span>}
      {children}
    </a>
  );
}
