import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, MessageCircle, ExternalLink, Shield, Compass, Sparkles } from 'lucide-react';
import { propertyData } from '../../data/propertyData';
import { generateWhatsAppLink } from '../../services/WhatsAppService';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-charcoal-900 text-ivory-100/90 pt-16 pb-28 md:pb-16 border-t border-charcoal-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-14 border-b border-ivory-100/10">
          
          {/* Brand & Canonical NAP Column */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="inline-block group" aria-label="The Mukteshwar Bungalow | 3 BHK Villa">
              <span className="text-[10px] tracking-super-wide text-ivory-100/60 font-sans uppercase block">THE</span>
              <span className="text-2xl sm:text-3xl font-serif font-bold text-himalayan-400 block group-hover:text-himalayan-300 transition-colors">MUKTESHWAR</span>
              <span className="text-[10px] tracking-super-wide text-ivory-100/60 font-sans uppercase block">BUNGALOW</span>
              <span className="text-[11px] font-sans tracking-widest text-himalayan-300/90 uppercase block mt-1 font-semibold">3 BHK Villa</span>
            </Link>

            <p className="text-xs text-ivory-200/80 font-light leading-relaxed">
              A private 3 BHK luxury mountain residence in the Kumaon hills. Offering 100% exclusive privacy, veranda lounge, open sun deck, and panoramic Himalayan serenity.
            </p>

            {/* Exact Canonical NAP */}
            <div
              className="pt-2 space-y-2.5 text-xs text-ivory-200/80 font-light"
              itemScope
              itemType="https://schema.org/LodgingBusiness"
            >
              <meta itemProp="name" content="The Mukteshwar Bungalow | 3 BHK Villa" />
              <meta itemProp="url" content="https://themukteshwarbungalow.in" />

              <div className="flex items-start gap-2.5" itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                <MapPin className="w-4 h-4 text-himalayan-400 shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  <span className="text-ivory-100 font-medium">Address: </span>
                  <span itemProp="streetAddress">{propertyData.address.line1}</span>, Tehsil - {propertyData.address.tehsil}, District - {propertyData.address.district}, <span itemProp="addressLocality">{propertyData.address.city}</span>, <span itemProp="addressRegion">{propertyData.address.state}</span> - <span itemProp="postalCode">{propertyData.address.postalCode}</span>
                </span>
              </div>

              {propertyData.contact.phone && (
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-himalayan-400 shrink-0" />
                  <span className="leading-relaxed">
                    <span className="text-ivory-100 font-medium">Phone: </span>
                    <a
                      href={`tel:${propertyData.contact.phoneRaw || '+917078560516'}`}
                      itemProp="telephone"
                      className="hover:text-himalayan-400 transition-colors font-medium text-ivory-100"
                    >
                      {propertyData.contact.phone}
                    </a>
                  </span>
                  <span className="text-ivory-200/50 text-[11px]">(Direct Call / Reservations)</span>
                </div>
              )}

              <div className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href={generateWhatsAppLink({ intent: 'general' })}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-himalayan-400 transition-colors"
                >
                  <span className="text-ivory-100 font-medium">WhatsApp: </span>
                  <span className="font-medium text-ivory-100">{propertyData.contact.phone || '+91 70785 60516'}</span>
                  <span className="text-ivory-200/50 text-[11px] ml-1.5">(Concierge)</span>
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-himalayan-400 shrink-0" />
                <span className="leading-relaxed">
                  <span className="text-ivory-100 font-medium">Email: </span>
                  <a
                    href={`mailto:${propertyData.contact.email}`}
                    itemProp="email"
                    className="hover:text-himalayan-400 transition-colors font-medium text-ivory-100"
                  >
                    {propertyData.contact.email}
                  </a>
                </span>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-3">
              <a
                href={propertyData.address.googleMapsUrl || 'https://www.google.com/maps/place/?cid=6280376278760413003'}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-himalayan-400 hover:text-himalayan-300 font-medium underline underline-offset-4"
              >
                <span>Google Maps Profile</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              <span className="hidden sm:inline text-ivory-100/20">•</span>
              <a
                href="https://www.instagram.com/themukteshwarbungalow"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-ivory-200/70 hover:text-himalayan-400 font-medium transition-colors"
              >
                <span>Instagram @themukteshwarbungalow</span>
                <ExternalLink className="w-3 h-3 opacity-60" />
              </a>
            </div>
          </div>

          {/* Quick Links / The Residence */}
          <div className="space-y-4">
            <h3 className="text-xs uppercase tracking-super-wide font-sans font-semibold text-ivory-100">
              The Residence
            </h3>
            <ul className="space-y-2.5 text-xs text-ivory-200/70 font-light">
              <li>
                <Link to="/villa" className="hover:text-himalayan-400 transition-colors">The Bungalow Estate</Link>
              </li>
              <li>
                <Link to="/rooms" className="hover:text-himalayan-400 transition-colors">All 3 Luxury Suites</Link>
              </li>
              <li>
                <Link to="/rooms/the-himalayan-suite" className="hover:text-himalayan-400 transition-colors">The Himalayan Suite</Link>
              </li>
              <li>
                <Link to="/rooms/the-imperial-suite" className="hover:text-himalayan-400 transition-colors">The Imperial Suite</Link>
              </li>
              <li>
                <Link to="/rooms/the-signature-himalayan" className="hover:text-himalayan-400 transition-colors">The Signature Himalayan</Link>
              </li>
              <li>
                <Link to="/veranda-lounge" className="hover:text-himalayan-400 transition-colors">The Veranda Lounge</Link>
              </li>
              <li>
                <Link to="/kitchen" className="hover:text-himalayan-400 transition-colors">Fully Equipped Kitchen</Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-himalayan-400 transition-colors">Photography Gallery</Link>
              </li>
            </ul>
          </div>

          {/* Destination & Regional Guides */}
          <div className="space-y-4">
            <h3 className="text-xs uppercase tracking-super-wide font-sans font-semibold text-ivory-100">
              Explore Kumaon
            </h3>
            <ul className="space-y-2.5 text-xs text-ivory-200/70 font-light">
              <li>
                <Link to="/mukteshwar" className="hover:text-himalayan-400 transition-colors">Mukteshwar Destination Guide</Link>
              </li>
              <li>
                <Link to="/location" className="hover:text-himalayan-400 transition-colors">Kasialekh / Dausapani Guide</Link>
              </li>
              <li>
                <Link to="/nearby-attractions" className="hover:text-himalayan-400 transition-colors">Nearby Attractions (Chauli Ki Jali, Temples)</Link>
              </li>
              <li>
                <Link to="/experiences" className="hover:text-himalayan-400 transition-colors">Curated Mountain Experiences</Link>
              </li>
              <li>
                <Link to="/directions" className="hover:text-himalayan-400 transition-colors">How to Reach & Driving Routes</Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-himalayan-400 transition-colors">Travel Journal & Itineraries</Link>
              </li>
              <li>
                <Link to="/faqs" className="hover:text-himalayan-400 transition-colors">Frequently Asked Questions</Link>
              </li>
              <li>
                <Link to="/reviews" className="hover:text-himalayan-400 transition-colors">Guest Stories & Reviews</Link>
              </li>
            </ul>
          </div>

          {/* Direct Booking & Local City Getaways */}
          <div className="space-y-4">
            <h3 className="text-xs uppercase tracking-super-wide font-sans font-semibold text-ivory-100">
              City Getaways
            </h3>
            <ul className="space-y-2.5 text-xs text-ivory-200/70 font-light">
              <li>
                <Link to="/luxury-villa-mukteshwar-from-delhi" className="hover:text-himalayan-400 transition-colors">From Delhi (330 km)</Link>
              </li>
              <li>
                <Link to="/mukteshwar-villa-from-noida" className="hover:text-himalayan-400 transition-colors">From Noida & Greater Noida</Link>
              </li>
              <li>
                <Link to="/mukteshwar-weekend-getaway-from-gurgaon" className="hover:text-himalayan-400 transition-colors">From Gurgaon (NH9 / KMP)</Link>
              </li>
              <li>
                <Link to="/mukteshwar-villa-from-dehradun" className="hover:text-himalayan-400 transition-colors">From Dehradun & Garhwal</Link>
              </li>
              <li>
                <Link to="/mukteshwar-villa-from-haldwani" className="hover:text-himalayan-400 transition-colors">From Haldwani & Kathgodam (2 hrs)</Link>
              </li>
            </ul>

            <div className="pt-3">
              <h4 className="text-[11px] uppercase tracking-wider font-semibold text-ivory-100/90 mb-2">
                Direct Booking
              </h4>
              <ul className="space-y-1.5 text-xs text-ivory-200/70 font-light">
                <li>
                  <Link to="/availability" className="hover:text-himalayan-400 transition-colors">Check Live Dates</Link>
                </li>
                <li>
                  <Link to="/pricing" className="hover:text-himalayan-400 transition-colors">Transparent Rates & Fees</Link>
                </li>
                <li>
                  <Link to="/book" className="hover:text-himalayan-400 transition-colors">Direct Reservation Request</Link>
                </li>
                <li className="pt-1.5">
                  <a
                    href={`tel:${propertyData.contact.phoneRaw || '+917078560516'}`}
                    className="hover:text-himalayan-300 transition-colors inline-flex items-center gap-1.5 text-himalayan-400 font-medium"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Phone: {propertyData.contact.phone || '+91 70785 60516'}</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-ivory-200/50">
          <div className="flex items-center gap-4 flex-wrap text-center sm:text-left">
            <span>© {new Date().getFullYear()} The Mukteshwar Bungalow. All Rights Reserved.</span>
            <span className="hidden sm:inline">•</span>
            <Link to="/policies" className="hover:text-ivory-100 transition-colors">House Policies</Link>
            <span>•</span>
            <Link to="/privacy-policy" className="hover:text-ivory-100 transition-colors">Privacy Policy</Link>
            <span>•</span>
            <Link to="/terms" className="hover:text-ivory-100 transition-colors">Terms of Stay</Link>
          </div>

          <div className="flex items-center gap-2 text-ivory-200/60 text-[11px]">
            <Sparkles className="w-3.5 h-3.5 text-himalayan-400" />
            <span>Direct Booking Guaranteed • 100% Commission-Free</span>
          </div>
        </div>

        {/* Agency Attribution */}
        <div className="pt-4 mt-4 border-t border-ivory-100/5 flex items-center justify-center text-[11px] text-ivory-200/40 text-center">
          <span>
            Website developed &amp; other services by{' '}
            <a
              href="https://growguest.in/"
              target="_blank"
              rel="noopener"
              title="Growguest - Hospitality Marketing & Web Services"
              className="text-ivory-200/70 hover:text-himalayan-400 font-medium transition-colors underline underline-offset-2"
            >
              Growguest
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};
