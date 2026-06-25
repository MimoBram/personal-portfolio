import heroAsset from '../assets/hero.png'
import { profileData } from '../data/portfolioData'

function PillButton({ href, children, variant = 'light' }) {
  const isLight = variant === 'light'

  return (
    <a
      href={href}
      className={`group inline-flex items-center rounded-full py-2 pl-5 pr-2 text-sm font-extrabold tracking-tight transition-all duration-300 ease-out hover:-translate-y-1 ${
        isLight
          ? 'bg-zinc-50 text-[#0c0c0e] hover:bg-orange-600 hover:text-zinc-50'
          : 'border border-zinc-800 bg-zinc-950 text-zinc-50 hover:border-orange-500 hover:text-orange-400'
      }`}
    >
      {children}
      <span
        className={`ml-3 inline-flex h-8 w-8 items-center justify-center rounded-full transition-all duration-300 ease-out group-hover:translate-x-1 ${
          isLight
            ? 'bg-orange-600 text-zinc-50 group-hover:bg-zinc-50 group-hover:text-orange-600'
            : 'bg-orange-600 text-zinc-50'
        }`}
      >
        →
      </span>
    </a>
  )
}

function Hero() {
  return (
    <section id="home" className="px-4 pt-24 sm:px-6 lg:pt-28">
      <div className="mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-zinc-800/60 bg-[#111113] px-5 pb-8 pt-24 shadow-2xl shadow-black/30 sm:px-8 lg:min-h-[680px] lg:px-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_16%,rgba(255,93,34,0.78),transparent_24%),radial-gradient(circle_at_74%_48%,rgba(255,93,34,0.28),transparent_34%),linear-gradient(116deg,rgba(255,93,34,0.94)_0%,rgba(126,35,18,0.66)_30%,rgba(12,12,14,0.98)_58%)]" />
          <div className="absolute inset-y-0 right-0 hidden w-[52%] bg-[linear-gradient(90deg,transparent,rgba(12,12,14,0.08)),radial-gradient(circle_at_45%_35%,rgba(255,255,255,0.22),transparent_12%)] lg:block" />

          <div className="relative z-10 grid min-h-[560px] gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
            <div>
              <p className="text-lg font-bold tracking-tight text-zinc-50">
                Hey, I&apos;m a
              </p>
              <h1 className="mt-4 max-w-3xl text-6xl font-black leading-[0.88] tracking-[-0.06em] text-zinc-50 sm:text-7xl lg:text-8xl">
                {profileData.name}
              </h1>
              <p className="mt-7 max-w-xl text-2xl font-extrabold leading-tight tracking-tight text-zinc-50 sm:text-3xl">
                <span className="text-orange-500">{profileData.headline}</span>
              </p>
              <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-200/85">
                {profileData.about}
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <PillButton href="#projects">See projects</PillButton>
                <PillButton href={`mailto:${profileData.email}`} variant="dark">
                  Get in touch
                </PillButton>
              </div>
            </div>

            <div className="relative min-h-80 rounded-[2rem] border border-zinc-50/10 bg-black/25 p-5 backdrop-blur-sm lg:min-h-[430px]">
              <div className="absolute right-5 top-5 rounded-full bg-zinc-50 px-4 py-2 text-xs font-extrabold text-[#0c0c0e]">
                {profileData.location}
              </div>
              <div className="flex h-full flex-col justify-end">
                <img
                  src={heroAsset}
                  alt=""
                  className="absolute right-6 top-20 w-40 opacity-80 mix-blend-screen sm:w-52"
                />
                <p className="max-w-sm text-2xl font-extrabold leading-tight text-zinc-50">
                  Great interfaces should feel intuitive, memorable, and
                  invisible at the same time.
                </p>
                <div className="mt-8 grid grid-cols-2 gap-3">
                  <a
                    href={profileData.links.github}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-2xl border border-zinc-50/10 bg-zinc-950/60 p-4 text-sm font-bold text-zinc-50 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-orange-500"
                  >
                    GitHub
                    <span className="mt-2 block text-xs font-medium text-zinc-400">
                      Code archive
                    </span>
                  </a>
                  <a
                    href={profileData.links.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-2xl border border-zinc-50/10 bg-zinc-950/60 p-4 text-sm font-bold text-zinc-50 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-orange-500"
                  >
                    LinkedIn
                    <span className="mt-2 block text-xs font-medium text-zinc-400">
                      Professional profile
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="relative z-10 mt-10 grid gap-4 border-t border-zinc-50/10 pt-7 sm:grid-cols-2 lg:grid-cols-4">
            {profileData.metrics.map((metric) => (
              <div key={metric.value}>
                <p className="text-xs font-bold text-orange-400">#{metric.value}</p>
                <p className="mt-2 text-sm font-semibold text-zinc-200">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <section
          id="about"
          className="grid gap-10 border-b border-zinc-800/60 px-4 py-28 sm:px-0 lg:grid-cols-[0.9fr_1.1fr]"
        >
          <div>
            <p className="text-sm font-extrabold text-orange-500">
              Behind the Designs
            </p>
            <h2 className="mt-4 max-w-xl text-4xl font-black leading-tight tracking-[-0.04em] text-zinc-50 sm:text-5xl">
              Shaping Experiences That Make Life Simpler
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            <p className="text-2xl font-extrabold leading-tight text-zinc-50">
              I&apos;m a product-minded designer focused on building clean,
              intuitive interfaces that solve real-world problems.
            </p>
            <p className="leading-8 text-zinc-400">
              From early user flows to high-fidelity UI and front-end execution,
              I care about clarity, responsiveness, and the details that make
              digital products feel easy to use.
            </p>
          </div>
        </section>
      </div>
    </section>
  )
}

export default Hero
