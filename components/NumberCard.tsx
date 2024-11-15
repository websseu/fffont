import React from "react";
import { FontData } from "../types";

type NumberCardProps = {
  font: FontData;
};

const NumberCard: React.FC<NumberCardProps> = ({ font }) => {
  return (
    <div className="font-card group" style={{ fontFamily: font.title.en }}>
      <p className="text-gray-700">1 2 3 4 5 6 7 8 9 0</p>
      <span className="absolute left-1/2 -translate-x-1/2 bottom-1 text-xs opacity-0 group-hover:opacity-100">
        {font.title.kr}
      </span>
    </div>
  );
};

export default NumberCard;
