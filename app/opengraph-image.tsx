import { ImageResponse } from "next/og";

export const alt = "Hosty Argentina — gestión de alquileres temporarios en Buenos Aires";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#041728",
          color: "white",
          padding: "72px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 14,
              background: "#0F4C75",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 32,
            }}
          >
            H
          </div>
          <div style={{ fontSize: 28, letterSpacing: -0.5 }}>Hosty Argentina</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ fontSize: 64, lineHeight: 1.05, maxWidth: 900 }}>
            Gestión de alquileres temporarios en Buenos Aires
          </div>
          <div style={{ fontSize: 28, color: "#F77F00" }}>CABA · Airbnb · operación completa</div>
        </div>
      </div>
    ),
    size
  );
}
