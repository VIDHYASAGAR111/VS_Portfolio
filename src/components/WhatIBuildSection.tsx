import React from 'react';
import { 
  Laptop, Layout, Layers, Terminal, LayoutDashboard, 
  Database, Plug, KeyRound, ArrowUpRight, Wrench, CloudUpload
} from 'lucide-react';

export const WhatIBuildSection: React.FC = () => {
  const capabilities = [
    {
      icon: Laptop,
      title: 'Custom Web Applications',
      desc: 'Bespoke web applications designed to solve specific workflow challenges, customer operations, and business processes.',
    },
    {
      icon: Layout,
      title: 'Responsive Websites',
      desc: 'Fast-loading, mobile-friendly websites that look polished and function consistently across all modern devices and screen sizes.',
    },
    {
      icon: Layers,
      title: 'Full-Stack Applications',
      desc: 'End-to-end architectures connecting clean frontend interfaces with solid backend databases, state management, and services.',
    },
    {
      icon: Terminal,
      title: 'Backend APIs',
      desc: 'Clean RESTful APIs with structured data validation, robust error handling, rate limiting, and reliable database communication.',
    },
    {
      icon: LayoutDashboard,
      title: 'Admin Dashboards',
      desc: 'Internal control panels, analytics views, content management screens, and data-entry tools for smooth business operations.',
    },
    {
      icon: Database,
      title: 'Database-Driven Applications',
      desc: 'Structured SQL/NoSQL schema design, relational queries, indexes, migrations, and persistent data modeling.',
    },
    {
      icon: Plug,
      title: 'Third-Party API Integrations',
      desc: 'Seamless connections with external payment gateways (Stripe/Razorpay), messaging (WhatsApp/SMS), email, and webhooks.',
    },
    {
      icon: KeyRound,
      title: 'Authentication & User Management',
      desc: 'Secure user login, password hashing, JWT/session handling, password recovery, and role-based permissions (RBAC).',
    },
    {
      icon: ArrowUpRight,
      title: 'Existing Website Improvements',
      desc: 'Refactoring existing codebases, modernizing UI layouts, enhancing loading speeds, and optimizing mobile responsiveness.',
    },
    {
      icon: Wrench,
      title: 'Bug Fixes & Technical Improvements',
      desc: 'Investigating subtle production bugs, diagnosing logic edge cases, fixing CSS quirks, and streamlining component code.',
    },
    {
      icon: CloudUpload,
      title: 'Deployment & Cloud Setup',
      desc: 'Setting up production build pipelines, environment configurations, SSL certificates, DNS routing, and reliable cloud hosting.',
    },
  ];

  return (
    <section id="services" className="py-16 sm:py-20 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <span>Capabilities &amp; Scope</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            What I Can Help You Build
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            From new greenfield prototypes to targeted improvements on existing systems, here are the core solutions I deliver.
          </p>
        </div>

        {/* 11 Capabilities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {capabilities.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-5 sm:p-6 rounded-xl bg-slate-50/70 border border-slate-200/80 hover:bg-white hover:border-slate-300 hover:shadow-xs transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 border border-blue-100 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
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
