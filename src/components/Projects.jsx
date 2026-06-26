import { useState } from "react";
import { useScrollReveal } from "../hooks";
import { PROJECTS } from "../data";
import SectionLabel from "./SectionLabel";

export default function Projects({ dark }) {
  const [ref, visible] = useScrollReveal();

  return (
    <section id="projects" style={{
      padding: "7rem 2rem",
      backgroundColor: dark ? "rgba(124,58,237,0.035)" : "rgba(124,58,237,0.02)",
      position: "relative", overflow: "hidden",
    }}>
      {/* Futuristic corner accent lines */}
      <div aria-hidden style={{
        position: "absolute", top: 0, left: 0, right: 0, height: "1px",
        background: "linear-gradient(90deg, transparent, rgba(124,58,237,0.4), transparent)",
      }} />
      <div aria-hidden style={{
        position: "absolute", bottom: 0, left: 0, right: 0, height: "1px",
        background: "linear-gradient(90deg, transparent, rgba(124,58,237,0.4), transparent)",
      }} />

      <div ref={ref} style={{
        maxWidth: "1060px", margin: "0 auto",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(36px)",
        transition: "opacity 0.7s ease, transform 0.7s ease",
      }}>
        <SectionLabel>Projects</SectionLabel>

        <h2 style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: "clamp(1.75rem, 3.5vw, 2.4rem)", fontWeight: 700,
          letterSpacing: "-0.03em",
          color: dark ? "#F8F9FF" : "#0A0F1E",
          marginBottom: "3rem", lineHeight: 1.2,
        }}>
          Things I've built
        </h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(290px, 1fr))",
          gap: "1.75rem",
        }}>
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.id} project={project} dark={dark} index={i} parentVisible={visible} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, dark, index, parentVisible }) {
  const [hovered, setHovered] = useState(false);
  const floatDelay = index * 0.4;

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderRadius: "16px",
        border: `1px solid ${hovered
          ? "rgba(124,58,237,0.6)"
          : dark ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.07)"}`,
        backgroundColor: dark ? "rgba(255,255,255,0.025)" : "#fff",
        overflow: "hidden",
        boxShadow: hovered
          ? "0 0 30px rgba(124,58,237,0.25), 0 16px 48px rgba(0,0,0,0.3)"
          : dark ? "0 2px 16px rgba(0,0,0,0.25)" : "0 2px 12px rgba(0,0,0,0.06)",
        opacity: parentVisible ? 1 : 0,
        /* Float animation, paused on hover */
        animation: parentVisible && !hovered
          ? `float 4.5s ease-in-out ${floatDelay}s infinite`
          : "none",
        transform: hovered ? "scale(1.025) translateY(-4px)" : "scale(1)",
        transition: `border-color 0.3s, box-shadow 0.3s, transform 0.3s,
                     opacity 0.65s ease ${index * 0.13}s`,
      }}
    >
      {/* Preview image */}
      <div style={{ position: "relative", overflow: "hidden", height: "185px" }}>
        <img
          src={project.previewImg}
          alt={`${project.title} preview`}
          style={{
            width: "100%", height: "100%", objectFit: "cover", display: "block",
            filter: hovered ? "brightness(1.05)" : "brightness(0.9)",
            transition: "filter 0.4s, transform 0.4s",
            transform: hovered ? "scale(1.04)" : "scale(1)",
          }}
        />
        {/* Glowing overlay on hover */}
        <div style={{
          position: "absolute", inset: 0,
          background: hovered
            ? "linear-gradient(180deg, transparent 50%, rgba(124,58,237,0.18) 100%)"
            : "linear-gradient(180deg, transparent 60%, rgba(0,0,0,0.3) 100%)",
          transition: "background 0.4s",
        }} />
        {/* Corner HUD bracket */}
        {hovered && <>
          <span aria-hidden style={{ position:"absolute", top:8, left:8, width:14, height:14,
            borderTop:"2px solid #7C3AED", borderLeft:"2px solid #7C3AED" }} />
          <span aria-hidden style={{ position:"absolute", top:8, right:8, width:14, height:14,
            borderTop:"2px solid #7C3AED", borderRight:"2px solid #7C3AED" }} />
          <span aria-hidden style={{ position:"absolute", bottom:8, left:8, width:14, height:14,
            borderBottom:"2px solid #7C3AED", borderLeft:"2px solid #7C3AED" }} />
          <span aria-hidden style={{ position:"absolute", bottom:8, right:8, width:14, height:14,
            borderBottom:"2px solid #7C3AED", borderRight:"2px solid #7C3AED" }} />
        </>}
      </div>

      {/* Content */}
      <div style={{ padding: "1.5rem" }}>
        <h3 style={{
          fontFamily: "'Space Grotesk', sans-serif", fontSize: "1.15rem", fontWeight: 700,
          color: dark ? "#F8F9FF" : "#0A0F1E", marginBottom: "0.5rem",
          letterSpacing: "-0.02em",
        }}>
          {project.title}
        </h3>
        <p style={{
          fontFamily: "'Inter', sans-serif", fontSize: "0.875rem", lineHeight: 1.72,
          color: dark ? "#94A3B8" : "#475569", marginBottom: "1.25rem",
        }}>
          {project.description}
        </p>

        {/* Tags */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginBottom: "1.4rem" }}>
          {project.tags.map((tag) => (
            <span key={tag} style={{
              padding: "0.2rem 0.65rem", borderRadius: "999px",
              fontSize: "0.72rem", fontWeight: 600, fontFamily: "'Inter', sans-serif",
              backgroundColor: dark ? "rgba(124,58,237,0.18)" : "rgba(124,58,237,0.09)",
              color: "#7C3AED", letterSpacing: "0.02em",
            }}>
              {tag}
            </span>
          ))}
        </div>

        {/* Two links */}
        <div style={{ display: "flex", gap: "0.75rem" }}>
          <ProjectLink href={project.githubUrl} label="GitHub" icon="github" dark={dark} />
          <ProjectLink href={project.liveUrl} label="Live Site" icon="live" dark={dark} primary />
        </div>
      </div>
    </div>
  );
}

function ProjectLink({ href, label, icon, dark, primary }) {
  const [hovered, setHovered] = useState(false);

  const base = primary
    ? {
        background: hovered ? "linear-gradient(135deg,#7C3AED,#6366F1)" : "transparent",
        color: hovered ? "#fff" : "#7C3AED",
        border: "1px solid #7C3AED",
        boxShadow: hovered ? "0 0 16px rgba(124,58,237,0.4)" : "none",
      }
    : {
        background: "transparent",
        color: dark ? (hovered ? "#F8F9FF" : "#94A3B8") : (hovered ? "#0A0F1E" : "#475569"),
        border: `1px solid ${dark ? "rgba(255,255,255,0.12)" : "rgba(0,0,0,0.1)"}`,
      };

  const iconSvg = {
    github: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
      </svg>
    ),
    live: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
        <polyline points="15 3 21 3 21 9"/>
        <line x1="10" y1="14" x2="21" y2="3"/>
      </svg>
    ),
  };

  return (
    <a href={href} target="_blank" rel="noopener noreferrer"
      style={{
        ...base,
        display: "inline-flex", alignItems: "center", gap: "0.4rem",
        padding: "0.45rem 0.9rem", borderRadius: "7px",
        fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: "0.8rem",
        textDecoration: "none", transition: "all 0.25s", cursor: "pointer",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {iconSvg[icon]}
      {label}
    </a>
  );
}
