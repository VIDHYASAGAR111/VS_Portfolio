import { ServiceItem, ProjectItem, TestimonialItem, OwnerProfile } from '../types';

export const OWNER_INFO: OwnerProfile = {
  name: 'Vidyasagar Chaurasiya',
  title: 'Full Stack Software Engineer',
  companyName: 'VS Technology - Software Engineering',
  email: 'vidyasagarchaurasiya38@gmail.com',
  salesEmail: 'vidyasagarchaurasiya38@gmail.com',
  whatsappNumber: '919598530662',
  phoneDisplay: '+91 9598530662',
  phoneNumbers: ['+91 9598530662', '+91 6388603391'],
  linkedin: 'https://www.linkedin.com/in/vidhyasagar-cse',
  companyLinkedIn: 'https://www.linkedin.com/in/vidhyasagar-cse',
  location: 'H - 61, Sector 63, Noida, Uttar Pradesh 201301, India',
  usOffice: 'Global Remote Client Delivery (Worldwide)',
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'web-application-development',
    title: 'Web Application Development',
    shortDesc: 'We craft functional, appealing, user-centric, high-performing websites and bespoke web applications tailored to your business goals.',
    fullDesc: 'VS Technology engineers digital flagship web applications designed to convert visitors into loyal clients. Every web application is built with modular, scalable architecture, ultra-fast sub-second loading speed, responsive layout across all screen sizes, and enterprise-grade security.',
    icon: 'Code2',
    badge: 'Core Service',
    features: [
      'Custom React, Next.js, Node.js & TypeScript Architecture',
      'Mobile-First Responsive Layouts (100% Fluid on All Devices)',
      'Sub-Second Core Web Vitals & 95+ PageSpeed Optimization',
      'Headless CMS & Dynamic Custom Admin Dashboards',
      'Robust Third-Party API & Secure Database Integrations'
    ],
    techStack: ['React', 'Next.js', 'TypeScript', 'Node.js', 'Tailwind CSS', 'PostgreSQL / MongoDB'],
    deliverables: [
      'Complete Production-Ready Source Code',
      'Admin Management Dashboard',
      'Technical SEO Audit & Setup',
      '30-Day Free Post-Launch Technical Support'
    ]
  },
  {
    id: 'web-designing',
    title: 'Web Designing',
    shortDesc: 'The websites that we create are not just good looking but they are responsive, modern, conversion-focused and aligned with your brand.',
    fullDesc: 'We design bespoke, intuitive user interfaces that capture attention and guide user journeys smoothly. From low-fidelity wireframes to interactive Figma prototypes and pixel-perfect responsive front-ends, every detail is engineered for high engagement and aesthetic appeal.',
    icon: 'Palette',
    badge: 'UI / UX Design',
    features: [
      'Bespoke Figma UI/UX Wireframing & Interactive Prototypes',
      'Cross-Browser & 100% Mobile-Friendly Adaptive Layouts',
      'Micro-Interactions, Smooth Animations & Modern Typography',
      'Brand Identity Integration & Accessible Color Systems',
      'Conversion Rate Optimization (CRO) Focused Layouts'
    ],
    techStack: ['Figma', 'Adobe XD', 'Tailwind CSS', 'HTML5 / CSS3', 'JavaScript', 'Motion'],
    deliverables: [
      'Complete Figma UI/UX Design System & Assets',
      'Fully Responsive HTML/CSS/Tailwind Front-End Templates',
      'High-Resolution Graphic Assets & Icon Sets',
      'Style Guide & Typography Rules'
    ]
  },
  {
    id: 'mobile-app',
    title: 'Mobile APP',
    shortDesc: 'Intuitive, innovating and customer-engaging mobile apps for iOS and Android built for seamless user retention and top performance.',
    fullDesc: 'We turn ambitious mobile concepts into intuitive, high-performance applications published on the Google Play Store and Apple App Store. Utilizing modern cross-platform frameworks to deliver native 60fps velocity with single-codebase efficiency.',
    icon: 'Smartphone',
    badge: 'iOS & Android',
    features: [
      'Cross-Platform Development (React Native & Flutter)',
      'Native-Feel 60 FPS Micro-Interactions & Fluid Gestures',
      'Push Notifications, Geo-Location & Biometric Authentication',
      'Offline Data Sync & Encrypted Local Storage',
      'App Store Optimization (ASO) & Play Store Publishing Assistance'
    ],
    techStack: ['React Native', 'Flutter', 'TypeScript', 'Firebase', 'Node.js', 'Redux Toolkit'],
    deliverables: [
      'Compiled APK / AAB & IPA Production Bundles',
      'App Store & Play Store Submission Handling',
      'Backend REST / GraphQL API Infrastructure',
      'Push Notification Management Dashboard'
    ]
  },
  {
    id: 'wordpress-development',
    title: 'WordPress Development',
    shortDesc: 'We take great pride in the hardware and high-grade architecture we use for all custom WordPress & WooCommerce systems.',
    fullDesc: 'Empower your content creators and e-commerce operations with bespoke WordPress solutions. We specialize in custom block theme development, custom plugin creation, WooCommerce customization, and bulletproof security hardening with zero bloat.',
    icon: 'Code2',
    badge: 'CMS Specialists',
    features: [
      'Custom WordPress Theme Development (No Heavy Builders)',
      'Custom Plugin Engineering & Third-Party API Hooks',
      'Full WooCommerce Setup with Custom Checkout & Payment Gateways',
      'Advanced Speed Optimization & Caching Configuration',
      'Enterprise Security Auditing, Malware Protection & Automated Backups'
    ],
    techStack: ['WordPress', 'WooCommerce', 'PHP 8.x', 'MySQL', 'REST API', 'ACF Pro'],
    deliverables: [
      'Custom Lightweight WordPress Theme',
      'Configured Admin Interface & Training Guide',
      'Payment Gateway & Courier Integration',
      'Automated Weekly Cloud Backup System'
    ]
  },
  {
    id: 'shopify-development',
    title: 'Shopify Development',
    shortDesc: 'App Store Optimization boosts keyword rankings & improves conversion with bespoke Shopify themes and fast checkout flows.',
    fullDesc: 'Scale your online store with customized Shopify architecture. From Liquid theme customization and custom Shopify apps to 1-page checkout flows, multi-currency support, and seamless integration with Indian & global payment processors.',
    icon: 'ShoppingBag',
    badge: 'E-Commerce ROI',
    features: [
      'Custom Shopify 2.0 Theme Development with Liquid & Tailwind',
      'High-Converting Single-Page Checkout & Cart Drawer',
      'Razorpay, Cashfree, Stripe & UPI Gateway Integration',
      'Automated Order Tracking, SMS & WhatsApp Notifications',
      'Speed Optimization to Pass Shopify Core Web Vitals'
    ],
    techStack: ['Shopify Liquid', 'Storefront API', 'JavaScript', 'Razorpay', 'Klaviyo', 'Tailwind'],
    deliverables: [
      'Fully Configured & Tested Shopify Store',
      'Payment Gateway & Logistics Shipping Integrations',
      'Product Import & Collections Setup',
      'Conversion Rate Optimization Tracking Setup'
    ]
  },
  {
    id: 'laravel-development',
    title: 'Laravel Development',
    shortDesc: 'We have an exceptional team of developers with deep expertise in custom PHP, Laravel framework, REST APIs & enterprise portals.',
    fullDesc: 'Build enterprise-grade, high-concurrency web applications with Laravel. We engineer robust MVC web architectures, SaaS platforms, custom CRM/ERP portals, and scalable microservices equipped with queue workers and real-time WebSockets.',
    icon: 'Cpu',
    badge: 'Enterprise Backend',
    features: [
      'Bespoke Laravel 11.x Enterprise Application Architecture',
      'RESTful & GraphQL API Development for Web & Mobile',
      'Role-Based Access Control (RBAC) & Multi-Tenant Support',
      'Database Optimization, Eloquent ORM & Redis Caching',
      'Background Queue Workers & Automated Cron Scheduling'
    ],
    techStack: ['Laravel', 'PHP 8.3', 'MySQL / PostgreSQL', 'Redis', 'Docker', 'REST API'],
    deliverables: [
      'Clean, Modular & Documented Laravel Source Code',
      'Interactive Swagger / Postman API Documentation',
      'Admin Role Management System',
      'Server Deployment on Ubuntu / AWS / DigitalOcean'
    ]
  },
  {
    id: 'seo-services',
    title: 'SEO (Search Engine Optimization)',
    shortDesc: 'Website structure optimisation coupled with strategized and well-planned technical SEO, keyword research, and Google Page 1 ranking.',
    fullDesc: 'Gain qualified organic inbound leads and dominate search engine results. We optimize technical website structures, implement rich JSON-LD schema, conduct deep competitor gap analysis, and build authoritative backlinks for sustainable growth.',
    icon: 'TrendingUp',
    badge: 'Organic Traffic',
    features: [
      'Comprehensive Technical SEO & Core Web Vitals Optimization',
      'High-Intent Keyword Research & Competitor Gap Analysis',
      'Google Search Console & Google Analytics 4 Setup',
      'Google My Business / Local Noida & NCR Map Pack Domination',
      'High-DA Ethical White-Hat Backlink Acquisition Strategy'
    ],
    techStack: ['Google Search Console', 'Ahrefs', 'Semrush', 'Google Analytics 4', 'Screaming Frog'],
    deliverables: [
      'Comprehensive Baseline SEO Audit Report',
      'On-Page Optimization of 25+ Priority Pages',
      'Authority Backlink Building Roadmap',
      'Monthly Ranking & Organic Growth Analytics Reports'
    ]
  },
  {
    id: 'logo-designing',
    title: 'Logo Designing & Brand Identity',
    shortDesc: 'Need a powerful logo for your brand? Want to invest in premium logo designing, vector assets, and complete brand identity.',
    fullDesc: 'Craft an unforgettable visual presence with memorable branding. We design unique corporate logo marks, select bespoke typography systems, develop comprehensive brand guidelines, and provide print and digital-ready graphic bundles.',
    icon: 'Palette',
    badge: 'Brand Identity',
    features: [
      'Multiple Unique Logo Design Concepts & Vector Revisions',
      'Corporate Color Palette & Typographic Hierarchy System',
      'Social Media Branding Kits (Profile & Cover Templates)',
      'Stationery Design: Business Cards, Letterheads, Invoices',
      'Trademark & Copyright Ready Original Vector Assets'
    ],
    techStack: ['Adobe Illustrator', 'Adobe Photoshop', 'Figma', 'Vector SVG', 'CMYK Print'],
    deliverables: [
      'Master Vector Logo Files (.AI, .EPS, .SVG, .PNG, .PDF)',
      'Complete Corporate Brand Style Guide PDF',
      'Social Media Profile & Banner Bundle',
      'Commercial Print-Ready Files with Bleed Margins'
    ]
  },
  {
    id: 'smo-services',
    title: 'SMO & Performance Marketing',
    shortDesc: 'We influence and control your business’s reputation online through high-ROI social media management, Google Ads, and Meta campaigns.',
    fullDesc: 'Supercharge your digital reach and lead generation. We build impactful paid advertising campaigns on Google Ads (PPC) and Meta (Facebook & Instagram), combined with targeted social media optimization to attract and convert high-intent buyers.',
    icon: 'ShieldCheck',
    badge: 'Paid & Social ROI',
    features: [
      'High-Conversion Meta Ads (Facebook & Instagram Lead Gen)',
      'Google Search, Display & YouTube PPC Advertising Campaigns',
      'Social Media Content Creation & Monthly Publishing Calendar',
      'Audience Retargeting & Custom Lookalike Funnels',
      'Transparent Weekly ROI, CPL & ROAS Performance Reports'
    ],
    techStack: ['Meta Ads Manager', 'Google Ads', 'Canva Pro', 'Google Tag Manager', 'Conversion API'],
    deliverables: [
      'Configured Ad Accounts with Pixel & CAPI Tracking',
      'High-Converting Ad Creatives & Compelling Ad Copy',
      'A/B Split-Testing Framework',
      'Bi-Weekly Live Performance & ROI Review Calls'
    ]
  },
  {
    id: 'graphic-designing',
    title: 'Graphic Designing',
    shortDesc: 'Eye-catching visual designs, corporate brochures, social media creatives, flyers, packaging, and high-conversion ad banners.',
    fullDesc: 'Craft an unforgettable brand aesthetic with bespoke graphic design solutions. From corporate brochures, marketing flyers, business cards, and merchandise packaging to high-converting social media carousels and digital ad creatives engineered to capture attention.',
    icon: 'Palette',
    badge: 'Creative Suite',
    features: [
      'Social Media Creatives, Ad Banners & Viral Carousel Post Designs',
      'Marketing Collaterals: Brochures, Flyers, Catalogs & Business Cards',
      'Product Packaging, Label & Corporate Merchandise Designs',
      'Infographics, Presentation Decks & Sales Pitch Materials',
      'Vector Illustrations, Iconography & Digital Web Assets'
    ],
    techStack: ['Adobe Photoshop', 'Adobe Illustrator', 'Figma', 'InDesign', 'Canva Pro'],
    deliverables: [
      'High-Resolution Master Files (.AI, .PSD, .PDF, .PNG)',
      'Social Media Graphics Bundle (Custom Editable Templates)',
      'Commercial Print-Ready CMYK Files with Bleed Margins',
      'Full Copyright & Commercial Usage Rights'
    ]
  },
  {
    id: 'video-editing',
    title: 'Video Editing & Motion Graphics',
    shortDesc: 'High-impact YouTube video editing, viral Instagram Reels, corporate commercials, 2D motion graphics, and audio mastering.',
    fullDesc: 'Elevate your brand storytelling with cinematic video editing, pacing optimization, sound design, color grading, dynamic captions, and motion graphics designed to maximize viewer retention and conversion across YouTube, Instagram, LinkedIn, and ad channels.',
    icon: 'Video',
    badge: 'Trending & Viral',
    features: [
      'High-Retention YouTube Long-Form & Documentary Style Edits',
      'Viral Instagram Reels, Shorts & TikToks with Dynamic Animated Captions',
      'Corporate Explainer Videos, SaaS Product Demos & Brand Commercials',
      'Cinematic Color Grading, Sound Design & Audio Noise Removal',
      '2D Motion Graphics, Logo Reveals & Kinetic Typography'
    ],
    techStack: ['Adobe Premiere Pro', 'After Effects', 'DaVinci Resolve Studio', 'Adobe Audition', 'CapCut Pro'],
    deliverables: [
      'Rendered 4K / 1080p Ultra-HD Master Files',
      'Multi-Format Exports (16:9 Landscape, 9:16 Vertical, 1:1 Square)',
      'Click-Worthy Thumbnail Designs & Subtitles (.SRT / Burned-in)',
      'Project Source Files & Reusable Motion Graphics Templates'
    ]
  },
  {
    id: 'ai-automation',
    title: 'AI & WhatsApp Automation',
    shortDesc: 'Smart AI workflows, Gemini & OpenAI API integration, automated WhatsApp bots, custom CRM automations, and backend APIs.',
    fullDesc: 'Automate repetitive operations, boost lead conversion, and augment customer support 24/7 with custom conversational AI agents, intelligent WhatsApp automation bots, and robust backend microservices designed for scale.',
    icon: 'Cpu',
    badge: 'Next-Gen AI',
    features: [
      'Custom WhatsApp Business API Chatbots with Instant Auto-Replies',
      'Google Gemini & OpenAI Integration for Smart Data Workflows',
      'Lead Qualification & Automated CRM Sync (Google Sheets, Airtable)',
      'Custom RESTful APIs & Cloud Webhook Microservices',
      'E-commerce Order Notifications, Invoicing & Abandoned Cart Recovery'
    ],
    techStack: ['Python', 'Node.js', 'Google Gemini API', 'WhatsApp Cloud API', 'FastAPI', 'Docker'],
    deliverables: [
      'Custom Trained / Prompted AI Workflow Engine',
      'Live Automated WhatsApp Bot Webhook Server',
      'Interactive Swagger / Postman API Documentation',
      'End-to-End Testing & Deployment on Cloud'
    ]
  }
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'project-1',
    title: 'Enterprise ERP & Logistics Suite',
    category: 'Web Apps',
    tagline: 'High-throughput supply chain & fleet monitoring portal',
    description: 'Engineered an end-to-end logistics platform managing real-time vehicle GPS tracking, automated consignment dispatch, driver payouts, and warehouse inventory synchronization for an Indian pan-state courier firm.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1000&q=80',
    technologies: ['React', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL', 'Socket.io', 'Tailwind'],
    metrics: [
      { label: 'Dispatch Speed', value: '+45%' },
      { label: 'Fleet Active', value: '450+ Trucks' },
      { label: 'Daily Orders', value: '18,000+' }
    ],
    client: 'TransLogix India Pvt Ltd',
    duration: '3 Months',
    liveUrl: '#contact',
  },
  {
    id: 'project-2',
    title: 'Aura Luxe - Fashion & Apparel D2C',
    category: 'E-Commerce',
    tagline: 'High-converting luxury apparel brand storefront with instant UPI checkout',
    description: 'Designed and developed a lightning-fast D2C fashion store with custom fit-finders, WhatsApp order confirmations, automated abandoned cart recovery, and single-click Indian checkout.',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1000&q=80',
    technologies: ['Next.js', 'Shopify Storefront API', 'Tailwind CSS', 'Razorpay', 'WhatsApp Cloud API'],
    metrics: [
      { label: 'PageSpeed Score', value: '98/100' },
      { label: 'Conversion Rate', value: '+3.4%' },
      { label: 'Monthly GMV', value: '₹42 Lakhs+' }
    ],
    client: 'Aura Luxe Lifestyle',
    duration: '6 Weeks',
    liveUrl: '#contact',
  },
  {
    id: 'project-3',
    title: 'QuickCare Health & Teleconsult App',
    category: 'Mobile Apps',
    tagline: 'Doctor consultation & diagnostic report booking app',
    description: 'Cross-platform mobile application providing real-time video consultations, prescription vault, instant diagnostic test home pickups, and live appointment tracking.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1000&q=80',
    technologies: ['React Native', 'Node.js', 'WebRTC', 'Firebase', 'Redux', 'Razorpay'],
    metrics: [
      { label: 'App Store Rating', value: '4.8 ★' },
      { label: 'Verified Doctors', value: '1,200+' },
      { label: 'Active Patients', value: '65,000+' }
    ],
    client: 'MedSphere Diagnostics',
    duration: '4 Months',
    liveUrl: '#contact',
  },
  {
    id: 'project-4',
    title: 'FinTech Micro-Lending Portal',
    category: 'Web Apps',
    tagline: 'Instant paperless KYC loan sanctioning engine with Aadhaar & PAN validation',
    description: 'Engineered a bank-grade lending dashboard with automated OCR document parsing, credit bureau scoring, e-Sign integration, and automated NEFT disbursement webhooks.',
    image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1000&q=80',
    technologies: ['React', 'Express', 'Python FastAPI', 'MongoDB', 'AWS S3', 'Tailwind'],
    metrics: [
      { label: 'KYC Verification', value: '< 90 Sec' },
      { label: 'Default Rate', value: '< 1.2%' },
      { label: 'Disbursements', value: '₹12 Cr+' }
    ],
    client: 'CapitalGrow Financial',
    duration: '3.5 Months',
    liveUrl: '#contact',
  },
  {
    id: 'project-5',
    title: 'Apex Real Estate Noida - SEO & Lead Engine',
    category: 'SEO & Marketing',
    tagline: 'Local Search dominance and organic lead generation for premium high-rises',
    description: 'Executed technical SEO overhaul, high-converting interactive floorplan tour pages, and targeted Google Search Ads campaign driving high net-worth property buyer inquiries.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1000&q=80',
    technologies: ['Technical SEO', 'Schema Markup', 'Google Ads', 'WordPress Headless', 'Google Analytics 4'],
    metrics: [
      { label: 'Organic Traffic', value: '+310%' },
      { label: 'Cost Per Lead', value: '-42%' },
      { label: 'Qualified Inquiries', value: '850+/mo' }
    ],
    client: 'Apex Group Noida',
    duration: 'Ongoing',
    liveUrl: '#contact',
  },
  {
    id: 'project-6',
    title: 'FitTrack Pro - Gym & Wellness SaaS',
    category: 'Mobile Apps',
    tagline: 'Member check-ins, biometric sync, and workout coaching app',
    description: 'Delivered a high-retention fitness tracking mobile application with calorie counters, Apple Health & Google Fit sync, and trainer-client chat integration.',
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1000&q=80',
    technologies: ['Flutter', 'Dart', 'Node.js', 'MongoDB', 'HealthKit API'],
    metrics: [
      { label: 'Monthly Active', value: '28,000+' },
      { label: 'Retention Rate', value: '74%' },
      { label: 'Workouts Logged', value: '1.4M+' }
    ],
    client: 'FitLife Gym Network',
    duration: '2.5 Months',
    liveUrl: '#contact',
  },
  {
    id: 'project-7',
    title: 'Pulse SaaS - Complete Visual Brand & UI Kit',
    category: 'Design & Video',
    tagline: 'End-to-end corporate identity, vector logo system, and marketing collaterals',
    description: 'Designed comprehensive corporate visual identity including geometric vector logo mark, custom color theory guidelines, 120+ social media ad templates, investor pitch decks, and Figma UI design system.',
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=1000&q=80',
    technologies: ['Graphic Design', 'Figma', 'Adobe Illustrator', 'Photoshop', 'Brand Guidelines'],
    metrics: [
      { label: 'Brand Recognition', value: '+180%' },
      { label: 'Collaterals Created', value: '150+ Assets' },
      { label: 'Client Approval', value: '100% On-Time' }
    ],
    client: 'Pulse Cloud Technologies',
    duration: '1 Month',
    liveUrl: '#contact',
  },
  {
    id: 'project-8',
    title: 'Velocity Media - Viral Reel & YouTube Production',
    category: 'Design & Video',
    tagline: 'High-pacing YouTube documentaries, viral Instagram Reels with kinetic typography',
    description: 'Produced 40+ high-retention vertical videos (Reels/Shorts) and multi-part YouTube series featuring custom audio design, 2D motion graphics, 3D title openers, color grading, and dynamic subtitling.',
    image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1000&q=80',
    technologies: ['Video Editing', 'Premiere Pro', 'After Effects', 'DaVinci Resolve', 'Sound Design'],
    metrics: [
      { label: 'Total Views', value: '5.8M+' },
      { label: 'Retention Rate', value: '76%' },
      { label: 'Follower Growth', value: '+62K' }
    ],
    client: 'Velocity Creator Studio',
    duration: 'Ongoing',
    liveUrl: '#contact',
  }
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: 'test-1',
    name: 'Vikramaditya Singhania',
    role: 'Managing Director',
    company: 'Apex Infra & Real Estate',
    location: 'Noida, Sector 62',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    content: 'Vidyasagar and the VS Technology team delivered a world-class website that elevated our corporate image instantly. The SEO optimizations brought us genuine property buyer leads within weeks. Their communication on WhatsApp was instantaneous!',
    projectType: 'Web Portal & Local SEO'
  },
  {
    id: 'test-2',
    name: 'Pooja Kashyap',
    role: 'Co-Founder & COO',
    company: 'Aura Luxe Apparels',
    location: 'Delhi NCR',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    content: 'Our e-commerce store was lagging and losing cart conversions. Vidyasagar completely revamped the checkout architecture, integrated UPI 1-click payment, and made our site load in 1.1 seconds. Our conversions jumped 3x!',
    projectType: 'E-Commerce & Performance Optimization'
  },
  {
    id: 'test-3',
    name: 'Dr. Ankit Verma',
    role: 'Chief Medical Officer',
    company: 'MedSphere Diagnostics',
    location: 'Gurugram, Haryana',
    avatar: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    content: 'Finding a reliable Computer Science engineer who understands both backend reliability and clean mobile UI is rare. Vidyasagar built our patient teleconsult app with zero bugs. Truly top-tier engineering talent!',
    projectType: 'React Native Mobile App'
  },
  {
    id: 'test-4',
    name: 'Rohan Mehta',
    role: 'Founder',
    company: 'TransLogix India',
    location: 'Greater Noida',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    content: 'We manage over 450 freight trucks daily. The custom ERP dashboard Vidyasagar engineered streamlined our driver allocations and automated invoices. Super prompt support and transparent pricing.',
    projectType: 'Full-Stack ERP System'
  }
];

export const TECH_STACK = [
  { category: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Redux Toolkit', 'HTML5/CSS3'] },
  { category: 'Backend & APIs', items: ['Node.js', 'Express', 'Python', 'FastAPI', 'REST APIs', 'GraphQL'] },
  { category: 'Databases & Cloud', items: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'AWS', 'Google Cloud', 'Docker'] },
  { category: 'Mobile & Hybrid', items: ['React Native', 'Flutter', 'Expo', 'Android Studio', 'iOS Xcode'] },
  { category: 'Digital Marketing & SEO', items: ['Technical SEO', 'Google Search Console', 'Ahrefs', 'Google Analytics 4', 'Meta Ads'] }
];

export const WHY_CHOOSE_US = [
  {
    title: 'Customer-Centric Execution',
    desc: 'We do not believe in cookie-cutter templates. Every line of code and user interface is custom-crafted around your specific business goals and customer psychology.',
    icon: 'Users'
  },
  {
    title: 'Instant WhatsApp & Phone Support',
    desc: 'No endless ticket queues or days of silence. You get direct access to Vidyasagar on WhatsApp and phone for real-time collaboration and rapid updates.',
    icon: 'MessageSquare'
  },
  {
    title: 'High-Performance & SEO-First',
    desc: 'All websites are built strictly with 90+ Google Lighthouse score standards, structured schema markup, and responsive layouts to rank on Google from day one.',
    icon: 'Zap'
  },
  {
    title: 'Transparent Pricing & Strict Timelines',
    desc: 'Clear scope of work, milestone-based deliverables, zero hidden charges, and a 100% on-time project completion track record.',
    icon: 'CheckCircle2'
  },
  {
    title: 'End-to-End Post-Launch Warranty',
    desc: 'Your journey does not end at launch. We provide 30-60 days of free ongoing technical support, bug fixes, and server monitoring.',
    icon: 'ShieldCheck'
  },
  {
    title: 'Verified CSE Engineering Expertise',
    desc: 'Led by Vidyasagar Chaurasiya, a qualified Computer Science Engineer (CSE) with deep knowledge in distributed systems, security, and scalable UI.',
    icon: 'Award'
  }
];

export const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Plan',
    desc: 'In-depth requirement analysis, architectural scoping, competitive research, and milestone timelines.',
    icon: 'Search'
  },
  {
    step: '02',
    title: 'Design',
    desc: 'Modern UX/UI prototypes, brand style guides, high-fidelity Figma mockups, and interactive workflows.',
    icon: 'Layout'
  },
  {
    step: '03',
    title: 'Develop',
    desc: 'Clean, secure, modular full-stack development using modern technologies (React, WordPress, PHP, Laravel, Node.js).',
    icon: 'Code'
  },
  {
    step: '04',
    title: 'Test',
    desc: 'Multi-device responsive testing, cross-browser validation, speed optimization, and security audits.',
    icon: 'CheckSquare'
  },
  {
    step: '05',
    title: 'Deliver',
    desc: 'Production deployment, domain & DNS setup, SSL configuration, and zero-downtime client handover.',
    icon: 'Rocket'
  },
  {
    step: '06',
    title: 'Support',
    desc: '24/7 technical monitoring, complimentary post-launch warranty, ongoing bug fixes, and maintenance.',
    icon: 'ShieldCheck'
  },
  {
    step: '07',
    title: 'Market',
    desc: 'Targeted SEO ranking, Google Ads, Meta Ads, social media marketing, and data-driven conversion growth.',
    icon: 'Zap'
  }
];

export const FAQS = [
  {
    q: 'How do I contact Vidyasagar directly for a new project?',
    a: 'You can submit the contact form on this page which alerts Vidyasagar via Email and opens a pre-formatted WhatsApp chat, or click the fixed WhatsApp or Call button to connect directly at +91 95985-30662 or +91 63886-03391.'
  },
  {
    q: 'How long does a custom website or application take to build?',
    a: 'A standard responsive corporate or portfolio website takes 1 to 2 weeks. Custom e-commerce portals take 2 to 4 weeks, and complex full-stack web applications or mobile apps typically take 4 to 8 weeks depending on specifications.'
  },
  {
    q: 'Will my website be mobile responsive and SEO-friendly?',
    a: 'Absolutely! Every single website we develop is 100% responsive across smartphones, tablets, laptops, and 4K displays, with built-in technical SEO, meta tags, OpenGraph tags, and Schema.org structured data.'
  },
  {
    q: 'Do you provide post-launch support and maintenance?',
    a: 'Yes, every project comes with 30 to 60 days of complimentary technical support, server monitoring, security updates, and bug fixes.'
  }
];
