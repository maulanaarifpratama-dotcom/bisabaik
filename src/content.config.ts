import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

/* ---------------------------------------------------------------------------
   Content model.

   Two shapes, chosen for how a CMS will eventually map onto them:

   1. Page copy lives in `src/content/pages/<page>/<lang>.yaml`. One file per
      language per page, so a CMS singleton with an i18n toggle maps 1:1.
   2. Repeating entities (partners, projects, insights) keep both languages in
      one file, so a translator sees source and target without switching files.

   Legal pages are Markdown because their bodies are prose, not fields.
   --------------------------------------------------------------------------- */

const LOCALES = ["en", "id"] as const;

/** One YAML file per language, inside a per-page folder. */
const pageLoader = (page: string) =>
  glob({ pattern: "*.yaml", base: `./src/content/pages/${page}` });

const meta = z.object({
  title: z.string(),
  description: z.string(),
});

const cta = z.object({
  label: z.string(),
  href: z.string(),
});

const pageHeader = z.object({
  title: z.string(),
  intro: z.string(),
  imageAlt: z.string(),
});

/** A titled block of body copy. */
const titledBody = z.object({
  title: z.string(),
  body: z.string(),
});

const common = defineCollection({
  loader: pageLoader("common"),
  schema: z.object({
    localeName: z.string(),
    localeSwitchLabel: z.string(),
    skipToContent: z.string(),
    menu: z.object({ open: z.string(), close: z.string() }),
    theme: z.object({ label: z.string(), light: z.string(), dark: z.string() }),
    nav: z.array(z.object({ href: z.string(), label: z.string() })),
    aggregatorCta: z.object({
      label: z.string(),
      shortLabel: z.string(),
      href: z.string(),
    }),
    footer: z.object({
      tagline: z.string(),
      blurb: z.string(),
      navHeading: z.string(),
      contactHeading: z.string(),
      legalHeading: z.string(),
      email: z.string(),
      phone: z.string(),
      phoneHref: z.string(),
      address: z.array(z.string()),
      legal: z.array(z.object({ href: z.string(), label: z.string() })),
      relatedHeading: z.string(),
      related: z.array(
        z.object({ href: z.string(), label: z.string(), note: z.string() }),
      ),
      copyright: z.string(),
      affiliation: z.string(),
    }),
  }),
});

const home = defineCollection({
  loader: pageLoader("home"),
  schema: z.object({
    meta,
    hero: z.object({
      lineOne: z.string(),
      lineTwo: z.string(),
      lineThree: z.string(),
      body: z.string(),
      primary: cta,
      secondary: cta,
      imageAlt: z.string(),
    }),
    positioning: z.object({
      lead: z.string(),
      emphasisOne: z.string(),
      middle: z.string(),
      emphasisTwo: z.string(),
      tail: z.string(),
    }),
    pillars: z.object({
      heading: z.string(),
      body: z.string(),
      items: z.array(titledBody),
    }),
    journey: z.object({
      heading: z.string(),
      body: z.string(),
      phaseLabel: z.string(),
      phases: z.array(titledBody.extend({ numeral: z.string() })),
    }),
    flagship: z.object({
      heading: z.string(),
      body: z.string(),
      readMore: z.string(),
    }),
    principles: z.object({
      heading: z.string(),
      body: z.string(),
      cta,
      imageAlt: z.string(),
    }),
    partners: z.object({ heading: z.string(), cta }),
    close: z.object({
      heading: z.string(),
      body: z.string(),
      primary: cta,
      secondary: cta,
    }),
  }),
});

const about = defineCollection({
  loader: pageLoader("about"),
  schema: z.object({
    meta,
    header: pageHeader,
    vision: z.object({ heading: z.string(), statement: z.string() }),
    mission: z.object({ heading: z.string(), items: z.array(z.string()) }),
    why: z.object({
      heading: z.string(),
      body: z.string(),
      items: z.array(z.string()),
      imageAlt: z.string(),
    }),
    team: z.object({
      heading: z.string(),
      intro: z.string(),
      members: z.array(z.object({ name: z.string(), role: z.string() })),
    }),
    network: z.object({
      heading: z.string(),
      body: z.string(),
      items: z.array(z.string()),
      imageAlt: z.string(),
    }),
  }),
});

const whatWeDo = defineCollection({
  loader: pageLoader("what-we-do"),
  schema: z.object({
    meta,
    header: pageHeader,
    role: z.object({ heading: z.string(), items: z.array(z.string()) }),
    labels: z.object({
      pillar: z.string(),
      deliverables: z.string(),
      value: z.string(),
      workflow: z.string(),
    }),
    pillars: z.array(
      z.object({
        key: z.enum(["delivery", "exit", "market"]),
        title: z.string(),
        purpose: z.string(),
        imageAlt: z.string(),
        deliverables: z.array(z.string()),
        value: z.array(z.string()),
        workflow: z.array(z.string()),
      }),
    ),
  }),
});

const howWeWork = defineCollection({
  loader: pageLoader("how-we-work"),
  schema: z.object({
    meta,
    header: pageHeader,
    journey: z.object({
      heading: z.string(),
      phaseLabel: z.string(),
      phases: z.array(
        z.object({
          key: z.enum(["design", "create", "sustain"]),
          numeral: z.string(),
          title: z.string(),
          sub: z.string(),
          items: z.array(z.string()),
          imageAlt: z.string(),
        }),
      ),
    }),
    risk: z.object({
      heading: z.string(),
      body: z.string(),
      imageAlt: z.string(),
      items: z.array(z.object({ label: z.string(), body: z.string() })),
      manageHeading: z.string(),
      manage: z.array(z.string()),
    }),
    principles: z.object({ heading: z.string(), items: z.array(titledBody) }),
  }),
});

const impact = defineCollection({
  loader: pageLoader("impact"),
  schema: z.object({
    meta,
    header: pageHeader,
    presence: z.object({
      heading: z.string(),
      regions: z.array(
        z.object({ region: z.string(), places: z.array(z.string()) }),
      ),
    }),
    livelihood: z.object({
      heading: z.string(),
      body: z.string(),
      imageAlt: z.string(),
    }),
    sdg: z.object({
      heading: z.string(),
      intro: z.string(),
      items: z.array(
        z.object({
          number: z.string(),
          code: z.string(),
          title: z.string(),
          focus: z.string(),
          targets: z.array(z.string()),
        }),
      ),
    }),
    reading: z.object({ heading: z.string(), items: z.array(titledBody) }),
  }),
});

const partnersPage = defineCollection({
  loader: pageLoader("partners"),
  schema: z.object({
    meta,
    header: pageHeader,
    groups: z.array(
      z.object({
        key: z.enum(["philanthropic", "corporate", "development", "government"]),
        label: z.string(),
        blurb: z.string(),
        imageAlt: z.string(),
      }),
    ),
  }),
});

const projectsPage = defineCollection({
  loader: pageLoader("projects"),
  schema: z.object({
    meta,
    header: pageHeader,
    flagship: z.object({
      heading: z.string(),
      body: z.string(),
      imageAlt: z.string(),
    }),
    engagements: z.object({ heading: z.string(), body: z.string() }),
    labels: z.object({
      context: z.string(),
      role: z.string(),
      scope: z.string(),
      exit: z.string(),
      signal: z.string(),
      flagship: z.string(),
      engagement: z.string(),
    }),
  }),
});

const flagshipPage = defineCollection({
  loader: pageLoader("flagship"),
  schema: z.object({
    meta,
    header: pageHeader,
    labels: z.object({
      context: z.string(),
      role: z.string(),
      scope: z.string(),
      exit: z.string(),
      signal: z.string(),
      flagship: z.string(),
      engagement: z.string(),
    }),
    exitForward: z.object({
      title: z.string(),
      subtitle: z.string(),
      body: z.string(),
      imageAlt: z.string(),
      stages: z.array(titledBody.extend({ tag: z.string() })),
      note: z.string(),
    }),
    pasarbaik: z.object({
      title: z.string(),
      subtitle: z.string(),
      body: z.string(),
      imageAlt: z.string(),
      facts: z.array(z.object({ key: z.string(), value: z.string() })),
      cta,
    }),
    circular: z.object({
      title: z.string(),
      subtitle: z.string(),
      body: z.string(),
      imageAlt: z.string(),
      rolesHeading: z.string(),
      roles: z.array(z.string()),
      rolesNote: z.string(),
      relevanceLabel: z.string(),
      relevance: z.string(),
    }),
  }),
});

const insightsPage = defineCollection({
  loader: pageLoader("insights"),
  schema: z.object({
    meta,
    header: pageHeader,
    practice: z.object({
      heading: z.string(),
      body: z.string(),
      imageAlt: z.string(),
    }),
    forthcoming: z.string(),
    briefing: z.object({ heading: z.string(), body: z.string(), cta }),
  }),
});

const contact = defineCollection({
  loader: pageLoader("contact"),
  schema: z.object({
    meta,
    header: pageHeader,
    form: z.object({
      heading: z.string(),
      name: z.string(),
      namePlaceholder: z.string(),
      email: z.string(),
      emailPlaceholder: z.string(),
      org: z.string(),
      orgPlaceholder: z.string(),
      role: z.string(),
      rolePlaceholder: z.string(),
      interest: z.string(),
      interestPlaceholder: z.string(),
      interestOptions: z.array(
        z.object({ value: z.string(), label: z.string() }),
      ),
      message: z.string(),
      messagePlaceholder: z.string(),
      submit: z.string(),
      submitting: z.string(),
      consent: z.string(),
      successTitle: z.string(),
      successBody: z.string(),
      errorTitle: z.string(),
      errorBody: z.string(),
      optional: z.string(),
    }),
    direct: z.object({
      heading: z.string(),
      emailLabel: z.string(),
      phoneLabel: z.string(),
      officeLabel: z.string(),
    }),
    related: z.object({ heading: z.string() }),
    aside: z.object({ imageAlt: z.string(), caption: z.string() }),
  }),
});

const notFoundPage = defineCollection({
  loader: pageLoader("not-found"),
  schema: z.object({
    meta,
    code: z.string(),
    title: z.string(),
    body: z.string(),
    cta,
  }),
});

/* --- Repeating entities: both languages in one file ----------------------- */

const localizedPartner = z.object({
  name: z.string(),
  role: z.string(),
  context: z.string(),
});

const partners = defineCollection({
  loader: glob({ pattern: "*.yaml", base: "./src/content/partners" }),
  schema: z.object({
    order: z.number(),
    category: z.enum([
      "philanthropic",
      "corporate",
      "development",
      "government",
    ]),
    stage: z.enum(["co-design", "co-create", "co-sustain"]).optional(),
    en: localizedPartner,
    id: localizedPartner,
  }),
});

const localizedProject = z.object({
  title: z.string(),
  partner: z.string().optional(),
  context: z.string(),
  role: z.string(),
  scope: z.string(),
  exit: z.string(),
  signal: z.string(),
});

const projects = defineCollection({
  loader: glob({ pattern: "*.yaml", base: "./src/content/projects" }),
  schema: z.object({
    order: z.number(),
    category: z.enum(["flagship", "engagement"]),
    en: localizedProject,
    id: localizedProject,
  }),
});

const localizedInsight = z.object({
  kind: z.string(),
  title: z.string(),
  excerpt: z.string(),
});

const insights = defineCollection({
  loader: glob({ pattern: "*.yaml", base: "./src/content/insights" }),
  schema: z.object({
    order: z.number(),
    forthcoming: z.boolean().default(true),
    href: z.string().optional(),
    en: localizedInsight,
    id: localizedInsight,
  }),
});

const legal = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "./src/content/legal",
    // Without this, en/privacy.md and id/privacy.md both collapse to "privacy"
    // and the later one silently wins.
    generateId: ({ entry }) => entry.replace(/\.md$/, ""),
  }),
  schema: z.object({
    slug: z.enum(["privacy", "terms", "disclaimer"]),
    lang: z.enum(LOCALES),
    title: z.string(),
    description: z.string(),
    intro: z.string(),
    updated: z.string(),
    updatedLabel: z.string(),
    order: z.number(),
  }),
});

export const collections = {
  common,
  home,
  about,
  whatWeDo,
  howWeWork,
  impact,
  partnersPage,
  projectsPage,
  flagshipPage,
  insightsPage,
  contact,
  notFoundPage,
  partners,
  projects,
  insights,
  legal,
};
