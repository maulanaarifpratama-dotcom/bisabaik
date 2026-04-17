interface PageHeaderProps {
  eyebrow: string;
  title: string;
  intro?: string;
}

const PageHeader = ({ eyebrow, title, intro }: PageHeaderProps) => (
  <section className="pt-20 md:pt-32 pb-14 md:pb-20 border-b border-border/60">
    <div className="container-edge">
      <p className="eyebrow animate-fade-in">{eyebrow}</p>
      <h1 className="display-xl mt-6 max-w-[18ch] text-balance animate-fade-up">{title}</h1>
      {intro && (
        <p className="mt-8 max-w-2xl text-[17px] md:text-[18px] leading-relaxed text-muted-foreground text-pretty animate-fade-up">
          {intro}
        </p>
      )}
    </div>
  </section>
);

export default PageHeader;
