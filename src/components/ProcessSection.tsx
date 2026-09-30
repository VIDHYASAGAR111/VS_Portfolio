import React from 'react';
import { Search, Layout, Code, CheckSquare, Rocket, ShieldCheck, Zap, ArrowRight } from 'lucide-react';
import { PROCESS_STEPS } from '../data/portfolioData';

export const ProcessSection: React.FC = () => {
  const getStepIcon = (iconName: string) => {
    switch (iconName) {
      case 'Search':
        return <Search className="w-5 h-5 text-blue-600" />;
      case 'Layout':
        return <Layout className="w-5 h-5 text-indigo-600" />;
      case 'Code':
        return <Code className="w-5 h-5 text-emerald-600" />;
      case 'CheckSquare':
        return <CheckSquare className="w-5 h-5 text-amber-600" />;
      case 'Rocket':
        return <Rocket className="w-5 h-5 text-purple-600" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-teal-600" />;
      case 'Zap':
        return <Zap className="w-5 h-5 text-rose-600" />;
      default:
        return <Code className="w-5 h-5 text-blue-600" />;
    }
  };

  return (
    <section id="process" className="py-20 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider">
            WORK PROCESS
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            HOW WE WORK TOGETHER
          </h2>
          <p className="text-base text-slate-600">
            A dedicated 7-step engineering & digital growth approach to ensure your project's success, from strategic planning to ongoing maintenance and performance marketing.
          </p>
        </div>

        {/* 7-Step Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3 sm:gap-4">
          {PROCESS_STEPS.map((item, idx) => (
            <div
              key={idx}
              className="relative rounded-2xl bg-white p-4 sm:p-5 border border-slate-200/90 shadow-xs hover:shadow-md hover:border-blue-400 transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                {/* Step Number & Icon */}
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-xl font-extrabold text-slate-300 group-hover:text-blue-500 transition-colors">
                    {item.step}
                  </span>
                  <div className="w-9 h-9 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center shadow-xs">
                    {getStepIcon(item.icon)}
                  </div>
                </div>

                <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-1.5">
                  {item.title}
                </h3>
                <p className="text-[11px] text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              {idx < PROCESS_STEPS.length - 1 && (
                <div className="hidden lg:block absolute -right-2.5 top-1/2 -translate-y-1/2 z-10 text-slate-300">
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom Banner CTA */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-700 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-lg shadow-blue-600/10">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-lg font-bold">Have a project timeline in mind?</h4>
            <p className="text-xs text-blue-100">
              Get an accurate sprint plan and cost estimate within 2 hours.
            </p>
          </div>
          <a
            href="https://wa.me/919598530662?text=Hi%20Vidyasagar,%20I%20have%20a%20project%20timeline%20to%20discuss."
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-5 py-3 rounded-xl bg-white text-blue-900 font-bold text-xs hover:bg-blue-50 transition-colors shadow-xs"
          >
            Schedule Instant Consultation
          </a>
        </div>
      </div>
    </section>
  );
};
