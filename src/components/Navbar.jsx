import { useState, useEffect } from "react";

const NAV_LINKS = ["About", "Projects", "Contact"];

export default function Navbar({ dark, toggleDark }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const bg = scrolled
    ? dark ? "rgba(10,15,30,0.92)" : "rgba(248,249,255,0.92)"
    : "transparent";

  const borderColor = scrolled
    ? dark ? "rgba(124,58,237,0.25)" : "rgba(124,58,237,0.15)"
    : "transparent";

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      padding: "0 2.5rem", height: "64px",
      display: "flex", alignItems: "center", justifyContent: "space-between",
      backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)",
      backgroundColor: bg,
      borderBottom: `1px solid ${borderColor}`,
      transition: "background 0.35s, border-color 0.35s",
    }}>
      {/* Logo */}
      <a href="/" style={{ textDecoration: "none" }}>
        <span style={{
          fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700,
          fontSize: "1.15rem", letterSpacing: "-0.02em",
          color: dark ? "#F8F9FF" : "#0A0F1E", userSelect: "none",
        }}>
          <span style={{ color: "#7C3AED" }}>&lt;</span>
          Clem
          <span style={{ color: "#7C3AED" }}>/&gt;</span>
        </span>
      </a>

      {/* Right side */}
      <div className="nav-links" style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
        {NAV_LINKS.map((label) => (
          <NavLink key={label} href={`#${label.toLowerCase()}`} dark={dark}>{label}</NavLink>
        ))}
        <DarkToggle dark={dark} onClick={toggleDark} />
      </div>
    </nav>
  );
}

function NavLink({ href, dark, children }) {
  const base = dark ? "#94A3B8" : "#475569";
  return (
    <a href={href} className="nav-link-text" style={{
      fontFamily: "'Inter', sans-serif", fontSize: "0.875rem", fontWeight: 500,
      letterSpacing: "0.03em", textDecoration: "none", color: base,
      transition: "color 0.2s",
    }}
      onMouseEnter={(e) => (e.currentTarget.style.color = "#7C3AED")}
      onMouseLeave={(e) => (e.currentTarget.style.color = base)}
    >{children}</a>
  );
}

function DarkToggle({ dark, onClick }) {
  return (
    <button onClick={onClick}
      title={dark ? "Light mode" : "Dark mode"}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      style={{
        position: "relative", width: "48px", height: "26px", borderRadius: "13px",
        border: "none", cursor: "pointer",
        backgroundColor: dark ? "#7C3AED" : "#CBD5E1",
        transition: "background-color 0.3s", flexShrink: 0, outline: "none",
      }}
    >
      <span style={{
        position: "absolute", top: "3px", left: dark ? "25px" : "3px",
        width: "20px", height: "20px", borderRadius: "50%",
        backgroundColor: "#fff", transition: "left 0.3s",
        display: "flex", alignItems: "center", justifyContent: "center",
        fontSize: "11px", pointerEvents: "none",
      }}>
        {dark ? "🌙" : "☀️"}
      </span>
    </button>
  );
}
