# Borofuel Website

A professional landing page website for Borofuel - a fuel access and station-partner app that connects approved drivers with designated filling stations.

## Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Icon library

## Features

- 🏠 **Landing Page** - Modern hero section with features and benefits
- 📖 **About Page** - Information about Borofuel and how it works
- 📧 **Contact Page** - Contact form and information
- 🚗 **Driver Portal** - Organization ID verification page
- 🎨 **Responsive Design** - Works on all devices
- ✨ **Smooth Animations** - Framer Motion animations throughout

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
BoroFuel/
├── app/
│   ├── about/
│   │   └── page.tsx       # About page
│   ├── contact/
│   │   └── page.tsx       # Contact page
│   ├── drivers/
│   │   └── page.tsx       # Driver portal page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Landing page
├── components/
│   ├── Footer.tsx         # Footer component
│   └── Navbar.tsx         # Navigation component
└── public/                # Static assets
```

## Design Principles

- **Mild and Simple** - Clean, professional design without aggressive marketing
- **No Loan Terminology** - Avoids any language related to loans or lending
- **Professional Images** - Uses high-quality images from Unsplash
- **Accessible** - Semantic HTML and proper contrast ratios

## Build for Production

```bash
npm run build
npm start
```

## License

Private project for Borofuel.
