import { certificatesData } from '../data/portfolioData'

const typeTone = {
  Experience: 'border-emerald-400/20 bg-emerald-500/10 text-emerald-300',
  Certificate: 'border-indigo-400/20 bg-indigo-500/10 text-indigo-300',
  Internship: 'border-emerald-400/20 bg-emerald-500/10 text-emerald-300',
  Competition: 'border-slate-600 bg-slate-800/60 text-slate-300',
}

function Certificates() {
  return (
    <section id="certificates" className="px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-indigo-400">
              Certificates
            </p>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-50 sm:text-5xl">
              Verified learning, internships, and hands-on delivery.
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-8 text-slate-400 lg:justify-self-end">
            Professional experience and certification highlights across UI/UX,
            front-end engineering, Flutter, full stack development, and
            programming fundamentals.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {certificatesData.map((certificate, index) => (
            <article
              key={`${certificate.title}-${certificate.issuer}`}
              className={`rounded-[1.5rem] border border-slate-800/50 bg-[#131b2e]/60 p-6 transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.02] hover:border-slate-700 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] ${
                index === 0 || index === 1 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className={`rounded-full border px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] ${typeTone[certificate.type]}`}>
                  {certificate.type}
                </span>
                {certificate.period && (
                  <span className="text-sm font-medium text-slate-500">
                    {certificate.period}
                  </span>
                )}
              </div>

              <h3 className="mt-6 text-xl font-bold tracking-tight text-slate-50">
                {certificate.title}
              </h3>
              <p className="mt-2 text-sm font-semibold text-emerald-400">
                {certificate.issuer}
              </p>
              <p className="mt-4 leading-7 text-slate-400">
                {certificate.summary}
              </p>

              {certificate.credentialId && (
                <div className="mt-6 rounded-2xl border border-slate-800/70 bg-[#0b0f19]/70 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                    Credential ID
                  </p>
                  <p className="mt-2 break-all font-mono text-sm text-slate-200">
                    {certificate.credentialId}
                  </p>
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certificates
