import { Component, inject } from '@angular/core';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class AboutComponent {
  private languageService = inject(LanguageService);

  translate(key: string): string {
    return this.languageService.translate(key);
  }

  protected readonly features = [
    { icon: 'bi-calendar-check', key: 'experience' },
    { icon: 'bi-award', key: 'quality' },
    { icon: 'bi-person-check', key: 'service' },
    { icon: 'bi-boxes', key: 'stock' }
  ];
}
