import React from 'react';
import { UserCheck, MessageSquare, Terminal, Layers, ArrowRight } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 sm:py-20 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-left sm:text-center space-y-6">
          
          {/* Subtle Tag */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold tracking-wide">
            <UserCheck className="w-3.5 h-3.5 text-blue-600" />
            <span>Independent Software Engineering</span>
          </div>

          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Work Directly With Me — No Middlemen
          </h2>

          {/* Primary Text */}
          <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
            You work directly with me throughout the project — from understanding the requirement and planning the solution to development, testing, deployment and post-launch support.
          </p>

          {/* Additional Short Text */}
          <p className="text-sm sm:text-base text-slate-500 leading-relaxed max-w-2xl mx-auto">
            Clear communication, practical technical decisions and visible progress are at the center of how I work.
          </p>

          {/* 3 Pillars Card Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 pt-8 text-left">
            <div className="p-5 rounded-xl bg-slate-50/80 border border-slate-200/80 hover:border-slate-300 transition-colors">
              <div className="w-9 h-9 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-xs mb-3">
                01
              </div>
              <h3 className="text-sm font-bold text-slate-900">
                Requirement Understanding
              </h3>
              <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                We sit down to clarify your actual product objectives, technical constraints, and user journeys before writing code.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-50/80 border border-slate-200/80 hover:border-slate-300 transition-colors">
              <div className="w-9 h-9 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-xs mb-3">
                02
              </div>
              <h3 className="text-sm font-bold text-slate-900">
                Practical Technical Choices
              </h3>
              <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                No over-engineering. Choosing proven modern tech (React, Next.js, Node.js, PostgreSQL) that keeps maintenance simple.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-50/80 border border-slate-200/80 hover:border-slate-300 transition-colors">
              <div className="w-9 h-9 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-xs mb-3">
                03
              </div>
              <h3 className="text-sm font-bold text-slate-900">
                Direct Progress Reviews
              </h3>
              <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                Review working features at regular milestones. You see steady, verifiable progress instead of status reports.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
