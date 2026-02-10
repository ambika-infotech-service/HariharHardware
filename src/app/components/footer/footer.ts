import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class FooterComponent {
  private languageService = inject(LanguageService);

  readonly currentYear = new Date().getFullYear();

  translate(key: string): string {
    return this.languageService.translate(key);
  }
}
