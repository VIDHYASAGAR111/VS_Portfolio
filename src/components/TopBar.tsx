import React from 'react';
import { MapPin } from 'lucide-react';
import { OWNER_INFO } from '../data/portfolioData';

export const IndiaFlagIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg 
    viewBox="0 0 36 36" 
    className={`${className} shrink-0 rounded-full overflow-hidden inline-block align-middle shadow-xs border border-white/20`}
    aria-label="India Flag"
  >
    {/* Saffron band */}
    <rect width="36" height="12" fill="#FF9933" />
    {/* White middle band */}
    <rect y="12" width="36" height="12" fill="#FFFFFF" />
    {/* India Green bottom band */}
    <rect y="24" width="36" height="12" fill="#138808" />
    {/* Navy Blue Ashoka Chakra */}
    <circle cx="18" cy="18" r="4.2" fill="none" stroke="#000080" strokeWidth="0.8" />
    <circle cx="18" cy="18" r="1.1" fill="#000080" />
    {/* 24 spokes */}
    {Array.from({ length: 24 }).map((_, i) => (
      <line
        key={i}
        x1="18"
        y1="18"
        x2={18 + 4.1 * Math.cos((i * 15 * Math.PI) / 180)}
        y2={18 + 4.1 * Math.sin((i * 15 * Math.PI) / 180)}
        stroke="#000080"
        strokeWidth="0.45"
      />
    ))}
  </svg>
);

export const TopBar: React.FC = () => {
  return (
    <div id="top-notification-bar" className="bg-[#172554] text-white text-xs py-2 px-4 sm:px-6 lg:px-8 border-b border-blue-950">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-3">
        {/* Left: Current Office Address */}
        <div className="flex items-center gap-2 text-white text-xs font-normal tracking-wide">
          <IndiaFlagIcon className="w-4 h-4" />
          <span className="font-medium text-slate-100 flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5 text-amber-400 inline shrink-0" />
            <span>{OWNER_INFO.location}</span>
          </span>
        </div>

        {/* Right: Phone Numbers in Black Rounded Pills with Indian Flag */}
        <div className="flex items-center gap-3">
          <a
            id="topbar-phone-1"
            href="tel:+919598530662"
            className="flex items-center gap-2 bg-black hover:bg-slate-900 text-white text-[11px] sm:text-xs font-bold px-3.5 py-1 rounded-full border border-slate-800 transition-colors shadow-xs"
            title="Call +91 9598530662"
          >
            <IndiaFlagIcon className="w-4 h-4" />
            <span className="tracking-wider">+91 95985-30662</span>
          </a>

          <a
            id="topbar-phone-2"
            href="tel:+916388603391"
            className="flex items-center gap-2 bg-black hover:bg-slate-900 text-white text-[11px] sm:text-xs font-bold px-3.5 py-1 rounded-full border border-slate-800 transition-colors shadow-xs"
            title="Call +91 6388603391"
          >
            <IndiaFlagIcon className="w-4 h-4" />
            <span className="tracking-wider">+91 63886-03391</span>
          </a>
        </div>
      </div>
    </div>
  );
};

