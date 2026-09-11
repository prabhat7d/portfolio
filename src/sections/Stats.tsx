const stats = [
  {
    value: "8+",
    label: "Years Experience",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="3" y="7" width="18" height="13" rx="2" />
        <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
        <path d="M3 11h18" />
        <path d="M9 11v2h6v-2" />
      </svg>
    ),
  },
  {
    value: "70+",
    label: "Modules Delivered",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="m12 2 9 5-9 5-9-5 9-5Z" />
        <path d="m3 12 9 5 9-5" />
        <path d="m3 17 9 5 9-5" />
      </svg>
    ),
  },
  {
    value: "10M+",
    label: "Products Handled",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M4 20V10" />
        <path d="M10 20V4" />
        <path d="M16 20v-7" />
        <path d="M22 20V7" />
        <path d="M2 20h20" />
      </svg>
    ),
  },
  {
    value: "40+",
    label: "Developers Mentored",
    icon: (
      <svg
        width="28"
        height="28"
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

const Stats = () => {
  return (
    <section className="border-b border-slate-100 bg-white">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={[
                "flex items-center gap-4 py-5 lg:py-6",
                index !== 0 ? "lg:border-l lg:border-slate-200 lg:pl-8" : "",
                index === 1 ? "border-l border-slate-200 pl-6 lg:pl-8" : "",
                index === 2
                  ? "border-t border-slate-200 pl-0 lg:border-t-0 lg:pl-8"
                  : "",
                index === 3
                  ? "border-l border-t border-slate-200 pl-6 lg:border-t-0 lg:pl-8"
                  : "",
              ].join(" ")}
            >
              <div className="shrink-0 text-[#163c78]">{stat.icon}</div>

              <div>
                <p className="text-lg font-semibold leading-tight tracking-[-0.02em] text-[#102344] lg:text-xl">
                  {stat.value}
                </p>

                <p className="mt-1 text-xs text-slate-500 lg:text-xs">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
