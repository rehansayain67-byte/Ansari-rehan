import React, { useState } from 'react';
import { Phone, MessageCircle, Calendar, Clock, CheckCircle2, Send, Sparkles } from 'lucide-react';
import { SALON_INFO, SALON_SERVICES } from '../data/salonData';

export const AppointmentSection: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'Couture Haircut & Blow Dry',
    date: '',
    timeSlot: 'Morning (10:00 AM - 1:00 PM)',
    gender: 'Female / Male / Any',
    notes: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    // Create formatted WhatsApp enquiry message
    const message = `Hello 7 Wonders Studio, I would like to request an appointment:
• Name: ${formData.name}
• Phone: ${formData.phone}
• Service: ${formData.service}
• Preferred Date: ${formData.date || 'Flexible / As soon as available'}
• Preferred Time: ${formData.timeSlot}
• Notes: ${formData.notes || 'None'}`;

    const encoded = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/919833679949?text=${encoded}`;

    // Mark as submitted
    setFormSubmitted(true);

    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="appointment" className="py-24 bg-[#0F1012] relative border-t border-[#2A2C32]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Heading & Value Proposition */}
          <div className="lg:col-span-6">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C5A059] mb-3">
              Reserve Your Time
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#FDFBF7] tracking-tight leading-[1.15]">
              Ready for Your Next Look?
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#E5E0D8]/80 leading-relaxed font-light">
              Book your appointment and let our professionals create a look that feels uniquely yours.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3 text-sm text-[#E5E0D8]/90">
                <div className="w-8 h-8 rounded-full bg-[#16171A] border border-[#2A2C32] flex items-center justify-center text-[#C5A059] shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-medium text-[#FDFBF7]">Opens at 10:00 AM daily</span>
                  <span className="text-stone-400 block text-xs">Shop No. 4, Libra Tower, Hill Road, Bandra West</span>
                </div>
              </div>

              <div className="flex items-center gap-3 text-sm text-[#E5E0D8]/90">
                <div className="w-8 h-8 rounded-full bg-[#16171A] border border-[#2A2C32] flex items-center justify-center text-[#25D366] shrink-0">
                  <MessageCircle className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-medium text-[#FDFBF7]">Instant WhatsApp Assistance</span>
                  <span className="text-stone-400 block text-xs">Confirm slots, discuss hair inspirations or get directions</span>
                </div>
              </div>

              <div className="flex items-center gap-3 text-sm text-[#E5E0D8]/90">
                <div className="w-8 h-8 rounded-full bg-[#16171A] border border-[#2A2C32] flex items-center justify-center text-[#C5A059] shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-medium text-[#FDFBF7]">Direct Telephone Desk</span>
                  <span className="text-stone-400 block text-xs tabular-nums font-mono">098336 79949</span>
                </div>
              </div>
            </div>

            {/* Direct Quick Buttons */}
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href={SALON_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 text-xs sm:text-sm font-medium text-[#0F1012] bg-[#25D366] hover:bg-[#20ba59] rounded transition-all shadow-md shadow-[#25D366]/20"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Us</span>
              </a>

              <a
                href={SALON_INFO.phoneTel}
                className="inline-flex items-center gap-2 px-5 py-3 text-xs sm:text-sm font-medium text-[#FDFBF7] bg-[#16171A] hover:bg-[#202227] border border-[#2A2C32] hover:border-[#C5A059] rounded transition-colors"
              >
                <Phone className="w-4 h-4 text-[#C5A059]" />
                <span className="font-mono tabular-nums">Call 098336 79949</span>
              </a>
            </div>
          </div>

          {/* Right Column: High-Conversion Appointment Form */}
          <div className="lg:col-span-6">
            <div className="p-8 sm:p-9 rounded-2xl bg-[#141518] border border-[#2A2C32] shadow-2xl relative">
              <div className="flex items-center justify-between border-b border-[#2A2C32] pb-5 mb-6">
                <div>
                  <h3 className="font-serif text-2xl text-[#FDFBF7] font-normal">Appointment Enquiry</h3>
                  <p className="text-xs text-[#E5E0D8]/70 mt-0.5">We respond swiftly to finalize your preferred time.</p>
                </div>
                <Sparkles className="w-5 h-5 text-[#C5A059]" />
              </div>

              {formSubmitted ? (
                <div className="py-8 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-950/60 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="font-serif text-2xl text-[#FDFBF7]">Enquiry Dispatched!</h4>
                  <p className="text-xs sm:text-sm text-[#E5E0D8]/80 max-w-sm mx-auto font-light leading-relaxed">
                    Thank you, <strong className="text-[#FDFBF7]">{formData.name}</strong>. Your appointment request has been forwarded to our WhatsApp salon desk.
                  </p>
                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={SALON_INFO.phoneTel}
                      className="w-full sm:w-auto px-5 py-2.5 rounded bg-[#1E2024] text-xs text-[#FDFBF7] border border-[#2A2C32] hover:border-[#C5A059] transition-colors"
                    >
                      Call to Confirm (098336 79949)
                    </a>
                    <button
                      onClick={() => setFormSubmitted(false)}
                      className="w-full sm:w-auto px-5 py-2.5 rounded bg-[#C5A059] text-xs text-[#0F1012] font-medium hover:bg-[#E5C583] transition-colors cursor-pointer"
                    >
                      New Request
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs text-[#E5E0D8]/80 mb-1 font-medium">Your Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Aarti Sharma"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#0F1012] border border-[#2A2C32] text-sm text-[#FDFBF7] placeholder-stone-500 focus:outline-none focus:border-[#C5A059] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs text-[#E5E0D8]/80 mb-1 font-medium">Mobile Number *</label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. 98200XXXXX"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#0F1012] border border-[#2A2C32] text-sm text-[#FDFBF7] placeholder-stone-500 focus:outline-none focus:border-[#C5A059] transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs text-[#E5E0D8]/80 mb-1 font-medium">Selected Service</label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#0F1012] border border-[#2A2C32] text-sm text-[#FDFBF7] focus:outline-none focus:border-[#C5A059] transition-colors"
                    >
                      {SALON_SERVICES.map((s) => (
                        <option key={s.id} value={s.name} className="bg-[#141518] text-[#FDFBF7]">
                          [{s.category.toUpperCase()}] {s.name} ({s.duration})
                        </option>
                      ))}
                      <option value="Consultation & Custom Styling" className="bg-[#141518] text-[#FDFBF7]">
                        [CUSTOM] Consultation & Hair/Skin Analysis
                      </option>
                    </select>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs text-[#E5E0D8]/80 mb-1 font-medium">Preferred Date</label>
                      <input
                        type="date"
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#0F1012] border border-[#2A2C32] text-sm text-[#FDFBF7] focus:outline-none focus:border-[#C5A059] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs text-[#E5E0D8]/80 mb-1 font-medium">Preferred Time Slot</label>
                      <select
                        value={formData.timeSlot}
                        onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#0F1012] border border-[#2A2C32] text-sm text-[#FDFBF7] focus:outline-none focus:border-[#C5A059] transition-colors"
                      >
                        <option value="Morning (10:00 AM - 1:00 PM)">Morning (10:00 AM - 1:00 PM)</option>
                        <option value="Afternoon (1:00 PM - 5:00 PM)">Afternoon (1:00 PM - 5:00 PM)</option>
                        <option value="Evening (5:00 PM - 8:30 PM)">Evening (5:00 PM - 8:30 PM)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs text-[#E5E0D8]/80 mb-1 font-medium">Specific Requests / Hair Notes</label>
                    <textarea
                      rows={2}
                      placeholder="e.g. Balayage consultation, prior smoothening history, preferred stylist"
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#0F1012] border border-[#2A2C32] text-sm text-[#FDFBF7] placeholder-stone-500 focus:outline-none focus:border-[#C5A059] transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full mt-2 py-3 px-4 rounded-lg bg-gradient-to-r from-[#D4AF37] to-[#C5A059] hover:from-[#E5C583] hover:to-[#D4AF37] text-[#0F1012] font-medium text-sm flex items-center justify-center gap-2 transition-all shadow-md shadow-[#C5A059]/20 cursor-pointer active:scale-[0.99]"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Booking Request via WhatsApp</span>
                  </button>

                  <p className="text-[11px] text-center text-stone-500 pt-1">
                    Direct confirmation · No advance payment needed · Free cancellation
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
