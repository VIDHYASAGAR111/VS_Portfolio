import React from 'react';
import { 
  Mail, Phone, MapPin, MessageSquare, PhoneCall, 
  MessageCircle, ChevronRight 
} from 'lucide-react';
import { OWNER_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  return (
    <footer id="main-footer" className="bg-[#04274c] text-white text-xs border-t border-[#093566]">
      {/* 1st Target Section: 4-Column Main Agency Footer (matches CSS selector 1) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10">
          {/* Column 1: Company Profile & Contact Button */}
          <div className="lg:col-span-3 space-y-5">
            <h3 className="text-xl sm:text-2xl font-black text-white tracking-wide">
              VS Technology PVT. LTD.
            </h3>
            <p className="text-sm text-slate-200/90 leading-relaxed font-normal">
              We are Digital agency that helps brands find new customers, enhance visibility,get more from existing customers, stay above the competitors and Increase profit .
            </p>
            <div>
              <a
                id="footer-contact-us-btn"
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-2.5 rounded-md bg-[#2d44cf] hover:bg-[#2237b0] text-white font-semibold text-sm shadow-md transition-all cursor-pointer"
              >
                Contact Us
              </a>
            </div>
          </div>

          {/* Column 2: Development Services */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-lg font-bold text-white tracking-normal flex items-center justify-between">
              <span>Development Services</span>
            </h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { name: 'Web Development', href: '#services', highlight: true },
                { name: 'Wordpress Development', href: '#services', highlight: true },
                { name: 'Core Php Development', href: '#services', highlight: false },
                { name: 'Laravel Development', href: '#services', highlight: false },
                { name: 'Web Application Development', href: '#services', highlight: true },
                { name: 'Mobile App Development', href: '#services', highlight: false },
              ].map((item, idx) => (
                <li key={idx}>
                  <a
                    href={item.href}
                    className="flex items-center justify-between text-slate-200 hover:text-white group transition-colors pr-2"
                  >
                    <div className="flex items-center">
                      <span className="text-[#00a3e0] font-bold text-base mr-2.5 group-hover:translate-x-0.5 transition-transform">
                        &gt;
                      </span>
                      <span className={`font-normal ${item.highlight ? 'text-cyan-200 font-medium' : ''}`}>
                        {item.name}
                      </span>
                    </div>
                    {item.highlight && (
                      <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-400/30">
                        Popular
                      </span>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Digital Marketing & Creative Design */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-lg font-bold text-white tracking-normal flex items-center justify-between">
              <span>Marketing & Creative</span>
            </h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { name: 'Video Editing', href: '#services', highlight: false },
                { name: 'Graphic Designing', href: '#services', highlight: false },
                { name: 'SEO Services', href: '#services', highlight: false },
                { name: 'SMO Services', href: '#services', highlight: false },
                { name: 'PPC Services', href: '#services', highlight: false },
                { name: 'ORM Services', href: '#services', highlight: false },
                { name: 'E-commerce Seo Service', href: '#services', highlight: false },
              ].map((item, idx) => (
                <li key={idx}>
                  <a
                    href={item.href}
                    className="flex items-center text-slate-200 hover:text-white group transition-colors pr-2"
                  >
                    <span className="text-[#00a3e0] font-bold text-base mr-2.5 group-hover:translate-x-0.5 transition-transform">
                      &gt;
                    </span>
                    <span className="font-normal">{item.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: US & India Offices, Email, and Call Contacts */}
          <div className="lg:col-span-3 space-y-4">
            {/* India Office (HQ) */}
            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-full bg-[#2546a3] flex items-center justify-center shrink-0 shadow-sm mt-0.5">
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <div>
                <h5 className="text-base font-bold text-white leading-tight mb-1">
                  India HQ (Noida)
                </h5>
                <p className="text-xs sm:text-sm text-slate-200 leading-snug">
                  {OWNER_INFO.location}
                </p>
              </div>
            </div>

            {/* Global Remote Delivery */}
            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-full bg-[#2546a3] flex items-center justify-center shrink-0 shadow-sm mt-0.5">
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <div>
                <h5 className="text-base font-bold text-white leading-tight mb-1">
                  Global Delivery
                </h5>
                <p className="text-xs sm:text-sm text-slate-200 leading-snug">
                  Remote Engineering &amp; On-Site Deployments Worldwide
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-full bg-[#2546a3] flex items-center justify-center shrink-0 shadow-sm mt-0.5">
                <Mail className="w-5 h-5 text-white" />
              </div>
              <div>
                <h5 className="text-base font-bold text-white leading-tight mb-1">
                  Email
                </h5>
                <a
                  href={`mailto:${OWNER_INFO.email}`}
                  className="text-xs sm:text-sm text-slate-200 hover:text-white transition-colors block font-medium"
                >
                  {OWNER_INFO.email}
                </a>
              </div>
            </div>

            {/* Call */}
            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-full bg-[#2546a3] flex items-center justify-center shrink-0 shadow-sm mt-0.5">
                <Phone className="w-5 h-5 text-white" />
              </div>
              <div>
                <h5 className="text-base font-bold text-white leading-tight mb-1">
                  Call & WhatsApp
                </h5>
                <a
                  href="tel:+919598530662"
                  className="text-xs sm:text-sm text-slate-200 hover:text-white transition-colors block font-medium"
                >
                  +91 95985-30662 (Primary)
                </a>
                <a
                  href="tel:+916388603391"
                  className="text-xs sm:text-sm text-slate-200 hover:text-white transition-colors block font-medium"
                >
                  +91 63886-03391 (Direct)
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2nd Target Section: Horizontal Menu Strip (matches CSS selector 2) */}
      <div className="border-t border-[#133d6b] py-5 px-4 sm:px-6 lg:px-8 bg-[#04274c]">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center lg:justify-between gap-x-6 gap-y-3 text-xs sm:text-[13px] font-bold uppercase tracking-wider text-slate-200">
          <a href="#hero-section" className="hover:text-white transition-colors">HOME</a>
          <a href="#why-us" className="hover:text-white transition-colors">THE COMPANY</a>
          <a href="#projects" className="hover:text-white transition-colors">CASE STUDIES</a>
          <a href="#estimator" className="hover:text-white transition-colors">REQUEST FOR QUOTE</a>
          <a href="#process" className="hover:text-white transition-colors">OUR TEAM</a>
          <a href="#contact" className="hover:text-white transition-colors">PRIVACY POLICY</a>
          <a href="#contact" className="hover:text-white transition-colors">TERMS AND CONDITION</a>
          <a href="#contact" className="hover:text-white transition-colors">CAREERS</a>
          <a href="#reviews" className="hover:text-white transition-colors">BLOGS</a>
        </div>
      </div>

      {/* 3rd Target Section: Direct Communication Hub (Calling, SMS Msg, WhatsApp Msg, WhatsApp Calling) */}
      <div className="border-t border-[#092b52] bg-[#021832] py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Left Side: Copyright Notice & Verification */}
          <div className="flex flex-col sm:flex-row items-center gap-2 text-center sm:text-left">
            <p className="text-xs sm:text-sm text-slate-300 font-normal">
              Copyright © 2016-2026 <span className="font-semibold text-white">VS Technology Pvt. Ltd.</span> All rights reserved.
            </p>
            <span className="hidden sm:inline text-slate-600">•</span>
            <span className="text-[11px] sm:text-xs text-emerald-400 font-medium inline-flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Direct Lines Active
            </span>
          </div>

          {/* Right Side: Strictly Calling, SMS Msg, WhatsApp Msg, and WhatsApp Calling */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
            {/* 1. Direct Phone Calling */}
            <a
              id="footer-channel-call"
              href={`tel:${OWNER_INFO.phoneNumbers[0] || '+919598530662'}`}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#00a3e0]/20 hover:bg-[#00a3e0]/35 border border-[#00a3e0]/40 text-[#38bdf8] text-xs font-bold tracking-wide shadow-xs transition-all hover:scale-105 active:scale-95 cursor-pointer"
              title="Direct Phone Call: +91 95985-30662"
            >
              <Phone className="w-3.5 h-3.5 text-[#38bdf8]" />
              <span>Calling</span>
            </a>

            {/* 2. Direct SMS Message */}
            <a
              id="footer-channel-sms"
              href={`sms:${OWNER_INFO.phoneNumbers[0] || '+919598530662'}?body=Hello%20Vidyasagar,%20I%20would%20like%20to%20discuss%20a%20project.`}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-indigo-500/20 hover:bg-indigo-500/35 border border-indigo-400/40 text-indigo-300 text-xs font-bold tracking-wide shadow-xs transition-all hover:scale-105 active:scale-95 cursor-pointer"
              title="Send Direct SMS to +91 95985-30662"
            >
              <MessageSquare className="w-3.5 h-3.5 text-indigo-300" />
              <span>Msg</span>
            </a>

            {/* 3. WhatsApp Message */}
            <a
              id="footer-channel-whatsapp-msg"
              href={`https://wa.me/${OWNER_INFO.whatsappNumber}?text=Hello%20Vidyasagar,%20I%20am%20interested%20in%20discussing%20a%20project%20with%20VS%20Technology.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold tracking-wide shadow-md hover:scale-105 active:scale-95 transition-all cursor-pointer"
              title="Chat on WhatsApp (+91 95985-30662)"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-white text-white" />
              <span>WhatsApp Msg</span>
            </a>

            {/* 4. WhatsApp Calling */}
            <a
              id="footer-channel-whatsapp-call"
              href={`https://wa.me/${OWNER_INFO.whatsappNumber}?text=Hello%20Vidyasagar,%20calling%20you%20on%20WhatsApp%20to%20discuss%20a%20project.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#128C7E] hover:bg-[#0e7064] text-white text-xs font-bold tracking-wide shadow-md hover:scale-105 active:scale-95 transition-all cursor-pointer"
              title="WhatsApp Call (+91 95985-30662)"
            >
              <PhoneCall className="w-3.5 h-3.5 text-white" />
              <span>WhatsApp Calling</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
