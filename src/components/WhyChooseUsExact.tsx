import React from 'react';
import { ArrowRight } from 'lucide-react';

interface WhyChooseUsExactProps {
  onContactClick?: () => void;
}

export const WhyChooseUsExact: React.FC<WhyChooseUsExactProps> = ({ onContactClick }) => {
  const DEFAULT_IMAGE = '/src/assets/images/why_choose_us_team_1790772347598.jpg';
  const [teamImage, setTeamImage] = React.useState<string>(() => {
    return localStorage.getItem('why_choose_us_custom_image') || DEFAULT_IMAGE;
  });
  const fileInputRef = React.useRef<HTMLInputElement | null>(null);

  const handleImageFile = (file: File) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === 'string') {
        setTeamImage(reader.result);
        localStorage.setItem('why_choose_us_custom_image', reader.result);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleScrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onContactClick) {
      onContactClick();
    } else {
      const contactEl = document.getElementById('contact');
      if (contactEl) {
        contactEl.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section id="why-choose-us" className="py-16 sm:py-24 bg-white border-b border-slate-100 scroll-mt-20">
      <span id="why-us" className="block relative -top-24 invisible" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          
          {/* Left Column: Software Engineering Collaboration Photo */}
          <div 
            className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200/80 group cursor-pointer"
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => {
              e.preventDefault();
              if (e.dataTransfer.files?.[0]) handleImageFile(e.dataTransfer.files[0]);
            }}
            onClick={() => fileInputRef.current?.click()}
            title="Click or drag & drop to replace with your exact image"
          >
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) handleImageFile(file);
              }}
            />
            <img
              src={teamImage}
              alt="VS Technology Engineering Collaboration & Architecture Planning"
              loading="lazy"
              decoding="async"
              referrerPolicy="no-referrer"
              className="w-full h-[320px] sm:h-[420px] lg:h-[480px] object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-60 pointer-events-none" />
            <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-xs p-3.5 rounded-xl border border-white/50 text-xs text-slate-800 flex items-center justify-between shadow-lg pointer-events-none">
              <span className="font-bold text-[#1d357e]">VS Technology</span>
              <span className="text-slate-600 font-medium">Direct Engineering Ownership</span>
            </div>
          </div>

          {/* Right Column: Heading, Description & Bullet List */}
          <div className="space-y-6">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#111827] tracking-tight">
              Why choose us?
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              With deep technical expertise across modern full-stack development, cloud integrations, and responsive UI engineering, we deliver robust solutions tailored specifically to your requirements. Key reasons to work with us:
            </p>

            <ul className="space-y-3 sm:space-y-3.5 text-sm sm:text-base text-slate-700">
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#273691] shrink-0" />
                <span>We are reliable</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#273691] shrink-0" />
                <span>We have a result-centric and client-friendly approach</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#273691] shrink-0" />
                <span>We have a strong quality assurance policy in place</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#273691] shrink-0" />
                <span>We offer comprehensive real time support to our clients</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#273691] shrink-0" />
                <span>We are a cost effective option to go with</span>
              </li>
            </ul>

            <div className="pt-2">
              <p className="text-sm sm:text-base text-slate-700 flex items-center gap-2">
                <span>Still have any doubts,</span>
                <a
                  href="#contact"
                  onClick={handleScrollToContact}
                  className="text-[#273691] hover:text-[#1d357e] font-bold underline inline-flex items-center gap-1 group cursor-pointer transition-colors"
                >
                  <span>let us talk!</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
