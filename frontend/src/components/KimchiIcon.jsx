import React from "react";

function KimchiIcon({ className = "size-6", ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      {/* Onggi Jar Lid */}
      <path d="M6 5h12M7 5c0-1.1.9-2 2-2h6c1.1 0 2 .9 2 2" />
      
      {/* Onggi Jar Body (Bulging earthenware pot shape) */}
      <path d="M5 8c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2 0 1.5.5 3 1.5 5.5s1 4.5-1 6.5-4 2-7.5 2-5.5 0-7.5-2-2-4-1-6.5S5 9.5 5 8z" />
      
      {/* Traditional wave patterns representing fermentation / design */}
      <path d="M8 12c2 1 4 1 8 0" />
      <path d="M7 15c2.5 1 5 1 10 0" />
      
      {/* Small fermentation sparkle */}
      <path d="M19.5 3.5v2M18.5 4.5h2" />
      
      {/* Cute little spice/ferment bubble */}
      <circle cx="12" cy="9" r="1" fill="currentColor" />
    </svg>
  );
}

export default KimchiIcon;
