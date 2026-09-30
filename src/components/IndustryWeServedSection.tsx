import React from 'react';
import { 
  Car, Laptop, Zap, Film, ShoppingBag, 
  Landmark, Calculator, Building2, Scale, HeartPulse 
} from 'lucide-react';

interface IndustryItem {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
}

const INDUSTRIES: IndustryItem[] = [
  {
    name: 'Automotive Services',
    icon: Car
  },
  {
    name: 'IT / Software Services',
    icon: Laptop
  },
  {
    name: 'Energy & Utilities',
    icon: Zap
  },
  {
    name: 'Media & Entertainment',
    icon: Film
  },
  {
    name: 'Consumer Products',
    icon: ShoppingBag
  },
  {
    name: 'Banking & Financial',
    icon: Landmark
  },
  {
    name: 'Accounting Services',
    icon: Calculator
  },
  {
    name: 'Real Estate Services',
    icon: Building2
  },
  {
    name: 'Legal Services',
    icon: Scale
  },
  {
    name: 'Healthcare & Biotech',
    icon: HeartPulse
  }
];

export const IndustryWeServedSection: React.FC = () => {
  return (
    <section id="industries-served" className="py-14 sm:py-20 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#111827] tracking-tight uppercase">
            INDUSTRIES WE SERVE
          </h2>
        </div>

      </div>

      {/* Full-Width Deep Royal Blue Banner with Crisp SVG Icons & Captions */}
      <div className="w-full bg-[#203282] py-8 sm:py-12 shadow-inner">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 sm:gap-8 items-center justify-items-center">
            {INDUSTRIES.map((ind, idx) => {
              const Icon = ind.icon;
              return (
                <div 
                  key={idx}
                  className="flex flex-col items-center text-center group p-3 rounded-xl hover:bg-white/10 transition-colors duration-200 cursor-default max-w-[160px]"
                >
                  {/* Icon Container */}
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white/10 group-hover:bg-white/20 flex items-center justify-center mb-3 transition-transform duration-300 group-hover:scale-110 shadow-sm border border-white/10">
                    <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-white group-hover:text-cyan-300 transition-colors" />
                  </div>

                  {/* Industry Caption */}
                  <span className="text-xs sm:text-sm font-semibold text-white/95 leading-snug group-hover:text-amber-300 transition-colors">
                    {ind.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
