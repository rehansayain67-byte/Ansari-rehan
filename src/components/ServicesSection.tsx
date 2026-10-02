import React, { useState } from 'react';
import { Scissors, Sparkles, User, Clock, Check, MessageCircle, Calendar, ArrowUpRight } from 'lucide-react';
import { SALON_SERVICES, SalonService, SALON_INFO } from '../data/salonData';

interface ServicesSectionProps {
  onOpenBooking: (serviceName?: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenBooking }) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'hair' | 'grooming' | 'beauty'>('all');

  const filteredServices = activeCategory === 'all'
    ? SALON_SERVICES
    : SALON_SERVICES.filter(service => service.category === activeCategory);

  const getCategoryIcon = (category: SalonService['category']) => {
    switch (category) {
      case 'hair':
        return <Scissors className="w-4 h-4 text-[#C5A059]" />;
      case 'grooming':
        return <User className="w-4 h-4 text-[#C5A059]" />;
      case 'beauty':
        return <Sparkles className="w-4 h-4 text-[#C5A059]" />;
    }
  };

  const createWhatsAppLink = (serviceName: string) => {
    const text = encodeURIComponent(`Hello 7 Wonders Studio, I would like to enquire about the "${serviceName}" service at your Bandra West salon.`);
    return `https://wa.me/919833679949?text=${text}`;
  };

  return (
    <section id="services" className="py-24 bg-[#0F1012] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C5A059] mb-3">
              Comprehensive Salon Menu
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#FDFBF7] tracking-tight">
              Curated Services for Men & Women
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#E5E0D8]/70 max-w-2xl">
              From signature precision haircuts and smoothing treatments to complete gentlemen’s grooming and luminous facials in Bandra West.
            </p>
          </div>

          <div className="mt-6 md:mt-0 text-xs text-[#E5E0D8]/60 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#25D366]" />
            <span>Consultations complimentary before every service</span>
          </div>
        </div>

        {/* Category Segmented Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
              activeCategory === 'all'
                ? 'bg-gradient-to-r from-[#D4AF37] to-[#C5A059] text-[#0F1012] shadow-sm'
                : 'bg-[#16171A] text-[#E5E0D8]/80 hover:text-[#FDFBF7] border border-[#2A2C32]'
            }`}
          >
            All Services ({SALON_SERVICES.length})
          </button>
          <button
            onClick={() => setActiveCategory('hair')}
            className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
              activeCategory === 'hair'
                ? 'bg-gradient-to-r from-[#D4AF37] to-[#C5A059] text-[#0F1012] shadow-sm'
                : 'bg-[#16171A] text-[#E5E0D8]/80 hover:text-[#FDFBF7] border border-[#2A2C32]'
            }`}
          >
            Hair Treatments & Styling
          </button>
          <button
            onClick={() => setActiveCategory('grooming')}
            className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
              activeCategory === 'grooming'
                ? 'bg-gradient-to-r from-[#D4AF37] to-[#C5A059] text-[#0F1012] shadow-sm'
                : 'bg-[#16171A] text-[#E5E0D8]/80 hover:text-[#FDFBF7] border border-[#2A2C32]'
            }`}
          >
            Men’s Grooming & Beard
          </button>
          <button
            onClick={() => setActiveCategory('beauty')}
            className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
              activeCategory === 'beauty'
                ? 'bg-gradient-to-r from-[#D4AF37] to-[#C5A059] text-[#0F1012] shadow-sm'
                : 'bg-[#16171A] text-[#E5E0D8]/80 hover:text-[#FDFBF7] border border-[#2A2C32]'
            }`}
          >
            Beauty, Facials & Skin
          </button>
        </div>

        {/* Services Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="group relative rounded-xl bg-[#141518] border border-[#2A2C32] hover:border-[#C5A059]/50 transition-all duration-300 p-6 flex flex-col justify-between hover:shadow-xl hover:shadow-black/40"
            >
              <div>
                {/* Header Row: Category & Duration */}
                <div className="flex items-center justify-between text-xs text-[#E5E0D8]/60 mb-3">
                  <div className="flex items-center gap-1.5 capitalize">
                    {getCategoryIcon(service.category)}
                    <span className="font-medium text-[#C5A059]">{service.category}</span>
                  </div>
                  <div className="flex items-center gap-1 tabular-nums font-mono">
                    <Clock className="w-3.5 h-3.5 text-stone-400" />
                    <span>{service.duration}</span>
                  </div>
                </div>

                {/* Service Title */}
                <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#FDFBF7] group-hover:text-[#E5C583] transition-colors leading-snug">
                  {service.name}
                </h3>

                {/* Description */}
                <p className="mt-2.5 text-xs sm:text-sm text-[#E5E0D8]/75 leading-relaxed font-light">
                  {service.description}
                </p>

                {/* Key Benefits */}
                <div className="mt-4 pt-4 border-t border-[#2A2C32]/60 space-y-1.5">
                  {service.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-[#E5E0D8]/85">
                      <Check className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 pt-4 border-t border-[#2A2C32] flex items-center justify-between gap-3">
                <button
                  onClick={() => onOpenBooking(service.name)}
                  className="flex-1 py-2 px-3 text-xs font-medium text-[#FDFBF7] bg-[#1E2024] hover:bg-[#C5A059] hover:text-[#0F1012] border border-[#2A2C32] hover:border-[#C5A059] rounded transition-all duration-200 flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Book Service</span>
                </button>

                <a
                  href={createWhatsAppLink(service.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2 px-3 text-xs text-[#E5E0D8] hover:text-[#25D366] hover:bg-[#1E2024] border border-[#2A2C32] rounded transition-colors flex items-center gap-1"
                  title="Enquire on WhatsApp"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                  <span className="hidden sm:inline">WhatsApp</span>
                  <ArrowUpRight className="w-3 h-3 opacity-60" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Pricing Transparency Note */}
        <div className="mt-12 p-6 rounded-xl bg-[#141518] border border-[#2A2C32] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h4 className="font-serif text-lg text-[#FDFBF7] font-normal">
              Tailored Quotes Based on Hair Length & Texture
            </h4>
            <p className="text-xs text-[#E5E0D8]/70 mt-1 max-w-2xl font-light">
              We never believe in hidden charges. Every technical color or smoothing appointment includes an in-depth preliminary strand analysis to ensure transparent recommendations and long-lasting hair health.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <a
              href={SALON_INFO.phoneTel}
              className="text-xs font-medium text-[#FDFBF7] hover:text-[#C5A059] transition-colors py-2 px-3 border border-[#2A2C32] rounded"
            >
              Call 098336 79949
            </a>
            <a
              href={SALON_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-medium text-[#0F1012] bg-[#C5A059] hover:bg-[#E5C583] transition-colors py-2 px-3.5 rounded"
            >
              Enquire on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
