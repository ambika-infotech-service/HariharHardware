import { Component, inject, OnInit, signal, ChangeDetectionStrategy, effect } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/language.service';
import { SeoService } from '../../services/seo.service';
import { ProductsService, ProductSection } from '../../services/products.service';

@Component({
  selector: 'app-products',
  imports: [RouterLink, CommonModule],
  templateUrl: './products.html',
  styleUrl: './products.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsComponent implements OnInit {
  private languageService = inject(LanguageService);
  private seo = inject(SeoService);
  private productsService = inject(ProductsService);

  protected productSections = signal<any[]>([]);

  constructor() {
    // Update product sections whenever language changes
    effect(() => {
      this.languageService.language();
      this.productSections.set(this.productsService.getProductSections());
    });
  }

  ngOnInit(): void {
    this.seo.updateMetaTags({
      title: 'Products - Harihar Hardware | Hardware, Pipes, Valves, Paints & More',
      description: 'Browse our extensive range of hardware, plumbing, paints, construction materials, electrical products and more. Available in multiple sizes & brands. Bulk & retail orders accepted.',
      keywords: 'hardware products, pipes, valves, fittings, paints, tools, fasteners, construction materials, Ahmedabad',
      ogTitle: 'Products - Harihar Hardware | Complete Hardware Solutions',
      ogDescription: 'Explore our complete range of hardware products including pipes, valves, tools, paints and accessories.',
      ogUrl: 'https://hariharhardware.ambikainfotech.online/products',
      canonical: 'https://hariharhardware.ambikainfotech.online/products'
    });

    this.productSections.set(this.productsService.getProductSections());
  }

  translate(key: string): any {
    return this.languageService.translate(key);
  }
}
