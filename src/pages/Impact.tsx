import Layout from "@/components/site/Layout";
import PageHeader from "@/components/site/PageHeader";
import SectionLabel from "@/components/site/SectionLabel";
import { MapPin } from "lucide-react";
import heroImpact from "@/assets/hero-impact.jpg";
import livelihoodImg from "@/assets/pillar-msme.jpg";

const PRESENCE = [
  { region: "Western Indonesia", places: ["Jakarta", "Banten", "West Java", "Lampung", "South Sumatra"] },
  { region: "Central Indonesia", places: ["Central Java", "Yogyakarta", "East Java", "Bali", "NTB"] },
  { region: "Eastern Indonesia", places: ["NTT", "South Sulawesi", "Maluku"] },
  { region: "International", places: ["Türkiye — Adıyaman & Hatay"] },
];

const SDGS = [
  {
    code: "SDG 8",
    title: "Decent Work & Economic Growth",
    focus: "Strengthening post-program livelihoods through UMKM, youth engagement and market access.",
    targets: [
      "8.2 — Improving economic productivity through UMKM diversification, upgrading and market readiness.",
      "8.3 — Strengthening entrepreneurship and MSME growth through implementation support and market access.",
      "8.6 — Engaging youth in productive economic activities through community-based enterprises.",
      "8.9 — Supporting community-based local economies linked to culture and local products.",
      "8.a — Expanding domestic and export market access as part of post-program sustainability and Aid for Trade pathways.",
    ],
  },
  {
    code: "SDG 12",
    title: "Responsible Consumption & Production",
    focus: "Embedding community-based circular economy practices to reduce waste and improve efficiency.",
    targets: [
      "12.2 — Promoting efficient resource use through circular economy and waste management systems.",
      "12.3 — Reducing food loss and waste within community and local supply chain contexts.",
      "12.5 — Preventing, reducing, recycling and reusing waste as core practices.",
      "12.6 — Encouraging sustainable practices and accountability among philanthropic and corporate partners.",
      "12.8 — Building community awareness and knowledge on sustainable development and lifestyles.",
    ],
  },
];

const Impact = () => (
  <Layout
    title="Impact — BisaBaik Foundation"
    description="Our impact presence across communities in Indonesia and Türkiye, and contribution to SDG 8 and SDG 12 through post-program economic continuity and circular economy practices."
  >
    <PageHeader
      eyebrow="Impact"
      title="Presence across communities. Continuity across markets."
      intro="Our impact is read in the discipline of delivery, the integrity of exit, and the durability of livelihoods after we leave. Below: where we work, what we contribute to, and how we measure relevance."
      image={heroImpact}
      imageAlt="Aerial view of an Indonesian coastal village at dawn"
    />

    {/* Presence */}
    <section className="container-edge py-24 md:py-32 border-b border-border/60">
      <SectionLabel number="01" eyebrow="Impact presence" title="Working across Indonesia, with reach into Türkiye." />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border">
        {PRESENCE.map((r) => (
          <div key={r.region} className="bg-background p-7">
            <div className="flex items-center gap-2 text-foreground/70 mb-5">
              <MapPin className="w-4 h-4" strokeWidth={1.4} />
              <p className="text-[11px] uppercase tracking-[0.16em]">{r.region}</p>
            </div>
            <ul className="space-y-2 text-[14px]">
              {r.places.map((p) => <li key={p}>— {p}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </section>

    {/* Livelihood image — community context */}
    <section className="border-b border-border/60">
      <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
        <div className="lg:col-span-6 relative min-h-[360px] lg:min-h-[520px]">
          <img
            src={livelihoodImg}
            alt="Indonesian MSME entrepreneur preparing premium coffee beans for market"
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="lg:col-span-6 p-10 md:p-14 lg:p-20 bg-foreground text-background flex flex-col justify-center">
          <p className="text-[11px] uppercase tracking-[0.18em] text-background/60">Livelihoods, sustained</p>
          <h2 className="font-display text-[28px] md:text-[36px] leading-tight mt-4 text-balance">
            Impact endures when markets keep paying.
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed text-background/80">
            Behind every flagship is a network of MSME producers, cooperatives, and
            community institutions earning income from the same systems we helped build.
            That continuity is our operating definition of impact.
          </p>
        </div>
      </div>
    </section>

    {/* SDG */}
    <section className="container-edge py-24 md:py-32 border-b border-border/60">
      <SectionLabel
        number="02"
        eyebrow="SDG context & contribution"
        title="Anchored in SDG 8 and SDG 12."
        intro="Our approach is grounded in the development challenges articulated under post-program economic continuity and responsible resource management."
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {SDGS.map((s) => (
          <article key={s.code} className="card-flat p-8 md:p-10">
            <div className="flex items-baseline gap-4 pb-6 border-b border-border/60">
              <span className="font-display text-[42px] leading-none text-accent">{s.code.split(" ")[1]}</span>
              <div>
                <p className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">{s.code}</p>
                <h3 className="font-display text-[22px] leading-snug mt-1">{s.title}</h3>
              </div>
            </div>
            <p className="mt-6 text-[14.5px] leading-relaxed text-foreground/85 italic">{s.focus}</p>
            <ul className="mt-6 space-y-3 text-[13.5px] leading-relaxed text-muted-foreground">
              {s.targets.map((t) => <li key={t}>{t}</li>)}
            </ul>
          </article>
        ))}
      </div>
    </section>

    {/* How we read impact */}
    <section className="container-edge py-24 md:py-32">
      <SectionLabel number="03" eyebrow="How we read impact" title="Signals over slogans." />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border border border-border">
        {[
          { title: "Delivery quality", body: "Execution discipline measured through milestones, accountability and risk closure." },
          { title: "Transition readiness", body: "Local institutional, governance and leadership strength at exit." },
          { title: "Post-program continuity", body: "Market access, livelihoods, and operational sustainability beyond the grant period." },
        ].map((b) => (
          <div key={b.title} className="bg-background p-10">
            <h3 className="font-display text-[22px] leading-snug">{b.title}</h3>
            <p className="mt-4 text-[14.5px] leading-relaxed text-muted-foreground">{b.body}</p>
          </div>
        ))}
      </div>
    </section>
  </Layout>
);

export default Impact;
