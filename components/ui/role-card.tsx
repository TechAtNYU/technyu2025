'use client'
import React from 'react'
import { ApplicationStatus } from './ApplicationStatus';

export interface RoleCardProps {
  title: string;
  description: string;
  benefits: string[];
  buttonText: string;
  color: "green" | "red" | "blue" | "purple" | "orange";
  applicationsOpen: boolean;
  onApply?: () => void;
}

const RoleCard: React.FC<RoleCardProps> = ({
  title,
  description,
  benefits,
  buttonText,
  color,
  applicationsOpen,
  onApply
}) => {
  const colorMap = {
    red: {
      accent: "bg-red-500",
      dot: "bg-red-500",
      buttonOpen: "bg-red-600 hover:bg-red-700",
      buttonClosed: "bg-gray-600 cursor-not-allowed"
    },
    green: {
      accent: "bg-green-700/90",
      dot: "bg-green-100 shadow-[0_0_12px_4px_rgba(34,197,94,0.7)]", 
      buttonOpen: "bg-green-600 hover:bg-green-700",
      buttonClosed: "bg-gray-600 cursor-not-allowed"
    },
    blue: {
      accent: "bg-blue-500",
      dot: "bg-blue-100 shadow-[0_0_12px_4px_rgba(59,130,246,0.7)]",
      buttonOpen: "bg-blue-600 hover:bg-blue-700",
      buttonClosed: "bg-gray-600 cursor-not-allowed"
    },
    purple: {
      accent: "bg-purple-500",
      dot: "bg-purple-100 shadow-[0_0_12px_4px_rgba(147,51,234,0.7)]",
      buttonOpen: "bg-purple-600 hover:bg-purple-700",
      buttonClosed: "bg-gray-600 cursor-not-allowed"
    },
    orange: {
      accent: "bg-orange-500",
      dot: "bg-orange-100 shadow-[0_0_12px_4px_rgba(249,115,22,0.7)]",
      buttonOpen: "bg-orange-600 hover:bg-orange-700",
      buttonClosed: "bg-gray-600 cursor-not-allowed"
    }
  };

  const handleClick = () => {
    if (applicationsOpen && onApply) {
      onApply();
    }
  };

  return (
    <div className='font-satoshi p-6 outline-2' style={{ boxShadow: 'inset 0px 0px 100px rgba(179, 0, 255, 0.4)' }}>
      <div className='mb-6'>
        <h3 className='text-white text-2xl lg:text-3xl font-bold mb-4'>{title}</h3>
        <div className={`w-16 h-1 ${colorMap[color].accent} rounded shadow-[0_0_16px_4px_rgba(34,197,94,0.7)]`}></div>
      </div>
      
      <div className='space-y-4 text-gray-300 pb-10'>
        <p className='text-lg'>{description}</p>
        
        <div className='space-y-3'>
          {benefits.map((benefit, index) => (
            <div key={index} className='flex items-start gap-3'>
              <div className={`w-2 h-2 ${colorMap[color].dot} rounded-full mt-2 flex-shrink-0`}></div>
              <p>{benefit}</p>
            </div>
          ))}
        </div>
      </div>
      
      <ApplicationStatus isOpen={applicationsOpen} color={applicationsOpen ? "green" : "red"} />
      
      <div className='mt-4'>
        {applicationsOpen ? (
          <button 
            className={`${colorMap[color].buttonOpen} text-white px-6 py-3 rounded-lg font-semibold transition-colors`}
            onClick={handleClick}
          >
            {buttonText}
          </button>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default RoleCard;
