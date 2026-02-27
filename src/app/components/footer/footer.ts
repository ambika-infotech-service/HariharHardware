import { Component, inject } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';
import { LanguageService } from '../../services/language.service';
import { WhatsappService } from '../../services/whatsapp.service';

@Component({
  selector: 'app-footer',
  imports: [RouterLink, NgOptimizedImage],
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class FooterComponent {
  private languageService = inject(LanguageService);
  private whatsappService = inject(WhatsappService);

  readonly currentYear = new Date().getFullYear();
  readonly googleBusinessUrl = 'https://share.google/g2uXPImPeFOepBdNM';
  readonly googleMapsUrl = 'https://www.google.com/maps?s=web&lqi=ChBoYXJpaGFyIGhhcmR3YXJlSMW4xt3nlYCACFoaEAAQARgAGAEiEGhhcmloYXIgaGFyZHdhcmWSAQ5oYXJkd2FyZV9zdG9yZQ&phdesc=iNc8oIQAxOg&vet=12ahUKEwiu4tz-z86SAxVVRTABHV8ABVYQ1YkKegQIJhAB..i&cs=0&um=1&ie=UTF-8&fb=1&gl=in&sa=X&geocode=KRmS66kog145Me_oU0YdAiqr&daddr=Krishna+Complex,+Opposite+Ambika+Dalwada,+Gota+Highway+Chowkdi,+Chandlodiya+Rd,+Gota,+Ahmedabad,+Gujarat+382481';
  protected readonly whatsappUrl = this.whatsappService.getDefaultWhatsappUrl();

  translate(key: string): any {
    return this.languageService.translate(key);
  }
}
