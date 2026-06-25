import { profileData } from '../data/portfolioData'

function Hero() {
  const roles = profileData.roles.join(' & ')

  return (
    <section
      id="home"
      className="relative isolate overflow-hidden px-6 pt-32 sm:px-8 lg:px-10"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_20%,rgba(34,211,238,0.22),transparent_28%),radial-gradient(circle_at_85%_12%,rgba(16,185,129,0.16),transparent_26%),linear-gradient(180deg,#020617_0%,#0f172a_52%,#020617_100%)]" />
      <div className="mx-auto grid min-h-[calc(100vh-5rem)] max-w-7xl items-center gap-12 py-20 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">
            {profileData.location}
          </p>
          <h1 className="mt-6 max-w-4xl text-5xl font-black leading-tight text-white sm:text-7xl">
            {profileData.name}
          </h1>
          <p className="mt-6 text-2xl font-semibold text-emerald-300 sm:text-3xl">
            {roles}
          </p>
          <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-300">
            {profileData.about}
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-full bg-cyan-300 px-6 py-3 text-sm font-bold text-slate-950 shadow-lg shadow-cyan-950/40 transition hover:-translate-y-0.5 hover:bg-cyan-200"
            >
              View Projects
            </a>
            <a
              href={`mailto:${profileData.email}`}
              className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-white/10"
            >
              Contact Me
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={profileData.links.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/10 px-4 py-2 text-sm font-medium text-slate-300 transition hover:border-cyan-300/60 hover:text-cyan-200"
            >
              GitHub
            </a>
            <a
              href={profileData.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/10 px-4 py-2 text-sm font-medium text-slate-300 transition hover:border-cyan-300/60 hover:text-cyan-200"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <aside
          id="about"
          className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-cyan-950/30 backdrop-blur"
        >
          <div className="rounded-2xl border border-cyan-300/20 bg-slate-950/80 p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-300">
              About Me
            </p>
            <h2 className="mt-4 text-3xl font-bold text-white">
              Designing useful interfaces and building responsive front-end
              experiences.
            </h2>
            <p className="mt-5 leading-7 text-slate-300">{profileData.about}</p>
            <div className="mt-6 grid gap-3 text-sm text-slate-300">
              <span>Email: {profileData.email}</span>
              <span>Based in: {profileData.location}</span>
            </div>
          </div>
        </aside>
      </div>
    </section>
  )
}

export default Hero
