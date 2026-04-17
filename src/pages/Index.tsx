import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, Layers, Compass, Recycle } from "lucide-react";
import Layout from "@/components/site/Layout";
import { PARTNERS, PROJECTS } from "@/data/site";
import heroImg from "@/assets/hero-landscape.jpg";
import workshopImg from "@/assets/photos/workshop.jpg";
import marketImg from "@/assets/msme-market.jpg";

const Index = () => {
  const flagships = PROJECTS.filter((p) => p.category === "flagship");

  return (
    <Layout
      title="BisaBaik Foundation — End-to-End Impact Delivery & Responsible Exit"
      description="Indonesia-based impact delivery partner. Disciplined execution, responsible exit, and post-program sustainability through MSME market continuity."
    >
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img
            src={heroImg}
            alt="Indonesian rural landscape at sunrise — terraced fields and distant volcano"
            className="w-full h-full object-cover"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-background/40 to-background" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-background/30 to-transparent" />
        </div>

        <div className="container-edge pt-40 md:pt-56 pb-24 md:pb-40">
          <p className="eyebrow animate-fade-in">Impact Delivery Partner · Est. Indonesia</p>

          <h1 className="display-xl mt-6 max-w-[16ch] text-balance animate-fade-up">
            Deliver well.<br />
            Exit responsibly.<br />
            <span className="italic font-normal">Sustain impact.</span>
          </h1>

          <p className="mt-10 max-w-xl text-[17px] md:text-[18.5px] leading-relaxed text-foreground/80 text-pretty animate-fade-up">
            Bisa Baik Bersama is an end-to-end impact delivery partner for philanthropic,
            corporate and development institutions — translating program design into accountable,
            on-the-ground implementation, with exit and sustainability built in from day one.
          </p>

          <div className="mt-12 flex flex-wrap items-center gap-3 animate-fade-up">
            <Link
              to="/what-we-do"
              className="group inline-flex items-center gap-2 bg-primary text-primary-foreground text-[13.5px] tracking-[0.01em] px-5 h-11 rounded-sm hover:bg-primary/90 transition-colors"
            >
              How we deliver
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-[13.5px] text-foreground px-5 h-11 link-underline"
            >
              Our engagements
            </Link>
          </div>
        </div>

        {/* Editorial credit strip */}
        <div className="border-t border-border/60 bg-background/80 backdrop-blur-sm">
          <div className="container-edge py-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-[12px] text-muted-foreground">
            <p className="uppercase tracking-[0.18em]">Impact arm of Immers Asia Corp · Operating across Indonesia & Türkiye</p>
            <a
              href="https://pasarbaik.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-foreground link-underline"
            >
              Aggregating supply via PasarBaik <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
        </div>
      </section>

      {/* POSITIONING — three lines, editorial */}
      <section className="container-edge py-24 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <p className="eyebrow">A different posture</p>
          </div>
          <div className="md:col-span-8">
            <p className="font-display text-[28px] md:text-[40px] leading-[1.2] text-balance">
              We are an <span className="italic">implementation partner</span>, not a charity.
              Programs are designed, delivered, and <span className="italic">transitioned</span> —
              so impact continues after we leave.
            </p>
          </div>
        </div>
      </section>

      {/* THREE PILLARS */}
      <section className="border-t border-border/60 py-24 md:py-32">
        <div className="container-edge">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-14">
            <div className="md:col-span-4">
              <p className="eyebrow">What we do</p>
              <h2 className="display-lg mt-4">Three strategic pillars of impact delivery.</h2>
            </div>
            <div className="md:col-span-7 md:col-start-6 self-end">
              <p className="text-[16.5px] leading-relaxed text-muted-foreground max-w-[55ch]">
                Our services are structured to support the full philanthropic program cycle —
                from disciplined execution through responsible exit and post-program economic
                continuity. The pillars are interconnected; exit is considered from the outset.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 border-t border-border/60">
            {[
              {
                num: "01",
                icon: Layers,
                title: "End-to-End Program Implementation",
                body: "Disciplined delivery with execution quality, accountability, and transition readiness — direct or white-label.",
              },
              {
                num: "02",
                icon: Compass,
                title: "Strategic Partner for Philanthropic Exit",
                body: "Design and implementation of responsible exit strategies, transferring ownership to local actors.",
              },
              {
                num: "03",
                icon: Recycle,
                title: "MSME Aggregation & Market Expansion",
                body: "Extending post-program economic impact through domestic and export market access for UMKM.",
              },
            ].map((p, i) => (
              <div
                key={p.num}
                className={`p-8 md:p-10 border-border/60 ${i > 0 ? "md:border-l" : ""} border-b md:border-b-0`}
              >
                <div className="flex items-start justify-between mb-10">
                  <p.icon className="w-5 h-5 text-foreground/70" strokeWidth={1.4} />
                  <span className="pillar-num">{p.num}</span>
                </div>
                <h3 className="font-display text-[22px] leading-snug text-balance">{p.title}</h3>
                <p className="mt-4 text-[14.5px] leading-relaxed text-muted-foreground">{p.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-14">
            <Link to="/what-we-do" className="link-underline text-[14px] inline-flex items-center gap-2">
              Explore our service architecture <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* IMPACT JOURNEY — visual */}
      <section className="bg-surface/50 border-y border-border/60 py-24 md:py-32">
        <div className="container-edge">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-16">
            <div className="md:col-span-5">
              <p className="eyebrow">How we work</p>
              <h2 className="display-lg mt-4 text-balance">
                The Impact Journey: from delivery to responsible exit.
              </h2>
            </div>
            <div className="md:col-span-6 md:col-start-7 self-end">
              <p className="text-[16.5px] leading-relaxed text-muted-foreground">
                Our delivery framework cycles through three reinforcing phases. Each engagement
                is calibrated to where partners need us most — and how they want to exit.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
            {[
              { i: "I", title: "Co-Design for Delivery & Exit", body: "Alignment on program objectives and exit expectations. Implementation planning, exit pathway design, social and operational risk mapping." },
              { i: "II", title: "Co-Create through Accountable Delivery", body: "On-the-ground execution with monitoring, accountability, adaptive learning, and preparation of local systems and governance." },
              { i: "III", title: "Co-Sustain with Responsible Exit", body: "Exit readiness assessment, role and ownership transfer, integration into market mechanisms, and limited post-exit learning." },
            ].map((step) => (
              <div key={step.i} className="bg-background p-8 md:p-10">
                <div className="flex items-baseline justify-between mb-8">
                  <span className="font-display italic text-[42px] leading-none text-foreground/80">{step.i}</span>
                  <span className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">Phase {step.i}</span>
                </div>
                <h3 className="font-display text-[22px] leading-snug text-balance">{step.title}</h3>
                <p className="mt-4 text-[14.5px] leading-relaxed text-muted-foreground">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FLAGSHIP */}
      <section className="container-edge py-24 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-14">
          <div className="md:col-span-5">
            <p className="eyebrow">Flagship initiatives</p>
            <h2 className="display-lg mt-4 text-balance">Models that prove exit can extend impact.</h2>
          </div>
          <div className="md:col-span-6 md:col-start-7 self-end">
            <p className="text-[16.5px] leading-relaxed text-muted-foreground">
              Our flagships are practical platforms where method, model and partnership are
              continuously refined — and where the discipline of disciplined exit is tested in the field.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {flagships.map((p) => (
            <Link
              key={p.slug}
              to="/flagship"
              className="group card-flat p-8 flex flex-col h-full hover:bg-surface/60"
            >
              <p className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">Flagship</p>
              <h3 className="font-display text-[24px] leading-snug mt-4 text-balance">{p.title}</h3>
              <p className="mt-4 text-[14.5px] leading-relaxed text-muted-foreground flex-1">{p.context}</p>
              <span className="mt-8 inline-flex items-center gap-2 text-[13px] text-foreground link-underline">
                View model <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* IMAGE EDITORIAL — workshop */}
      <section className="border-t border-border/60">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
          <div className="lg:col-span-7 relative min-h-[360px] lg:min-h-[560px]">
            <img
              src={workshopImg}
              alt="BisaBaik field team in a participatory community workshop"
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="lg:col-span-5 p-10 md:p-16 lg:p-20 bg-foreground text-background flex flex-col justify-center">
            <p className="text-[11px] uppercase tracking-[0.18em] text-background/60">Three principles</p>
            <h2 className="font-display text-[32px] md:text-[40px] leading-tight mt-4 text-balance">
              Community-centered. Data-driven. Risk-aware.
            </h2>
            <p className="mt-6 text-[15px] leading-relaxed text-background/80">
              The community is a subject of change, not its object. Decisions are grounded in
              baseline studies, monitoring and reflection. Every stage is delivered within a
              comprehensive social and operational risk framework.
            </p>
            <Link
              to="/about"
              className="mt-10 inline-flex items-center gap-2 text-[13.5px] text-background"
            >
              Read about our approach <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* PARTNERS strip */}
      <section className="container-edge py-24 md:py-32">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <p className="eyebrow">Trusted by</p>
            <h2 className="display-lg mt-4 max-w-[20ch] text-balance">Institutions choosing accountable delivery.</h2>
          </div>
          <Link to="/partners" className="link-underline text-[14px] inline-flex items-center gap-2">
            All partners & collaborations <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-px bg-border border border-border">
          {PARTNERS.slice(0, 10).map((p) => (
            <div
              key={p.name}
              className="bg-background aspect-[5/3] p-5 flex flex-col justify-between hover:bg-surface/60 transition-colors"
            >
              <p className="font-display text-[15px] leading-tight text-balance">{p.name}</p>
              <p className="text-[10.5px] uppercase tracking-[0.16em] text-muted-foreground">{p.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border/60">
        <div className="container-edge py-24 md:py-32">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-end">
            <div className="md:col-span-7">
              <p className="eyebrow">Partner with us</p>
              <h2 className="display-lg mt-4 text-balance">
                Designing your next program with exit in mind?
              </h2>
              <p className="mt-6 max-w-xl text-[16.5px] leading-relaxed text-muted-foreground">
                We work with partners who view delivery, exit and sustainability as one
                integrated process. If that resonates, let's talk.
              </p>
            </div>
            <div className="md:col-span-5 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground text-[13.5px] px-5 h-11 rounded-sm hover:bg-primary/90 transition-colors"
              >
                Start a conversation <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="https://pasarbaik.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-border text-[13.5px] px-5 h-11 rounded-sm hover:border-foreground transition-colors"
              >
                Visit PasarBaik <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
