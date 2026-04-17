import Layout from "@/components/site/Layout";
import PageHeader from "@/components/site/PageHeader";
import PartnerCard from "@/components/site/PartnerCard";
import { PARTNERS, PARTNER_GROUPS } from "@/data/site";

const Partners = () => (
  <Layout
    title="Partners & Collaborations — BisaBaik Foundation"
    description="Philanthropic, corporate, government and development partners who choose BisaBaik for accountable delivery, responsible exit and post-program continuity."
  >
    <PageHeader
      eyebrow="Partners & Collaborations"
      title="Institutions choosing accountable delivery."
      intro="We work with partners who treat delivery, exit and sustainability as one integrated process. Each collaboration is described by role and context — not a logo wall."
    />

    {PARTNER_GROUPS.map((group, i) => {
      const groupPartners = PARTNERS.filter((p) => p.category === group.key);
      if (!groupPartners.length) return null;
      return (
        <section
          key={group.key}
          className={`container-edge py-20 md:py-24 ${i < PARTNER_GROUPS.length - 1 ? "border-b border-border/60" : ""}`}
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 mb-10">
            <div className="md:col-span-4">
              <p className="pillar-num">{String(i + 1).padStart(2, "0")}</p>
              <p className="eyebrow mt-3">{group.label}</p>
            </div>
            <div className="md:col-span-8">
              <h2 className="font-display text-[28px] md:text-[34px] leading-tight text-balance">{group.label}</h2>
              <p className="mt-4 text-[15.5px] leading-relaxed text-muted-foreground max-w-[60ch]">{group.blurb}</p>
            </div>
          </div>

          <div>
            {groupPartners.map((p) => <PartnerCard key={p.name} partner={p} />)}
          </div>
        </section>
      );
    })}
  </Layout>
);

export default Partners;
