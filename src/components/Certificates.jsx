import { certificatesData } from '../data/portfolioData'

function groupByIssuer(items) {
  return items.reduce((groups, item) => {
    const groupName = item.group

    if (!groups[groupName]) {
      groups[groupName] = []
    }

    groups[groupName].push(item)
    return groups
  }, {})
}

function Certificates() {
  const groupedCertificates = groupByIssuer(certificatesData)

  return (
    <section id="certificates" className="px-4 pb-28 pt-10 sm:px-6 sm:pb-36">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 rounded-[2rem] border border-zinc-800/60 bg-[#111113] p-6 sm:p-8 lg:grid-cols-[0.82fr_1.18fr] lg:p-10">
          <div>
            <p className="text-sm font-extrabold text-orange-500">
              Awards & Recognition
            </p>
            <h2 className="mt-4 max-w-xl text-5xl font-black leading-[0.98] tracking-[-0.06em] text-zinc-50 sm:text-6xl">
              Proud Moments, Shared Success
            </h2>
            <p className="mt-6 max-w-md leading-8 text-zinc-400">
              Certificates, internships, and professional experience grouped by
              issuer with credential details surfaced clearly.
            </p>
          </div>

          <div className="space-y-8">
            {Object.entries(groupedCertificates).map(([groupName, items]) => (
              <article key={groupName} className="border-t border-zinc-800/70 pt-6">
                <div className="mb-2 flex items-center justify-between gap-4">
                  <h3 className="text-sm font-extrabold text-orange-500">
                    {groupName}
                  </h3>
                  <span className="rounded-full bg-zinc-950 px-3 py-1 text-xs font-bold text-zinc-500">
                    {items.length.toString().padStart(2, '0')}
                  </span>
                </div>

                <div className="divide-y divide-zinc-800/70">
                  {items.map((certificate) => (
                    <div
                      key={`${certificate.title}-${certificate.issuer}`}
                      className="grid gap-4 py-5 transition-all duration-300 ease-out hover:translate-x-1 sm:grid-cols-[1fr_auto]"
                    >
                      <div>
                        <div className="flex flex-wrap items-center gap-3">
                          <h4 className="text-xl font-extrabold tracking-tight text-zinc-50">
                            {certificate.title}
                          </h4>
                          <span className="rounded-full border border-zinc-800 bg-zinc-950 px-3 py-1 text-xs font-bold text-zinc-500">
                            {certificate.issuer}
                          </span>
                        </div>
                        <p className="mt-3 max-w-2xl leading-7 text-zinc-400">
                          {certificate.summary}
                        </p>
                        {certificate.credentialId && (
                          <p className="mt-3 font-mono text-xs font-semibold tracking-wide text-zinc-300">
                            ID: {certificate.credentialId}
                          </p>
                        )}
                      </div>
                      <div className="sm:text-right">
                        <span className="inline-flex rounded-full bg-orange-600/10 px-3 py-1 text-xs font-extrabold text-orange-400">
                          {certificate.period}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>

        <section className="mt-5 overflow-hidden rounded-[2rem] border border-zinc-800/60 bg-[#111113]">
          <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[0.9fr_1.1fr] lg:p-10">
            <div>
              <p className="text-sm font-extrabold text-orange-500">
                Contact me
              </p>
              <h2 className="mt-4 max-w-xl text-5xl font-black leading-[0.98] tracking-[-0.06em] text-zinc-50 sm:text-6xl">
                Let&apos;s Create Something Meaningful
              </h2>
            </div>
            <div className="flex flex-col justify-between gap-8">
              <p className="max-w-xl text-xl font-extrabold leading-tight text-zinc-50">
                Whether you&apos;re starting from scratch or need a brand-new
                interface direction, I&apos;m ready to turn ideas into clear
                digital experiences.
              </p>
              <a
                href="mailto:bimoadi.bramantyo@gmail.com"
                className="group inline-flex w-fit items-center rounded-full bg-orange-600 py-2 pl-5 pr-2 text-sm font-extrabold tracking-tight text-zinc-50 transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-zinc-50 hover:text-[#0c0c0e]"
              >
                bimoadi.bramantyo@gmail.com
                <span className="ml-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-zinc-50 text-orange-600 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:bg-orange-600 group-hover:text-zinc-50">
                  →
                </span>
              </a>
            </div>
          </div>
        </section>
      </div>
    </section>
  )
}

export default Certificates
