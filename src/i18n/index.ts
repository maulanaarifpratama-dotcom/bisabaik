export const LOCALES = ["en", "id"] as const;
export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "en";

/** BCP 47 tags for <html lang> and hreflang. */
export const HTML_LANG: Record<Locale, string> = {
  en: "en",
  id: "id",
};

export const OG_LOCALE: Record<Locale, string> = {
  en: "en_US",
  id: "id_ID",
};

export const SITE_URL = "https://bisabaik.org";

/**
 * English is served from the bare paths the site already ranks on.
 * Indonesian is served from /id. Slugs are shared between the two so that a
 * language switch never changes which page you are looking at.
 */
export function localizePath(path: string, locale: Locale): string {
  const clean = normalize(path);
  if (locale === DEFAULT_LOCALE) return clean;
  return clean === "/" ? "/id" : `/id${clean}`;
}

/** Removes the locale prefix, returning the shared, language-neutral path. */
export function stripLocale(pathname: string): string {
  const clean = normalize(pathname);
  if (clean === "/id") return "/";
  if (clean.startsWith("/id/")) return clean.slice(3);
  return clean;
}

export function getLocaleFromPath(pathname: string): Locale {
  const clean = normalize(pathname);
  return clean === "/id" || clean.startsWith("/id/") ? "id" : DEFAULT_LOCALE;
}

/** Absolute canonical URL for a page, in a given language. */
export function absoluteUrl(path: string, locale: Locale = DEFAULT_LOCALE) {
  const localized = localizePath(path, locale);
  return localized === "/" ? `${SITE_URL}/` : `${SITE_URL}${localized}`;
}

/** hreflang set for a page, including x-default pointing at English. */
export function alternates(pathname: string) {
  const shared = stripLocale(pathname);
  return [
    ...LOCALES.map((locale) => ({
      hreflang: HTML_LANG[locale],
      href: absoluteUrl(shared, locale),
    })),
    { hreflang: "x-default", href: absoluteUrl(shared, DEFAULT_LOCALE) },
  ];
}

export function otherLocale(locale: Locale): Locale {
  return locale === "en" ? "id" : "en";
}

/**
 * Trailing slashes are stripped so that a path from Astro.url.pathname
 * ("/about/") and a path written by hand ("/about") compare equal.
 */
function normalize(path: string): string {
  if (!path.startsWith("/")) path = `/${path}`;
  if (path.length > 1 && path.endsWith("/")) path = path.slice(0, -1);
  return path;
}
