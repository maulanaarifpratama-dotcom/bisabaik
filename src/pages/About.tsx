import Layout from "@/components/site/Layout";
import PageHeader from "@/components/site/PageHeader";
import SectionLabel from "@/components/site/SectionLabel";
import heroAbout from "@/assets/photos/pdf-children-community.jpg";
import teamImg from "@/assets/photos/pdf-produce-baskets.jpg";
import fieldImg from "@/assets/hero-howework.jpg";

const TEAM = [
  { name: "Dasril Guntara", role: "Managing Partner" },
  { name: "Wiwip Wilevy", role: "Executive Director" },
  { name: "Fariz Adlan S.", role: "Program Director" },
  { name: "Maulana Arif", role: "Marketing Director" },
  { name: "Handriyana", role: "Finance Director" },
  { name: "Raisa Annisa", role: "Program Manager" },
];

const NETWORK = [
  "Impact Delivery, MEAL & Exit Strategy",
  "UMKM Strengthening & Market Continuity",
  "Market Expansion & Value Chain Development",
  "Digital Business & Sharia Economic Models",
  "Circular Economy & Waste-to-Value Systems",
  "Community Learning & Capacity Building",
  "Sustainable & Commodity-Based Value Chains",
];

const About = () => (
  <Layout
    title="About — BisaBaik Foundation"
    description="Bisa Baik Bersama is the impact delivery arm of Immers Asia Corp — translating impact advisory and program design into accountable on-the-ground implementation."
    breadcrumbs={[{ name: "About", path: "/about" }]}
  >
    <PageHeader
      eyebrow="About"
      title="An impact delivery partner — not a charity."
      intro="Bisa Baik Bersama is an end-to-end impact delivery partner focused on ensuring that development programs are not only well implemented, but responsibly transitioned and sustained beyond external support. We are the implementation arm of Immers Asia Corp."
      image={heroAbout}
      imageAlt="Indonesian community children — programs that put people first"
    />

    {/* Vision */}
    <section className="container-edge py-24 md:py-32 border-b border-border/60">
      <SectionLabel
        number="01"
        eyebrow="Vision"
        title="Programs that are effectively delivered, responsibly transitioned, and sustained beyond external support."
      />

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 mt-12">
        <div className="md:col-span-4">
          <p className="eyebrow">Mission</p>
        </div>
        <div className="md:col-span-8 space-y-6">
          {[
            "Provide end-to-end impact delivery with disciplined and measurable implementation.",
            "Design and support responsible exit and transition through strengthened local capacity and governance.",
            "Apply risk-aware and accountable practices across all stages of intervention.",
            "Extend program impact through post-program economic continuity — including domestic and export market access for UMKM.",
          ].map((m, i) => (
            <div key={i} className="grid grid-cols-12 gap-4 pb-6 border-b border-border/60 last:border-b-0">
              <span className="col-span-2 md:col-span-1 pillar-num">0{i + 1}</span>
              <p className="col-span-10 md:col-span-11 text-[16.5px] leading-relaxed text-foreground/85 text-pretty">{m}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Why us */}
    <section className="border-b border-border/60">
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="lg:col-span-5 relative min-h-[360px] lg:min-h-full order-2 lg:order-1">
          <img src={fieldImg} alt="BisaBaik field team coordination meeting" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
        </div>
        <div className="lg:col-span-7 p-10 md:p-16 lg:p-24 order-1 lg:order-2">
          <p className="eyebrow">Why partners choose us</p>
          <h2 className="display-lg mt-4 text-balance">Execution discipline meets exit-aware design.</h2>
          <p className="mt-6 text-[16.5px] leading-relaxed text-muted-foreground">
            Impact initiatives often lose momentum after funding ends — not from poor design,
            but from missing execution, transition, and exit strategies. We turn advisory
            insights into measurable actions while ensuring partners retain strategic ownership and program visibility.
          </p>
          <ul className="mt-10 space-y-4">
            {[
              "End-to-end delivery with a clearly defined exit pathway.",
              "Direct or white-label execution aligned with partner needs.",
              "Disciplined risk management, accountability and reporting.",
              "Local ownership transfer and post-program sustainability.",
            ].map((item, i) => (
              <li key={i} className="flex items-baseline gap-4 pb-4 border-b border-border/60">
                <span className="pillar-num shrink-0 w-8">0{i + 1}</span>
                <span className="text-[15px] leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>

    {/* Team */}
    <section className="container-edge py-24 md:py-32 border-b border-border/60">
      <SectionLabel
        number="02"
        eyebrow="Our impact driver"
        title="A team grounded in field practice and cross-sectoral design."
        intro="Experience spans community facilitation, program management and cross-sectoral social intervention design — applied with a collaborative, reflective and sustainability-oriented approach."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
        {TEAM.map((m) => (
          <div key={m.name} className="bg-background p-8 hover:bg-surface/60 transition-colors">
            <p className="font-display text-[20px] leading-tight">{m.name}</p>
            <p className="text-[12.5px] uppercase tracking-[0.16em] text-muted-foreground mt-2">{m.role}</p>
          </div>
        ))}
      </div>
    </section>

    {/* Associate Network */}
    <section className="bg-surface/50 border-b border-border/60 py-24 md:py-32">
      <div className="container-edge">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <p className="eyebrow">Associate Expert Network</p>
            <h2 className="display-lg mt-4 text-balance">Activated contextually, by program need.</h2>
            <p className="mt-6 text-[16.5px] leading-relaxed text-muted-foreground">
              For specific thematic needs, programs are strengthened by an Associate Expert Network
              that supports quality assurance, methodological depth and knowledge transfer.
            </p>
            <div className="mt-10 relative aspect-[4/3] overflow-hidden">
              <img src={teamImg} alt="Associate experts and program partners" className="w-full h-full object-cover" loading="lazy" />
            </div>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <ol className="divide-y divide-border/60 border-y border-border/60">
              {NETWORK.map((n, i) => (
                <li key={n} className="py-5 flex items-baseline gap-6">
                  <span className="pillar-num w-10 shrink-0">{String(i + 1).padStart(2, "0")}</span>
                  <span className="text-[15.5px] leading-relaxed">{n}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default About;
