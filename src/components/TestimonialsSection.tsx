import React, { useState } from 'react';
import { ChevronDown, ShieldCheck, Clock, Zap, Headphones, HelpCircle } from 'lucide-react';
import { FAQS } from '../data/portfolioData';

export const TestimonialsSection: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Quality Assurances Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-center">
            <div className="w-10 h-10 mx-auto mb-2 rounded-full bg-blue-100 text-[#283691] flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h4 className="text-xs font-bold text-slate-900">Milestone Guarantee</h4>
            <p className="text-[11px] text-slate-500 mt-0.5">Pay in clear sprint phases</p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-center">
            <div className="w-10 h-10 mx-auto mb-2 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center">
              <Clock className="w-5 h-5" />
            </div>
            <h4 className="text-xs font-bold text-slate-900">On-Time Delivery</h4>
            <p className="text-[11px] text-slate-500 mt-0.5">Committed launch deadlines</p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-center">
            <div className="w-10 h-10 mx-auto mb-2 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center">
              <Zap className="w-5 h-5" />
            </div>
            <h4 className="text-xs font-bold text-slate-900">High Performance</h4>
            <p className="text-[11px] text-slate-500 mt-0.5">90+ Google PageSpeed score</p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-center">
            <div className="w-10 h-10 mx-auto mb-2 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center">
              <Headphones className="w-5 h-5" />
            </div>
            <h4 className="text-xs font-bold text-slate-900">Post-Launch Support</h4>
            <p className="text-[11px] text-slate-500 mt-0.5">Direct WhatsApp engineer help</p>
          </div>
        </div>

        {/* FAQs Section */}
        <div className="space-y-6">
          <div className="text-center space-y-2 mb-8">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-[#283691] text-xs font-bold uppercase tracking-wider">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>HAVE QUESTIONS?</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Frequently Asked Questions
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 max-w-xl mx-auto">
              Sabhi zaroori jankari projects, timelines, payments aur post-launch support ke bare mein.
            </p>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-slate-50/70 rounded-xl border border-slate-200/90 overflow-hidden transition-all hover:bg-slate-50"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    className="w-full flex items-center justify-between p-4 sm:p-5 text-left text-sm font-bold text-slate-900 hover:text-[#283691] transition-colors cursor-pointer"
                  >
                    <span className="pr-4">{faq.q}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-400 transition-transform duration-200 shrink-0 ${
                        isOpen ? 'rotate-180 text-[#283691]' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-4 sm:px-5 pb-5 text-xs sm:text-[13px] text-slate-600 leading-relaxed border-t border-slate-200/60 pt-3.5 bg-white">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
