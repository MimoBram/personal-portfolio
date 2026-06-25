import { certificatesData } from '../data/portfolioData'

function Certificates() {
  return (
    <section id="certificates" className="px-6 py-24 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-emerald-300">
            Credentials
          </p>
          <h2 className="mt-4 text-4xl font-black text-white sm:text-5xl">
            Certifications, internships, and professional experience.
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            A structured record of front-end, UI/UX, programming, internship,
            and competition experience.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {certificatesData.map((certificate) => (
            <article
              key={`${certificate.issuer}-${certificate.title}-${certificate.period ?? 'no-period'}`}
              className="rounded-3xl border border-white/10 bg-slate-900/70 p-6 transition hover:border-emerald-300/40 hover:bg-slate-900"
            >
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-emerald-300/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-emerald-200 ring-1 ring-emerald-300/20">
                  {certificate.type}
                </span>
                {certificate.period && (
                  <span className="text-sm font-medium text-slate-400">
                    {certificate.period}
                  </span>
                )}
              </div>
              <h3 className="mt-5 text-xl font-bold text-white">
                {certificate.title}
              </h3>
              <p className="mt-2 text-sm font-semibold text-cyan-200">
                {certificate.issuer}
              </p>
              <p className="mt-4 leading-7 text-slate-300">
                {certificate.description}
              </p>
              {certificate.credential && (
                <p className="mt-5 rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 font-mono text-xs text-slate-300">
                  Credential ID: {certificate.credential}
                </p>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certificates
