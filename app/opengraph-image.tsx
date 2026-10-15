import { ImageResponse } from "next/og";

export const alt = "Angel Gonzalez — Product-Minded Full-Stack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        position: "relative",
        overflow: "hidden",
        background: "#09090b",
        color: "#f3eee7",
        padding: "64px 70px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          position: "absolute",
          width: 560,
          height: 560,
          right: -160,
          top: 35,
          borderRadius: 999,
          border: "72px solid #ff6846",
          boxShadow: "0 0 120px rgba(255,104,70,.24)",
          transform: "rotate(-18deg)",
        }}
      />
      <div
        style={{
          position: "absolute",
          width: 720,
          height: 240,
          right: -250,
          top: 190,
          borderRadius: "50%",
          border: "2px solid rgba(255,192,177,.28)",
          transform: "rotate(-20deg)",
        }}
      />
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", zIndex: 1 }}>
        <div style={{ display: "flex", fontSize: 24, letterSpacing: 9, textTransform: "uppercase" }}>
          Angel Gonzalez
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <div style={{ display: "flex", maxWidth: 820, fontSize: 76, fontWeight: 800, lineHeight: .9, letterSpacing: -5 }}>
            Product-Minded Full-Stack Developer
          </div>
          <div style={{ display: "flex", marginTop: 22, color: "#ff8a70", fontSize: 22, letterSpacing: 5, textTransform: "uppercase" }}>
            Ideas → working products
          </div>
        </div>
      </div>
    </div>,
    size,
  );
}
