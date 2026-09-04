import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Bed, Users, Eye, Check, Calendar, ArrowRight, ShieldCheck, Waves, Wifi, Flame, Sparkles } from 'lucide-react';
import { propertyData } from '../data/propertyData';
import { SEOHead } from '../components/common/SEOHead';
import { getRoomSchema, getBreadcrumbSchema } from '../components/common/SchemaMarkup';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { SectionHeading } from '../components/common/SectionHeading';
import { Button } from '../components/common/Button';
import { LightboxViewer } from '../components/gallery/LightboxViewer';
import { GalleryImage } from '../data/galleryData';
import { generateWhatsAppLink } from '../services/WhatsAppService';

export const RoomDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  // Map known slugs (handling both imperial-suite and imperial-suit)
  const normalizedSlug = slug === 'the-imperial-suit' ? 'the-imperial-suite' : slug;
  const room = propertyData.rooms.find((r) => r.slug === normalizedSlug);

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!room) {
    return <Navigate to="/rooms" replace />;
  }

  const roomSchema = getRoomSchema(room);
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Suites', url: '/rooms' },
    { name: room.name, url: `/rooms/${room.slug}` }
  ]);

  const galleryItems: GalleryImage[] = room.gallery.map((img, i) => ({
    id: `${room.id}-${i}`,
    src: img,
    alt: `${room.name} - Photo ${i + 1}`,
    category: 'Suites',
    categoryLabel: room.name,
    caption: `${room.name} interior and Himalayan viewpoint perspective`
  }));

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  return (
    <>
      <SEOHead
        title={`${room.name} | Luxury Suite in Mukteshwar`}
        description={`${room.overview} Book ${room.name} at The Mukteshwar Bungalow with direct host rates.`}
        canonicalUrl={`https://themukteshwarbungalow.in/rooms/${room.slug}`}
        schema={[roomSchema, breadcrumbSchema]}
      />

      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-charcoal-950 text-ivory-100 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-45">
          <img
            src={room.heroImage}
            alt={room.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/60 to-transparent" />

        <div className="relative z-10 max-w-5xl mx-auto space-y-4">
          <Breadcrumbs
            dark
            items={[
              { name: 'Suites', url: '/rooms' },
              { name: room.name, url: `/rooms/${room.slug}` }
            ]}
          />
          <span className="text-xs uppercase tracking-super-wide text-himalayan-400 font-semibold block">
            {room.subtitle}
          </span>
          <h1 className="text-4xl sm:text-6xl font-serif text-ivory-100 leading-tight">
            {room.name}
          </h1>
          <p className="text-base sm:text-xl text-ivory-200/80 font-light max-w-2xl leading-relaxed">
            {room.overview}
          </p>
        </div>
      </section>

      {/* Main Suite Detail Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Story & Photo Gallery */}
          <div className="lg:col-span-8 space-y-12">
            {/* Description Paragraphs */}
            <div className="space-y-4 text-xs sm:text-sm text-charcoal-700 font-light leading-relaxed">
              <h2 className="text-2xl sm:text-3xl font-serif text-charcoal-900 mb-4">
                The Sanctuary Experience
              </h2>
              {room.description.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            {/* Suite Photo Gallery */}
            <div className="space-y-4">
              <h3 className="text-xl font-serif text-charcoal-900">
                Suite Photography
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {room.gallery.map((imgUrl, i) => (
                  <div
                    key={i}
                    onClick={() => openLightbox(i)}
                    className="group relative rounded-sm overflow-hidden bg-charcoal-950 cursor-pointer shadow-subtle hover:shadow-editorial transition-all aspect-[4/3]"
                  >
                    <img
                      src={imgUrl}
                      alt={`${room.name} view ${i + 1}`}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-charcoal-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-ivory-100 text-xs font-semibold uppercase tracking-wider">
                      <span>View Photo</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Amenities Grid */}
            <div className="space-y-4 pt-6 border-t border-charcoal-900/10">
              <h3 className="text-xl font-serif text-charcoal-900">
                Suite Amenities & In-Room Comforts
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {room.amenities.map((amenity) => (
                  <div key={amenity} className="flex items-center gap-2.5 text-xs text-charcoal-700 bg-ivory-50 p-3 rounded-sm border border-charcoal-900/5">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{amenity}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Reservation Sidebar Card */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white rounded-md p-6 sm:p-8 shadow-luxury border border-charcoal-900/10 sticky top-28 space-y-6">
              <div>
                <span className="text-[10px] uppercase tracking-super-wide text-himalayan-700 font-semibold block mb-1">
                  Direct Booking Rate
                </span>
                <h3 className="text-2xl font-serif text-charcoal-900">
                  {room.pricingNote || 'Check Dates for Current Rates'}
                </h3>
                <p className="text-xs text-charcoal-500 font-light mt-1">
                  100% Commission-Free Direct Reservation
                </p>
              </div>

              <div className="space-y-3 pt-4 border-t border-charcoal-900/10 text-xs text-charcoal-700">
                <div className="flex items-start justify-between">
                  <span className="font-semibold text-charcoal-900">Bedding:</span>
                  <span className="text-right">{room.bedConfiguration}</span>
                </div>
                <div className="flex items-start justify-between">
                  <span className="font-semibold text-charcoal-900">Capacity:</span>
                  <span>{room.standardOccupancy} Adults (Max {room.maxOccupancy})</span>
                </div>
                <div className="flex items-start justify-between">
                  <span className="font-semibold text-charcoal-900">View:</span>
                  <span className="text-right">{room.viewType}</span>
                </div>
                <div className="flex items-start justify-between">
                  <span className="font-semibold text-charcoal-900">Bathroom:</span>
                  <span className="text-right">{room.bathroomDetails}</span>
                </div>
              </div>

              <div className="space-y-3 pt-4 border-t border-charcoal-900/10">
                <Button
                  to={`/book?room=${room.id}`}
                  variant="himalayan"
                  className="w-full"
                  icon={<Calendar className="w-4 h-4" />}
                >
                  Check Availability
                </Button>

                <a
                  href={generateWhatsAppLink({ intent: 'booking', suiteName: room.name })}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 border border-charcoal-900/20 hover:border-charcoal-900 text-charcoal-900 py-3 rounded-sm text-xs font-semibold uppercase tracking-wider transition-colors"
                >
                  <span>Inquire on WhatsApp</span>
                </a>
              </div>

              <div className="text-[11px] text-center text-charcoal-500 font-light">
                Includes full villa living salons & veranda access
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <LightboxViewer
        images={galleryItems}
        currentIndex={currentImageIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onPrev={() => setCurrentImageIndex((prev) => (prev === 0 ? galleryItems.length - 1 : prev - 1))}
        onNext={() => setCurrentImageIndex((prev) => (prev === galleryItems.length - 1 ? 0 : prev + 1))}
      />
    </>
  );
};
