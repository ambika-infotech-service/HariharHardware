import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class HomeComponent {
  private languageService = inject(LanguageService);

  translate(key: string): string {
    return this.languageService.translate(key);
  }

  readonly phoneNumber = '+919876543210';
  readonly whatsappNumber = '919876543210';

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
