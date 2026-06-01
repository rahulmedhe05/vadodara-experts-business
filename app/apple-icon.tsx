import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 180,
          height: 180,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)",
          clipPath: "polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%)",
        }}
      >
        <span
          style={{
            fontSize: 68,
            fontWeight: 900,
            color: "#ffffff",
            fontFamily: "Arial Black, Arial, sans-serif",
            letterSpacing: -3,
            lineHeight: 1,
          }}
        >
          VE
        </span>
      </div>
    ),
    { ...size }
  );
}
