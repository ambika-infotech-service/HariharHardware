import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LanguageService } from '../../services/language.service';
import { SeoService } from '../../services/seo.service';
import { JsonLdService } from '../../services/jsonld.service';
import { WhatsappService } from '../../services/whatsapp.service';
import { InViewDirective } from '../../directives/in-view.directive';

@Component({
  selector: 'app-home',
  imports: [RouterLink, InViewDirective],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class HomeComponent implements OnInit {
  private languageService = inject(LanguageService);
  private seo = inject(SeoService);
  private jsonLd = inject(JsonLdService);
  private whatsappService = inject(WhatsappService);

  ngOnInit(): void {
    this.seo.updateMetaTags({
      title: 'Harihar Hardware Store in Gota - Pipes, Valves & Fittings in Ahmedabad Since 2002',
      description: 'Visit Harihar Hardware store in Gota, Ahmedabad for quality pipes, valves, fittings, and plumbing solutions. Your trusted hardware supplier since 2002. Premium quality at competitive prices.',
      keywords: 'hardware store gota, hardware store in gota, Gota Road hardware store, pipes Ahmedabad, valves fittings Ahmedabad, plumbing supplies Gota, hardware Gota Ahmedabad, Harihar Hardware Gota',
      ogTitle: 'Harihar Hardware Store in Gota - Pipes & Fittings in Ahmedabad',
      ogDescription: 'Quality Hardware & Pipe Fittings in Gota, Ahmedabad. Trusted supplier since 2002. Visit us at Gota Road for premium quality products.',
      ogUrl: 'https://hariharhardware.ambikainfotech.online/',
      canonical: 'https://hariharhardware.ambikainfotech.online/'
    });

    // Add JSON-LD structured data
    this.jsonLd.addOrganizationSchema();
    this.jsonLd.addLocalBusinessSchema();
    this.jsonLd.addBreadcrumbSchema([
      { name: 'Home', url: 'https://hariharhardware.ambikainfotech.online/' }
    ]);
  }

  translate(key: string): any {
    return this.languageService.translate(key);
  }

  get homeFaqItems() {
    const result = this.languageService.translate('home.faq.items');
    if (Array.isArray(result)) {
      return result;
    }
    return [];
  }

  readonly phoneNumber = '+919898659470';
  protected readonly whatsappUrl = this.whatsappService.getDefaultWhatsappUrl();

  protected readonly categories = [
    { icon: 'bi-pip', key: 'pipes' },
    { icon: 'bi-diagram-3', key: 'fittings' },
    { icon: 'bi-droplet', key: 'valves' },
    { icon: 'bi-tools', key: 'accessories' },
    { icon: 'bi-water', key: 'plumbing' },
    { icon: 'bi-gear', key: 'industrial' }
  ];

  protected readonly valueProps = [
    { icon: 'bi-award', key: 'quality' },
    { icon: 'bi-box-seam', key: 'availability' },
    { icon: 'bi-shield-check', key: 'reliability' }
  ];
}
