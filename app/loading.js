export default function Loading() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#050508",
        flexDirection: "column",
        gap: "1.25rem",
      }}
    >
      <div
        aria-hidden
        style={{
          width: 48,
          height: 48,
          borderRadius: "50%",
          border: "2px solid rgba(255,255,255,0.12)",
          borderTopColor: "#22d3ee",
          animation: "jvspin 0.85s linear infinite",
        }}
      />
      <p style={{ color: "#a1a1aa", fontSize: "0.875rem", letterSpacing: "0.2em" }}>
        JV Eletrônicos
      </p>
      <style>{`
        @keyframes jvspin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
