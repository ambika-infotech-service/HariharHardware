import { Component, inject, OnInit } from '@angular/core';
import { LanguageService } from '../../services/language.service';
import { SeoService } from '../../services/seo.service';

interface FaqItem {
  question: string;
  answer: string;
}

@Component({
  selector: 'app-faq',
  imports: [],
  templateUrl: './faq.html',
  styleUrl: './faq.scss'
})
export class FaqComponent implements OnInit {
  private languageService = inject(LanguageService);
  private seo = inject(SeoService);

  ngOnInit(): void {
    this.seo.updateMetaTags({
      title: 'FAQs - Harihar Hardware | Frequently Asked Questions',
      description: 'Find answers to common questions about Harihar Hardware & Paint in Ahmedabad. Learn about our products, services, location, working hours, and more.',
      keywords: 'FAQ, frequently asked questions, Harihar Hardware, Gota Road, Ahmedabad, hardware store questions, plumbing supplies, business hours',
      ogTitle: 'Frequently Asked Questions - Harihar Hardware',
      ogDescription: 'Get answers to your questions about our products, services, location, and more.',
      ogUrl: 'https://hariharhardware.ambikainfotech.online/faq',
      canonical: 'https://hariharhardware.ambikainfotech.online/faq'
    });
  }

  translate(key: string): any {
    return this.languageService.translate(key);
  }

  get faqItems(): FaqItem[] {
    const result = this.languageService.translate('faq.items');
    if (Array.isArray(result)) {
      return result as FaqItem[];
    }
    return [];
  }
}
