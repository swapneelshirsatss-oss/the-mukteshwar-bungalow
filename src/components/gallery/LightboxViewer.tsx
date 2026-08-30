import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { GalleryImage } from '../../data/galleryData';

interface LightboxViewerProps {
  images: GalleryImage[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export const LightboxViewer: React.FC<LightboxViewerProps> = ({
  images,
  currentIndex,
  isOpen,
  onClose,
  onPrev,
  onNext
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, onPrev, onNext]);

  if (!isOpen || images.length === 0) return null;

  const currentImage = images[currentIndex];

  return (
    <div
      className="fixed inset-0 z-50 bg-charcoal-950/96 backdrop-blur-xl flex flex-col justify-between p-4 sm:p-6 animate-fade-in text-ivory-100"
      role="dialog"
      aria-modal="true"
    >
      {/* Top Controls */}
      <div className="flex items-center justify-between border-b border-ivory-100/10 pb-3">
        <div className="text-xs uppercase tracking-widest text-ivory-200/70 font-mono">
          {currentIndex + 1} / {images.length} • <span className="text-himalayan-400 font-semibold">{currentImage.categoryLabel}</span>
        </div>
        <button
          onClick={onClose}
          className="p-2 rounded-full text-ivory-100/80 hover:text-ivory-100 hover:bg-ivory-100/10 transition-colors"
          aria-label="Close Lightbox"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Main Image Stage */}
      <div className="relative flex-1 flex items-center justify-center my-4 overflow-hidden">
        {/* Previous Button */}
        <button
          onClick={onPrev}
          className="absolute left-2 sm:left-4 z-10 p-3 rounded-full bg-charcoal-900/80 text-ivory-100 border border-ivory-100/15 hover:bg-himalayan-700 hover:border-himalayan-700 transition-all focus:outline-none"
          aria-label="Previous Image"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        {/* Display Image */}
        <img
          src={currentImage.src}
          alt={currentImage.alt}
          className="max-h-[75vh] max-w-[90vw] object-contain rounded-sm shadow-2xl transition-all duration-300"
        />

        {/* Next Button */}
        <button
          onClick={onNext}
          className="absolute right-2 sm:right-4 z-10 p-3 rounded-full bg-charcoal-900/80 text-ivory-100 border border-ivory-100/15 hover:bg-himalayan-700 hover:border-himalayan-700 transition-all focus:outline-none"
          aria-label="Next Image"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
      </div>

      {/* Bottom Caption */}
      <div className="text-center max-w-2xl mx-auto pt-2 border-t border-ivory-100/10">
        <p className="text-xs sm:text-sm font-serif italic text-ivory-100/90">
          {currentImage.caption}
        </p>
      </div>
    </div>
  );
};
