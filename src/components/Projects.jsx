import { projectsData } from '../data/portfolioData'

const categoryStyles = {
  'Application Design': 'border-orange-500/50 bg-orange-600/10 text-orange-400',
  'Website Design': 'border-zinc-700 bg-zinc-950 text-zinc-300',
}

const cardAccents = [
  'from-orange-600/60 via-orange-950/30 to-zinc-950',
  'from-zinc-700/40 via-zinc-950 to-orange-950/30',
  'from-orange-500/35 via-zinc-950 to-zinc-950',
  'from-zinc-800 via-zinc-950 to-orange-900/30',
]

function Projects() {
  return (
    <section id="projects" className="px-4 py-28 sm:px-6 sm:py-36">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-end">
          <div>
            <p className="text-sm font-extrabold text-orange-500">
              Selected Work
            </p>
            <h2 className="mt-4 max-w-2xl text-5xl font-black leading-[0.95] tracking-[-0.06em] text-zinc-50 sm:text-6xl">
              Projects that turn ideas into useful interfaces.
            </h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-[1fr_auto] sm:items-end">
            <p className="max-w-xl leading-8 text-zinc-400">
              A curated set of application and website design projects across
              wellness, education, productivity, business, and commerce.
            </p>
            <a
              href={`mailto:bimoadi.bramantyo@gmail.com`}
              className="group inline-flex w-fit items-center rounded-full bg-zinc-50 py-2 pl-5 pr-2 text-sm font-extrabold tracking-tight text-[#0c0c0e] transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-orange-600 hover:text-zinc-50"
            >
              Discuss project
              <span className="ml-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-orange-600 text-zinc-50 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:bg-zinc-50 group-hover:text-orange-600">
                →
              </span>
            </a>
          </div>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-12">
          {projectsData.map((project, index) => {
            const isWide = index === 0 || index === 3 || index === 6
            const accent = cardAccents[index % cardAccents.length]

            return (
              <article
                key={project.title}
                className={`group relative min-h-[360px] overflow-hidden rounded-[2rem] border border-zinc-800/60 bg-[#111113] p-6 transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.02] hover:border-zinc-700 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] ${
                  isWide ? 'lg:col-span-7' : 'lg:col-span-5'
                }`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${accent} opacity-70 transition-all duration-300 ease-out group-hover:opacity-90`} />
                <div className="absolute -right-12 -top-12 h-48 w-48 rounded-full bg-orange-600/20 blur-3xl" />

                <div className="relative z-10 flex h-full flex-col">
                  <div className="flex items-center justify-between gap-4">
                    <span className={`rounded-full border px-3 py-1 text-xs font-extrabold ${categoryStyles[project.category]}`}>
                      {project.category}
                    </span>
                    <span className="text-sm font-extrabold text-orange-400">
                      #{project.id}
                    </span>
                  </div>

                  <div className="mt-auto pt-20">
                    <h3 className="text-4xl font-black tracking-[-0.05em] text-zinc-50">
                      {project.title}
                    </h3>
                    <p className="mt-3 max-w-xl text-lg font-extrabold leading-tight text-zinc-100">
                      {project.subtitle}
                    </p>
                    <p className="mt-5 max-w-2xl leading-7 text-zinc-400">
                      {project.description}
                    </p>
                    <div className="mt-7 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-zinc-800 bg-zinc-950/80 px-3 py-1 text-xs font-semibold text-zinc-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Projects
