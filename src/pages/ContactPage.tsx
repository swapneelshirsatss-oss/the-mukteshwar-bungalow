import React, { useState } from 'react';
import { MapPin, Mail, MessageCircle, Phone, Send, CheckCircle2, ExternalLink, Sparkles } from 'lucide-react';
import { propertyData } from '../data/propertyData';
import { SEOHead } from '../components/common/SEOHead';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { SectionHeading } from '../components/common/SectionHeading';
import { Button } from '../components/common/Button';
import { generateWhatsAppLink } from '../services/WhatsAppService';
import { trackEvent } from '../services/AnalyticsService';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Stay Inquiry',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    trackEvent('form_submit', { form: 'contact_page', subject: formData.subject });
    setSubmitted(true);
  };

  return (
    <>
      <SEOHead
        title="Contact Host & Concierge | The Mukteshwar Bungalow"
        description="Get in touch with the estate reservation team at The Mukteshwar Bungalow in Kasialekh, Mukteshwar. WhatsApp, email, and location inquiries."
        canonicalUrl="https://themukteshwarbungalow.in/contact"
      />

      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-charcoal-950 text-ivory-100 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-45">
          <img
            src="/images/exterior/villa-exterior-himalayan-architecture.jpg"
            alt="Contact The Mukteshwar Bungalow"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/60 to-transparent" />

        <div className="relative z-10 max-w-5xl mx-auto space-y-4">
          <Breadcrumbs
            dark
            items={[{ name: 'Contact & Concierge', url: '/contact' }]}
          />
          <span className="text-xs uppercase tracking-super-wide text-himalayan-400 font-semibold block">
            Direct Host Inquiries
          </span>
          <h1 className="text-4xl sm:text-6xl font-serif text-ivory-100 leading-tight">
            Contact & Concierge
          </h1>
          <p className="text-base sm:text-xl text-ivory-200/80 font-light max-w-2xl leading-relaxed">
            Connect directly with our estate management team for date confirmations, driving directions, or bespoke stay requests.
          </p>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Direct Details */}
          <div className="lg:col-span-5 space-y-8">
            <SectionHeading
              subtitle="Direct Communication"
              title="We Are Here to Assist"
              description="Get in touch via WhatsApp for the fastest response, or submit a message below."
            />

            {/* Contact Cards */}
            <div className="space-y-4">
              {/* Direct Phone Call */}
              <a
                href={`tel:${propertyData.contact.phoneRaw || '+917078560516'}`}
                onClick={() => trackEvent('phone_click', { source: 'contact_page_card' })}
                className="flex items-start gap-4 p-5 rounded-md bg-white border border-charcoal-900/10 shadow-editorial hover:border-himalayan-600 transition-all group"
              >
                <div className="p-3 rounded-full bg-himalayan-50 text-himalayan-700 group-hover:bg-himalayan-700 group-hover:text-white transition-colors">
                  <Phone className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-serif font-bold text-charcoal-900 text-lg">
                    Direct Phone Reservations
                  </h4>
                  <p className="text-xs text-charcoal-600 font-light">
                    Direct voice line with estate reservations & concierge manager
                  </p>
                  <span className="text-sm font-bold text-himalayan-700 underline underline-offset-2 inline-block pt-1">
                    {propertyData.contact.phone || '+91 70785 60516'}
                  </span>
                </div>
              </a>

              {/* WhatsApp */}
              <a
                href={generateWhatsAppLink({ intent: 'general' })}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent('whatsapp_click', { source: 'contact_page_card' })}
                className="flex items-start gap-4 p-5 rounded-md bg-white border border-charcoal-900/10 shadow-editorial hover:border-emerald-600 transition-all group"
              >
                <div className="p-3 rounded-full bg-emerald-50 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-serif font-bold text-charcoal-900 text-lg">
                    WhatsApp Concierge
                  </h4>
                  <p className="text-xs text-charcoal-600 font-light">
                    Instant chat & dates confirmation: +91 70785 60516
                  </p>
                  <span className="text-xs font-semibold text-emerald-700 underline underline-offset-2 inline-block pt-1">
                    Open WhatsApp Chat
                  </span>
                </div>
              </a>

              {/* Email */}
              <div className="flex items-start gap-4 p-5 rounded-md bg-white border border-charcoal-900/10 shadow-editorial">
                <div className="p-3 rounded-full bg-charcoal-100 text-charcoal-900">
                  <Mail className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-serif font-bold text-charcoal-900 text-lg">
                    Email Inquiries
                  </h4>
                  <p className="text-xs text-charcoal-600 font-light">
                    For corporate retreats, extended workcations & documentation
                  </p>
                  <a
                    href={`mailto:${propertyData.contact.email}`}
                    className="text-xs font-semibold text-himalayan-700 hover:text-himalayan-800 underline underline-offset-2 inline-block pt-1"
                  >
                    {propertyData.contact.email}
                  </a>
                </div>
              </div>

              {/* Exact Address */}
              <div className="flex items-start gap-4 p-5 rounded-md bg-white border border-charcoal-900/10 shadow-editorial">
                <div className="p-3 rounded-full bg-charcoal-100 text-charcoal-900">
                  <MapPin className="w-6 h-6" />
                </div>
                <div className="space-y-1 text-xs text-charcoal-700 font-light leading-relaxed">
                  <h4 className="font-serif font-bold text-charcoal-900 text-lg">
                    The Mukteshwar Bungalow | 3 BHK Villa
                  </h4>
                  <p>{propertyData.address.line1},</p>
                  <p>Tehsil - {propertyData.address.tehsil}, District - {propertyData.address.district},</p>
                  <p>{propertyData.address.city}, {propertyData.address.state} - {propertyData.address.postalCode}, {propertyData.address.country}</p>
                  <div className="pt-2">
                    <a
                      href={propertyData.address.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-semibold text-himalayan-700 hover:text-himalayan-800 underline"
                    >
                      <span>Open in Google Maps</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-6 sm:p-10 rounded-md border border-charcoal-900/10 shadow-luxury">
              {submitted ? (
                <div className="text-center py-12 space-y-4 animate-fade-in">
                  <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                  <h3 className="text-2xl font-serif text-charcoal-900">
                    Message Sent Successfully
                  </h3>
                  <p className="text-xs sm:text-sm text-charcoal-600 font-light max-w-md mx-auto">
                    Thank you for reaching out. Our estate reservation manager will get back to you shortly.
                  </p>
                  <Button variant="secondary" onClick={() => setSubmitted(false)}>
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <span className="text-[10px] uppercase tracking-super-wide text-himalayan-700 font-semibold block mb-1">
                      Direct Message
                    </span>
                    <h3 className="text-2xl font-serif text-charcoal-900">
                      Send an Inquiry
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="contact-full-name" className="block text-xs uppercase tracking-widest font-semibold text-charcoal-800">
                        Full Name *
                      </label>
                      <input
                        id="contact-full-name"
                        type="text"
                        required
                        aria-required="true"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-ivory-50 border border-charcoal-900/15 p-3.5 rounded-sm text-sm focus:border-himalayan-700 focus:ring-1 focus:ring-himalayan-700"
                        placeholder="Your full name"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="contact-phone" className="block text-xs uppercase tracking-widest font-semibold text-charcoal-800">
                        Phone / WhatsApp *
                      </label>
                      <input
                        id="contact-phone"
                        type="tel"
                        required
                        aria-required="true"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-ivory-50 border border-charcoal-900/15 p-3.5 rounded-sm text-sm focus:border-himalayan-700 focus:ring-1 focus:ring-himalayan-700"
                        placeholder="+91 70785 60516"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="contact-email" className="block text-xs uppercase tracking-widest font-semibold text-charcoal-800">
                        Email Address *
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        aria-required="true"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-ivory-50 border border-charcoal-900/15 p-3.5 rounded-sm text-sm focus:border-himalayan-700 focus:ring-1 focus:ring-himalayan-700"
                        placeholder="yourname@domain.com"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="contact-subject" className="block text-xs uppercase tracking-widest font-semibold text-charcoal-800">
                        Inquiry Subject
                      </label>
                      <select
                        id="contact-subject"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full bg-ivory-50 border border-charcoal-900/15 p-3.5 rounded-sm text-sm focus:border-himalayan-700 focus:ring-1 focus:ring-himalayan-700"
                      >
                        <option value="General Stay Inquiry">General Stay Inquiry</option>
                        <option value="Full Villa 3 BHK Buyout">Full Villa 3 BHK Buyout</option>
                        <option value="Workcation / Long Stay">Workcation / Long Stay</option>
                        <option value="Directions & Road Condition">Directions & Road Condition</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="contact-message" className="block text-xs uppercase tracking-widest font-semibold text-charcoal-800">
                      Your Message *
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      required
                      aria-required="true"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share your preferred dates, party size, or questions..."
                      className="w-full bg-ivory-50 border border-charcoal-900/15 p-3.5 rounded-sm text-sm focus:border-himalayan-700 focus:ring-1 focus:ring-himalayan-700"
                    />
                  </div>

                  <Button type="submit" variant="himalayan" icon={<Send className="w-4 h-4" />}>
                    Send Inquiry to Concierge
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
