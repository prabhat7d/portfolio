import { Link, NavLink } from "react-router-dom";

const navItems = [
  { label: "Work", url: "/work" },
  { label: "Experience", url: "/experience" },
  { label: "Skills", url: "/skills" },
  { label: "About", url: "/about" },
  { label: "Contact", url: "/contact" },
];

const DownloadIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M12 3v12" />
    <path d="m7 10 5 5 5-5" />
    <path d="M5 21h14" />
  </svg>
);

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-[#f7faff]">
      <nav className="mx-auto max-w-[1440px] px-6 lg:px-10 flex h-[60px] items-center">
        {/* Brand */}
        <Link to="/" className="flex items-center gap-5">
          {/* Logo */}
          <span className="text-[26px] font-bold tracking-[-0.04em] text-[#102344]">
            PKG
          </span>

          {/* Name + Role */}
          <div className="hidden border-l border-slate-200 pl-5 sm:block">
            <p className="text-[15px] font-semibold leading-tight text-[#111827]">
              Prabhat Kumar Gautam
            </p>

            <p className="mt-1 text-[11px] leading-tight text-slate-500">
              Senior Full Stack Engineer
            </p>
          </div>
        </Link>

        {/* Navigation */}
        <div className="ml-auto flex items-center gap-7">
          <div className="hidden items-center gap-7 md:flex">
            {navItems.map((item) => (
              <NavLink
                key={item.label}
                to={item.url}
                className={({ isActive }) =>
                  [
                    "relative flex h-[60px] items-center text-[12px] font-medium transition-colors",
                    isActive
                      ? "text-blue-600 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-blue-500"
                      : "text-[#0f172a] hover:text-blue-600",
                  ].join(" ")
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          {/* Resume */}
          <a
            href="/Prabhat.pdf"
            download
            className="flex h-[38px] items-center gap-2 rounded-[7px] bg-[#21458a] px-5 text-[12px] font-semibold text-white transition-colors hover:bg-[#193a78]"
          >
            <DownloadIcon />
            <span>Download Resume</span>
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
