import Layout from "@/components/site/Layout";
import PageHeader from "@/components/site/PageHeader";
import PartnerCard from "@/components/site/PartnerCard";
import { PARTNERS, PARTNER_GROUPS, type PartnerCategory } from "@/data/site";
import heroPartners from "@/assets/hero-partners.jpg";
import imgPhilanthropic from "@/assets/photos/pdf-children-community.jpg";
import imgCorporate from "@/assets/photos/pdf-uniformed-team.jpg";
import imgDevelopment from "@/assets/photos/pdf-circle-discussion.jpg";
import imgGovernment from "@/assets/photos/pdf-produce-baskets.jpg";

const CATEGORY_IMAGE: Record<PartnerCategory, { src: string; alt: string }> = {
  philanthropic: { src: imgPhilanthropic, alt: "Community children — programs partnered with philanthropic institutions" },
  corporate:     { src: imgCorporate,     alt: "Corporate program review with field operations team" },
  development:   { src: imgDevelopment,   alt: "Co-design dialogue with development partners and community members" },
  government:    { src: imgGovernment,    alt: "MSME aggregation supporting government-backed market continuity" },
};

const Partners = () => (
  <Layout
    title="Partners & Collaborations — BisaBaik Foundation"
    description="Philanthropic, corporate, government and development partners who choose BisaBaik for accountable delivery, responsible exit and post-program continuity."
  >
    <PageHeader
      eyebrow="Partners & Collaborations"
      title="Institutions choosing accountable delivery."
      intro="We work with partners who treat delivery, exit and sustainability as one integrated process. Each collaboration is described by role and context — not a logo wall."
      image={heroPartners}
      imageAlt="Coordination meeting between Indonesian institutional partners"
    />

    {PARTNER_GROUPS.map((group, i) => {
      const groupPartners = PARTNERS.filter((p) => p.category === group.key);
      if (!groupPartners.length) return null;
      const img = CATEGORY_IMAGE[group.key];
      return (
        <section
          key={group.key}
          className={`container-edge py-20 md:py-24 ${i < PARTNER_GROUPS.length - 1 ? "border-b border-border/60" : ""}`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-12">
            <div className="lg:col-span-4">
              <p className="pillar-num">{String(i + 1).padStart(2, "0")}</p>
              <p className="eyebrow mt-3">{group.label}</p>
              <h2 className="font-display text-[28px] md:text-[34px] leading-tight mt-4 text-balance">{group.label}</h2>
              <p className="mt-4 text-[15.5px] leading-relaxed text-muted-foreground max-w-[40ch]">{group.blurb}</p>
            </div>
            <div className="lg:col-span-8">
              <div className="relative aspect-[16/9] overflow-hidden rounded-sm">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
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
