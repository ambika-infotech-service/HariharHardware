import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LanguageService } from '../../services/language.service';
import { SeoService } from '../../services/seo.service';
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

  ngOnInit(): void {
    this.seo.updateMetaTags({
      title: 'Harihar Hardware - Premium Pipes, Valves & Fittings in Ahmedabad Since 2002',
      description: 'Your trusted supplier for quality pipes, valves, fittings, and plumbing solutions in Ahmedabad, Gujarat since 2002. Premium quality hardware at competitive prices.',
      keywords: 'hardware store Ahmedabad, pipes Gujarat, valves fittings, plumbing supplies, pipe fittings Ahmedabad, industrial supplies, Harihar Hardware',
      ogTitle: 'Harihar Hardware - Premium Pipes, Valves & Fittings in Ahmedabad',
      ogDescription: 'Quality Hardware & Pipe Fittings Since 2002. Your trusted supplier for pipes, valves, and plumbing solutions.',
      ogUrl: 'https://hariharhardware.ambikainfotech.online/',
      canonical: 'https://hariharhardware.ambikainfotech.online/'
    });
  }

  translate(key: string): any {
    return this.languageService.translate(key);
  }

  readonly phoneNumber = '+919898659470';
  readonly whatsappNumber = '919898659470';

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
