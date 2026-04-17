import { ProjectSnapshot } from "@/data/site";
import { ArrowUpRight } from "lucide-react";

interface Props {
  project: ProjectSnapshot;
  variant?: "full" | "compact";
}

const Row = ({ label, value }: { label: string; value: string }) => (
  <div className="grid grid-cols-12 gap-4 py-4 border-t border-border/60 first:border-t-0">
    <dt className="col-span-12 sm:col-span-4 text-[11px] uppercase tracking-[0.16em] text-muted-foreground pt-0.5">{label}</dt>
    <dd className="col-span-12 sm:col-span-8 text-[14.5px] leading-relaxed text-foreground/90 text-pretty">{value}</dd>
  </div>
);

const ProjectCard = ({ project, variant = "full" }: Props) => {
  if (variant === "compact") {
    return (
      <article className="card-flat p-7 group h-full flex flex-col transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:border-foreground/30 hover:shadow-[0_18px_40px_-24px_hsl(var(--foreground)/0.18)] hover:bg-surface/40">
        <div className="flex items-start justify-between gap-4 mb-5">
          <div>
            {project.partner && (
              <p className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground mb-3 transition-colors duration-500 group-hover:text-secondary">{project.partner}</p>
            )}
            <h3 className="font-display text-[22px] leading-snug text-balance">{project.title}</h3>
          </div>
          <ArrowUpRight className="w-4 h-4 text-muted-foreground mt-1 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-foreground" />
        </div>
        <p className="text-[14px] leading-relaxed text-muted-foreground flex-1">{project.context}</p>
        <p className="mt-5 pt-4 border-t border-border/60 text-[13px] text-foreground/80">
          <span className="text-muted-foreground">Impact signal — </span>{project.signal}
        </p>
      </article>
    );
  }

  return (
    <article className="card-flat p-8 md:p-10 group transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:border-foreground/30 hover:shadow-[0_22px_48px_-28px_hsl(var(--foreground)/0.18)]">
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 pb-6 border-b border-border/60">
        <div>
          {project.partner && (
            <p className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground mb-3">{project.partner}</p>
          )}
          <h3 className="font-display text-[28px] md:text-[34px] leading-tight text-balance">{project.title}</h3>
        </div>
        <span className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
          {project.category === "flagship" ? "Flagship initiative" : "Engagement"}
        </span>
      </header>

      <dl>
        <Row label="Context" value={project.context} />
        <Row label="BisaBaik's Role" value={project.role} />
        <Row label="Delivery Scope" value={project.scope} />
        <Row label="Exit & Sustainability" value={project.exit} />
        <Row label="Impact Signal" value={project.signal} />
      </dl>
    </article>
  );
};

export default ProjectCard;
