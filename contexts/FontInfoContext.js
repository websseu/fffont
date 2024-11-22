"use client";

import React, { createContext, useState } from "react";

export const FontInfoContext = createContext();

export const FontInfoProvider = ({ children }) => {
  const [selectedFont, setSelectedFont] = useState(null);

  const showFontInfo = (font) => {
    setSelectedFont(font);
  };

  const hideFontInfo = () => {
    setSelectedFont(null);
  };

  return (
    <FontInfoContext.Provider
      value={{ selectedFont, showFontInfo, hideFontInfo }}
    >
      {children}
    </FontInfoContext.Provider>
  );
};
