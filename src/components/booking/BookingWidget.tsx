import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, Users, ArrowRight, MessageCircle, Phone, Sparkles } from 'lucide-react';
import { generateWhatsAppLink } from '../../services/WhatsAppService';
import { trackEvent } from '../../services/AnalyticsService';

interface BookingWidgetProps {
  className?: string;
  dark?: boolean;
}

export const BookingWidget: React.FC<BookingWidgetProps> = ({ className = '', dark = false }) => {
  const navigate = useNavigate();
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);

  // Set default min checkIn to today
  const today = new Date().toISOString().split('T')[0];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    trackEvent('availability_search', { checkIn, checkOut, adults, children });
    navigate(`/book?checkIn=${encodeURIComponent(checkIn)}&checkOut=${encodeURIComponent(checkOut)}&adults=${adults}&children=${children}`);
  };

  return (
    <div
      className={`w-full max-w-5xl mx-auto rounded-md shadow-luxury border p-4 sm:p-6 transition-all ${
        dark
          ? 'bg-charcoal-900/95 border-ivory-100/15 text-ivory-100 backdrop-blur-md'
          : 'bg-ivory-50/95 border-charcoal-900/10 text-charcoal-900 backdrop-blur-md'
      } ${className}`}
    >
      <form onSubmit={handleSearch} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-end">
        {/* Check-In Date */}
        <div className="space-y-1.5">
          <label htmlFor="widget-checkin" className="block text-[11px] uppercase tracking-widest font-semibold opacity-70">
            Check-In
          </label>
          <div className="relative flex items-center">
            <Calendar className="w-4 h-4 absolute left-3.5 text-himalayan-700 pointer-events-none" />
            <input
              id="widget-checkin"
              type="date"
              min={today}
              value={checkIn}
              onChange={(e) => {
                setCheckIn(e.target.value);
                if (checkOut && e.target.value >= checkOut) {
                  setCheckOut('');
                }
              }}
              required
              aria-required="true"
              className="w-full bg-white text-charcoal-900 pl-10 pr-3 py-3 rounded-sm border border-charcoal-900/15 text-xs sm:text-sm font-medium focus:ring-1 focus:ring-himalayan-700 focus:border-himalayan-700 transition-all cursor-pointer"
            />
          </div>
        </div>

        {/* Check-Out Date */}
        <div className="space-y-1.5">
          <label htmlFor="widget-checkout" className="block text-[11px] uppercase tracking-widest font-semibold opacity-70">
            Check-Out
          </label>
          <div className="relative flex items-center">
            <Calendar className="w-4 h-4 absolute left-3.5 text-himalayan-700 pointer-events-none" />
            <input
              id="widget-checkout"
              type="date"
              min={checkIn || today}
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              required
              aria-required="true"
              className="w-full bg-white text-charcoal-900 pl-10 pr-3 py-3 rounded-sm border border-charcoal-900/15 text-xs sm:text-sm font-medium focus:ring-1 focus:ring-himalayan-700 focus:border-himalayan-700 transition-all cursor-pointer"
            />
          </div>
        </div>

        {/* Guests Selection */}
        <div className="space-y-1.5">
          <label htmlFor="widget-guests" className="block text-[11px] uppercase tracking-widest font-semibold opacity-70">
            Guests
          </label>
          <div className="relative flex items-center">
            <Users className="w-4 h-4 absolute left-3.5 text-himalayan-700 pointer-events-none" />
            <select
              id="widget-guests"
              aria-label="Select guest capacity"
              value={`${adults}-${children}`}
              onChange={(e) => {
                const [a, c] = e.target.value.split('-').map(Number);
                setAdults(a);
                setChildren(c);
              }}
              className="w-full bg-white text-charcoal-900 pl-10 pr-3 py-3 rounded-sm border border-charcoal-900/15 text-xs sm:text-sm font-medium focus:ring-1 focus:ring-himalayan-700 focus:border-himalayan-700 transition-all cursor-pointer appearance-none"
            >
              <option value="2-0">2 Adults (1 Suite)</option>
              <option value="4-0">4 Adults (2 Suites)</option>
              <option value="6-0">6 Adults (Full 3 BHK Villa)</option>
              <option value="6-2">6 Adults + 2 Kids (Full Villa)</option>
              <option value="8-0">8 Adults (Full Villa + Extra Beds)</option>
              <option value="9-0">9 Adults (Maximum Capacity)</option>
            </select>
          </div>
        </div>

        {/* Primary Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full bg-himalayan-700 hover:bg-himalayan-800 text-ivory-100 py-3.5 px-5 rounded-sm font-sans uppercase tracking-widest text-xs font-semibold shadow-himalayan transition-all flex items-center justify-center gap-2 group active:scale-[0.99]"
          >
            <span>Check Availability</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </form>

      {/* Trust & Instant Quick Actions Strip */}
      <div className="mt-4 pt-3 border-t border-charcoal-900/10 flex flex-wrap items-center justify-between gap-3 text-xs opacity-80">
        <div className="flex items-center gap-2 text-[11px] font-medium">
          <Sparkles className="w-3.5 h-3.5 text-himalayan-700" />
          <span>Direct Booking • Guaranteed Best Seasonal Rates • No Hidden OTA Fees</span>
        </div>

        <div className="flex items-center gap-3 text-[11px]">
          <span className="opacity-60 hidden sm:inline">Prefer direct chat?</span>
          <a
            href={generateWhatsAppLink({
              intent: 'availability',
              dates: { checkIn, checkOut },
              guests: { adults, children }
            })}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent('whatsapp_click', { source: 'booking_widget_quick' })}
            className="inline-flex items-center gap-1.5 font-semibold text-emerald-700 hover:text-emerald-800 underline underline-offset-2"
          >
            <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
            <span>WhatsApp Enquiry</span>
          </a>
        </div>
      </div>
    </div>
  );
};
