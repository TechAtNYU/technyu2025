'use client';
import React from 'react';

// Application status indicator component
export const ApplicationStatus = ({ isOpen, color, className }: { isOpen: boolean; color: "green" | "red" | "blue" | "purple" | "orange"; className?: string }) => {
  const colorMap = {
    green: "bg-green-300/90 shadow-[0_0_16px_4px_rgba(34,197,94,0.7)]",
    red: "bg-red-400/90 shadow-[0_0_16px_4px_rgba(239,68,68,0.7)]",
    blue: "bg-blue-400/90 shadow-[0_0_16px_4px_rgba(59,130,246,0.7)]",
    purple: "bg-purple-400/90 shadow-[0_0_16px_4px_rgba(147,51,234,0.7)]",
    orange: "bg-orange-400/90 shadow-[0_0_16px_4px_rgba(249,115,22,0.7)]",
  };

  return (
    <div className={`border border-white rounded-2xl py-2 px-4 flex justify-between items-center mb-4 ${className ? className : 'w-full'}`}>
      <p className="text-white">{isOpen ? "Applications Open" : "Applications Closed"}</p>
      <div className={`w-4 h-4 rounded-full ${isOpen ? colorMap[color] : colorMap['red']}`}></div>
    </div>
  );
};
