import React from "react";

interface ProgramBarProps {
  color: "red" | "green";
  text: string;
}

const colorMap: Record<ProgramBarProps["color"], string> = {
  green: "bg-green-300/90 shadow-[0_0_16px_4px_rgba(34,197,94,0.7)]",
  red: "bg-red-400/90 shadow-[0_0_16px_4px_rgba(239,68,68,0.7)]"
};

const ProgramBar: React.FC<ProgramBarProps> = ({ color, text }) => (
  <div className="w-[50%] sm:w-[40vw] lg:w-[30vw] lg:max-w-[400px] border-1 border-white rounded-2xl py-2 flex justify-between items-center mb-2 md:mb-0">
    <p className="text-white ml-5">{text}</p>
    <div className={`w-4 h-4 mr-3 rounded-full ${colorMap[color]}`}></div>
  </div>
);

export default ProgramBar;
