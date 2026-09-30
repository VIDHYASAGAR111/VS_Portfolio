import React from 'react';
import { Compass, FileText, Code2, CheckCircle2, Rocket } from 'lucide-react';

export const DevelopmentProcessSection: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'Understand',
      desc: 'Discuss the idea, requirements, users and technical needs.',
      icon: Compass,
    },
    {
      step: '02',
      title: 'Plan',
      desc: 'Define scope, features, milestones and development approach.',
      icon: FileText,
    },
    {
      step: '03',
      title: 'Build',
      desc: 'Develop the frontend, backend, database and integrations.',
      icon: Code2,
    },
    {
      step: '04',
      title: 'Review',
      desc: 'Share working progress, collect feedback and refine the agreed scope.',
      icon: CheckCircle2,
    },
    {
      step: '05',
      title: 'Launch & Support',
      desc: 'Deploy the product and provide the agreed post-launch support.',
      icon: Rocket,
    },
  ];

  return (
    <section id="process" className="py-16 sm:py-20 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <span>Workflow &amp; Milestones</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            How We Work
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            A straightforward five-step lifecycle ensuring clear milestones, transparent feedback loops, and on-time launches.
          </p>
        </div>

        {/* Desktop Horizontal Timeline (5 columns) */}
        <div className="hidden lg:grid grid-cols-5 gap-4 relative">
          {/* Connecting line behind step circles */}
          <div className="absolute top-6 left-10 right-10 h-0.5 bg-slate-200 -z-0" />

          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="relative z-10 flex flex-col items-center text-center px-2 group">
                {/* Step indicator circle */}
                <div className="w-12 h-12 rounded-full bg-white border-2 border-slate-300 group-hover:border-blue-600 text-slate-800 group-hover:text-blue-600 flex items-center justify-center font-bold text-xs shadow-xs transition-all mb-4">
                  <Icon className="w-5 h-5" />
                </div>

                <span className="text-xs font-mono font-bold text-blue-600 uppercase tracking-wider">
                  Step {item.step}
                </span>

                <h3 className="text-base font-bold text-slate-900 mt-1">
                  {item.title}
                </h3>

                <p className="mt-2 text-xs text-slate-600 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Mobile / Tablet Vertical Timeline */}
        <div className="lg:hidden space-y-6 relative before:absolute before:inset-0 before:left-5 before:w-0.5 before:bg-slate-200">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="relative flex items-start gap-4 pl-1">
                {/* Dot / Icon */}
                <div className="w-10 h-10 rounded-full bg-white border-2 border-blue-600 text-blue-600 flex items-center justify-center font-bold text-xs shrink-0 shadow-xs z-10">
                  <Icon className="w-4 h-4" />
                </div>

                {/* Content Card */}
                <div className="flex-1 bg-slate-50/80 rounded-xl p-4 border border-slate-200/80">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-blue-600">
                      Step {item.step}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mt-0.5">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
