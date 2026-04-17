import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import workshopImg from "@/assets/photos/pdf-circle-discussion.jpg";

const PrinciplesSection = () => {
  return (
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
  );
};

export default PrinciplesSection;
