import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const SITE_URL = "https://bisabaik.org";

export interface BreadcrumbItem {
  name: string;
  /** Path relative to site root (e.g. "/projects") or absolute URL. Omit for the current page. */
  path?: string;
}

interface SeoProps {
  /** Page title (without the site suffix). */
  title?: string;
  /** Meta description. */
  description?: string;
  /** Breadcrumb trail. Home is prepended automatically; current page should be last. */
  breadcrumbs?: BreadcrumbItem[];
  /** Override canonical URL (defaults to SITE_URL + current pathname). */
  canonical?: string;
}

/**
 * Per-page SEO: sets <title>, meta description, canonical link, OG/Twitter tags,
 * and injects a BreadcrumbList JSON-LD script. Cleans up its own JSON-LD on unmount.
 */
const Seo = ({ title, description, breadcrumbs, canonical }: SeoProps) => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Title
    if (title) document.title = title;

    // Description + OG/Twitter description
    if (description) {
      setMeta("name", "description", description);
      setMeta("property", "og:description", description);
      setMeta("name", "twitter:description", description);
    }

    // OG/Twitter title
    if (title) {
      setMeta("property", "og:title", title);
      setMeta("name", "twitter:title", title);
    }

    // Canonical + og:url
    const canonicalUrl = canonical ?? `${SITE_URL}${pathname}`;
    setLink("canonical", canonicalUrl);
    setMeta("property", "og:url", canonicalUrl);
  }, [title, description, canonical, pathname]);

  useEffect(() => {
    if (!breadcrumbs || breadcrumbs.length === 0) return;

    const items = [
      { name: "Home", path: "/" },
      ...breadcrumbs,
    ].map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.path
        ? item.path.startsWith("http")
          ? item.path
          : `${SITE_URL}${item.path}`
        : `${SITE_URL}${pathname}`,
    }));

    const json = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: items,
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.dataset.seo = "breadcrumbs";
    script.text = JSON.stringify(json);
    document.head.appendChild(script);

    return () => {
      script.remove();
    };
  }, [breadcrumbs, pathname]);

  return null;
};

function setMeta(attr: "name" | "property", key: string, content: string) {
  let tag = document.head.querySelector<HTMLMetaElement>(
    `meta[${attr}="${key}"]`,
  );
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attr, key);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}

function setLink(rel: string, href: string) {
  let tag = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!tag) {
    tag = document.createElement("link");
    tag.setAttribute("rel", rel);
    document.head.appendChild(tag);
  }
  tag.setAttribute("href", href);
}

export default Seo;
