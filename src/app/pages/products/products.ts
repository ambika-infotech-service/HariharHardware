import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LanguageService } from '../../services/language.service';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-products',
  imports: [RouterLink],
  templateUrl: './products.html',
  styleUrl: './products.scss'
})
export class ProductsComponent implements OnInit {
  private languageService = inject(LanguageService);
  private seo = inject(SeoService);

  ngOnInit(): void {
    this.seo.updateMetaTags({
      title: 'Products - Harihar Hardware | Pipes, Valves, Fittings & Plumbing Supplies',
      description: 'Browse our extensive range of hardware products including pipes, valves, fittings, flanges, plumbing supplies and industrial accessories. Quality products at competitive prices.',
      keywords: 'pipes, valves, fittings, flanges, plumbing supplies, hardware products, industrial accessories, pipe fittings, Ahmedabad hardware',
      ogTitle: 'Products - Harihar Hardware | Pipes, Valves & Fittings',
      ogDescription: 'Browse our extensive range of hardware products including pipes, valves, fittings, and plumbing supplies.',
      ogUrl: 'https://hariharhardware.ambikainfotech.online/products',
      canonical: 'https://hariharhardware.ambikainfotech.online/products'
    });
  }

  translate(key: string): string {
    return this.languageService.translate(key);
  }

  protected readonly productCategories = [
    { icon: 'bi-pip', key: 'pipes' },
    { icon: 'bi-diagram-3', key: 'fittings' },
    { icon: 'bi-droplet', key: 'valves' },
    { icon: 'bi-disc', key: 'flanges' },
    { icon: 'bi-tools', key: 'accessories' },
    { icon: 'bi-water', key: 'plumbing' }
  ];
}
