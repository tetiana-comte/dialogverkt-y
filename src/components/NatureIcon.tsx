import React from 'react';

export default function NatureIcon() {
  return (
    <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center">
      <svg 
        width="20" 
        height="20" 
        viewBox="0 0 20 20" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="text-emerald-600"
      >
        <path 
          d="M10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5Z" 
          stroke="currentColor" 
          strokeWidth="1.5" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
        <path 
          d="M10 6.25V10L12.5 12.5" 
          stroke="currentColor" 
          strokeWidth="1.5" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
        <path 
          d="M10 13.75C11.7259 13.75 13.125 12.3509 13.125 10.625C13.125 8.89911 11.7259 7.5 10 7.5C8.27411 7.5 6.875 8.89911 6.875 10.625C6.875 12.3509 8.27411 13.75 10 13.75Z" 
          stroke="currentColor" 
          strokeWidth="1.5" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}