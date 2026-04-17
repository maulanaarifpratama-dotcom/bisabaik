import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";

const CtaSection = () => {
  return (
    <section className="border-t border-border/60">
      <div className="container-edge py-24 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-end">
          <div className="md:col-span-7">
            <p className="eyebrow">Partner with us</p>
            <h2 className="display-lg mt-4 text-balance">
              Designing your next program with exit in mind?
            </h2>
            <p className="mt-6 max-w-xl text-[16.5px] leading-relaxed text-muted-foreground">
              We work with partners who view delivery, exit and sustainability as one
              integrated process. If that resonates, let's talk.
            </p>
          </div>
          <div className="md:col-span-5 flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground text-[13.5px] px-5 h-11 rounded-sm hover:bg-primary/90 transition-colors"
            >
              Start a conversation <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="https://pasarbaik.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-border text-[13.5px] px-5 h-11 rounded-sm hover:border-foreground transition-colors"
            >
              Visit PasarBaik <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
