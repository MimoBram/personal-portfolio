import { useMemo, useState } from 'react'
import { projectsData } from '../data/portfolioData'

const filters = ['All', 'Application Design', 'Website Design']

const categoryTone = {
  'Application Design': {
    chip: 'border-indigo-400/20 bg-indigo-500/10 text-indigo-300',
    marker: 'bg-indigo-400',
  },
  'Website Design': {
    chip: 'border-emerald-400/20 bg-emerald-500/10 text-emerald-300',
    marker: 'bg-emerald-400',
  },
}

function Projects() {
  const [activeFilter, setActiveFilter] = useState('All')

  const visibleProjects = useMemo(() => {
    if (activeFilter === 'All') {
      return projectsData
    }

    return projectsData.filter((project) => project.category === activeFilter)
  }, [activeFilter])

  return (
    <section id="projects" className="px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-emerald-400">
              Projects
            </p>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-50 sm:text-5xl">
              Interface concepts built around real product needs.
            </h2>
          </div>
          <div className="flex flex-wrap gap-3 lg:justify-end" aria-label="Project filters">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                className={`rounded-full border px-4 py-2 text-sm font-medium tracking-wide transition-all duration-300 ease-out hover:-translate-y-1 hover:tracking-wider ${
                  activeFilter === filter
                    ? 'border-emerald-400/50 bg-emerald-500/10 text-emerald-300'
                    : 'border-slate-800/70 bg-[#131b2e]/60 text-slate-400 hover:border-slate-700 hover:text-slate-50'
                }`}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-12">
          {visibleProjects.map((project, index) => {
            const tone = categoryTone[project.category]
            const spanClass = index % 5 === 0 || index % 5 === 3 ? 'lg:col-span-7' : 'lg:col-span-5'

            return (
              <article
                key={project.title}
                className={`${spanClass} group min-h-80 rounded-[1.75rem] border border-slate-800/50 bg-[#131b2e]/60 p-6 transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.02] hover:border-slate-700 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)]`}
              >
                <div className="flex items-center justify-between gap-4">
                  <span className={`rounded-full border px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] ${tone.chip}`}>
                    {project.category}
                  </span>
                  <span className={`h-2.5 w-2.5 rounded-full ${tone.marker}`} aria-hidden="true" />
                </div>

                <h3 className="mt-8 text-3xl font-bold tracking-tight text-slate-50">
                  {project.title}
                </h3>
                <p className="mt-3 text-lg font-semibold text-slate-200">
                  {project.subtitle}
                </p>
                <p className="mt-5 max-w-2xl leading-7 text-slate-400">
                  {project.description}
                </p>

                <div className="mt-8 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-slate-800/70 bg-[#0b0f19]/70 px-3 py-1 text-xs font-medium tracking-wide text-slate-400 transition-all duration-300 ease-out group-hover:border-slate-700"
                    >
                      {tag}
                    </span>
                  ))}
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
