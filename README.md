# bisabaik.org

The Bisa Baik Bersama website. Static Astro site, English and Indonesian,
deployed on Vercel.

**Brand and domain.** The organisation is known as **bisabaik.or.id** and email
stays on that domain (Google Workspace). **bisabaik.org** is the delivery
domain: every canonical URL, sitemap entry and structured-data reference points
there. The old `bisabaik.or.id` web hosting is suspended, so nothing on this
site links to it.

## Stack

| Piece | Choice | Why |
| --- | --- | --- |
| Framework | Astro 5, static output | Ships zero framework JavaScript |
| Styling | Tailwind CSS 4, CSS-first tokens | Theme lives in `src/styles/global.css` |
| Content | Astro content collections | File-based, so a CMS can be layered on later |
| Icons | Phosphor via `astro-icon` | One family, one stroke weight |
| Fonts | Newsreader + Inter Tight, self-hosted | No third-party font requests |
| Interactivity | Small vanilla scripts | Menu, theme, scroll reveal, contact form |

There is no client-side framework. The only JavaScript on a page is the theme
switch, the mobile menu, the scroll reveal, and (on `/contact`) the form.

## Commands

```bash
npm install
npm run dev      # dev server on http://localhost:4321
npm run build    # type-check, then build to dist/
npm run preview  # serve the built output
npm run check    # astro check only
```

## Content model

All copy lives under `src/content/`. Nothing user-visible is hardcoded in a
component, so a translator or editor never has to open `.astro` files.

```
src/content/
  pages/<page>/en.yaml     page copy, one file per language
  pages/<page>/id.yaml
  partners/<slug>.yaml     both languages in one file
  projects/<slug>.yaml     both languages in one file
  insights/<slug>.yaml     both languages in one file
  legal/en/<slug>.md       Markdown, because the body is prose
  legal/id/<slug>.md
```

Two shapes, chosen for how a CMS maps onto them:

- **Page copy** is one file per language, so a CMS singleton with a language
  toggle maps to it one-to-one.
- **Repeating entities** keep both languages in one file, so a translator sees
  source and target side by side.

Schemas are in `src/content.config.ts`. They are strict: a missing or misnamed
field fails `npm run build` rather than rendering an empty page.

To add a partner, project or insight, drop in a new YAML file and set `order`.
Nothing else needs touching.

Photography is referenced by key, never by path. The key list is in
`src/lib/images.ts`.

## Languages and routing

English is served from the bare paths the site is already indexed on. Indonesian
is served from `/id`, sharing the same slugs, so switching language never moves
the reader to a different page.

```
/about        ->  /id/about
/what-we-do   ->  /id/what-we-do
```

Every page emits `hreflang` for both languages plus `x-default`, and the sitemap
carries the same pairs. Helpers are in `src/i18n/index.ts`; use `localizePath()`
rather than writing `/id/...` by hand.

## Design system

Tokens are defined once in `src/styles/global.css` and consumed as Tailwind
utilities (`bg-paper`, `text-ink`, `text-ink-soft`, `border-line`, `text-bronze`).

- **Colour** comes from the logo: ink navy for text, bronze for the single
  accent, on a desaturated paper ground. Bronze has two tones, `bronze` for
  large type and rules, `bronze-strong` where small text needs 4.5:1.
- **Type** is Newsreader for display and Inter Tight for everything else.
- **Radius** is 2px everywhere. One value, no exceptions.
- **Dark mode** is attribute-driven. An inline script in `<head>` writes
  `data-theme` before first paint, so the page never flashes the wrong ground.
  A `prefers-color-scheme` block covers visitors without JavaScript.
- **Motion** is deliberately quiet. One authored moment, the scroll-driven
  parallax on the home hero, plus a fade-up reveal. Elements ship visible and
  are only hidden once the reveal script arms them, so no-JS and
  reduced-motion readers never lose content.

## Contact form

`src/components/pages/ContactPage.astro` posts JSON to `/api/send-contact`,
a Vercel serverless function in `api/send-contact.ts` that forwards to the
Google Apps Script endpoint in the `GSCRIPT_URL` environment variable. Set that
variable in the Vercel project settings.

In local `npm run dev` there is no `/api`, so submitting shows the error state.
That is expected.

## SEO

- Canonical URLs and sitemap entries agree: no trailing slash, apex domain.
- `hreflang` on every page, plus `x-default`.
- JSON-LD: `NGO` and `WebSite` on the home page, `BreadcrumbList` on inner pages.
- Open Graph and Twitter card metadata per page, in the page's own language.
- `public/robots.txt` points at `/sitemap-index.xml`.

`vercel.json` sets `trailingSlash: false` so the slashed form redirects onto the
canonical one, adds long-lived caching for hashed assets, and sets baseline
security headers.

## Known follow-ups

- `www.bisabaik.org` and `bisabaik.org` both answer. Canonical tags already
  point at the apex, but a `www` to apex redirect at the DNS or Vercel level
  would remove the duplicate entirely. Not configured here because it changes
  production routing.
- The legal pages describe what this site actually does. They have not been
  reviewed by a lawyer.
- `/contact` is the only page with a conversion action. There is no donation
  destination yet, which is why the old "Support Our Work" button was removed
  rather than repointed.
