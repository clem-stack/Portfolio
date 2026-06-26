import { useScrollReveal } from "../hooks";
import { OWNER, SKILLS } from "../data";
import SectionLabel from "./SectionLabel";

export default function About({ dark }) {
  const [ref, visible] = useScrollReveal();

  return (
    <section id="about" ref={ref} style={{
      padding: "7rem 2rem",
      maxWidth: "1060px", margin: "0 auto",
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(44px)",
      transition: "opacity 0.75s ease, transform 0.75s ease",
    }}>
      <SectionLabel>About Me</SectionLabel>

      <div className="about-grid" style={{
        display: "grid", gridTemplateColumns: "1fr 1fr",
        gap: "4rem", alignItems: "start",
      }}>

        {/* Bio */}
        <div>
          <h2 style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "clamp(1.75rem, 3.5vw, 2.4rem)", fontWeight: 700,
            letterSpacing: "-0.03em",
            color: dark ? "#F8F9FF" : "#0A0F1E",
            lineHeight: 1.2, marginBottom: "1.25rem",
          }}>
            Crafting digital<br />
            <span style={{ color: "#7C3AED" }}>experiences that scale.</span>
          </h2>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.975rem", lineHeight: 1.85, color: dark ? "#94A3B8" : "#475569", marginBottom: "1rem" }}>
            {OWNER.bio1}
          </p>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.975rem", lineHeight: 1.85, color: dark ? "#94A3B8" : "#475569" }}>
            {OWNER.bio2}
          </p>
        </div>

        {/* Skills */}
        <div>
          <p style={{
            fontFamily: "'Space Grotesk', sans-serif", fontSize: "0.72rem",
            fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase",
            color: "#7C3AED", marginBottom: "1.25rem",
          }}>
            Tech Stack
          </p>
          <div className="skill-grid" style={{
            display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.85rem",
          }}>
            {SKILLS.map((skill, i) => (
              <SkillChip key={skill.name} skill={skill} dark={dark} visible={visible} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function SkillChip({ skill, dark, visible, index }) {
  const floatDelay = index * 0.3;

  return (
    <div style={{
      display: "flex", alignItems: "center", gap: "0.75rem",
      padding: "0.85rem 1rem", borderRadius: "12px",
      border: `1px solid ${dark ? "rgba(124,58,237,0.18)" : "rgba(124,58,237,0.12)"}`,
      backgroundColor: dark ? "rgba(124,58,237,0.06)" : "rgba(124,58,237,0.03)",
      opacity: visible ? 1 : 0,
      animation: visible ? `float 4s ease-in-out ${floatDelay}s infinite` : "none",
      transition: `opacity 0.55s ease ${index * 0.09}s, transform 0.3s, box-shadow 0.3s`,
      cursor: "default",
    }}
      onMouseEnter={(e) => {
        e.currentTarget.style.animation = "none";
        e.currentTarget.style.transform = "scale(1.06)";
        e.currentTarget.style.boxShadow = `0 0 18px rgba(124,58,237,0.3)`;
        e.currentTarget.style.borderColor = "rgba(124,58,237,0.5)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.animation = `float 4s ease-in-out ${floatDelay}s infinite`;
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.boxShadow = "none";
        e.currentTarget.style.borderColor = dark ? "rgba(124,58,237,0.18)" : "rgba(124,58,237,0.12)";
      }}
    >
      {/* Real logo */}
      <img
        src={skill.logoUrl}
        alt={skill.name}
        width={28} height={28}
        style={{ objectFit: "contain", flexShrink: 0 }}
        onError={(e) => { e.target.style.display = "none"; }}
      />
      <span style={{
        fontFamily: "'Inter', sans-serif", fontSize: "0.85rem", fontWeight: 600,
        color: dark ? "#F8F9FF" : "#1E293B", whiteSpace: "nowrap",
      }}>
        {skill.name}
      </span>
    </div>
  );
}
