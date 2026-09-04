import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { StickyMobileBar } from './components/layout/StickyMobileBar';
import { FloatingWhatsAppConcierge } from './components/layout/FloatingWhatsAppConcierge';

// Pages
import { HomePage } from './pages/HomePage';
import { VillaPage } from './pages/VillaPage';
import { RoomsPage } from './pages/RoomsPage';
import { RoomDetailPage } from './pages/RoomDetailPage';
import { VerandaLoungePage } from './pages/VerandaLoungePage';
import { KitchenPage } from './pages/KitchenPage';
import { ExperiencesPage } from './pages/ExperiencesPage';
import { LocationPage } from './pages/LocationPage';
import { MukteshwarGuidePage } from './pages/MukteshwarGuidePage';
import { NearbyAttractionsPage } from './pages/NearbyAttractionsPage';
import { DirectionsPage } from './pages/DirectionsPage';
import { GalleryPage } from './pages/GalleryPage';
import { AvailabilityPage } from './pages/AvailabilityPage';
import { PricingPage } from './pages/PricingPage';
import { BookPage } from './pages/BookPage';
import { ContactPage } from './pages/ContactPage';
import { FAQPage } from './pages/FAQPage';
import { BlogHubPage } from './pages/BlogHubPage';
import { BlogPostPage } from './pages/BlogPostPage';
import { ReviewsPage } from './pages/ReviewsPage';
import { PoliciesPage } from './pages/PoliciesPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { TermsPage } from './pages/TermsPage';
import { LocalCityLandingPage } from './pages/LocalCityLandingPage';
import { NotFoundPage } from './pages/NotFoundPage';

// ScrollToTop Component for smooth route transitions
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant' as ScrollBehavior
    });
  }, [pathname]);

  return null;
};

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-ivory-100 text-charcoal-900 font-sans selection:bg-himalayan-700 selection:text-ivory-100">
        <Header />

        <main className="flex-grow">
          <Routes>
            {/* Primary Navigation Routes */}
            <Route path="/" element={<HomePage />} />
            <Route path="/villa" element={<VillaPage />} />
            <Route path="/rooms" element={<RoomsPage />} />
            <Route path="/rooms/:slug" element={<RoomDetailPage />} />
            <Route path="/veranda-lounge" element={<VerandaLoungePage />} />
            <Route path="/private-pool" element={<Navigate to="/villa" replace />} />
            <Route path="/kitchen" element={<KitchenPage />} />
            <Route path="/experiences" element={<ExperiencesPage />} />
            
            {/* Destination & Location Routes */}
            <Route path="/location" element={<LocationPage />} />
            <Route path="/mukteshwar" element={<MukteshwarGuidePage />} />
            <Route path="/nearby-attractions" element={<NearbyAttractionsPage />} />
            <Route path="/directions" element={<DirectionsPage />} />
            
            {/* Media & Booking Engine Routes */}
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/availability" element={<AvailabilityPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/book" element={<BookPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/faqs" element={<FAQPage />} />
            <Route path="/reviews" element={<ReviewsPage />} />
            
            {/* Editorial Content Hub */}
            <Route path="/blog" element={<BlogHubPage />} />
            <Route path="/blog/:slug" element={<BlogPostPage />} />
            
            {/* Policy & Legal Routes */}
            <Route path="/policies" element={<PoliciesPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/terms" element={<TermsPage />} />
            
            {/* Local Market SEO Landing Pages */}
            <Route path="/luxury-villa-mukteshwar-from-delhi" element={<LocalCityLandingPage cityKey="delhi" />} />
            <Route path="/mukteshwar-villa-from-noida" element={<LocalCityLandingPage cityKey="noida" />} />
            <Route path="/mukteshwar-weekend-getaway-from-gurgaon" element={<LocalCityLandingPage cityKey="gurgaon" />} />
            <Route path="/mukteshwar-villa-from-dehradun" element={<LocalCityLandingPage cityKey="dehradun" />} />
            <Route path="/mukteshwar-villa-from-haldwani" element={<LocalCityLandingPage cityKey="haldwani" />} />
            
            {/* Fallback 404 */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>

        <Footer />
        <StickyMobileBar />
        <FloatingWhatsAppConcierge />
      </div>
    </BrowserRouter>
  );
};

export default App;
