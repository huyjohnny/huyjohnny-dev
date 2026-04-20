# Johnny Huynh Portfolio

A modern personal portfolio built with Next.js, TypeScript, and Tailwind CSS.

## Link

https://huyjohnny-portfolio.vercel.app/

## Overview

This project is a single-page portfolio site with:

- Hero section with polished CTA interactions
- Projects showcase with card/modal details
- About section with profile image and strengths/toolbox content
- Contact section with social links, resume link, and email form (`mailto`)
- Responsive layout for mobile and desktop
- Light/dark theme toggle

## Tech Stack

- Next.js 15 (App Router)
- React 19
- TypeScript
- Tailwind CSS 4
- Lucide React icons

## Project Structure

```text
src/
  app/
    layout.tsx
    page.tsx
    globals.css
  components/
    layout/
    sections/
    ui/
  content/
    site.ts
    projects/projects.ts
public/
  images/
  resume.pdf
```

## Getting Started

### Prerequisites

- Node.js 22.x
- npm

### Install

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open `http://localhost:3000`.

### Production Build

```bash
npm run build
npm run start
```

## Content Updates

Most content is centralized in:

- `src/content/site.ts`
- `src/content/projects/projects.ts`

Common edits:

- Name, role, summary, and hero CTA
- About text and profile image path
- Contact email and social URLs
- Resume link (`/public/resume.pdf`)

## Assets

- Tab icon is configured via `src/app/layout.tsx` metadata.
- App icon file is `src/app/icon.png`.
- Main image assets live under `public/images`.

## Deployment

This project is ready for Vercel deployment.

### Deploy with Vercel CLI

```bash
npx vercel
npx vercel --prod
```

### Or via GitHub Integration

1. Push this repo to GitHub
2. Import the project in Vercel
3. Deploy

## License

Personal portfolio project for Johnny Huynh.
