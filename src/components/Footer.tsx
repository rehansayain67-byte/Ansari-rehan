import React from 'react';
import { Phone, MessageCircle, MapPin, Clock, Star, Instagram } from 'lucide-react';
import { SALON_INFO } from '../data/salonData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0A0B0C] border-t border-[#2A2C32] text-[#E5E0D8]/70 pt-16 pb-24 lg:pb-12 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#2A2C32]/60">
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <span className="font-serif text-2xl text-[#FDFBF7] font-medium tracking-wide">
              7 Wonders Studio
            </span>
            <p className="text-xs text-[#E5E0D8]/80 leading-relaxed font-light">
              A premier unisex salon destination in Bandra West, Mumbai. Dedicated to exceptional hair design, technical treatments, beard sculpting, and restorative skincare.
            </p>
            <div className="flex items-center gap-2 text-xs text-[#E5C583]">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-[#D4AF37] text-[#D4AF37]" />
                ))}
              </div>
              <span className="font-semibold text-[#FDFBF7] tabular-nums">4.8</span>
              <span>· 591 Google Reviews</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#FDFBF7]">Navigation</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#" className="hover:text-[#C5A059] transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-[#C5A059] transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-[#C5A059] transition-colors">Salon Services</a></li>
              <li><a href="#why-us" className="hover:text-[#C5A059] transition-colors">Why 7 Wonders</a></li>
              <li><a href="#gallery" className="hover:text-[#C5A059] transition-colors">Studio Gallery</a></li>
              <li><a href="#reviews" className="hover:text-[#C5A059] transition-colors">Client Reviews</a></li>
              <li><a href="#location" className="hover:text-[#C5A059] transition-colors">Location & Hours</a></li>
            </ul>
          </div>

          {/* Services Quicklist */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#FDFBF7]">Specialty Services</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#services" className="hover:text-[#C5A059] transition-colors">Keratin Smoothening Treatments</a></li>
              <li><a href="#services" className="hover:text-[#C5A059] transition-colors">Balayage & Dimensional Color</a></li>
              <li><a href="#services" className="hover:text-[#C5A059] transition-colors">Precision Haircuts & Blow Dry</a></li>
              <li><a href="#services" className="hover:text-[#C5A059] transition-colors">Men’s Taper Fades & Beard Sculpt</a></li>
              <li><a href="#services" className="hover:text-[#C5A059] transition-colors">Hydra-Glow Facial & Skin Cleanups</a></li>
              <li><a href="#services" className="hover:text-[#C5A059] transition-colors">Hair Botox & Moisture Therapy</a></li>
            </ul>
          </div>

          {/* Studio Contact */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#FDFBF7]">Studio Desk</h4>
            <p className="flex items-start gap-2 text-xs">
              <MapPin className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
              <span>{SALON_INFO.address.shop}, {SALON_INFO.address.street}, Bandra West, Mumbai 400050</span>
            </p>
            <p className="flex items-center gap-2 text-xs">
              <Clock className="w-4 h-4 text-[#C5A059] shrink-0" />
              <span>Daily: {SALON_INFO.openingHours.opensAt} – {SALON_INFO.openingHours.closesAt}</span>
            </p>
            <p className="flex items-center gap-2 text-xs">
              <Phone className="w-4 h-4 text-[#C5A059] shrink-0" />
              <a href={SALON_INFO.phoneTel} className="font-mono tabular-nums hover:text-[#C5A059] transition-colors">
                {SALON_INFO.phone}
              </a>
            </p>
            <p className="flex items-center gap-2 text-xs">
              <MessageCircle className="w-4 h-4 text-[#25D366] shrink-0" />
              <a href={SALON_INFO.whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[#25D366] transition-colors">
                WhatsApp Booking Line
              </a>
            </p>
          </div>
        </div>

        {/* Local Bandra Search Keywords Pill-Free Text Area */}
        <div className="py-6 border-b border-[#2A2C32]/40 text-[11px] text-stone-500 flex flex-wrap items-center gap-x-2 gap-y-1">
          <span className="text-[#C5A059]/80 font-medium">Local Bandra West Salon:</span>
          <span>Hair salon in Bandra West Mumbai</span>
          <span>·</span>
          <span>Unisex salon Bandra West</span>
          <span>·</span>
          <span>Hair treatments Bandra West</span>
          <span>·</span>
          <span>Men’s grooming Bandra West</span>
          <span>·</span>
          <span>Balayage & Keratin Hill Road Bandra</span>
        </div>

        {/* Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-stone-500 gap-2">
          <div>
            © {new Date().getFullYear()} {SALON_INFO.name}. All rights reserved.
          </div>
          <div>
            Libra Tower, Hill Road, Bandra West, Mumbai 400050
          </div>
        </div>
      </div>
    </footer>
  );
};
