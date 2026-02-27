import { Component, inject, signal, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { LanguageService } from '../../services/language.service';
import { SeoService } from '../../services/seo.service';
import { JsonLdService } from '../../services/jsonld.service';
import { WhatsappService } from '../../services/whatsapp.service';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class ContactComponent implements OnInit {
  private fb = inject(FormBuilder);
  private languageService = inject(LanguageService);
  private sanitizer = inject(DomSanitizer);
  private seo = inject(SeoService);
  private jsonLd = inject(JsonLdService);
  private whatsappService = inject(WhatsappService);

  ngOnInit(): void {
    this.seo.updateMetaTags({
      title: 'Contact Harihar Hardware Store - Gota Road, Ahmedabad | Get Quotes',
      description: 'Contact Harihar Hardware store in Gota, Ahmedabad at Gota Cross Road, opposite Ambika Dalvada. Call +919898659470 for pipes, valves, and fittings. Request a quote today.',
      keywords: 'contact hardware store Gota, Harihar Hardware Gota contact, hardware store in Gota Ahmedabad contact, Gota Road hardware store number, pipes Gota contact, hardware supplies Gota, Gota Cross Road store contact',
      ogTitle: 'Contact Harihar Hardware - Hardware Store in Gota, Ahmedabad',
      ogDescription: 'Visit Harihar Hardware store in Gota or call +919898659470. Located at Gota Cross Road, opposite Ambika Dalvada.',
      ogUrl: 'https://hariharhardware.ambikainfotech.online/contact',
      canonical: 'https://hariharhardware.ambikainfotech.online/contact'
    });

    // Add JSON-LD structured data
    this.jsonLd.addContactSchema();
    this.jsonLd.addLocalBusinessSchema();
    this.jsonLd.addBreadcrumbSchema([
      { name: 'Home', url: 'https://hariharhardware.ambikainfotech.online/' },
      { name: 'Contact', url: 'https://hariharhardware.ambikainfotech.online/contact' }
    ]);
  }

  protected submitted = signal(false);
  protected submitting = signal(false);

  protected contactForm = this.fb.group({
    name: ['', Validators.required],
    phone: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
    email: [''],
    message: ['', Validators.required]
  });

  translate(key: string): any {
    return this.languageService.translate(key);
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      this.submitting.set(true);

      // Simulate form submission
      setTimeout(() => {
        console.log('Form submitted:', this.contactForm.value);
        this.submitted.set(true);
        this.submitting.set(false);
        this.contactForm.reset();

        // Reset success message after 5 seconds
        setTimeout(() => {
          this.submitted.set(false);
        }, 5000);
      }, 1000);
    } else {
      // Mark all fields as touched to show validation errors
      Object.keys(this.contactForm.controls).forEach(key => {
        this.contactForm.get(key)?.markAsTouched();
      });
    }
  }

  getErrorMessage(fieldName: string): string {
    const control = this.contactForm.get(fieldName);
    if (!control || !control.touched || !control.errors) {
      return '';
    }

    if (control.errors['required']) {
      return this.translate(`contact.form.${fieldName}Required`) as string;
    }

    if (fieldName === 'phone' && control.errors['pattern']) {
      return this.translate('contact.form.phoneInvalid') as string;
    }

    return '';
  }

  readonly phoneNumber = '+919898659470';
  protected readonly whatsappUrl = this.whatsappService.getDefaultWhatsappUrl();
  readonly email = 'hariharhardwareandpaints@gmail.com';
  readonly googleBusinessUrl = 'https://share.google/g2uXPImPeFOepBdNM';
  readonly googleMapsUrl = 'https://www.google.com/maps?s=web&lqi=ChBoYXJpaGFyIGhhcmR3YXJlSMW4xt3nlYCACFoaEAAQARgAGAEiEGhhcmloYXIgaGFyZHdhcmWSAQ5oYXJkd2FyZV9zdG9yZQ&phdesc=iNc8oIQAxOg&vet=12ahUKEwiu4tz-z86SAxVVRTABHV8ABVYQ1YkKegQIJhAB..i&cs=0&um=1&ie=UTF-8&fb=1&gl=in&sa=X&geocode=KRmS66kog145Me_oU0YdAiqr&daddr=Krishna+Complex,+Opposite+Ambika+Dalwada,+Gota+Highway+Chowkdi,+Chandlodiya+Rd,+Gota,+Ahmedabad,+Gujarat+382481';
  readonly mapEmbedUrl: SafeResourceUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
    'https://maps.google.com/maps?q=Harihar+Hardware,+Krishna+Complex,+Opposite+Ambika+Dalwada,+Gota,+Ahmedabad,+Gujarat+382481&output=embed'
  );
}
