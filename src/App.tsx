import React, { useState, useEffect } from 'react';
import { TopBar } from './components/TopBar';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ExperienceBanner } from './components/ExperienceBanner';
import { ServicesSection } from './components/ServicesSection';
import { WhyChooseUsExact } from './components/WhyChooseUsExact';
import { HowWeWorkSection } from './components/HowWeWorkSection';
import { ClientVideosSection } from './components/ClientVideosSection';
import { IndustryWeServedSection } from './components/IndustryWeServedSection';
import { PortfolioSection } from './components/PortfolioSection';
import { ProjectEstimator } from './components/ProjectEstimator';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { InquiriesViewerModal } from './components/InquiriesViewerModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { Footer } from './components/Footer';

export default function App() {
  const [inquiriesModalOpen, setInquiriesModalOpen] = useState(false);
  const [inquiriesCount, setInquiriesCount] = useState(1);
  const [selectedService, setSelectedService] = useState('Website Design & Development');
  const [selectedBudget, setSelectedBudget] = useState('₹35,000 - ₹75,000 (Growth / Custom)');
  const [selectedMessage, setSelectedMessage] = useState('');

  // Fetch initial count of inquiries from backend to verify backend connectivity
  const fetchInquiriesCount = async () => {
    try {
      const res = await fetch('/api/inquiries');
      if (res.ok) {
        const data = await res.json();
        if (data && typeof data.count === 'number') {
          setInquiriesCount(data.count);
        }
      }
    } catch (err) {
      // Backend may be initializing
    }
  };

  useEffect(() => {
    fetchInquiriesCount();
  }, []);

  const handleSelectServiceForQuote = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
    setSelectedMessage(`Hi Vidyasagar, I am interested in discussing the "${serviceTitle}" package for our business.`);
  };

  const handleApplyEstimate = (service: string, budget: string, note: string) => {
    setSelectedService(service);
    setSelectedBudget(budget);
    setSelectedMessage(note);
  };

  return (
    <div id="app-root" className="min-h-screen flex flex-col bg-white text-slate-900 font-sans selection:bg-blue-600 selection:text-white">
      {/* Top Notification and Direct Contact Header */}
      <TopBar />

      {/* Primary Sticky Navigation */}
      <Navbar
        onOpenInquiries={() => setInquiriesModalOpen(true)}
        inquiriesCount={inquiriesCount}
      />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero />

        {/* 3+ Years Experience Banner & Tech Stack */}
        <ExperienceBanner />

        {/* Services Showcase */}
        <ServicesSection onSelectServiceForQuote={handleSelectServiceForQuote} />

        {/* 1. Why Choose Us (Image 1 - Table Collaboration & Core Value Pillars) */}
        <WhyChooseUsExact
          onContactClick={() => {
            const contactEl = document.getElementById('contact');
            if (contactEl) {
              contactEl.scrollIntoView({ behavior: 'smooth' });
            }
          }}
        />

        {/* 2. How We Work? (Image 2 - 7-Step Workflow with Royal Blue Banner) */}
        <HowWeWorkSection />

        {/* 3. Client Video Testimonials (Image 3 - 6 Video Grid with Real YouTube Reviews) */}
        <ClientVideosSection />

        {/* 4. Industry We Served (Image 4 & 5 - Royal Blue Full-Width Industry Bar) */}
        <IndustryWeServedSection />

        {/* Portfolio & Case Studies */}
        <PortfolioSection />

        {/* Interactive Scope & Cost Calculator */}
        <ProjectEstimator onApplyEstimate={handleApplyEstimate} />

        {/* Client Reviews & Testimonials & FAQ */}
        <TestimonialsSection />

        {/* Backend-Integrated Contact Form with direct WhatsApp and Email */}
        <ContactSection
          initialService={selectedService}
          initialBudget={selectedBudget}
          initialMessage={selectedMessage}
          onInquirySubmitted={() => {
            fetchInquiriesCount();
          }}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating 1-Click WhatsApp Quick-Chat Widget */}
      <FloatingWhatsApp />

      {/* Backend Inquiries / Lead Tracking Modal */}
      <InquiriesViewerModal
        isOpen={inquiriesModalOpen}
        onClose={() => setInquiriesModalOpen(false)}
      />
    </div>
  );
}
