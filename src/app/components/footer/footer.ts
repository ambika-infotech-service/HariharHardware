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
  readonly googleBusinessUrl = 'https://share.google/g2uXPImPeFOepBdNM';
  readonly googleMapsUrl = 'https://www.google.com/maps?s=web&lqi=ChBoYXJpaGFyIGhhcmR3YXJlSMW4xt3nlYCACFoaEAAQARgAGAEiEGhhcmloYXIgaGFyZHdhcmWSAQ5oYXJkd2FyZV9zdG9yZQ&phdesc=iNc8oIQAxOg&vet=12ahUKEwiu4tz-z86SAxVVRTABHV8ABVYQ1YkKegQIJhAB..i&cs=0&um=1&ie=UTF-8&fb=1&gl=in&sa=X&geocode=KRmS66kog145Me_oU0YdAiqr&daddr=Krishna+Complex,+Opposite+Ambika+Dalwada,+Gota+Highway+Chowkdi,+Chandlodiya+Rd,+Gota,+Ahmedabad,+Gujarat+382481';

  translate(key: string): any {
    return this.languageService.translate(key);
  }
}
