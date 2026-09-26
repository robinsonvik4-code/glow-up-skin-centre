import React, { useState, useEffect, useCallback } from 'react';
import { Sparkles, X, ChevronLeft, ChevronRight, Eye, ShieldCheck } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/clinicData';
import { GalleryItem } from '../types';

export const GallerySection: React.FC = () => {
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  const selectedItem: GalleryItem | null =
    activeImageIndex !== null ? GALLERY_ITEMS[activeImageIndex] : null;

  const handleClose = useCallback(() => {
    setActiveImageIndex(null);
  }, []);

  const handlePrev = useCallback(() => {
    if (activeImageIndex !== null) {
      setActiveImageIndex((prev) => (prev! > 0 ? prev! - 1 : GALLERY_ITEMS.length - 1));
    }
  }, [activeImageIndex]);

  const handleNext = useCallback(() => {
    if (activeImageIndex !== null) {
      setActiveImageIndex((prev) => (prev! < GALLERY_ITEMS.length - 1 ? prev! + 1 : 0));
    }
  }, [activeImageIndex]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeImageIndex === null) return;
      if (e.key === 'Escape') handleClose();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeImageIndex, handleClose, handlePrev, handleNext]);

  return (
    <section
      id="gallery"
      aria-label="Clinic Facility & Treatment Gallery"
      className="py-16 sm:py-20 bg-slate-50/70 border-t border-slate-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-sky-600" aria-hidden="true" />
            <span>Facility & Visual Direction</span>
          </div>

          <h2
            id="gallery-heading"
            className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight"
          >
            Clinic Gallery & Treatments
          </h2>
          <p className="mt-3 text-slate-600 text-base">
            Take a look inside Glow Up Skin Centre. Treatment illustrations are clearly separated from actual facility photography.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {GALLERY_ITEMS.map((item, index) => (
            <div
              key={item.id}
              id={`gallery-item-${item.id}`}
              className="group bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col"
            >
              <div
                className="relative aspect-[4/3] overflow-hidden cursor-pointer bg-slate-100"
                onClick={() => setActiveImageIndex(index)}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className={`w-full h-full ${item.category === 'Consultation' ? 'object-contain bg-sky-50' : 'object-cover group-hover:scale-105 transition-transform duration-500'}`}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />

                {/* Classification Badge */}
                <div className="absolute top-2.5 left-2.5">
                  {item.isAiIllustration ? (
                    <span className="bg-slate-900/85 backdrop-blur-sm text-sky-300 text-[10px] font-bold px-2 py-0.5 rounded border border-slate-700">
                      Treatment Illustration
                    </span>
                  ) : (
                    <span className="bg-sky-600/90 backdrop-blur-sm text-white text-[10px] font-bold px-2 py-0.5 rounded shadow-sm">
                      Facility & Equipment
                    </span>
                  )}
                </div>

                {/* View Overlay Button */}
                <div className="absolute inset-0 bg-slate-900/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="bg-white/90 text-slate-900 font-semibold text-xs py-1.5 px-3 rounded-full flex items-center gap-1.5 shadow-lg">
                    <Eye className="w-3.5 h-3.5 text-sky-600" />
                    <span>View Image</span>
                  </div>
                </div>
              </div>

              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-slate-900 text-sm">{item.title}</h3>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed line-clamp-2">
                    {item.caption}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveImageIndex(index)}
                  className="mt-3 text-xs text-sky-600 hover:text-sky-700 font-semibold text-left inline-flex items-center gap-1 cursor-pointer"
                >
                  <span>Expand Details</span>
                  <ChevronRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Ethical Transparency Note */}
        <div className="mt-8 bg-blue-50/70 border border-blue-100 rounded-xl p-4 text-center max-w-2xl mx-auto text-xs text-blue-800 flex items-center justify-center gap-2">
          <ShieldCheck className="w-4 h-4 text-sky-600 shrink-0" />
          <span>
            Ethical clinical transparency: Illustrative computer representations are never presented as authentic patient outcomes or verified testimonials.
          </span>
        </div>
      </div>

      {/* Accessible Lightbox Modal */}
      {selectedItem && (
        <div
          id="gallery-lightbox-modal"
          role="dialog"
          aria-modal="true"
          aria-label={selectedItem.title}
          className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6"
          onClick={handleClose}
        >
          <div
            className="relative bg-slate-900 border border-slate-800 rounded-2xl max-w-3xl w-full overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 border-b border-slate-800 text-white">
              <div>
                <span className="text-xs text-slate-400">
                  Image {(activeImageIndex ?? 0) + 1} of {GALLERY_ITEMS.length}
                </span>
                <h3 className="text-base font-bold text-white">{selectedItem.title}</h3>
              </div>

              <button
                type="button"
                id="lightbox-close-btn"
                onClick={handleClose}
                className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
                aria-label="Close image viewer"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Image Area */}
            <div className="relative bg-black flex items-center justify-center min-h-[300px] max-h-[65vh]">
              <img
                src={selectedItem.image}
                alt={selectedItem.title}
                className="max-h-[65vh] w-auto object-contain mx-auto"
                referrerPolicy="no-referrer"
              />

              {/* Navigation Arrows */}
              <button
                type="button"
                id="lightbox-prev-btn"
                onClick={handlePrev}
                className="absolute left-3 top-1/2 -translate-y-1/2 p-2 bg-slate-900/80 hover:bg-slate-800 text-white rounded-full border border-slate-700 transition-colors cursor-pointer"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                type="button"
                id="lightbox-next-btn"
                onClick={handleNext}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2 bg-slate-900/80 hover:bg-slate-800 text-white rounded-full border border-slate-700 transition-colors cursor-pointer"
                aria-label="Next image"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Footer Caption */}
            <div className="p-4 bg-slate-900 text-slate-200 text-xs sm:text-sm">
              <div className="flex items-center gap-2 mb-1.5">
                {selectedItem.isAiIllustration ? (
                  <span className="bg-sky-950 text-sky-300 text-[10px] font-bold px-2 py-0.5 rounded border border-sky-800">
                    AI-generated treatment illustration
                  </span>
                ) : (
                  <span className="bg-slate-800 text-slate-300 text-[10px] font-bold px-2 py-0.5 rounded border border-slate-700">
                    Clinic Photographic Record
                  </span>
                )}
              </div>
              <p className="text-slate-300 leading-relaxed">{selectedItem.caption}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
