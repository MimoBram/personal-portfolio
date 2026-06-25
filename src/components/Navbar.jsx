import { useState } from 'react'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certificates', href: '#certificates' },
]

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const closeMenu = () => setIsOpen(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-800/40 bg-[#0b0f19]/70 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4" aria-label="Primary navigation">
        <a
          href="#home"
          className="group inline-flex items-center gap-3 text-sm font-semibold tracking-wide text-slate-50 transition-all duration-300 ease-out hover:tracking-wider"
          onClick={closeMenu}
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-emerald-400/30 bg-emerald-500/10 text-xs text-emerald-300 transition-all duration-300 ease-out group-hover:border-emerald-300 group-hover:bg-emerald-500/20">
            BA
          </span>
          Bimo Adi
        </a>

        <div className="hidden rounded-full border border-slate-800/60 bg-[#131b2e]/60 p-1 shadow-2xl shadow-black/20 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm font-medium tracking-wide text-slate-400 transition-all duration-300 ease-out hover:bg-slate-800/70 hover:text-slate-50"
            >
              {item.label}
            </a>
          ))}
        </div>

        <button
          type="button"
          className="relative z-50 flex h-10 w-10 items-center justify-center rounded-full border border-slate-700/70 bg-[#131b2e]/80 text-slate-100 transition-all duration-300 ease-out hover:border-slate-600 hover:bg-slate-800 md:hidden"
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
        className={`fixed inset-x-4 top-20 z-40 origin-top rounded-3xl border border-slate-800/60 bg-[#131b2e]/95 p-3 shadow-2xl shadow-black/30 backdrop-blur-md transition-all duration-300 ease-out md:hidden ${
          isOpen
            ? 'translate-y-0 scale-100 opacity-100'
            : 'pointer-events-none -translate-y-4 scale-95 opacity-0'
        }`}
      >
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="block rounded-2xl px-4 py-3 text-sm font-medium tracking-wide text-slate-300 transition-all duration-300 ease-out hover:bg-slate-800/70 hover:text-slate-50"
            onClick={closeMenu}
          >
            {item.label}
          </a>
        ))}
      </div>
    </header>
  )
}

export default Navbar
