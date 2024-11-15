"use client";

import { useEffect, useState } from "react";
import { FontData } from "../../types";

export default function TitlePage() {
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
    <section className="mt-8 max-w-screen-xl mx-auto p-4">
      <div className="p-2 mb-1">
        <span className="text-xs NanumSquareNeo bg-black text-white tracking-tight w-7 h-7 rounded-full flex items-center justify-center">
          {fonts.length}
        </span>
      </div>

      <div className="flex flex-wrap gap-3">
        {fonts.map((font, index) => (
          <span
            key={index}
            style={{ fontFamily: font.title.en }}
            className="text-xl cursor-pointer leading-6 rounded-md hover:bg-black hover:text-white p-2 py-1 transition-all duration-500"
          >
            {font.title.kr}
          </span>
        ))}
      </div>
    </section>
  );
}
