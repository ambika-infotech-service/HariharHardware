import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WhatsappService {
  private readonly phoneNumber = '919898659470';
  private readonly defaultMessage = 'Hi! I would like to get a quote for your hardware products.';

  /**
   * Generates a WhatsApp URL with the specified message
   * @param message Optional custom message. If not provided, uses the default message.
   * @returns Complete WhatsApp URL
   */
  getWhatsappUrl(message?: string): string {
    const msg = message || this.defaultMessage;
    return `https://wa.me/${this.phoneNumber}?text=${encodeURIComponent(msg)}`;
  }

  /**
   * Gets the default WhatsApp URL with the standard message
   */
  getDefaultWhatsappUrl(): string {
    return this.getWhatsappUrl();
  }

  // /**
  //  * Gets just the phone number
  //  */
  // getPhoneNumber(): string {
  //   return this.phoneNumber;
  // }

  // /**
  //  * Gets the default message
  //  */
  // getDefaultMessage(): string {
  //   return this.defaultMessage;
  // }
}
