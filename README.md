# Kayan — Arabic-first workflow automation concept

Kayan is a bilingual product prototype for exploring enterprise workflow automation before investing in a production implementation. It demonstrates how a team can describe a repetitive process, shape a controlled pilot, and evaluate outcomes with clear boundaries.

> **Project status:** interactive concept and portfolio project. It is not a live AI service, a compliance certification, or a promise of a specific hosting region.

## What is implemented

- Arabic-first interface with complete RTL/LTR switching
- Responsive React experience with an optional desktop 3D scene
- Clear pilot methodology and trust-by-design guidance
- Real use-case submission through Supabase when environment variables are configured
- Row-level security on the demo-request table
- Accessible navigation, form states, and localized feedback

## Technology

- React 18 and TypeScript
- Vite and Tailwind CSS
- Supabase JavaScript client
- Spline web component for the desktop concept visual
- Vercel hosting

## Local development

```bash
npm ci
npm run dev
```

Copy the required public Supabase values into `.env.local`:

```bash
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_PUBLISHABLE_KEY=your-public-publishable-key
```

The legacy `VITE_SUPABASE_ANON_KEY` variable remains supported during migration. Never expose a Supabase secret key or service-role key in a `VITE_` variable.

## Quality checks

```bash
npm run typecheck
npm run lint
npm run build
npm audit --omit=dev
```

## Security notes

The browser uses only a public Supabase key. Row-level security must remain enabled, and public roles should receive only the minimum table privileges required for form submission. Production deployments should add rate limiting, explicit retention rules, and a verified privacy notice before collecting real customer data.

## Live concept

[kayan-app-henna.vercel.app](https://kayan-app-henna.vercel.app/)

Built by [Abdelaziz Abuthuraya](https://github.com/azizkza99).
