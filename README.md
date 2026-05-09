# Happy Cortejo — Frontend

> Premium private transport platform for Portugal.
> Built with React + Vite + Tailwind CSS v4 + Zustand.

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | React 18 + Vite |
| Styling | Tailwind CSS v4 |
| State | Zustand |
| Forms | React Hook Form |
| HTTP | Axios (mocked) |
| Routing | React Router v6 |
| Icons | Lucide React |
| Utils | clsx + tailwind-merge |

## Setup

```bash
# Install dependencies
npm install

# Copy env config
cp .env.example .env

# Start dev server
npm run dev

# Build for production
npm run build
```

## Project Structure

```
src/
  api/          # Axios client + mock API layer
  components/
    ui/         # Button, Card, Badge, SectionHeader, PageHeader
    layout/     # Navbar, Footer, RootLayout
    forms/      # FormFields (Input, Select, Textarea)
    sections/   # Hero, Services, WhyUs, Routes, Booking, Reviews, FAQ, CTA
  constants/    # App-wide constants (routes, services, copy)
  lib/          # cn() utility
  pages/        # One file per route
  routes/       # React Router config
  state/        # Zustand stores
  styles/       # global.css with design tokens
```

## Pages

| Route | Page |
|-------|------|
| `/` | Home |
| `/airport-transfers` | Airport Transfers |
| `/tours` | Tours & Day Trips |
| `/business-travel` | Business Travel |
| `/relocation` | Relocation Concierge |
| `/subscription` | Subscription Chauffeur |
| `/book` | Book a Ride |
| `/contact` | Contact |

## Design Tokens

All design tokens live in `src/styles/global.css` as CSS custom properties:

- `--color-gold` — Brand gold
- `--color-navy` — Brand navy
- `--color-cream` — Section background
- `--shadow-card`, `--shadow-elevated` — Shadows
- `--radius-card`, `--radius-btn` — Border radii

## Mock API

All API calls are mocked in `src/api/client.js` via `mockApi`. 
Replace `mockApi.*` calls with real `apiClient.*` calls when the backend is ready.

## Backend Integration Checklist

- [ ] Replace `mockApi.submitBooking` with real POST endpoint
- [ ] Replace `mockApi.submitContactForm` with real POST endpoint
- [ ] Add authentication store (stub in `state/store.js`)
- [ ] Connect Google Reviews API for testimonials
- [ ] Configure GA4 via `VITE_GA_MEASUREMENT_ID`
- [ ] Add real OG image at `/public/og-image.jpg`
