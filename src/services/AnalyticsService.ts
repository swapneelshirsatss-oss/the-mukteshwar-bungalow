type AnalyticsEventName =
  | 'availability_search'
  | 'booking_start'
  | 'booking_complete'
  | 'booking_cta_click'
  | 'booking_form_submit'
  | 'whatsapp_click'
  | 'phone_click'
  | 'email_click'
  | 'directions_click'
  | 'room_view'
  | 'gallery_open'
  | 'cta_click'
  | 'form_submit'
  | 'pricing_view';

// Reset at the start of every click/submit, so an event pushed by an inline onClick
// and again by the delegated listener in one click is pushed once, with both sets of params.
let pushedThisClick = new Set<string>();
let clickContext: Record<string, any> = {};

if (typeof document !== 'undefined') {
  // Runs before any handler, so page_path is the page the interaction happened on even
  // when the handler navigates the router first.
  const resetClickScope = () => {
    pushedThisClick = new Set();
    clickContext = { page_path: window.location.pathname };
  };
  document.addEventListener('click', resetClickScope, true);
  document.addEventListener('submit', resetClickScope, true);
}

/**
 * Params describing the element the user just interacted with, merged into every event
 * pushed during this click. Set by the delegated listener before any handler runs, so an
 * inline trackEvent call still reports link_text.
 */
export function setClickContext(context: Record<string, any>) {
  clickContext = { ...clickContext, ...context };
}

export function trackEvent(eventName: AnalyticsEventName, params?: Record<string, any>) {
  if (typeof window === 'undefined') return;

  if (pushedThisClick.has(eventName)) return;
  pushedThisClick.add(eventName);

  const payload = {
    page_path: window.location.pathname,
    ...clickContext,
    ...params
  };


  // 1. Google Analytics 4 (gtag)
  if (typeof (window as any).gtag === 'function') {
    (window as any).gtag('event', eventName, payload);
  }

  // 2. DataLayer for Google Tag Manager
  if (Array.isArray((window as any).dataLayer)) {
    (window as any).dataLayer.push({
      event: eventName,
      ...payload,
      timestamp: new Date().toISOString()
    });
  }

  // Console logging in dev mode
  if (import.meta.env.DEV) {
    console.log(`[Analytics Event] ${eventName}:`, payload);
  }
}
