'use client';

export const Logo = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="60"
      height="60"
      viewBox="0 0 60 60"
      fill="none"
      className="mt-[8px] min-w-[60px] min-h-[60px]"
    >
      <defs>
        <radialGradient id="pp-logo-planet" cx="36%" cy="30%" r="65%">
          <stop offset="0%" stopColor="#93C5FD" />
          <stop offset="48%" stopColor="#2563EB" />
          <stop offset="100%" stopColor="#1E3A8A" />
        </radialGradient>
        <linearGradient id="pp-logo-ring" x1="1" y1="38" x2="45" y2="38" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#818CF8" />
          <stop offset="100%" stopColor="#38BDF8" />
        </linearGradient>
        <clipPath id="pp-logo-clip">
          <rect x="0" y="37" width="60" height="23" />
        </clipPath>
      </defs>

      {/* Back ring */}
      <ellipse
        cx="23" cy="38" rx="22" ry="7.5"
        stroke="url(#pp-logo-ring)" strokeWidth="4" opacity="0.4"
        transform="rotate(-18 23 38)"
      />

      {/* Planet */}
      <circle cx="23" cy="38" r="16" fill="url(#pp-logo-planet)" />

      {/* Planet sheen */}
      <ellipse cx="17" cy="32" rx="6.5" ry="4" fill="white" opacity="0.18" transform="rotate(-20 17 32)" />

      {/* Front ring */}
      <ellipse
        cx="23" cy="38" rx="22" ry="7.5"
        stroke="url(#pp-logo-ring)" strokeWidth="4"
        clipPath="url(#pp-logo-clip)"
        transform="rotate(-18 23 38)"
      />

      {/* Speech bubble */}
      <path
        d="M35,4 L52,4 Q57,4 57,9 L57,20 Q57,25 52,25 L44,25 L38,32 L37,25 L35,25 Q30,25 30,20 L30,9 Q30,4 35,4 Z"
        fill="white"
        stroke="#60A5FA"
        strokeWidth="2"
      />

      {/* Typing dots */}
      <circle cx="38" cy="14.5" r="2.3" fill="#2563EB" />
      <circle cx="44" cy="14.5" r="2.3" fill="#2563EB" />
      <circle cx="50" cy="14.5" r="2.3" fill="#2563EB" />
    </svg>
  );
};
