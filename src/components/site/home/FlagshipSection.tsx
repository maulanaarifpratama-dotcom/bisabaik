import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { PROJECTS } from "@/data/site";

const FlagshipSection = () => {
  const flagships = PROJECTS.filter((p) => p.category === "flagship");

  return (
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
  );
};

export default FlagshipSection;
