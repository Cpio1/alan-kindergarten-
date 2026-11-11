# «Алан» бөбекжай-балабақшасы — лендинг

Next.js 15 (App Router) · TypeScript · Tailwind CSS 4 · Motion · Lucide.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Мазмұнды өзгерту

Барлық мәтін, байланыс, топтар, үйірмелер, құжаттар және карта — `src/data/kindergarten.ts`.

- **Фотосуреттер** — `public/images/` (немесе `public/`) ішіне салыңыз, build кезінде автоматты табылады:
  - `logo.png` — логотип, `main-page.*` — Hero, `main-page2.*` — «Біз туралы және топтар»
  - қалған суреттер — галерея (`image1.jpg`, `image2.jpg`, ...)
- **2GIS картасы** — `map.embedUrl` (iframe сілтемесі) және `map.linkUrl`.
- **Құжаттар** — `documents.driveUrl` (Google Drive) немесе `documents.files` (`public/docs/*.pdf`).
- **Домен** — Vercel-де `NEXT_PUBLIC_SITE_URL` айнымалысын орнатыңыз (SEO/Open Graph үшін).

## Құрылым

- `src/components/desktop/*` — ≥ 1024px композициялары
- `src/components/mobile/*` — < 1024px композициялары
- `src/components/shared/*` — ортақ элементтер (пішіндер, галерея, lightbox, карта)
- `src/components/sections/*` — Header, Құжаттар, Footer
- `src/lib/images.ts` — `public/` ішіндегі суреттерді build кезінде оқиды
