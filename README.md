# Rseem Investment Company - Premium Corporate Website

A fully bilingual (Arabic & English), production-ready Next.js website for Rseem Investment Company, featuring venture capital, private equity, and strategic investment services aligned with Saudi Vision 2030.

## 🚀 Features

### Core Functionality
- **Fully Bilingual**: Complete Arabic (RTL) and English (LTR) support with seamless language switching
- **Responsive Design**: Mobile-first approach with pixel-perfect layouts on all devices
- **High-Performance**: Server-side rendering (SSR) with Next.js App Router for optimal SEO
- **Smooth Animations**: Framer Motion for scroll-triggered animations and micro-interactions
- **Luxurious UI**: Premium design system with glassmorphism, gradients, and modern minimalism

### Pages
1. **Home Page** - Hero section, company overview, sectors preview, statistics, and CTAs
2. **About Us** - Mission, vision, core values, and company strengths
3. **Investment Sectors** - Detailed breakdown of Venture Capital, Real Estate, Private Equity, and Advisory Services
4. **Contact** - Interactive form, office information, and embedded map

### Technical Excellence
- ✅ Perfect SEO optimization (semantic HTML, hreflang tags, meta tags, Open Graph)
- ✅ Accessibility-first implementation
- ✅ RTL/LTR support with Tailwind logical properties
- ✅ Form validation and error handling
- ✅ Type-safe TypeScript codebase
- ✅ Modular component architecture

## 🛠️ Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS with logical properties for RTL/LTR
- **Internationalization**: next-intl for bilingual support
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **UI Utilities**: React Intersection Observer for scroll animations

## 📁 Project Structure

```
rseem-investment/
├── app/
│   ├── [locale]/
│   │   ├── layout.tsx          # Locale layout wrapper
│   │   ├── page.tsx            # Home page
│   │   ├── about/
│   │   │   └── page.tsx        # About page
│   │   ├── sectors/
│   │   │   └── page.tsx        # Sectors page
│   │   └── contact/
│   │       └── page.tsx        # Contact page
│   ├── components/
│   │   ├── Navbar.tsx          # Navigation with language switcher
│   │   ├── Hero.tsx            # Hero section
│   │   ├── About.tsx           # About section on home
│   │   ├── Sectors.tsx         # Sectors section on home
│   │   ├── Why.tsx             # Why Rseem section
│   │   ├── Contact.tsx         # Contact form
│   │   ├── Footer.tsx          # Footer
│   │   └── pages/
│   │       ├── AboutHero.tsx
│   │       ├── AboutContent.tsx
│   │       ├── SectorsHero.tsx
│   │       ├── SectorsContent.tsx
│   │       └── ContactHero.tsx
│   ├── layout.tsx              # Root layout
│
├── messages/
│   ├── en.json                 # English translations
│   └── ar.json                 # Arabic translations
│
├── styles/
│   └── globals.css             # Global styles and animations
│
├── i18n.ts                     # i18n configuration
├── middleware.ts               # i18n middleware
├── next.config.js              # Next.js configuration
├── tailwind.config.js          # Tailwind configuration
├── tsconfig.json               # TypeScript configuration
├── postcss.config.js           # PostCSS configuration
└── package.json                # Dependencies

```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ or Bun
- npm, yarn, pnpm, or Bun package manager

### Installation

1. **Install dependencies**:
```bash
npm install
# or
yarn install
# or
pnpm install
```

2. **Configure environment variables**:
```bash
cp .env.example .env.local
# Edit .env.local with your configuration
```

3. **Run development server**:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. **Open in browser**:
Navigate to [http://localhost:3000](http://localhost:3000)

## 🌐 Language Switching

The website supports seamless language switching:

- **English**: `/en` - Left-to-Right layout
- **Arabic**: `/ar` - Right-to-Left layout

Click the language switcher in the navbar to toggle between Arabic and English. All content, layout, and animations adapt automatically.

## 🎨 Design System

### Color Palette
- **Primary Dark**: `#0F1419` (Navy Black)
- **Primary Navy**: `#1a2a4a` (Deep Navy)
- **Accent Teal**: `#1B5E5C` (Emerald Teal)
- **Accent Emerald**: `#0D7C66` (Bright Teal)
- **Gold Accent**: `#D4AF6E` (Champagne Gold)
- **Light Background**: `#F8FAFB` (Off White)

### Typography
- **Display**: Poppins, Cairo (Arabic)
- **Body**: Inter, Tajawal (Arabic)

### Animation Principles
- Scroll-triggered fade-in and slide-up effects
- Staggered animations for list items
- Smooth hover states on interactive elements
- Counter animations for statistics
- Parallax effects on hero backgrounds

## 📝 Localization

All content is translated in two locations:

### Translation Files
- `messages/en.json` - English translations
- `messages/ar.json` - Arabic translations

Key sections:
- Navigation
- Hero section
- About/Mission/Vision
- Investment Sectors
- Why Rseem statistics
- Contact form labels
- Footer

### Adding New Translations
1. Add the new key-value pair to both `messages/en.json` and `messages/ar.json`
2. Use the `useTranslations()` hook in your component:

```typescript
const t = useTranslations('section_name');

<h1>{t('key_name')}</h1>
```

## 📱 Responsive Breakpoints

- **Mobile**: `< 640px`
- **Tablet**: `640px - 1024px`
- **Desktop**: `1024px - 1280px`
- **Large Desktop**: `> 1280px`

## ♿ Accessibility

- Semantic HTML5 structure
- ARIA labels for interactive elements
- Focus-visible states for keyboard navigation
- Color contrast ratios meet WCAG AA standards
- Form labels with floating effect
- Keyboard-navigable menu and forms

## 🔍 SEO

### Implementation
- **Semantic HTML**: Proper heading hierarchy (H1 → H2 → H3)
- **Meta Tags**: Title, description, Open Graph, Twitter cards
- **hreflang Tags**: Language alternation links
- **Structured Data**: Ready for Schema.org JSON-LD
- **Performance**: Server-side rendering with Next.js
- **Sitemap**: Automatically generated through next-sitemap
- **Robots.txt**: Configured for search engine crawling

### SEO Keywords
- Venture Capital
- Private Equity
- Saudi Arabia Investment
- Vision 2030
- رأس المال الجريء
- الأسهم الخاصة
- الاستثمار
- رؤية 2030

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Docker
```bash
docker build -t rseem-investment .
docker run -p 3000:3000 rseem-investment
```

### Self-Hosted
```bash
npm run build
npm start
```

## 📊 Performance Optimizations

- **Image Optimization**: Next.js Image component
- **Code Splitting**: Automatic with Next.js App Router
- **Lazy Loading**: Intersection Observer for scroll animations
- **Font Optimization**: Google Fonts with preconnect
- **CSS-in-JS**: Tailwind CSS with PurgeCSS

### Core Web Vitals Target
- **LCP**: < 2.5s
- **FID**: < 100ms
- **CLS**: < 0.1

## 🛡️ Security

- **CSP Headers**: Content Security Policy configured
- **HTTPS Only**: Enforced in production
- **XSS Protection**: Built-in with Next.js
- **CSRF Protection**: Form token validation
- **Rate Limiting**: Recommended for contact forms

## 📞 Contact & Support

- **Phone**: +966 55 548 3247
- **Email**: info@rseem.com
- **Address**: Gate Avenue Mall, Office 10, Othman Bin Affan Street, Al-Wadi District, Riyadh 13313, Saudi Arabia
- **Website**: https://rseem.com

## 📄 License

All rights reserved © 2024 Rseem Investment Company

## 🔄 Updates & Maintenance

### Regular Updates
- Security patches
- Dependency updates
- Content updates
- Performance monitoring

### Development Guidelines
1. Always work on a feature branch
2. Write semantic commit messages
3. Test on both Arabic and English versions
4. Validate responsive design
5. Check accessibility with tools like Axe

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [next-intl Documentation](https://next-intl-docs.vercel.app/)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Lucide React Icons](https://lucide.dev/)

---

**Built with ❤️ for Rseem Investment Company**
