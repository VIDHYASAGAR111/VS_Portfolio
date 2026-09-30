import React from 'react';
import { UserCheck, Layers, GitBranch, ShieldCheck } from 'lucide-react';

export const WhyWorkWithMeSection: React.FC = () => {
  const cards = [
    {
      icon: UserCheck,
      number: '01',
      title: 'Direct 1-on-1 Communication',
      description: 'Discuss requirements, feedback and technical decisions directly with the person building your product.',
      badge: 'Zero Middlemen',
    },
    {
      icon: Layers,
      number: '02',
      title: 'Full-Cycle Development',
      description: 'Frontend, backend APIs, databases, integrations and deployment — handled as one connected development process.',
      badge: 'End-to-End',
    },
    {
      icon: GitBranch,
      number: '03',
      title: 'Milestone-Based Development',
      description: 'Break the project into clear milestones, review working progress and keep development transparent.',
      badge: 'Visible Progress',
    },
    {
      icon: ShieldCheck,
      number: '04',
      title: 'Post-Launch Support',
      description: 'Get defined post-launch support for bug fixes and technical guidance after the project goes live.',
      badge: 'Peace of Mind',
    },
  ];

  return (
    <section id="why-me" className="py-16 sm:py-20 bg-slate-50/70 border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <span>Independent Engineer Advantage</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Why Hire an Independent Freelance Engineer?
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            By eliminating agency bloat, you get direct engineering accountability, rapid iterations, and honest technical collaboration.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-xs hover:shadow-md hover:border-slate-300 transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-slate-100 text-slate-900 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono font-bold text-slate-400 bg-slate-50 border border-slate-100 px-2.5 py-1 rounded-md">
                      {card.number}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 tracking-tight">
                    {card.title}
                  </h3>

                  <p className="mt-2.5 text-sm text-slate-600 leading-relaxed font-normal">
                    {card.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] font-semibold text-blue-600">
                    {card.badge}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
