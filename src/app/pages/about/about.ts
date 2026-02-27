import { Component, inject, OnInit } from '@angular/core';
import { LanguageService } from '../../services/language.service';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class AboutComponent implements OnInit {
  private languageService = inject(LanguageService);
  private seo = inject(SeoService);

  ngOnInit(): void {
    this.seo.updateMetaTags({
      title: 'About Us - Harihar Hardware | Trusted Hardware Supplier Since 2002',
      description: 'Learn about Harihar Hardware, Ahmedabad\'s trusted supplier of pipes, valves, and fittings since 2002. Over 20 years of experience in providing quality hardware and exceptional customer service.',
      keywords: 'about Harihar Hardware, hardware store Ahmedabad, trusted supplier, established 2002, quality hardware, customer service',
      ogTitle: 'About Harihar Hardware - Trusted Supplier Since 2002',
      ogDescription: 'Over 20 years of experience in providing quality pipes, valves, and fittings with exceptional customer service in Ahmedabad.',
      ogUrl: 'https://hariharhardware.ambikainfotech.online/about',
      canonical: 'https://hariharhardware.ambikainfotech.online/about'
    });
  }

  translate(key: string): any {
    return this.languageService.translate(key);
  }

  get expertiseItems(): string[] {
    const result = this.languageService.translate('about.expertise.items');
    return Array.isArray(result) ? result : [];
  }

  get whyUsReasons(): string[] {
    const result = this.languageService.translate('about.whyUs.reasons');
    return Array.isArray(result) ? result : [];
  }

  get aboutFaqItems() {
    const result = this.languageService.translate('about.faq.items');
    if (Array.isArray(result)) {
      return result;
    }
    return [];
  }

  protected readonly features = [
    { icon: 'bi-calendar-check', key: 'experience' },
    { icon: 'bi-award', key: 'quality' },
    { icon: 'bi-person-check', key: 'service' },
    { icon: 'bi-boxes', key: 'stock' }
  ];
}
