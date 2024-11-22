"use client";

import React, { useContext, useEffect, useState } from "react";
import { FontContext } from "@/contexts/FontContext";
import FontInfo from "@/components/FontInfo";
import { FontInfoContext } from "@/contexts/FontInfoContext";

export default function ParagraphPage() {
  const { fonts, isLoading } = useContext(FontContext);
  const { showFontInfo } = useContext(FontInfoContext);
  const [quotes, setQuotes] = useState([]);

  // JSON 파일 로드
  useEffect(() => {
    const fetchQuotes = async () => {
      try {
        const response = await fetch("/json/money_quotes.json");
        const data = await response.json();
        setQuotes(data);
      } catch (error) {
        console.error("Failed to load quotes:", error);
      }
    };

    fetchQuotes();
  }, []);

  if (isLoading || quotes.length === 0) {
    return (
      <div className="flex h-screen items-center justify-center">
        Loading fonts...
      </div>
    );
  }

  return (
    <>
      <section className="mt-8 max-w-screen-xl mx-auto p-4">
        <span className="text-xs NanumSquareNeo bg-black text-white tracking-tight rounded-full px-3 py-1">
          {fonts.length}
        </span>

        <div className="w-full flex flex-wrap border-b border-gray-300 mt-3">
          {fonts.map((font, index) => {
            const quote = quotes[index % quotes.length]; // 글과 작가 정보 가져오기

            return (
              <div
                key={index}
                className="w-full flex items-center border-b border-gray-300 px-4 py-3 pt-3.5 cursor-pointer hover:bg-slate-300 group"
                onClick={() => showFontInfo(font)}
              >
                <span className="w-8 text-xs text-gray-500">{index + 1}</span>
                <div className="flex-grow relative">
                  <p
                    className="w-full"
                    style={{
                      fontFamily: font.title.en,
                    }}
                  >
                    {quote?.quote || "내용 없음"}
                    <span className="absolute right-0 top-1/2 text-xs text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      - {quote?.author || "작가 미상"}
                    </span>
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <FontInfo />
    </>
  );
}
