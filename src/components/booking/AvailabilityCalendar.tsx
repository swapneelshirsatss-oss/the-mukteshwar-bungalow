import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Check, X, Calendar as CalendarIcon, Info } from 'lucide-react';
import { Link } from 'react-router-dom';
import { generateWhatsAppLink } from '../../services/WhatsAppService';

export const AvailabilityCalendar: React.FC = () => {
  // Generate sample 3 months for display (current month + next 2 months)
  const [currentMonthIndex, setCurrentMonthIndex] = useState(0);

  const months = [
    { name: 'September 2026', daysInMonth: 30, startDayOfWeek: 2 }, // Tuesday
    { name: 'October 2026', daysInMonth: 31, startDayOfWeek: 4 }, // Thursday
    { name: 'November 2026', daysInMonth: 30, startDayOfWeek: 0 }, // Sunday
    { name: 'December 2026', daysInMonth: 31, startDayOfWeek: 2 }, // Tuesday
  ];

  const currentMonth = months[currentMonthIndex];

  // Specific blocked weekends for realistic inventory visualization
  const isDateBlocked = (day: number) => {
    // Example realistic blocked dates (e.g. 2nd & 4th weekends)
    if (currentMonthIndex === 0 && (day === 12 || day === 13 || day === 26 || day === 27)) return true;
    if (currentMonthIndex === 1 && (day === 10 || day === 11 || day === 24 || day === 25)) return true;
    return false;
  };

  const handlePrev = () => {
    if (currentMonthIndex > 0) setCurrentMonthIndex(currentMonthIndex - 1);
  };

  const handleNext = () => {
    if (currentMonthIndex < months.length - 1) setCurrentMonthIndex(currentMonthIndex + 1);
  };

  const dayNames = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

  return (
    <div className="bg-white rounded-md shadow-editorial border border-charcoal-900/10 p-6 sm:p-8 max-w-xl mx-auto">
      {/* Calendar Header */}
      <div className="flex items-center justify-between border-b border-charcoal-900/10 pb-4 mb-6">
        <div>
          <span className="text-[10px] uppercase tracking-super-wide text-himalayan-700 font-semibold block">
            Direct Inventory
          </span>
          <h3 className="text-xl font-serif font-bold text-charcoal-900">
            {currentMonth.name}
          </h3>
        </div>

        <div className="flex items-center gap-1.5">
          <button
            onClick={handlePrev}
            disabled={currentMonthIndex === 0}
            className="p-2 rounded-sm border border-charcoal-900/15 text-charcoal-800 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-charcoal-50 transition-colors"
            aria-label="Previous Month"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={handleNext}
            disabled={currentMonthIndex === months.length - 1}
            className="p-2 rounded-sm border border-charcoal-900/15 text-charcoal-800 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-charcoal-50 transition-colors"
            aria-label="Next Month"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Weekday headers */}
      <div className="grid grid-cols-7 gap-1 text-center mb-2">
        {dayNames.map((d) => (
          <span key={d} className="text-[11px] font-semibold uppercase text-charcoal-500 py-1">
            {d}
          </span>
        ))}
      </div>

      {/* Days Grid */}
      <div className="grid grid-cols-7 gap-1 text-center">
        {/* Leading blank days */}
        {Array.from({ length: currentMonth.startDayOfWeek }).map((_, i) => (
          <div key={`blank-${i}`} className="h-10 sm:h-12" />
        ))}

        {/* Month days */}
        {Array.from({ length: currentMonth.daysInMonth }).map((_, i) => {
          const day = i + 1;
          const blocked = isDateBlocked(day);
          return (
            <div
              key={`day-${day}`}
              className={`h-10 sm:h-12 flex flex-col items-center justify-center rounded-sm text-xs transition-all relative ${
                blocked
                  ? 'bg-charcoal-100 text-charcoal-400 line-through cursor-not-allowed'
                  : 'bg-ivory-50 text-charcoal-900 hover:bg-himalayan-700 hover:text-ivory-100 cursor-pointer border border-charcoal-900/5'
              }`}
            >
              <span className="font-medium">{day}</span>
              <span
                className={`w-1 h-1 rounded-full mt-0.5 ${
                  blocked ? 'bg-charcoal-300' : 'bg-emerald-600'
                }`}
              />
            </div>
          );
        })}
      </div>

      {/* Legend */}
      <div className="mt-6 pt-4 border-t border-charcoal-900/10 flex items-center justify-between text-[11px] text-charcoal-600">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-600" />
          <span>Available for Direct Booking</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-charcoal-300" />
          <span>Reserved / Blocked</span>
        </div>
      </div>

      <div className="mt-6">
        <Link
          to="/book"
          className="w-full inline-flex items-center justify-center gap-2 bg-himalayan-700 hover:bg-himalayan-800 text-ivory-100 py-3.5 px-4 rounded-sm text-xs font-semibold uppercase tracking-widest shadow-himalayan transition-colors"
        >
          <CalendarIcon className="w-4 h-4" />
          <span>Select Dates & Book Direct</span>
        </Link>
      </div>
    </div>
  );
};
