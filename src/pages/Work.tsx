import { useState } from "react";

const filters = ["All", "SaaS", "eCommerce", "AI", "Marketplace", "Marketing"];

const projects = [
  {
    name: "CoreNeural",
    category: "AI Data Protection Platform",
    description:
      "Enterprise platform to control organizational data access to external AI models.",
    image: "/projects/coreneural.png",
    technologies: [
      "Next.js",
      "React.js",
      "TypeScript",
      "Tailwind CSS",
      "TanStack Query",
      "Laravel",
      "MySQL",
      "Redis",
      "AI",
      "Rest API",
      "Context API",
      "Recharts",
      "Streaming",
      "MUI",
    ],
    types: ["SaaS", "AI"],
    slug: "coreneural",
    link: "https://coreneural.com",
  },
  {
    name: "Vola Analytics",
    category: "DSP Analytics Platform",
    description:
      "Marketing and advertising analytics platform providing actionable insights through interactive tables and data visualizations.",
    image: "/projects/vola-analytics.png",
    technologies: [
      "Next.js",
      "React.js",
      "TypeScript",
      "Tailwind CSS",
      "TanStack Query",
      "Laravel",
      "MySQL",
      "Redis",
      "Rest API",
      "Context API",
      "Recharts",
      "MUI",
    ],
    types: ["SaaS", "Marketing"],
    slug: "vola-analytics",
    link: "#",
  },
  {
    name: "Essenzì",
    category: "D2C Perfume Website",
    description:
      "High-traffic storefront with optimized search and checkout workflows.",
    image: "/projects/essenzi.png",
    technologies: [
      "Vue.js",
      "Tailwind CSS",
      "Laravel",
      "MySQL",
      "Redis",
      "Elasticsearch",
      "Rest API",
      "Migration",
    ],
    types: ["eCommerce"],
    slug: "essenzi",
    link: "https://essenzi.com",
  },
  {
    name: "DrillingParts",
    category: "B2B Marketplace",
    description:
      "Marketplace platform with vendor workflows, tiered pricing and complex product flows.",
    image: "/projects/drilling-parts.png",
    technologies: ["PHP", "MySQL", "JQuery", "Bootstrap", "Rest API"],
    types: ["Marketplace", "eCommerce"],
    slug: "drilling-parts",
    link: "https://drillingparts.com",
  },
  {
    name: "Dealista",
    category: "10M+ Product Platform",
    description:
      "Dropshipping platform with integrations, search and high-performance APIs.",
    image: "/projects/dealista.png",
    technologies: [
      "Vue.js",
      "Tailwind CSS",
      "Laravel",
      "MySQL",
      "Redis",
      "Elasticsearch",
      "Rest API",
      "PIM",
    ],
    types: ["eCommerce"],
    slug: "dealista",
    link: "https://dealista.com",
  },
];

const Work = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.types.includes(activeFilter));

  return (
    <section className="min-h-[calc(100vh-60px)] bg-white">
      <div className="mx-auto max-w-[1440px] px-6 py-8 lg:px-10 lg:py-10">
        {/* Header */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-600">
            Projects
          </p>

          <h1 className="mt-2 text-3xl font-semibold tracking-[-0.035em] text-[#102344] sm:text-4xl">
            Selected Work
          </h1>

          <p className="mt-2 max-w-2xl text-xs leading-5 text-slate-500 sm:text-sm">
            A collection of projects I've worked on, from SaaS platforms to
            eCommerce solutions.
          </p>
        </div>

        {/* Filters */}
        <div className="mt-5 flex flex-wrap gap-2">
          {filters.map((filter) => {
            const isActive = activeFilter === filter;

            return (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={[
                  "rounded-full px-3.5 py-1.5 text-xs font-medium transition-colors",
                  isActive
                    ? "bg-[#1769ff] text-white"
                    : "bg-[#f1f5fa] text-slate-600 hover:bg-[#e7eef8]",
                ].join(" ")}
              >
                {filter}
              </button>
            );
          })}
        </div>

        {/* Project Grid */}
        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          {filteredProjects.map((project) => (
            <article
              key={project.name}
              className="overflow-hidden rounded-lg border border-slate-200 bg-white transition-shadow hover:shadow-sm"
            >
              {/* Image Area */}
              <div className="relative flex h-[145px] items-center justify-center overflow-hidden bg-[#f4f8fd] px-6">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={project.image}
                    alt={`${project.name} project`}
                    className="h-full w-[82%] object-contain"
                  />
                </a>

                {/* Project Types */}
                <div className="absolute right-2.5 top-2.5 flex flex-wrap justify-end gap-1.5">
                  {project.types.map((type) => (
                    <span
                      key={type}
                      className="rounded-md bg-white/95 px-2 py-1 text-xs font-medium text-slate-600 shadow-sm"
                    >
                      {type}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project Content */}
              <div className="p-4">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h2 className="text-sm font-semibold leading-tight text-[#102344]">
                    {project.name}
                  </h2>
                </a>

                <p className="mt-1 text-xs font-medium text-blue-700">
                  {project.category}
                </p>

                <p className="mt-2.5 text-xs leading-[1.6] text-slate-500 sm:text-xs">
                  {project.description}
                </p>

                {/* Technologies + Case Study */}
                <div className="mt-3 flex items-end justify-between gap-4">
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-md bg-[#f1f5fa] px-2 py-1 text-xs font-medium text-slate-600"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
