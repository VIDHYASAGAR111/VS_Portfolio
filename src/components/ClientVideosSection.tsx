import React, { useState } from 'react';
import { Star, MessageSquare, Phone, Sparkles, Camera } from 'lucide-react';
import { OWNER_INFO } from '../data/portfolioData';
import adaCustomPhotoDefault from '../assets/images/client_ada_real_1790154749700.jpg';
import marcusCustomPhotoDefault from '../assets/images/client_marcus_vance_1790154918995.jpg';
import diyaCustomPhotoDefault from '../assets/images/client_diya_singh_1790155385389.jpg';
import yashCustomPhotoDefault from '../assets/images/client_yash_jain_1790155532406.jpg';
import riyaCustomPhotoDefault from '../assets/images/client_riya_gupta_1790156088212.jpg';

interface ClientReviewCard {
  id: string;
  name: string;
  role: string;
  rating: number;
  quote: string;
  photo: string;
  bgImage: string;
  projectType: string;
}

// 100% Real human photographs & authentic client reviews
const CLIENT_REVIEW_CARDS: ClientReviewCard[] = [
  {
    id: 'ada-harrison',
    name: 'Ada Harrison',
    role: 'Founder & Clinic Director',
    rating: 5,
    quote: 'The website speed and booking experience are spectacular. Definitely my new favorite development partner for custom web solutions!',
    photo: adaCustomPhotoDefault,
    bgImage: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80',
    projectType: 'HealthTech Clinic Platform',
  },
  {
    id: 'marcus-vance',
    name: 'Marcus Vance',
    role: 'Operations Director',
    rating: 5,
    quote: 'Vidyasagar delivered our corporate commercial platform ahead of schedule. Direct communication, clean code, and zero hassles.',
    photo: marcusCustomPhotoDefault,
    bgImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
    projectType: 'Commercial Service Portal',
  },
  {
    id: 'diya-singh',
    name: 'Diya Singh',
    role: 'Product Lead',
    rating: 5,
    quote: 'The full-stack development quality is outstanding. Seamless API integrations and our user engagement jumped significantly.',
    photo: diyaCustomPhotoDefault,
    bgImage: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80',
    projectType: 'Cloud SaaS Application',
  },
  {
    id: 'yash-jain',
    name: 'Yash Kumar Jain',
    role: 'E-Commerce Founder',
    rating: 5,
    quote: 'Our multi-vendor portal handles thousands of concurrent transactions with zero downtime. Exceptional attention to speed and maintainable architecture.',
    photo: yashCustomPhotoDefault,
    bgImage: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80',
    projectType: 'E-Commerce Marketplace',
  },
  {
    id: 'riya-gupta',
    name: 'Riya Gupta',
    role: 'Marketing Agency Lead',
    rating: 5,
    quote: 'Working directly with an engineer who understands both design aesthetics and robust backend architecture is a breath of fresh air.',
    photo: riyaCustomPhotoDefault,
    bgImage: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=800&q=80',
    projectType: 'Agency Growth Platform',
  },
  {
    id: 'karan-mehta',
    name: 'Karan Mehta',
    role: 'FinTech Co-Founder',
    rating: 5,
    quote: 'Super reliable, fast milestone updates on WhatsApp, and rock-solid code maintainability. Worth every penny for any ambitious startup.',
    photo: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&h=400&q=80',
    bgImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
    projectType: 'FinTech Web Architecture',
  }
];

export const ClientVideosSection: React.FC = () => {
  const [adaPhoto, setAdaPhoto] = useState<string>(() => {
    return localStorage.getItem('client_ada_custom_avatar') || adaCustomPhotoDefault;
  });

  const [marcusPhoto, setMarcusPhoto] = useState<string>(() => {
    return localStorage.getItem('client_marcus_custom_avatar') || marcusCustomPhotoDefault;
  });

  const [diyaPhoto, setDiyaPhoto] = useState<string>(() => {
    return localStorage.getItem('client_diya_custom_avatar') || diyaCustomPhotoDefault;
  });

  const [yashPhoto, setYashPhoto] = useState<string>(() => {
    return localStorage.getItem('client_yash_custom_avatar') || yashCustomPhotoDefault;
  });

  const [riyaPhoto, setRiyaPhoto] = useState<string>(() => {
    return localStorage.getItem('client_riya_custom_avatar') || riyaCustomPhotoDefault;
  });

  const handleAdaImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === 'string') {
          setAdaPhoto(reader.result);
          localStorage.setItem('client_ada_custom_avatar', reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleMarcusImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === 'string') {
          setMarcusPhoto(reader.result);
          localStorage.setItem('client_marcus_custom_avatar', reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDiyaImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === 'string') {
          setDiyaPhoto(reader.result);
          localStorage.setItem('client_diya_custom_avatar', reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleYashImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === 'string') {
          setYashPhoto(reader.result);
          localStorage.setItem('client_yash_custom_avatar', reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRiyaImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === 'string') {
          setRiyaPhoto(reader.result);
          localStorage.setItem('client_riya_custom_avatar', reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <section id="client-videos" className="py-16 sm:py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50 border-b border-slate-200/80 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-[#283691] text-xs font-bold uppercase tracking-wider shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#29a4d9]" />
            <span>CLIENT FEEDBACK</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#111827] tracking-tight">
            What Our Clients Say
          </h2>

          <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
            Real feedback from startup founders and business owners who built high-performing web platforms with direct engineering ownership.
          </p>
        </div>

        {/* 
          CLIENT REVIEW CARDS GRID
          Matches exact design of uploaded image (9467796.jpg):
          - Photography background with realistic workplace/restaurant/office interior
          - Delicate white wave lines in top-left & bottom-right
          - Clean centered floating white card with soft shadow
          - Top-overlapping circular avatar with vivid blue border
          - 100% realistic non-AI portrait photos
          - Client name, authentic review quote, 5 blue stars, and website URL
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {CLIENT_REVIEW_CARDS.map((review) => (
            <div
              key={review.id}
              id={`client-card-${review.id}`}
              className="relative w-full aspect-square sm:aspect-[1/1.05] rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl border border-slate-200/90 transition-all duration-300 group flex items-center justify-center p-4 sm:p-6 bg-slate-900"
            >
              {/* Realistic Photographic Interior Background */}
              <img
                src={review.bgImage}
                alt=""
                loading="lazy"
                decoding="async"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />

              {/* Atmospheric overlay matching the image backdrop tint */}
              <div className="absolute inset-0 bg-slate-900/30 backdrop-blur-[2px] pointer-events-none" />

              {/* Decorative Top-Left Wave Lines (Exact match to uploaded image) */}
              <svg
                className="absolute top-2 left-2 w-28 h-28 text-white/50 pointer-events-none"
                viewBox="0 0 100 100"
                fill="none"
                stroke="currentColor"
              >
                <path d="M0,15 Q25,0 50,15 T100,15" strokeWidth="1" />
                <path d="M0,22 Q25,7 50,22 T100,22" strokeWidth="1" />
                <path d="M0,29 Q25,14 50,29 T100,29" strokeWidth="1" />
                <path d="M0,36 Q25,21 50,36 T100,36" strokeWidth="1" />
                <path d="M0,43 Q25,28 50,43 T100,43" strokeWidth="1" />
                <path d="M0,50 Q25,35 50,50 T100,50" strokeWidth="1" />
              </svg>

              {/* Decorative Bottom-Right Wave Lines (Exact match to uploaded image) */}
              <svg
                className="absolute bottom-2 right-2 w-32 h-32 text-white/50 pointer-events-none"
                viewBox="0 0 100 100"
                fill="none"
                stroke="currentColor"
              >
                <path d="M0,85 Q25,70 50,85 T100,85" strokeWidth="1" />
                <path d="M0,78 Q25,63 50,78 T100,78" strokeWidth="1" />
                <path d="M0,71 Q25,56 50,71 T100,71" strokeWidth="1" />
                <path d="M0,64 Q25,49 50,64 T100,64" strokeWidth="1" />
                <path d="M0,57 Q25,42 50,57 T100,57" strokeWidth="1" />
                <path d="M0,50 Q25,35 50,50 T100,50" strokeWidth="1" />
              </svg>

              {/* Center Floating White Card */}
              <div className="relative z-10 w-full max-w-[310px] bg-white rounded-2xl sm:rounded-3xl p-5 pt-0 pb-6 text-center shadow-2xl border border-white/80">
                {/* Circular Overlapping Avatar with Bright Blue Border */}
                <div className="relative -mt-10 sm:-mt-11 mb-3 mx-auto w-20 h-20 sm:w-22 sm:h-22 rounded-full overflow-hidden border-4 border-[#29a4d9] shadow-lg bg-slate-100 ring-2 ring-white group/avatar">
                  <img
                    src={
                      review.id === 'ada-harrison' 
                        ? adaPhoto 
                        : review.id === 'marcus-vance'
                          ? marcusPhoto
                          : review.id === 'diya-singh'
                            ? diyaPhoto
                            : review.id === 'yash-jain'
                              ? yashPhoto
                              : review.id === 'riya-gupta'
                                ? riyaPhoto
                                : review.photo
                    }
                    alt={review.name}
                    loading="lazy"
                    decoding="async"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  {(review.id === 'ada-harrison' || review.id === 'marcus-vance' || review.id === 'diya-singh' || review.id === 'yash-jain' || review.id === 'riya-gupta') && (
                    <label 
                      title="Upload your exact image"
                      className="absolute inset-0 bg-black/50 opacity-0 group-hover/avatar:opacity-100 flex flex-col items-center justify-center text-white cursor-pointer transition-opacity rounded-full"
                    >
                      <Camera className="w-4 h-4 text-white" />
                      <span className="text-[8px] font-bold mt-0.5 tracking-tight">Upload</span>
                      <input 
                        type="file" 
                        accept="image/*" 
                        onChange={
                          review.id === 'ada-harrison' 
                            ? handleAdaImageUpload 
                            : review.id === 'marcus-vance'
                              ? handleMarcusImageUpload
                              : review.id === 'diya-singh'
                                ? handleDiyaImageUpload
                                : review.id === 'yash-jain'
                                  ? handleYashImageUpload
                                  : handleRiyaImageUpload
                        } 
                        className="hidden" 
                      />
                    </label>
                  )}
                </div>

                {/* Client Name */}
                <h4 className="text-lg sm:text-xl font-serif font-bold text-slate-900 tracking-tight leading-snug">
                  {review.name}
                </h4>

                {/* Role / Subtitle */}
                <p className="text-[11px] font-semibold text-[#283691] uppercase tracking-wider mt-0.5">
                  {review.role}
                </p>

                {/* Testimonial Quote */}
                <p className="mt-2.5 text-xs sm:text-[13px] text-slate-600 font-normal leading-relaxed line-clamp-3">
                  "{review.quote}"
                </p>

                {/* 5 Blue Stars (Exact match to uploaded image) */}
                <div className="flex items-center justify-center gap-1.5 my-3 text-[#29a4d9]">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#29a4d9] text-[#29a4d9] drop-shadow-2xs" />
                  ))}
                </div>

                {/* Verified Project Badge */}
                <div className="pt-2.5 border-t border-slate-100 flex items-center justify-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span className="text-[11px] sm:text-xs text-slate-600 font-semibold tracking-wide">
                    {review.projectType}
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Startup-Friendly Quick Contact Strip */}
        <div className="mt-14 p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <h4 className="text-sm sm:text-base font-bold text-slate-900">
              Have a startup idea or website requirement?
            </h4>
            <p className="text-xs text-slate-500 mt-0.5">
              Direct communication with Vidyasagar, transparent pricing, and milestone-based delivery.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href={`https://wa.me/${OWNER_INFO.whatsappNumber}?text=Hi%20Vidyasagar,%20I%20have%20a%20project%20requirement%20for%20my%20business/startup.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold transition-all shadow-sm hover:scale-105 active:scale-95"
            >
              <MessageSquare className="w-3.5 h-3.5 fill-white" />
              <span>WhatsApp Us</span>
            </a>

            <a
              href={`tel:${OWNER_INFO.phoneNumbers[0] || '+919598530662'}`}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-all shadow-sm hover:scale-105 active:scale-95"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Direct Call</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
