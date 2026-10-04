import React from 'react';
import { Utensils, Coffee, Check, ArrowRight, ShieldCheck, ShoppingBag, HeartHandshake, Flame } from 'lucide-react';
import { propertyData } from '../data/propertyData';
import { SEOHead } from '../components/common/SEOHead';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { SectionHeading } from '../components/common/SectionHeading';
import { Button } from '../components/common/Button';
import { getBreadcrumbSchema, getLivingSpaceSchema } from '../components/common/SchemaMarkup';

export const KitchenPage: React.FC = () => {
  const breadcrumbSchema = getBreadcrumbSchema([{ name: 'Kitchen & Dining', url: '/kitchen' }]);
  const kitchenSchema = getLivingSpaceSchema(
    'Kitchen & Pure-Vegetarian Dining',
    'A complete residential kitchen with modern cooking hobs, refrigeration, microwave, and tableware, featuring dedicated in-house cook services for 100% pure-vegetarian dining.',
    '/images/kitchen/fully-equipped-kitchen-dining-counter.jpg'
  );

  return (
    <>
      <SEOHead
        title="Dedicated Cook & Equipped Kitchen | The Mukteshwar Bungalow"
        description="Fresh home-style pure vegetarian meals prepared by our in-house cook and a fully equipped modern kitchen with gas hobs, refrigerator, and microwave in Mukteshwar."
        canonicalUrl="https://themukteshwarbungalow.in/kitchen"
        schema={[kitchenSchema, breadcrumbSchema]}
      />

      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-charcoal-950 text-ivory-100 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-45">
          <img
            src="/images/kitchen/fully-equipped-kitchen-dining-counter.jpg"
            alt="Kitchen and dining counter at The Mukteshwar Bungalow"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/60 to-transparent" />

        <div className="relative z-10 max-w-5xl mx-auto space-y-4">
          <Breadcrumbs
            dark
            items={[{ name: 'Kitchen & Dining', url: '/kitchen' }]}
          />
          <div className="inline-flex items-center gap-2 bg-charcoal-900/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-ivory-100/20 text-xs tracking-widest uppercase text-ivory-100/90 shadow-sm">
            <Utensils className="w-3.5 h-3.5 text-himalayan-400" />
            <span>Pure-Vegetarian Mountain Dining & Kitchen</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-serif text-ivory-100 leading-tight">
            Kitchen & Mountain Dining
          </h1>
          <p className="text-base sm:text-xl text-ivory-200/80 font-light max-w-2xl leading-relaxed">
            Fresh home-style pure-vegetarian meals prepared by our dedicated in-house cook, paired with complete residential kitchen freedom for your family.
          </p>
        </div>
      </section>

      {/* Dual Dining Architecture: Dedicated Cook + Kitchen Freedom */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* Pillar 1: Dedicated In-House Pure-Veg Cook */}
          <div className="bg-white p-8 sm:p-10 rounded-md border border-charcoal-900/10 shadow-editorial space-y-6">
            <div className="flex items-center gap-3 text-himalayan-700">
              <HeartHandshake className="w-6 h-6 text-himalayan-700" />
              <span className="text-xs uppercase tracking-widest font-semibold font-sans">
                Catered Comfort
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-serif text-charcoal-900">
              Dedicated In-House Pure-Veg Cook
            </h2>

            <p className="text-xs sm:text-sm text-charcoal-700 font-light leading-relaxed">
              Nothing compares to arriving back from a brisk mountain walk to the aroma of freshly cooked pahadi dal, warm phulkas, and seasonal hill greens. Our on-site cook prepares hot, home-style pure vegetarian meals customized to your family's preferences.
            </p>

            <div className="space-y-2.5 pt-2 text-xs text-charcoal-800">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Fresh home-style breakfast, lunch, and dinner (100% Pure Vegetarian)</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Piping hot adrak-elaichi chai and evening pakoras on the Veranda Lounge</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Customized spice levels and dietary adjustments for children and elders</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Prepared with fresh ingredients sourced from local Kasialekh markets</span>
              </div>
            </div>
          </div>

          {/* Pillar 2: Fully Equipped Kitchen Freedom */}
          <div className="bg-white p-8 sm:p-10 rounded-md border border-charcoal-900/10 shadow-editorial space-y-6">
            <div className="flex items-center gap-3 text-himalayan-700">
              <Flame className="w-6 h-6 text-himalayan-700" />
              <span className="text-xs uppercase tracking-widest font-semibold font-sans">
                Self-Cooking Freedom
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-serif text-charcoal-900">
              Fully Equipped Residential Kitchen
            </h2>

            <p className="text-xs sm:text-sm text-charcoal-700 font-light leading-relaxed">
              Traveling with toddlers or prefer cooking your own signature recipes? You enjoy unrestricted access to a complete modern kitchen fitted with gas cooking hobs, cookware, and refrigeration.
            </p>

            <div className="space-y-2.5 pt-2 text-xs text-charcoal-800">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Multi-burner gas stove, electric chimney & microwave oven</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Large double-door refrigerator & RO filtered drinking water</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Stainless steel cookware, pressure cookers, dinnerware & cutlery</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Convenient for toddler meals, late-night snacks, and specialty cooking</span>
              </div>
            </div>
          </div>
        </div>

        {/* Visual Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          <div className="rounded-md overflow-hidden shadow-luxury border border-charcoal-900/10 aspect-[16/10]">
            <img
              src="/images/kitchen/fully-equipped-kitchen-dining-counter.jpg"
              alt="Kitchen dining counter with mountain views"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="rounded-md overflow-hidden shadow-luxury border border-charcoal-900/10 aspect-[16/10]">
            <img
              src="/images/kitchen/fully-equipped-kitchen-appliances-cookware.jpg"
              alt="Modern cookware and appliances in the bungalow kitchen"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Local Groceries & Markets */}
      <section className="py-20 bg-ivory-50 border-t border-charcoal-900/10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <SectionHeading
            centered
            subtitle="Local Mountain Markets"
            title="Fresh Ingredients Around Kasialekh"
            description="Kasialekh and nearby Mukteshwar village markets provide farm-fresh hill vegetables, organic dairy, and daily essentials."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
            <div className="bg-white p-6 rounded-md border border-charcoal-900/10 shadow-editorial space-y-3">
              <div className="flex items-center gap-2 text-himalayan-700 font-serif font-bold text-lg">
                <ShoppingBag className="w-5 h-5" />
                <span>Kasialekh Market (5 mins)</span>
              </div>
              <p className="text-xs sm:text-sm text-charcoal-600 font-light leading-relaxed">
                Local village shops carrying daily groceries, fresh milk, organic hill potatoes, seasonal vegetables, spices, and artisanal fruit preserves.
              </p>
            </div>

            <div className="bg-white p-6 rounded-md border border-charcoal-900/10 shadow-editorial space-y-3">
              <div className="flex items-center gap-2 text-himalayan-700 font-serif font-bold text-lg">
                <Coffee className="w-5 h-5" />
                <span>Bhatelia / Mukteshwar (15 mins)</span>
              </div>
              <p className="text-xs sm:text-sm text-charcoal-600 font-light leading-relaxed">
                A larger market junction featuring organic food cooperatives, local bakeries, cafes, pharmacy, and regional Kumaoni specialty stores.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Button to="/book" variant="himalayan" size="lg" icon={<ArrowRight className="w-4 h-4" />}>
              Reserve Stay with Cook & Kitchen Access
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

