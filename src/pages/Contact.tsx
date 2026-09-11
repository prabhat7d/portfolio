import { useState } from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  const [phoneCopied, setPhoneCopied] = useState(false);

  const phoneNumber = "+91 8920272591";

  const copyPhone = async () => {
    await navigator.clipboard.writeText(phoneNumber);

    setPhoneCopied(true);

    setTimeout(() => {
      setPhoneCopied(false);
    }, 1500);
  };
  return (
    <section className="min-h-[calc(100vh-60px)] bg-white">
      <div className="mx-auto max-w-[1440px] px-6 py-8 lg:px-10 lg:py-10">
        {/* Header */}
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-600">
            Contact
          </p>

          <h1 className="mt-2 text-3xl font-semibold tracking-[-0.035em] text-[#102344] sm:text-4xl">
            Let's build something great.
          </h1>

          <p className="mt-3 max-w-xl text-xs leading-5 text-slate-500 sm:text-sm">
            Have a project, opportunity, or interesting idea? I'd be happy to
            connect and explore how we can work together.
          </p>
        </div>

        {/* Contact Content */}
        <div className="mt-7 grid gap-4 lg:grid-cols-[1fr_380px]">
          {/* Contact Details */}
          <div className="rounded-lg border border-slate-200 bg-white p-5">
            <h2 className="text-sm font-semibold text-[#102344]">
              Get in touch
            </h2>

            <div className="mt-5 space-y-4">
              {/* Phone */}
              <button
                type="button"
                onClick={copyPhone}
                className="group relative flex w-full items-center gap-3 rounded-md border border-slate-100 p-3 text-left transition-colors hover:bg-[#f7faff]"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-md bg-[#eef5ff] text-blue-600">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L8 9.73a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.92Z" />
                  </svg>
                </div>

                <div>
                  <p className="text-xs text-slate-500">Phone</p>
                  <p className="mt-0.5 text-xs font-medium text-[#102344] group-hover:text-blue-600">
                    {phoneNumber}
                  </p>
                </div>

                {/* Tooltip */}
                {phoneCopied && (
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 rounded-md bg-[#102344] px-2.5 py-1 text-[11px] font-medium text-white shadow-sm">
                    Copied!
                  </span>
                )}
              </button>

              {/* Email */}
              <a
                href="mailto:prabhatkumargautam1997@gmail.com"
                className="group flex items-center gap-3 rounded-md border border-slate-100 p-3 transition-colors hover:bg-[#f7faff]"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-md bg-[#eef5ff] text-blue-600">
                  <svg
                    width="18"
                    height="18"
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
                </div>

                <div>
                  <p className="text-xs text-slate-500">Email</p>
                  <p className="mt-0.5 text-xs font-medium text-[#102344] group-hover:text-blue-600">
                    prabhatkumargautam1997@gmail.com
                  </p>
                </div>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/prabhat-kumar-gautam-7b8996b8/"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-3 rounded-md border border-slate-100 p-3 transition-colors hover:bg-[#f7faff]"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-md bg-[#eef5ff] text-blue-600">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M5.2 3.5A2.2 2.2 0 1 1 5.2 7.9a2.2 2.2 0 0 1 0-4.4ZM3.4 9.2h3.6V21H3.4V9.2ZM9.1 9.2h3.4v1.6h.1c.5-.9 1.7-1.9 3.6-1.9 3.8 0 4.5 2.5 4.5 5.8V21h-3.6v-5.6c0-1.3 0-3-1.9-3s-2.2 1.4-2.2 2.9V21H9.1V9.2Z" />
                  </svg>
                </div>

                <div>
                  <p className="text-xs text-slate-500">LinkedIn</p>
                  <p className="mt-0.5 text-xs font-medium text-[#102344] group-hover:text-blue-600">
                    Connect with me on LinkedIn
                  </p>
                </div>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/prabhat7d"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-3 rounded-md border border-slate-100 p-3 transition-colors hover:bg-[#f7faff]"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-md bg-[#eef5ff] text-blue-600">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M12 .7a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.6-4-1.6-.5-1.4-1.3-1.7-1.3-1.7-1.1-.8.1-.8.1-.8 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.7-.3-5.5-1.4-5.5-6a4.7 4.7 0 0 1 1.2-3.3c-.1-.3-.5-1.6.1-3.3 0 0 1-.3 3.3 1.2a11.4 11.4 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.7.2 3 .1 3.3a4.7 4.7 0 0 1 1.2 3.3c0 4.6-2.8 5.7-5.5 6 .4.3.7 1 .7 2v2.9c0 .3.2.7.8.6A12 12 0 0 0 12 .7Z" />
                  </svg>
                </div>

                <div>
                  <p className="text-xs text-slate-500">GitHub</p>
                  <p className="mt-0.5 text-xs font-medium text-[#102344] group-hover:text-blue-600">
                    View my projects and code
                  </p>
                </div>
              </a>
            </div>
          </div>

          {/* Availability Card */}
          <div className="flex flex-col justify-between rounded-lg bg-[#eef6ff] p-5">
            <div>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-green-500" />

                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">
                  Currently available
                </p>
              </div>

              <h2 className="mt-4 text-xl font-semibold leading-tight tracking-[-0.025em] text-[#102344]">
                Open to new opportunities.
              </h2>

              <p className="mt-3 text-xs leading-5 text-slate-600">
                I'm open to discussing full-time opportunities, interesting
                products, technical challenges, and collaborations.
              </p>
            </div>

            <Link
              to="/work"
              className="mt-6 inline-flex w-fit items-center gap-1.5 rounded-md bg-[#21458a] px-4 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-[#193a78]"
            >
              Explore My Work
              <span className="text-sm">→</span>
            </Link>
          </div>
        </div>

        {/* Bottom Statement */}
        <div className="mt-5 border-t border-slate-100 pt-5">
          <p className="text-xs leading-5 text-slate-500">
            Whether you're building a new product, scaling an existing system,
            or looking for an experienced engineer to join your team, feel free
            to reach out.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
