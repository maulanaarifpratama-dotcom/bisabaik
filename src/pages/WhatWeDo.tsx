import Layout from "@/components/site/Layout";
import PageHeader from "@/components/site/PageHeader";
import SectionLabel from "@/components/site/SectionLabel";

const PILLARS = [
  {
    num: "01",
    title: "End-to-End Program Implementation",
    purpose: "To deliver programs as a planned transition process toward independence — not merely as a set of activities.",
    deliverables: [
      "Program implementation plan & field coordination framework",
      "On-the-ground delivery (direct or white-label)",
      "Risk register and mitigation actions",
      "Monitoring, accountability and results-based reporting",
      "Exit pathway integrated into program delivery",
    ],
    value: [
      "Consistent and accountable execution quality",
      "Early management of implementation and reputational risks",
      "Partners retain strategic ownership and program visibility",
      "Programs prepared for transition, not dependency",
    ],
    workflow: [
      "Implementation scoping and partner alignment",
      "Field mobilization and local coordination",
      "Adaptive, iterative program delivery",
      "Monitoring, reporting and learning",
      "Transition preparation toward exit",
    ],
  },
  {
    num: "02",
    title: "Strategic Partner for Philanthropic Exit Strategy",
    purpose: "To position responsible exit as a strategic phase within the impact cycle.",
    deliverables: [
      "Exit strategy and transition roadmap",
      "Exit readiness assessment",
      "Local institutional and leadership strengthening plan",
      "Governance and role transfer framework",
      "Post-exit monitoring and learning brief",
    ],
    value: [
      "Exit is measured, phased, and responsible",
      "Reduced risk of post-program failure",
      "Sustained benefits through clear local ownership",
      "Exit strengthens, rather than undermines, partner reputation",
    ],
    workflow: [
      "Exit intent alignment and risk assessment",
      "Exit design and readiness mapping",
      "Capacity transfer and governance transition",
      "Phased withdrawal and ownership handover",
      "Post-exit check-in and learning capture",
    ],
  },
  {
    num: "03",
    title: "MSME Aggregation & Market Expansion",
    purpose: "To use market access as an economic exit mechanism for philanthropic programs.",
    deliverables: [
      "MSME aggregation through PasarBaik mechanism",
      "Demand-supply matching across domestic and export channels",
      "Quality, compliance and packaging readiness",
      "Off-take coordination with industrial and retail buyers",
      "Time-bound mentoring through transition",
    ],
    value: [
      "Economic impact continues beyond grant periods",
      "Reduced dependency on follow-up assistance",
      "Clear and tangible sustainability pathways",
      "Long-term impact is easier to communicate",
    ],
    workflow: [
      "MSME readiness diagnostic",
      "Aggregation onboarding via PasarBaik",
      "Buyer matching and order facilitation",
      "Quality and compliance support",
      "Time-bound mentoring and graduation",
    ],
  },
];

const PillarBlock = ({ p }: { p: typeof PILLARS[number] }) => (
  <article className="border-t border-border/60 py-16 md:py-24 first:border-t-0">
    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
      <header className="md:col-span-4 md:sticky md:top-28 self-start">
        <p className="pillar-num">Pillar {p.num}</p>
        <h2 className="font-display text-[28px] md:text-[34px] leading-tight mt-4 text-balance">{p.title}</h2>
        <p className="mt-5 text-[15px] leading-relaxed text-muted-foreground italic">{p.purpose}</p>
      </header>

      <div className="md:col-span-8 grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div>
          <p className="eyebrow">Key deliverables</p>
          <ul className="mt-5 space-y-3.5">
            {p.deliverables.map((d) => (
              <li key={d} className="flex gap-3 text-[14.5px] leading-relaxed">
                <span className="text-foreground/40 mt-1.5">▪</span>
                <span>{d}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="eyebrow">Value for partners</p>
          <ul className="mt-5 space-y-3.5">
            {p.value.map((d) => (
              <li key={d} className="flex gap-3 text-[14.5px] leading-relaxed">
                <span className="text-foreground/40 mt-1.5">▪</span>
                <span>{d}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-2 mt-4 pt-8 border-t border-border/60">
          <p className="eyebrow">Delivery workflow</p>
          <ol className="mt-6 grid grid-cols-1 md:grid-cols-5 gap-px bg-border border border-border">
            {p.workflow.map((step, i) => (
              <li key={step} className="bg-background p-5">
                <p className="pillar-num">{String(i + 1).padStart(2, "0")}</p>
                <p className="mt-3 text-[13.5px] leading-snug">{step}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  </article>
);

const WhatWeDo = () => (
  <Layout
    title="What We Do — BisaBaik Foundation"
    description="Three strategic pillars of impact delivery: end-to-end implementation, philanthropic exit strategy, and MSME aggregation through PasarBaik."
  >
    <PageHeader
      eyebrow="What we do"
      title="End-to-end impact delivery, with exit in mind."
      intro="We provide end-to-end implementation capacity for philanthropic and development partners — ensuring that exit and sustainability are integrated into program delivery, not treated as an afterthought."
    />

    <section className="container-edge py-20 md:py-28 border-b border-border/60">
      <SectionLabel
        eyebrow="Our role typically includes"
        title="A delivery posture, not a deliverables list."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
        {[
          "Implementation planning and field coordination",
          "Direct or white-label execution aligned with partner needs",
          "Risk management, accountability and results reporting",
          "Local capacity strengthening and transition readiness",
          "Exit support and post-program continuity",
          "Aggregation and market continuity via PasarBaik",
        ].map((r) => (
          <div key={r} className="bg-background p-7 text-[14.5px] leading-relaxed">{r}</div>
        ))}
      </div>
    </section>

    <section className="container-edge">
      {PILLARS.map((p) => (
        <PillarBlock key={p.num} p={p} />
      ))}
    </section>
  </Layout>
);

export default WhatWeDo;
