import React from 'react';

interface DigitalShopLogoProps {
  className?: string;
  size?: number | string;
}

export const DigitalShopLogo: React.FC<DigitalShopLogoProps> = ({
  className = 'w-10 h-10',
}) => {
  return (
    <div
      className={`${className} rounded-full overflow-hidden shrink-0 select-none shadow-xs border border-emerald-500/40 bg-[#0c1b3a] flex items-center justify-center`}
    >
      <svg
        viewBox="0 0 200 200"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Background Gradient */}
          <radialGradient id="dsl-bg" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#12274c" />
            <stop offset="100%" stopColor="#0a152e" />
          </radialGradient>
          {/* Inner Circle Disc Gradient */}
          <radialGradient id="dsl-disc" cx="50%" cy="45%" r="50%">
            <stop offset="0%" stopColor="#1b4666" />
            <stop offset="75%" stopColor="#12334d" />
            <stop offset="100%" stopColor="#0b2234" />
          </radialGradient>
          {/* Lime Green Gradient */}
          <linearGradient id="dsl-lime" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#55f569" />
            <stop offset="100%" stopColor="#22c55e" />
          </linearGradient>
          {/* Yellow-Lime Text Gradient */}
          <linearGradient id="dsl-text" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ccff33" />
            <stop offset="100%" stopColor="#84e019" />
          </linearGradient>
        </defs>

        {/* Base Navy Background */}
        <rect width="200" height="200" fill="url(#dsl-bg)" />

        {/* Inner Teal Disc */}
        <circle cx="100" cy="90" r="58" fill="url(#dsl-disc)" />

        {/* Wifi Broadcast Arcs above cart */}
        <path
          d="M 80 72 A 23 23 0 0 1 110 70"
          fill="none"
          stroke="#42df64"
          strokeWidth="4.5"
          strokeLinecap="round"
        />
        <path
          d="M 85 79 A 15 15 0 0 1 105 78"
          fill="none"
          stroke="#42df64"
          strokeWidth="3.8"
          strokeLinecap="round"
        />
        <path
          d="M 90 86 A 7 7 0 0 1 100 85"
          fill="none"
          stroke="#42df64"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <circle cx="95" cy="90" r="2" fill="#86efac" />

        {/* Speed / Sparkle dots behind cart */}
        <circle cx="60" cy="108" r="1.5" fill="#42df64" opacity="0.8" />
        <circle cx="65" cy="104" r="2" fill="#42df64" />
        <circle cx="63" cy="114" r="2.2" fill="#42df64" />
        <circle cx="70" cy="110" r="2.5" fill="#42df64" />
        <circle cx="75" cy="116" r="2" fill="#42df64" />
        <circle cx="78" cy="122" r="2.4" fill="#42df64" />

        {/* Price Tag on Handle */}
        <path
          d="M 54 62 Q 64 61 71 68"
          fill="none"
          stroke="#86efac"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeDasharray="1,1"
        />
        <g transform="translate(57, 70) rotate(-22)">
          <polygon
            points="5,0 15,0 19,6 19,23 0,23 0,6"
            fill="#84f243"
            stroke="#16a34a"
            strokeWidth="1.2"
          />
          <circle cx="10" cy="5" r="2" fill="#0c1b3a" />
          <line x1="5" y1="13" x2="14" y2="13" stroke="#16a34a" strokeWidth="1.2" />
        </g>

        {/* Cart Handle */}
        <path
          d="M 71 68 L 78 80 L 126 72"
          fill="none"
          stroke="#42df64"
          strokeWidth="3.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Cart Basket Body */}
        <polygon
          points="78,80 131,71 122,110 83,114"
          fill="none"
          stroke="#42df64"
          strokeWidth="3.6"
          strokeLinejoin="round"
        />

        {/* Basket Wire Grid Ribs */}
        <line x1="88" y1="78" x2="91" y2="113" stroke="#42df64" strokeWidth="1.6" />
        <line x1="97" y1="77" x2="99" y2="112" stroke="#42df64" strokeWidth="1.6" />
        <line x1="106" y1="75" x2="107" y2="111" stroke="#42df64" strokeWidth="1.6" />
        <line x1="115" y1="74" x2="115" y2="111" stroke="#42df64" strokeWidth="1.6" />
        <line x1="124" y1="72" x2="120" y2="105" stroke="#42df64" strokeWidth="1.6" />
        <line x1="80" y1="90" x2="128" y2="82" stroke="#42df64" strokeWidth="1.6" />
        <line x1="81" y1="101" x2="125" y2="94" stroke="#42df64" strokeWidth="1.6" />

        {/* Cart Chassis & Wheels */}
        <path
          d="M 86 114 L 92 125 L 118 122 L 122 110"
          fill="none"
          stroke="#42df64"
          strokeWidth="2.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Left Wheel */}
        <circle cx="92" cy="125" r="7.5" fill="#12334d" stroke="#42df64" strokeWidth="2.4" />
        <circle cx="92" cy="125" r="3" fill="#86efac" />
        {/* Right Wheel */}
        <circle cx="118" cy="122" r="7.5" fill="#12334d" stroke="#42df64" strokeWidth="2.4" />
        <circle cx="118" cy="122" r="3" fill="#86efac" />

        {/* Green arc under cart */}
        <path
          d="M 64 128 Q 100 142 142 128"
          fill="none"
          stroke="#22c55e"
          strokeWidth="2.4"
          strokeLinecap="round"
          opacity="0.9"
        />

        {/* Curved Path for ONLINE SHOP T.M Text */}
        <path id="logoTextArc" d="M 28 136 Q 100 178 172 136" fill="none" />

        {/* Curved Text: ONLINE SHOP T.M */}
        <text
          fontFamily="system-ui, -apple-system, 'Segoe UI', Arial, sans-serif"
          fontWeight="900"
          fontSize="17.5"
          fill="url(#dsl-text)"
          letterSpacing="1.2"
        >
          <textPath href="#logoTextArc" startOffset="50%" textAnchor="middle">
            ONLINE SHOP T.M
          </textPath>
        </text>

        {/* Cyan Subtitle: EASY SOLUTION */}
        <text
          x="100"
          y="171"
          textAnchor="middle"
          fontFamily="system-ui, -apple-system, 'Segoe UI', Arial, sans-serif"
          fontWeight="800"
          fontSize="8"
          fill="#38bdf8"
          letterSpacing="2"
        >
          EASY SOLUTION
        </text>
      </svg>
    </div>
  );
};
