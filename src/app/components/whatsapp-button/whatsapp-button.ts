import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { WhatsappService } from '../../services/whatsapp.service';

@Component({
  selector: 'app-whatsapp-button',
  imports: [],
  templateUrl: './whatsapp-button.html',
  styleUrl: './whatsapp-button.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WhatsappButton {
  private whatsappService = inject(WhatsappService);
  protected readonly whatsappUrl = this.whatsappService.getDefaultWhatsappUrl();
}
