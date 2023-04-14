import React from "react";

const IconCircle = ({ filled = false }) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 17 17"
      xmlns="http://www.w3.org/2000/svg"
      fill={filled ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth={1.2}
    >
      <circle cx="8.0011187" cy="8.0021429" r="3.5429878" />
    </svg>
  );
};

export default IconCircle;
