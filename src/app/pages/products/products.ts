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
      title: 'Products - Harihar Hardware Store in Gota | Pipes, Valves, Paints & Hardware',
      description: 'Shop our complete range of hardware, pipes, valves, fittings, paints, tools, and construction materials at Harihar Hardware store in Gota, Ahmedabad. Bulk and retail orders available.',
      keywords: 'hardware store Gota products, pipes Gota, valves fittings Ahmedabad, paints Gota Road, construction materials hardware, tools Gota, hardware store in Gota Ahmedabad, plumbing supplies Gota',
      ogTitle: 'Products - Harihar Hardware Store in Gota | Complete Solutions',
      ogDescription: 'Explore our extensive product range at Harihar Hardware store in Gota. Pipes, valves, tools, paints, and more.',
      ogUrl: 'https://hariharhardware.ambikainfotech.online/products',
      canonical: 'https://hariharhardware.ambikainfotech.online/products'
    });

    this.productSections.set(this.productsService.getProductSections());
  }

  translate(key: string): any {
    return this.languageService.translate(key);
  }
}
