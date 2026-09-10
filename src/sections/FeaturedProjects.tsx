import { Link } from "react-router-dom";

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
      "Recharts",
      "Streaming",
      "MUI",
    ],
    link: "https://coreneural.com",
  },
  {
    name: "Vola Analytics",
    category: "DSP Analytics Platform",
    description:
      "DSP analytics platform providing clear insights through interactive dashboards and data visualizations.",
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
    link: "https://essenzi.com",
  },
  {
    name: "DrillingParts",
    category: "B2B Marketplace",
    description:
      "Marketplace with vendor workflows, tiered pricing and complex product flows.",
    image: "/projects/drilling-parts.png",
    technologies: ["PHP", "MySQL", "JQuery", "Bootstrap", "Rest API"],
    link: "https://drillingparts.com",
  },
];

const FeaturedProjects = () => {
  return (
    <section className="border-b border-slate-100 bg-white">
      <div className="mx-auto max-w-[1440px] px-6 py-8 lg:px-10 lg:py-10">
        {/* Section header */}
        <div className="mb-5 flex items-center justify-between">
          <h2 className="text-xl font-semibold tracking-[-0.02em] text-[#102344] lg:text-2xl">
            Featured Projects
          </h2>

          <Link
            to="/work"
            className="flex items-center gap-1.5 text-xs font-medium text-blue-600 transition-colors hover:text-blue-800"
          >
            View all projects
            <span className="text-base leading-none">→</span>
          </Link>
        </div>

        {/* Projects */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((project) => (
            <article
              key={project.name}
              className="overflow-hidden rounded-lg border border-slate-200 bg-white transition-shadow hover:shadow-sm"
            >
              {/* Project image */}
              <div className="h-[125px] overflow-hidden bg-[#f4f8fd] p-2.5">
                <img
                  src={project.image}
                  alt={`${project.name} project`}
                  className="h-full w-full rounded-md object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-3.5">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h3 className="text-[15px] font-semibold leading-tight text-[#102344]">
                    {project.name}
                  </h3>
                </a>

                <p className="mt-1 text-xs font-medium text-blue-700">
                  {project.category}
                </p>

                <p className="mt-2.5 text-xs leading-5 text-slate-600">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-md bg-[#f1f5fa] px-2 py-1 text-[10px] font-medium text-slate-600"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
