# Kayan — Arabic-First Workflow Automation

A bilingual workflow-automation product concept with a responsive React interface and a security-conscious Supabase inquiry path.

**Live demo:** [kayan-app-henna.vercel.app](https://kayan-app-henna.vercel.app/)

## Overview

Kayan helps teams explore repetitive-process automation before committing to a production implementation. It combines a structured pilot narrative, Arabic-first UX, localized use cases, and a real demo-request submission path when Supabase is configured.

## Tech Stack

- React 18 and TypeScript
- Vite 5
- Tailwind CSS 3
- Supabase JavaScript client
- PostgreSQL and Row Level Security
- Spline web component
- Vercel

## Key Features

- Complete Arabic/English RTL/LTR switching
- Responsive interface with an optional desktop 3D scene
- Structured automation-pilot methodology and use cases
- Accessible navigation, localized form states, and feedback
- Supabase-backed inquiry submission
- Row Level Security, constrained public privileges, and duplicate-request throttling
- Clear separation between implemented functionality and future product scope

## Setup

```bash
git clone https://github.com/azizkza99/kayan-app.git
cd kayan-app
npm ci
npm run dev
```

For a separate Supabase project, create `.env.local`:

```env
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_PUBLISHABLE_KEY=your-public-publishable-key
```

Never expose a Supabase secret or service-role key in a `VITE_` variable.

## Quality Checks

```bash
npm run typecheck
npm run lint
npm run build
npm audit --omit=dev
```

## Status

Interactive portfolio concept. It is not a live AI service or compliance certification; production use requires operational, privacy, security, and retention controls.
