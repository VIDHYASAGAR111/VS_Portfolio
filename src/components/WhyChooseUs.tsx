import React from 'react';
import { 
  Users, MessageSquare, Zap, CheckCircle2, ShieldCheck, Award, 
  Check, X, Sparkles, Terminal, Database, Smartphone, Globe
} from 'lucide-react';
import { WHY_CHOOSE_US, TECH_STACK, OWNER_INFO } from '../data/portfolioData';

export const WhyChooseUs: React.FC = () => {
  const getFeatureIcon = (icon: string) => {
    switch (icon) {
      case 'Users':
        return <Users className="w-5 h-5 text-blue-600" />;
      case 'MessageSquare':
        return <MessageSquare className="w-5 h-5 text-emerald-600" />;
      case 'Zap':
        return <Zap className="w-5 h-5 text-amber-600" />;
      case 'CheckCircle2':
        return <CheckCircle2 className="w-5 h-5 text-indigo-600" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-teal-600" />;
      case 'Award':
        return <Award className="w-5 h-5 text-rose-600" />;
      default:
        return <CheckCircle2 className="w-5 h-5 text-blue-600" />;
    }
  };

  return (
    <section id="why-us" className="py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider">
            WHY CHOOSE US
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            WE DESIGN, BUILD BRANDS & DIGITAL EXPERIENCES
          </h2>
          <p className="text-base text-slate-600">
            We combine high-level Computer Science rigor with real-world digital marketing expertise to deliver bespoke websites, scalable mobile applications, and high-ROI digital campaigns.
          </p>
        </div>

        {/* 6 Value Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {WHY_CHOOSE_US.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-blue-300 hover:shadow-lg transition-all duration-300 space-y-3"
            >
              <div className="w-11 h-11 rounded-xl bg-white border border-slate-200 flex items-center justify-center shadow-xs">
                {getFeatureIcon(item.icon)}
              </div>
              <h3 className="text-base font-bold text-slate-900">
                {item.title}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Comparison Matrix Table */}
        <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 sm:p-8 mb-16 shadow-xs">
          <div className="text-center max-w-xl mx-auto mb-8 space-y-2">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
              How VS Technology Compares
            </h3>
            <p className="text-xs text-slate-500">
              See why growing enterprises and founders choose Vidyasagar Chaurasiya.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-slate-200 text-slate-700 font-bold">
                  <th className="py-3 px-4">Standard Deliverable / Feature</th>
                  <th className="py-3 px-4 text-slate-400">Generic Freelancer</th>
                  <th className="py-3 px-4 text-slate-400">Traditional Agency</th>
                  <th className="py-3 px-4 text-blue-700 bg-blue-50/80 rounded-t-xl font-extrabold">VS Technology (PVT. LTD.)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-600">
                <tr>
                  <td className="py-3.5 px-4 font-semibold text-slate-800">Direct WhatsApp & Founder Access</td>
                  <td className="py-3.5 px-4 text-rose-500 font-medium flex items-center gap-1"><X className="w-3.5 h-3.5" /> Rare / Disappears</td>
                  <td className="py-3.5 px-4 text-slate-500">Only via account managers</td>
                  <td className="py-3.5 px-4 text-emerald-700 bg-blue-50/50 font-bold flex items-center gap-1.5"><Check className="w-4 h-4 text-emerald-600" /> Direct with Vidyasagar</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-semibold text-slate-800">100% Core Web Vitals & SEO Setup</td>
                  <td className="py-3.5 px-4 text-rose-500 flex items-center gap-1"><X className="w-3.5 h-3.5" /> Ignored</td>
                  <td className="py-3.5 px-4 text-slate-500">Extra $1,000+ add-on</td>
                  <td className="py-3.5 px-4 text-emerald-700 bg-blue-50/50 font-bold flex items-center gap-1.5"><Check className="w-4 h-4 text-emerald-600" /> Included Standard</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-semibold text-slate-800">Post-Launch Warranty & Monitoring</td>
                  <td className="py-3.5 px-4 text-rose-500 flex items-center gap-1"><X className="w-3.5 h-3.5" /> None</td>
                  <td className="py-3.5 px-4 text-slate-500">Costly retainer required</td>
                  <td className="py-3.5 px-4 text-emerald-700 bg-blue-50/50 font-bold flex items-center gap-1.5"><Check className="w-4 h-4 text-emerald-600" /> 30-60 Days Included</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-semibold text-slate-800">Clean, Modular TypeScript / React Code</td>
                  <td className="py-3.5 px-4 text-slate-500">Spaghetti or pirated themes</td>
                  <td className="py-3.5 px-4 text-slate-500">Outsourced overseas</td>
                  <td className="py-3.5 px-4 text-emerald-700 bg-blue-50/50 font-bold flex items-center gap-1.5"><Check className="w-4 h-4 text-emerald-600" /> Enterprise CSE Grade</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-semibold text-slate-800">Transparent Milestone Invoicing</td>
                  <td className="py-3.5 px-4 text-rose-500 flex items-center gap-1"><X className="w-3.5 h-3.5" /> Unpredictable</td>
                  <td className="py-3.5 px-4 text-slate-500">Heavy overhead markups</td>
                  <td className="py-3.5 px-4 text-emerald-700 bg-blue-50/50 font-bold flex items-center gap-1.5"><Check className="w-4 h-4 text-emerald-600" /> Fixed Milestones</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Tech Stack Matrix */}
        <div className="rounded-2xl bg-slate-900 text-white p-8 space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-6">
            <div>
              <div className="text-blue-400 text-xs font-mono font-bold tracking-wider uppercase mb-1">
                Engineering Capabilities
              </div>
              <h3 className="text-2xl font-bold">
                Modern Technology Ecosystem
              </h3>
            </div>
            <span className="text-xs text-slate-400">
              Zero legacy baggage • 100% Production-Grade Tooling
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TECH_STACK.map((group, idx) => (
              <div key={idx} className="bg-slate-800/60 rounded-xl p-5 border border-slate-700/60 space-y-3">
                <h4 className="text-sm font-bold text-slate-200 flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-blue-400" />
                  {group.category}
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {group.items.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded bg-slate-700/50 text-slate-300 text-xs font-mono font-medium border border-slate-600/40"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
