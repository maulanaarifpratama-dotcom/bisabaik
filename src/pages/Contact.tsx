import { useState } from "react";
import Layout from "@/components/site/Layout";
import PageHeader from "@/components/site/PageHeader";
import { Mail, Phone, MapPin, ArrowRight, ArrowUpRight } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import heroContact from "@/assets/hero-contact.jpg";
import sideImg from "@/assets/photos/pdf-uniformed-team.jpg";

const Field = ({ label, children }: { label: string; children: React.ReactNode }) => (
  <label className="block">
    <span className="text-[11px] uppercase tracking-[0.16em] text-muted-foreground">{label}</span>
    <div className="mt-2">{children}</div>
  </label>
);

const inputCls =
  "w-full bg-transparent border-0 border-b border-border focus:border-foreground focus:ring-0 outline-none px-0 py-3 text-[15px] placeholder:text-muted-foreground/60 transition-colors";

const Contact = () => {
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    // Front-end only — content is mailto-style.
    const form = new FormData(e.currentTarget);
    const subject = `Inquiry from ${form.get("name") || "BisaBaik website"}`;
    const body = `Organization: ${form.get("org")}\nRole: ${form.get("role")}\nInterest: ${form.get("interest")}\n\n${form.get("message")}`;
    const mailto = `mailto:info@bisabaik.or.id?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
    setTimeout(() => {
      setSubmitting(false);
      toast({ title: "Opening your email client", description: "If nothing happened, please write to info@bisabaik.or.id." });
    }, 500);
  };

  return (
    <Layout
      title="Contact — BisaBaik Foundation"
      description="Get in touch with Bisa Baik Bersama. We work with philanthropic, corporate, government and development partners across Indonesia."
    >
      <PageHeader
        eyebrow="Contact"
        title="Let's design your next program with exit in mind."
        intro="Tell us about the engagement you have in mind. We'll respond within two working days."
        image={heroContact}
        imageAlt="Two professionals greeting each other in a partnership meeting"
      />

      <section className="container-edge py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Form */}
          <form onSubmit={onSubmit} className="lg:col-span-7 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Field label="Your name">
                <input name="name" required className={inputCls} placeholder="Full name" />
              </Field>
              <Field label="Email">
                <input name="email" type="email" required className={inputCls} placeholder="you@organization.org" />
              </Field>
              <Field label="Organization">
                <input name="org" required className={inputCls} placeholder="Institution or company" />
              </Field>
              <Field label="Role">
                <input name="role" className={inputCls} placeholder="e.g. Programs Director" />
              </Field>
            </div>

            <Field label="What you'd like to discuss">
              <select name="interest" required className={inputCls + " appearance-none cursor-pointer"} defaultValue="">
                <option value="" disabled>Select a focus</option>
                <option value="program-delivery">Program delivery partnership</option>
                <option value="exit-strategy">Exit strategy & transition</option>
                <option value="msme-aggregation">MSME aggregation via PasarBaik</option>
                <option value="circular-economy">Circular economy & waste management</option>
                <option value="briefing">Insights briefing for our team</option>
                <option value="other">Other</option>
              </select>
            </Field>

            <Field label="Message">
              <textarea name="message" required rows={5} className={inputCls + " resize-none"} placeholder="Tell us briefly about your program, partners, geography and timeline." />
            </Field>

            <div className="pt-4">
              <button
                type="submit"
                disabled={submitting}
                className="group inline-flex items-center gap-2 bg-primary text-primary-foreground text-[13.5px] px-6 h-12 rounded-sm hover:bg-primary/90 transition-colors disabled:opacity-60"
              >
                {submitting ? "Opening…" : "Send inquiry"}
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
              <p className="mt-4 text-[12px] text-muted-foreground">
                By sending an inquiry, you agree to be contacted by the BisaBaik team. We do not share your details.
              </p>
            </div>
          </form>

          {/* Side details */}
          <aside className="lg:col-span-4 lg:col-start-9 space-y-10">
            <div>
              <p className="eyebrow">Direct contact</p>
              <ul className="mt-5 space-y-5">
                <li className="flex items-start gap-4">
                  <Mail className="w-4 h-4 mt-1 text-foreground/60" strokeWidth={1.4} />
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.16em] text-muted-foreground">Email</p>
                    <a href="mailto:info@bisabaik.or.id" className="text-[15px] link-underline">info@bisabaik.or.id</a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <Phone className="w-4 h-4 mt-1 text-foreground/60" strokeWidth={1.4} />
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.16em] text-muted-foreground">Phone</p>
                    <a href="tel:+6285161479098" className="text-[15px]">+62 851-6147-9098</a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <MapPin className="w-4 h-4 mt-1 text-foreground/60" strokeWidth={1.4} />
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.16em] text-muted-foreground">Office</p>
                    <p className="text-[14.5px] leading-relaxed">
                      Jl. Sepat No. 43, Kebagusan,<br />
                      Pasar Minggu, Jakarta Selatan,<br />
                      DKI Jakarta 12520
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="pt-8 border-t border-border/60">
              <p className="eyebrow">Related platforms</p>
              <ul className="mt-5 space-y-3 text-[14.5px]">
                <li>
                  <a href="https://pasarbaik.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 link-underline">
                    PasarBaik.com <ArrowUpRight className="w-3 h-3" />
                  </a>
                </li>
                <li>
                  <a href="https://bisabaik.or.id" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors">
                    bisabaik.or.id <ArrowUpRight className="w-3 h-3" />
                  </a>
                </li>
              </ul>
            </div>

            <div className="pt-2">
              <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
                <img
                  src={sideImg}
                  alt="BisaBaik field team coordinating program delivery"
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <p className="mt-3 text-[12px] text-muted-foreground italic">
                Field coordination — programs reviewed with partners and local teams.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
