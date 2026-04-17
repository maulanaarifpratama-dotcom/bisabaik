// Centralized site data — partners, projects, navigation.
// Keeps content separate from layout so it can be translated (EN/ID) later.

export type PartnerCategory = "philanthropic" | "corporate" | "government" | "development";

export interface Partner {
  name: string;
  role: string;
  context: string;
  category: PartnerCategory;
  journeyStage?: "co-design" | "co-create" | "co-sustain";
}

export const PARTNERS: Partner[] = [
  // Philanthropic
  {
    name: "BAZNAS",
    role: "Co-Design & Capacity Building",
    context: "National MEAL standards co-developed and replicated across philanthropic programs.",
    category: "philanthropic",
    journeyStage: "co-design",
  },
  {
    name: "YBM BRI",
    role: "Co-Design & Impact Assessment",
    context: "Evidence-based insights informing family strengthening programs.",
    category: "philanthropic",
    journeyStage: "co-design",
  },
  {
    name: "Human Initiative",
    role: "Impact Assessment & Learning",
    context: "Measured behavioral change informing program refinement and sustainability.",
    category: "philanthropic",
    journeyStage: "co-sustain",
  },

  // Corporate
  {
    name: "Bank BRI",
    role: "Co-Design & Impact Assessment",
    context: "Governance strengthening recommendations for Desa BRillian and UMKM clusters.",
    category: "corporate",
    journeyStage: "co-design",
  },
  {
    name: "BRI Life",
    role: "Co-Create & Program Implementation",
    context: "Community-based waste management implemented with operational discipline.",
    category: "corporate",
    journeyStage: "co-create",
  },

  // Development
  {
    name: "Save the Children — New Future Disaster Management Center",
    role: "Program Monitoring & Evaluation",
    context: "Monitoring delivery and documenting learning to strengthen implementation.",
    category: "development",
    journeyStage: "co-create",
  },
  {
    name: "Yayasan Edu Farmers International",
    role: "SROI Monitoring & M&E Advisory",
    context: "Social Return on Investment monitored; M&E framework refined for impact assessment.",
    category: "development",
    journeyStage: "co-create",
  },
  {
    name: "AKSATA — Aksi Kelola Sampah Kita",
    role: "Co-Creator with MB Group",
    context: "Community-based waste management as a foundation for circular economy and local ownership.",
    category: "development",
    journeyStage: "co-sustain",
  },

  // Government
  {
    name: "Kementerian Perdagangan Republik Indonesia",
    role: "UMKM Aggregator & Market Facilitation Partner",
    context: "Aggregation of philanthropic UMKM beneficiaries to support domestic and export market expansion.",
    category: "government",
    journeyStage: "co-sustain",
  },
  {
    name: "Dispora Kabupaten Bogor",
    role: "Risk Analysis & Business Process Design",
    context: "Risk management analysis and business process documentation for Dispora Kab. Bogor.",
    category: "government",
    journeyStage: "co-create",
  },
];

export const PARTNER_GROUPS: { key: PartnerCategory; label: string; blurb: string }[] = [
  { key: "philanthropic", label: "Philanthropic Institutions", blurb: "Zakat bodies and foundations partnering on disciplined delivery and exit." },
  { key: "corporate",     label: "Corporate CSR & ESG",        blurb: "Corporate partners aligning impact programs with operational accountability." },
  { key: "development",   label: "Development Organizations",  blurb: "International and national development partners on shared field delivery." },
  { key: "government",    label: "Government & Public Sector", blurb: "Public sector collaborations on market continuity and program governance." },
];

// ---------------- Projects ----------------

export interface ProjectSnapshot {
  slug: string;
  title: string;
  category: "flagship" | "engagement";
  partner?: string;
  year?: string;
  context: string;
  role: string;
  scope: string;
  exit: string;
  signal: string;
}

export const PROJECTS: ProjectSnapshot[] = [
  // Flagships
  {
    slug: "exit-forward-model",
    title: "Exit Forward Model",
    category: "flagship",
    context: "Philanthropic programs frequently lose momentum once funding ends — not from poor design, but from absent transition pathways.",
    role: "Originator and delivery owner of the Exit Forward Model — a transition framework integrated into program design from day one.",
    scope: "Phased exit planning, local institutional & governance strengthening, post-program UMKM capacity development, and time-bound mentoring.",
    exit: "Aggregator handover via PasarBaik, ensuring beneficiaries enter stable demand-supply channels rather than reverting to dependency.",
    signal: "Exit reframed as an extension of impact, not its conclusion — replicated across multiple philanthropic engagements.",
  },
  {
    slug: "pasarbaik",
    title: "PasarBaik — Impact Supply Aggregator",
    category: "flagship",
    partner: "Kementerian Perdagangan RI · Multiple Philanthropic Partners",
    context: "Post-program UMKM beneficiaries lacked consistent market access, undermining the long-term viability of philanthropic investment.",
    role: "Operating partner for PasarBaik.com — the aggregation mechanism matching philanthropic UMKM supply to domestic and export demand.",
    scope: "Supply aggregation, quality and compliance readiness, market facilitation and off-take coordination across multiple commodities.",
    exit: "Built as a market-based mechanism from the start — sustainability is the operating model, not an afterthought.",
    signal: "Philanthropic UMKMs aggregated for domestic and export pathways under the Aid for Trade framework.",
  },
  {
    slug: "circular-economy-waste",
    title: "Circular Economy & Waste Management Initiative",
    category: "flagship",
    partner: "BRI Life · AKSATA · MB Group",
    context: "Environmental programs are often treated as time-limited interventions rather than financially viable systems.",
    role: "Triple role: program implementer, waste management operator, and off-taker of processed materials — minimizing partner risk.",
    scope: "Community drop-points, waste bank and cooperative strengthening, plastics-to-granules processing, and industrial off-take channels.",
    exit: "Independent management transitioned to local cooperatives and waste banks, with continuing off-take demand from industry partners.",
    signal: "Demonstration model proving environmental programs can be operational, economically viable, and responsibly exited.",
  },

  // Engagements
  {
    slug: "baznas-meal",
    title: "National MEAL Standards",
    category: "engagement",
    partner: "BAZNAS",
    context: "Need for a replicable monitoring, evaluation, accountability and learning standard across national philanthropic programs.",
    role: "Co-design partner on MEAL framework and capacity building.",
    scope: "Framework design, training of program teams, and documentation for replication.",
    exit: "Standards transferred to BAZNAS for ongoing internal application.",
    signal: "MEAL standards replicated across BAZNAS programs nationally.",
  },
  {
    slug: "bri-desa-brillian",
    title: "Desa BRillian Governance Strengthening",
    category: "engagement",
    partner: "Bank BRI",
    context: "Village-cluster UMKM programs needed governance recommendations to sustain post-program performance.",
    role: "Co-design and impact assessment partner.",
    scope: "Governance assessment, recommendation set, and cluster-level diagnostic for Desa BRillian and UMKM groups.",
    exit: "Recommendations integrated into BRI's ongoing program management.",
    signal: "Evidence-based governance pathway for cluster sustainability.",
  },
  {
    slug: "ybm-bri-family",
    title: "Family Strengthening Evidence Base",
    category: "engagement",
    partner: "YBM BRI",
    context: "Family welfare programs required an evidence base to refine intervention design.",
    role: "Co-design and impact assessment.",
    scope: "Baseline analysis, qualitative inquiry, and recommendation framework.",
    exit: "Insights internalized into YBM BRI program design cycle.",
    signal: "Evidence-led iteration of family strengthening programming.",
  },
  {
    slug: "save-the-children-meal",
    title: "Disaster Response M&E Support",
    category: "engagement",
    partner: "Save the Children — New Future DMC",
    context: "Disaster response programs required disciplined monitoring and learning capture.",
    role: "Program monitoring and evaluation support.",
    scope: "Monitoring delivery, learning documentation, and implementation strengthening.",
    exit: "Knowledge products handed over for institutional learning.",
    signal: "Stronger evidence base for disaster response delivery.",
  },
  {
    slug: "edu-farmers-sroi",
    title: "Edu Farmers SROI & M&E Advisory",
    category: "engagement",
    partner: "Yayasan Edu Farmers International",
    context: "Need for credible Social Return on Investment measurement in agricultural programs.",
    role: "SROI monitoring and M&E framework advisory.",
    scope: "SROI methodology design, monitoring, and framework refinement.",
    exit: "M&E framework owned by Edu Farmers for ongoing use.",
    signal: "SROI evidence informing program direction.",
  },
  {
    slug: "dispora-bogor",
    title: "Dispora Kab. Bogor Risk & Process Design",
    category: "engagement",
    partner: "Dispora Kab. Bogor · Livember Kreasi Indo",
    context: "Public-sector youth program required structured risk and process documentation.",
    role: "Risk analysis and business process design.",
    scope: "Risk register, mitigation actions, and full business process documentation.",
    exit: "Documentation transferred for institutional adoption.",
    signal: "Operational baseline for accountable delivery.",
  },
  {
    slug: "human-initiative-impact",
    title: "Human Initiative — Behavioral Impact Study",
    category: "engagement",
    partner: "Human Initiative",
    context: "Programs required behavioral evidence to validate refinement and sustainability decisions.",
    role: "Impact assessment and learning partner.",
    scope: "Behavioral measurement, qualitative learning capture, and program reflection.",
    exit: "Findings handed over to inform internal program iteration.",
    signal: "Behavioral evidence base supporting program sustainability.",
  },
];

// ---------------- Navigation ----------------

export const NAV = [
  { to: "/about", label: "About" },
  { to: "/what-we-do", label: "What We Do" },
  { to: "/how-we-work", label: "How We Work" },
  { to: "/impact", label: "Impact" },
  { to: "/partners", label: "Partners" },
  { to: "/projects", label: "Projects" },
  { to: "/flagship", label: "Flagship" },
  { to: "/insights", label: "Insights" },
  { to: "/contact", label: "Contact" },
] as const;
