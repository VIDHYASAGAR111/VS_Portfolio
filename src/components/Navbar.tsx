import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Sparkles } from 'lucide-react';
import { OWNER_INFO } from '../data/portfolioData';
import { VsTechnologyLogo } from './VsTechnologyLogo';

interface NavbarProps {
  onOpenInquiries: () => void;
  inquiriesCount?: number;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenInquiries, inquiriesCount = 0 }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      id="main-navbar"
      className={`sticky top-0 z-40 transition-all duration-200 bg-white ${
        isScrolled ? 'shadow-md border-b border-slate-200/80' : 'border-b border-slate-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[78px]">
          {/* Brand Logo - VS Technology Official Logo (Exactly Matching Uploaded Image) */}
          <a
            id="navbar-brand-logo"
            href="#"
            className="flex items-center group focus:outline-none shrink-0 py-1"
            title="VS Technology - Full-Stack Software Engineering"
          >
            <VsTechnologyLogo size="md" variant="full" className="h-[58px] sm:h-[64px]" />
          </a>

          {/* Desktop Nav Links - Uppercase Crimson Red Links matching image */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-7">
            {/* The Company */}
            <a
              id="navlink-the-company"
              href="#why-us"
              className="text-[#aa1c24] hover:text-[#7f131a] text-[13.5px] font-bold tracking-wide uppercase transition-colors"
            >
              THE COMPANY
            </a>

            {/* Development Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setOpenDropdown('dev')}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button
                id="navlink-development"
                className="flex items-center gap-1 text-[#aa1c24] group-hover:text-[#7f131a] text-[13.5px] font-bold tracking-wide uppercase transition-colors focus:outline-none"
              >
                <span>DEVELOPMENT</span>
                <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
              </button>

              {/* Development Dropdown Menu */}
              <div className="absolute top-full left-0 pt-2 w-64 hidden group-hover:block transition-all z-50">
                <div className="bg-white rounded-xl shadow-xl border border-slate-100 py-2 divide-y divide-slate-100">
                  <div className="px-3 py-1.5 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                    Software & Web Solutions
                  </div>
                  <div className="py-1">
                    {[
                      { name: 'Web Development', href: '#services' },
                      { name: 'Wordpress Development', href: '#services' },
                      { name: 'Core Php Development', href: '#services' },
                      { name: 'Laravel Development', href: '#services' },
                      { name: 'Web Application Development', href: '#services' },
                      { name: 'Mobile App Development', href: '#services' },
                    ].map((sub, i) => (
                      <a
                        key={i}
                        href={sub.href}
                        className="block px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-red-50 hover:text-[#aa1c24] transition-colors"
                      >
                        {sub.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Digital Marketing Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setOpenDropdown('mkt')}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button
                id="navlink-digital-marketing"
                className="flex items-center gap-1 text-[#aa1c24] group-hover:text-[#7f131a] text-[13.5px] font-bold tracking-wide uppercase transition-colors focus:outline-none"
              >
                <span>DIGITAL MARKETING</span>
                <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
              </button>

              {/* Digital Marketing Dropdown Menu */}
              <div className="absolute top-full left-0 pt-2 w-64 hidden group-hover:block transition-all z-50">
                <div className="bg-white rounded-xl shadow-xl border border-slate-100 py-2 divide-y divide-slate-100">
                  <div className="px-3 py-1.5 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                    Marketing & Creative Suite
                  </div>
                  <div className="py-1">
                    {[
                      { name: 'Video Editing & Motion', href: '#services', popular: true },
                      { name: 'Graphic Designing & Branding', href: '#services', popular: true },
                      { name: 'SEO Services', href: '#services' },
                      { name: 'SMO Services', href: '#services' },
                      { name: 'PPC Services', href: '#services' },
                      { name: 'ORM Services', href: '#services' },
                      { name: 'E-commerce Seo Service', href: '#services' },
                    ].map((sub, i) => (
                      <a
                        key={i}
                        href={sub.href}
                        className="flex items-center justify-between px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-red-50 hover:text-[#aa1c24] transition-colors"
                      >
                        <span>{sub.name}</span>
                        {sub.popular && (
                          <span className="text-[9px] bg-red-100 text-red-700 px-1.5 py-0.5 rounded font-bold uppercase">
                            New
                          </span>
                        )}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Portfolio Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setOpenDropdown('port')}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button
                id="navlink-portfolio"
                className="flex items-center gap-1 text-[#aa1c24] group-hover:text-[#7f131a] text-[13.5px] font-bold tracking-wide uppercase transition-colors focus:outline-none"
              >
                <span>PORTFOLIO</span>
                <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
              </button>

              {/* Portfolio Dropdown Menu */}
              <div className="absolute top-full left-0 pt-2 w-56 hidden group-hover:block transition-all z-50">
                <div className="bg-white rounded-xl shadow-xl border border-slate-100 py-2">
                  {[
                    { name: 'All Case Studies', href: '#projects' },
                    { name: 'Web Applications', href: '#projects' },
                    { name: 'E-Commerce Portals', href: '#projects' },
                    { name: 'Mobile Apps', href: '#projects' },
                    { name: 'Design & Video Projects', href: '#projects' },
                  ].map((sub, i) => (
                    <a
                      key={i}
                      href={sub.href}
                      className="block px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-red-50 hover:text-[#aa1c24] transition-colors"
                    >
                      {sub.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Packages */}
            <a
              id="navlink-packages"
              href="#estimator"
              className="text-[#aa1c24] hover:text-[#7f131a] text-[13.5px] font-bold tracking-wide uppercase transition-colors"
            >
              PACKAGES
            </a>

            {/* Contact Us */}
            <a
              id="navlink-contact-us"
              href="#contact"
              className="text-[#aa1c24] hover:text-[#7f131a] text-[13.5px] font-bold tracking-wide uppercase transition-colors"
            >
              CONTACT US
            </a>
          </div>

          {/* Right Button: FREE SITE AUDIT (Exact Royal Blue Pill/Button from screenshot) */}
          <div className="hidden md:flex items-center gap-3">
            <a
              id="navbar-audit-btn"
              href="#contact"
              className="flex items-center justify-center px-6 py-2.5 bg-[#1d3583] hover:bg-[#152763] text-white text-[13px] font-bold uppercase tracking-wider rounded-md transition-all shadow-sm active:scale-95"
            >
              FREE SITE AUDIT
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center lg:hidden gap-2">
            <a
              href="#contact"
              className="px-3 py-1.5 bg-[#1d3583] text-white text-xs font-bold uppercase rounded-md"
            >
              Audit
            </a>

            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#aa1c24] hover:bg-red-50 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div id="mobile-menu-drawer" className="lg:hidden border-t border-slate-200 bg-white px-5 pt-4 pb-6 space-y-3 shadow-xl">
          <div className="space-y-1">
            <a
              href="#why-us"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-bold text-[#aa1c24] uppercase hover:bg-red-50 rounded-lg"
            >
              THE COMPANY
            </a>
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-bold text-[#aa1c24] uppercase hover:bg-red-50 rounded-lg"
            >
              DEVELOPMENT
            </a>
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-bold text-[#aa1c24] uppercase hover:bg-red-50 rounded-lg"
            >
              DIGITAL MARKETING (VIDEO EDITING & GRAPHIC DESIGN)
            </a>
            <a
              href="#projects"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-bold text-[#aa1c24] uppercase hover:bg-red-50 rounded-lg"
            >
              PORTFOLIO
            </a>
            <a
              href="#estimator"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-bold text-[#aa1c24] uppercase hover:bg-red-50 rounded-lg"
            >
              PACKAGES
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-bold text-[#aa1c24] uppercase hover:bg-red-50 rounded-lg"
            >
              CONTACT US
            </a>
          </div>

          <div className="pt-3 border-t border-slate-100">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center py-3 bg-[#1d3583] text-white text-sm font-bold uppercase rounded-lg shadow-sm"
            >
              FREE SITE AUDIT
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

