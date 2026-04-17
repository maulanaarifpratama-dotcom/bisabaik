import Layout from "@/components/site/Layout";
import PageHeader from "@/components/site/PageHeader";
import { ArrowUpRight } from "lucide-react";

const PIECES = [
  {
    type: "Framework",
    title: "Why exit must be designed, not declared",
    excerpt: "A practical reflection on integrating exit strategy into program design from day one — and the recurring failure modes when it is added at the end.",
    forthcoming: true,
  },
  {
    type: "Field note",
    title: "Aggregation as exit: PasarBaik in practice",
    excerpt: "How market-based mechanisms convert beneficiary cohorts into supply communities — and what that asks of partners.",
    forthcoming: true,
  },
  {
    type: "Method brief",
    title: "Risk-aware delivery in transition contexts",
    excerpt: "Operating with discipline while remaining adaptive: notes from circular-economy and disaster-response engagements.",
    forthcoming: true,
  },
];

const Insights = () => (
  <Layout
    title="Insights — BisaBaik Foundation"
    description="Frameworks, field notes and method briefs from BisaBaik on impact delivery, responsible exit and post-program economic continuity."
  >
    <PageHeader
      eyebrow="Insights"
      title="Practice notes from delivery and exit."
      intro="A growing library of frameworks, field notes and method briefs — written for institutional partners who want to think rigorously about what happens after the program ends."
    />

    <section className="container-edge py-20 md:py-28">
      <div className="border-y border-border/60">
        {PIECES.map((p, i) => (
          <article key={i} className="group grid grid-cols-12 gap-6 py-10 border-b border-border/60 last:border-b-0 hover:bg-surface/40 transition-colors px-2 md:px-4 -mx-2 md:-mx-4">
            <div className="col-span-12 md:col-span-2">
              <p className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">{p.type}</p>
            </div>
            <div className="col-span-12 md:col-span-8">
              <h3 className="font-display text-[22px] md:text-[26px] leading-snug text-balance">{p.title}</h3>
              <p className="mt-3 text-[14.5px] leading-relaxed text-muted-foreground max-w-[60ch]">{p.excerpt}</p>
            </div>
            <div className="col-span-12 md:col-span-2 flex md:justify-end items-start">
              {p.forthcoming ? (
                <span className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">Forthcoming</span>
              ) : (
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              )}
            </div>
          </article>
        ))}
      </div>

      <div className="mt-20 p-8 md:p-12 bg-surface/50 border border-border/60 grid grid-cols-1 md:grid-cols-12 gap-8">
        <div className="md:col-span-7">
          <p className="eyebrow">Briefings for institutional partners</p>
          <h2 className="font-display text-[26px] md:text-[32px] leading-tight mt-4 text-balance">
            Request a tailored briefing for your team.
          </h2>
          <p className="mt-4 text-[15px] text-muted-foreground max-w-[55ch]">
            We deliver private briefings on Exit Forward, MSME aggregation, and risk-aware delivery
            for philanthropic, corporate and development partners.
          </p>
        </div>
        <div className="md:col-span-5 flex md:items-end md:justify-end">
          <a
            href="mailto:info@bisabaik.or.id?subject=Insights%20Briefing%20Request"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground text-[13.5px] px-5 h-11 rounded-sm hover:bg-primary/90 transition-colors"
          >
            Request a briefing <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  </Layout>
);

export default Insights;
