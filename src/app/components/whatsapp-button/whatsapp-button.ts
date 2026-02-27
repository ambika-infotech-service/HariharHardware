import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-whatsapp-button',
  imports: [],
  templateUrl: './whatsapp-button.html',
  styleUrl: './whatsapp-button.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WhatsappButton {
  protected readonly whatsappUrl = `https://wa.me/919898659470?text=${encodeURIComponent('Hi! I would like to get a quote for your hardware products.')}`;
}
