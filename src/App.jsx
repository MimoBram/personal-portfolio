import Certificates from './components/Certificates'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Projects'

function App() {
  return (
    <div className="min-h-screen bg-[#0b0f19] font-sans text-slate-200 antialiased selection:bg-emerald-500/30 selection:text-emerald-200">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Certificates />
      </main>
    </div>
  )
}

export default App
