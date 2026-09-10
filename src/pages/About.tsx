const strengths = [
  {
    title: "Problem Solver",
    description: "Break complex problems into simple solutions",
    icon: (
      <svg
        width="21"
        height="21"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="m8 9 3-3 3 3" />
        <path d="m16 15-3 3-3-3" />
        <path d="M11 6v12" />
        <path d="M8 9H5" />
        <path d="M16 15h3" />
      </svg>
    ),
  },
  {
    title: "Continuous Learner",
    description: "Always exploring new technologies",
    icon: (
      <svg
        width="21"
        height="21"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M9 18h6" />
        <path d="M10 22h4" />
        <path d="M8.5 14.5A6 6 0 1 1 15.5 14.5c-.8.6-1.5 1.4-1.5 2.5h-4c0-1.1-.7-1.9-1.5-2.5Z" />
      </svg>
    ),
  },
  {
    title: "Team Player",
    description: "Enjoy mentoring and knowledge sharing",
    icon: (
      <svg
        width="21"
        height="21"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="9" cy="8" r="3" />
        <path d="M3.5 19a5.5 5.5 0 0 1 11 0" />
        <circle cx="17" cy="9" r="2.5" />
        <path d="M15.5 14.5a4.5 4.5 0 0 1 5 4.5" />
      </svg>
    ),
  },
  {
    title: "Product Focused",
    description: "Build with long-term impact in mind",
    icon: (
      <svg
        width="21"
        height="21"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="8" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
];

const outsideWork = [
  {
    title: "Reading",
    description: "Tech, business, psychology",
    icon: (
      <svg
        width="21"
        height="21"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16H6.5A2.5 2.5 0 0 0 4 21.5v-16Z" />
        <path d="M4 19a2.5 2.5 0 0 1 2.5-2.5H20" />
      </svg>
    ),
  },
  {
    title: "Traveling",
    description: "Exploring new places",
    icon: (
      <svg
        width="21"
        height="21"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="m14.5 4.5 5 5" />
        <path d="M13 6 4 15l-1 6 6-1 9-9" />
        <path d="m8 12 4 4" />
        <path d="m15 3 3 3" />
      </svg>
    ),
  },
  {
    title: "Fitness",
    description: "Staying active",
    icon: (
      <svg
        width="21"
        height="21"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M6 9v6" />
        <path d="M18 9v6" />
        <path d="M3 10v4" />
        <path d="M21 10v4" />
        <path d="M6 12h12" />
        <path d="M3 12h3" />
        <path d="M18 12h3" />
      </svg>
    ),
  },
  {
    title: "Good Coffee",
    description: "Always a plus!",
    icon: (
      <svg
        width="21"
        height="21"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M4 8h13v6a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5V8Z" />
        <path d="M17 10h2a2.5 2.5 0 0 1 0 5h-2" />
        <path d="M7 4c0 1 1 1 1 2" />
        <path d="M11 4c0 1 1 1 1 2" />
      </svg>
    ),
  },
];

const About = () => {
  return (
    <section className="min-h-[calc(100vh-60px)] bg-white">
      <div className="mx-auto max-w-[1440px] px-6 py-8 lg:px-10 lg:py-9">
        {/* Header / Intro */}
        <div className="grid items-center gap-8 lg:grid-cols-[1fr_420px]">
          {/* Left content */}
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-blue-600">
              About
            </p>

            <h1 className="mt-2 text-3xl font-semibold tracking-[-0.035em] text-[#102344] sm:text-4xl">
              More than just code.
            </h1>

            <div className="mt-3 max-w-[650px] space-y-3 text-xs leading-5 text-slate-600 sm:text-sm">
              <p>
                I'm Prabhat Kumar Gautam, a Senior Full Stack Engineer with 8+
                years of experience building scalable SaaS, AI-powered and
                eCommerce platforms.
              </p>

              <p>
                I enjoy solving complex problems, designing scalable
                architectures, and working on products that create real value.
              </p>

              <p>
                Over the years, I've worked with startups and product companies,
                led engineering initiatives, and collaborated with amazing teams
                to ship high-impact solutions.
              </p>
            </div>
          </div>

          {/* Right Visual */}
          <div className="hidden lg:flex lg:justify-end">
            <div className="relative h-[270px] w-[430px] overflow-hidden rounded-2xl border border-slate-200 bg-[#f7faff] p-6">
              {/* Background network */}
              <div className="absolute inset-0 opacity-60">
                <div className="absolute left-[70px] top-[55px] h-px w-[110px] rotate-[18deg] bg-blue-200" />
                <div className="absolute left-[175px] top-[65px] h-[85px] w-px rotate-[8deg] bg-blue-200" />
                <div className="absolute left-[175px] top-[145px] h-px w-[115px] rotate-[-15deg] bg-blue-200" />
                <div className="absolute left-[100px] top-[145px] h-[70px] w-px rotate-[-12deg] bg-blue-200" />

                <span className="absolute left-[62px] top-[48px] h-3 w-3 rounded-full bg-blue-300" />
                <span className="absolute left-[168px] top-[58px] h-4 w-4 rounded-full bg-blue-400" />
                <span className="absolute left-[168px] top-[137px] h-5 w-5 rounded-full bg-blue-500" />
                <span className="absolute left-[92px] top-[139px] h-3 w-3 rounded-full bg-blue-300" />
                <span className="absolute left-[280px] top-[132px] h-3 w-3 rounded-full bg-blue-300" />
                <span className="absolute left-[100px] top-[210px] h-3 w-3 rounded-full bg-blue-300" />
              </div>

              {/* Content */}
              <div className="relative z-10">
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-blue-600">
                  Engineering Snapshot
                </p>

                <h2 className="mt-2 max-w-[250px] text-xl font-semibold leading-tight tracking-[-0.025em] text-[#102344]">
                  Building systems that scale.
                </h2>

                {/* Stats */}
                <div className="mt-6 grid max-w-[310px] grid-cols-2 gap-x-8 gap-y-4">
                  <div>
                    <p className="text-xl font-semibold tracking-[-0.02em] text-[#102344]">
                      8+
                    </p>
                    <p className="mt-0.5 text-[10px] text-slate-500">
                      Years Experience
                    </p>
                  </div>

                  <div>
                    <p className="text-xl font-semibold tracking-[-0.02em] text-[#102344]">
                      70+
                    </p>
                    <p className="mt-0.5 text-[10px] text-slate-500">
                      Modules Delivered
                    </p>
                  </div>

                  <div>
                    <p className="text-xl font-semibold tracking-[-0.02em] text-[#102344]">
                      10M+
                    </p>
                    <p className="mt-0.5 text-[10px] text-slate-500">
                      Products Handled
                    </p>
                  </div>

                  <div>
                    <p className="text-xl font-semibold tracking-[-0.02em] text-[#102344]">
                      40+
                    </p>
                    <p className="mt-0.5 text-[10px] text-slate-500">
                      Developers Led
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom accent */}
              <div className="absolute bottom-5 right-6 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
                <span className="text-[9px] font-medium text-slate-500">
                  Always learning. Always building.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Strengths */}
        <div className="mt-5 grid border-y border-slate-100 sm:grid-cols-2 lg:grid-cols-4">
          {strengths.map((item, index) => (
            <div
              key={item.title}
              className={[
                "flex gap-3 py-4 lg:px-5",
                index > 0
                  ? "border-t border-slate-100 lg:border-l lg:border-t-0"
                  : "",
                index === 2 ? "sm:border-t-0" : "",
              ].join(" ")}
            >
              <div className="shrink-0 text-blue-600">{item.icon}</div>

              <div>
                <h2 className="text-[11px] font-semibold text-[#102344]">
                  {item.title}
                </h2>

                <p className="mt-1 text-[10px] leading-4 text-slate-500">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Outside of Work */}
        <div className="mt-6">
          <h2 className="text-[15px] font-semibold tracking-[-0.02em] text-[#102344]">
            Outside of Work
          </h2>

          <div className="mt-3 grid sm:grid-cols-2 lg:grid-cols-4">
            {outsideWork.map((item, index) => (
              <div
                key={item.title}
                className={[
                  "flex items-center gap-3 py-2",
                  index > 0 ? "lg:border-l lg:border-slate-100 lg:pl-6" : "",
                ].join(" ")}
              >
                <div className="text-blue-600">{item.icon}</div>

                <div>
                  <h3 className="text-[11px] font-semibold text-[#102344]">
                    {item.title}
                  </h3>

                  <p className="mt-0.5 text-[9px] text-slate-500">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quote */}
        <div className="mt-5 flex items-center justify-between gap-5 rounded-lg bg-[#eef6ff] px-5 py-4">
          <div className="flex items-start gap-3">
            <span className="text-3xl font-bold leading-none text-blue-600">
              “
            </span>

            <p className="pt-1 text-[11px] font-medium leading-5 text-[#102344]">
              I believe in building simple, scalable and meaningful solutions
              that make a real difference.
            </p>
          </div>

          <p className="hidden shrink-0 text-[9px] text-slate-500 sm:block">
            — Prabhat Kumar Gautam
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
