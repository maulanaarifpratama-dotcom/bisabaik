const PositioningSection = () => {
  return (
    <section className="container-edge py-24 md:py-32">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
        <div className="md:col-span-4">
          <p className="eyebrow">A different posture</p>
        </div>
        <div className="md:col-span-8">
          <p className="font-display text-[28px] md:text-[40px] leading-[1.2] text-balance">
            We are an <span className="italic">implementation partner</span>, not a charity.
            Programs are designed, delivered, and <span className="italic">transitioned</span> —
            so impact continues after we leave.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PositioningSection;
