# Nawasena Ananta | Company Profile

Single page company website for PT Nawasena Ananta Teknologi (nawantech.com).

Stack: Next.js 16 (App Router), HeroUI v3, Tailwind CSS v4, framer-motion, Bun.

## Getting started

```bash
bun install
bun run dev        # dev server on the Bun runtime
bun run build      # production build
bun run start      # serve the production build
```

`build` and `start` run Next on Node because Bun 1.3.13 crashes inside Next 16.4's
production server loader. `bun run build:bun` is kept to retry the Bun runtime after a Bun upgrade.

## Before launch

Fill in the inquiry channels in `src/config/contact.ts`:

- `WHATSAPP_NUMBER`: international format, digits only (e.g. `6281234567890`)
- `CONTACT_EMAIL`: inbox for project inquiries

While a value is empty, its contact buttons are disabled and the floating WhatsApp button is hidden.

## Structure

```
src/
  app/                 layout, page, global styles and brand tokens
  config/              site constants and contact channels
  features/
    i18n/              Bahasa Indonesia / English switch
    navigation/        top bar and mobile drawer
    hero/  intro/  services/  approach/  products/  about/  contact/  footer/
  shared/components/   LinkButton, Reveal, SectionHeading, icons
public/
  brand/               logo pack (logos, icons, social)
  products/barenga/    Barenga screenshots and icon
```

Each feature keeps its own `content.ts` with `{ id, en }` copy. Add more products in
`src/features/products/data/products.ts`.
