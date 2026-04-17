import { Partner } from "@/data/site";

const PartnerCard = ({ partner }: { partner: Partner }) => (
  <article className="group relative border-t border-border/60 py-7 first:border-t-0 grid grid-cols-12 gap-4 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5">
    {/* Hairline accent that scales in from the left on hover */}
    <span
      aria-hidden
      className="absolute left-0 top-0 h-px w-full bg-foreground origin-left scale-x-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100 group-first:hidden"
    />
    <div className="col-span-12 md:col-span-5">
      <h3 className="font-display text-[20px] leading-snug text-balance transition-colors duration-500 group-hover:text-foreground">
        {partner.name}
      </h3>
      <p className="text-[12px] uppercase tracking-[0.16em] text-muted-foreground mt-2 transition-colors duration-500 group-hover:text-secondary">
        {partner.role}
      </p>
    </div>
    <div className="col-span-12 md:col-span-7">
      <p className="text-[14.5px] leading-relaxed text-foreground/85 text-pretty">{partner.context}</p>
    </div>
  </article>
);

export default PartnerCard;
