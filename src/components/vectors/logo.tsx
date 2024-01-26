import React from "react";

const Logo = ({ ...props }) => {
  return (
    <svg
      {...props}
      viewBox="0 0 160 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 200L75 162L32 168L75 0L0 200Z" fill="currentColor" />
      <path d="M160 200L85 162L128 168L85 0L160 200Z" fill="currentColor" />
      <path d="M71 119L80 64L90 119L80 139L71 119Z" fill="currentColor" />
    </svg>
  );
};

export default Logo;
