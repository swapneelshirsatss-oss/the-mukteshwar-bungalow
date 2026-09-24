import React from 'react';
import { Sparkles, Sun, Compass, Trees, Flame, Camera, ArrowRight, Check } from 'lucide-react';
import { SEOHead } from '../components/common/SEOHead';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { SectionHeading } from '../components/common/SectionHeading';
import { Button } from '../components/common/Button';
import { getBreadcrumbSchema, getExperiencesItemListSchema } from '../components/common/SchemaMarkup';

export const ExperiencesPage: React.FC = () => {
  const breadcrumbSchema = getBreadcrumbSchema([{ name: 'Experiences', url: '/experiences' }]);

  const experiences = [
    {
      title: 'Himalayan Sunrise & Tea on the Veranda',
      category: 'Morning Ritual',
      description: 'Witness the morning sunlight break across the Kumaon valley while savoring freshly brewed ginger-cardamom tea on your private veranda lounge.',
      image: '/images/veranda/veranda-lounge-morning-tea-seating.jpg',
      icon: Sun
    },
    {
      title: 'Forest Trails & Oak Forest Walks',
      category: 'Nature & Wellness',
      description: 'Explore tranquil village trails leading through dense oak, pine, and rhododendron canopies right around Kasialekh and Dausapani.',
      image: '/images/garden/villa-garden-stone-pathway.jpg',
      icon: Trees
    },
    {
      title: 'Night Sky Stargazing & Astrophotography',
      category: 'Evening Solitude',
      description: 'With zero urban light pollution at 7,000 ft altitude, the night sky reveals crystal-clear constellations and the Milky Way directly above the villa.',
      image: '/images/veranda/veranda-lounge-evening-bonfire.jpg',
      icon: Sparkles
    },
    {
      title: 'Chauli Ki Jali Cliff Excursion',
      category: 'Local Wonder',
      description: 'A short 20-minute drive leads to the dramatic cliff overhangs of Chauli Ki Jali for panoramic Himalayan views and sunset photography.',
      image: '/images/exterior/villa-exterior-mountain-ridge.jpg',
      icon: Compass
    }
  ];

  const experiencesSchema = getExperiencesItemListSchema(experiences);

  return (
    <>
      <SEOHead
        title="Curated Mountain Experiences in Mukteshwar | The Mukteshwar Bungalow"
        description="Discover Himalayan mornings, forest walks, stargazing, and viewpoint excursions during your stay at The Mukteshwar Bungalow in Kasialekh."
        canonicalUrl="https://themukteshwarbungalow.in/experiences"
        schema={[experiencesSchema, breadcrumbSchema]}
      />

      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-charcoal-950 text-ivory-100 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-45">
          <img
            src="/images/garden/villa-garden-himalayan-backdrop.jpg"
            alt="Experiences at The Mukteshwar Bungalow"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/60 to-transparent" />

        <div className="relative z-10 max-w-5xl mx-auto space-y-4">
          <Breadcrumbs
            dark
            items={[{ name: 'Experiences', url: '/experiences' }]}
          />
          <span className="text-xs uppercase tracking-super-wide text-himalayan-400 font-semibold block">
            Himalayan Living
          </span>
          <h1 className="text-4xl sm:text-6xl font-serif text-ivory-100 leading-tight">
            Curated Experiences
          </h1>
          <p className="text-base sm:text-xl text-ivory-200/80 font-light max-w-2xl leading-relaxed">
            Slow down and immerse yourself in the quiet rhythms of the high Kumaon hills.
          </p>
        </div>
      </section>

      {/* Experience Cards */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experiences.map((exp) => {
            const Icon = exp.icon;
            return (
              <div
                key={exp.title}
                className="bg-white rounded-md overflow-hidden border border-charcoal-900/10 shadow-editorial hover:shadow-luxury transition-all p-6 sm:p-8 flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <div className="aspect-[16/10] rounded-sm overflow-hidden bg-charcoal-950">
                    <img
                      src={exp.image}
                      alt={exp.title}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex items-center gap-2 text-himalayan-700">
                    <Icon className="w-4 h-4" />
                    <span className="text-[10px] uppercase tracking-widest font-semibold font-sans">{exp.category}</span>
                  </div>

                  <h3 className="text-2xl font-serif text-charcoal-900">
                    {exp.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-charcoal-600 font-light leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <Button to="/book" variant="himalayan" size="lg" icon={<ArrowRight className="w-4 h-4" />}>
            Plan Your Mountain Escape
          </Button>
        </div>
      </section>
    </>
  );
};
