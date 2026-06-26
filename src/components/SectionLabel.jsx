export default function SectionLabel({ children, center }) {
  return (
    <p
      style={{
        fontFamily: "'Space Grotesk', sans-serif",
        fontSize: "0.72rem",
        fontWeight: 700,
        letterSpacing: "0.14em",
        textTransform: "uppercase",
        color: "#7C3AED",
        marginBottom: "0.75rem",
        textAlign: center ? "center" : "left",
      }}
    >
      
      {children}
    </p>
  );
}
