const PHASES = [
  {
    i: "I",
    title: "Co-Design for Delivery & Exit",
    body: "Alignment on program objectives and exit expectations. Implementation planning, exit pathway design, social and operational risk mapping.",
  },
  {
    i: "II",
    title: "Co-Create through Accountable Delivery",
    body: "On-the-ground execution with monitoring, accountability, adaptive learning, and preparation of local systems and governance.",
  },
  {
    i: "III",
    title: "Co-Sustain with Responsible Exit",
    body: "Exit readiness assessment, role and ownership transfer, integration into market mechanisms, and limited post-exit learning.",
  },
];

const JourneySection = () => {
  return (
    <section className="bg-surface/50 border-y border-border/60 py-24 md:py-32">
      <div className="container-edge">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-16">
          <div className="md:col-span-5">
            <p className="eyebrow">How we work</p>
            <h2 className="display-lg mt-4 text-balance">
              The Impact Journey: from delivery to responsible exit.
            </h2>
          </div>
          <div className="md:col-span-6 md:col-start-7 self-end">
            <p className="text-[16.5px] leading-relaxed text-muted-foreground">
              Our delivery framework cycles through three reinforcing phases. Each engagement
              is calibrated to where partners need us most — and how they want to exit.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
          {PHASES.map((step) => (
            <div key={step.i} className="bg-background p-8 md:p-10">
              <div className="flex items-baseline justify-between mb-8">
                <span className="font-display italic text-[42px] leading-none text-foreground/80">{step.i}</span>
                <span className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">Phase {step.i}</span>
              </div>
              <h3 className="font-display text-[22px] leading-snug text-balance">{step.title}</h3>
              <p className="mt-4 text-[14.5px] leading-relaxed text-muted-foreground">{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
