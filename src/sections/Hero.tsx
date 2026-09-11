import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="bg-[#f7faff]">
      <div className="mx-auto max-w-[1440px] px-6 py-6 lg:px-10 lg:py-8">
        <div className="flex items-center justify-between gap-12">
          {/* Left Content */}
          <div className="max-w-2xl">
            {/* Availability */}
            <div className="mb-4 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-green-500" />

              <span className="text-xs font-medium uppercase tracking-[0.1em] text-slate-500">
                Open to opportunities
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-3xl font-semibold leading-[1.1] tracking-[-0.03em] text-[#102344] sm:text-4xl lg:text-5xl">
              Building scalable
              <br />
              web applications
              <br />
              that create impact.
            </h1>

            {/* Description */}
            <p className="mt-5 max-w-xl text-sm leading-6 text-slate-600 sm:text-base">
              Senior Full Stack Engineer with 8+ years of experience building
              scalable, high-performance web applications and leading
              engineering teams.
            </p>

            {/* Actions */}
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Link
                to="/work"
                className="rounded-[6px] bg-[#21458a] px-5 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-[#193a78]"
              >
                View My Work
              </Link>

              <a
                href="/Prabhat.pdf"
                download="Prabhat-Kumar-Gautam-Resume.pdf"
                className="rounded-[6px] border border-slate-300 px-5 py-2.5 text-xs font-semibold text-[#102344] transition-colors hover:bg-slate-50"
              >
                Download Resume
              </a>
            </div>
          </div>

          {/* Right visual */}
          <div className="hidden flex-1 items-center justify-center gap-10 lg:flex">
            {/* Network visual */}
            <div className="relative h-[280px] w-[230px] rotate-[-18deg] rounded-3xl bg-[#dceaff]">
              {/* Connecting lines */}
              <div className="absolute left-[55px] top-[65px] h-px w-[100px] rotate-[18deg] bg-blue-300" />
              <div className="absolute left-[105px] top-[75px] h-[90px] w-px rotate-[-8deg] bg-blue-300" />
              <div className="absolute left-[55px] top-[145px] h-px w-[100px] rotate-[-20deg] bg-blue-300" />
              <div className="absolute left-[70px] top-[145px] h-[70px] w-px rotate-[10deg] bg-blue-300" />

              {/* Nodes */}
              <span className="absolute left-[45px] top-[55px] h-4 w-4 rounded-full bg-blue-400" />
              <span className="absolute left-[145px] top-[70px] h-4 w-4 rounded-full bg-blue-500" />
              <span className="absolute left-[100px] top-[135px] h-5 w-5 rounded-full bg-blue-500" />
              <span className="absolute left-[45px] top-[140px] h-4 w-4 rounded-full bg-blue-400" />
              <span className="absolute left-[150px] top-[160px] h-4 w-4 rounded-full bg-blue-300" />
              <span className="absolute left-[75px] top-[210px] h-4 w-4 rounded-full bg-blue-400" />

              {/* Small decorative dots */}
              <span className="absolute left-[35px] top-[95px] h-1.5 w-1.5 rounded-full bg-blue-300" />
              <span className="absolute left-[45px] top-[95px] h-1.5 w-1.5 rounded-full bg-blue-300" />
              <span className="absolute left-[55px] top-[95px] h-1.5 w-1.5 rounded-full bg-blue-300" />

              <span className="absolute bottom-[55px] right-[35px] h-1.5 w-1.5 rounded-full bg-blue-300" />
              <span className="absolute bottom-[55px] right-[25px] h-1.5 w-1.5 rounded-full bg-blue-300" />
              <span className="absolute bottom-[55px] right-[15px] h-1.5 w-1.5 rounded-full bg-blue-300" />
            </div>

            {/* Message */}
            <div className="max-w-[300px]">
              <p className="rotate-[-3deg] text-[30px] font-medium italic leading-[1.3] tracking-[-0.02em] text-[#111827]">
                Turning complexity
                <br />
                into clarity.
              </p>

              <div className="ml-3 mt-5 h-1.5 w-[190px] -rotate-3 rounded-full bg-[#dceaff]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
