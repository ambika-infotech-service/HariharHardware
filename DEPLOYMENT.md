# Harihar Hardware - Business Website

A professional, production-ready website for a hardware and pipe fittings business built with Angular 21 and Bootstrap 5.

## 📋 Overview

Harihar Hardware is a fully responsive, multilingual business website designed for the hardware and plumbing supplies industry. Established in 2002, this website serves contractors, plumbers, builders, and industrial buyers.

### Key Features

- ✅ **Multi-language Support**: English, Gujarati, Hindi, and Marathi
- ✅ **Fully Responsive**: Mobile-first design that works on all devices
- ✅ **Modern Angular**: Built with Angular 21 (standalone components)
- ✅ **Professional UI**: Bootstrap 5 with custom industrial-themed styling
- ✅ **Contact Form**: Functional inquiry form with validation
- ✅ **SEO-Friendly**: Semantic HTML and proper meta structure
- ✅ **Accessible**: WCAG AA compliant with proper ARIA labels
- ✅ **Fast Performance**: Lazy-loaded routes for optimal loading

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm
- Angular CLI 21+

### Installation

1. **Clone or navigate to the project directory**
   ```bash
   cd HariharHardware
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:4200/`

## 📱 Available Scripts

- `npm start` - Run development server (http://localhost:4200)
- `npm run build` - Build for production
- `npm test` - Run unit tests
- `npm run watch` - Build in watch mode

## 🌐 Site Structure

### Pages

1. **Home Page** (`/`)
   - Hero section with clear value proposition
   - Key features: Quality, Availability, Reliability
   - Product categories overview
   - Call-to-action buttons (Call, WhatsApp, Request Quote)

2. **Products Page** (`/products`)
   - Comprehensive product categories
   - Pipes & Tubes, Fittings, Valves, Flanges
   - Hardware Accessories, Plumbing Supplies
   - Additional services section

3. **About Page** (`/about`)
   - Company story (since 2002)
   - Why choose us section
   - Business statistics and commitments
   - Professional values

4. **Contact Page** (`/contact`)
   - Contact information (Phone, WhatsApp, Email)
   - Business hours
   - Inquiry form with validation
   - Quick action buttons

### Components

```
src/app/
├── components/
│   ├── header/          # Navigation with language switcher
│   └── footer/          # Footer with links and info
├── pages/
│   ├── home/            # Landing page
│   ├── products/        # Products catalog
│   ├── about/           # Company information
│   └── contact/         # Contact form
└── services/
    └── language.service.ts  # Multi-language support
```

## 🌍 Multi-Language Support

The website supports 4 languages with persistent storage:

- **English** (EN) - Default
- **Gujarati** (ગુ)
- **Hindi** (हि)
- **Marathi** (म)

### How it works:

1. Language selection is saved to `localStorage`
2. All content is managed through the `LanguageService`
3. Translations are stored in a structured format
4. Users can switch languages using the header buttons

### Adding New Languages:

```typescript
// In src/app/services/language.service.ts

// 1. Add new language code to Language type
export type Language = 'en' | 'gu' | 'hi' | 'mr' | 'your-lang';

// 2. Add translations in the translations object
private translations: Record<Language, Translation> = {
  'your-lang': {
    nav: {
      home: 'Translation',
      // ... more translations
    }
  }
};
```

## 🎨 Customization Guide

### 1. Update Business Information

**Contact Details** (Multiple files need updating):

```typescript
// src/app/pages/home/home.ts
readonly phoneNumber = '+919876543210';  // Replace with actual number
readonly whatsappNumber = '919876543210';  // Replace with actual number

// src/app/pages/contact/contact.ts
readonly phoneNumber = '+919876543210';
readonly whatsappNumber = '919876543210';
readonly email = 'info@hariharhardware.com';  // Replace with actual email
```

**Footer Links** - Edit `src/app/components/footer/footer.html`

### 2. Update Colors & Branding

Main colors are defined in component SCSS files:

```scss
// Primary gradient colors
$primary-dark: #2c3e50;
$primary-blue: #3498db;
$secondary-dark: #34495e;

// Edit these in:
// - src/app/pages/home/home.scss
// - src/app/pages/products/products.scss
// - src/app/pages/about/about.scss
// - src/app/pages/contact/contact.scss
```

### 3. Update Content

All text content is in:
- `src/app/services/language.service.ts` for translated content
- Component HTML files for non-translated content

### 4. Add New Product Categories

Edit `src/app/pages/products/products.ts`:

```typescript
protected readonly productCategories = [
  { icon: 'bi-pip', key: 'pipes' },
  { icon: 'bi-your-icon', key: 'new-category' }  // Add new
];
```

Then add translations in `language.service.ts`.

### 5. Customize Logo

Replace the text logo in `src/app/components/header/header.html`:

```html
<a class="navbar-brand fw-bold" routerLink="/">
  <img src="/assets/logo.png" alt="Harihar Hardware" height="40">
  <!-- Or keep text: Harihar Hardware -->
</a>
```

## 📧 Contact Form Integration

### Current Implementation

The contact form currently logs submissions to console. To integrate with a backend:

**Option 1: Email Service (e.g., SendGrid, AWS SES)**

```typescript
// Create src/app/services/email.service.ts
import { HttpClient } from '@angular/common/http';

export class EmailService {
  private apiUrl = 'your-backend-api-url';

  sendInquiry(data: any) {
    return this.http.post(`${this.apiUrl}/send-inquiry`, data);
  }
}
```

**Option 2: Firebase/Firestore**

```typescript
// Install: npm install firebase @angular/fire
// Store inquiries in Firestore database
```

**Option 3: Third-party Form Service**

- Formspree
- Netlify Forms
- Google Forms

### Update Contact Component

```typescript
// src/app/pages/contact/contact.ts
onSubmit(): void {
  if (this.contactForm.valid) {
    this.emailService.sendInquiry(this.contactForm.value).subscribe({
      next: () => this.submitted.set(true),
      error: (err) => console.error('Error:', err)
    });
  }
}
```

## 🏗️ Production Build

### Build for Production

```bash
npm run build
```

Output will be in `dist/harihar-hardware/browser/`

### Deployment Options

1. **Static Hosting** (Recommended)
   - Netlify: `netlify deploy --prod --dir=dist/harihar-hardware/browser`
   - Vercel: `vercel --prod`
   - GitHub Pages
   - AWS S3 + CloudFront

2. **Traditional Hosting**
   - Upload contents of `dist/harihar-hardware/browser/` to your web server
   - Configure server to redirect all routes to `index.html` (for Angular routing)

### Server Configuration

**Nginx example:**

```nginx
server {
  listen 80;
  server_name yourdomain.com;
  root /var/www/html;

  location / {
    try_files $uri $uri/ /index.html;
  }
}
```

**Apache (.htaccess):**

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

## 🔧 Extending the Website

### Adding a New Page

1. **Generate component:**
   ```bash
   ng generate component pages/new-page
   ```

2. **Add route** in `src/app/app.routes.ts`:
   ```typescript
   {
     path: 'new-page',
     loadComponent: () => import('./pages/new-page/new-page').then(m => m.NewPageComponent)
   }
   ```

3. **Add navigation link** in `src/app/components/header/header.html`

4. **Add translations** in `language.service.ts`

### Adding Blog/News Section

1. Create a blog component
2. Use a headless CMS (Contentful, Strapi, Sanity.io)
3. Or use JSON files for simple posts
4. Add routing and list/detail views

### Adding E-Commerce

For full e-commerce functionality, consider:

1. **Shopping Cart**: Use NgRx or a simple service
2. **Payment Gateway**: Razorpay, Stripe, PayPal
3. **Product Management**: Backend API or CMS
4. **Order Management**: Database + Admin panel

## 📊 SEO Optimization

### Current Implementation

- Semantic HTML structure
- Proper heading hierarchy
- Alt tags on images (when added)
- Mobile-responsive design

### Recommended Additions

1. **Update meta tags** in `src/index.html`:
   ```html
   <title>Harihar Hardware - Quality Pipes & Fittings Since 2002</title>
   <meta name="description" content="Your description here">
   <meta name="keywords" content="hardware, pipes, fittings, plumbing">
   ```

2. **Add Schema.org markup** for local business

3. **Create sitemap.xml** and `robots.txt`

4. **Add Google Analytics:**
   ```html
   <!-- Add to src/index.html -->
   <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
   ```

5. **Performance optimization:**
   - Implement lazy loading for images
   - Add service worker for PWA
   - Optimize images (WebP format)

## 🔒 Security Best Practices

1. **Environment Variables**: Use `environment.ts` for API keys
2. **Form Validation**: Already implemented client-side
3. **CSRF Protection**: Implement on backend
4. **HTTPS**: Always use HTTPS in production
5. **Content Security Policy**: Add CSP headers

## 📱 Progressive Web App (PWA)

To convert to PWA:

```bash
ng add @angular/pwa
```

This adds:
- Service worker for offline functionality
- Web app manifest
- Icons for mobile devices

## 🐛 Troubleshooting

### Port Already in Use

```bash
# Kill process on port 4200
lsof -ti:4200 | xargs kill -9

# Or use different port
ng serve --port 4300
```

### Module Not Found

```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Build Errors

```bash
# Clear Angular cache
rm -rf .angular
ng build
```

## 📞 Support

For questions or issues:
1. Check this README
2. Review Angular documentation: https://angular.dev
3. Review Bootstrap documentation: https://getbootstrap.com

## 📄 License

This project is proprietary software for Harihar Hardware.

## 🙏 Acknowledgments

- Angular team for the excellent framework
- Bootstrap team for the UI components
- Bootstrap Icons for the icon set

---

**Built with ❤️ for Harihar Hardware - Serving since 2002**
