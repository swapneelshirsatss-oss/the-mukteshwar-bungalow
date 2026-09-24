import React from 'react';
import { Utensils, Coffee, Check, ArrowRight, ShieldCheck, ShoppingBag, Sparkles } from 'lucide-react';
import { propertyData } from '../data/propertyData';
import { SEOHead } from '../components/common/SEOHead';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { SectionHeading } from '../components/common/SectionHeading';
import { Button } from '../components/common/Button';
import { getBreadcrumbSchema } from '../components/common/SchemaMarkup';

export const KitchenPage: React.FC = () => {
  const breadcrumbSchema = getBreadcrumbSchema([{ name: 'Kitchen & Dining', url: '/kitchen' }]);

  return (
    <>
      <SEOHead
        title="Fully Equipped Kitchen & Dining | The Mukteshwar Bungalow"
        description="Cook your own favorite meals in our fully equipped kitchen with gas hobs, refrigerator, microwave, and quartz breakfast counter in Mukteshwar."
        canonicalUrl="https://themukteshwarbungalow.in/kitchen"
        schema={breadcrumbSchema}
      />

      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-charcoal-950 text-ivory-100 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-45">
          <img
            src="/images/kitchen/fully-equipped-kitchen-dining-counter.jpg"
            alt="Fully equipped kitchen at The Mukteshwar Bungalow"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/60 to-transparent" />

        <div className="relative z-10 max-w-5xl mx-auto space-y-4">
          <Breadcrumbs
            dark
            items={[{ name: 'Kitchen & Dining', url: '/kitchen' }]}
          />
          <span className="text-xs uppercase tracking-super-wide text-himalayan-400 font-semibold block">
            Residential Facilities
          </span>
          <h1 className="text-4xl sm:text-6xl font-serif text-ivory-100 leading-tight">
            Fully Equipped Kitchen
          </h1>
          <p className="text-base sm:text-xl text-ivory-200/80 font-light max-w-2xl leading-relaxed">
            A complete modern kitchen offering total culinary freedom for family cooking, baby food prep, morning tea, and homestyle dining.
          </p>
        </div>
      </section>

      {/* Kitchen Details */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <SectionHeading
              subtitle="Home Culinary Freedom"
              title="Cook, Reheat & Dine on Your Own Schedule"
              description="Enjoy the comfort of an independent residential kitchen fitted with contemporary cooking appliances and dinnerware."
            />

            <div className="space-y-4 text-xs sm:text-sm text-charcoal-700 font-light leading-relaxed">
              <p>
                One of the greatest joys of a private mountain residence is the ability to cook your own comfort foods without being tied to rigid restaurant hours or expensive room service menus.
              </p>
              <p>
                The kitchen at The Mukteshwar Bungalow is equipped with high-efficiency gas hobs, a modern exhaust chimney, microwave oven, large double-door refrigerator, electric kettle, and water purifier. Whether preparing early breakfast for toddlers, brewing fresh artisan coffee, or simmering evening mountain soups, you have everything needed.
              </p>
            </div>

            {/* Feature List */}
            <div className="space-y-2 pt-2 text-xs text-charcoal-800">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Gas cooking hobs, exhaust chimney & microwave oven</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Refrigerator, electric kettle & RO water purifier</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Complete set of stainless steel cookware, pots, pans, cutlery & dinnerware</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Spacious quartz counter with breakfast window seating</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-4">
            <div className="rounded-md overflow-hidden shadow-luxury border border-charcoal-900/10 aspect-[4/3]">
              <img
                src="/images/kitchen/fully-equipped-kitchen-appliances-cookware.jpg"
                alt="Kitchen Cookware and Setup"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Local Groceries & Markets */}
      <section className="py-20 bg-ivory-50 border-t border-charcoal-900/10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <SectionHeading
            centered
            subtitle="Local Markets"
            title="Fresh Mountain Ingredients Nearby"
            description="Kasialekh and Dausapani markets offer organic vegetables, fresh dairy, and daily essentials just a short drive away."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
            <div className="bg-white p-6 rounded-md border border-charcoal-900/10 shadow-editorial space-y-3">
              <div className="flex items-center gap-2 text-himalayan-700 font-serif font-bold text-lg">
                <ShoppingBag className="w-5 h-5" />
                <span>Kasialekh Market (5 mins)</span>
              </div>
              <p className="text-xs sm:text-sm text-charcoal-600 font-light leading-relaxed">
                Local village shops carrying daily groceries, fresh milk, organic hill vegetables, spices, eggs, snacks, and seasonal fruit preserves.
              </p>
            </div>

            <div className="bg-white p-6 rounded-md border border-charcoal-900/10 shadow-editorial space-y-3">
              <div className="flex items-center gap-2 text-himalayan-700 font-serif font-bold text-lg">
                <Coffee className="w-5 h-5" />
                <span>Bhatelia / Mukteshwar (15 mins)</span>
              </div>
              <p className="text-xs sm:text-sm text-charcoal-600 font-light leading-relaxed">
                Larger market junction with specialty bakeries, organic cooperatives, pharmacy, ATM, and local cafes serving Kumaoni delicacies.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Button to="/book" variant="himalayan" size="lg" icon={<ArrowRight className="w-4 h-4" />}>
              Book Direct with Full Kitchen Access
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};
