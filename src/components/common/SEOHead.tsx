import React, { useEffect } from 'react';

export interface SEOHeadProps {
  title: string;
  description: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: 'website' | 'article';
  schema?: object | object[];
}

export const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  canonicalUrl,
  ogImage = '/images/exterior/the-mukteshwar-bungalow-exterior-mukteshwar-uttarakhand.jpg',
  ogType = 'website',
  schema
}) => {
  useEffect(() => {
    // 1. Update Document Title
    const fullTitle = title.includes('The Mukteshwar Bungalow') ? title : `${title} | The Mukteshwar Bungalow`;
    document.title = fullTitle;

    // 2. Helper to set or update meta tag
    const setMetaTag = (attribute: string, attrValue: string, content: string) => {
      let element = document.querySelector(`meta[${attribute}="${attrValue}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, attrValue);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // 3. Helper to update canonical link
    const currentUrl = canonicalUrl || window.location.href;
    let canonicalElement = document.querySelector('link[rel="canonical"]');
    if (!canonicalElement) {
      canonicalElement = document.createElement('link');
      canonicalElement.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalElement);
    }
    canonicalElement.setAttribute('href', currentUrl);

    // 4. Update Meta Tags
    setMetaTag('name', 'description', description);
    setMetaTag('property', 'og:title', fullTitle);
    setMetaTag('property', 'og:description', description);
    setMetaTag('property', 'og:url', currentUrl);
    setMetaTag('property', 'og:type', ogType);
    const siteBase = (import.meta as any).env?.VITE_PUBLIC_SITE_URL || 'https://themukteshwarbungalow.in';
    setMetaTag('property', 'og:image', ogImage.startsWith('http') ? ogImage : `${siteBase}${ogImage}`);

    setMetaTag('name', 'twitter:title', fullTitle);
    setMetaTag('name', 'twitter:description', description);
    setMetaTag('name', 'twitter:image', ogImage.startsWith('http') ? ogImage : `${siteBase}${ogImage}`);

    // 5. Inject Structured Data JSON-LD
    const existingSchemaScript = document.getElementById('dynamic-jsonld-schema');
    if (existingSchemaScript) {
      existingSchemaScript.remove();
    }

    if (schema) {
      const script = document.createElement('script');
      script.id = 'dynamic-jsonld-schema';
      script.type = 'application/ld+json';
      script.text = JSON.stringify(schema, null, 2);
      document.head.appendChild(script);
    }

    return () => {
      const scriptToRemove = document.getElementById('dynamic-jsonld-schema');
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, [title, description, canonicalUrl, ogImage, ogType, schema]);

  return null;
};
