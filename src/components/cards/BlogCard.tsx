import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Calendar, ArrowRight } from 'lucide-react';
import { BlogPost } from '../../types';

interface BlogCardProps {
  post: BlogPost;
}

export const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  return (
    <article className="bg-white rounded-md overflow-hidden shadow-editorial hover:shadow-luxury transition-all duration-300 border border-charcoal-900/10 flex flex-col group">
      {/* Cover Image */}
      <Link to={`/blog/${post.slug}`} className="relative aspect-[16/10] overflow-hidden bg-charcoal-950 block">
        <img
          src={post.coverImage}
          alt={post.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        <div className="absolute top-4 left-4 bg-charcoal-950/80 backdrop-blur-md px-3 py-1 rounded-sm text-[10px] uppercase tracking-widest text-ivory-100 font-semibold border border-ivory-100/15">
          {post.category}
        </div>
      </Link>

      {/* Content */}
      <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-2.5">
          <div className="flex items-center gap-3 text-[11px] text-charcoal-500 font-light">
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-himalayan-700" />
              <span>{post.publishedDate}</span>
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-himalayan-700" />
              <span>{post.readingTime}</span>
            </span>
          </div>

          <h3 className="text-xl sm:text-2xl font-serif text-charcoal-900 group-hover:text-himalayan-700 transition-colors leading-snug">
            <Link to={`/blog/${post.slug}`}>
              {post.title}
            </Link>
          </h3>

          <p className="text-xs sm:text-sm text-charcoal-600 font-light leading-relaxed line-clamp-3">
            {post.excerpt}
          </p>
        </div>

        <div className="pt-4 border-t border-charcoal-900/10 flex items-center justify-between">
          <span className="text-[11px] text-charcoal-500 font-light">
            By {post.author.name}
          </span>

          <Link
            to={`/blog/${post.slug}`}
            className="text-xs font-semibold uppercase tracking-wider text-himalayan-700 hover:text-himalayan-800 flex items-center gap-1 group/link"
          >
            <span>Read Guide</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
          </Link>
        </div>
      </div>
    </article>
  );
};
