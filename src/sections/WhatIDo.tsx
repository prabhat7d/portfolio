const capabilities = [
  {
    title: "Full Stack Development",
    description: "React, Next.js, Laravel and modern web technologies.",
    icon: (
      <svg
        width="30"
        height="30"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="m8 9-4 3 4 3" />
        <path d="m16 9 4 3-4 3" />
        <path d="m14 5-4 14" />
      </svg>
    ),
  },
  {
    title: "Scalable Architectures",
    description: "APIs, caching, queues, search and performance optimization.",
    icon: (
      <svg
        width="30"
        height="30"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <ellipse cx="12" cy="5" rx="8" ry="3" />
        <path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5" />
        <path d="M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6" />
      </svg>
    ),
  },
  {
    title: "Cloud & DevOps",
    description: "AWS, Docker, CI/CD and production deployments.",
    icon: (
      <svg
        width="30"
        height="30"
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
  {
    title: "Leadership & Mentoring",
    description: "Code reviews, architecture discussions and team mentoring.",
    icon: (
      <svg
        width="30"
        height="30"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
];

const WhatIDo = () => {
  return (
    <section className="border-b border-slate-100 bg-white">
      <div className="mx-auto max-w-[1440px] px-6 py-8 lg:px-10 lg:py-9">
        {/* Section header */}
        <div className="mb-5 flex items-center justify-between">
          <h2 className="text-xl font-semibold tracking-[-0.02em] text-[#102344] lg:text-2xl">
            What I Do
          </h2>

          <a
            href="/skills"
            className="flex items-center gap-1.5 text-xs font-medium text-blue-600 transition-colors hover:text-blue-800"
          >
            More about my skills
            <span className="text-base leading-none">→</span>
          </a>
        </div>

        {/* Capabilities */}
        <div className="grid gap-3.5 sm:grid-cols-2 lg:grid-cols-4">
          {capabilities.map((capability) => (
            <div
              key={capability.title}
              className="flex min-h-[102px] gap-4 rounded-lg bg-[#f4f8fd] px-4 py-4"
            >
              <div className="shrink-0 pt-0.5 text-blue-600">
                {capability.icon}
              </div>

              <div>
                <h3 className="text-xs font-semibold text-[#102344] lg:text-[13px]">
                  {capability.title}
                </h3>

                <p className="mt-2 text-[11px] leading-[1.55] text-slate-600 lg:text-xs">
                  {capability.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatIDo;
