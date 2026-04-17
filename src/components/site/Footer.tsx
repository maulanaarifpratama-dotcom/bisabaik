import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { NAV } from "@/data/site";

const Footer = () => {
  return (
    <footer className="border-t border-border/60 bg-surface/40 mt-32">
      <div className="container-edge py-20 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <p className="eyebrow">Bisa Baik Bersama</p>
            <h2 className="display-md mt-5 max-w-md text-balance">
              Deliver well, exit responsibly, sustain impact.
            </h2>
            <p className="mt-6 text-muted-foreground text-[14.5px] leading-relaxed max-w-md">
              An impact delivery partner for philanthropic, corporate, development and
              public sector institutions working in Indonesia and beyond.
            </p>
          </div>

          <div className="md:col-span-3 md:col-start-7">
            <p className="eyebrow">Navigate</p>
            <ul className="mt-5 space-y-2.5 text-[14px]">
              {NAV.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="text-muted-foreground hover:text-foreground transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="eyebrow">Contact</p>
            <ul className="mt-5 space-y-2.5 text-[14px] text-muted-foreground">
              <li>info@bisabaik.or.id</li>
              <li>+62 851-6147-9098</li>
              <li className="leading-relaxed">
                Jl. Sepat No. 43, Kebagusan,<br />
                Pasar Minggu, Jakarta Selatan,<br />
                DKI Jakarta 12520
              </li>
            </ul>

            <div className="mt-6 flex flex-col gap-2 text-[13px]">
              <a href="https://pasarbaik.com" target="_blank" rel="noopener noreferrer"
                 className="inline-flex items-center gap-1.5 text-foreground link-underline">
                PasarBaik.com <ArrowUpRight className="w-3 h-3" />
              </a>
              <a href="https://bisabaik.or.id" target="_blank" rel="noopener noreferrer"
                 className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors">
                bisabaik.or.id <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-border/60 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-[12px] text-muted-foreground">
          <p>© {new Date().getFullYear()} Bisa Baik Bersama — Rumah Pembangunan Berkelanjutan Foundation.</p>
          <p>Impact delivery arm of Immers Asia Corp.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
