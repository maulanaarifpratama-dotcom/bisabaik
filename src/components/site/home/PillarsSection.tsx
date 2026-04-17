import { Link } from "react-router-dom";
import { ArrowRight, Layers, Compass, Recycle } from "lucide-react";

const PILLARS = [
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
];

const PillarsSection = () => {
  return (
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
          {PILLARS.map((p, i) => (
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
  );
};

export default PillarsSection;
