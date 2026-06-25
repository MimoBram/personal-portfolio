import { profileData } from '../data/portfolioData'

function Hero() {
  return (
    <section id="home" className="relative overflow-hidden px-6 pb-24 pt-36 sm:pb-32">
      <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.12fr_0.88fr]">
        <div>
          <div className="inline-flex rounded-full border border-slate-800/60 bg-[#131b2e]/60 px-4 py-2 text-sm font-medium tracking-wide text-emerald-400 backdrop-blur-md">
            {profileData.location}
          </div>

          <h1 className="mt-8 max-w-4xl text-5xl font-black leading-[0.95] tracking-tight text-slate-50 sm:text-7xl lg:text-8xl">
            {profileData.name}
          </h1>

          <p className="mt-7 max-w-2xl text-2xl font-semibold tracking-tight text-indigo-400 sm:text-3xl">
            {profileData.headline}
          </p>

          <p className="mt-7 max-w-3xl text-base leading-8 text-slate-400 sm:text-lg">
            {profileData.about}
          </p>

          <div className="mt-8 flex flex-wrap gap-3" aria-label="Specialties">
            {profileData.specialties.map((specialty, index) => (
              <span
                key={specialty}
                className={`rounded-full border px-4 py-2 text-sm font-medium tracking-wide transition-all duration-300 ease-out hover:-translate-y-1 ${
                  index % 2 === 0
                    ? 'border-emerald-400/20 bg-emerald-500/10 text-emerald-300'
                    : 'border-indigo-400/20 bg-indigo-500/10 text-indigo-300'
                }`}
              >
                {specialty}
              </span>
            ))}
          </div>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#projects"
              className="group inline-flex items-center justify-center rounded-full border border-emerald-400/40 bg-emerald-500/10 px-6 py-3 text-sm font-bold tracking-wide text-emerald-200 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-emerald-300 hover:bg-emerald-400 hover:text-[#0b0f19] hover:tracking-wider"
            >
              Explore Projects
              <span className="ml-2 transition-all duration-300 ease-out group-hover:translate-x-1">→</span>
            </a>
            <a
              href={`mailto:${profileData.email}`}
              className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-[#131b2e]/60 px-6 py-3 text-sm font-bold tracking-wide text-slate-100 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-slate-500 hover:bg-slate-800 hover:tracking-wider"
            >
              Contact Me
            </a>
          </div>
        </div>

        <section
          id="about"
          className="relative rounded-[2rem] border border-slate-800/50 bg-[#131b2e]/60 p-6 shadow-2xl shadow-black/20 backdrop-blur-md transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.02] hover:border-slate-700 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
        >
          <div className="absolute right-6 top-6 rounded-full border border-indigo-400/20 bg-indigo-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-indigo-300">
            Available
          </div>
          <div className="pt-12">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-emerald-400">
              Profile Snapshot
            </p>
            <h2 className="mt-5 text-3xl font-bold tracking-tight text-slate-50">
              Design sensitivity with front-end execution.
            </h2>
            <dl className="mt-8 grid gap-5">
              <div className="border-t border-slate-800/70 pt-5">
                <dt className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                  Email
                </dt>
                <dd className="mt-2 break-all text-sm font-medium text-slate-200">
                  {profileData.email}
                </dd>
              </div>
              <div className="border-t border-slate-800/70 pt-5">
                <dt className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                  Core Focus
                </dt>
                <dd className="mt-2 text-sm font-medium leading-7 text-slate-300">
                  Responsive web and mobile interfaces, user flows, wireframes,
                  and high-fidelity prototypes.
                </dd>
              </div>
            </dl>

            <div className="mt-8 flex gap-3">
              <a
                href={profileData.links.github}
                target="_blank"
                rel="noreferrer"
                aria-label="Open GitHub profile"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-700 bg-[#0b0f19] text-sm font-bold text-slate-300 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-emerald-400/60 hover:bg-emerald-500/10 hover:text-emerald-300"
              >
                GH
              </a>
              <a
                href={profileData.links.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="Open LinkedIn profile"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-700 bg-[#0b0f19] text-sm font-bold text-slate-300 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-indigo-400/60 hover:bg-indigo-500/10 hover:text-indigo-300"
              >
                IN
              </a>
            </div>
          </div>
        </section>
      </div>
    </section>
  )
}

export default Hero
