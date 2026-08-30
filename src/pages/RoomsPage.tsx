import React from 'react';
import { Link } from 'react-router-dom';
import { Bed, Users, Check, ArrowRight, Shield } from 'lucide-react';
import { propertyData } from '../data/propertyData';
import { SEOHead } from '../components/common/SEOHead';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { SectionHeading } from '../components/common/SectionHeading';
import { SuiteCard } from '../components/cards/SuiteCard';
import { Button } from '../components/common/Button';

export const RoomsPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Luxury Suites & Rooms in Mukteshwar | The Mukteshwar Bungalow"
        description="Discover the 3 private suites at The Mukteshwar Bungalow: The Himalayan Suite, The Imperial Suite, and The Signature Himalayan with mountain views & en-suite luxury."
        canonicalUrl="https://themukteshwarbungalow.in/rooms"
      />

      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-charcoal-950 text-ivory-100 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40">
          <img
            src="/images/rooms/himalayan-suite/himalayan-suite-master-king-bed.jpg"
            alt="Suites at The Mukteshwar Bungalow"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/60 to-transparent" />

        <div className="relative z-10 max-w-5xl mx-auto space-y-4">
          <Breadcrumbs
            dark
            items={[{ name: 'Suites', url: '/rooms' }]}
          />
          <span className="text-xs uppercase tracking-super-wide text-himalayan-400 font-semibold block">
            Accommodation
          </span>
          <h1 className="text-4xl sm:text-6xl font-serif text-ivory-100 leading-tight">
            The Three Luxury Suites
          </h1>
          <p className="text-base sm:text-xl text-ivory-200/80 font-light max-w-2xl leading-relaxed">
            Private bedroom sanctuaries crafted with artisan Himalayan materials, king beds, heated comfort, and panoramic mountain views.
          </p>
        </div>
      </section>

      {/* Suites Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <SectionHeading
          centered
          subtitle="Sanctuary Collection"
          title="Private Bedroom Suites"
          description="Explore our three individually styled suites. When you book the villa, all three suites are reserved exclusively for your party."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {propertyData.rooms.map((room) => (
            <SuiteCard key={room.id} room={room} />
          ))}
        </div>
      </section>

      {/* Comparative Specification Matrix */}
      <section className="py-20 bg-ivory-50 border-t border-charcoal-900/10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <SectionHeading
            centered
            subtitle="At A Glance"
            title="Suite Comparison Matrix"
            description="Detailed specifications for each of our 3 private suites."
          />

          <div className="overflow-x-auto bg-white rounded-md shadow-editorial border border-charcoal-900/10 mt-8">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="bg-charcoal-900 text-ivory-100 border-b border-charcoal-800">
                  <th className="p-4 sm:p-5 font-serif font-normal text-sm sm:text-base">Specification</th>
                  <th className="p-4 sm:p-5 font-serif font-normal text-sm sm:text-base">The Himalayan Suite</th>
                  <th className="p-4 sm:p-5 font-serif font-normal text-sm sm:text-base">The Imperial Suite</th>
                  <th className="p-4 sm:p-5 font-serif font-normal text-sm sm:text-base">The Signature Himalayan</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-charcoal-900/10 text-charcoal-800">
                <tr>
                  <td className="p-4 font-semibold text-charcoal-900 bg-ivory-50/50">Positioning</td>
                  <td className="p-4">Master Bedroom 1</td>
                  <td className="p-4">Suite 2 (Garden Level)</td>
                  <td className="p-4">Suite 3 (Corner Terrace)</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-charcoal-900 bg-ivory-50/50">Bed Type</td>
                  <td className="p-4">King Handcrafted Bed</td>
                  <td className="p-4">King Timber Bed</td>
                  <td className="p-4">King Deluxe Bed</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-charcoal-900 bg-ivory-50/50">Occupancy</td>
                  <td className="p-4">2 Adults (Max 3)</td>
                  <td className="p-4">2 Adults (Max 3)</td>
                  <td className="p-4">2 Adults (Max 3)</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-charcoal-900 bg-ivory-50/50">View</td>
                  <td className="p-4">Himalayan Valley Sunrise</td>
                  <td className="p-4">Pine Ridge & Garden</td>
                  <td className="p-4">Terrace Horizon Panorama</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-charcoal-900 bg-ivory-50/50">Bathroom</td>
                  <td className="p-4">Private En-Suite + Geyser</td>
                  <td className="p-4">Private En-Suite + Geyser</td>
                  <td className="p-4">Private En-Suite + Geyser</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-charcoal-900 bg-ivory-50/50">Unique Feature</td>
                  <td className="p-4">Panoramic Picture Glazing</td>
                  <td className="p-4">Exposed Timber Ceilings</td>
                  <td className="p-4">Direct Veranda Step-Out</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-12 text-center">
            <Button to="/book" variant="himalayan" size="lg" icon={<ArrowRight className="w-4 h-4" />}>
              Reserve Full Villa with All 3 Suites
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};
