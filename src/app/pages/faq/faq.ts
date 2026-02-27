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
      title: 'FAQs - Harihar Hardware Store in Gota | Answers to Your Questions',
      description: 'Find answers to common questions about Harihar Hardware store in Gota, Ahmedabad. Learn about our location at Gota Road, products, services, working hours, and more.',
      keywords: 'Harihar Hardware Gota FAQ, hardware store Gota Road questions, Gota hardware store hours, Harihar Hardware location, Gota Cross Road store, hardware store in Gota Ahmedabad, plumbing supplies FAQ',
      ogTitle: 'Frequently Asked Questions - Harihar Hardware Store Gota',
      ogDescription: 'Get answers about Harihar Hardware store in Gota - location, hours, products, and services.',
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
