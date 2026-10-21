import React, { useEffect } from 'react';
import { setClickContext, trackEvent } from '../../services/AnalyticsService';

const BOOKING_CTA = /\b(book|reserve|check\s*availability|enquire now|request (a )?booking)\b/i;

/** Text a human sees on the clicked control, used as link_text. */
function labelOf(el: Element): string {
  const text = (el.textContent || '').replace(/\s+/g, ' ').trim();
  return (text || el.getAttribute('aria-label') || el.getAttribute('title') || '').slice(0, 120);
}

/** The clickable control the event came from, if any. */
function controlFor(event: Event): HTMLElement | null {
  const target = event.target as Element | null;
  if (!target || typeof target.closest !== 'function') return null;
  return target.closest<HTMLElement>('a[href], button, [role="button"]');
}

/** Booking params already encoded in the element or the WhatsApp/booking href. */
function bookingParams(el: HTMLElement, href: string): Record<string, string> {
  const params: Record<string, string> = {};
  const room = el.dataset.room || el.closest<HTMLElement>('[data-room]')?.dataset.room;
  const guests = el.dataset.guests || el.closest<HTMLElement>('[data-guests]')?.dataset.guests;
  if (room) params.room = room;
  if (guests) params.guests = guests;

  // Suite name and guest count are written into the prefilled WhatsApp message.
  const text = href.includes('?') ? decodeURIComponent(href.split('?').slice(1).join('?')) : '';
  if (!params.room) {
    const suite = text.match(/for (The [A-Za-z ]+?|the 3 BHK full villa) for /);
    if (suite) params.room = suite[1].trim();
  }
  if (!params.guests) {
    const count = text.match(/for (\d+) guests/);
    if (count) params.guests = count[1];
  }
  return params;
}

/**
 * One delegated listener for every outbound contact and booking click on the site.
 * Events: whatsapp_click, phone_click, email_click, booking_cta_click, booking_form_submit.
 */
export const ClickTracking: React.FC = () => {
  useEffect(() => {
    // Capture phase: runs before any inline onClick, so every event pushed during this
    // click carries link_text even when a component pushes it itself.
    const onClickCapture = (event: MouseEvent) => {
      const el = controlFor(event);
      if (el) setClickContext({ link_text: labelOf(el) });
    };

    const onClick = (event: MouseEvent) => {
      const el = controlFor(event);
      if (!el) return;

      const href = el.getAttribute('href') || '';
      const link_text = labelOf(el);

      if (/^(https?:)?\/\/(wa\.me|api\.whatsapp\.com|web\.whatsapp\.com)/i.test(href)) {
        trackEvent('whatsapp_click', { link_text, ...bookingParams(el, href) });
        return;
      }
      if (/^tel:/i.test(href)) {
        trackEvent('phone_click', { link_text, phone_number: href.replace(/^tel:/i, '') });
        return;
      }
      if (/^mailto:/i.test(href)) {
        trackEvent('email_click', { link_text, email_address: href.replace(/^mailto:/i, '').split('?')[0] });
        return;
      }
      if (BOOKING_CTA.test(link_text)) {
        trackEvent('booking_cta_click', { link_text, destination: href, ...bookingParams(el, href) });
      }
    };

    const onSubmit = (event: SubmitEvent) => {
      const form = event.target as HTMLFormElement | null;
      if (!form || form.tagName !== 'FORM') return;

      // Marked forms only: the booking wizard advances its steps via submit too.
      const formName = form.dataset.bookingForm;
      if (!formName) return;
      const submitButton = form.querySelector('[type="submit"]');
      trackEvent('booking_form_submit', {
        link_text: submitButton ? labelOf(submitButton) : '',
        form_id: formName
      });
    };

    document.addEventListener('click', onClickCapture, true);
    document.addEventListener('click', onClick);
    document.addEventListener('submit', onSubmit);
    return () => {
      document.removeEventListener('click', onClickCapture, true);
      document.removeEventListener('click', onClick);
      document.removeEventListener('submit', onSubmit);
    };
  }, []);

  return null;
};
