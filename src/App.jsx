import Certificates from './components/Certificates'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Projects'

function App() {
  return (
    <div className="min-h-screen bg-[#0c0c0e] font-sans text-zinc-200 antialiased selection:bg-orange-500/20 selection:text-orange-300">
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
