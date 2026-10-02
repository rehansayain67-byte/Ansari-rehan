import React from 'react';
import { MapPin, Phone, MessageCircle, Clock, Navigation, Compass, AlertCircle } from 'lucide-react';
import { SALON_INFO } from '../data/salonData';

export const LocationSection: React.FC = () => {
  return (
    <section id="location" className="py-24 bg-[#141518] relative border-t border-[#2A2C32]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C5A059] mb-3">
            Find Our Studio
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#FDFBF7] tracking-tight">
            Visit Us in Bandra West
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#E5E0D8]/75 font-light">
            Conveniently situated on Hill Road on the ground floor of Libra Tower. Walking distance from prominent Bandra fashion boutiques and cafés.
          </p>
        </div>

        {/* Split Grid: Details Card & Interactive Google Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Studio Address Card */}
          <div className="lg:col-span-5 flex flex-col justify-between p-8 sm:p-9 rounded-2xl bg-[#0F1012] border border-[#2A2C32] shadow-xl">
            <div>
              <div className="flex items-center gap-2 text-[#C5A059] mb-4">
                <Compass className="w-5 h-5" />
                <span className="text-xs uppercase tracking-widest font-mono">Bandra West Hub</span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#FDFBF7] leading-snug">
                7 Wonders Studio
              </h3>
              <p className="text-xs text-[#C5A059] uppercase tracking-wider mt-0.5 font-medium">
                Unisex Salon & Grooming
              </p>

              {/* Address Block */}
              <div className="mt-6 pt-6 border-t border-[#2A2C32]/80 space-y-3.5 text-sm text-[#E5E0D8]">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#C5A059] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-[#FDFBF7]">{SALON_INFO.address.shop}</p>
                    <p>{SALON_INFO.address.street}</p>
                    <p>{SALON_INFO.address.city}, {SALON_INFO.address.state} {SALON_INFO.address.pincode}</p>
                    <p className="text-xs text-stone-400 mt-1 font-light italic">
                      Landmark: {SALON_INFO.address.landmark}
                    </p>
                  </div>
                </div>

                {/* Operating Hours */}
                <div className="flex items-start gap-3 pt-3 border-t border-[#2A2C32]/50">
                  <Clock className="w-5 h-5 text-[#C5A059] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-[#FDFBF7]">Studio Hours</p>
                    <p className="text-xs text-[#E5E0D8]/90">
                      Open Daily: <span className="text-[#C5A059] font-medium">{SALON_INFO.openingHours.opensAt} – {SALON_INFO.openingHours.closesAt}</span>
                    </p>
                    <p className="text-[11px] text-stone-400 mt-0.5">
                      {SALON_INFO.openingHours.days}
                    </p>
                    <div className="flex items-center gap-1.5 mt-2 text-[11px] text-amber-200/80 bg-amber-950/20 px-2 py-1 rounded border border-amber-800/30">
                      <AlertCircle className="w-3 h-3 shrink-0" />
                      <span>{SALON_INFO.openingHours.note}</span>
                    </div>
                  </div>
                </div>

                {/* Direct Telephone */}
                <div className="flex items-center gap-3 pt-3 border-t border-[#2A2C32]/50">
                  <Phone className="w-5 h-5 text-[#C5A059] shrink-0" />
                  <div>
                    <p className="text-xs text-stone-400">Direct Desk</p>
                    <a
                      href={SALON_INFO.phoneTel}
                      className="text-base font-serif text-[#FDFBF7] hover:text-[#C5A059] transition-colors tabular-nums font-mono"
                    >
                      {SALON_INFO.phone}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="mt-8 pt-6 border-t border-[#2A2C32] flex flex-col sm:flex-row items-center gap-3">
              <a
                href={SALON_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:flex-1 py-3 px-4 rounded-lg bg-gradient-to-r from-[#D4AF37] to-[#C5A059] hover:from-[#E5C583] hover:to-[#D4AF37] text-[#0F1012] font-medium text-xs sm:text-sm text-center flex items-center justify-center gap-2 transition-all shadow-md shadow-[#C5A059]/10"
              >
                <Navigation className="w-4 h-4" />
                <span>Get Directions</span>
              </a>

              <a
                href={SALON_INFO.phoneTel}
                className="w-full sm:w-auto py-3 px-4 rounded-lg bg-[#16171A] hover:bg-[#202227] border border-[#2A2C32] text-[#FDFBF7] hover:text-[#C5A059] text-xs sm:text-sm text-center flex items-center justify-center gap-1.5 transition-colors"
              >
                <Phone className="w-4 h-4 text-[#C5A059]" />
                <span>Call Salon</span>
              </a>

              <a
                href={SALON_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto py-3 px-4 rounded-lg bg-[#16171A] hover:bg-[#202227] border border-[#2A2C32] text-[#25D366] text-xs sm:text-sm text-center flex items-center justify-center gap-1.5 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Right Column: Embedded Google Map */}
          <div className="lg:col-span-7 rounded-2xl overflow-hidden border border-[#2A2C32] shadow-xl relative min-h-[380px] bg-[#16171A]">
            <iframe
              title="7 Wonders Studio Bandra West Location Map"
              src={SALON_INFO.embedMapUrl}
              className="w-full h-full min-h-[420px] filter invert-[0.9] hue-rotate-[180deg] contrast-[1.1] grayscale-[0.3]"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
            {/* Top location tag overlay */}
            <div className="absolute top-4 left-4 bg-[#0F1012]/90 backdrop-blur-md px-3.5 py-2 rounded-lg border border-[#2A2C32] text-xs text-[#FDFBF7] pointer-events-none shadow-md">
              <span className="text-[#C5A059] font-medium">Hill Road</span> · Libra Tower, Bandra West
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
