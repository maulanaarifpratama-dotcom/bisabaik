interface Props {
  number?: string;
  eyebrow: string;
  title: string;
  intro?: string;
}

const SectionLabel = ({ number, eyebrow, title, intro }: Props) => (
  <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 mb-12 md:mb-16">
    <div className="md:col-span-4">
      {number && <p className="pillar-num mb-4">{number}</p>}
      <p className="eyebrow">{eyebrow}</p>
    </div>
    <div className="md:col-span-8">
      <h2 className="display-lg text-balance">{title}</h2>
      {intro && <p className="mt-6 text-[16.5px] md:text-[17.5px] leading-relaxed text-muted-foreground max-w-[60ch] text-pretty">{intro}</p>}
    </div>
  </div>
);

export default SectionLabel;
