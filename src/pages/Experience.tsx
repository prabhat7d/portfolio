const experiences = [
  {
    period: "Aug 2025 – Present",
    company: "Collectent, Gurgaon",
    role: "Senior Engineer",
    description:
      "Leading full-stack development for CoreNeural, an enterprise AI data-protection platform. Designed scalable backend rules engine and secure conversational UI.",
    technologies: ["Laravel", "Next.js", "AWS", "Redis", "Docker"],
    highlights: [
      "Built and optimized AI data-protection platform (CoreNeural)",
      "Designed scalable backend rules engine and secure conversational UI",
      "Implemented Redis caching to improve response latency",
      "Working with Next.js, Laravel, AWS and Docker",
    ],
  },
  {
    period: "Apr 2018 – Aug 2025",
    company: "Webkul Software Pvt Ltd, Noida",
    role: "Technical Lead / Senior Full Stack Developer",
    description:
      "Built scalable SaaS & eCommerce platforms, led teams, and delivered 70+ modules across multiple domains.",
    technologies: ["Laravel", "Vue.js", "React", "Redis", "Elasticsearch"],
    highlights: [
      "Architected platforms supporting 10M+ products",
      "Implemented caching layers, queue workers and search pipelines",
      "Integrated 3rd-party systems (payments, marketplaces, AI APIs)",
      "Led a team of up to 10 developers",
      "Mentored developers and introduced automated testing workflows",
    ],
  },
  {
    period: "Nov 2017 – Mar 2018",
    company: "Excellence Technologies, Noida",
    role: "Junior PHP Developer",
    description:
      "Contributed to enhancements and bug fixes across client projects. Developed early hands-on experience in PHP, MVC and backend workflows.",
    technologies: ["PHP", "Laravel", "MySQL"],
    highlights: [
      "Worked on client projects and feature enhancements",
      "Gained hands-on experience in PHP, MVC and backend workflows",
    ],
  },
];

const Experience = () => {
  return (
    <section className="min-h-[calc(100vh-60px)] bg-white">
      <div className="mx-auto max-w-[1440px] px-6 py-8 lg:px-10 lg:py-10">
        {/* Header */}
        <div className="mb-6">
          <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-blue-600">
            Experience
          </p>

          <h1 className="mt-2 text-3xl font-semibold tracking-[-0.035em] text-[#102344] sm:text-4xl">
            My Professional Journey
          </h1>

          <p className="mt-2 max-w-2xl text-xs leading-5 text-slate-500 sm:text-sm">
            A journey of learning, building and creating impact through
            technology.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute bottom-5 left-[9px] top-5 w-px bg-blue-200" />

          <div className="space-y-5">
            {experiences.map((experience) => (
              <article
                key={`${experience.company}-${experience.period}`}
                className="relative grid grid-cols-[115px_1fr] gap-4 pl-7 lg:grid-cols-[125px_1fr] lg:gap-5"
              >
                {/* Timeline dot */}
                <span className="absolute left-0 top-2.5 h-[11px] w-[11px] rounded-full border-2 border-blue-400 bg-white ring-2 ring-blue-100" />

                {/* Period */}
                <div className="pt-1">
                  <p className="text-[10px] font-medium leading-4 text-slate-500 sm:text-[11px]">
                    {experience.period}
                  </p>
                </div>

                {/* Experience card */}
                <div className="rounded-lg border border-slate-200 bg-white p-3.5 shadow-[0_1px_2px_rgba(15,23,42,0.02)] lg:p-4">
                  {/* Top row */}
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h2 className="text-[14px] font-semibold leading-5 text-[#102344]">
                        {experience.company}
                      </h2>

                      <p className="mt-0.5 text-[12px] font-semibold leading-4 text-[#102344]">
                        {experience.role}
                      </p>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-1.5 sm:max-w-[330px] sm:justify-end">
                      {experience.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="rounded-md bg-[#f1f5fa] px-2 py-1 text-[9px] font-medium text-slate-600"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="mt-2.5 max-w-4xl text-[10px] leading-[1.55] text-slate-600 sm:text-[11px]">
                    {experience.description}
                  </p>

                  {/* Highlights */}
                  <ul className="mt-2.5 space-y-1">
                    {experience.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="relative pl-3 text-[10px] leading-[1.5] text-slate-600 sm:text-[11px]"
                      >
                        <span className="absolute left-0 top-[6px] h-1 w-1 rounded-full bg-blue-500" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
