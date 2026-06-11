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
        <linearGradient id="bmm-logo-bubble" x1="6" y1="4" x2="54" y2="56" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#8B5CF6" />
          <stop offset="100%" stopColor="#4338CA" />
        </linearGradient>
      </defs>

      {/* Speech bubble */}
      <path
        d="M16,3 L44,3 Q57,3 57,16 L57,36 Q57,49 44,49 L26,49 L11,58 L14.5,49 L16,49 Q3,49 3,36 L3,16 Q3,3 16,3 Z"
        fill="url(#bmm-logo-bubble)"
      />

      {/* Bubble sheen */}
      <ellipse cx="18" cy="12" rx="9" ry="4.5" fill="white" opacity="0.16" transform="rotate(-18 18 12)" />

      {/* Bernie "B" */}
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20,12 L33,12 C38.2,12 41.8,14.9 41.8,19.4 C41.8,22.7 39.9,25 37.1,26 C40.7,26.9 43.4,29.5 43.4,33.4 C43.4,37.7 39.7,40 34.2,40 L20,40 Z M26.5,17.2 L32.3,17.2 C34.6,17.2 35.9,18.4 35.9,20.3 C35.9,22.2 34.6,23.4 32.3,23.4 L26.5,23.4 Z M26.5,28.6 L33.2,28.6 C35.8,28.6 37.2,29.8 37.2,31.8 C37.2,33.8 35.8,35 33.2,35 L26.5,35 Z"
        fill="white"
      />
    </svg>
  );
};
