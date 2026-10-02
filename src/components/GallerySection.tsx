import React, { useState } from 'react';
import { Sparkles, X, ZoomIn, ArrowRight } from 'lucide-react';
import { GALLERY_ITEMS, GalleryItem, SALON_INFO } from '../data/salonData';

export const GallerySection: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'hair' | 'grooming' | 'studio' | 'beauty'>('all');
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  const filteredItems = filter === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === filter);

  return (
    <section id="gallery" className="py-24 bg-[#0F1012] relative border-t border-[#2A2C32]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C5A059] mb-3">
              Visual Portfolio
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#FDFBF7] tracking-tight">
              Transformations & Studio Atmosphere
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#E5E0D8]/70 max-w-2xl font-light">
              A glimpse into the artistry, craft, and calm sanctuary at 7 Wonders Studio on Hill Road, Bandra West.
            </p>
          </div>

          <div className="mt-6 md:mt-0 flex items-center gap-2">
            <span className="text-xs text-[#E5E0D8]/70">Follow our craft</span>
            <span className="text-xs text-[#C5A059] font-medium">#7WondersBandra</span>
          </div>
        </div>

        {/* Filter Controls */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 text-xs font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
              filter === 'all'
                ? 'bg-gradient-to-r from-[#D4AF37] to-[#C5A059] text-[#0F1012]'
                : 'bg-[#16171A] text-[#E5E0D8]/80 hover:text-[#FDFBF7] border border-[#2A2C32]'
            }`}
          >
            All Work ({GALLERY_ITEMS.length})
          </button>
          <button
            onClick={() => setFilter('hair')}
            className={`px-4 py-2 text-xs font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
              filter === 'hair'
                ? 'bg-gradient-to-r from-[#D4AF37] to-[#C5A059] text-[#0F1012]'
                : 'bg-[#16171A] text-[#E5E0D8]/80 hover:text-[#FDFBF7] border border-[#2A2C32]'
            }`}
          >
            Hair & Balayage
          </button>
          <button
            onClick={() => setFilter('grooming')}
            className={`px-4 py-2 text-xs font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
              filter === 'grooming'
                ? 'bg-gradient-to-r from-[#D4AF37] to-[#C5A059] text-[#0F1012]'
                : 'bg-[#16171A] text-[#E5E0D8]/80 hover:text-[#FDFBF7] border border-[#2A2C32]'
            }`}
          >
            Men’s Grooming
          </button>
          <button
            onClick={() => setFilter('studio')}
            className={`px-4 py-2 text-xs font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
              filter === 'studio'
                ? 'bg-gradient-to-r from-[#D4AF37] to-[#C5A059] text-[#0F1012]'
                : 'bg-[#16171A] text-[#E5E0D8]/80 hover:text-[#FDFBF7] border border-[#2A2C32]'
            }`}
          >
            Studio Space
          </button>
          <button
            onClick={() => setFilter('beauty')}
            className={`px-4 py-2 text-xs font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
              filter === 'beauty'
                ? 'bg-gradient-to-r from-[#D4AF37] to-[#C5A059] text-[#0F1012]'
                : 'bg-[#16171A] text-[#E5E0D8]/80 hover:text-[#FDFBF7] border border-[#2A2C32]'
            }`}
          >
            Beauty & Skin
          </button>
        </div>

        {/* Gallery Masonry / Dynamic Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveItem(item)}
              className="group relative rounded-xl overflow-hidden bg-[#16171A] border border-[#2A2C32] hover:border-[#C5A059]/60 cursor-pointer transition-all duration-300 shadow-md hover:shadow-2xl hover:shadow-black/50"
            >
              <div className="relative aspect-[4/3] sm:aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F1012] via-[#0F1012]/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              </div>

              {/* Hover Overlay with Metadata */}
              <div className="absolute bottom-0 left-0 right-0 p-5 flex flex-col justify-end transform translate-y-1 group-hover:translate-y-0 transition-transform">
                <div className="flex items-center justify-between text-[11px] text-[#C5A059] uppercase tracking-wider mb-1">
                  <span>{item.category}</span>
                  <div className="w-7 h-7 rounded-full bg-[#0F1012]/80 border border-[#2A2C32] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <ZoomIn className="w-3.5 h-3.5 text-[#C5A059]" />
                  </div>
                </div>
                <h3 className="font-serif text-lg sm:text-xl text-[#FDFBF7] font-normal leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-[#E5E0D8]/70 mt-1 line-clamp-2 font-light">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <a
            href={SALON_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 text-xs sm:text-sm font-medium text-[#FDFBF7] bg-[#16171A] hover:bg-[#202227] border border-[#2A2C32] hover:border-[#C5A059] rounded transition-all duration-200"
          >
            <span>Have a specific hair look in mind? Consult Our Stylists on WhatsApp</span>
            <ArrowRight className="w-4 h-4 text-[#C5A059]" />
          </a>
        </div>
      </div>

      {/* Modal Lightbox for item preview */}
      {activeItem && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setActiveItem(null)}
        >
          <div
            className="relative max-w-3xl w-full bg-[#141518] rounded-2xl border border-[#2A2C32] overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveItem(null)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-[#0F1012]/80 border border-[#2A2C32] text-[#FDFBF7] hover:text-[#C5A059] flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Close image preview"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative aspect-[16/10] bg-black">
              <img
                src={activeItem.image}
                alt={activeItem.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-contain"
              />
            </div>

            <div className="p-6">
              <div className="text-xs uppercase tracking-widest text-[#C5A059] mb-1 font-mono">
                {activeItem.category} · 7 Wonders Studio Bandra West
              </div>
              <h3 className="font-serif text-2xl text-[#FDFBF7] font-normal">{activeItem.title}</h3>
              <p className="mt-2 text-sm text-[#E5E0D8]/80 leading-relaxed font-light">{activeItem.caption}</p>
              
              <div className="mt-5 pt-4 border-t border-[#2A2C32] flex items-center justify-between">
                <span className="text-xs text-stone-400">Libra Tower, Hill Road, Bandra West</span>
                <a
                  href={SALON_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-medium text-[#0F1012] bg-[#C5A059] hover:bg-[#E5C583] py-2 px-3.5 rounded transition-colors"
                >
                  Enquire About This Look
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
