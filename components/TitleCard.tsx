import React from "react";
import { FontData } from "../types";

type TitleCardProps = {
  font: FontData;
};

const TitleCard: React.FC<TitleCardProps> = ({ font }) => {
  return (
    <div className="font-card group" style={{ fontFamily: font.title.en }}>
      <h3 className="text-gray-700">{font.title.kr}</h3>
    </div>
  );
};

export default TitleCard;
