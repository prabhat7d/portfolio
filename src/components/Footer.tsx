import { Link } from "react-router-dom";

const Footer = () => {
  const data = new Date();
  const year = data.getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-[1440px] px-6 py-6 lg:px-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          {/* Brand */}
          <Link to="/" className="flex items-center gap-4">
            <span className="text-2xl font-bold tracking-[-0.04em] text-[#21458a]">
              PKG
            </span>

            <div className="border-l border-slate-200 pl-4">
              <p className="text-xs font-semibold leading-tight text-[#102344]">
                Prabhat Kumar Gautam
              </p>

              <p className="mt-1 text-[10px] text-slate-500">
                Senior Full Stack Engineer
              </p>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="flex flex-wrap items-center gap-5">
            <Link
              to="/work"
              className="text-[11px] text-slate-600 transition-colors hover:text-blue-600"
            >
              Work
            </Link>

            <Link
              to="/experience"
              className="text-[11px] text-slate-600 transition-colors hover:text-blue-600"
            >
              Experience
            </Link>

            <Link
              to="/skills"
              className="text-[11px] text-slate-600 transition-colors hover:text-blue-600"
            >
              Skills
            </Link>

            <Link
              to="/about"
              className="text-[11px] text-slate-600 transition-colors hover:text-blue-600"
            >
              About
            </Link>

            <Link
              to="/contact"
              className="text-[11px] text-slate-600 transition-colors hover:text-blue-600"
            >
              Contact
            </Link>
          </nav>

          {/* Copyright */}
          <p className="text-[10px] text-slate-400 sm:text-right">
            © {year} Prabhat Kumar Gautam. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
