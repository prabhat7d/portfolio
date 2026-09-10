const skillGroups = [
  {
    title: "Frontend Development",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="3" y="4" width="18" height="14" rx="2" />
        <path d="M8 21h8" />
        <path d="M12 18v3" />
      </svg>
    ),
    skills:
      "React.js, Next.js, Vue.js, TypeScript, JavaScript, Redux Toolkit, TanStack Query, Tailwind CSS, jQuery",
  },
  {
    title: "Backend Development",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="4" y="3" width="16" height="5" rx="1" />
        <rect x="4" y="10" width="16" height="5" rx="1" />
        <rect x="4" y="17" width="16" height="4" rx="1" />
        <path d="M8 5.5h.01" />
        <path d="M8 12.5h.01" />
        <path d="M8 19h.01" />
      </svg>
    ),
    skills:
      "PHP, Laravel, REST APIs, GraphQL, API Architecture, Modular Architecture, Distributed Systems, Event-Driven Systems",
  },
  {
    title: "Data, Caching & Messaging",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <ellipse cx="12" cy="5" rx="8" ry="3" />
        <path d="M4 5v7c0 1.7 3.6 3 8 3s8-1.3 8-3V5" />
        <path d="M4 12v7c0 1.7 3.6 3 8 3s8-1.3 8-3v-7" />
      </svg>
    ),
    skills:
      "MySQL, Redis, Elasticsearch, RabbitMQ, Query Optimization, Caching, Queues, Rate Limiting",
  },
  {
    title: "Cloud & DevOps",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M17.5 19H9a6 6 0 1 1 1.5-11.8A6.5 6.5 0 0 1 23 10.5 4.5 4.5 0 0 1 18.5 15H17.5" />
        <path d="M12 12v6" />
        <path d="m9.5 15 2.5 3 2.5-3" />
      </svg>
    ),
    skills:
      "AWS (EC2, S3, RDS), Docker, Vercel, GitHub Actions, GitLab, Linux, CI/CD",
  },
  {
    title: "Testing & Code Quality",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="4" y="3" width="16" height="18" rx="2" />
        <path d="m8 12 2.5 2.5L16 9" />
      </svg>
    ),
    skills: "Pest, Jest, PHPStan, Pint, ESLint, Prettier",
  },
  {
    title: "AI & Development Tools",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M12 3v4" />
        <path d="M12 17v4" />
        <path d="m4.2 5.2 2.8 2.8" />
        <path d="m17 16 2.8 2.8" />
        <path d="M3 12h4" />
        <path d="M17 12h4" />
        <path d="m4.2 18.8 2.8-2.8" />
        <path d="m17 8 2.8-2.8" />
        <circle cx="12" cy="12" r="4" />
      </svg>
    ),
    skills: "Cursor AI, GitHub Copilot, ChatGPT, Claude",
  },
  {
    title: "Engineering Practices",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="6" cy="6" r="2" />
        <circle cx="18" cy="6" r="2" />
        <circle cx="12" cy="18" r="2" />
        <path d="M8 7.5 10.5 16" />
        <path d="M16 7.5 13.5 16" />
      </svg>
    ),
    skills:
      "System Design, Code Reviews, Agile/Scrum, Sprint Planning, Effort Estimation, Team Mentoring",
  },
  {
    title: "Other Skills",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="5" cy="12" r="1.5" />
        <circle cx="12" cy="12" r="1.5" />
        <circle cx="19" cy="12" r="1.5" />
        <path d="M6.5 12h4" />
        <path d="M13.5 12h4" />
      </svg>
    ),
    skills:
      "API Integration, Payment Gateways, Search Infrastructure, Performance Optimization, Scalable Architecture",
  },
];

const QuoteCard = () => {
  return (
    <div className="flex min-h-[150px] flex-col justify-between rounded-lg bg-[#eef6ff] p-5">
      <div>
        <span className="text-3xl font-bold leading-none text-blue-600">“</span>

        <p className="mt-1 text-[12px] font-medium leading-5 text-[#102344]">
          Technology changes, but good engineering principles always stay.
        </p>
      </div>

      <p className="text-right text-[10px] text-slate-500">
        — Prabhat Kumar Gautam
      </p>
    </div>
  );
};

const Skills = () => {
  return (
    <section className="min-h-[calc(100vh-60px)] bg-white">
      <div className="mx-auto max-w-[1440px] px-6 py-8 lg:px-10 lg:py-10">
        {/* Header */}
        <div className="mb-6">
          <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-blue-600">
            Skills
          </p>

          <h1 className="mt-2 text-3xl font-semibold tracking-[-0.035em] text-[#102344] sm:text-4xl">
            Technical Skills
          </h1>

          <p className="mt-2 max-w-2xl text-xs leading-5 text-slate-500 sm:text-sm">
            A balanced mix of frontend, backend and cloud technologies.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <article
              key={group.title}
              className="min-h-[150px] rounded-lg border border-slate-200 bg-white p-4 transition-shadow hover:shadow-sm"
            >
              <div className="flex items-center gap-2.5">
                <div className="text-blue-600">{group.icon}</div>

                <h2 className="text-[12px] font-semibold text-[#102344]">
                  {group.title}
                </h2>
              </div>

              <p className="mt-3 text-[10px] leading-[1.65] text-slate-500 sm:text-[11px]">
                {group.skills}
              </p>
            </article>
          ))}

          <QuoteCard />
        </div>
      </div>
    </section>
  );
};

export default Skills;
