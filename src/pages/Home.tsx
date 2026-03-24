import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'

const NAV_ITEMS = ['Thesis', 'Ecosystem', 'Team', 'Insights']

const PRODUCTS = [
  {
    name: 'GnuBot',
    icon: '⚡',
    color: 'cyan',
    desc: 'AI Operator Agents that learn your processes and execute them reliably inside your existing systems.',
  },
  {
    name: 'AOS',
    icon: '△',
    color: 'accent',
    desc: 'AI-Native Operating System that turns enterprise data into executable knowledge for AI agents.',
  },
  {
    name: 'DataWeave',
    icon: '◈',
    color: 'purple',
    desc: 'Secure Data Fabric that unifies siloed enterprise data sources into a coherent semantic layer.',
  },
]

const TEAM = [
  { name: 'Kenny Chien', role: 'Founder & CEO', initials: 'KC' },
]

export default function Home() {
  const sectionsRef = useRef<(HTMLElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('visible')
        })
      },
      { threshold: 0.1 }
    )
    sectionsRef.current.forEach((el) => el && observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const addRef = (i: number) => (el: HTMLElement | null) => {
    sectionsRef.current[i] = el
  }

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* ===== NAV ===== */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5" style={{ background: 'rgba(6,11,24,0.85)', backdropFilter: 'blur(16px)' }}>
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/" className="font-bold text-lg tracking-wide text-cyan">
            Lightmeta
          </Link>
          <div className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-sm text-gray-400 hover:text-white transition-colors">
                {item}
              </a>
            ))}
            <a
              href="mailto:kenny.chien@gmail.com"
              className="px-5 py-2 rounded-lg bg-cyan/10 border border-cyan/20 text-cyan text-sm font-semibold hover:bg-cyan/20 transition-all"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* ===== HERO ===== */}
      <section className="relative min-h-screen flex items-center mesh-bg grid-pattern">
        {/* Glow orbs */}
        <div className="hero-glow" style={{ width: 500, height: 500, background: 'rgba(0,212,255,0.06)', top: '10%', left: '5%' }} />
        <div className="hero-glow" style={{ width: 400, height: 400, background: 'rgba(139,92,246,0.05)', top: '20%', right: '10%' }} />
        <div className="hero-glow" style={{ width: 300, height: 300, background: 'rgba(79,143,255,0.06)', bottom: '15%', left: '40%' }} />

        <div className="relative max-w-7xl mx-auto px-6 pt-24 pb-20 grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div>
            <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-[1.05] mb-6">
              <span className="gradient-text">LIGHTMETA</span>
              <br />
              <span className="text-white">Fueling the Infrastructure of Tomorrow.</span>
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-lg">
              We build AI agents that learn how your enterprise actually operates, then reliably execute those processes. Turning your data into knowledge AI can act on.
            </p>
            <div className="flex gap-4 flex-wrap">
              <a href="#thesis" className="px-7 py-3 rounded-xl bg-gradient-to-r from-cyan/20 to-accent/20 border border-cyan/25 text-cyan font-semibold text-sm hover:border-cyan/40 transition-all">
                Explore Our Thesis
              </a>
              <Link to="/pitch" className="px-7 py-3 rounded-xl border border-white/10 text-gray-300 font-semibold text-sm hover:border-white/20 transition-all">
                Learn More About Us
              </Link>
            </div>
          </div>

          {/* Right: Abstract 3D visual */}
          <div className="relative flex items-center justify-center">
            <div className="relative w-80 h-80 md:w-96 md:h-96">
              {/* Outer ring */}
              <div className="absolute inset-0 rounded-full border border-cyan/10 animate-[spin_30s_linear_infinite]" />
              <div className="absolute inset-4 rounded-full border border-purple/10 animate-[spin_25s_linear_infinite_reverse]" />
              {/* Core cube abstraction */}
              <div className="absolute inset-12 rounded-2xl border border-cyan/15 bg-gradient-to-br from-cyan/5 to-purple/5 backdrop-blur-sm flex items-center justify-center" style={{ transform: 'rotate(12deg)' }}>
                <div className="rounded-xl border border-accent/20 bg-gradient-to-br from-accent/10 to-cyan/5 w-3/4 h-3/4 flex items-center justify-center" style={{ transform: 'rotate(-6deg)' }}>
                  <div className="text-center">
                    <div className="text-4xl font-black gradient-text mb-2">AOS</div>
                    <div className="text-[10px] text-gray-500 tracking-[2px] uppercase">AI Operating System</div>
                  </div>
                </div>
              </div>
              {/* Floating orbs */}
              <div className="absolute top-8 right-8 w-12 h-12 rounded-full bg-cyan/10 border border-cyan/20 flex items-center justify-center text-xs font-bold text-cyan animate-bounce" style={{ animationDuration: '3s' }}>
                AI
              </div>
              <div className="absolute bottom-12 left-4 w-10 h-10 rounded-full bg-purple/10 border border-purple/20 flex items-center justify-center text-xs font-bold text-purple animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }}>
                ⚡
              </div>
              <div className="absolute top-1/2 right-0 w-8 h-8 rounded-full bg-green/10 border border-green/20 flex items-center justify-center text-[10px] font-bold text-green animate-bounce" style={{ animationDuration: '3.5s', animationDelay: '0.5s' }}>
                ◈
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <div className="w-px h-8 bg-gradient-to-b from-transparent to-cyan/30" />
          <div className="text-[10px] text-gray-600 tracking-[2px] uppercase">Scroll</div>
        </div>
      </section>

      {/* ===== THESIS ===== */}
      <section id="thesis" ref={addRef(0)} className="fade-in py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-sm font-bold tracking-[3px] uppercase text-cyan mb-4">Our Thesis</h2>
          <p className="text-gray-500 mb-8">We invest in AI-native operating systems.</p>
          <div className="glow-card rounded-2xl p-10 md:p-14">
            <p className="text-xl md:text-2xl font-light text-gray-200 leading-relaxed">
              We invest in <strong className="text-white font-semibold">AI-native operating systems</strong> and{' '}
              <strong className="text-white font-semibold">enterprise knowledge infrastructure</strong>.
              The backbone of the next digital era.
            </p>
          </div>
        </div>
      </section>

      {/* ===== ECOSYSTEM ===== */}
      <section id="ecosystem" ref={addRef(1)} className="fade-in py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-sm font-bold tracking-[3px] uppercase text-cyan mb-4">Ecosystem & Portfolio</h2>
          <p className="text-gray-500 mb-10">AI-native cornerstones of our company.</p>
          <div className="grid md:grid-cols-3 gap-5">
            {PRODUCTS.map((p) => (
              <div key={p.name} className="glow-card rounded-2xl p-7 group cursor-default">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-10 h-10 rounded-xl bg-${p.color}/10 border border-${p.color}/20 flex items-center justify-center text-lg text-${p.color}`}>
                    {p.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-white">{p.name}</h3>
                  </div>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed mb-4">{p.desc}</p>
                <Link to="/pitch" className={`text-${p.color} text-xs font-semibold tracking-wide group-hover:underline`}>
                  View Details →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TEAM ===== */}
      <section id="team" ref={addRef(2)} className="fade-in py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-sm font-bold tracking-[3px] uppercase text-cyan mb-4">Team & Vision</h2>
          <p className="text-gray-500 mb-10">Partners in professional excellence.</p>
          <div className="flex flex-wrap gap-8 justify-center">
            {TEAM.map((m) => (
              <div key={m.name} className="flex flex-col items-center gap-3 w-32">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-cyan/20 to-purple/20 border border-white/10 flex items-center justify-center text-xl font-bold text-cyan">
                  {m.initials}
                </div>
                <div className="text-center">
                  <p className="text-sm font-semibold text-white">{m.name}</p>
                  <p className="text-xs text-gray-500">{m.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== INSIGHTS ===== */}
      <section id="insights" ref={addRef(3)} className="fade-in py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-sm font-bold tracking-[3px] uppercase text-cyan mb-4">Insights</h2>
          <p className="text-gray-500 mb-10">The latest from LightMeta.</p>
          <div className="glow-card rounded-2xl p-10">
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              "AI models are generic but company processes are specific.
              The hardest part of enterprise automation was never the AI — <strong className="text-white">it was capturing the knowledge.</strong>"
            </p>
            <p className="text-sm text-gray-500">— LightMeta Thesis, 2026</p>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="border-t border-white/5 py-8 px-6">
        <div className="max-w-6xl mx-auto flex items-center justify-between flex-wrap gap-4">
          <span className="text-sm text-gray-600 font-mono">lightmeta.cc</span>
          <div className="flex items-center gap-6">
            <a href="mailto:kenny.chien@gmail.com" className="text-xs text-gray-500 hover:text-gray-300 transition-colors">Contact</a>
            <Link to="/pitch" className="text-xs text-gray-500 hover:text-gray-300 transition-colors">Pitch</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
