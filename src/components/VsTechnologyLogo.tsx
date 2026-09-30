import React from 'react';

interface VsTechnologyLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'full' | 'icon-only' | 'horizontal';
}

export const VsTechnologyLogo: React.FC<VsTechnologyLogoProps> = ({
  className = '',
  size = 'md',
  variant = 'full',
}) => {
  // Height sizing
  const sizeClasses = {
    sm: 'h-10',
    md: 'h-14 sm:h-16',
    lg: 'h-20',
    xl: 'h-28',
  };

  if (variant === 'icon-only') {
    return (
      <div className={`relative inline-flex items-center justify-center ${className}`}>
        <svg
          viewBox="30 45 340 220"
          className={`${sizeClasses[size]} w-auto object-contain drop-shadow-xs`}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="vGradIcon" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00c8ff" />
              <stop offset="35%" stopColor="#0091ff" />
              <stop offset="100%" stopColor="#004be8" />
            </linearGradient>

            <linearGradient id="swooshGradIcon" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#004ce0" />
              <stop offset="50%" stopColor="#0080ff" />
              <stop offset="100%" stopColor="#00b4ff" />
            </linearGradient>
          </defs>

          {/* S Letter in Dark Charcoal/Navy */}
          <path
            d="M 215 136 C 215 106, 240 85, 288 85 C 318 85, 332 94, 342 108 L 310 128 C 304 120, 296 116, 286 116 C 270 116, 260 123, 260 134 C 260 144, 270 151, 288 156 L 302 160 C 330 168, 348 184, 348 212 C 348 244, 320 265, 278 265 C 242 265, 222 250, 212 235 L 244 214 C 251 224, 262 232, 276 232 C 294 232, 304 223, 304 211 C 304 199, 292 192, 274 187 L 260 183 C 232 174, 215 159, 215 136 Z"
            fill="#20242f"
          />

          {/* V Letter with Cyan-to-Blue Gradient */}
          <path
            d="M 62 86 L 114 86 L 163 194 L 195 106 L 234 106 L 165 244 C 163 248, 157 254, 151 254 C 147 254, 142 250, 140 244 L 62 86 Z"
            fill="url(#vGradIcon)"
          />

          {/* Dynamic Blue Orbital Swoosh */}
          <path
            d="M 54 204 C 68 238, 116 264, 168 255 C 228 244, 288 198, 346 96 L 346 114 C 286 216, 216 268, 156 268 C 104 268, 64 242, 54 204 Z"
            fill="url(#swooshGradIcon)"
          />

          {/* Digital Pixel Trail at Top Right of Swoosh */}
          <rect x="340" y="78" width="10" height="10" rx="1" fill="#0080ff" />
          <rect x="326" y="86" width="10" height="10" rx="1" fill="#0096ff" />
          <rect x="340" y="92" width="10" height="10" rx="1" fill="#0070ee" />
          <rect x="326" y="100" width="10" height="10" rx="1" fill="#0088ff" />
          <rect x="340" y="64" width="7" height="7" rx="1" fill="#00b4ff" />
        </svg>
      </div>
    );
  }

  // Full Version: Icon + "TECHNOLOGY" + Accent Line underneath (Exactly matching uploaded image)
  return (
    <div className={`relative inline-flex flex-col items-center justify-center ${className}`}>
      <svg
        viewBox="30 45 340 270"
        className={`${sizeClasses[size]} w-auto object-contain drop-shadow-xs`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* V letter gradient */}
          <linearGradient id="vGradFull" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00c8ff" />
            <stop offset="30%" stopColor="#0092ff" />
            <stop offset="100%" stopColor="#0047e0" />
          </linearGradient>

          {/* Swoosh gradient */}
          <linearGradient id="swooshGradFull" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#004be0" />
            <stop offset="50%" stopColor="#0082ff" />
            <stop offset="100%" stopColor="#00b8ff" />
          </linearGradient>

          {/* Sub-divider line gradients */}
          <linearGradient id="lineGradLeft" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0090ff" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#0070ee" stopOpacity="1" />
          </linearGradient>

          <linearGradient id="lineGradRight" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0070ee" stopOpacity="1" />
            <stop offset="100%" stopColor="#0090ff" stopOpacity="0.1" />
          </linearGradient>
        </defs>

        {/* 1. S Letter in Dark Charcoal/Gunmetal */}
        <path
          d="M 215 136 C 215 106, 240 85, 288 85 C 318 85, 332 94, 342 108 L 310 128 C 304 120, 296 116, 286 116 C 270 116, 260 123, 260 134 C 260 144, 270 151, 288 156 L 302 160 C 330 168, 348 184, 348 212 C 348 244, 320 265, 278 265 C 242 265, 222 250, 212 235 L 244 214 C 251 224, 262 232, 276 232 C 294 232, 304 223, 304 211 C 304 199, 292 192, 274 187 L 260 183 C 232 174, 215 159, 215 136 Z"
          fill="#1e2330"
        />

        {/* 2. V Letter with Vivid Cyan-to-Cobalt Gradient */}
        <path
          d="M 62 86 L 114 86 L 163 194 L 195 106 L 234 106 L 165 244 C 163 248, 157 254, 151 254 C 147 254, 142 250, 140 244 L 62 86 Z"
          fill="url(#vGradFull)"
        />

        {/* 3. Dynamic Orbital Swoosh */}
        <path
          d="M 54 204 C 68 238, 116 264, 168 255 C 228 244, 288 198, 346 96 L 346 114 C 286 216, 216 268, 156 268 C 104 268, 64 242, 54 204 Z"
          fill="url(#swooshGradFull)"
        />

        {/* 4. Digital Pixel Blocks at Top-Right of Swoosh */}
        <rect x="340" y="78" width="10" height="10" rx="1" fill="#0080ff" />
        <rect x="326" y="86" width="10" height="10" rx="1" fill="#0096ff" />
        <rect x="340" y="92" width="10" height="10" rx="1" fill="#0070ee" />
        <rect x="326" y="100" width="10" height="10" rx="1" fill="#0088ff" />
        <rect x="340" y="64" width="7" height="7" rx="1" fill="#00b4ff" />

        {/* 5. "TECHNOLOGY" Typography in Bold Dark Slate */}
        <text
          x="200"
          y="292"
          textAnchor="middle"
          fill="#171c26"
          fontFamily="'Outfit', 'Plus Jakarta Sans', system-ui, sans-serif"
          fontWeight="800"
          fontSize="24"
          letterSpacing="0.32em"
        >
          TECHNOLOGY
        </text>

        {/* 6. Accent Divider Underneath: Gradient Line — Dot — Gradient Line */}
        <line
          x1="135"
          y1="305"
          x2="190"
          y2="305"
          stroke="url(#lineGradLeft)"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <circle cx="200" cy="305" r="3.2" fill="#0078f0" />
        <line
          x1="210"
          y1="305"
          x2="265"
          y2="305"
          stroke="url(#lineGradRight)"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};
