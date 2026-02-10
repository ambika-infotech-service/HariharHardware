# Harihar Hardware - Business Website

A professional, production-ready website for a hardware and pipe fittings business. Built with Angular 21, Bootstrap 5, and featuring multi-language support (English, Gujarati, Hindi, Marathi).

![Angular](https://img.shields.io/badge/Angular-21.1-red)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3-purple)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue)

## 🚀 Quick Start

\`\`\`bash
# Install dependencies
npm install

# Run development server
npm start

# Build for production
npm run build
\`\`\`

Visit \`http://localhost:4200/\` to see the website.

## ✨ Features

- 🌐 **Multi-language** - English, Gujarati, Hindi, Marathi
- 📱 **Fully Responsive** - Works on all devices
- ⚡ **Fast & Modern** - Angular 21 with lazy loading
- 🎨 **Professional Design** - Industrial-themed Bootstrap UI
- 📧 **Contact Form** - With validation
- ♿ **Accessible** - WCAG AA compliant
- 🔒 **SEO-Friendly** - Semantic HTML structure

## 📄 Pages

- **Home** - Hero section with value propositions and product categories
- **Products** - Comprehensive catalog of pipes, fittings, valves, and accessories
- **About** - Company history and why choose us
- **Contact** - Contact form with business information

## 📚 Documentation

See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed information on:
- Customization guide
- Adding new pages and features
- Contact form integration
- Deployment instructions
- SEO optimization
- Troubleshooting

## 🛠️ Technology Stack

- **Framework**: Angular 21.1
- **UI Library**: Bootstrap 5.3
- **Icons**: Bootstrap Icons
- **Language**: TypeScript 5.9
- **Styling**: SCSS

## 📞 Contact Information

**NOTE:** Update the following in the code before deployment:
- Phone: \`+919876543210\` (placeholder)
- Email: \`info@hariharhardware.com\` (placeholder)
- WhatsApp: \`919876543210\` (placeholder)

## 🏗️ Project Structure

\`\`\`
src/app/
├── components/
│   ├── header/          # Navigation with language switcher
│   └── footer/          # Footer with links
├── pages/
│   ├── home/            # Landing page
│   ├── products/        # Products catalog
│   ├── about/           # About us
│   └── contact/         # Contact form
└── services/
    └── language.service.ts  # Multi-language support
\`\`\`

## 🌍 Multi-Language Support

The website supports 4 languages with automatic persistence:
- **English** (EN) - Default
- **Gujarati** (ગુ)
- **Hindi** (हि)
- **Marathi** (म)

Language preference is saved to browser localStorage.

## 🔧 Customization

### Update Business Info

Edit contact details in:
- \`src/app/pages/home/home.ts\`
- \`src/app/pages/contact/contact.ts\`
- \`src/app/components/footer/footer.html\`

### Change Colors

Main brand colors are in component SCSS files. Edit the gradient colors:
- Primary: \`#2c3e50\` and \`#3498db\`
- Secondary: \`#34495e\`

### Add/Edit Content

All translations are in \`src/app/services/language.service.ts\`

## 🚀 Deployment

### Build

\`\`\`bash
npm run build
\`\`\`

Output will be in \`dist/harihar-hardware/browser/\`

### Deploy To

- **Netlify**: \`netlify deploy --prod --dir=dist/harihar-hardware/browser\`
- **Vercel**: \`vercel --prod\`
- **Traditional Hosting**: Upload files from dist folder

See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed deployment instructions.

## 📝 Scripts

- \`npm start\` - Start development server
- \`npm run build\` - Build for production
- \`npm test\` - Run tests
- \`npm run watch\` - Build in watch mode

## 🙏 Established in 2002

Serving contractors, plumbers, builders, and industrial buyers for over 22 years.

---

For detailed documentation, see [DEPLOYMENT.md](DEPLOYMENT.md)
