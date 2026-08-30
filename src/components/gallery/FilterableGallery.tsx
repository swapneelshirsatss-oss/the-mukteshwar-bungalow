import React, { useState } from 'react';
import { Eye } from 'lucide-react';
import { galleryImages, GalleryImage } from '../../data/galleryData';
import { LightboxViewer } from './LightboxViewer';
import { trackEvent } from '../../services/AnalyticsService';

interface FilterableGalleryProps {
  initialCategory?: string;
  limit?: number;
}

export const FilterableGallery: React.FC<FilterableGalleryProps> = ({ initialCategory = 'All', limit }) => {
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const categories = [
    'All',
    'Exterior',
    'Suites',
    'Veranda',
    'Living',
    'Kitchen',
    'Garden & Pool'
  ];

  const filteredImages = selectedCategory === 'All'
    ? galleryImages
    : galleryImages.filter((img) => img.category === selectedCategory);

  const displayedImages = limit ? filteredImages.slice(0, limit) : filteredImages;

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
    trackEvent('gallery_open', { imageId: displayedImages[index].id, category: selectedCategory });
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? displayedImages.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === displayedImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <div>
      {/* Category Tabs */}
      <div className="flex items-center justify-center gap-2 flex-wrap mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-sm text-xs uppercase tracking-wider font-semibold transition-all ${
              selectedCategory === cat
                ? 'bg-himalayan-700 text-ivory-100 shadow-md'
                : 'bg-white text-charcoal-800 border border-charcoal-900/10 hover:bg-ivory-50'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Responsive Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayedImages.map((image, index) => (
          <div
            key={image.id}
            onClick={() => openLightbox(index)}
            className="group relative rounded-sm overflow-hidden bg-charcoal-950 cursor-pointer shadow-subtle hover:shadow-luxury transition-all duration-300"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            {/* Hover Overlay with Caption */}
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/90 via-charcoal-950/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-5 text-ivory-100">
              <div className="self-end p-2 rounded-full bg-charcoal-900/80 text-ivory-100">
                <Eye className="w-4 h-4" />
              </div>

              <div>
                <span className="text-[10px] uppercase tracking-super-wide text-himalayan-400 font-semibold block mb-1">
                  {image.categoryLabel}
                </span>
                <p className="text-xs font-light text-ivory-100/90 line-clamp-2">
                  {image.caption}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      <LightboxViewer
        images={displayedImages}
        currentIndex={currentIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </div>
  );
};
