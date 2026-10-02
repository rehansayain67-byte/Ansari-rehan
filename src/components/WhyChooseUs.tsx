import React from 'react';
import { Award, Users2, Sparkles, ShieldCheck, Gem, MapPin } from 'lucide-react';
import { SALON_INFO } from '../data/salonData';

export const WhyChooseUs: React.FC = () => {
  const reasons = [
    {
      icon: Award,
      title: 'Experienced Salon Professionals',
      description: 'Our team comprises certified senior stylists and aestheticians trained in advanced coloring, modern fades, and clinical scalp care.'
    },
    {
      icon: Users2,
      title: 'Unisex Salon Services',
      description: 'Thoughtfully designed spaces and tailored service suites for both men and women, delivering seamless grooming under one roof.'
    },
    {
      icon: Sparkles,
      title: 'Personalized Consultations',
      description: 'We listen first. Every appointment begins with an analysis of your facial symmetry, hair texture, and daily styling lifestyle.'
    },
    {
      icon: ShieldCheck,
      title: 'Professional Hair Treatments',
      description: 'Top-tier formaldehyde-safe keratin, bond repair, deep hydration therapies, and botanical infusions formulated for coastal climate resilience.'
    },
    {
      icon: Gem,
      title: 'Premium Salon Atmosphere',
      description: 'Impeccable hygiene, serene lighting, comfortable ergonomics, and genuine hospitality that transforms a routine cut into a ritual.'
    },
    {
      icon: MapPin,
      title: 'Convenient Bandra West Location',
      description: 'Prime ground-floor position inside Libra Tower on Hill Road, close to prominent shopping landmarks with effortless accessibility.'
    }
  ];

  return (
    <section id="why-us" className="py-24 bg-[#141518] relative border-t border-[#2A2C32]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C5A059] mb-3">
            The 7 Wonders Distinction
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#FDFBF7] tracking-tight">
            Why Bandra Chooses 7 Wonders Studio
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#E5E0D8]/75 font-light">
            Recognized by over 590 clients with a 4.8-star Google rating. Here is what sets our boutique salon apart in Mumbai’s fashion heartland.
          </p>
        </div>

        {/* 6 Feature Pillars in Asymmetric / Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, idx) => {
            const Icon = reason.icon;
            return (
              <div
                key={idx}
                className="p-8 rounded-xl bg-[#0F1012] border border-[#2A2C32] hover:border-[#C5A059]/40 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-lg bg-[#16171A] border border-[#2A2C32] flex items-center justify-center text-[#C5A059] group-hover:scale-105 group-hover:border-[#C5A059]/50 transition-all duration-300 mb-6">
                    <Icon className="w-6 h-6 stroke-[1.5]" />
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#FDFBF7] group-hover:text-[#E5C583] transition-colors">
                    {reason.title}
                  </h3>

                  <p className="mt-3 text-xs sm:text-sm text-[#E5E0D8]/70 leading-relaxed font-light">
                    {reason.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#2A2C32]/40 flex items-center justify-between text-[11px] text-[#C5A059]">
                  <span className="font-mono tabular-nums">0{idx + 1}</span>
                  <span className="tracking-wider uppercase text-[10px]">Verified Standard</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick Location & Schedule Callout */}
        <div className="mt-12 text-center text-xs text-[#E5E0D8]/70">
          <p>
            Experience the difference at <span className="text-[#FDFBF7] font-medium">{SALON_INFO.address.shop}, {SALON_INFO.address.street}</span> · Open daily from <span className="text-[#C5A059]">{SALON_INFO.openingHours.opensAt}</span>
          </p>
        </div>
      </div>
    </section>
  );
};
