import React, { useState } from 'react';
import { MessageCircle, X, Calendar, MapPin, Sparkles, Send, Phone } from 'lucide-react';
import { propertyData } from '../../data/propertyData';
import { generateWhatsAppLink, WhatsAppMessageParams } from '../../services/WhatsAppService';
import { trackEvent } from '../../services/AnalyticsService';

export const FloatingWhatsAppConcierge: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const triggerIntent = (intent: WhatsAppMessageParams['intent']) => {
    trackEvent('whatsapp_click', { source: 'floating_concierge_modal', intent });
    window.open(generateWhatsAppLink({ intent }), '_blank');
    setIsOpen(false);
  };

  const handleDirectCall = () => {
    trackEvent('phone_click', { source: 'floating_concierge_modal' });
  };

  return (
    <aside
      aria-label="Concierge"
      className="fixed bottom-20 sm:bottom-8 right-4 sm:right-8 z-40"
    >
      {/* Intent Selection Popup Modal */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-80 sm:w-96 bg-charcoal-900 text-ivory-100 rounded-lg shadow-2xl border border-ivory-100/15 p-5 animate-slide-up">
          <div className="flex items-center justify-between border-b border-ivory-100/10 pb-3 mb-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                <MessageCircle className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-ivory-100 font-sans">
                  Villa Concierge
                </h4>
                <p className="text-[10px] text-ivory-200/60 font-light">
                  WhatsApp: +91 70785 60516 • Online
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 text-ivory-200/60 hover:text-ivory-100 transition-colors"
              aria-label="Close Concierge"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-xs text-ivory-200/80 mb-4 font-light leading-relaxed">
            Namaste! How may our estate reservation team assist your stay at The Mukteshwar Bungalow?
          </p>

          <div className="space-y-2">
            <button
              onClick={() => triggerIntent('availability')}
              className="w-full text-left px-3.5 py-2.5 rounded-sm bg-charcoal-800 hover:bg-himalayan-700/80 transition-colors border border-ivory-100/10 flex items-center justify-between text-xs group"
            >
              <div className="flex items-center gap-2">
                <Calendar className="w-3.5 h-3.5 text-himalayan-400 group-hover:text-ivory-100" />
                <span>Check Live Dates & Availability</span>
              </div>
              <Send className="w-3 h-3 text-ivory-100/40 group-hover:text-ivory-100" />
            </button>

            <button
              onClick={() => triggerIntent('buyout')}
              className="w-full text-left px-3.5 py-2.5 rounded-sm bg-charcoal-800 hover:bg-himalayan-700/80 transition-colors border border-ivory-100/10 flex items-center justify-between text-xs group"
            >
              <div className="flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-himalayan-400 group-hover:text-ivory-100" />
                <span>Private 3 BHK Full Villa Buyout</span>
              </div>
              <Send className="w-3 h-3 text-ivory-100/40 group-hover:text-ivory-100" />
            </button>

            <button
              onClick={() => triggerIntent('location')}
              className="w-full text-left px-3.5 py-2.5 rounded-sm bg-charcoal-800 hover:bg-himalayan-700/80 transition-colors border border-ivory-100/10 flex items-center justify-between text-xs group"
            >
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-himalayan-400 group-hover:text-ivory-100" />
                <span>Directions to Kasialekh / Villa</span>
              </div>
              <Send className="w-3 h-3 text-ivory-100/40 group-hover:text-ivory-100" />
            </button>

            {/* Direct Voice Call Option */}
            <a
              href={`tel:${propertyData.contact.phoneRaw || '+917078560516'}`}
              onClick={handleDirectCall}
              className="w-full text-left px-3.5 py-2.5 rounded-sm bg-charcoal-800/60 hover:bg-charcoal-700 transition-colors border border-ivory-100/10 flex items-center justify-between text-xs group"
            >
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-himalayan-400 group-hover:text-ivory-100" />
                <span>Direct Voice Call (+91 70785 60516)</span>
              </div>
              <span className="text-[10px] text-himalayan-400 uppercase tracking-wider font-semibold">Call</span>
            </a>
          </div>

          <div className="mt-4 pt-3 border-t border-ivory-100/10 flex items-center justify-between text-[10px] text-ivory-200/60">
            <span>Direct WhatsApp: +91 70785 60516</span>
            <span className="text-emerald-400 font-medium">Instant Response</span>
          </div>
        </div>
      )}

      {/* Floating Action Circle Button */}
      <button
        onClick={() => {
          setIsOpen(!isOpen);
          trackEvent('whatsapp_click', { source: 'floating_concierge_toggle' });
        }}
        className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-emerald-600 text-white flex items-center justify-center shadow-luxury hover:bg-emerald-500 hover:scale-105 active:scale-95 transition-all focus:outline-none animate-pulse-subtle"
        aria-label="Open WhatsApp Concierge Chat"
        title="WhatsApp Concierge"
      >
        <MessageCircle className="w-7 h-7" />
      </button>
    </aside>
  );
};
