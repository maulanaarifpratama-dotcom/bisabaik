import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import HeroParallax from "@/components/site/HeroParallax";
import Reveal from "@/components/site/Reveal";
import heroImg from "@/assets/hero-delivery.jpg";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden isolate">
      <HeroParallax
        src={heroImg}
        alt="Indonesian field coordinator at golden hour overlooking coastal village and rice terraces"
        priority
        intensity={70}
        overlay={
          <>
            <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/45 to-background" />
            <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/35 to-transparent" />
          </>
        }
      />

      <div className="container-edge pt-40 md:pt-56 pb-24 md:pb-40">
        <Reveal>
          <p className="eyebrow">Impact Delivery Partner · Est. Indonesia</p>
        </Reveal>

        <Reveal delay={0.08}>
          <h1 className="display-xl mt-6 max-w-[16ch] text-balance">
            Deliver well.<br />
            Exit responsibly.<br />
            <span className="italic font-normal">Sustain impact.</span>
          </h1>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-10 max-w-xl text-[17px] md:text-[18.5px] leading-relaxed text-foreground/80 text-pretty">
            Bisa Baik Bersama is an end-to-end impact delivery partner for philanthropic,
            corporate and development institutions — translating program design into accountable,
            on-the-ground implementation, with exit and sustainability built in from day one.
          </p>
        </Reveal>

        <Reveal delay={0.32}>
          <div className="mt-12 flex flex-wrap items-center gap-3">
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
        </Reveal>
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
  );
};

export default HeroSection;
