import { ImageResponse } from "next/og";

export const alt = "SaaS Verify — find and buy the right software";
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
          background: "#0b1f17",
          color: "white",
          padding: "72px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            fontSize: 32,
            fontWeight: 700,
          }}
        >
          <div
            style={{
              width: 28,
              height: 28,
              borderRadius: 8,
              background: "#12b76a",
            }}
          />
          SaaS Verify
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ fontSize: 68, fontWeight: 700, lineHeight: 1.05, maxWidth: 900 }}>
            Find and buy the right software
          </div>
          <div style={{ fontSize: 30, color: "#b7e4cd", maxWidth: 860 }}>
            Audited vendors, real pricing and onboarding, and buyer protection.
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
