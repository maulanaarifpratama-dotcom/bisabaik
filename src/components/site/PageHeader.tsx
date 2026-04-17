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
        <div className="absolute inset-0 -z-10">
          <img
            src={image}
            alt={imageAlt || ""}
            className="w-full h-full object-cover"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/55 to-background" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/85 via-background/55 to-background/10" />
        </div>
        <div className="container-edge pt-28 md:pt-40 pb-16 md:pb-24">
          <p className="eyebrow animate-fade-in">{eyebrow}</p>
          <h1 className="display-xl mt-6 max-w-[18ch] text-balance animate-fade-up">{title}</h1>
          {intro && (
            <p className="mt-8 max-w-2xl text-[17px] md:text-[18px] leading-relaxed text-foreground/85 text-pretty animate-fade-up">
              {intro}
            </p>
          )}
        </div>
      </section>
    );
  }

  return (
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
};

export default PageHeader;
