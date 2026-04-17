import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { NAV } from "@/data/site";
import { cn } from "@/lib/utils";

const Logo = () => (
  <Link to="/" className="flex items-center gap-3 group" aria-label="BisaBaik home">
    <svg width="28" height="28" viewBox="0 0 28 28" className="text-foreground" aria-hidden>
      <path d="M3 22 C 3 10, 25 10, 25 22" stroke="currentColor" strokeWidth="1.4" fill="none" />
      <path d="M7 22 C 7 14, 21 14, 21 22" stroke="currentColor" strokeWidth="1.4" fill="none" />
      <path d="M11 22 C 11 18, 17 18, 17 22" stroke="currentColor" strokeWidth="1.4" fill="none" />
    </svg>
    <span className="font-display text-[17px] tracking-tight leading-none">
      Bisa Baik <span className="text-muted-foreground font-light">Foundation</span>
    </span>
  </Link>
);

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [location.pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-colors duration-500",
        scrolled || open
          ? "bg-background/85 backdrop-blur-md border-b border-border/60"
          : "bg-transparent"
      )}
    >
      <div className="container-edge flex items-center justify-between gap-6 h-[72px]">
        <Logo />

        <nav className="hidden lg:flex items-center gap-x-5 xl:gap-x-7" aria-label="Primary">
          {NAV.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                cn(
                  "whitespace-nowrap text-[13px] tracking-[-0.005em] transition-colors",
                  isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-1.5 xl:gap-2 shrink-0">
          <TooltipProvider delayDuration={150}>
            <Tooltip>
              <TooltipTrigger asChild>
                <a
                  href="https://pasarbaik.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1.5 xl:gap-2 whitespace-nowrap bg-primary text-primary-foreground text-[12px] xl:text-[12.5px] tracking-[0.01em] px-3 xl:px-4 h-9 rounded-sm hover:bg-primary/90 transition-colors"
                >
                  <span className="hidden xl:inline">Impact Supply Aggregator</span>
                  <span className="xl:hidden">Aggregator</span>
                  <ArrowUpRight className="w-3.5 h-3.5 -mr-0.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </TooltipTrigger>
              <TooltipContent side="bottom" className="max-w-[260px] text-[12px] leading-relaxed bg-foreground text-background border-foreground">
                Powered by PasarBaik — aggregating MSME supply to ensure post-program economic sustainability.
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <a
            href="https://bisabaik.or.id"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden xl:inline-flex whitespace-nowrap text-[12.5px] text-muted-foreground hover:text-foreground transition-colors px-3 h-9 items-center gap-1.5"
          >
            Support Our Work
            <ArrowUpRight className="w-3 h-3" />
          </a>
        </div>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden p-2 -mr-2 text-foreground"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={cn(
          "lg:hidden overflow-hidden transition-[max-height,opacity] duration-500 ease-out",
          open ? "max-h-[640px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="container-edge pb-8 pt-2 flex flex-col">
          <div className="flex flex-col divide-y divide-border/60">
            {NAV.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  cn(
                    "py-3.5 text-[15px] flex items-center justify-between",
                    isActive ? "text-foreground" : "text-muted-foreground"
                  )
                }
              >
                {item.label}
                <ArrowUpRight className="w-3.5 h-3.5 opacity-50" />
              </NavLink>
            ))}
          </div>
          <div className="mt-6 flex flex-col gap-2">
            <a
              href="https://pasarbaik.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-between bg-primary text-primary-foreground text-[13px] px-4 h-11 rounded-sm"
            >
              Impact Supply Aggregator
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <a
              href="https://bisabaik.or.id"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-between border border-border text-[13px] px-4 h-11 rounded-sm text-foreground"
            >
              Support Our Work
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
