import React from 'react';
import { Code2, Layers, Cpu, Database, Server, Cloud, ShieldCheck, Zap } from 'lucide-react';

export const ExperienceBanner: React.FC = () => {
  // Verified Engineering Tech Stack & Core Competencies (100% Authentic & Copyright-Free)
  const techBadges = [
    { name: 'React 18 & Next.js', icon: Code2, desc: 'Frontend Architecture' },
    { name: 'TypeScript', icon: Layers, desc: 'Type-Safe Logic' },
    { name: 'Node.js & Express', icon: Server, desc: 'High-Throughput APIs' },
    { name: 'PostgreSQL & MongoDB', icon: Database, desc: 'Persistent Data' },
    { name: 'Tailwind CSS', icon: Cpu, desc: 'Modern Responsive UI' },
    { name: 'REST & GraphQL', icon: Zap, desc: 'API Integrations' },
    { name: 'Cloud & Docker CI/CD', icon: Cloud, desc: 'DevOps & Reliability' },
    { name: 'Sub-Second Web Vitals', icon: ShieldCheck, desc: '95+ Speed Score' },
  ];

  return (
    <section id="experience-banner" className="relative w-full bg-white">
      {/* 1. Movable/Auto-sliding Tech Badges Gradient Strip */}
      <div 
        id="partner-badges-strip"
        className="w-full py-5 sm:py-6 bg-gradient-to-r from-[#1e3a8a] via-[#283691] to-[#1e293b] overflow-hidden relative shadow-inner"
      >
        {/* Infinite Moving Marquee Track (seamlessly looped & pauses on hover) */}
        <div className="animate-partner-marquee flex items-center gap-4 sm:gap-6 px-4">
          {[...techBadges, ...techBadges].map((badge, idx) => {
            const Icon = badge.icon;
            return (
              <div 
                key={idx} 
                className="shrink-0 flex items-center gap-2.5 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-xs text-white transition-all cursor-pointer shadow-sm select-none"
                title={badge.name}
              >
                <div className="w-8 h-8 rounded-lg bg-white/15 flex items-center justify-center shrink-0">
                  <Icon className="w-4 h-4 text-cyan-300" />
                </div>
                <div className="text-left">
                  <div className="text-xs font-bold tracking-wide text-white leading-tight">
                    {badge.name}
                  </div>
                  <div className="text-[10px] text-blue-200/80 leading-tight">
                    {badge.desc}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 2. 3+ Years of Experience & Narrative */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Heading & Comprehensive Narrative */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-5 text-left">
            <h3 className="text-sm sm:text-base font-extrabold tracking-wider text-[#0b1c48] uppercase">
              3⁺ YEARS OF SOFTWARE ENGINEERING EXCELLENCE
            </h3>

            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-[#0b1c48] leading-tight sm:leading-snug">
              VS Technology — Engineering Scalable, Production-Grade Web Applications &amp; Digital Solutions
            </h2>

            <div className="space-y-3.5 text-slate-600 text-sm sm:text-[15px] leading-relaxed">
              <p>
                VS Technology is dedicated to delivering robust full-stack engineering with client-centric execution. Led by Vidyasagar Chaurasiya (CSE), we specialize in building fast, accessible, and scalable web solutions that turn business goals into seamless digital realities.
              </p>

              <p>
                From bespoke <strong className="text-slate-900 font-bold">full-stack web applications</strong> to high-converting eCommerce and cloud integrations, we deliver clean modular architectures, rapid delivery timelines, and direct engineering transparency without middleman delays.
              </p>

              <p>
                Whether you need to launch a new product from scratch, optimize performance, or rebuild existing infrastructure, partnering with us ensures precision, reliability, and dedicated support.
              </p>
            </div>
          </div>

          {/* Right Column: High-Res Modern IT Workspace Image */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg lg:max-w-none overflow-hidden rounded-xl shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80"
                alt="Modern Software Development & Engineering Workstation"
                loading="lazy"
                decoding="async"
                className="w-full h-auto object-cover transform hover:scale-[1.02] transition-transform duration-300"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
