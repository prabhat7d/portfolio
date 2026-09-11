import { Link } from "react-router-dom";

const WorkTogether = () => {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1440px] px-6 py-7 lg:px-10 lg:py-8">
        <div className="flex flex-col gap-6 rounded-xl bg-[#f1f7ff] px-6 py-6 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-10">
          {/* Content */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#21458a]">
              Let's Work Together
            </p>

            <h2 className="mt-2 text-xl font-semibold tracking-[-0.025em] text-[#102344] lg:text-2xl">
              Have a challenging product or idea?
            </h2>

            <p className="mt-1.5 text-xs leading-5 text-slate-500 sm:text-sm">
              I'm always open to discussing new opportunities, interesting
              projects, or ideas.
            </p>
          </div>

          {/* Actions */}
          <div className="flex shrink-0 items-center gap-5">
            <Link
              to="/contact"
              className="inline-flex h-[42px] items-center gap-2 rounded-lg bg-[#102f63] px-5 text-xs font-semibold text-white transition-colors hover:bg-[#0b254e]"
            >
              Get in touch
              <span className="text-base leading-none">→</span>
            </Link>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/prabhat-kumar-gautam-7b8996b8/"
              aria-label="LinkedIn"
              className="text-[#102344] transition-colors hover:text-blue-600"
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M6.5 8.5H3V21h3.5V8.5ZM4.75 3C3.65 3 3 3.72 3 4.65c0 .94.7 1.65 1.72 1.65h.03c1.1 0 1.75-.71 1.75-1.65C6.5 3.72 5.8 3 4.75 3ZM21 13.83c0-3.77-2.01-5.52-4.7-5.52-2.17 0-3.14 1.2-3.68 2.05V8.5H9.12V21h3.5v-6.98c0-1.84.35-3.62 2.63-3.62 2.25 0 2.28 2.1 2.28 3.74V21H21v-7.17Z" />
              </svg>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/prabhat7d"
              aria-label="GitHub"
              className="text-[#102344] transition-colors hover:text-blue-600"
            >
              <svg
                width="23"
                height="23"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 .8a11.2 11.2 0 0 0-3.54 21.82c.56.1.77-.24.77-.54v-2.1c-3.13.68-3.79-1.33-3.79-1.33-.51-1.3-1.25-1.65-1.25-1.65-1.02-.7.08-.69.08-.69 1.13.08 1.73 1.16 1.73 1.16 1 .1 1.65.98 1.65.98.9 1.64 2.35 1.17 2.93.9.1-.7.39-1.17.71-1.44-2.5-.29-5.13-1.25-5.13-5.56 0-1.23.44-2.23 1.16-3.02-.12-.29-.5-1.43.11-2.98 0 0 .95-.3 3.1 1.15a10.8 10.8 0 0 1 5.64 0c2.15-1.45 3.1-1.15 3.1-1.15.61 1.55.23 2.69.11 2.98.72.79 1.16 1.79 1.16 3.02 0 4.32-2.63 5.27-5.14 5.55.4.35.75 1.03.75 2.08v3.08c0 .3.2.65.78.54A11.2 11.2 0 0 0 12 .8Z" />
              </svg>
            </a>

            {/* Email */}
            <a
              href="mailto:prabhatkumargautam1997@gmail.com"
              aria-label="Email"
              className="text-[#102344] transition-colors hover:text-blue-600"
            >
              <svg
                width="23"
                height="23"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="m3 7 9 6 9-6" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkTogether;
