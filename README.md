# Cinematic Scroll Experience

A Next.js 14 web app with bold, scroll-linked animations, parallax backgrounds, and mixed image/video content.

## Features

- **Next.js 14 App Router** with TypeScript
- **Tailwind CSS** for styling
- **GSAP + ScrollTrigger** for scroll-linked animations
- **Lenis** for smooth scrolling
- **4 Pinned Sections** with:
  - Bold, hype-driven cinematic motion
  - Parallax and transforming backgrounds (images & video)
  - Mixed content animations (fade, slide, scale)
  - Mobile-optimized wow factor (not simplified, just optimized)

## Getting Started

### Install Dependencies
```bash
npm install
```

### Run Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
src/
├── app/
│   ├── layout.tsx       # Root layout with metadata
│   ├── page.tsx         # Home page with 4 sections
│   └── globals.css      # Tailwind styles
├── components/
│   └── ScrollSection.tsx # Reusable scroll-pinned section component
└── context/
    └── LenisContext.tsx  # Lenis smooth scroll provider
```

## Configuration

### Lenis Settings
- Duration: 1.2s
- Easing: Custom exponential
- Smooth scrolling on touch and desktop

### GSAP ScrollTrigger
- Scrub: 1.2s (smooth animation sync)
- Parallax on backgrounds (strength varies by device)
- Content animations: fade, slide, scale (rotate per section)

## Mobile Optimization

Motion is optimized for mobile without removing the cinematic wow factor:
- Parallax strength reduced (0.3 vs 0.5 on desktop)
- Sections still pinned behavior optimized
- Full smooth scroll maintained
- Bold animations preserved

## Customization

### Adding Your Own Sections
1. Create new backgrounds or videos
2. Add `<ScrollSection>` components with custom content
3. Adjust animation scrub values and parallax strength as needed

### Changing Motion
Edit `ScrollSection.tsx`:
- `scrub` values for faster/slower animations
- `parallaxStrength` for background movement intensity
- Animation type selection logic (fade/slide/scale)

## Build for Production
```bash
npm run build
npm run start
```

---

**Note:** Placeholder media (from Unsplash & public video library) should be replaced with your own assets.
