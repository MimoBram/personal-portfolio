import { useState } from 'react'
import { profileData } from '../data/portfolioData'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certificates', href: '#certificates' },
]

function ArrowBadge() {
  return (
    <span className="ml-2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-orange-600 text-zinc-50 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:bg-zinc-50 group-hover:text-orange-600">
      →
    </span>
  )
}

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const closeMenu = () => setIsOpen(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-zinc-800/60 bg-[#0c0c0e]/80 px-4 py-3 shadow-2xl shadow-black/30 backdrop-blur-md"
        aria-label="Primary navigation"
      >
        <a
          href="#home"
          className="rounded-full px-3 text-sm font-extrabold tracking-tight text-zinc-50 transition-all duration-300 ease-out hover:text-orange-500"
          onClick={closeMenu}
        >
          Bimo<span className="text-orange-500">.</span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-xs font-semibold tracking-wide text-zinc-400 transition-all duration-300 ease-out hover:bg-zinc-900 hover:text-zinc-50"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <a
            href={`mailto:${profileData.email}`}
            className="group inline-flex items-center rounded-full bg-zinc-50 py-1.5 pl-5 pr-1.5 text-xs font-extrabold tracking-tight text-[#0c0c0e] transition-all duration-300 ease-out hover:bg-orange-600 hover:text-zinc-50"
          >
            Get in touch
            <ArrowBadge />
          </a>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-800 bg-zinc-950 text-zinc-50 transition-all duration-300 ease-out hover:border-orange-500 md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((current) => !current)}
        >
          <span className="relative h-4 w-5">
            <span className={`absolute left-0 top-0 h-0.5 w-5 rounded-full bg-current transition-all duration-300 ease-out ${isOpen ? 'translate-y-2 rotate-45' : ''}`} />
            <span className={`absolute left-0 top-2 h-0.5 w-5 rounded-full bg-current transition-all duration-300 ease-out ${isOpen ? 'opacity-0' : ''}`} />
            <span className={`absolute bottom-0 left-0 h-0.5 w-5 rounded-full bg-current transition-all duration-300 ease-out ${isOpen ? '-translate-y-2 -rotate-45' : ''}`} />
          </span>
        </button>
      </nav>

      <div
        className={`mx-auto mt-3 max-w-6xl overflow-hidden rounded-[2rem] border border-zinc-800/60 bg-[#111113]/95 p-3 shadow-2xl shadow-black/40 backdrop-blur-md transition-all duration-300 ease-out md:hidden ${
          isOpen
            ? 'translate-y-0 opacity-100'
            : 'pointer-events-none -translate-y-3 opacity-0'
        }`}
      >
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="block rounded-2xl px-4 py-3 text-sm font-semibold tracking-wide text-zinc-300 transition-all duration-300 ease-out hover:bg-zinc-900 hover:text-zinc-50"
            onClick={closeMenu}
          >
            {item.label}
          </a>
        ))}
        <a
          href={`mailto:${profileData.email}`}
          className="group mt-2 inline-flex w-full items-center justify-center rounded-full bg-orange-600 py-2 pl-5 pr-2 text-sm font-extrabold tracking-tight text-zinc-50 transition-all duration-300 ease-out hover:bg-zinc-50 hover:text-[#0c0c0e]"
          onClick={closeMenu}
        >
          Get in touch
          <ArrowBadge />
        </a>
      </div>
    </header>
  )
}

export default Navbar
