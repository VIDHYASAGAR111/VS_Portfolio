import React, { useState } from 'react';
import { Calculator, Check, ArrowRight, Sparkles, MessageCircle } from 'lucide-react';
import { OWNER_INFO } from '../data/portfolioData';

interface ProjectEstimatorProps {
  onApplyEstimate: (service: string, budget: string, note: string) => void;
}

export const ProjectEstimator: React.FC<ProjectEstimatorProps> = ({ onApplyEstimate }) => {
  const [projectType, setProjectType] = useState<string>('Corporate Website');
  const [features, setFeatures] = useState<string[]>(['Payment Gateway', 'SEO & Schema']);
  const [timeline, setTimeline] = useState<string>('Standard (2-3 Weeks)');

  const projectTypes = [
    { name: 'Corporate Website', basePrice: 20000, baseDays: 10 },
    { name: 'E-Commerce Portal', basePrice: 45000, baseDays: 20 },
    { name: 'Mobile App (iOS/Android)', basePrice: 65000, baseDays: 30 },
    { name: 'Graphic Designing & Branding', basePrice: 15000, baseDays: 7 },
    { name: 'Video Editing & Motion', basePrice: 18000, baseDays: 8 },
    { name: 'Full-Stack Custom SaaS', basePrice: 85000, baseDays: 40 },
    { name: 'SEO & Performance Marketing', basePrice: 18000, baseDays: 14 },
  ];

  const availableFeatures = [
    { name: 'Payment Gateway (Razorpay/UPI)', cost: 6000 },
    { name: 'WhatsApp Business API Bot', cost: 8000 },
    { name: 'Custom Admin Dashboard', cost: 12000 },
    { name: 'Multi-Language / Localization', cost: 7000 },
    { name: 'SEO & Schema Markup', cost: 5000 },
    { name: 'High-Concurrency Cloud Setup', cost: 10000 },
  ];

  const toggleFeature = (name: string) => {
    if (features.includes(name)) {
      setFeatures(features.filter((f) => f !== name));
    } else {
      setFeatures([...features, name]);
    }
  };

  const selectedBase = projectTypes.find((p) => p.name === projectType) || projectTypes[0];
  const featureCost = features.reduce((acc, featName) => {
    const feat = availableFeatures.find((f) => f.name === featName);
    return acc + (feat ? feat.cost : 0);
  }, 0);

  const totalEstimate = selectedBase.basePrice + featureCost;
  const estimatedDays = selectedBase.baseDays + Math.round(features.length * 2);

  const handleApply = () => {
    const budgetStr = `₹${totalEstimate.toLocaleString('en-IN')}`;
    const note = `Selected Project Type: ${projectType} with features: ${features.join(', ')}. Estimated timeline: ~${estimatedDays} days.`;
    onApplyEstimate(projectType, budgetStr, note);

    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="estimator" className="py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider">
            <Calculator className="w-3.5 h-3.5" />
            Instant Project Cost Estimator
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Calculate Your Project Scope & Ballpark Estimate
          </h2>
          <p className="text-sm text-slate-600">
            Get an instant transparent estimate tailored to your functional needs, with no obligation.
          </p>
        </div>

        {/* Calculator Body */}
        <div className="bg-slate-50 rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Controls */}
            <div className="lg:col-span-7 space-y-6">
              {/* Step 1: Project Type */}
              <div className="space-y-2.5">
                <label className="text-xs font-bold uppercase text-slate-500 tracking-wider">
                  1. Select Platform / Project Type
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {projectTypes.map((pt) => (
                    <button
                      key={pt.name}
                      type="button"
                      onClick={() => setProjectType(pt.name)}
                      className={`p-3 rounded-xl text-left text-xs font-semibold border transition-all cursor-pointer ${
                        projectType === pt.name
                          ? 'bg-blue-50 text-blue-800 border-blue-400 shadow-xs'
                          : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      <div>{pt.name}</div>
                      <div className="text-[11px] text-slate-400 font-normal">
                        Starts ~₹{pt.basePrice.toLocaleString('en-IN')}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Features */}
              <div className="space-y-2.5">
                <label className="text-xs font-bold uppercase text-slate-500 tracking-wider">
                  2. Select Desired Features & Integrations
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {availableFeatures.map((feat) => {
                    const isSelected = features.includes(feat.name);
                    return (
                      <button
                        key={feat.name}
                        type="button"
                        onClick={() => toggleFeature(feat.name)}
                        className={`p-2.5 rounded-xl text-left text-xs flex items-center justify-between border transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-blue-50 text-blue-800 border-blue-400 font-medium'
                            : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300'
                        }`}
                      >
                        <span className="truncate pr-2">{feat.name}</span>
                        <div
                          className={`w-4 h-4 rounded flex items-center justify-center shrink-0 ${
                            isSelected ? 'bg-blue-600 text-white' : 'border border-slate-300'
                          }`}
                        >
                          {isSelected && <Check className="w-3 h-3" />}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Estimate Summary Card */}
            <div className="lg:col-span-5 flex flex-col justify-between bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-6">
              <div>
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <span className="text-xs font-bold uppercase text-slate-500">
                    Project Estimate
                  </span>
                  <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">
                    Transparent Scope
                  </span>
                </div>

                <div className="mt-4 space-y-3">
                  <div>
                    <span className="text-xs text-slate-400">Estimated Investment:</span>
                    <div className="text-3xl font-extrabold text-slate-900 font-mono">
                      ₹{totalEstimate.toLocaleString('en-IN')}
                      <span className="text-xs text-slate-400 font-sans font-normal ml-1">
                        (approx)
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2 bg-slate-50 p-3 rounded-xl border border-slate-100 text-xs">
                    <div>
                      <span className="text-slate-400 block text-[11px]">Est. Timeline</span>
                      <strong className="text-slate-800 font-mono">~{estimatedDays} Days</strong>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[11px]">Warranty</span>
                      <strong className="text-emerald-700">45 Days Free</strong>
                    </div>
                  </div>

                  <div className="text-xs text-slate-500 space-y-1 pt-1">
                    <p>✓ Complete Source Code Ownership</p>
                    <p>✓ 100% Mobile Responsive Layout</p>
                    <p>✓ Direct WhatsApp updates with Vidyasagar</p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2 pt-4 border-t border-slate-100">
                <button
                  type="button"
                  onClick={handleApply}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold shadow-xs transition-colors cursor-pointer"
                >
                  <span>Apply to Contact Form</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <a
                  href={`https://wa.me/${OWNER_INFO.whatsappNumber}?text=Hi%20Vidyasagar,%20I%20used%20your%20estimator:%20${encodeURIComponent(projectType)}%20(Estimated%20₹${totalEstimate.toLocaleString('en-IN')})`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 text-xs font-semibold transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Send Estimate via WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
