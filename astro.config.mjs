// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";
import tailwindcss from "@tailwindcss/vite";

const SITE = "https://bisabaik.org";

/** Keeps sitemap entries in the same shape as the canonical tags. */
const stripTrailingSlash = (url) =>
  url.endsWith("/") && url !== `${SITE}/` ? url.slice(0, -1) : url;

export default defineConfig({
  site: SITE,

  // The brand stays bisabaik.or.id; bisabaik.org is the canonical delivery
  // domain. Canonical URLs carry no trailing slash, which is the form the site
  // is already indexed on, and vercel.json redirects the slashed form onto it.
  trailingSlash: "never",

  i18n: {
    locales: ["en", "id"],
    defaultLocale: "en",
    routing: {
      // English keeps the bare paths it already ranks on. Indonesian lives
      // under /id, sharing the same slugs so a language switch never moves the
      // reader to a different page.
      prefixDefaultLocale: false,
      redirectToDefaultLocale: false,
    },
  },

  integrations: [
    icon(),
    sitemap({
      i18n: {
        defaultLocale: "en",
        locales: { en: "en", id: "id" },
      },
      serialize(item) {
        item.url = stripTrailingSlash(item.url);
        if (item.links) {
          item.links = item.links.map((link) => ({
            ...link,
            url: stripTrailingSlash(link.url),
          }));
        }
        return item;
      },
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
  },

  build: {
    // Directory output means Vercel serves both /about and /about/, so the
    // redirect in vercel.json is a canonicalisation, not a rescue.
    format: "directory",
  },

  image: {
    responsiveStyles: true,
  },
});
