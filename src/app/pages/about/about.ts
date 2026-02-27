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
      title: 'About Harihar Hardware Store - Gota Road, Ahmedabad | 20+ Years Experience',
      description: 'Discover Harihar Hardware store in Gota, Ahmedabad - your trusted supplier of quality pipes, valves, and fittings since 2002. Located at Gota Road, opposite Ambika Dalvada. Over 20 years serving contractors, builders, and homeowners.',
      keywords: 'Harihar Hardware Gota, hardware store Gota Road, Gota hardware store, hardware store in Gota Ahmedabad, pipes Gota, trusted hardware supplier Gota, Gota Cross Road hardware, established hardware store',
      ogTitle: 'About Harihar Hardware - Hardware Store in Gota, Ahmedabad',
      ogDescription: 'Learn about our 20+ years of experience at our Gota Road hardware store in Ahmedabad. Premium quality pipes, valves, and fittings.',
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
