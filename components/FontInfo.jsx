"use client";

import React, { useContext } from "react";
import { FontInfoContext } from "@/contexts/FontInfoContext";
import { IoMdCloseCircle } from "react-icons/io";

export default function FontInfo() {
  const { selectedFont, hideFontInfo } = useContext(FontInfoContext);

  if (!selectedFont) return null;

  // 텍스트 복사 함수
  const handleCopyToClipboard = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        alert(`"${text}"를 저장했습니다.`);
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
      });
  };

  return (
    <div className="fixed bottom-0 left-0 w-full bg-[#dee4ed] shadow-lg p-4 border-t border-gray-400">
      <div
        className="max-w-screen-xl mx-auto p-4 px-6"
        style={{ fontFamily: selectedFont.title.en }}
      >
        <div className="flex justify-between items-center">
          <h2 className="text-2xl mb-1">
            {selectedFont.title.kr}{" "}
            <span
              className="cursor-pointer"
              onClick={() => handleCopyToClipboard(selectedFont.title.en)} // 복사 이벤트 추가
            >
              <i className="not-italic" title="타이틀 저장하기">
                ({selectedFont.title.en})
              </i>
            </span>
            <span className="pl-3">
              {selectedFont.weight.map((weight, index) => (
                <span key={index} className="text-xs border-black px-1 ml-1">
                  {weight}
                </span>
              ))}
            </span>
          </h2>
        </div>
        <p className="mt-2 mb-4 text-sm">{selectedFont.description}</p>
        <div className="flex gap-2">
          <a
            href={selectedFont.download}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 border border-blue-500 px-2 py-px rounded-sm text-sm hover:text-blue-700"
          >
            Download Font
          </a>
          {/* <link> 복사하기 버튼 */}
          <button
            className="border border-gray-400 px-2 py-px rounded-sm text-sm text-gray-500 hover:text-black hover:border-black"
            onClick={() =>
              handleCopyToClipboard(
                `<link href="https://websseu.github.io/fontkor/fonts/${selectedFont.title.en}.css" rel="stylesheet" />`
              )
            }
          >
            &lt;link&gt; 복사하기
          </button>

          {/* @import 복사하기 버튼 */}
          <button
            className="border border-gray-400 px-2 py-px rounded-sm text-sm text-gray-500 hover:text-black hover:border-black"
            onClick={() =>
              handleCopyToClipboard(
                `@import url("https://websseu.github.io/fontkor/fonts/${selectedFont.title.en}.css");`
              )
            }
          >
            &lt;@import&gt; 복사하기
          </button>
        </div>
      </div>
      <button onClick={hideFontInfo} className="absolute right-3 top-3">
        <IoMdCloseCircle size={20} />
      </button>
    </div>
  );
}
