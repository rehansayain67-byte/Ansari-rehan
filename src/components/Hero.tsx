import React from 'react';
import { Star, MessageCircle, Calendar, ChevronDown, MapPin } from 'lucide-react';
import { SALON_INFO } from '../data/salonData';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background Image Container with Measured Contrast Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/hero_salon_interior_1790959684790.jpg"
          alt="7 Wonders Studio luxury unisex salon interior in Bandra West Mumbai"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center scale-[1.02] transform transition-transform duration-1000 ease-out"
        />
        {/* Measured scrim to guarantee WCAG AA contrast against rich photography */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F1012] via-[#0F1012]/80 to-[#0F1012]/50" />
        <div className="absolute inset-0 bg-[#0F1012]/40 backdrop-brightness-[0.85]" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Social Proof & Location Tagline - Zero-Pill Discipline */}
        <div className="inline-flex items-center gap-2.5 text-xs sm:text-sm font-medium tracking-wide text-[#E5C583] mb-6">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-[#D4AF37] text-[#D4AF37]" />
            <span className="font-semibold text-[#FDFBF7] tabular-nums">4.8</span>
          </div>
          <span aria-hidden="true" className="text-[#C5A059]/60">·</span>
          <span className="text-[#E5E0D8] tabular-nums">591 Google Reviews</span>
          <span aria-hidden="true" className="text-[#C5A059]/60">·</span>
          <span className="flex items-center gap-1 text-[#E5E0D8]">
            <MapPin className="w-3.5 h-3.5 text-[#C5A059]" />
            Libra Tower, Hill Rd, Bandra West
          </span>
        </div>

        {/* Marquee Headline */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-normal tracking-tight text-[#FDFBF7] leading-[1.1] max-w-4xl text-balance">
          Your Style. Your Beauty.{' '}
          <span className="italic font-light text-[#E5C583]">Your 7 Wonders.</span>
        </h1>

        {/* Supporting Copy */}
        <p className="mt-6 text-base sm:text-lg md:text-xl text-[#E5E0D8]/90 max-w-2xl font-light leading-relaxed text-balance">
          Professional hair, beauty and grooming services for women and men in the heart of Bandra West.
        </p>

        {/* CTAs */}
        <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full sm:w-auto">
          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-sm font-medium tracking-wide text-[#0F1012] bg-gradient-to-r from-[#D4AF37] to-[#C5A059] hover:from-[#E5C583] hover:to-[#D4AF37] rounded transition-all duration-200 shadow-lg shadow-[#C5A059]/20 hover:shadow-[#C5A059]/30 active:scale-[0.98] cursor-pointer"
          >
            <Calendar className="w-4 h-4" />
            <span>Book an Appointment</span>
          </button>

          <a
            href={SALON_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-medium tracking-wide text-[#FDFBF7] bg-[#16171A]/80 hover:bg-[#202227] border border-[#C5A059]/30 hover:border-[#C5A059]/60 rounded transition-all duration-200 active:scale-[0.98]"
          >
            <MessageCircle className="w-4 h-4 text-[#25D366]" />
            <span>WhatsApp Us</span>
          </a>
        </div>

        {/* Quick Trust Highlights */}
        <div className="mt-12 pt-8 border-t border-[#2A2C32]/60 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 w-full max-w-3xl text-left sm:text-center text-xs text-[#E5E0D8]/70">
          <div>
            <div className="font-serif text-lg sm:text-xl text-[#FDFBF7] font-normal">Unisex Salon</div>
            <div className="text-[11px] text-[#C5A059] mt-0.5">Women & Men Specialists</div>
          </div>
          <div>
            <div className="font-serif text-lg sm:text-xl text-[#FDFBF7] font-normal">Opens 10:00 AM</div>
            <div className="text-[11px] text-[#C5A059] mt-0.5">7 Days a Week</div>
          </div>
          <div>
            <div className="font-serif text-lg sm:text-xl text-[#FDFBF7] font-normal tabular-nums">4.8 ★ Rating</div>
            <div className="text-[11px] text-[#C5A059] mt-0.5 tabular-nums">591 Real Reviews</div>
          </div>
          <div>
            <div className="font-serif text-lg sm:text-xl text-[#FDFBF7] font-normal">Hill Road</div>
            <div className="text-[11px] text-[#C5A059] mt-0.5">Ground Floor, Libra Tower</div>
          </div>
        </div>

        {/* Subtle Scroll Down Prompt */}
        <a
          href="#about"
          className="mt-10 inline-flex flex-col items-center gap-1.5 text-xs text-[#E5E0D8]/50 hover:text-[#C5A059] transition-colors focus:outline-none"
          aria-label="Scroll down to About section"
        >
          <span className="tracking-widest uppercase text-[10px]">Discover</span>
          <ChevronDown className="w-4 h-4 animate-bounce text-[#C5A059]/80" />
        </a>
      </div>
    </section>
  );
};
