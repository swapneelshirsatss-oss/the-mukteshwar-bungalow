import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Calendar, Clock, ArrowLeft, ArrowRight, Check, Sparkles, MapPin } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';
import { SEOHead } from '../components/common/SEOHead';
import { getArticleSchema, getBreadcrumbSchema } from '../components/common/SchemaMarkup';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { Button } from '../components/common/Button';
import { BlogCard } from '../components/cards/BlogCard';

export const BlogPostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const articleSchema = getArticleSchema(post);
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Journal', url: '/blog' },
    { name: post.title, url: `/blog/${post.slug}` }
  ]);

  const relatedPosts = blogPosts.filter((p) => p.id !== post.id && post.relatedSlugs?.includes(p.slug));

  return (
    <>
      <SEOHead
        title={`${post.title} | The Mukteshwar Bungalow`}
        description={post.metaDescription}
        canonicalUrl={`https://themukteshwarbungalow.in/blog/${post.slug}`}
        ogImage={post.coverImage}
        ogType="article"
        schema={[articleSchema, breadcrumbSchema]}
      />

      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-charcoal-950 text-ivory-100 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40">
          <img
            src={post.coverImage}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/60 to-transparent" />

        <div className="relative z-10 max-w-4xl mx-auto space-y-4">
          <Breadcrumbs
            dark
            items={[
              { name: 'Journal', url: '/blog' },
              { name: post.category, url: '/blog' }
            ]}
          />
          <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-himalayan-400 font-semibold">
            <span>{post.category}</span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              <span>{post.readingTime}</span>
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-serif text-ivory-100 leading-tight">
            {post.title}
          </h1>

          <div className="pt-2 flex items-center gap-3 text-xs text-ivory-200/70 font-light">
            <span>By {post.author.name} ({post.author.role})</span>
            <span>•</span>
            <span>Published on {post.publishedDate}</span>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="space-y-12">
          {post.sections.map((section, idx) => (
            <div key={idx} className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-serif text-charcoal-900 leading-snug">
                {section.heading}
              </h2>

              {section.content.map((p, pIdx) => (
                <p key={pIdx} className="text-xs sm:text-base text-charcoal-700 font-light leading-relaxed">
                  {p}
                </p>
              ))}

              {section.quote && (
                <blockquote className="my-6 p-6 border-l-2 border-himalayan-700 bg-ivory-50 rounded-r-sm italic font-serif text-base sm:text-lg text-charcoal-800">
                  "{section.quote}"
                </blockquote>
              )}

              {section.bulletPoints && (
                <ul className="space-y-2 pt-2 text-xs sm:text-sm text-charcoal-700 font-light">
                  {section.bulletPoints.map((bp, bpIdx) => (
                    <li key={bpIdx} className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{bp}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}

          {/* Contextual Conversion Box */}
          <div className="my-12 p-8 bg-charcoal-900 text-ivory-100 rounded-md border border-charcoal-800 space-y-4 shadow-luxury">
            <span className="text-xs uppercase tracking-super-wide text-himalayan-400 font-semibold block">
              Experience the Kumaon Hills in Seclusion
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif text-ivory-100">
              Stay at The Mukteshwar Bungalow
            </h3>
            <p className="text-xs sm:text-sm text-ivory-200/80 font-light leading-relaxed max-w-xl">
              A private 3 BHK mountain sanctuary in Kasialekh with panoramic Veranda Lounge, garden lawns, and sweeping valley views.
            </p>
            <div className="pt-2 flex flex-wrap gap-4">
              <Button to="/book" variant="himalayan" icon={<ArrowRight className="w-4 h-4" />}>
                Check Direct Availability
              </Button>
              <Button
                to="/rooms"
                variant="outline"
                className="border-ivory-100/30 text-ivory-100 hover:bg-ivory-100 hover:text-charcoal-900"
              >
                Explore the 3 Suites
              </Button>
            </div>
          </div>
        </div>

        {/* Related Articles */}
        {relatedPosts.length > 0 && (
          <div className="pt-16 border-t border-charcoal-900/10 space-y-8">
            <h3 className="text-2xl font-serif text-charcoal-900">
              Related Travel Guides
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {relatedPosts.map((rPost) => (
                <BlogCard key={rPost.id} post={rPost} />
              ))}
            </div>
          </div>
        )}
      </article>
    </>
  );
};
