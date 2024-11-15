"use client";

import { useEffect, useState } from "react";
import FontCard from "../../components/TitleCard";
import { FontData } from "../../types";
import NumberCard from "@/components/NumberCard";

export default function NumberPage() {
  const [fonts, setFonts] = useState<FontData[]>([]);

  useEffect(() => {
    async function fetchFonts() {
      const response = await fetch(
        "https://websseu.github.io/fontkor/json/fonts_kor.json"
      );
      const data = await response.json();
      setFonts(data.sort(() => Math.random() - 0.5));
    }

    fetchFonts();
  }, []);

  return (
    <main className="pt-16">
      <div className="font-wrap">
        {fonts.map((font, index) => (
          <NumberCard key={index} font={font} />
        ))}
      </div>
    </main>
  );
}
