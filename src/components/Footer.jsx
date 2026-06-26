import { OWNER } from "../data";

export default function Footer({ dark }) {
  return (
    <footer style={{
      borderTop: `1px solid ${dark ? "rgba(124,58,237,0.15)" : "rgba(124,58,237,0.1)"}`,
      padding: "2rem",
      textAlign: "center",
      fontFamily: "'Inter', sans-serif",
      fontSize: "0.8rem",
      color: dark ? "#475569" : "#94A3B8",
      position: "relative",
    }}>
      <span style={{ color: "#7C3AED" }}>&lt;</span>
      {" "}Built by {OWNER.name}{" "}
      <span style={{ color: "#7C3AED" }}>/&gt;</span>
      {" "}· © {new Date().getFullYear()}
    </footer>
  );
}
