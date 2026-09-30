import React from 'react';
import { Compass, Palette, Code2, CheckCircle2, Rocket, Headphones, TrendingUp } from 'lucide-react';

interface WorkStep {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  alt: string;
}

const WORK_STEPS: WorkStep[] = [
  {
    name: 'PLAN',
    icon: Compass,
    alt: 'Project Planning & Strategy'
  },
  {
    name: 'DESIGN',
    icon: Palette,
    alt: 'UI / UX Prototype Design'
  },
  {
    name: 'DEVELOP',
    icon: Code2,
    alt: 'Clean Code Full-Stack Development'
  },
  {
    name: 'TEST',
    icon: CheckCircle2,
    alt: 'Rigorous Quality Assurance & Testing'
  },
  {
    name: 'DELIVER',
    icon: Rocket,
    alt: 'Production Deployment & Delivery'
  },
  {
    name: 'SUPPORT',
    icon: Headphones,
    alt: '24/7 Comprehensive Client Support'
  },
  {
    name: 'MARKET',
    icon: TrendingUp,
    alt: 'SEO & Performance Digital Marketing'
  }
];

export const HowWeWorkSection: React.FC = () => {
  return (
    <section 
      id="how-we-work" 
      className="relative py-16 sm:py-20 bg-cover bg-center text-white overflow-hidden"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80')`
      }}
    >
      {/* Deep Royal Blue Overlay */}
      <div className="absolute inset-0 bg-[#283691]/92 backdrop-brightness-95" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Title from Image 2 & 3 */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight uppercase mb-3">
          HOW WE WORK
        </h2>
        <div className="w-16 h-1 bg-white/70 mx-auto rounded-full mb-10 sm:mb-12" />

        {/* 7 Round Circles with Icons from Website */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-5 sm:gap-6 justify-center">
          {WORK_STEPS.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div 
                key={idx} 
                className="flex flex-col items-center group cursor-pointer"
              >
                {/* White Circle Container with Hover Animation */}
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white flex items-center justify-center p-3.5 shadow-xl transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-2xl">
                  <Icon className="w-9 h-9 sm:w-10 sm:h-10 text-[#283691] group-hover:text-[#29a4d9] transition-colors" />
                </div>

                {/* Step Name in Bold Caps */}
                <h4 className="mt-3.5 text-xs sm:text-sm font-extrabold uppercase tracking-wider text-white group-hover:text-blue-200 transition-colors">
                  {step.name}
                </h4>

                <span className="text-[10px] text-blue-200/80 mt-0.5 line-clamp-1">
                  {step.alt}
                </span>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
