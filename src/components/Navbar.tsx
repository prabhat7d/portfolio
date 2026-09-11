import { useState } from "react";
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

const MenuIcon = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M4 6h16" />
    <path d="M4 12h16" />
    <path d="M4 18h16" />
  </svg>
);

const CloseIcon = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M6 6l12 12" />
    <path d="M18 6 6 18" />
  </svg>
);

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-[#f7faff]">
        <nav className="mx-auto flex h-[60px] max-w-[1440px] items-center px-6 lg:px-10">
          {/* Brand */}
          <Link to="/" onClick={closeMenu} className="flex items-center gap-5">
            {/* Logo */}
            <span className="text-[26px] font-bold tracking-[-0.04em] text-[#102344]">
              PKG
            </span>

            {/* Name + Role */}
            <div className="hidden border-l border-slate-200 pl-5 sm:block">
              <p className="text-base font-semibold leading-tight text-[#111827]">
                Prabhat Kumar Gautam
              </p>

              <p className="mt-1 text-xs leading-tight text-slate-500">
                Senior Full Stack Engineer
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="ml-auto hidden items-center gap-7 md:flex">
            <div className="flex items-center gap-7">
              {navItems.map((item) => (
                <NavLink
                  key={item.label}
                  to={item.url}
                  className={({ isActive }) =>
                    [
                      "relative flex h-[60px] items-center text-xs font-medium transition-colors",
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
              className="flex h-[38px] items-center gap-2 rounded-[7px] bg-[#21458a] px-5 text-xs font-semibold text-white transition-colors hover:bg-[#193a78]"
            >
              <DownloadIcon />
              <span>Download Resume</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            className="ml-auto flex h-10 w-10 items-center justify-center rounded-md text-[#102344] transition-colors hover:bg-white md:hidden"
            aria-label="Open navigation menu"
            aria-expanded={menuOpen}
          >
            <MenuIcon />
          </button>
        </nav>
      </header>

      {/* Mobile Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-[60] bg-slate-900/30 md:hidden"
          onClick={closeMenu}
        />
      )}

      {/* Mobile Sidebar */}
      <aside
        className={[
          "fixed right-0 top-0 z-[70] h-full w-[280px] bg-white shadow-2xl transition-transform duration-300 md:hidden",
          menuOpen ? "translate-x-0" : "translate-x-full",
        ].join(" ")}
      >
        {/* Sidebar Header */}
        <div className="flex h-[60px] items-center justify-between border-b border-slate-200 px-6">
          <span className="text-lg font-bold tracking-[-0.04em] text-[#102344]">
            PKG
          </span>

          <button
            type="button"
            onClick={closeMenu}
            className="flex h-9 w-9 items-center justify-center rounded-md text-slate-600 transition-colors hover:bg-slate-100 hover:text-[#102344]"
            aria-label="Close navigation menu"
          >
            <CloseIcon />
          </button>
        </div>

        {/* Sidebar Navigation */}
        <div className="px-5 py-6">
          <div className="space-y-1">
            {navItems.map((item) => (
              <NavLink
                key={item.label}
                to={item.url}
                onClick={closeMenu}
                className={({ isActive }) =>
                  [
                    "flex rounded-md px-4 py-3 text-sm font-medium transition-colors",
                    isActive
                      ? "bg-[#eef5ff] text-blue-600"
                      : "text-[#102344] hover:bg-[#f7faff] hover:text-blue-600",
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
            onClick={closeMenu}
            className="mt-6 flex h-[42px] items-center justify-center gap-2 rounded-[7px] bg-[#21458a] px-5 text-xs font-semibold text-white transition-colors hover:bg-[#193a78]"
          >
            <DownloadIcon />
            <span>Download Resume</span>
          </a>
        </div>
      </aside>
    </>
  );
};

export default Navbar;
