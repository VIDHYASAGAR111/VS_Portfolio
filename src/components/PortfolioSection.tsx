import React, { useState, useRef } from 'react';
import { 
  ExternalLink, Star, Lock, Eye, X, CheckCircle2, ArrowRight,
  Sparkles, Code2, MessageSquare, Phone, Linkedin, ShieldCheck, Clock, UserCheck,
  Send, Laptop, Zap, Check, Layers, Rocket, Upload,
  ChevronDown, ChevronUp
} from 'lucide-react';
import { OWNER_INFO } from '../data/portfolioData';

interface PortfolioProject {
  id: string;
  category: 'web' | 'mobile' | 'marketing' | 'ecommerce';
  categoryLabel: string;
  title: string;
  urlDisplay: string;
  image: string;
  description: string;
  client: string;
  tags: string[];
}

const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  // 1. Web Design & Development (6 Projects from Image 1)
  {
    id: 'web-1',
    category: 'web',
    categoryLabel: 'Web Design & Development',
    title: 'Better Mental & Physical Health',
    urlDisplay: 'demo.vstechnology.in/telehealth',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
    description: 'Comprehensive healthcare and telehealth clinical platform providing mental & physical wellness scheduling, patient intake portals, and doctor consultations.',
    client: 'MindHealth Medical Network',
    tags: ['Next.js', 'React', 'Telehealth HIPAA', 'Tailwind']
  },
  {
    id: 'web-2',
    category: 'web',
    categoryLabel: 'Web Design & Development',
    title: "Atlanta's Trusted Home & Office Cleaning",
    urlDisplay: 'demo.vstechnology.in/cleaning-portal',
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80',
    description: 'High-conversion commercial & residential cleaning booking portal featuring interactive instant quotation calculators and calendar scheduling.',
    client: 'Atlanta Commercial Cleaning',
    tags: ['Next.js', 'Booking Engine', 'Local SEO', 'Lead Funnel']
  },
  {
    id: 'web-3',
    category: 'web',
    categoryLabel: 'Web Design & Development',
    title: 'Commercial Cleaning Service in Pittsburgh',
    urlDisplay: 'demo.vstechnology.in/facility-clean',
    image: 'https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?auto=format&fit=crop&w=800&q=80',
    description: 'Enterprise corporate janitorial and facility maintenance platform with real-time quote generation and job tracking.',
    client: 'Keystone Facility Services',
    tags: ['React', 'Enterprise Web', 'Speed 99/100', 'CRO']
  },
  {
    id: 'web-4',
    category: 'web',
    categoryLabel: 'Web Design & Development',
    title: 'Donor Revenue with AI-Fundraising Systems',
    urlDisplay: 'demo.vstechnology.in/fundraising-ai',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80',
    description: 'Next-gen non-profit donor acquisition and high-performance revenue management powered by AI automations and gift recurring subscriptions.',
    client: 'Global Donor Growth Partners',
    tags: ['AI Integrations', 'Stripe Recurring', 'Donor CRM', 'Analytics']
  },
  {
    id: 'web-5',
    category: 'web',
    categoryLabel: 'Web Design & Development',
    title: 'Red Light Therapy & Wellness Clinic',
    urlDisplay: 'demo.vstechnology.in/wellness-clinic',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80',
    description: 'Aesthetic luxury med-spa and light therapy clinic website with treatment plan catalogs, doctor bios, and online appointment booking.',
    client: 'Luxe Wellness Studio',
    tags: ['Luxury Aesthetics', 'Online Booking', 'Payment Gateway', 'Mobile UI']
  },
  {
    id: 'web-6',
    category: 'web',
    categoryLabel: 'Web Design & Development',
    title: 'Experience Luxury, Travel Like Royalty',
    urlDisplay: 'demo.vstechnology.in/luxury-travel',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
    description: 'Ultra-luxury VIP travel, yacht charter, and customized bespoke holiday concierge booking experience with multi-currency checkout.',
    client: 'Royal Luxury Concierge',
    tags: ['Yacht Charter', 'VIP Concierge', 'Multi-Currency', 'Interactive Maps']
  },
  {
    id: 'web-7',
    category: 'web',
    categoryLabel: 'Web Design & Development',
    title: 'Cloud Analytics & FinTech SaaS Dashboard',
    urlDisplay: 'cloudmetrics.io',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    description: 'High-frequency telemetry dashboard with interactive chart visualizations, cashflow predictions, and real-time bank account aggregation.',
    client: 'FinMetrics Software Inc',
    tags: ['Next.js 14', 'TypeScript', 'Tailwind', 'Chart.js']
  },
  {
    id: 'web-8',
    category: 'web',
    categoryLabel: 'Web Design & Development',
    title: 'Interactive EdTech Student Learning Platform',
    urlDisplay: 'edusphere.learn',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80',
    description: 'Virtual classroom portal with live quiz assessments, course progress tracking, interactive video players, and certificates.',
    client: 'EduSphere Academy',
    tags: ['React', 'Node.js', 'Video Streaming', 'Gamification']
  },
  {
    id: 'web-9',
    category: 'web',
    categoryLabel: 'Web Design & Development',
    title: 'Enterprise Corporate Janitorial Management',
    urlDisplay: 'facilitypro.com',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    description: 'B2B facility maintenance dispatch system with real-time job allocation, automated invoicing, and multi-branch client portals.',
    client: 'FacilityPro Solutions',
    tags: ['React', 'Express API', 'PostgreSQL', 'PDF Invoicing']
  },
  {
    id: 'web-10',
    category: 'web',
    categoryLabel: 'Web Design & Development',
    title: 'Modern Architecture & Interior Studio Portfolio',
    urlDisplay: 'archistudio.design',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80',
    description: 'Minimalist high-aesthetic portfolio showcasing 3D architectural renders, project case studies, and instant client briefing forms.',
    client: 'ArchiStudio NYC',
    tags: ['Sub-second Load', 'Tailwind CSS', 'Headless CMS', 'SEO #1']
  },
  {
    id: 'web-11',
    category: 'web',
    categoryLabel: 'Web Design & Development',
    title: 'Logistics Fleet Tracking & Route Optimization',
    urlDisplay: 'fleettracker.net',
    image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=800&q=80',
    description: 'Real-time GPS dispatch and tracking system with fuel analytics, driver shift schedules, and proof-of-delivery signatures.',
    client: 'TransGlobal Fleet',
    tags: ['Mapbox API', 'WebSockets', 'REST APIs', 'React']
  },
  {
    id: 'web-12',
    category: 'web',
    categoryLabel: 'Web Design & Development',
    title: 'Legal Counsel & Case Management Portal',
    urlDisplay: 'apexlegal.law',
    image: 'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&w=800&q=80',
    description: 'Confidential client intake, encrypted document exchange, and legal consultation booking platform for corporate attorneys.',
    client: 'Apex Legal Partners',
    tags: ['Secure Auth', 'Document Encryption', 'Calendly Sync', 'HIPAA/GDPR']
  },

  // 2. Mobile Application (6 Projects)
  {
    id: 'mob-1',
    category: 'mobile',
    categoryLabel: 'Mobile Application',
    title: 'Food & Gourmet Delivery Application',
    urlDisplay: 'demo.vstechnology.in/food-delivery',
    image: 'https://images.unsplash.com/photo-1526367790999-0150786686a2?auto=format&fit=crop&w=800&q=80',
    description: 'Real-time order tracking, merchant partner dashboard, and driver routing native mobile app for iOS and Android.',
    client: 'QuickBite Delivery Network',
    tags: ['React Native', 'Node.js', 'Google Maps API', 'Push Notifications']
  },
  {
    id: 'mob-2',
    category: 'mobile',
    categoryLabel: 'Mobile Application',
    title: 'Instant Express Grocery Mobile App',
    urlDisplay: 'demo.vstechnology.in/express-grocery',
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80',
    description: 'Specialty organic grocery delivery application with smart barcode search, loyalty rewards, and rapid doorstep delivery.',
    client: 'Express Grocery Co.',
    tags: ['Flutter', 'Firebase', 'Real-Time Inventory', 'Payment Gateway']
  },
  {
    id: 'mob-3',
    category: 'mobile',
    categoryLabel: 'Mobile Application',
    title: 'Retail Brand Mobile Catalog & E-Shop',
    urlDisplay: 'demo.vstechnology.in/retail-catalog',
    image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=800&q=80',
    description: 'Fast-moving consumer goods mobile retail catalog with multi-lingual support, order tracking, and discount coupon wallet.',
    client: 'Global Retail Hub',
    tags: ['iOS & Android', 'Commerce App', 'Bilingual', 'Cart Engine']
  },
  {
    id: 'mob-4',
    category: 'mobile',
    categoryLabel: 'Mobile Application',
    title: 'Sneaker & Streetwear Trading App',
    urlDisplay: 'demo.vstechnology.in/sneaker-market',
    image: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=800&q=80',
    description: 'Peer-to-peer authenticated sneaker and streetwear trading marketplace with escrow protection and buyer authenticity verification.',
    client: 'Urban Kicks Exchange',
    tags: ['React Native', 'Escrow System', 'Stripe Connect', 'Chat Engine']
  },
  {
    id: 'mob-5',
    category: 'mobile',
    categoryLabel: 'Mobile Application',
    title: 'Apparel & Boutique Shopping App',
    urlDisplay: 'demo.vstechnology.in/fashion-boutique',
    image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=800&q=80',
    description: 'Curated high-fashion apparel mobile boutique with augmented reality virtual try-on and personalized stylist recommendations.',
    client: 'Mode Boutique Studio',
    tags: ['Mobile UX', 'Tailwind', 'Push Marketing', 'Sub-second Checkout']
  },
  {
    id: 'mob-6',
    category: 'mobile',
    categoryLabel: 'Mobile Application',
    title: 'Real Estate Search & Property Finder',
    urlDisplay: 'demo.vstechnology.in/property-search',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80',
    description: 'MLS synchronized real estate search application with interactive neighborhood maps, mortgage calculators, and virtual 3D tours.',
    client: 'Prime Realty Group',
    tags: ['MLS API', 'Interactive Maps', 'Mortgage Tools', 'Fast Sync']
  },
  {
    id: 'mob-7',
    category: 'mobile',
    categoryLabel: 'Mobile Application',
    title: 'Crypto Vault & Web3 DeFi Portfolio',
    urlDisplay: 'cryptovault.app',
    image: 'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?auto=format&fit=crop&w=800&q=80',
    description: 'Non-custodial cryptocurrency mobile wallet with token swaps, biometric security, real-time gas tracking, and DeFi yield overview.',
    client: 'CryptoVault Protocol',
    tags: ['React Native', 'Web3.js', 'Biometric Auth', 'Live Tickers']
  },
  {
    id: 'mob-8',
    category: 'mobile',
    categoryLabel: 'Mobile Application',
    title: 'FitPulse Daily Workout & Calorie Tracker',
    urlDisplay: 'fitpulse.app',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80',
    description: 'Gamified fitness companion application featuring customizable workout plans, Apple Health integration, and community leaderboards.',
    client: 'FitPulse Health Corp',
    tags: ['Flutter', 'HealthKit API', 'Offline Mode', 'Push Alerts']
  },
  {
    id: 'mob-9',
    category: 'mobile',
    categoryLabel: 'Mobile Application',
    title: 'TeleDoc Urgent Care & Video Consults',
    urlDisplay: 'teledoc.care',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
    description: 'Secure HIPAA-compliant telehealth mobile application with instant video calls, e-prescription delivery, and symptom checker.',
    client: 'TeleDoc Health Network',
    tags: ['WebRTC', 'HIPAA Secure', 'Stripe Billing', 'Push Notifications']
  },
  {
    id: 'mob-10',
    category: 'mobile',
    categoryLabel: 'Mobile Application',
    title: 'SmartHome IoT Central Controller',
    urlDisplay: 'smarthome.iot',
    image: 'https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?auto=format&fit=crop&w=800&q=80',
    description: 'Low-latency smart home dashboard controlling smart lighting, thermostats, security cameras, and automated energy scenes.',
    client: 'Lumina Home Technologies',
    tags: ['MQTT Protocol', 'React Native', 'Sub-second Sync', 'Home Automation']
  },
  {
    id: 'mob-11',
    category: 'mobile',
    categoryLabel: 'Mobile Application',
    title: 'TapPay NFC Merchant Mobile POS Terminal',
    urlDisplay: 'tappay.pos',
    image: 'https://images.unsplash.com/photo-1556742049-0a67c5574f73?auto=format&fit=crop&w=800&q=80',
    description: 'Contactless soft-POS mobile app enabling local retail merchants to accept tap-to-pay cards directly on their smartphones.',
    client: 'TapPay Financial Ltd',
    tags: ['NFC Hardware API', 'PCI DSS', 'Instant Receipts', 'Ledger Sync']
  },
  {
    id: 'mob-12',
    category: 'mobile',
    categoryLabel: 'Mobile Application',
    title: 'SwiftRide On-Demand Chauffeur Booking',
    urlDisplay: 'swiftride.io',
    image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=800&q=80',
    description: 'Ride-hailing dual app for riders and drivers featuring turn-by-turn navigation, dynamic surge pricing, and cashless checkout.',
    client: 'SwiftRide Mobility',
    tags: ['Google Navigation', 'Socket.io', 'Fare Calculator', 'Fast Dispatch']
  },

  // 3. Digital Marketing (6 Projects)
  {
    id: 'mkt-1',
    category: 'marketing',
    categoryLabel: 'Digital Marketing',
    title: 'Performance SEO & Organic Ranking',
    urlDisplay: 'demo.vstechnology.in/seo-ranking',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    description: 'Comprehensive technical SEO, backlink architecture, and keyword optimization generating a 340% surge in organic inbound leads.',
    client: 'Apex Global Logistics',
    tags: ['SEO Ranking #1', 'Content Marketing', 'Google Search Console']
  },
  {
    id: 'mkt-2',
    category: 'marketing',
    categoryLabel: 'Digital Marketing',
    title: 'High-ROI Meta & Google Ads Scaling',
    urlDisplay: 'demo.vstechnology.in/performance-ads',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    description: 'Performance paid acquisition driving 5.2x Return on Ad Spend (ROAS) across Facebook, Instagram, and Google Search funnels.',
    client: 'Luxe Home Décor',
    tags: ['Meta Ads', 'Google Ads PPC', 'CAPI Tracking', '5.2x ROAS']
  },
  {
    id: 'mkt-3',
    category: 'marketing',
    categoryLabel: 'Digital Marketing',
    title: 'Paid Media & Conversion Rate Funnel',
    urlDisplay: 'demo.vstechnology.in/cro-funnel',
    image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=800&q=80',
    description: 'A/B landing page split testing and dynamic retargeting campaign converting cold ad traffic into paying corporate accounts.',
    client: 'SaaS Flow Dynamics',
    tags: ['Conversion Rate +68%', 'A/B Testing', 'Retargeting Funnels']
  },
  {
    id: 'mkt-4',
    category: 'marketing',
    categoryLabel: 'Digital Marketing',
    title: 'Omnichannel B2B Lead Generation',
    urlDisplay: 'demo.vstechnology.in/b2b-leadgen',
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=800&q=80',
    description: 'Targeted LinkedIn advertising and automated email outreach securing qualified sales meetings with Fortune 500 decision makers.',
    client: 'Enterprise Cloud Solutions',
    tags: ['LinkedIn Ads', 'Email Automation', 'B2B Pipeline', 'Qualified Leads']
  },
  {
    id: 'mkt-5',
    category: 'marketing',
    categoryLabel: 'Digital Marketing',
    title: 'Social Media Optimization & Viral Branding',
    urlDisplay: 'demo.vstechnology.in/social-growth',
    image: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=800&q=80',
    description: 'Viral short-form video strategies, Instagram carousel campaigns, and community building multiplying followers and brand engagement.',
    client: 'NutraVital Health',
    tags: ['Viral Reels', 'Community Growth', 'Influencer Collabs', 'High Engagement']
  },
  {
    id: 'mkt-6',
    category: 'marketing',
    categoryLabel: 'Digital Marketing',
    title: 'Local Google Maps 3-Pack Optimization',
    urlDisplay: 'demo.vstechnology.in/local-seo',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80',
    description: 'Google Business Profile dominance, review acceleration, and local geo-targeted citations capturing local market share.',
    client: 'Premier Dental Care',
    tags: ['Google Map 3-Pack', 'Local Citations', '5-Star Review Growth']
  },
  {
    id: 'mkt-7',
    category: 'marketing',
    categoryLabel: 'Digital Marketing',
    title: 'SaaS Product-Led Growth & Funnel Optimization',
    urlDisplay: 'saasgrowthlab.io',
    image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8f2c293?auto=format&fit=crop&w=800&q=80',
    description: 'Self-serve freemium-to-paid conversion optimization, in-app onboarding guides, and lifecycle behavioral emails driving 2.8x ARR expansion.',
    client: 'CloudStack Analytics',
    tags: ['Product-Led Growth', 'Lifecycle Email', 'SaaS Onboarding', '+180% ARR']
  },
  {
    id: 'mkt-8',
    category: 'marketing',
    categoryLabel: 'Digital Marketing',
    title: 'TikTok & Short-Form Video Viral Scaling',
    urlDisplay: 'tiktokcreative.agency',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=800&q=80',
    description: 'High-energy organic short-form video hooks and spark ad activations reaching 4.8 million targeted impressions in 90 days.',
    client: 'Zesty Spark Drinks',
    tags: ['TikTok Spark Ads', 'Creator Network', 'Viral Hooks', '4.8M Reach']
  },
  {
    id: 'mkt-9',
    category: 'marketing',
    categoryLabel: 'Digital Marketing',
    title: 'Enterprise Account-Based Marketing (ABM)',
    urlDisplay: 'demandengine.co',
    image: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=800&q=80',
    description: 'Hyper-personalized account-based advertising targeting C-level executives at Fortune 1000 logistics and manufacturing enterprises.',
    client: 'Apex Industrial ERP',
    tags: ['ABM Strategy', 'LinkedIn Matched Audiences', 'High-Ticket B2B']
  },
  {
    id: 'mkt-10',
    category: 'marketing',
    categoryLabel: 'Digital Marketing',
    title: 'Multi-Location Franchise SEO Domination',
    urlDisplay: 'franchisemarket.biz',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80',
    description: 'Structured geo-landing pages and programmatic schema architecture ranking #1 for 45 nationwide retail franchise locations.',
    client: 'Urban Fitness Centers',
    tags: ['Programmatic SEO', 'Schema Markup', '45 Locations', 'Top 3 Ranking']
  },
  {
    id: 'mkt-11',
    category: 'marketing',
    categoryLabel: 'Digital Marketing',
    title: 'Automated Klaviyo Flow Architecture',
    urlDisplay: 'emailretention.io',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80',
    description: 'High-converting welcome sequences, browse abandonment triggers, and VIP win-back automations contributing 38% of total revenue.',
    client: 'Artisan Coffee Roasters',
    tags: ['Klaviyo Flows', 'Email Retention', 'SMS Marketing', '38% Attributed']
  },
  {
    id: 'mkt-12',
    category: 'marketing',
    categoryLabel: 'Digital Marketing',
    title: 'Google Shopping & Performance Max Scaling',
    urlDisplay: 'pmaxgrowth.com',
    image: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&w=800&q=80',
    description: 'Product feed restructuring, negative keyword sculpting, and automated bid strategies scaling revenue to $240K/month at 4.6x ROAS.',
    client: 'Nordic Home Gear',
    tags: ['Google PMax', 'Merchant Center', 'Feed Optimization', '4.6x ROAS']
  },

  // 4. E-Commerce (6 Projects)
  {
    id: 'ecom-1',
    category: 'ecommerce',
    categoryLabel: 'E-commerce',
    title: 'Multi-Vendor Marketplace Platform',
    urlDisplay: 'demo.vstechnology.in/marketplace',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80',
    description: 'High-throughput marketplace platform supporting thousands of concurrent vendor shops, automated payouts, and real-time inventory.',
    client: 'Apex Global Markets',
    tags: ['Multi-Vendor', 'Stripe Connect', 'Next.js Commerce', 'PostgreSQL']
  },
  {
    id: 'ecom-2',
    category: 'ecommerce',
    categoryLabel: 'E-commerce',
    title: 'Bespoke Custom Apparel & Merch Store',
    urlDisplay: 'demo.vstechnology.in/custom-merch',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80',
    description: 'Bespoke apparel and customized product designer store with live print preview, instant checkout, and automated fulfillment.',
    client: 'DesignStudio Apparel',
    tags: ['Custom Product Designer', 'Shopify Storefront', 'Fast Checkout']
  },
  {
    id: 'ecom-3',
    category: 'ecommerce',
    categoryLabel: 'E-commerce',
    title: 'Direct-to-Consumer Lifestyle Brand',
    urlDisplay: 'demo.vstechnology.in/d2c-store',
    image: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=800&q=80',
    description: 'Headless Shopify implementation with sub-second page transitions, upsell triggers, and abandoned checkout recovery automations.',
    client: 'Revive Lifestyle D2C',
    tags: ['Headless Shopify', 'One-Click Upsell', 'Sub-second Load']
  },
  {
    id: 'ecom-4',
    category: 'ecommerce',
    categoryLabel: 'E-commerce',
    title: 'Athletic Sportswear & Gear Portal',
    urlDisplay: 'demo.vstechnology.in/sportswear-hub',
    image: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=800&q=80',
    description: 'Global athletic sportswear and lifestyle retail portal with worldwide shipping integration, localization, and currency conversion.',
    client: 'Prime Athletics Inc',
    tags: ['WooCommerce Turbo', 'Global Shipping API', 'Razorpay & Stripe']
  },
  {
    id: 'ecom-5',
    category: 'ecommerce',
    categoryLabel: 'E-commerce',
    title: 'Enterprise B2B Wholesale Supply Portal',
    urlDisplay: 'demo.vstechnology.in/b2b-procure',
    image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=800&q=80',
    description: 'Bulk wholesale B2B purchasing platform with tiered volume discounting, purchase order approvals, and net-30 invoicing.',
    client: 'Nova Industrial Supplies',
    tags: ['B2B Wholesale', 'Net-30 Invoicing', 'Volume Pricing', 'ERP Sync']
  },
  {
    id: 'ecom-6',
    category: 'ecommerce',
    categoryLabel: 'E-commerce',
    title: 'Consumer Electronics & Gadgets Showcase',
    urlDisplay: 'demo.vstechnology.in/electronics-hub',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80',
    description: 'State-of-the-art consumer electronics catalog featuring rich product comparison matrices and instant customer support chat.',
    client: 'TechNova Gear',
    tags: ['Next.js 14', 'Tailwind', 'Real-Time Chat', 'High Conversion']
  },
  {
    id: 'ecom-7',
    category: 'ecommerce',
    categoryLabel: 'E-commerce',
    title: 'Aura Fine Jewelry & Watch Boutique',
    urlDisplay: 'auradiamonds.luxury',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80',
    description: 'High-end luxury jewelry storefront featuring high-resolution zoom, ring size selector, certified diamond filters, and insurance options.',
    client: 'Aura Luxury Jewelers',
    tags: ['Shopify Plus', 'Custom Theme', 'High AOV', 'Klarna Checkout']
  },
  {
    id: 'ecom-8',
    category: 'ecommerce',
    categoryLabel: 'E-commerce',
    title: 'SoundWave Audiophile Headphones & Gear',
    urlDisplay: 'soundwavegear.store',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80',
    description: 'Direct-to-consumer premium acoustic electronics shop with interactive audio frequency testers and bundled accessory discounts.',
    client: 'SoundWave Acoustics',
    tags: ['Next.js Commerce', 'Tailwind', 'Stripe Elements', 'Cart Upsells']
  },
  {
    id: 'ecom-9',
    category: 'ecommerce',
    categoryLabel: 'E-commerce',
    title: 'SoleStreet Limited Sneaker Drops',
    urlDisplay: 'solestreet.vip',
    image: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=800&q=80',
    description: 'High-traffic flash-sale sneaker drop portal equipped with queue management bot protection and instant Apple Pay checkout.',
    client: 'SoleStreet Streetwear',
    tags: ['High Concurrency', 'Bot Protection', 'Apple Pay 1-Click', 'Redis Queue']
  },
  {
    id: 'ecom-10',
    category: 'ecommerce',
    categoryLabel: 'E-commerce',
    title: 'OptiVision Designer Eyewear & Lenses',
    urlDisplay: 'optivisionframes.com',
    image: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=800&q=80',
    description: 'Prescription eyewear configurator allowing customers to upload optometrist slips, select lens coatings, and preview virtual frames.',
    client: 'OptiVision Optical Group',
    tags: ['Prescription Upload', 'Lens Configurator', 'WooCommerce', 'PayPal']
  },
  {
    id: 'ecom-11',
    category: 'ecommerce',
    categoryLabel: 'E-commerce',
    title: 'NaturaMarket Farm-Direct Organic Grocery',
    urlDisplay: 'naturagrocery.market',
    image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=800&q=80',
    description: 'Hyper-local organic food subscription and weekly grocery basket delivery portal with slot-based neighborhood delivery routes.',
    client: 'Natura Farms Co.',
    tags: ['Recurring Subscriptions', 'Slot Delivery', 'Multi-Warehouse', 'Fast Search']
  },
  {
    id: 'ecom-12',
    category: 'ecommerce',
    categoryLabel: 'E-commerce',
    title: 'Atelier Minimalist Scandinavian Living',
    urlDisplay: 'atelierhome.no',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80',
    description: 'Nordic minimalist furniture and homeware catalog featuring room dimension guides, freight freight calculation, and white-glove setup.',
    client: 'Atelier Nordic Living',
    tags: ['Headless Shopify', 'Room Planner', 'Freight Calculator', 'Multi-Currency']
  }
];

export const PortfolioSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'web' | 'mobile' | 'marketing' | 'ecommerce'>('web');
  const [visibleCount, setVisibleCount] = useState<number>(6);
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);
  
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [uploadSuccess, setUploadSuccess] = useState<boolean>(false);
  const [profileImage, setProfileImage] = useState<string>(() => {
    return localStorage.getItem('user_exact_profile_photo') || '/vidyasagar_profile.jpg';
  });

  const handleFileSelect = (file: File) => {
    if (!file || !file.type.startsWith('image/')) return;
    const reader = new FileReader();
    reader.onload = async () => {
      if (typeof reader.result === 'string') {
        const dataUrl = reader.result;
        setProfileImage(dataUrl);
        localStorage.setItem('user_exact_profile_photo', dataUrl);
        setUploadSuccess(true);
        setTimeout(() => setUploadSuccess(false), 3500);
        
        try {
          await fetch('/api/upload-profile-photo', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ imageData: dataUrl }),
          });
        } catch {
          // Local storage and state already active
        }
      }
    };
    reader.readAsDataURL(file);
  };

  const categories = [
    { key: 'web' as const, label: 'WEB DESIGN & DEVELOPMENT' },
    { key: 'mobile' as const, label: 'MOBILE APPLICATION' },
    { key: 'marketing' as const, label: 'DIGITAL MARKETING' },
    { key: 'ecommerce' as const, label: 'E-COMMERCE' },
  ];

  const currentProjects = PORTFOLIO_PROJECTS.filter((p) => p.category === activeTab);
  const displayedProjects = currentProjects.slice(0, visibleCount);

  const handleTabChange = (key: 'web' | 'mobile' | 'marketing' | 'ecommerce') => {
    setActiveTab(key);
    setVisibleCount(6);
  };

  return (
    <section id="projects" className="py-16 sm:py-24 bg-white border-b border-slate-100 scroll-mt-20">
      <span id="portfolio" className="block relative -top-24 invisible" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section from Image 1 */}
        <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-12">
          <h3 className="text-sm sm:text-base font-extrabold text-[#283691] tracking-wider uppercase mb-2">
            OUR PORTFOLIO
          </h3>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#111827] tracking-tight uppercase">
            CREATIVITY THAT PERFORM IN OUR WORK
          </h2>
        </div>

        {/* 4 Category Filter Pills from Image 1 */}
        <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 mb-12 sm:mb-16">
          {categories.map((cat) => {
            const isActive = activeTab === cat.key;
            return (
              <button
                key={cat.key}
                id={`portfolio-filter-${cat.key}`}
                onClick={() => handleTabChange(cat.key)}
                className={`px-6 sm:px-8 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-extrabold tracking-wide uppercase transition-all duration-300 cursor-pointer shadow-sm ${
                  isActive
                    ? 'bg-[#29a4d9] text-white shadow-md scale-105 ring-2 ring-[#29a4d9]/40'
                    : 'bg-[#283691] hover:bg-[#1f2b74] text-white hover:shadow'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Browser Window Mockups Grid from Image 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {displayedProjects.map((project) => (
            <div
              key={project.id}
              id={`portfolio-card-${project.id}`}
              className="bg-white rounded-xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              {/* Browser Window Header Chrome Bar */}
              <div className="bg-[#f0f3f6] px-3.5 py-2 border-b border-slate-200 flex items-center justify-between gap-2 select-none">
                {/* 3 Window Control Buttons */}
                <div className="flex items-center gap-1.5 shrink-0">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ef4444]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#f59e0b]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#10b981]" />
                </div>

                {/* Simulated Address Bar with Lock */}
                <div className="flex items-center gap-1.5 px-3 py-0.5 rounded-md bg-white border border-slate-200 text-slate-600 text-[11px] font-mono truncate max-w-[210px] w-full shadow-2xs">
                  <Lock className="w-2.5 h-2.5 text-emerald-600 shrink-0" />
                  <span className="truncate">{project.urlDisplay}</span>
                </div>

                {/* Right utility icons */}
                <div className="flex items-center gap-1.5 text-slate-400 shrink-0">
                  <Star className="w-3 h-3 hover:text-amber-500 cursor-pointer transition-colors" />
                </div>
              </div>

              {/* Browser Webpage Screenshot Preview */}
              <div
                className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100 cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />

                {/* Hover Overlay with View Details Button */}
                <div className="absolute inset-0 bg-slate-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                  <button
                    className="px-4 py-2 rounded-lg bg-white text-slate-900 text-xs font-extrabold shadow-xl flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5 text-[#283691]" />
                    <span>View Project Details</span>
                  </button>
                </div>
              </div>

              {/* Card Footer Details */}
              <div className="p-4 bg-white flex flex-col justify-between flex-grow border-t border-slate-100">
                <div>
                  <span className="text-[11px] font-bold text-[#283691] uppercase tracking-wider">
                    {project.categoryLabel}
                  </span>
                  <h4 className="text-sm font-bold text-slate-900 mt-1 line-clamp-1 group-hover:text-[#29a4d9] transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-xs text-slate-500 mt-1 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-slate-500 font-medium truncate pr-2">
                    {project.client}
                  </span>
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="text-[#283691] hover:text-[#29a4d9] font-bold inline-flex items-center gap-1 cursor-pointer shrink-0"
                  >
                    <span>Inspect</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* View More Button from Image 2 */}
        <div className="text-center mt-12 sm:mt-14">
          <div className="flex flex-col items-center gap-3">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
              Showing {Math.min(visibleCount, currentProjects.length)} of {currentProjects.length} Projects
            </span>
            <button
              id="portfolio-view-more-btn"
              onClick={() => {
                if (visibleCount >= currentProjects.length) {
                  setVisibleCount(6);
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                } else {
                  setVisibleCount((prev) => Math.min(prev + 6, currentProjects.length));
                }
              }}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#283691] hover:bg-[#1e2a78] text-white text-sm font-bold tracking-wide transition-all shadow-md hover:shadow-lg hover:scale-105 active:scale-95 cursor-pointer"
            >
              <span>
                {visibleCount >= currentProjects.length
                  ? 'Show Less'
                  : `View More Projects (${currentProjects.length - visibleCount} more)`}
              </span>
              {visibleCount >= currentProjects.length ? (
                <ChevronUp className="w-4 h-4" />
              ) : (
                <ChevronDown className="w-4 h-4" />
              )}
            </button>
          </div>
        </div>

        {/* MEET THE DEVELOPER / FREELANCE PROFILE SECTION (Target: #meet-our-leaders) */}
        <div id="meet-our-leaders" className="mt-20 sm:mt-24 pt-16 border-t border-slate-100">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#283691] text-xs font-bold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              <span>Independent Freelance Software Engineer</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#111827] tracking-tight">
              Work Directly With Me — No Middlemen
            </h2>
            <p className="mt-3 text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto leading-relaxed">
              I am an independent full-stack software engineer. You won't be dealing with sales executives, account managers, or outsourced junior developers — you collaborate 1-on-1 with the builder who writes every line of your code.
            </p>
          </div>

          {/* Featured Profile Showcase Card */}
          <div className="max-w-5xl mx-auto rounded-3xl bg-gradient-to-br from-slate-50 via-white to-blue-50/40 border border-slate-200/90 shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
              
              {/* Left Column: Portrait & Direct Contact Card */}
              <div className="lg:col-span-5 p-6 sm:p-8 bg-slate-900 text-white flex flex-col justify-center items-center relative overflow-hidden">
                {/* Subtle Background glow */}
                <div className="absolute -top-24 -left-24 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none" />

                <div className="relative z-10">
                  {/* Photo Container with direct file upload trigger */}
                  <div
                    onClick={() => fileInputRef.current?.click()}
                    onDragOver={(e) => {
                      e.preventDefault();
                      setIsDragging(true);
                    }}
                    onDragLeave={() => setIsDragging(false)}
                    onDrop={(e) => {
                      e.preventDefault();
                      setIsDragging(false);
                      const file = e.dataTransfer.files?.[0];
                      if (file) handleFileSelect(file);
                    }}
                    className={`relative w-full max-w-[280px] mx-auto aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border-2 transition-all duration-300 bg-slate-800 group cursor-pointer ${
                      isDragging ? 'border-blue-400 ring-4 ring-blue-500/30 scale-[1.02]' : 'border-white/20'
                    }`}
                    title="Click or drag & drop your exact photo file here"
                  >
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) handleFileSelect(file);
                      }}
                    />
                    <img
                      src={profileImage}
                      alt={OWNER_INFO.name}
                      loading="lazy"
                      decoding="async"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />

                    {/* Subtle hover overlay to clearly inform user they can click to select their exact photo */}
                    <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col items-center justify-center p-4 text-center pointer-events-none">
                      <div className="w-10 h-10 rounded-full bg-blue-600/90 backdrop-blur-xs flex items-center justify-center mb-2 text-white shadow-lg">
                        <Upload className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-bold text-white tracking-wide">Apni Original Photo Select Karein</span>
                      <span className="text-[10px] text-blue-200 mt-1">Click to select original file (No AI)</span>
                    </div>

                    {/* Temporary success badge after choosing photo */}
                    {uploadSuccess && (
                      <div className="absolute top-3 left-3 right-3 py-1.5 px-2.5 rounded-lg bg-emerald-600/95 text-white text-xs font-bold flex items-center justify-center gap-1.5 shadow-lg animate-in fade-in zoom-in-95 duration-200 z-20">
                        <CheckCircle2 className="w-4 h-4" />
                        <span>Aapki Original Photo Lag Gayi!</span>
                      </div>
                    )}

                    <div className="absolute bottom-3 left-3 right-3 py-1.5 px-3 rounded-lg bg-black/75 backdrop-blur-xs border border-white/20 flex items-center justify-center gap-2 z-10">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                      <span className="text-[11px] font-bold text-white tracking-wide">Available for Projects</span>
                    </div>
                  </div>

                  {/* Name & Title */}
                  <div className="text-center mt-4">
                    <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                      {OWNER_INFO.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-blue-300 font-semibold mt-0.5">
                      Full-Stack Software Engineer (CSE)
                    </p>
                    <p className="text-[11px] text-slate-400 mt-1">
                      Noida / Delhi-NCR, India &bull; Available Worldwide
                    </p>
                  </div>
                </div>

                {/* Direct Action Buttons */}
                <div className="relative z-10 w-full max-w-[280px] space-y-2.5 mt-5 pt-4 border-t border-slate-800">
                  <a
                    href={`https://wa.me/${OWNER_INFO.whatsappNumber}?text=Hi%20Vidyasagar,%20I%20saw%20your%20portfolio%20and%20want%20to%20discuss%20a%20project.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-md transition-all cursor-pointer"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Chat Directly on WhatsApp</span>
                  </a>

                  <div className="grid grid-cols-2 gap-2">
                    <a
                      href={`tel:${OWNER_INFO.phoneNumbers[0]}`}
                      className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs border border-slate-700 transition-all cursor-pointer"
                    >
                      <Phone className="w-3.5 h-3.5 text-blue-400" />
                      <span>Call Me</span>
                    </a>

                    <a
                      href={OWNER_INFO.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-[#0a66c2] hover:bg-[#095196] text-white font-semibold text-xs transition-all cursor-pointer"
                    >
                      <Linkedin className="w-3.5 h-3.5" />
                      <span>LinkedIn</span>
                    </a>
                  </div>
                </div>

              </div>

              {/* Right Column: About My Work (Vidyasagar Chaurasiya) */}
              <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
                <div>
                  {/* Eyebrow */}
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/70 text-[#283691] text-xs font-bold uppercase tracking-wider mb-3">
                    <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                    <span>ABOUT MY WORK</span>
                  </div>

                  {/* Main Heading */}
                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight leading-snug">
                    Building Practical Software With Direct Ownership
                  </h3>

                  {/* Description */}
                  <p className="mt-3.5 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    I'm an independent Full-Stack Software Engineer focused on building modern, responsive and reliable web applications. I work directly with clients to understand their requirements, turn ideas into practical solutions, and handle the development process from frontend and backend implementation to database integration and deployment.
                  </p>

                  {/* 4 Cards (2x2 on desktop, vertical stack on mobile) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                    {/* Card 1 */}
                    <div className="p-4 sm:p-5 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-slate-300 hover:shadow-xs transition-all duration-200 flex flex-col justify-between">
                      <div>
                        <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#283691] flex items-center justify-center mb-3">
                          <MessageSquare className="w-4 h-4 text-[#283691]" />
                        </div>
                        <h4 className="text-xs sm:text-sm font-bold text-slate-900 mb-1.5">
                          Direct Communication
                        </h4>
                        <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed">
                          You work directly with me throughout the project. We can discuss requirements, feedback, technical decisions and progress without unnecessary layers.
                        </p>
                      </div>
                    </div>

                    {/* Card 2 */}
                    <div className="p-4 sm:p-5 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-slate-300 hover:shadow-xs transition-all duration-200 flex flex-col justify-between">
                      <div>
                        <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-700 flex items-center justify-center mb-3">
                          <Laptop className="w-4 h-4 text-indigo-600" />
                        </div>
                        <h4 className="text-xs sm:text-sm font-bold text-slate-900 mb-1.5">
                          Full-Stack Development
                        </h4>
                        <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed">
                          I can work across the complete web application stack — from responsive React/Next.js interfaces to backend APIs, databases, integrations and deployment.
                        </p>
                      </div>
                    </div>

                    {/* Card 3 */}
                    <div className="p-4 sm:p-5 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-slate-300 hover:shadow-xs transition-all duration-200 flex flex-col justify-between">
                      <div>
                        <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center mb-3">
                          <Layers className="w-4 h-4 text-emerald-600" />
                        </div>
                        <h4 className="text-xs sm:text-sm font-bold text-slate-900 mb-1.5">
                          Clean &amp; Practical Solutions
                        </h4>
                        <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed">
                          I focus on writing maintainable code and choosing technologies that fit the actual project requirements instead of adding unnecessary complexity.
                        </p>
                      </div>
                    </div>

                    {/* Card 4 */}
                    <div className="p-4 sm:p-5 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-slate-300 hover:shadow-xs transition-all duration-200 flex flex-col justify-between">
                      <div>
                        <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center mb-3">
                          <Rocket className="w-4 h-4 text-amber-600" />
                        </div>
                        <h4 className="text-xs sm:text-sm font-bold text-slate-900 mb-1.5">
                          From Idea to Launch
                        </h4>
                        <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed">
                          I can help take a project from an initial idea and requirements through development, testing, deployment and post-launch improvements.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Core Stack Pills */}
                  <div className="mt-6 pt-5 border-t border-slate-200/70">
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-2.5">
                      Core Technologies &amp; Tools
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {['React', 'Next.js', 'TypeScript', 'Node.js', 'Tailwind CSS', 'PostgreSQL', 'MongoDB', 'REST APIs', 'Git & CI/CD'].map((tech, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 rounded-md bg-white border border-slate-200 text-slate-800 text-xs font-semibold shadow-2xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Action */}
                <div className="mt-8 pt-5 border-t border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-left">
                    <p className="text-xs font-bold text-slate-900">
                      Have an idea, redesign, or custom web project?
                    </p>
                    <p className="text-[11px] text-slate-500">
                      Get a free technical consultation and quick timeline estimate.
                    </p>
                  </div>

                  <a
                    href="#contact"
                    className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#283691] hover:bg-[#1e2a78] text-white font-bold text-xs tracking-wide shadow-md hover:shadow-lg transition-all cursor-pointer"
                  >
                    <span>Request Free Consultation</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>

      {/* Project Quick View Modal */}
      {selectedProject && (
        <div
          id="portfolio-project-modal"
          className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-3xl w-full overflow-hidden shadow-2xl border border-slate-200 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="relative aspect-[16/9] w-full bg-slate-900 overflow-hidden">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-3.5 right-3.5 w-9 h-9 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center transition-colors cursor-pointer"
                title="Close"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="absolute bottom-4 left-5 right-5 text-white">
                <span className="px-2.5 py-1 rounded bg-[#29a4d9] text-xs font-bold uppercase tracking-wider">
                  {selectedProject.categoryLabel}
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-white mt-2">
                  {selectedProject.title}
                </h3>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                  Project Overview & Scope
                </h4>
                <p className="text-sm text-slate-700 leading-relaxed">
                  {selectedProject.description}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                  Key Technologies & Capabilities
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-md bg-slate-100 text-slate-800 text-xs font-semibold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-slate-500">
                  <span>Client Partner: </span>
                  <strong className="text-slate-800">{selectedProject.client}</strong>
                </div>

                <a
                  href="#contact"
                  onClick={() => setSelectedProject(null)}
                  className="w-full sm:w-auto px-6 py-2.5 rounded-lg bg-[#283691] hover:bg-[#1e2a78] text-white text-xs font-bold transition-colors text-center"
                >
                  Request Similar Solution
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
