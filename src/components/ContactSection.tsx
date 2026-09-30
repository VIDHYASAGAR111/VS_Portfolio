import React, { useState } from 'react';
import { 
  MessageSquare, Linkedin, Phone, Mail, MapPin, 
  Send, CheckCircle2, ArrowRight, Clock, ShieldCheck
} from 'lucide-react';

interface ContactSectionProps {
  onInquirySubmitted?: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onInquirySubmitted }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: 'Custom Web Application',
    message: '',
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const whatsappUrl = "https://wa.me/919598530662?text=Hi%20Vidyasagar,%20I%20saw%20your%20portfolio%20and%20want%20to%20discuss%20a%20project.";
  const linkedinUrl = "https://www.linkedin.com/in/vidhyasagar-cse";
  const phoneUrl = "tel:+919598530662";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          service: formData.projectType,
          budget: 'Discuss on Call / Scope',
          message: formData.message,
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        if (onInquirySubmitted) onInquirySubmitted();
      } else {
        const data = await response.json();
        setErrorMessage(data.error || 'Failed to submit. Please chat directly on WhatsApp.');
      }
    } catch (err) {
      setErrorMessage('Network issue. Please connect directly via WhatsApp or Phone.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-white border-b border-slate-100 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Required Text & Direct Action Buttons */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold uppercase tracking-wider">
              <span>Direct Collaboration</span>
            </div>

            {/* Required Heading */}
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Have an idea, redesign, or custom web project?
            </h2>

            {/* Required Text */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Tell me what you're trying to build. We can discuss the requirements, technical approach, scope and a realistic development timeline.
            </p>

            {/* Primary Action Buttons: Chat on WhatsApp & Connect on LinkedIn */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-semibold shadow-xs hover:shadow-md transition-all cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>

              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#0a66c2] hover:bg-[#084e96] text-white text-sm font-semibold shadow-xs hover:shadow-md transition-all cursor-pointer"
              >
                <Linkedin className="w-4 h-4" />
                <span>Connect on LinkedIn</span>
              </a>
            </div>

            {/* Direct Contact Details */}
            <div className="pt-6 border-t border-slate-100 space-y-3">
              <a
                href={phoneUrl}
                className="flex items-center gap-3 text-slate-700 hover:text-blue-600 transition-colors text-sm"
              >
                <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-slate-600 shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] text-slate-400 block font-medium">Direct Calling:</span>
                  <span className="font-semibold text-slate-900">+91 9598530662</span>
                </div>
              </a>

              <a
                href="mailto:vidyasagarchaurasiya38@gmail.com"
                className="flex items-center gap-3 text-slate-700 hover:text-blue-600 transition-colors text-sm"
              >
                <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-slate-600 shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] text-slate-400 block font-medium">Email Address:</span>
                  <span className="font-semibold text-slate-900">vidyasagarchaurasiya38@gmail.com</span>
                </div>
              </a>

              <div className="flex items-center gap-3 text-slate-700 text-sm">
                <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-slate-600 shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] text-slate-400 block font-medium">Location:</span>
                  <span className="font-semibold text-slate-900">Noida / Delhi-NCR, India (Available Worldwide)</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Direct Message Form */}
          <div className="lg:col-span-6">
            <div className="bg-slate-50/70 rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-xs">
              
              <h3 className="text-lg font-bold text-slate-900 tracking-tight mb-1">
                Send a Project Note
              </h3>
              <p className="text-xs text-slate-500 mb-6">
                Receive a direct response from Vidyasagar with technical feedback.
              </p>

              {submitted ? (
                <div className="p-6 rounded-xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-base font-bold text-emerald-900">
                    Message Received!
                  </h4>
                  <p className="text-xs text-emerald-700 max-w-sm mx-auto leading-relaxed">
                    Thank you. I have received your message and will review your technical requirements. You can also chat on WhatsApp for faster response.
                  </p>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-600 text-white text-xs font-semibold shadow-xs mt-2"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Open WhatsApp</span>
                  </a>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {errorMessage && (
                    <div className="p-3 rounded-lg bg-rose-50 border border-rose-200 text-rose-700 text-xs">
                      {errorMessage}
                    </div>
                  )}

                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-bold text-slate-700 mb-1">
                      Your Name *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. John Doe / Founder"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-slate-200 text-slate-900 text-sm focus:outline-hidden focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all placeholder:text-slate-400"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-bold text-slate-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@company.com"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-slate-200 text-slate-900 text-sm focus:outline-hidden focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all placeholder:text-slate-400"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-phone" className="block text-xs font-bold text-slate-700 mb-1">
                        WhatsApp / Phone
                      </label>
                      <input
                        id="contact-phone"
                        type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91..."
                        className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-slate-200 text-slate-900 text-sm focus:outline-hidden focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all placeholder:text-slate-400"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-project-type" className="block text-xs font-bold text-slate-700 mb-1">
                      Project Type
                    </label>
                    <select
                      id="contact-project-type"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-slate-200 text-slate-900 text-sm focus:outline-hidden focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                    >
                      <option>Custom Web Application</option>
                      <option>Responsive Website / Landing Page</option>
                      <option>Full-Stack Application</option>
                      <option>Backend API / Database Setup</option>
                      <option>Bug Fixes &amp; Code Refactoring</option>
                      <option>Cloud Deployment &amp; CI/CD</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-bold text-slate-700 mb-1">
                      What are you trying to build? *
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Share a brief overview of your product, features needed, or current challenges..."
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-slate-200 text-slate-900 text-sm focus:outline-hidden focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all placeholder:text-slate-400 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-slate-900 hover:bg-blue-600 text-white text-sm font-semibold shadow-xs hover:shadow-md transition-all cursor-pointer disabled:opacity-60"
                  >
                    {submitting ? (
                      <span>Sending message...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message Directly</span>
                      </>
                    )}
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
