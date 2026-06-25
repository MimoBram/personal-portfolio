import { projectsData } from '../data/portfolioData'

const categoryStyles = {
  'Application Design': 'border-cyan-300/30 bg-cyan-300/10 text-cyan-200',
  'Website Design': 'border-emerald-300/30 bg-emerald-300/10 text-emerald-200',
}

function Projects() {
  return (
    <section id="projects" className="px-6 py-24 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">
            Selected Work
          </p>
          <h2 className="mt-4 text-4xl font-black text-white sm:text-5xl">
            Product ideas shaped into clear digital experiences.
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            A focused collection of application and website design projects
            spanning wellness, education, productivity, business, and commerce.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {projectsData.map((project) => (
            <article
              key={project.title}
              className="group flex min-h-80 flex-col rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition duration-300 hover:-translate-y-2 hover:border-cyan-300/40 hover:bg-white/[0.07] hover:shadow-2xl hover:shadow-cyan-950/30"
            >
              <span
                className={`w-fit rounded-full border px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] ${categoryStyles[project.category]}`}
              >
                {project.category}
              </span>
              <h3 className="mt-6 text-2xl font-bold text-white">
                {project.title}
              </h3>
              <p className="mt-2 text-base font-semibold text-cyan-200">
                {project.tagline}
              </p>
              <p className="mt-5 flex-1 leading-7 text-slate-300">
                {project.description}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-slate-900 px-3 py-1 text-xs font-medium text-slate-300 ring-1 ring-white/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
