import React, { useState, useEffect } from 'react';
import { X, Send, Calendar, Clock, Phone, MessageCircle, CheckCircle2 } from 'lucide-react';
import { SALON_INFO, SALON_SERVICES } from '../data/salonData';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  onClose,
  preselectedService,
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState(preselectedService || 'Couture Haircut & Blow Dry');
  const [date, setDate] = useState('');
  const [timeSlot, setTimeSlot] = useState('Morning (10:00 AM - 1:00 PM)');
  const [notes, setNotes] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (preselectedService) {
      setService(preselectedService);
    }
  }, [preselectedService]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
      setIsSuccess(false);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;

    const message = `Hello 7 Wonders Studio, I would like to request an appointment:
• Name: ${name}
• Phone: ${phone}
• Service: ${service}
• Preferred Date: ${date || 'Flexible / As soon as available'}
• Preferred Time: ${timeSlot}
• Special Notes: ${notes || 'None'}`;

    const encoded = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/919833679949?text=${encoded}`;

    setIsSuccess(true);
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative max-w-lg w-full bg-[#141518] rounded-2xl border border-[#2A2C32] p-6 sm:p-8 shadow-2xl overflow-y-auto max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#16171A] border border-[#2A2C32] text-stone-400 hover:text-[#FDFBF7] flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Close booking modal"
        >
          <X className="w-4 h-4" />
        </button>

        {isSuccess ? (
          <div className="py-6 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-emerald-950/60 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-serif text-2xl text-[#FDFBF7]">Booking Request Dispatched!</h3>
            <p className="text-xs sm:text-sm text-[#E5E0D8]/80 leading-relaxed font-light">
              We have opened WhatsApp to send your appointment details directly to our Bandra West reception. Our team will promptly confirm your slot.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={SALON_INFO.phoneTel}
                className="w-full sm:w-auto px-5 py-2.5 rounded bg-[#16171A] border border-[#2A2C32] text-xs text-[#FDFBF7] hover:border-[#C5A059] flex items-center justify-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>Call 098336 79949</span>
              </a>
              <button
                onClick={onClose}
                className="w-full sm:w-auto px-5 py-2.5 rounded bg-[#C5A059] text-xs text-[#0F1012] font-medium hover:bg-[#E5C583] transition-colors cursor-pointer"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#C5A059]">
                7 Wonders Studio · Bandra West
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#FDFBF7] font-normal mt-1">
                Book an Appointment
              </h3>
              <p className="text-xs text-[#E5E0D8]/70 mt-1 font-light">
                Shop No. 4, Libra Tower, Hill Road (Opens 10:00 AM)
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs text-[#E5E0D8]/80 mb-1 font-medium">Your Name *</label>
                <input
                  type="text"
                  required
                  placeholder="Full Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#0F1012] border border-[#2A2C32] text-sm text-[#FDFBF7] placeholder-stone-500 focus:outline-none focus:border-[#C5A059] transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs text-[#E5E0D8]/80 mb-1 font-medium">Mobile / WhatsApp Number *</label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. 98336XXXXX"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#0F1012] border border-[#2A2C32] text-sm text-[#FDFBF7] placeholder-stone-500 focus:outline-none focus:border-[#C5A059] transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs text-[#E5E0D8]/80 mb-1 font-medium">Select Service</label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#0F1012] border border-[#2A2C32] text-sm text-[#FDFBF7] focus:outline-none focus:border-[#C5A059] transition-colors"
                >
                  {SALON_SERVICES.map((s) => (
                    <option key={s.id} value={s.name} className="bg-[#141518] text-[#FDFBF7]">
                      [{s.category.toUpperCase()}] {s.name}
                    </option>
                  ))}
                  <option value="Consultation & Hair Analysis" className="bg-[#141518] text-[#FDFBF7]">
                    [CONSULTATION] Texture & Treatment Consultation
                  </option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-[#E5E0D8]/80 mb-1 font-medium">Preferred Date</label>
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#0F1012] border border-[#2A2C32] text-sm text-[#FDFBF7] focus:outline-none focus:border-[#C5A059] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs text-[#E5E0D8]/80 mb-1 font-medium">Preferred Slot</label>
                  <select
                    value={timeSlot}
                    onChange={(e) => setTimeSlot(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#0F1012] border border-[#2A2C32] text-sm text-[#FDFBF7] focus:outline-none focus:border-[#C5A059] transition-colors"
                  >
                    <option value="Morning (10:00 AM - 1:00 PM)">Morning (10:00 AM - 1:00 PM)</option>
                    <option value="Afternoon (1:00 PM - 5:00 PM)">Afternoon (1:00 PM - 5:00 PM)</option>
                    <option value="Evening (5:00 PM - 8:30 PM)">Evening (5:00 PM - 8:30 PM)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs text-[#E5E0D8]/80 mb-1 font-medium">Any Specific Notes</label>
                <input
                  type="text"
                  placeholder="e.g. Balayage consultation, beard styling, first time client"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#0F1012] border border-[#2A2C32] text-sm text-[#FDFBF7] placeholder-stone-500 focus:outline-none focus:border-[#C5A059] transition-colors"
                />
              </div>

              <button
                type="submit"
                className="w-full mt-2 py-3 px-4 rounded-lg bg-gradient-to-r from-[#D4AF37] to-[#C5A059] hover:from-[#E5C583] hover:to-[#D4AF37] text-[#0F1012] font-semibold text-sm flex items-center justify-center gap-2 transition-all shadow-md shadow-[#C5A059]/20 cursor-pointer active:scale-[0.99]"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Confirm Request on WhatsApp</span>
              </button>

              <div className="pt-2 flex items-center justify-center gap-2 text-xs text-[#E5E0D8]/60">
                <span>Or dial directly:</span>
                <a href={SALON_INFO.phoneTel} className="text-[#C5A059] hover:underline font-mono tabular-nums">
                  098336 79949
                </a>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
