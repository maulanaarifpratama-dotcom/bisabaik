import Layout from "@/components/site/Layout";
import PageHeader from "@/components/site/PageHeader";
import SectionLabel from "@/components/site/SectionLabel";
import trainingImg from "@/assets/photos/training-session.jpg";

const PHASES = [
  {
    roman: "I",
    title: "Co-Design for Delivery & Exit",
    sub: "Designing programs that are implementable, accountable, and exit-aware.",
    items: [
      "Alignment on program objectives and exit expectations",
      "Implementation planning and exit pathway design",
      "Social, operational and institutional risk mapping",
      "Identification of local capacities and long-term roles",
    ],
  },
  {
    roman: "II",
    title: "Co-Create through Accountable Delivery",
    sub: "Delivering programs with monitoring, learning and operational discipline.",
    items: [
      "Adaptive program execution with clear milestones",
      "Monitoring, accountability and adaptive learning",
      "Preparation of local systems, leadership and governance",
      "Risk-aware adjustments grounded in field realities",
    ],
  },
  {
    roman: "III",
    title: "Co-Sustain with Responsible Exit",
    sub: "Extending impact beyond programs through systems, markets and partnerships.",
    items: [
      "Exit readiness assessment with the Exit Forward Model",
      "Transition of roles and ownership to local actors",
      "Integration into market mechanisms and livelihoods",
      "Limited post-exit check-ins and learning capture",
    ],
  },
];

const RISKS = [
  { label: "Social & Contextual Risks", body: "Community dynamics, power relations and local acceptance." },
  { label: "Operational & Implementation Risks", body: "Partner capacity, field coordination and execution consistency." },
  { label: "Sustainability & Exit Risks", body: "Institutional readiness, local ownership and post-program dependency." },
  { label: "Reputational & Accountability Risks", body: "Compliance, transparency and clarity of roles." },
];

const HowWeWork = () => (
  <Layout
    title="How We Work — BisaBaik Foundation"
    description="Our Impact Journey Model and risk-aware approach: co-design, co-create, and co-sustain — with exit considered from the outset."
  >
    <PageHeader
      eyebrow="How we work"
      title="A delivery framework that treats exit as a phase — not an event."
      intro="Across every engagement we move through three reinforcing phases. Programs are designed for implementation, exit and sustainability — together."
    />

    {/* Journey */}
    <section className="container-edge py-24 md:py-32 border-b border-border/60">
      <SectionLabel number="01" eyebrow="Impact Journey Model" title="Co-Design · Co-Create · Co-Sustain." />

      <div className="space-y-px bg-border border border-border">
        {PHASES.map((p) => (
          <div key={p.roman} className="bg-background grid grid-cols-1 md:grid-cols-12 gap-8 p-8 md:p-12">
            <div className="md:col-span-3">
              <p className="font-display italic text-[64px] leading-none text-foreground/80">{p.roman}</p>
              <p className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground mt-3">Phase {p.roman}</p>
            </div>
            <div className="md:col-span-9">
              <h3 className="font-display text-[26px] md:text-[30px] leading-tight text-balance">{p.title}</h3>
              <p className="mt-3 text-[15px] text-muted-foreground italic">{p.sub}</p>
              <ul className="mt-7 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-3.5">
                {p.items.map((i) => (
                  <li key={i} className="text-[14.5px] leading-relaxed flex gap-3">
                    <span className="text-foreground/40 mt-1.5">▪</span>{i}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* Risk-aware */}
    <section className="bg-surface/50 border-b border-border/60">
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="lg:col-span-5 relative min-h-[360px] lg:min-h-full">
          <img src={trainingImg} alt="Training and risk review session in the field" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
        </div>
        <div className="lg:col-span-7 p-10 md:p-16 lg:p-24">
          <p className="eyebrow">Risk-aware program delivery</p>
          <h2 className="display-lg mt-4 text-balance">Discipline that remains responsive to field realities.</h2>
          <p className="mt-6 text-[16.5px] leading-relaxed text-muted-foreground">
            Development programs are complex — particularly in exit and sustainability. Our risk-aware
            approach maintains relevance and accountability throughout delivery and transition.
          </p>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-px bg-border border border-border">
            {RISKS.map((r) => (
              <div key={r.label} className="bg-background p-6">
                <p className="text-[12px] uppercase tracking-[0.16em] text-foreground">{r.label}</p>
                <p className="mt-3 text-[13.5px] leading-relaxed text-muted-foreground">{r.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <p className="eyebrow">How we manage risk</p>
            <ul className="mt-5 space-y-2.5 text-[14.5px]">
              <li>— Early risk identification during design and initial execution</li>
              <li>— Continuous monitoring and adaptive adjustments</li>
              <li>— Integration of learning into delivery and exit decisions</li>
              <li>— Accountable documentation and reporting</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    {/* Principles recap */}
    <section className="container-edge py-24 md:py-32">
      <SectionLabel number="02" eyebrow="Fundamental principles" title="Three principles that reinforce each other." />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border border border-border">
        {[
          { title: "Community-Centered", body: "Starting from the needs, values, aspirations and real dynamics of the community. The community is a subject of change, not its object." },
          { title: "Data-Driven", body: "Decisions are driven by baseline studies, continuous monitoring, in-depth evaluation and systematic learning reflection." },
          { title: "Risk-Aware", body: "Each stage of the program is managed within a comprehensive social and operational risk management framework." },
        ].map((p) => (
          <div key={p.title} className="bg-background p-10">
            <h3 className="font-display text-[24px] leading-snug">{p.title}</h3>
            <p className="mt-5 text-[14.5px] leading-relaxed text-muted-foreground">{p.body}</p>
          </div>
        ))}
      </div>
    </section>
  </Layout>
);

export default HowWeWork;
