import React, { useState } from 'react';
import { 
  FolderGit2, ExternalLink, Github, Code2, 
  Sparkles, CheckCircle2, ArrowRight, Layers, Laptop
} from 'lucide-react';

interface ProjectStructure {
  name: string;
  description: string;
  techStack: string[];
  screenshotPlaceholder: string;
  liveUrl?: string;
  githubUrl?: string;
  myContribution: string;
  status: 'In Development' | 'Case Study Ready' | 'Active Client Project';
}

export const SelectedWorkSection: React.FC = () => {
  // Configured placeholder structure where real projects can easily be added by Vidyasagar
  const futureProjects: ProjectStructure[] = [
    {
      name: 'Full-Stack Web Application (Upcoming Showcase)',
      description: 'End-to-end modern web application featuring user authentication, state management, RESTful APIs, and database persistence.',
      techStack: ['React', 'Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Tailwind CSS'],
      screenshotPlaceholder: 'Clean responsive interface with authentication & dashboard views',
      liveUrl: '#',
      githubUrl: 'https://github.com',
      myContribution: 'Architecture design, database schema, REST API backend, and responsive UI implementation.',
      status: 'In Development',
    },
    {
      name: 'Interactive Business Dashboard & Admin Portal',
      description: 'High-performance admin portal with real-time data visualization, operational metrics, role-based access control, and API integrations.',
      techStack: ['React', 'TypeScript', 'Tailwind CSS', 'REST APIs', 'Node.js'],
      screenshotPlaceholder: 'Operations dashboard with data tables, filters, and analytics graphs',
      liveUrl: '#',
      githubUrl: 'https://github.com',
      myContribution: 'Frontend component library, state architecture, and API consumption layers.',
      status: 'In Development',
    },
  ];

  return (
    <section id="work" className="py-16 sm:py-20 bg-slate-50/70 border-b border-slate-200/70 scroll-mt-16">
      <div id="projects" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Case Studies &amp; Code</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Selected Work
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Real code, practical implementations, and transparent architectural contributions.
          </p>
        </div>

        {/* Clean, Honest Placeholder Banner as explicitly instructed */}
        <div className="max-w-4xl mx-auto bg-white rounded-2xl border border-slate-200/90 p-8 sm:p-10 shadow-xs text-center mb-10">
          <div className="w-12 h-12 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center mx-auto mb-4">
            <Code2 className="w-6 h-6 text-blue-600" />
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
            Projects will be showcased here.
          </h3>
          <p className="mt-2 text-xs sm:text-sm text-slate-500 max-w-lg mx-auto leading-relaxed">
            I am currently curating verified case studies and open repositories. You can review the exact project data schema below or get in touch directly to discuss live code examples.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-slate-900 hover:bg-blue-600 text-white text-xs font-semibold transition-colors cursor-pointer"
            >
              <span>Discuss Your Project Needs</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://www.linkedin.com/in/vidhyasagar-cse"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold transition-colors cursor-pointer"
            >
              <span>View LinkedIn Profile</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* UI Structure for Future Real Projects (Supports Name, Description, Tech Stack, Screenshots, Live URL, GitHub URL, My Contribution) */}
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Future Project Schema &amp; Structure Preview
            </span>
            <span className="text-[11px] text-slate-500 font-medium">
              Ready for real case studies
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {futureProjects.map((project, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl border border-slate-200 p-6 flex flex-col justify-between hover:border-slate-300 transition-all shadow-2xs"
              >
                <div>
                  {/* Status Badge */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 text-[11px] font-semibold">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                      <span>{project.status}</span>
                    </span>
                    <span className="text-xs font-mono text-slate-500">Template #{idx + 1}</span>
                  </div>

                  {/* Screenshot / Visual Placeholder Box */}
                  <div className="w-full aspect-[16/9] rounded-lg bg-slate-100 border border-slate-200/80 flex flex-col items-center justify-center p-4 text-center mb-4">
                    <Laptop className="w-6 h-6 text-slate-400 mb-1.5" />
                    <span className="text-xs font-semibold text-slate-600">
                      Screenshot / Architecture Preview
                    </span>
                    <span className="text-[11px] text-slate-500 mt-1 max-w-xs">
                      {project.screenshotPlaceholder}
                    </span>
                  </div>

                  {/* Project Name */}
                  <h4 className="text-base font-bold text-slate-900 tracking-tight">
                    {project.name}
                  </h4>

                  {/* Description */}
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {project.description}
                  </p>

                  {/* My Contribution */}
                  <div className="mt-3.5 p-3 rounded-lg bg-slate-50 border border-slate-100">
                    <span className="text-[11px] font-bold text-slate-700 block mb-0.5">
                      My Contribution:
                    </span>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {project.myContribution}
                    </p>
                  </div>

                  {/* Tech Stack Badges */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 text-[11px] font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Live URL & GitHub URL Action Links */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex items-center gap-1 text-slate-500 hover:text-slate-900 cursor-not-allowed">
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Live URL (On Delivery)</span>
                    </span>
                    <span className="inline-flex items-center gap-1 text-slate-500 hover:text-slate-900 cursor-not-allowed">
                      <Github className="w-3.5 h-3.5" />
                      <span>Repository</span>
                    </span>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
