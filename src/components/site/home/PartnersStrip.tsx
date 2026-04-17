import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { PARTNERS } from "@/data/site";

const PartnersStrip = () => {
  return (
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
  );
};

export default PartnersStrip;
