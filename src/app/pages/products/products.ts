import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-products',
  imports: [RouterLink],
  templateUrl: './products.html',
  styleUrl: './products.scss'
})
export class ProductsComponent {
  private languageService = inject(LanguageService);

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
