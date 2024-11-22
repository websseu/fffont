"use client";

import React, { createContext, useEffect, useState } from "react";

export const FontContext = createContext();

export const FontProvider = ({ children }) => {
  const [fonts, setFonts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchFonts = async () => {
      try {
        const response = await fetch(
          "https://websseu.github.io/fffont/fffont.json"
        );
        const data = await response.json();
        setFonts(data);
      } catch (error) {
        console.error("Error fetching fonts:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchFonts();
  }, []);

  return (
    <FontContext.Provider value={{ fonts, isLoading }}>
      {children}
    </FontContext.Provider>
  );
};
