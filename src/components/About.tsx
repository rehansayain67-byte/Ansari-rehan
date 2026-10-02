import React from 'react';
import { ArrowRight, Sparkles, ShieldCheck, HeartHandshake, Scissors } from 'lucide-react';
import { SALON_INFO } from '../data/salonData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-[#141518] relative overflow-hidden border-t border-[#2A2C32]/60">
      {/* Background ambient glow */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#C5A059]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Asset with Rounded Container and Badge */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[#2A2C32] bg-[#16171A] group">
              <img
                src="/src/assets/images/editorial_hairstyling_1790959697699.jpg"
                alt="Professional hair stylist at 7 Wonders Studio crafting balayage hair in Bandra West"
                referrerPolicy="no-referrer"
                className="w-full h-[460px] sm:h-[520px] object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F1012] via-transparent to-transparent opacity-80" />

              {/* Floating verified label */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#0F1012]/90 backdrop-blur-md border border-[#C5A059]/30">
                <div className="flex items-center justify-between text-xs text-[#E5E0D8]">
                  <span className="font-serif text-base text-[#FDFBF7]">Bandra West, Mumbai</span>
                  <span className="text-[#C5A059] font-medium">Hill Road Landmark</span>
                </div>
                <p className="mt-1 text-[11px] text-[#E5E0D8]/70">
                  Shop No. 4, Ground Floor, Libra Tower (Opens 10:00 AM)
                </p>
              </div>
            </div>

            {/* Subtle decorative offset border */}
            <div className="hidden sm:block absolute -top-3 -left-3 w-24 h-24 border-t-2 border-l-2 border-[#C5A059]/40 rounded-tl-xl pointer-events-none" />
          </div>

          {/* Right Column: Editorial Copy */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Section Tag */}
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C5A059] mb-3">
              About 7 Wonders Studio
            </div>

            {/* Heading */}
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#FDFBF7] tracking-tight leading-[1.15] text-balance">
              Where Style Meets Expertise
            </h2>

            {/* Narrative Prose */}
            <div className="mt-6 space-y-4 text-base text-[#E5E0D8]/85 leading-relaxed font-light">
              <p>
                Nestled on Hill Road inside Libra Tower, <strong className="text-[#FDFBF7] font-medium">7 Wonders Studio</strong> is Bandra West’s trusted unisex hair and grooming destination. We believe true style is an effortless reflection of your individuality — crafted through technical precision, premium formulations, and intuitive care.
              </p>
              <p>
                Whether you are seeking a transformative balayage, intensive keratin smoothening to tame Mumbai’s coastal humidity, a razor-sharp fade and beard sculpt, or a rejuvenating glow facial, our experienced salon professionals take the time to consult, design, and deliver.
              </p>
              <p className="text-sm text-stone-400">
                With a proud <span className="text-[#E5C583] font-medium">4.8-star rating from 591 verified client reviews</span>, our studio offers a calm, welcoming haven where both men and women enjoy bespoke luxury without intimidation.
              </p>
            </div>

            {/* Value Pillars */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3 p-3.5 rounded-lg bg-[#16171A] border border-[#2A2C32]">
                <Scissors className="w-5 h-5 text-[#C5A059] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-medium text-[#FDFBF7]">Tailored Craftsmanship</h4>
                  <p className="text-xs text-[#E5E0D8]/70 mt-0.5">Bespoke cuts, coloring, and styling tailored to your bone structure and daily routine.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-lg bg-[#16171A] border border-[#2A2C32]">
                <ShieldCheck className="w-5 h-5 text-[#C5A059] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-medium text-[#FDFBF7]">Strict Hygiene & Premium Care</h4>
                  <p className="text-xs text-[#E5E0D8]/70 mt-0.5">Sterilized instruments, clean stations, and salon-grade professional products.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-lg bg-[#16171A] border border-[#2A2C32]">
                <Sparkles className="w-5 h-5 text-[#C5A059] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-medium text-[#FDFBF7]">Unisex Salon Environment</h4>
                  <p className="text-xs text-[#E5E0D8]/70 mt-0.5">Dedicated zones and skilled specialists for both men’s grooming and women’s salon care.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-lg bg-[#16171A] border border-[#2A2C32]">
                <HeartHandshake className="w-5 h-5 text-[#C5A059] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-medium text-[#FDFBF7]">Central Bandra Location</h4>
                  <p className="text-xs text-[#E5E0D8]/70 mt-0.5">Ground floor convenience on Hill Road, easily accessible with warm hospitality.</p>
                </div>
              </div>
            </div>

            {/* Action Button */}
            <div className="mt-8 flex items-center gap-4">
              <a
                href="#services"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-[#0F1012] bg-[#E5C583] hover:bg-[#D4AF37] rounded transition-all duration-200 shadow-md shadow-[#C5A059]/10 cursor-pointer"
              >
                <span>Discover Our Studio Services</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={SALON_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs sm:text-sm text-[#E5E0D8] hover:text-[#C5A059] transition-colors py-2 px-3"
              >
                Questions? WhatsApp Us →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
