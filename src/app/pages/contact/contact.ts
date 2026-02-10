import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class ContactComponent {
  private fb = inject(FormBuilder);
  private languageService = inject(LanguageService);

  protected submitted = signal(false);
  protected submitting = signal(false);

  protected contactForm = this.fb.group({
    name: ['', Validators.required],
    phone: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
    email: [''],
    message: ['', Validators.required]
  });

  translate(key: string): string {
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
      return this.translate(`contact.form.${fieldName}Required`);
    }

    if (fieldName === 'phone' && control.errors['pattern']) {
      return this.translate('contact.form.phoneInvalid');
    }

    return '';
  }

  readonly phoneNumber = '+919876543210';
  readonly whatsappNumber = '919876543210';
  readonly email = 'info@hariharhardware.com';
}
