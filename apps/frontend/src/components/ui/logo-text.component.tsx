import React from 'react';

export const LogoTextComponent = () => {
  return (
    <svg
      width="188"
      height="48"
      viewBox="0 0 188 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <radialGradient id="pp-lt-planet" cx="36%" cy="30%" r="65%">
          <stop offset="0%" stopColor="#93C5FD" />
          <stop offset="48%" stopColor="#2563EB" />
          <stop offset="100%" stopColor="#1E3A8A" />
        </radialGradient>
        <linearGradient id="pp-lt-ring" x1="1" y1="30" x2="36" y2="30" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#818CF8" />
          <stop offset="100%" stopColor="#38BDF8" />
        </linearGradient>
        <clipPath id="pp-lt-clip">
          <rect x="0" y="29" width="48" height="19" />
        </clipPath>
      </defs>

      {/* Back ring */}
      <ellipse
        cx="18" cy="30" rx="17.5" ry="6"
        stroke="url(#pp-lt-ring)" strokeWidth="3.2" opacity="0.4"
        transform="rotate(-18 18 30)"
      />

      {/* Planet */}
      <circle cx="18" cy="30" r="13" fill="url(#pp-lt-planet)" />

      {/* Planet sheen */}
      <ellipse cx="14" cy="26" rx="5" ry="3" fill="white" opacity="0.18" transform="rotate(-20 14 26)" />

      {/* Front ring */}
      <ellipse
        cx="18" cy="30" rx="17.5" ry="6"
        stroke="url(#pp-lt-ring)" strokeWidth="3.2"
        clipPath="url(#pp-lt-clip)"
        transform="rotate(-18 18 30)"
      />

      {/* Speech bubble */}
      <path
        d="M28,3 L42,3 Q46,3 46,7 L46,16 Q46,20 42,20 L35,20 L30,26 L29,20 L28,20 Q24,20 24,16 L24,7 Q24,3 28,3 Z"
        fill="white"
        stroke="#60A5FA"
        strokeWidth="1.6"
      />

      {/* Typing dots */}
      <circle cx="30" cy="11.5" r="1.8" fill="#2563EB" />
      <circle cx="35" cy="11.5" r="1.8" fill="#2563EB" />
      <circle cx="40" cy="11.5" r="1.8" fill="#2563EB" />

      {/* Wordmark */}
      <text
        x="54"
        y="34"
        fontFamily="Inter, system-ui, -apple-system, sans-serif"
        fontWeight="800"
        fontSize="23"
        letterSpacing="-0.5"
      >
        <tspan fill="currentColor">Planet</tspan>
        <tspan fill="#2563EB">Post</tspan>
      </text>
    </svg>
  );
};
