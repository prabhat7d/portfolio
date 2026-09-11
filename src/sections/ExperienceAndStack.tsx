const experiences = [
  {
    company: "Collectent, Gurgaon",
    role: "Senior Engineer",
    period: "Aug 2025 – Present",
    description:
      "Leading full-stack development for CoreNeural, an enterprise AI data-protection platform.",
  },
  {
    company: "Webkul Software Pvt Ltd, Noida",
    role: "Technical Lead / Senior Full Stack Developer",
    period: "Apr 2018 – Aug 2025",
    description:
      "Built scalable SaaS & eCommerce platforms, led teams, and delivered 70+ modules across multiple domains.",
  },
  {
    company: "Excellence Technologies, Noida",
    role: "Junior PHP Developer",
    period: "Nov 2017 – Mar 2018",
    description:
      "Contributed to enhancements and bug fixes across client projects.",
  },
];

const techStack = [
  {
    category: "Frontend",
    technologies:
      "React, Next.js, Vue.js, TypeScript, Redux Toolkit, TanStack Query, Tailwind CSS",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="3" y="4" width="18" height="13" rx="2" />
        <path d="M8 21h8" />
        <path d="M12 17v4" />
      </svg>
    ),
  },
  {
    category: "Backend",
    technologies: "PHP, Laravel, REST APIs, GraphQL",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="4" y="4" width="16" height="4" rx="1" />
        <rect x="4" y="10" width="16" height="4" rx="1" />
        <rect x="4" y="16" width="16" height="4" rx="1" />
      </svg>
    ),
  },
  {
    category: "Data & Infrastructure",
    technologies: "MySQL, Redis, Elasticsearch, RabbitMQ",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <ellipse cx="12" cy="5" rx="7" ry="3" />
        <path d="M5 5v7c0 1.7 3.1 3 7 3s7-1.3 7-3V5" />
        <path d="M5 12v7c0 1.7 3.1 3 7 3s7-1.3 7-3v-7" />
      </svg>
    ),
  },
  {
    category: "Tools & Deployment",
    technologies: "Docker, AWS, GitHub Actions, GitLab, Linux",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M17.5 19H9a7 7 0 1 1 6.7-9h1.8a4.5 4.5 0 1 1 0 9Z" />
      </svg>
    ),
  },
];

const ExperienceAndStack = () => {
  return (
    <section className="border-b border-slate-100 bg-white">
      <div className="mx-auto max-w-[1440px] px-6 py-8 lg:px-10 lg:py-9">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_1fr] lg:gap-14">
          {/* Experience */}
          <div>
            <div className="mb-5 flex items-center justify-between">
              <h2 className="text-xl font-semibold tracking-[-0.02em] text-[#102344] lg:text-2xl">
                Experience
              </h2>
            </div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-[6px] top-2 bottom-2 w-px bg-slate-200" />

              <div className="space-y-6">
                {experiences.map((experience) => (
                  <div
                    key={`${experience.company}-${experience.role}`}
                    className="relative pl-7"
                  >
                    {/* Timeline dot */}
                    <span className="absolute left-0 top-1.5 h-[13px] w-[13px] rounded-full border-[3px] border-[#dceaff] bg-blue-600" />

                    {/* Header */}
                    <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-start">
                      <div>
                        <h3 className="text-sm font-semibold leading-tight text-[#102344]">
                          {experience.company}
                        </h3>

                        <p className="mt-0.5 text-xs font-medium text-[#102344]">
                          {experience.role}
                        </p>
                      </div>

                      <span className="text-xs text-slate-500">
                        {experience.period}
                      </span>
                    </div>

                    <p className="mt-1.5 max-w-xl text-xs leading-[1.55] text-slate-500 lg:text-xs">
                      {experience.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Tech Stack */}
          <div>
            <div className="mb-5 flex items-center justify-between">
              <h2 className="text-xl font-semibold tracking-[-0.02em] text-[#102344] lg:text-2xl">
                Tech Stack
              </h2>

              <a
                href="/skills"
                className="flex items-center gap-1.5 text-xs font-medium text-blue-600 transition-colors hover:text-blue-800"
              >
                View all skills
                <span className="text-base leading-none">→</span>
              </a>
            </div>

            <div className="space-y-2">
              {techStack.map((item) => (
                <div
                  key={item.category}
                  className="flex min-h-[58px] items-center gap-4 rounded-lg border border-slate-200 bg-white px-4 py-3"
                >
                  <div className="shrink-0 text-[#163c78]">{item.icon}</div>

                  <div className="grid flex-1 gap-1 sm:grid-cols-[125px_1fr] sm:items-center">
                    <h3 className="text-xs font-semibold text-[#102344]">
                      {item.category}
                    </h3>

                    <p className="text-xs leading-4 text-slate-500">
                      {item.technologies}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceAndStack;
