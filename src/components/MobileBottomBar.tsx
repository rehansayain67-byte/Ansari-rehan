import React from 'react';
import { Phone, MessageCircle, Calendar } from 'lucide-react';
import { SALON_INFO } from '../data/salonData';

interface MobileBottomBarProps {
  onOpenBooking: () => void;
}

export const MobileBottomBar: React.FC<MobileBottomBarProps> = ({ onOpenBooking }) => {
  return (
    <aside
      aria-label="Quick contact actions"
      className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0F1012]/95 backdrop-blur-lg border-t border-[#2A2C32] px-3 py-2 shadow-2xl safe-area-bottom"
    >
      <div className="max-w-md mx-auto grid grid-cols-3 gap-2 text-xs">
        {/* Call Salon Action */}
        <a
          href={SALON_INFO.phoneTel}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-lg bg-[#16171A] border border-[#2A2C32] text-[#FDFBF7] active:bg-[#202227] transition-colors"
          title={`Call ${SALON_INFO.phone}`}
        >
          <Phone className="w-4 h-4 text-[#C5A059] mb-0.5" />
          <span className="text-[11px] font-medium leading-none">Call</span>
        </a>

        {/* WhatsApp Direct */}
        <a
          href={SALON_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-lg bg-[#16171A] border border-[#2A2C32] text-[#FDFBF7] active:bg-[#202227] transition-colors"
          title="WhatsApp Salon Desk"
        >
          <MessageCircle className="w-4 h-4 text-[#25D366] mb-0.5" />
          <span className="text-[11px] font-medium leading-none">WhatsApp</span>
        </a>

        {/* Book Now Button */}
        <button
          onClick={onOpenBooking}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-lg bg-gradient-to-r from-[#D4AF37] to-[#C5A059] text-[#0F1012] font-semibold active:opacity-90 shadow-md transition-all cursor-pointer"
          title="Book Appointment"
        >
          <Calendar className="w-4 h-4 mb-0.5" />
          <span className="text-[11px] leading-none">Book Now</span>
        </button>
      </div>
    </aside>
  );
};
