import { ImageResponse } from "next/og";

export const dynamic = "force-static";
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
          justifyContent: "center",
          padding: 72,
          background: "linear-gradient(135deg, #FFFBF6 0%, #F0EBFF 55%, #FFE8EE 100%)",
        }}
      >
        <div style={{ fontSize: 28, fontWeight: 800, color: "#7B5CD6" }}>Homework Buddy</div>
        <div style={{ marginTop: 24, fontSize: 64, fontWeight: 900, color: "#24212C", lineHeight: 1.1 }}>
          Printable worksheets for Nursery to Class 3
        </div>
        <div style={{ marginTop: 28, fontSize: 28, fontWeight: 700, color: "#7D7788" }}>
          easyhomeworkactivity.com
        </div>
      </div>
    ),
    { ...size },
  );
}
