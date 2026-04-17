import Layout from "@/components/site/Layout";
import PageHeader from "@/components/site/PageHeader";
import ProjectCard from "@/components/site/ProjectCard";
import { PROJECTS } from "@/data/site";

const Projects = () => {
  const flagships = PROJECTS.filter((p) => p.category === "flagship");
  const engagements = PROJECTS.filter((p) => p.category === "engagement");

  return (
    <Layout
      title="Projects & Engagements — BisaBaik Foundation"
      description="A standardized snapshot of our flagship initiatives and partner engagements: context, role, delivery scope, exit mechanism and impact signal."
    >
      <PageHeader
        eyebrow="Projects & Engagements"
        title="A standardized lens on every engagement."
        intro="Each project is described through five lenses — context, our role, delivery scope, exit and sustainability mechanism, and the impact signal observed."
      />

      {/* Flagships in detail */}
      <section className="container-edge py-20 md:py-28 border-b border-border/60">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <p className="eyebrow">Flagship initiatives</p>
            <h2 className="display-lg mt-4 text-balance">Models tested and refined in delivery.</h2>
          </div>
        </div>
        <div className="space-y-8">
          {flagships.map((p) => <ProjectCard key={p.slug} project={p} />)}
        </div>
      </section>

      {/* Engagements as snapshots */}
      <section className="container-edge py-20 md:py-28">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <p className="eyebrow">Other engagements</p>
            <h2 className="display-lg mt-4 text-balance">Concise snapshots of partner work.</h2>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {engagements.map((p) => <ProjectCard key={p.slug} project={p} variant="compact" />)}
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
