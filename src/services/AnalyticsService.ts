type AnalyticsEventName =
  | 'availability_search'
  | 'booking_start'
  | 'booking_complete'
  | 'whatsapp_click'
  | 'phone_click'
  | 'directions_click'
  | 'room_view'
  | 'gallery_open'
  | 'cta_click'
  | 'form_submit'
  | 'pricing_view';

export function trackEvent(eventName: AnalyticsEventName, params?: Record<string, any>) {
  if (typeof window !== 'undefined') {
    // 1. Google Analytics 4 (gtag)
    if (typeof (window as any).gtag === 'function') {
      (window as any).gtag('event', eventName, params);
    }

    // 2. DataLayer for Google Tag Manager
    if (Array.isArray((window as any).dataLayer)) {
      (window as any).dataLayer.push({
        event: eventName,
        ...params,
        timestamp: new Date().toISOString()
      });
    }

    // Console logging in dev mode
    if (import.meta.env.DEV) {
      console.log(`[Analytics Event] ${eventName}:`, params);
    }
  }
}
