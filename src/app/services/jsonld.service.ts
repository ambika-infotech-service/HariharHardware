import { Injectable } from '@angular/core';

export interface JsonLdConfig {
  '@context': string;
  '@type': string;
  [key: string]: any;
}

@Injectable({
  providedIn: 'root'
})
export class JsonLdService {
  private baseUrl = 'https://hariharhardware.ambikainfotech.online';
  private businessData = {
    name: 'Harihar Hardware',
    description: 'Quality Hardware & Pipe Fittings supplier in Gota, Ahmedabad since 2002',
    telephone: '+919898659470',
    email: 'hariharhardwareandpaints@gmail.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Krishna Complex, Opposite Ambika Dalwada, Gota Cross Road',
      addressLocality: 'Gota',
      addressCity: 'Ahmedabad',
      addressRegion: 'Gujarat',
      postalCode: '382481',
      addressCountry: 'IN'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '23.052766',
      longitude: '72.576950'
    }
  };

  addJsonLd(data: JsonLdConfig): void {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(data);
    document.head.appendChild(script);
  }

  addOrganizationSchema(): void {
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: this.businessData.name,
      url: this.baseUrl,
      logo: `${this.baseUrl}/assets/logo.png`,
      description: this.businessData.description,
      telephone: this.businessData.telephone,
      email: this.businessData.email,
      address: this.businessData.address,
      sameAs: [
        'https://www.facebook.com/hariharhardware',
        'https://www.instagram.com/hariharhardware'
      ]
    };
    this.addJsonLd(schema);
  }

  addLocalBusinessSchema(): void {
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'HardwareStore',
      name: this.businessData.name,
      description: this.businessData.description,
      url: this.baseUrl,
      telephone: this.businessData.telephone,
      email: this.businessData.email,
      address: this.businessData.address,
      geo: this.businessData.geo,
      priceRange: '$$',
      image: `${this.baseUrl}/assets/logo.png`,
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
          opens: '08:30',
          closes: '20:00'
        },
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: 'Sunday',
          opens: '08:30',
          closes: '12:00'
        }
      ],
      areaServed: {
        '@type': 'City',
        name: 'Ahmedabad'
      }
    };
    this.addJsonLd(schema);
  }

  addProductSchema(products: Array<{ name: string; description: string }>): void {
    const itemListElement = products.map((product, index) => ({
      '@type': 'Product',
      name: product.name,
      description: product.description,
      url: `${this.baseUrl}/products`
    }));

    const schema = {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      itemListElement
    };
    this.addJsonLd(schema);
  }

  addFaqSchema(faqs: Array<{ question: string; answer: string }>): void {
    const mainEntity = faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }));

    const schema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity
    };
    this.addJsonLd(schema);
  }

  addBreadcrumbSchema(breadcrumbs: Array<{ name: string; url: string }>): void {
    const itemListElement = breadcrumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: crumb.url
    }));

    const schema = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement
    };
    this.addJsonLd(schema);
  }

  addContactSchema(): void {
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: this.businessData.name,
      description: this.businessData.description,
      address: this.businessData.address,
      telephone: this.businessData.telephone,
      email: this.businessData.email,
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'Customer Service',
        telephone: this.businessData.telephone,
        email: this.businessData.email,
        areaServed: 'IN'
      },
      geo: this.businessData.geo
    };
    this.addJsonLd(schema);
  }

  addAggregateRatingSchema(ratingValue: number = 4.8, reviewCount: number = 50): void {
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: this.businessData.name,
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: ratingValue.toString(),
        reviewCount: reviewCount.toString()
      }
    };
    this.addJsonLd(schema);
  }

  addServiceAreaSchema(regions: string[]): void {
    const areaServed = regions.map((region) => ({
      '@type': 'City',
      name: region
    }));

    const schema = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: this.businessData.name,
      areaServed
    };
    this.addJsonLd(schema);
  }

  /** AEO: WebSite schema with SearchAction for sitelinks searchbox & direct answers */
  addWebsiteSchema(): void {
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: this.businessData.name,
      url: this.baseUrl,
      description: `${this.businessData.name} — trusted hardware store in Gota, Ahmedabad since 2002. Pipes, valves, fittings, paints, and tools.`,
      inLanguage: ['en', 'gu', 'hi', 'mr'],
      potentialAction: {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: `${this.baseUrl}/products?q={search_term_string}`
        },
        'query-input': 'required name=search_term_string'
      }
    };
    this.addJsonLd(schema);
  }

  /** AEO: Speakable schema for voice search assistants */
  addSpeakableSchema(cssSelectors: string[] = ['h1', '.lead', '.page-description']): void {
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      speakable: {
        '@type': 'SpeakableSpecification',
        cssSelector: cssSelectors
      },
      url: this.baseUrl
    };
    this.addJsonLd(schema);
  }

  /** GEO: Organization schema enhanced with knowsAbout for AI entity understanding */
  addGeoEnhancedOrganizationSchema(): void {
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: this.businessData.name,
      url: this.baseUrl,
      foundingDate: '2002',
      description: `${this.businessData.name} is a hardware store established in 2002, located in Gota, Ahmedabad, Gujarat, India. We supply PVC, CPVC, UPVC, GI, HDPE, and PPR pipes, pipe fittings, ball valves, gate valves, plumbing supplies, paints, power tools, and hardware accessories.`,
      telephone: this.businessData.telephone,
      email: this.businessData.email,
      address: this.businessData.address,
      knowsAbout: [
        'PVC Pipes', 'CPVC Pipes', 'UPVC Pipes', 'GI Pipes', 'HDPE Pipes', 'PPR Pipes', 'SWR Pipes',
        'Pipe Fittings', 'Elbows', 'Tees', 'Couplers',
        'Ball Valves', 'Gate Valves', 'Check Valves', 'Butterfly Valves',
        'Plumbing Supplies', 'Sanitary Fittings',
        'Hardware Tools', 'Power Tools', 'Hand Tools',
        'Paints', 'Waterproofing', 'Construction Materials'
      ],
      sameAs: [
        'https://www.facebook.com/hariharhardware',
        'https://www.instagram.com/hariharhardware',
        'https://g.co/kgs/hariharhardware'
      ]
    };
    this.addJsonLd(schema);
  }
}
