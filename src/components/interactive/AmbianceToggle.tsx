import React, { useState } from 'react';
import { Sun, Moon, Sparkles } from 'lucide-react';

export const AmbianceToggle: React.FC = () => {
  const [mode, setMode] = useState<'day' | 'dusk'>('day');

  const dayImage = '/images/exterior/villa-exterior-facade-daylight.jpg';
  const duskImage = '/images/exterior/villa-exterior-sunset-dusk.jpg';

  return (
    <div className="relative rounded-lg overflow-hidden border border-charcoal-900/15 shadow-luxury">
      {/* Background Image Container */}
      <div className="relative h-80 sm:h-[450px] w-full bg-charcoal-950 overflow-hidden">
        <img
          src={mode === 'day' ? dayImage : duskImage}
          alt={mode === 'day' ? 'The Mukteshwar Bungalow in Golden Daylight' : 'The Mukteshwar Bungalow in Evening Dusk Light'}
          className="w-full h-full object-cover transition-all duration-700 ease-in-out transform scale-100 hover:scale-102"
        />

        {/* Ambient Overlay */}
        <div
          className={`absolute inset-0 transition-opacity duration-700 ${
            mode === 'day'
              ? 'bg-gradient-to-t from-charcoal-950/60 via-transparent to-transparent'
              : 'bg-gradient-to-t from-charcoal-950/85 via-charcoal-950/30 to-transparent'
          }`}
        />

        {/* Top-Right Toggle Badge */}
        <div
          role="group"
          aria-label="Ambiance light mode switch"
          className="absolute top-4 right-4 z-10 bg-charcoal-950/80 backdrop-blur-md p-1.5 rounded-full border border-ivory-100/20 flex items-center gap-1 shadow-lg"
        >
          <button
            type="button"
            onClick={() => setMode('day')}
            aria-label="Switch to daylight mountain view"
            aria-pressed={mode === 'day'}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium uppercase tracking-wider transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-himalayan-400 focus-visible:ring-offset-1 ${
              mode === 'day'
                ? 'bg-ivory-100 text-charcoal-900 shadow-sm'
                : 'text-ivory-100/70 hover:text-ivory-100'
            }`}
          >
            <Sun className="w-3.5 h-3.5 text-amber-500" />
            <span className="hidden sm:inline">Daylight</span>
          </button>

          <button
            type="button"
            onClick={() => setMode('dusk')}
            aria-label="Switch to dusk fireside mountain view"
            aria-pressed={mode === 'dusk'}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium uppercase tracking-wider transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-himalayan-400 focus-visible:ring-offset-1 ${
              mode === 'dusk'
                ? 'bg-himalayan-700 text-ivory-100 shadow-sm'
                : 'text-ivory-100/70 hover:text-ivory-100'
            }`}
          >
            <Moon className="w-3.5 h-3.5 text-ivory-200" />
            <span className="hidden sm:inline">Dusk Fireside</span>
          </button>
        </div>

        {/* Bottom Editorial Caption */}
        <div className="absolute bottom-6 left-6 right-6 z-10 text-ivory-100">
          <span className="text-[10px] uppercase tracking-widest-plus text-himalayan-400 font-semibold block mb-1">
            {mode === 'day' ? 'Himalayan Ridge Daylight' : 'Dusk Fireside Ambiance'}
          </span>
          <h3 className="text-xl sm:text-2xl font-serif leading-tight">
            {mode === 'day'
              ? 'Flooded with natural high-altitude sunshine & crisp pine breezes'
              : 'Ambient warmth, quiet mountain dusk & fireside conversations'}
          </h3>
        </div>
      </div>
    </div>
  );
};
