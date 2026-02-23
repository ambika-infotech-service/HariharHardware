import { Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

export interface SeoConfig {
  title: string;
  description: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
  twitterCard?: string;
  canonical?: string;
}

@Injectable({
  providedIn: 'root'
})
export class SeoService {
  private meta = inject(Meta);
  private titleService = inject(Title);

  updateMetaTags(config: SeoConfig): void {
    // Update title
    this.titleService.setTitle(config.title);

    // Update or add meta tags
    this.meta.updateTag({ name: 'description', content: config.description });

    if (config.keywords) {
      this.meta.updateTag({ name: 'keywords', content: config.keywords });
    }

    // Open Graph tags
    this.meta.updateTag({ property: 'og:title', content: config.ogTitle || config.title });
    this.meta.updateTag({ property: 'og:description', content: config.ogDescription || config.description });

    if (config.ogImage) {
      this.meta.updateTag({ property: 'og:image', content: config.ogImage });
    }

    if (config.ogUrl) {
      this.meta.updateTag({ property: 'og:url', content: config.ogUrl });
    }

    // Twitter Card tags
    this.meta.updateTag({ name: 'twitter:title', content: config.ogTitle || config.title });
    this.meta.updateTag({ name: 'twitter:description', content: config.ogDescription || config.description });

    if (config.twitterCard) {
      this.meta.updateTag({ name: 'twitter:card', content: config.twitterCard });
    }

    if (config.ogImage) {
      this.meta.updateTag({ name: 'twitter:image', content: config.ogImage });
    }

    // Update canonical URL if provided
    if (config.canonical) {
      this.updateCanonicalUrl(config.canonical);
    }
  }

  private updateCanonicalUrl(url: string): void {
    // Remove existing canonical link if present
    const existingLink = document.querySelector('link[rel="canonical"]');
    if (existingLink) {
      existingLink.setAttribute('href', url);
    } else {
      // Create new canonical link
      const link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      link.setAttribute('href', url);
      document.head.appendChild(link);
    }
  }

  removeMetaTags(): void {
    // This can be used to clear specific tags if needed
    this.meta.removeTag('name="keywords"');
  }
}
