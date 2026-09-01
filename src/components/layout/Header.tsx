import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MessageCircle, Calendar } from 'lucide-react';
import { propertyData } from '../../data/propertyData';
import { generateWhatsAppLink } from '../../services/WhatsAppService';
import { trackEvent } from '../../services/AnalyticsService';

interface HeaderProps {
  onOpenBookingModal?: () => void;
}

export const Header: React.FC<HeaderProps> = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'The Villa', path: '/villa' },
    { name: 'Suites', path: '/rooms' },
    { name: 'Veranda Lounge', path: '/veranda-lounge' },
    { name: 'Private Pool', path: '/private-pool' },
    { name: 'Kitchen', path: '/kitchen' },
    { name: 'Experiences', path: '/experiences' },
    { name: 'Location', path: '/location' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Journal', path: '/blog' }
  ];

  const handleWhatsAppClick = () => {
    trackEvent('whatsapp_click', { source: 'header' });
  };

  const handlePhoneClick = () => {
    trackEvent('phone_click', { source: 'header' });
  };

  const handleBookClick = () => {
    trackEvent('booking_start', { source: 'header_button' });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? 'bg-ivory-100/95 backdrop-blur-md shadow-subtle py-3 border-b border-charcoal-900/10'
            : 'bg-gradient-to-b from-charcoal-950/70 via-charcoal-950/30 to-transparent py-4 md:py-6 text-ivory-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo Wordmark */}
          <Link
            to="/"
            className="group flex flex-col items-start select-none focus:outline-none"
            aria-label="The Mukteshwar Bungalow Home"
          >
            <span
              className={`text-[9px] sm:text-[10px] tracking-super-wide font-sans uppercase leading-tight font-medium transition-colors ${
                isScrolled ? 'text-charcoal-700' : 'text-ivory-100/80'
              }`}
            >
              THE
            </span>
            <span
              className={`text-xl sm:text-2xl md:text-3xl font-serif font-bold tracking-tight leading-none text-himalayan-700 transition-transform group-hover:scale-[1.01]`}
            >
              MUKTESHWAR
            </span>
            <span
              className={`text-[9px] sm:text-[10px] tracking-super-wide font-sans uppercase leading-tight font-medium transition-colors ${
                isScrolled ? 'text-charcoal-700' : 'text-ivory-100/80'
              }`}
            >
              BUNGALOW
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-7" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-xs uppercase tracking-widest font-medium transition-all duration-200 relative py-1 ${
                    isActive
                      ? 'text-himalayan-700 font-semibold'
                      : isScrolled
                      ? 'text-charcoal-800 hover:text-himalayan-700'
                      : 'text-ivory-100/90 hover:text-ivory-100'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-himalayan-700 rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Header Action CTAs */}
          <div className="hidden sm:flex items-center space-x-2 md:space-x-3">
            {/* Direct Phone Call */}
            <a
              href={`tel:${propertyData.contact.phoneRaw || '+917078560516'}`}
              onClick={handlePhoneClick}
              className={`hidden md:inline-flex items-center gap-1.5 px-3 py-2 rounded-full border text-xs font-semibold tracking-wide transition-all ${
                isScrolled
                  ? 'border-charcoal-900/15 text-charcoal-800 hover:bg-charcoal-900 hover:text-ivory-100 hover:border-charcoal-900'
                  : 'border-ivory-100/30 text-ivory-100 hover:bg-ivory-100/15 hover:border-ivory-100/50'
              }`}
              title={`Direct Call: ${propertyData.contact.phone || '+91 70785 60516'}`}
              aria-label={`Call ${propertyData.contact.phone || '+91 70785 60516'}`}
            >
              <Phone className="w-3.5 h-3.5 text-himalayan-400" />
              <span className="hidden xl:inline">{propertyData.contact.phone || '+91 70785 60516'}</span>
              <span className="xl:hidden">Call</span>
            </a>

            {/* WhatsApp Quick Action */}
            <a
              href={generateWhatsAppLink({ intent: 'availability' })}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleWhatsAppClick}
              className={`p-2.5 rounded-full border transition-all ${
                isScrolled
                  ? 'border-charcoal-900/20 text-charcoal-900 hover:bg-emerald-600 hover:text-ivory-100 hover:border-emerald-600'
                  : 'border-ivory-100/30 text-ivory-100 hover:bg-emerald-600 hover:border-emerald-600'
              }`}
              title="Chat on WhatsApp (+91 70785 60516)"
              aria-label="Direct WhatsApp Concierge: +91 70785 60516"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
            </a>

            {/* Direct Book CTA */}
            <Link
              to="/book"
              onClick={handleBookClick}
              className={`inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold px-5 py-2.5 rounded-sm transition-all shadow-sm ${
                isScrolled
                  ? 'bg-himalayan-700 text-ivory-100 hover:bg-himalayan-800'
                  : 'bg-himalayan-700 text-ivory-100 hover:bg-himalayan-800 border border-himalayan-600/30'
              }`}
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Direct</span>
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center lg:hidden space-x-2">
            <Link
              to="/book"
              className="text-xs uppercase tracking-wider font-semibold bg-himalayan-700 text-ivory-100 px-3 py-2 rounded-sm sm:hidden"
            >
              Book
            </Link>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-sm transition-colors ${
                isScrolled
                  ? 'text-charcoal-900 hover:bg-charcoal-900/10'
                  : 'text-ivory-100 hover:bg-ivory-100/10'
              }`}
              aria-label={isMobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Mobile Navigation Drawer */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 bg-charcoal-950/98 backdrop-blur-xl text-ivory-100 flex flex-col justify-between p-6 sm:p-8 animate-fade-in lg:hidden overflow-y-auto"
          role="dialog"
          aria-modal="true"
        >
          {/* Top Bar inside Drawer */}
          <div className="flex items-center justify-between border-b border-ivory-100/10 pb-4">
            <Link
              to="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex flex-col items-start"
            >
              <span className="text-[9px] tracking-super-wide text-ivory-100/70 font-sans uppercase">THE</span>
              <span className="text-xl font-serif font-bold text-himalayan-700">MUKTESHWAR</span>
              <span className="text-[9px] tracking-super-wide text-ivory-100/70 font-sans uppercase">BUNGALOW</span>
            </Link>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 rounded-full text-ivory-100/80 hover:text-ivory-100 hover:bg-ivory-100/10"
              aria-label="Close Navigation"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Navigation Items */}
          <div className="py-6 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-xl sm:text-2xl font-serif tracking-wide py-1 transition-colors ${
                  location.pathname === link.path
                    ? 'text-himalayan-400 font-semibold'
                    : 'text-ivory-100/90 hover:text-himalayan-400'
                }`}
              >
                {link.name}
              </Link>
            ))}

            <div className="pt-4 border-t border-ivory-100/10 flex flex-col space-y-2 text-xs uppercase tracking-widest text-ivory-100/60 font-medium">
              <Link to="/availability" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-ivory-100 py-1">
                Live Availability
              </Link>
              <Link to="/pricing" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-ivory-100 py-1">
                Direct Pricing & Rates
              </Link>
              <Link to="/faqs" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-ivory-100 py-1">
                Frequently Asked Questions
              </Link>
              <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-ivory-100 py-1">
                Contact & Directions
              </Link>
            </div>
          </div>

          {/* Bottom Drawer Actions */}
          <div className="pt-4 border-t border-ivory-100/10 flex flex-col space-y-3">
            <Link
              to="/book"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full text-center bg-himalayan-700 text-ivory-100 py-3.5 rounded-sm font-sans uppercase tracking-widest text-xs font-semibold hover:bg-himalayan-800 transition-colors"
            >
              Check Availability & Book
            </Link>

            <a
              href={generateWhatsAppLink({ intent: 'availability' })}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                handleWhatsAppClick();
                setIsMobileMenuOpen(false);
              }}
              className="w-full text-center border border-emerald-500/40 bg-emerald-950/30 text-ivory-100 py-3 rounded-sm font-sans uppercase tracking-widest text-xs font-medium hover:bg-emerald-900/40 flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>WhatsApp: +91 70785 60516</span>
            </a>

            <a
              href={`tel:${propertyData.contact.phoneRaw || '+917078560516'}`}
              onClick={() => {
                handlePhoneClick();
                setIsMobileMenuOpen(false);
              }}
              className="w-full text-center border border-ivory-100/30 text-ivory-100 py-3 rounded-sm font-sans uppercase tracking-widest text-xs font-medium hover:bg-ivory-100/10 flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-himalayan-400" />
              <span>Direct Call: {propertyData.contact.phone || '+91 70785 60516'}</span>
            </a>
          </div>
        </div>
      )}
    </>
  );
};
