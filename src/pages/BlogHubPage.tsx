import React, { useState } from 'react';
import { BookOpen, Sparkles } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';
import { BlogPost } from '../types';
import { SEOHead } from '../components/common/SEOHead';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { SectionHeading } from '../components/common/SectionHeading';
import { BlogCard } from '../components/cards/BlogCard';

export const BlogHubPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Mukteshwar Stays', 'Travel Guides', 'Attractions'];

  const filteredPosts = selectedCategory === 'All'
    ? blogPosts
    : blogPosts.filter((p) => p.category === selectedCategory);

  return (
    <>
      <SEOHead
        title="Himalayan Travel Journal & Guides | The Mukteshwar Bungalow"
        description="Read curated editorial guides, road trip itineraries, season guides, and accommodation tips for Mukteshwar, Nainital, and the Kumaon region."
        canonicalUrl="https://themukteshwarbungalow.in/blog"
      />

      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-charcoal-950 text-ivory-100 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40">
          <img
            src="/images/exterior/the-mukteshwar-bungalow-exterior-mukteshwar-uttarakhand.jpg"
            alt="Travel Journal"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/60 to-transparent" />

        <div className="relative z-10 max-w-5xl mx-auto space-y-4">
          <Breadcrumbs
            dark
            items={[{ name: 'Journal', url: '/blog' }]}
          />
          <span className="text-xs uppercase tracking-super-wide text-himalayan-400 font-semibold block">
            Editorial Journal
          </span>
          <h1 className="text-4xl sm:text-6xl font-serif text-ivory-100 leading-tight">
            Kumaon Travel Journal
          </h1>
          <p className="text-base sm:text-xl text-ivory-200/80 font-light max-w-2xl leading-relaxed">
            Curated mountain itineraries, driving routes, seasonal insights, and stories from the high ridges of Mukteshwar.
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
        {/* Category Filters */}
        <div className="flex items-center justify-center gap-2 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-sm text-xs font-semibold uppercase tracking-wider transition-all ${
                selectedCategory === cat
                  ? 'bg-himalayan-700 text-ivory-100 shadow-sm'
                  : 'bg-white text-charcoal-800 border border-charcoal-900/10 hover:bg-ivory-50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </section>
    </>
  );
};
