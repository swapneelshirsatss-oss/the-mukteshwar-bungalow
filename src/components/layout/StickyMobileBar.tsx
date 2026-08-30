import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, Phone, Calendar } from 'lucide-react';
import { propertyData } from '../../data/propertyData';
import { generateWhatsAppLink } from '../../services/WhatsAppService';
import { trackEvent } from '../../services/AnalyticsService';

export const StickyMobileBar: React.FC = () => {
  const handleWhatsApp = () => {
    trackEvent('whatsapp_click', { source: 'sticky_mobile_bar' });
  };

  const handleBook = () => {
    trackEvent('booking_start', { source: 'sticky_mobile_bar' });
  };

  return (
    <aside
      aria-label="Quick Actions"
      className="fixed bottom-0 left-0 right-0 z-40 bg-charcoal-900/95 backdrop-blur-lg border-t border-ivory-100/10 px-3 py-2.5 sm:hidden shadow-2xl"
    >
      <div className="grid grid-cols-2 gap-2 max-w-md mx-auto">
        {/* WhatsApp CTA */}
        <a
          href={generateWhatsAppLink({ intent: 'availability' })}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleWhatsApp}
          className="flex items-center justify-center gap-2 py-3 px-3 rounded-sm bg-charcoal-800 text-ivory-100 border border-ivory-100/15 text-xs font-semibold uppercase tracking-wider active:scale-[0.98] transition-transform"
        >
          <MessageCircle className="w-4 h-4 text-emerald-400" />
          <span>WhatsApp</span>
        </a>

        {/* Book / Check Availability CTA */}
        <Link
          to="/book"
          onClick={handleBook}
          className="flex items-center justify-center gap-2 py-3 px-3 rounded-sm bg-himalayan-700 text-ivory-100 text-xs font-semibold uppercase tracking-wider shadow-himalayan active:scale-[0.98] transition-transform"
        >
          <Calendar className="w-4 h-4" />
          <span>Check Dates</span>
        </Link>
      </div>
    </aside>
  );
};
