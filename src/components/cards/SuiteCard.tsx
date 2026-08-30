import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Bed, Eye, ArrowRight, Check } from 'lucide-react';
import { RoomSuite } from '../../types';
import { Button } from '../common/Button';

interface SuiteCardProps {
  room: RoomSuite;
}

export const SuiteCard: React.FC<SuiteCardProps> = ({ room }) => {
  return (
    <div className="bg-white rounded-md overflow-hidden shadow-editorial hover:shadow-luxury transition-all duration-300 border border-charcoal-900/10 flex flex-col group">
      {/* Image Container */}
      <div className="relative aspect-[16/10] overflow-hidden bg-charcoal-950">
        <img
          src={room.heroImage}
          alt={room.name}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* View Badge */}
        <div className="absolute top-4 left-4 bg-charcoal-950/80 backdrop-blur-md px-3 py-1 rounded-sm text-[10px] uppercase tracking-widest text-ivory-100 font-semibold border border-ivory-100/15">
          {room.viewType}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
        <div className="space-y-3">
          <span className="text-[10px] uppercase tracking-super-wide text-himalayan-700 font-semibold block">
            {room.subtitle}
          </span>
          <h3 className="text-2xl sm:text-3xl font-serif text-charcoal-900 group-hover:text-himalayan-700 transition-colors">
            {room.name}
          </h3>
          <p className="text-xs sm:text-sm text-charcoal-600 font-light leading-relaxed line-clamp-3">
            {room.overview}
          </p>

          {/* Quick Specs */}
          <div className="grid grid-cols-2 gap-3 py-3 border-y border-charcoal-900/10 text-xs text-charcoal-700">
            <div className="flex items-center gap-2">
              <Bed className="w-4 h-4 text-himalayan-700 shrink-0" />
              <span className="truncate">{room.bedConfiguration.split('with')[0]}</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-himalayan-700 shrink-0" />
              <span>Up to {room.maxOccupancy} Guests</span>
            </div>
          </div>

          {/* Key Features */}
          <ul className="space-y-1.5 pt-1">
            {room.features.slice(0, 3).map((f) => (
              <li key={f} className="flex items-center gap-2 text-xs text-charcoal-600">
                <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Action CTAs */}
        <div className="pt-4 border-t border-charcoal-900/10 flex items-center justify-between gap-3">
          <Link
            to={`/rooms/${room.slug}`}
            className="text-xs uppercase tracking-wider font-semibold text-charcoal-900 hover:text-himalayan-700 flex items-center gap-1 group/link"
          >
            <span>Explore Suite</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
          </Link>

          <Link
            to={`/book?room=${room.id}`}
            className="text-xs uppercase tracking-widest font-semibold bg-himalayan-700 hover:bg-himalayan-800 text-ivory-100 px-4 py-2.5 rounded-sm transition-colors shadow-sm"
          >
            Check Availability
          </Link>
        </div>
      </div>
    </div>
  );
};
