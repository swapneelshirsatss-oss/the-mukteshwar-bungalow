import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, Phone, Calendar } from 'lucide-react';
import { propertyData } from '../../data/propertyData';
import { generateWhatsAppLink } from '../../services/WhatsAppService';
import { trackEvent } from '../../services/AnalyticsService';

export const StickyMobileBar: React.FC = () => {
  const handleCall = () => {
    trackEvent('phone_click', { source: 'sticky_mobile_bar' });
  };

  const handleWhatsApp = () => {
    trackEvent('whatsapp_click', { source: 'sticky_mobile_bar' });
  };

  const handleBook = () => {
    trackEvent('booking_start', { source: 'sticky_mobile_bar' });
  };

  return (
    <aside
      aria-label="Quick Contact Actions"
      className="fixed bottom-0 left-0 right-0 z-40 bg-charcoal-900/95 backdrop-blur-lg border-t border-ivory-100/10 px-2.5 py-2 sm:hidden shadow-2xl"
    >
      <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
        {/* Direct Call CTA */}
        <a
          href={`tel:${propertyData.contact.phoneRaw || '+917078560516'}`}
          onClick={handleCall}
          className="flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-sm bg-charcoal-800 text-ivory-100 border border-ivory-100/15 text-[11px] font-semibold uppercase tracking-wider active:scale-[0.98] transition-transform"
          aria-label={`Call ${propertyData.contact.phone || '+91 70785 60516'}`}
        >
          <Phone className="w-3.5 h-3.5 text-himalayan-400 shrink-0" />
          <span>Call</span>
        </a>

        {/* WhatsApp CTA */}
        <a
          href={generateWhatsAppLink({ intent: 'availability' })}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleWhatsApp}
          className="flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-sm bg-emerald-700/90 text-ivory-100 border border-emerald-500/30 text-[11px] font-semibold uppercase tracking-wider active:scale-[0.98] transition-transform"
          aria-label="WhatsApp Concierge: +91 70785 60516"
        >
          <MessageCircle className="w-3.5 h-3.5 text-emerald-300 shrink-0" />
          <span>WhatsApp</span>
        </a>

        {/* Book / Check Availability CTA */}
        <Link
          to="/book"
          onClick={handleBook}
          className="flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-sm bg-himalayan-700 text-ivory-100 text-[11px] font-semibold uppercase tracking-wider shadow-himalayan active:scale-[0.98] transition-transform"
        >
          <Calendar className="w-3.5 h-3.5 shrink-0" />
          <span>Book</span>
        </Link>
      </div>
    </aside>
  );
};
