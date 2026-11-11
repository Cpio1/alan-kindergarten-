import { readFile } from "node:fs/promises";
import path from "node:path";
import { ImageResponse } from "next/og";
import { contacts, site } from "@/data/kindergarten";

export const alt = "«Алан» бөбекжай-балабақшасы — Бақытты балалық шақ мекені";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

async function font(file: string) {
  return readFile(path.join(process.cwd(), "node_modules/@fontsource/nunito/files", file));
}

export default async function OpengraphImage() {
  // Казах әріптері cyrillic-ext жиынында — екі жиынды бірге жүктейміз.
  const [cyr800, ext800, lat800, cyr900, ext900, lat900] = await Promise.all([
    font("nunito-cyrillic-800-normal.woff"),
    font("nunito-cyrillic-ext-800-normal.woff"),
    font("nunito-latin-800-normal.woff"),
    font("nunito-cyrillic-900-normal.woff"),
    font("nunito-cyrillic-ext-900-normal.woff"),
    font("nunito-latin-900-normal.woff"),
  ]);

  const chips = ["6 топ", "1,6–6 жас", "4 мезгіл тамақтану", "Қазақ тілі"];
  const chipColors = ["#5CCBBC", "#FFC857", "#FF9478", "#A9A2EF"];

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          background: "#FFF9F0",
          fontFamily: "Nunito",
          color: "#263640",
          padding: "70px 80px",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <div style={{ position: "absolute", right: -120, top: -140, width: 560, height: 560, borderRadius: 280, background: "#DFF5F1", display: "flex" }} />
        <div style={{ position: "absolute", right: 120, bottom: -90, width: 260, height: 260, borderRadius: 130, background: "#FFF1CF", display: "flex" }} />
        <div style={{ position: "absolute", right: 150, top: 150, width: 240, height: 240, borderRadius: 120, background: "#5CCBBC", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontSize: 140, fontWeight: 900 }}>
          А
        </div>
        <div style={{ display: "flex", fontSize: 30, fontWeight: 800, color: "#C24A2C" }}>{site.tagline}</div>
        <div style={{ display: "flex", flexDirection: "column", marginTop: 18, fontSize: 76, fontWeight: 900, lineHeight: 1.05, maxWidth: 700 }}>
          <span style={{ color: "#137A6D" }}>«Алан»</span>
          <span>бөбекжай-балабақшасы</span>
        </div>
        <div style={{ display: "flex", gap: 14, marginTop: 40 }}>
          {chips.map((c, i) => (
            <div key={c} style={{ display: "flex", padding: "12px 24px", borderRadius: 40, background: "white", border: `4px solid ${chipColors[i]}`, fontSize: 26, fontWeight: 800 }}>
              {c}
            </div>
          ))}
        </div>
        <div style={{ display: "flex", marginTop: 34, fontSize: 28, fontWeight: 800, color: "#4F626D" }}>
          {contacts.address} · {contacts.phoneDisplay}
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Nunito", data: lat800, weight: 800, style: "normal" },
        { name: "Nunito", data: cyr800, weight: 800, style: "normal" },
        { name: "Nunito", data: ext800, weight: 800, style: "normal" },
        { name: "Nunito", data: lat900, weight: 900, style: "normal" },
        { name: "Nunito", data: cyr900, weight: 900, style: "normal" },
        { name: "Nunito", data: ext900, weight: 900, style: "normal" },
      ],
    }
  );
}
