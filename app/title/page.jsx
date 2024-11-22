"use client";

import React, { useContext } from "react";
import { FontContext } from "@/contexts/FontContext";
import { FontInfoContext } from "@/contexts/FontInfoContext";
import FontInfo from "@/components/FontInfo";

export default function TitlePage() {
  const { fonts, isLoading } = useContext(FontContext);
  const { showFontInfo } = useContext(FontInfoContext);

  if (isLoading) {
    return (
      <div className="flex h-screen items-center justify-center">
        Loading fonts...
      </div>
    );
  }

  return (
    <>
      <section className="mt-8 max-w-screen-xl mx-auto p-4">
        <span className="m-2 text-xs NanumSquareNeo bg-black text-white tracking-tight rounded-full px-3 py-1 mb-3">
          {fonts.length}
        </span>
        <div className="flex flex-wrap gap-3 mt-4">
          {fonts.map((font, index) => (
            <span
              key={index}
              className="text-xl cursor-pointer leading-6 rounded-md hover:bg-black hover:text-white p-2 py-1 transition-all duration-500"
              style={{ fontFamily: font.title.en }}
              onClick={() => showFontInfo(font)}
            >
              {font.title.kr}
            </span>
          ))}
        </div>
      </section>
      <FontInfo />
    </>
  );
}
