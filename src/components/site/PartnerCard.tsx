import { Partner } from "@/data/site";

const PartnerCard = ({ partner }: { partner: Partner }) => (
  <article className="group border-t border-border/60 py-7 first:border-t-0 grid grid-cols-12 gap-4">
    <div className="col-span-12 md:col-span-5">
      <h3 className="font-display text-[20px] leading-snug text-balance">{partner.name}</h3>
      <p className="text-[12px] uppercase tracking-[0.16em] text-muted-foreground mt-2">{partner.role}</p>
    </div>
    <div className="col-span-12 md:col-span-7">
      <p className="text-[14.5px] leading-relaxed text-foreground/85 text-pretty">{partner.context}</p>
    </div>
  </article>
);

export default PartnerCard;
