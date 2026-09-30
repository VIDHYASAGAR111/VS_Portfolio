import React, { useState } from 'react';
import { 
  CheckCircle2, Sparkles, X, Phone, MessageSquare, ArrowRight 
} from 'lucide-react';
import { SERVICES_DATA, OWNER_INFO } from '../data/portfolioData';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  onSelectServiceForQuote?: (serviceTitle: string) => void;
}

// Primary Accent Red Icon
export const DigitalOceanRedIcon: React.FC<{ className?: string }> = ({ 
  className = "w-9 h-9 sm:w-10 sm:h-10 text-[#c92127]" 
}) => (
  <svg 
    viewBox="0 0 512 512" 
    className={`${className} shrink-0`}
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M496 256c0 137-111 248-248 248-25.6 0-50.2-3.9-73.4-11.1 10.1-16.5 25.2-43.5 30.8-53.6 13.4 4.5 27.6 6.9 42.6 6.9 88.4 0 160-71.6 160-160s-71.6-160-160-160c-78.6 0-144.1 56.6-157.7 131.6h58.1c11.9 0 21.6 9.7 21.6 21.6 0 11.9-9.7 21.6-21.6 21.6H38.5c-4.6 0-8.9-1.5-12.4-4.1-1.3-1-2.4-2.2-3.3-3.6-2.5-3.6-4-8-4-12.7 0-1.8.2-3.5.6-5.2C38.3 124.6 133.5 32 248 32c137 0 248 111 248 248zM147.2 384c0 11.9-9.7 21.6-21.6 21.6H82.4c-11.9 0-21.6-9.7-21.6-21.6v-43.2c0-11.9 9.7-21.6 21.6-21.6h43.2c11.9 0 21.6 9.7 21.6 21.6V384zm64.8 0c0 11.9-9.7 21.6-21.6 21.6h-21.6c-11.9 0-21.6-9.7-21.6-21.6v-21.6c0-11.9 9.7-21.6 21.6-21.6h21.6c11.9 0 21.6 9.7 21.6 21.6V384z" />
  </svg>
);

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectServiceForQuote }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const handleInquire = (serviceTitle: string) => {
    if (onSelectServiceForQuote) {
      onSelectServiceForQuote(serviceTitle);
    }
    setSelectedService(null);
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-14 sm:py-20 bg-[#1d357e] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8 mb-12 sm:mb-16">
          
          {/* Left Developer Image */}
          <div className="hidden md:block w-48 sm:w-60 lg:w-72 shrink-0">
            <div className="overflow-hidden rounded-2xl shadow-2xl border-2 border-white/15 transform hover:scale-105 transition-transform duration-300">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80"
                alt="Web Development Engineering Team"
                loading="lazy"
                decoding="async"
                className="w-full h-32 sm:h-36 lg:h-44 object-cover"
              />
            </div>
          </div>

          {/* Center Heading matching image.png */}
          <div className="text-center flex-1 max-w-xl mx-auto px-2">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
              Our Services
            </h2>
            <h4 className="text-base sm:text-lg lg:text-xl font-bold text-white/95 mt-2 sm:mt-3 leading-snug">
              We Build Brands With Our Best Services
            </h4>
          </div>

          {/* Right Developer Image */}
          <div className="hidden md:block w-48 sm:w-60 lg:w-72 shrink-0">
            <div className="overflow-hidden rounded-2xl shadow-2xl border-2 border-white/15 transform hover:scale-105 transition-transform duration-300">
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80"
                alt="Software Development Coding Workstation"
                loading="lazy"
                decoding="async"
                className="w-full h-32 sm:h-36 lg:h-44 object-cover"
              />
            </div>
          </div>

        </div>

        {/* Services Cards Grid (Exact Card Design as in image.png) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES_DATA.map((service) => (
            <div
              key={service.id}
              id={`service-card-${service.id}`}
              className="bg-white rounded-3xl p-6 sm:p-7 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between text-left group border border-slate-100"
            >
              <div>
                {/* Top: Red Circle DigitalOcean Logo + Title */}
                <div className="flex items-center gap-3.5 mb-3">
                  <DigitalOceanRedIcon className="w-9 h-9 sm:w-10 sm:h-10 text-[#c92127] shrink-0" />
                  <h3 className="text-lg sm:text-xl font-bold text-[#0f172a] leading-snug group-hover:text-[#c92127] transition-colors">
                    {service.title}
                  </h3>
                </div>

                {/* Body: Current Description Text */}
                <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed mb-4 line-clamp-3">
                  {service.shortDesc}
                </p>
              </div>

              {/* Bottom: Read More Link in Red Arrow */}
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                <button
                  id={`read-more-${service.id}`}
                  onClick={() => setSelectedService(service)}
                  className="text-[#c92127] hover:text-red-700 font-bold text-sm inline-flex items-center gap-1.5 transition-all group-hover:translate-x-1 cursor-pointer"
                >
                  <span>Read More</span>
                  <span className="text-base font-bold">→</span>
                </button>

                <button
                  onClick={() => handleInquire(service.title)}
                  className="text-xs font-semibold text-slate-500 hover:text-slate-900 px-2.5 py-1 rounded-md hover:bg-slate-100 transition-colors cursor-pointer"
                >
                  Get Quote
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Service Details Modal (Opens when "Read More" is clicked) */}
      {selectedService && (
        <div
          id="service-detail-modal-backdrop"
          className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6"
          onClick={() => setSelectedService(null)}
        >
          <div
            id="service-detail-modal-content"
            className="bg-white text-slate-900 rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 max-h-[90vh] overflow-y-auto relative animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-4 border-b border-slate-100 pb-5">
              <div className="flex items-center gap-3.5">
                <DigitalOceanRedIcon className="w-11 h-11 text-[#c92127] shrink-0" />
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                      {selectedService.title}
                    </h3>
                    {selectedService.badge && (
                      <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-red-50 text-[#c92127] border border-red-200">
                        {selectedService.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-slate-500 font-medium mt-0.5">
                    VS Technology &bull; Vidyasagar Chaurasiya
                  </p>
                </div>
              </div>

              <button
                id="close-service-modal-btn"
                onClick={() => setSelectedService(null)}
                className="p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
                aria-label="Close details"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="py-5 space-y-6">
              
              {/* Comprehensive Overview */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Service Overview &amp; Execution Strategy
                </h4>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  {selectedService.fullDesc}
                </p>
              </div>

              {/* Key Features / Capabilities */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5">
                  Key Capabilities Included
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedService.features.map((feat, idx) => (
                    <div 
                      key={idx} 
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 bg-slate-50 p-3 rounded-xl border border-slate-100"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#c92127] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tangible Deliverables */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5">
                  Tangible Deliverables
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedService.deliverables.map((deliv, idx) => (
                    <div 
                      key={idx} 
                      className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-slate-800 bg-red-50/40 p-3 rounded-xl border border-red-100/60"
                    >
                      <Sparkles className="w-4 h-4 text-[#c92127] shrink-0" />
                      <span>{deliv}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Core Technologies &amp; Tools
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedService.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-lg bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </div>

            {/* Modal Bottom Actions */}
            <div className="border-t border-slate-100 pt-5 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <a
                  href={`https://wa.me/${OWNER_INFO.whatsappNumber}?text=Hi%20Vidyasagar,%20I%20am%20inquiring%20about%20your%20service:%20${encodeURIComponent(selectedService.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 px-4 py-2.5 rounded-xl transition-colors inline-flex items-center gap-2 shadow-xs"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp Inquiry</span>
                </a>

                <a
                  href="tel:+919598530662"
                  className="text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-200 px-3.5 py-2.5 rounded-xl transition-colors inline-flex items-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call +91 95985-30662</span>
                </a>
              </div>

              <button
                onClick={() => handleInquire(selectedService.title)}
                className="text-xs font-bold text-white bg-[#c92127] hover:bg-red-700 px-5 py-2.5 rounded-xl shadow-md transition-colors inline-flex items-center gap-2 cursor-pointer"
              >
                <span>Book This Service</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
