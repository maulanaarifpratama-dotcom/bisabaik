import HeroParallax from "./HeroParallax";
import Reveal from "./Reveal";

interface PageHeaderProps {
  eyebrow: string;
  title: string;
  intro?: string;
  image?: string;
  imageAlt?: string;
}

const PageHeader = ({ eyebrow, title, intro, image, imageAlt }: PageHeaderProps) => {
  if (image) {
    return (
      <section className="relative overflow-hidden isolate border-b border-border/60">
        <HeroParallax
          src={image}
          alt={imageAlt || ""}
          priority
          overlay={
            <>
              <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/55 to-background" />
              <div className="absolute inset-0 bg-gradient-to-r from-background/85 via-background/55 to-background/10" />
            </>
          }
        />
        <div className="container-edge pt-28 md:pt-40 pb-16 md:pb-24">
          <Reveal as="div">
            <p className="eyebrow">{eyebrow}</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="display-xl mt-6 max-w-[18ch] text-balance">{title}</h1>
          </Reveal>
          {intro && (
            <Reveal delay={0.18}>
              <p className="mt-8 max-w-2xl text-[17px] md:text-[18px] leading-relaxed text-foreground/85 text-pretty">
                {intro}
              </p>
            </Reveal>
          )}
        </div>
      </section>
    );
  }

  return (
    <section className="pt-20 md:pt-32 pb-14 md:pb-20 border-b border-border/60">
      <div className="container-edge">
        <Reveal>
          <p className="eyebrow">{eyebrow}</p>
        </Reveal>
        <Reveal delay={0.08}>
          <h1 className="display-xl mt-6 max-w-[18ch] text-balance">{title}</h1>
        </Reveal>
        {intro && (
          <Reveal delay={0.18}>
            <p className="mt-8 max-w-2xl text-[17px] md:text-[18px] leading-relaxed text-muted-foreground text-pretty">
              {intro}
            </p>
          </Reveal>
        )}
      </div>
    </section>
  );
};

export default PageHeader;
