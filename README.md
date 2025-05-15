# SoftSell - Software License Marketplace

A modern, responsive marketing website for SoftSell, a fictional company that helps businesses sell their unused software licenses.

## Features Built

- **Responsive Design**: Fully responsive layout that works on mobile, tablet, and desktop
- **Dark/Light Mode**: Theme toggle with system preference detection
- **Modern UI**: Clean, professional design using ShadCN UI components and Tailwind CSS
- **Interactive Elements**:
  - Animated section transitions with Framer Motion
  - AI-powered chat widget for customer support
  - Form validation for the contact form
- **SEO Optimized**: Proper metadata and OpenGraph tags

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Components**: ShadCN UI
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Geist Sans and Geist Mono

## Design Choices

- **Component Architecture**: Modular components organized by function (layout, sections, UI)
- **Animation Strategy**: Subtle animations to enhance UX without being distracting
- **Accessibility**: Semantic HTML, proper contrast ratios, and keyboard navigation
- **Performance**: Optimized images and minimal JavaScript

## How to Run the Project

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- `/app`: Next.js app router files
- `/components`: React components
  - `/layout`: Layout components (navbar, footer)
  - `/sections`: Page sections (hero, features, etc.)
  - `/ui`: UI components from ShadCN
- `/public`: Static assets
- `/lib`: Utility functions
