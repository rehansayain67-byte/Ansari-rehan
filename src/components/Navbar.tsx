import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Menu, X, Calendar } from 'lucide-react';
import { SALON_INFO } from '../data/salonData';

interface NavbarProps {
  onOpenBooking: (serviceName?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Location', href: '#location' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0F1012]/95 backdrop-blur-md border-b border-[#2A2C32] py-3.5 shadow-xl shadow-black/20'
            : 'bg-gradient-to-b from-[#0F1012]/90 via-[#0F1012]/60 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Bar Contract: Zone 1 (Wordmark) — Zone 2 (Nav links) — Zone 3 (Primary Action) */}
          <div className="flex items-center justify-between">
            {/* Zone 1: Single text element wordmark in display serif */}
            <a
              href="#"
              className="group flex flex-col focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A059]"
            >
              <span className="font-serif text-2xl sm:text-3xl font-medium tracking-wide text-[#FDFBF7] group-hover:text-[#C5A059] transition-colors">
                7 Wonders Studio
              </span>
              <span className="text-[10px] tracking-[0.25em] text-[#C5A059] uppercase -mt-0.5">
                Unisex Salon · Bandra West
              </span>
            </a>

            {/* Zone 2: Clean text navigation links with subtle hover underlines */}
            <nav className="hidden lg:flex items-center gap-7 text-sm font-normal text-[#E5E0D8]/80">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="hover:text-[#FDFBF7] relative py-1 transition-colors group focus:outline-none focus-visible:ring-1 focus-visible:ring-[#C5A059]"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#C5A059] transition-all duration-200 group-hover:w-full" />
                </a>
              ))}
            </nav>

            {/* Zone 3: Primary Action & Direct Quick Contact */}
            <div className="flex items-center gap-3 sm:gap-4">
              <a
                href={SALON_INFO.phoneTel}
                className="hidden sm:inline-flex items-center gap-1.5 text-xs text-[#E5E0D8] hover:text-[#C5A059] transition-colors py-2 px-2.5 rounded border border-[#2A2C32] hover:border-[#C5A059]/40 bg-[#16171A]/70"
                title={`Call ${SALON_INFO.phone}`}
              >
                <Phone className="w-3.5 h-3.5 text-[#C5A059]" />
                <span className="tabular-nums font-mono">{SALON_INFO.phone}</span>
              </a>

              <a
                href={SALON_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center justify-center w-8 h-8 rounded border border-[#2A2C32] text-[#E5E0D8] hover:text-[#25D366] hover:border-[#25D366]/40 bg-[#16171A]/70 transition-colors"
                title="Chat on WhatsApp"
                aria-label="Chat on WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>

              <button
                onClick={() => onOpenBooking()}
                className="inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-medium tracking-wide text-[#0F1012] bg-gradient-to-r from-[#D4AF37] to-[#C5A059] hover:from-[#E5C583] hover:to-[#D4AF37] transition-all duration-200 rounded shadow-md shadow-[#C5A059]/10 active:scale-[0.98] whitespace-nowrap cursor-pointer"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Book Appointment</span>
              </button>

              {/* Mobile hamburger menu button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-[#E5E0D8] hover:text-[#C5A059] rounded border border-[#2A2C32] bg-[#16171A]/80 transition-colors cursor-pointer"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-[#2A2C32] bg-[#0F1012]/98 backdrop-blur-xl px-5 py-6 space-y-4 animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="grid grid-cols-2 gap-2 text-sm">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2.5 px-3 text-[#E5E0D8] hover:text-[#C5A059] hover:bg-[#16171A] rounded transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-[#2A2C32] flex flex-col gap-2.5 text-xs text-[#E5E0D8]/80">
              <div className="flex items-center justify-between text-stone-400">
                <span>Hill Rd, Bandra West</span>
                <span className="text-[#C5A059]">Opens 10:00 AM</span>
              </div>
              <div className="flex items-center gap-2 pt-1">
                <a
                  href={SALON_INFO.phoneTel}
                  className="flex-1 py-2.5 px-3 rounded border border-[#2A2C32] bg-[#16171A] text-center font-mono tabular-nums text-xs text-[#FDFBF7] flex items-center justify-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5 text-[#C5A059]" />
                  {SALON_INFO.phone}
                </a>
                <a
                  href={SALON_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 px-3 rounded border border-[#2A2C32] bg-[#16171A] text-center text-xs text-[#25D366] flex items-center justify-center gap-1.5"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
