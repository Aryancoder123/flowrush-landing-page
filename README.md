# Flowrush Landing Page

A modern, responsive landing page built with Next.js 14, TypeScript, and Tailwind CSS. This project showcases Flowrush, a productivity platform designed to streamline workflows and boost team efficiency.

## Features

- 🚀 **Modern Design**: Clean, professional design with gradient accents
- 📱 **Responsive**: Fully responsive design that works on all devices
- ⚡ **Fast Performance**: Built with Next.js 14 for optimal performance
- 🎨 **Beautiful Animations**: Smooth animations powered by Framer Motion
- 🎯 **SEO Optimized**: Proper meta tags and structured data
- 🔧 **TypeScript**: Full TypeScript support for better development experience

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Font**: Inter (Google Fonts)

## Getting Started

### Prerequisites

- Node.js 18.0 or later
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd flowrush-landing
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
flowrush-landing/
├── app/
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── Features.tsx
│   │   └── Footer.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── public/
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── README.md
```

## Customization

### Colors
The color scheme can be customized in `tailwind.config.js`. The current design uses:
- Primary: Blue gradient
- Secondary: Purple gradient
- Accent: Various gradient combinations

### Content
All content can be easily modified in the respective component files:
- `app/components/Hero.tsx` - Main hero section
- `app/components/Features.tsx` - Features and benefits
- `app/components/Header.tsx` - Navigation
- `app/components/Footer.tsx` - Footer content

### Animations
Animations are powered by Framer Motion and can be customized in each component. The animations include:
- Fade in effects
- Slide up animations
- Hover effects
- Stagger animations

## Deployment

### Vercel (Recommended)
The easiest way to deploy is using Vercel:

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms
This Next.js app can be deployed to any platform that supports Node.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## Performance

The landing page is optimized for performance with:
- Image optimization
- Code splitting
- Lazy loading
- Minimal bundle size
- Fast loading times

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

For questions or support, please contact:
- Email: hello@flowrush.com
- Website: https://flowrush.com
