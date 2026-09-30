import React from 'react';
import { Phone } from 'lucide-react';
import { OWNER_INFO } from '../data/portfolioData';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <>
      {/* 1. FIXED BOTTOM-LEFT WHATSAPP LOGO BUTTON (Only the logo, exactly matching image) */}
      <div id="fixed-whatsapp-container" className="fixed bottom-4 sm:bottom-6 left-4 sm:left-6 z-50">
        <a
          id="fixed-whatsapp-btn"
          href="https://wa.me/919598530662?text=Hi%20Vidyasagar,%20I%20saw%20your%20portfolio%20and%20want%20to%20discuss%20a%20project."
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#25D366] hover:bg-[#20ba59] text-white flex items-center justify-center shadow-2xl transition-all transform hover:scale-110 active:scale-95 cursor-pointer relative group"
          title="Chat on WhatsApp (+91 95985-30662)"
          aria-label="WhatsApp"
        >
          {/* Subtle Radar Pulse */}
          <span className="absolute -inset-1 rounded-2xl bg-[#25D366] opacity-30 animate-ping -z-10 pointer-events-none" />
          
          <svg 
            viewBox="0 0 24 24" 
            className="w-7 h-7 sm:w-8 sm:h-8 fill-current text-white"
          >
            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.698c.969.581 1.83.89 2.796.89 3.181 0 5.767-2.586 5.768-5.766 0-3.18-2.587-5.767-5.768-5.767zm7.394 5.766c-.001 4.072-3.323 7.394-7.394 7.394-1.298 0-2.525-.341-3.593-.939l-4.438 1.163 1.185-4.331c-.687-1.127-1.05-2.437-1.05-3.287 0-4.072 3.323-7.394 7.394-7.394 4.072 0 7.394 3.322 7.396 7.394z"/>
          </svg>
        </a>
      </div>

      {/* 2. FIXED BOTTOM-RIGHT CALL LOGO BUTTON (Only the logo, exactly matching image) */}
      <div id="fixed-call-container" className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-50">
        <a
          id="fixed-call-btn"
          href="tel:+919598530662"
          className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#1e9e49] hover:bg-[#19883e] text-white flex items-center justify-center shadow-2xl transition-all transform hover:scale-110 active:scale-95 group relative cursor-pointer"
          title="Call (+91 95985-30662)"
          aria-label="Direct Phone Call"
        >
          {/* Subtle Radar Pulse */}
          <span className="absolute -inset-1 rounded-full bg-[#1e9e49] opacity-30 animate-ping -z-10 pointer-events-none" />
          
          <Phone className="w-6 h-6 sm:w-7 sm:h-7 text-white group-hover:scale-110 transition-transform" />
        </a>
      </div>
    </>
  );
};
