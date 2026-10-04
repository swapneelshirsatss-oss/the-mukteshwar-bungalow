import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Calendar, Users, Home, CheckCircle2, MessageCircle, Mail, ArrowRight, ArrowLeft, Shield, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { propertyData } from '../../data/propertyData';
import { generateWhatsAppLink } from '../../services/WhatsAppService';
import { trackEvent } from '../../services/AnalyticsService';
import { Button } from '../common/Button';

export const DirectBookingForm: React.FC = () => {
  const [searchParams] = useSearchParams();

  // Current Step: 1 = Dates & Capacity, 2 = Suite Preference, 3 = Guest Details & Confirmation
  const [step, setStep] = useState(1);

  // Form State
  const [formData, setFormData] = useState({
    checkIn: searchParams.get('checkIn') || '',
    checkOut: searchParams.get('checkOut') || '',
    adults: Number(searchParams.get('adults')) || 6,
    children: Number(searchParams.get('children')) || 0,
    roomPreference: searchParams.get('room') || 'full-villa',
    fullName: '',
    email: '',
    phone: '',
    purposeOfStay: 'Family Vacation',
    specialRequests: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (searchParams.get('checkIn') && searchParams.get('checkOut')) {
      setStep(2);
    }
  }, [searchParams]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1) {
      if (!formData.checkIn || !formData.checkOut) {
        alert('Please select both check-in and check-out dates.');
        return;
      }
      setStep(2);
    } else if (step === 2) {
      setStep(3);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    trackEvent('form_submit', {
      form: 'direct_booking_enquiry',
      room: formData.roomPreference,
      guests: formData.adults + formData.children
    });

    setIsSubmitted(true);

    // Trigger celebratory confetti
    try {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.6 }
      });
    } catch {
      // Confetti fallback safely ignored
    }
  };

  const roomOptions = [
    {
      id: 'full-villa',
      name: 'Complete 3 BHK Luxury Villa Buyout (Recommended)',
      description: '100% exclusive privacy across all 3 suites, Veranda Lounge, living salons, fully equipped kitchen, and gardens. Ideal for 6–9 guests.',
      image: '/images/exterior/the-mukteshwar-bungalow-exterior-mukteshwar-uttarakhand.jpg',
      badge: 'Most Popular for Families'
    },
    {
      id: 'the-himalayan-suite',
      name: 'The Himalayan Suite (Master Suite 1)',
      description: 'King bed sanctuary with panoramic valley view glazing, reading nook, and private en-suite bathroom.',
      image: '/images/rooms/himalayan-suite/himalayan-suite-master-king-bed.jpg',
      badge: 'Direct Mountain Sunrise'
    },
    {
      id: 'the-imperial-suite',
      name: 'The Imperial Suite (Suite 2)',
      description: 'Handcrafted exposed timber rafters, garden outlook, quiet acoustic insulation, and en-suite bath.',
      image: '/images/rooms/imperial-suite/imperial-suite-heritage-king-bed.jpg',
      badge: 'Heritage Timber Craft'
    },
    {
      id: 'the-signature-himalayan',
      name: 'The Signature Himalayan (Suite 3)',
      description: 'Corner suite with dual-aspect sunlight, private veranda step-out, deluxe king bed, and en-suite bath.',
      image: '/images/rooms/signature-himalayan/signature-himalayan-suite-panoramic-view.jpg',
      badge: 'Terrace Step-Out'
    }
  ];

  if (isSubmitted) {
    const selectedRoom = roomOptions.find((r) => r.id === formData.roomPreference);
    const whatsAppUrl = generateWhatsAppLink({
      intent: 'booking',
      dates: { checkIn: formData.checkIn, checkOut: formData.checkOut },
      guests: { adults: formData.adults, children: formData.children },
      suiteName: selectedRoom?.name,
      customMessage: `My name is ${formData.fullName}. I have submitted a direct reservation enquiry for ${formData.checkIn} to ${formData.checkOut} for ${formData.adults + formData.children} guests (${selectedRoom?.name}). Please confirm current rates and availability.`
    });

    return (
      <div className="bg-white rounded-md p-8 sm:p-12 shadow-luxury border border-charcoal-900/10 text-center max-w-2xl mx-auto animate-fade-in">
        <div className="w-16 h-16 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-8 h-8" />
        </div>

        <span className="text-xs uppercase tracking-super-wide font-semibold text-himalayan-700 block mb-2">
          Direct Enquiry Received
        </span>
        <h3 className="text-3xl font-serif text-charcoal-900 mb-4">
          Thank you, {formData.fullName}!
        </h3>
        <p className="text-charcoal-700 font-light leading-relaxed mb-6">
          We have received your reservation request for{' '}
          <strong className="font-semibold text-charcoal-900">{selectedRoom?.name}</strong> from{' '}
          <strong className="font-semibold text-charcoal-900">{formData.checkIn}</strong> to{' '}
          <strong className="font-semibold text-charcoal-900">{formData.checkOut}</strong>.
        </p>

        <div className="p-4 bg-ivory-100/80 rounded-sm border border-charcoal-900/10 text-left mb-8 text-xs text-charcoal-800 space-y-1.5">
          <p><span className="font-semibold">Guests:</span> {formData.adults} Adults {formData.children > 0 ? `, ${formData.children} Children` : ''}</p>
          <p><span className="font-semibold">Purpose:</span> {formData.purposeOfStay}</p>
          <p><span className="font-semibold">Email:</span> {formData.email}</p>
          <p><span className="font-semibold">Phone:</span> {formData.phone}</p>
          {formData.specialRequests && <p><span className="font-semibold">Special Notes:</span> {formData.specialRequests}</p>}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={whatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent('whatsapp_click', { source: 'post_submission_confirmation' })}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3.5 rounded-sm uppercase tracking-wider text-xs font-semibold shadow-md transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Connect on WhatsApp for Instant Confirmation</span>
          </a>

          <Button variant="secondary" onClick={() => setIsSubmitted(false)}>
            Make Another Enquiry
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-md shadow-luxury border border-charcoal-900/10 overflow-hidden max-w-4xl mx-auto">
      {/* Progress Header */}
      <div className="bg-charcoal-900 text-ivory-100 p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <span className="text-xs uppercase tracking-super-wide text-himalayan-400 font-semibold block mb-1">
            Direct Reservation Concierge
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif text-ivory-100">
            {step === 1 && 'Step 1: Choose Dates & Party Size'}
            {step === 2 && 'Step 2: Select Villa or Suite Preference'}
            {step === 3 && 'Step 3: Guest Details & Confirmation'}
          </h2>
        </div>

        {/* Step Indicators */}
        <div className="flex items-center gap-2 text-xs font-mono">
          <span className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${step >= 1 ? 'bg-himalayan-700 text-ivory-100' : 'bg-charcoal-800 text-ivory-100/40'}`}>
            1
          </span>
          <div className="w-6 h-0.5 bg-charcoal-700" />
          <span className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${step >= 2 ? 'bg-himalayan-700 text-ivory-100' : 'bg-charcoal-800 text-ivory-100/40'}`}>
            2
          </span>
          <div className="w-6 h-0.5 bg-charcoal-700" />
          <span className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${step === 3 ? 'bg-himalayan-700 text-ivory-100' : 'bg-charcoal-800 text-ivory-100/40'}`}>
            3
          </span>
        </div>
      </div>

      {/* Step 1: Dates & Guests */}
      {step === 1 && (
        <form onSubmit={handleNext} className="p-6 sm:p-10 space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="book-checkin" className="block text-xs uppercase tracking-widest font-semibold text-charcoal-800">
                Check-In Date *
              </label>
              <input
                id="book-checkin"
                type="date"
                name="checkIn"
                value={formData.checkIn}
                onChange={handleChange}
                required
                aria-required="true"
                className="w-full bg-ivory-50 border border-charcoal-900/15 p-3.5 rounded-sm text-sm focus:border-himalayan-700 focus:ring-1 focus:ring-himalayan-700"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="book-checkout" className="block text-xs uppercase tracking-widest font-semibold text-charcoal-800">
                Check-Out Date *
              </label>
              <input
                id="book-checkout"
                type="date"
                name="checkOut"
                value={formData.checkOut}
                onChange={handleChange}
                required
                aria-required="true"
                className="w-full bg-ivory-50 border border-charcoal-900/15 p-3.5 rounded-sm text-sm focus:border-himalayan-700 focus:ring-1 focus:ring-himalayan-700"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="book-adults" className="block text-xs uppercase tracking-widest font-semibold text-charcoal-800">
                Adults (Age 12+) *
              </label>
              <select
                id="book-adults"
                name="adults"
                value={formData.adults}
                onChange={handleChange}
                className="w-full bg-ivory-50 border border-charcoal-900/15 p-3.5 rounded-sm text-sm focus:border-himalayan-700 focus:ring-1 focus:ring-himalayan-700"
              >
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
                  <option key={num} value={num}>
                    {num} Adult{num > 1 ? 's' : ''} {num === 6 ? '(Standard Villa Capacity)' : num > 6 ? '(With Extra Beds)' : ''}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <label htmlFor="book-children" className="block text-xs uppercase tracking-widest font-semibold text-charcoal-800">
                Children (Under 12)
              </label>
              <select
                id="book-children"
                name="children"
                value={formData.children}
                onChange={handleChange}
                className="w-full bg-ivory-50 border border-charcoal-900/15 p-3.5 rounded-sm text-sm focus:border-himalayan-700 focus:ring-1 focus:ring-himalayan-700"
              >
                {[0, 1, 2, 3, 4].map((num) => (
                  <option key={num} value={num}>
                    {num} {num === 1 ? 'Child' : 'Children'}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="p-4 bg-ivory-100 rounded-sm border border-charcoal-900/10 flex items-center gap-3 text-xs text-charcoal-800">
            <Sparkles className="w-4 h-4 text-himalayan-700 shrink-0" />
            <span>
              Direct booking includes complimentary high-speed Wi-Fi, caretaker assistance, complete kitchen access, and private estate privileges.
            </span>
          </div>

          <div className="pt-4 flex justify-end">
            <Button type="submit" variant="himalayan" icon={<ArrowRight className="w-4 h-4" />}>
              Continue to Room Selection
            </Button>
          </div>
        </form>
      )}

      {/* Step 2: Suite Selection */}
      {step === 2 && (
        <form onSubmit={handleNext} className="p-6 sm:p-10 space-y-6">
          <div className="space-y-4">
            {roomOptions.map((opt) => (
              <label
                key={opt.id}
                className={`block p-4 sm:p-5 rounded-sm border transition-all cursor-pointer ${
                  formData.roomPreference === opt.id
                    ? 'border-himalayan-700 bg-himalayan-50/40 ring-1 ring-himalayan-700 shadow-sm'
                    : 'border-charcoal-900/15 bg-white hover:border-charcoal-900/30'
                }`}
              >
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  <input
                    type="radio"
                    name="roomPreference"
                    value={opt.id}
                    checked={formData.roomPreference === opt.id}
                    onChange={handleChange}
                    className="w-4 h-4 text-himalayan-700 focus:ring-himalayan-700 mt-1 sm:mt-0"
                  />
                  
                  <img
                    src={opt.image}
                    alt={opt.name}
                    className="w-24 h-16 sm:w-28 sm:h-20 object-cover rounded-sm border border-charcoal-900/10 shrink-0"
                  />

                  <div className="flex-1 space-y-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h4 className="text-base font-serif font-semibold text-charcoal-900">
                        {opt.name}
                      </h4>
                      {opt.badge && (
                        <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full bg-himalayan-700/10 text-himalayan-700 font-semibold">
                          {opt.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-charcoal-600 font-light">
                      {opt.description}
                    </p>
                  </div>
                </div>
              </label>
            ))}
          </div>

          <div className="pt-4 flex items-center justify-between">
            <button
              type="button"
              onClick={() => setStep(1)}
              className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-charcoal-700 hover:text-charcoal-900"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back</span>
            </button>

            <Button type="submit" variant="himalayan" icon={<ArrowRight className="w-4 h-4" />}>
              Proceed to Guest Details
            </Button>
          </div>
        </form>
      )}

      {/* Step 3: Guest Details & Submission */}
      {step === 3 && (
        <form onSubmit={handleSubmit} className="p-6 sm:p-10 space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="book-fullname" className="block text-xs uppercase tracking-widest font-semibold text-charcoal-800">
                Full Name *
              </label>
              <input
                id="book-fullname"
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                aria-required="true"
                placeholder="e.g., Vikram Sharma"
                className="w-full bg-ivory-50 border border-charcoal-900/15 p-3.5 rounded-sm text-sm focus:border-himalayan-700 focus:ring-1 focus:ring-himalayan-700"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="book-phone" className="block text-xs uppercase tracking-widest font-semibold text-charcoal-800">
                Phone Number (WhatsApp preferred) *
              </label>
              <input
                id="book-phone"
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                aria-required="true"
                placeholder="+91 90278 44424"
                className="w-full bg-ivory-50 border border-charcoal-900/15 p-3.5 rounded-sm text-sm focus:border-himalayan-700 focus:ring-1 focus:ring-himalayan-700"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="book-email" className="block text-xs uppercase tracking-widest font-semibold text-charcoal-800">
                Email Address *
              </label>
              <input
                id="book-email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                aria-required="true"
                placeholder="vikram@example.com"
                className="w-full bg-ivory-50 border border-charcoal-900/15 p-3.5 rounded-sm text-sm focus:border-himalayan-700 focus:ring-1 focus:ring-himalayan-700"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="book-purpose" className="block text-xs uppercase tracking-widest font-semibold text-charcoal-800">
                Purpose of Stay
              </label>
              <select
                id="book-purpose"
                name="purposeOfStay"
                value={formData.purposeOfStay}
                onChange={handleChange}
                className="w-full bg-ivory-50 border border-charcoal-900/15 p-3.5 rounded-sm text-sm focus:border-himalayan-700 focus:ring-1 focus:ring-himalayan-700"
              >
                <option value="Family Vacation">Family Mountain Vacation</option>
                <option value="Weekend Getaway">Weekend Getaway from Delhi-NCR</option>
                <option value="Workcation / Remote Work">Workcation & Remote Strategy</option>
                <option value="Celebration / Birthday">Intimate Birthday / Celebration</option>
                <option value="Couples Retreat">Couples Mountain Retreat</option>
              </select>
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="book-requests" className="block text-xs uppercase tracking-widest font-semibold text-charcoal-800">
              Special Requests or Dietary Inquiries (Optional)
            </label>
            <textarea
              id="book-requests"
              name="specialRequests"
              rows={3}
              value={formData.specialRequests}
              onChange={handleChange}
              placeholder="e.g., Need bonfire setup on Saturday evening, traveling with elderly parents, arriving late afternoon..."
              className="w-full bg-ivory-50 border border-charcoal-900/15 p-3.5 rounded-sm text-sm focus:border-himalayan-700 focus:ring-1 focus:ring-himalayan-700"
            />
          </div>

          <div className="p-4 bg-ivory-100 rounded-sm border border-charcoal-900/10 flex items-start gap-3 text-xs text-charcoal-700">
            <Shield className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
            <span>
              Your personal information is confidential and used solely to facilitate your stay at The Mukteshwar Bungalow. No spam, ever.
            </span>
          </div>

          <div className="pt-4 flex items-center justify-between">
            <button
              type="button"
              onClick={() => setStep(2)}
              className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-charcoal-700 hover:text-charcoal-900"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back</span>
            </button>

            <Button type="submit" variant="himalayan" icon={<Sparkles className="w-4 h-4" />}>
              Submit Direct Reservation
            </Button>
          </div>
        </form>
      )}
    </div>
  );
};
