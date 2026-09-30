export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  icon: string;
  features: string[];
  techStack: string[];
  deliverables: string[];
  badge?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'Web Apps' | 'E-Commerce' | 'Mobile Apps' | 'SEO & Marketing' | 'Design & Video';
  tagline: string;
  description: string;
  image: string;
  technologies: string[];
  metrics: { label: string; value: string }[];
  client: string;
  duration: string;
  liveUrl?: string;
  githubUrl?: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  location: string;
  avatar: string;
  rating: number;
  content: string;
  projectType: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  budget: string;
  message: string;
}

export interface BackendInquiry {
  id: string;
  name: string;
  email: string;
  phone: string;
  service: string;
  budget: string;
  message: string;
  createdAt: string;
  emailSent: boolean;
  whatsappLink: string;
}

export interface OwnerProfile {
  name: string;
  title: string;
  companyName: string;
  email: string;
  salesEmail?: string;
  whatsappNumber: string;
  phoneDisplay: string;
  phoneNumbers?: string[];
  linkedin: string;
  companyLinkedIn: string;
  location: string;
  usOffice?: string;
}
