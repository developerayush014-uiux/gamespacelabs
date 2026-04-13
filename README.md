# 🛩️ GameSpace Lab — Website v2

A complete, production-ready Next.js 14 website for **GameSpace Lab** — India's fastest MVP launch partner, built by Netflix & Google engineers.

Inspired by [Snabbit.in](https://snabbit.in) — clean white backgrounds, bold caps typography, floating phone mockups, section-based storytelling.

---

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run dev server
npm run dev
# → http://localhost:3000

# Build for production
npm run build
npm start
```

---

## 🎨 Design System — "Warm Precision" Palette

| Token | Hex | Usage |
|---|---|---|
| `sand` | `#F7F5F0` | **60%** — All backgrounds, canvas |
| `slate` | `#2F4858` | **30%** — Text, headers, footers |
| `terra` | `#DE6B48` | **10%** — CTAs, accents, logo |
| `ochre` | `#EAB24A` | **10%** — Hover states, badges, highlights |

**Typography:** Syne (display/headings — bold, geometric) + Inter (body) + JetBrains Mono (code)

---

## 📁 Project Structure

```
gsl-v2/
├── app/
│   ├── layout.tsx              # Root layout — fonts, Navbar, Footer, Toaster
│   ├── globals.css             # Design system, utilities, animations
│   ├── page.tsx                # Home — Hero, Stats, Services, How It Works, FAQ, CTA
│   ├── services/page.tsx       # 5 service cards + process steps
│   ├── about/page.tsx          # Story, founders, niches
│   ├── contact/
│   │   ├── page.tsx            # Metadata wrapper
│   │   └── contact-client.tsx  # 3-step animated form with Zod validation
│   ├── faq/
│   │   ├── page.tsx            # Metadata wrapper
│   │   └── faq-client.tsx      # Animated accordion FAQ
│   ├── help/page.tsx           # Phone hover CTA + quick links
│   ├── privacy/page.tsx        # Privacy Policy
│   ├── terms/page.tsx          # Terms of Service
│   └── not-found.tsx           # Custom 404
│
├── components/
│   ├── Navbar.tsx              # Glassmorphism nav + mobile slide-in drawer
│   ├── Footer.tsx              # Dark footer with socials + India badge
│   └── ui/
│       ├── FadeUp.tsx          # Scroll-triggered reveal (Framer Motion)
│       └── PhoneMockup.tsx     # Animated floating phone with app content inside
│
├── data/
│   └── content.ts              # ⭐ All site copy — single source of truth
│
├── lib/
│   └── utils.ts                # cn() utility
│
└── public/images/              # Add logo.png, og-image.png here
```

---

## 📄 Pages

| Route | Description |
|---|---|
| `/` | Hero, stats, 5 services, how it works, niche marquee, FAQ, CTA |
| `/services` | 5 service cards with alternating layout + process steps |
| `/about` | Company story, founders, industry niches |
| `/contact` | 3-step form (Who/Project/Budget) with full validation |
| `/faq` | Animated accordion — all 8 FAQs |
| `/help` | Phone hover CTA, email, form links |
| `/privacy` | Privacy Policy |
| `/terms` | Terms of Service |

---

## 🔧 Customisation

### Update any copy
All site text lives in `data/content.ts`. Change any field there:
```ts
siteConfig.phone = "+91 9876543210";
services[0].title = "New Service Name";
faqs.push({ q: "New question?", a: "Answer here." });
```

### Add founder photos
In `app/about/page.tsx`, replace the emoji avatars with:
```tsx
import Image from "next/image";
<Image src="/images/founder-1.jpg" width={80} height={80} className="rounded-2xl" alt="..." />
```

### Wire up contact form
In `app/contact/contact-client.tsx`, replace the `setTimeout` mock:
```ts
const onSubmit = async (data: FormData) => {
  await fetch("/api/contact", { method: "POST", body: JSON.stringify(data) });
};
```

---

## 📦 Key Dependencies

| Package | Purpose |
|---|---|
| `next` 14 | App Router framework |
| `framer-motion` | All page animations, floating phone, hover effects |
| `react-hook-form` + `zod` | Form state + validation |
| `react-countup` | Animated stat counters |
| `react-hot-toast` | Success/error toast notifications |
| `lucide-react` | Icons |
| `tailwindcss` | Utility CSS with custom design tokens |

---

## 🌐 Deploy to Vercel

```bash
npx vercel deploy
```

Or connect your GitHub repo at [vercel.com](https://vercel.com) — zero config needed.
