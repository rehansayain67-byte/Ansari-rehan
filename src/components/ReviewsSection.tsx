import React from 'react';
import { Star, CheckCircle, ExternalLink, Quote } from 'lucide-react';
import { SALON_REVIEWS, SALON_INFO } from '../data/salonData';

export const ReviewsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-24 bg-[#141518] relative border-t border-[#2A2C32]/60 overflow-hidden">
      {/* Background ambient accent */}
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-[#C5A059]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Aggregated Google Score */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C5A059] mb-3">
              Verified Client Experiences
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#FDFBF7] tracking-tight">
              Bandra’s Highly Rated Unisex Salon
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#E5E0D8]/70 max-w-2xl font-light">
              Real feedback from clients who trust us for their hair transformations, grooming rituals, and skincare routines.
            </p>
          </div>

          {/* Aggregated Score Badge - Clean unboxed text layout complying with zero-pill rule */}
          <div className="mt-6 md:mt-0 p-5 rounded-2xl bg-[#0F1012] border border-[#2A2C32] flex items-center gap-5 shrink-0 shadow-lg">
            <div className="text-center border-r border-[#2A2C32] pr-5">
              <div className="font-serif text-4xl font-normal text-[#FDFBF7] tabular-nums">4.8</div>
              <div className="flex items-center justify-center gap-1 mt-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-[#D4AF37] text-[#D4AF37]" />
                ))}
              </div>
            </div>
            <div>
              <div className="text-sm font-medium text-[#FDFBF7]">Google Reviews</div>
              <div className="text-xs text-[#C5A059] font-mono tabular-nums mt-0.5">591+ Verified Ratings</div>
              <div className="text-[11px] text-[#E5E0D8]/60 mt-1">Libra Tower · Hill Road</div>
            </div>
          </div>
        </div>

        {/* Review Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SALON_REVIEWS.map((review) => (
            <div
              key={review.id}
              className="p-7 rounded-xl bg-[#0F1012] border border-[#2A2C32] hover:border-[#C5A059]/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Review Header: Stars, Service Tag, Date */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#D4AF37] text-[#D4AF37]" />
                    ))}
                  </div>
                  <span className="text-xs text-stone-500 font-mono tabular-nums">{review.date}</span>
                </div>

                {/* Service Tag */}
                <div className="text-xs text-[#C5A059] font-medium tracking-wide mb-3">
                  {review.serviceCategory}
                </div>

                {/* Review Text */}
                <p className="text-sm text-[#E5E0D8]/80 leading-relaxed font-light italic">
                  "{review.text}"
                </p>
              </div>

              {/* Review Author */}
              <div className="mt-6 pt-4 border-t border-[#2A2C32]/60 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-[#16171A] border border-[#2A2C32] text-[#C5A059] font-serif flex items-center justify-center font-medium">
                    {review.author[0]}
                  </div>
                  <span className="font-medium text-[#FDFBF7]">{review.author}</span>
                </div>
                <div className="flex items-center gap-1 text-[11px] text-emerald-400">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>Verified Client</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA to Google Reviews platform */}
        <div className="mt-14 p-8 rounded-2xl bg-[#0F1012] border border-[#2A2C32] text-center max-w-3xl mx-auto flex flex-col items-center">
          <Quote className="w-8 h-8 text-[#C5A059]/40 mb-3" />
          <h3 className="font-serif text-2xl text-[#FDFBF7] font-normal">
            See What Our Clients Say on Google
          </h3>
          <p className="mt-2 text-xs sm:text-sm text-[#E5E0D8]/70 max-w-xl font-light">
            With 591 reviews and a 4.8 average rating, we take pride in consistent quality, honest consultations, and attentive salon care in Bandra West.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <a
              href={SALON_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 text-xs sm:text-sm font-medium text-[#0F1012] bg-[#E5C583] hover:bg-[#D4AF37] rounded transition-all duration-200 shadow-md shadow-[#C5A059]/10"
            >
              <span>Read All 591 Google Reviews</span>
              <ExternalLink className="w-4 h-4" />
            </a>

            <a
              href={SALON_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 text-xs sm:text-sm font-medium text-[#FDFBF7] bg-[#16171A] hover:bg-[#202227] border border-[#2A2C32] rounded transition-colors"
            >
              <span>Write a Google Review</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
