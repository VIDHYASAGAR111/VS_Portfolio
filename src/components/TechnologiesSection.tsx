import React from 'react';
import { Code2, Server, Database, GitBranch, Cpu, Layers } from 'lucide-react';

export const TechnologiesSection: React.FC = () => {
  const technologies = [
    {
      name: 'React',
      category: 'Frontend Framework',
      desc: 'Component architecture, reactive state, custom hooks, and modern client performance.',
    },
    {
      name: 'Next.js',
      category: 'Full-Stack React',
      desc: 'Server-side rendering (SSR), static site generation (SSG), app router, and API routes.',
    },
    {
      name: 'TypeScript',
      category: 'Type Safety',
      desc: 'Strict type contracts, end-to-end data models, refactoring safety, and bug prevention.',
    },
    {
      name: 'Node.js',
      category: 'Backend Runtime',
      desc: 'Express, asynchronous I/O, server services, worker processes, and microservices.',
    },
    {
      name: 'Tailwind CSS',
      category: 'Styling & Design',
      desc: 'Utility-first responsive layouts, design tokens, fluid typography, and clean design systems.',
    },
    {
      name: 'PostgreSQL',
      category: 'Relational Database',
      desc: 'Relational schema design, indexes, transactional integrity, foreign keys, and complex queries.',
    },
    {
      name: 'MongoDB',
      category: 'Document Database',
      desc: 'Flexible JSON documents, aggregations, fast prototyping, and schema validation.',
    },
    {
      name: 'REST APIs',
      category: 'API Architecture',
      desc: 'Stateless endpoints, standard HTTP verbs, request validation, pagination, and error contracts.',
    },
    {
      name: 'Git',
      category: 'Version Control',
      desc: 'Clean commit histories, branching workflows, PR reviews, and atomic version tracking.',
    },
    {
      name: 'CI/CD',
      category: 'Build & Automation',
      desc: 'Automated test runners, build pipelines, lint checks, and zero-downtime deployment triggers.',
    },
  ];

  return (
    <section id="tech-stack" className="py-16 sm:py-20 bg-slate-50/70 border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <span>Engineering Stack</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Technologies I Work With
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Modern, industry-proven technologies selected for long-term maintainability, security, and developer efficiency.
          </p>
        </div>

        {/* 10 Tech Cards Grid (No fake percentages as strictly instructed) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5">
          {technologies.map((tech, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl p-4 sm:p-5 border border-slate-200/90 shadow-2xs hover:shadow-xs hover:border-blue-300 transition-all flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] font-semibold uppercase tracking-wider text-blue-600 block mb-1">
                  {tech.category}
                </span>
                <h3 className="text-base font-bold text-slate-900 tracking-tight">
                  {tech.name}
                </h3>
                <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
                  {tech.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
