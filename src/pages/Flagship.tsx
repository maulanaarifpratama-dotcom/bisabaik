import Layout from "@/components/site/Layout";
import PageHeader from "@/components/site/PageHeader";
import ProjectCard from "@/components/site/ProjectCard";
import { PROJECTS } from "@/data/site";
import { ArrowUpRight } from "lucide-react";
import heroFlagship from "@/assets/hero-whatwedo.jpg";
import marketImg from "@/assets/pillar-msme.jpg";
import circImg from "@/assets/pillar-circular.jpg";
import exitForwardImg from "@/assets/photos/pdf-uniformed-team.jpg";

const Flagship = () => {
  const flagships = PROJECTS.filter((p) => p.category === "flagship");

  return (
    <Layout
      title="Flagship Initiatives — BisaBaik Foundation"
      description="Exit Forward Model, PasarBaik Impact Supply Aggregator, and the Circular Economy & Waste Management initiative — practical models proving exit can extend impact."
    >
      <PageHeader
        eyebrow="Flagship initiatives"
        title="Practice platforms where exit becomes extension."
        intro="Our flagships are not pilots — they are operating models where method, partnership and post-program viability are continuously refined in the field."
        image={heroFlagship}
        imageAlt="BisaBaik field operations team walking through a rural village pathway"
      />

      {/* Exit Forward Model — feature */}
      <section className="border-b border-border/60">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
          <div className="lg:col-span-6 relative min-h-[360px] lg:min-h-[640px]">
            <img
              src={exitForwardImg}
              alt="BisaBaik field team reviewing exit and transition plans on the ground"
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="lg:col-span-6 p-10 md:p-16 lg:p-20">
            <p className="pillar-num">01</p>
            <h2 className="font-display text-[34px] md:text-[44px] leading-tight mt-4 text-balance">
              Exit Forward Model
            </h2>
            <p className="mt-3 text-[14px] text-muted-foreground italic">Responsible exit & transition model.</p>
            <p className="mt-6 text-[16px] leading-relaxed text-muted-foreground">
              A signature model supporting philanthropic institutions in designing and implementing
              responsible exit strategies — including local ownership transition and impact extension
              through domestic and export market access for UMKM beneficiaries.
            </p>
          </div>
        </div>

        <div className="container-edge py-16 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border border border-border">
            {[
              { title: "Traditional program end", body: "Without a transition strategy, UMKMs revert to dependency.", tag: "Economically vulnerable" },
              { title: "Exit Forward intervention", body: "Exit strategies designed since the beginning. Phased exit, local governance strengthening, post-program capacity development, time-bound mentoring.", tag: "PasarBaik aggregator" },
              { title: "Sustainable independence", body: "Export-ready, stable & growing financials, local ownership.", tag: "Continuity through markets" },
            ].map((b, i) => (
              <div key={i} className="bg-background p-7">
                <p className="pillar-num">{String(i + 1).padStart(2, "0")}</p>
                <p className="font-display text-[18px] leading-tight mt-3">{b.title}</p>
                <p className="mt-4 text-[13.5px] leading-relaxed text-muted-foreground">{b.body}</p>
                <p className="mt-6 text-[11px] uppercase tracking-[0.16em] text-accent">{b.tag}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-[14px] text-foreground/70 italic">
            With this approach, exit does not stop impact — it extends impact through markets.
          </p>

          <div className="mt-12">
            <ProjectCard project={flagships.find((p) => p.slug === "exit-forward-model")!} />
          </div>
        </div>
      </section>

      {/* PasarBaik */}
      <section className="border-b border-border/60">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
          <div className="lg:col-span-6 relative min-h-[360px] lg:min-h-[640px] order-2 lg:order-1">
            <img src={marketImg} alt="MSME entrepreneur preparing premium beans for export channels" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
          </div>
          <div className="lg:col-span-6 p-10 md:p-16 lg:p-20 order-1 lg:order-2">
            <p className="pillar-num">02</p>
            <h2 className="font-display text-[34px] md:text-[44px] leading-tight mt-4 text-balance">
              PasarBaik
            </h2>
            <p className="mt-3 text-[14px] text-muted-foreground italic">Impact Supply Aggregator.</p>
            <p className="mt-6 text-[16px] leading-relaxed text-muted-foreground">
              PasarBaik aggregates philanthropic UMKM supply and matches it to domestic and
              export demand. It is built as a market-based mechanism — sustainability is the
              operating model, not an afterthought.
            </p>

            <div className="mt-10 grid grid-cols-3 gap-px bg-border border border-border">
              {[
                { k: "Aggregator", v: "Demand-supply matching" },
                { k: "Reach", v: "Domestic + export channels" },
                { k: "Anchor", v: "Aid-for-Trade pathway" },
              ].map((s) => (
                <div key={s.k} className="bg-background p-5">
                  <p className="text-[10.5px] uppercase tracking-[0.16em] text-muted-foreground">{s.k}</p>
                  <p className="mt-2 font-display text-[15px] leading-tight">{s.v}</p>
                </div>
              ))}
            </div>

            <a
              href="https://pasarbaik.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex items-center gap-2 bg-primary text-primary-foreground text-[13.5px] px-5 h-11 rounded-sm hover:bg-primary/90 transition-colors"
            >
              Visit PasarBaik <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
        <div className="container-edge py-16">
          <ProjectCard project={flagships.find((p) => p.slug === "pasarbaik")!} />
        </div>
      </section>

      {/* Circular Economy */}
      <section>
        <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
          <div className="lg:col-span-6 p-10 md:p-16 lg:p-20">
            <p className="pillar-num">03</p>
            <h2 className="font-display text-[34px] md:text-[44px] leading-tight mt-4 text-balance">
              Circular Economy & Waste Management
            </h2>
            <p className="mt-3 text-[14px] text-muted-foreground italic">A demonstration model for environmental program viability.</p>
            <p className="mt-6 text-[16px] leading-relaxed text-muted-foreground">
              A financially viable model demonstrating end-to-end delivery capacity with clear
              pathways to independent local management.
            </p>

            <div className="mt-10">
              <p className="eyebrow">Our triple role</p>
              <ul className="mt-5 space-y-3.5 text-[14.5px]">
                <li className="flex gap-3"><span className="pillar-num w-8">01</span> Program implementer</li>
                <li className="flex gap-3"><span className="pillar-num w-8">02</span> Waste management operator</li>
                <li className="flex gap-3"><span className="pillar-num w-8">03</span> Off-taker of processed materials</li>
              </ul>
              <p className="mt-6 text-[13.5px] text-muted-foreground italic">
                This integrated approach minimizes risk for partners.
              </p>
            </div>

            <div className="mt-10 p-6 bg-surface/60 border-l-2 border-accent">
              <p className="text-[14px] leading-relaxed">
                <strong className="font-medium">Strategic relevance.</strong> A demonstration model
                proving environmental programs can be operational, economically viable, and responsibly exited.
              </p>
            </div>
          </div>
          <div className="lg:col-span-6 relative min-h-[360px] lg:min-h-[640px]">
            <img src={circImg} alt="Community waste-bank field staff sorting recyclable plastics" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
          </div>
        </div>
        <div className="container-edge py-16">
          <ProjectCard project={flagships.find((p) => p.slug === "circular-economy-waste")!} />
        </div>
      </section>
    </Layout>
  );
};

export default Flagship;
