import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'

const NAV_ITEMS = [
  { label: '理念', href: 'thesis' },
  { label: '产品', href: 'ecosystem' },
  { label: '团队', href: 'team' },
  { label: '洞察', href: 'insights' },
]

export default function Nav() {
  const location = useLocation()
  const isHome = location.pathname === '/'
  const [menuOpen, setMenuOpen] = useState(false)

  const navLink = (href: string) => (isHome ? `#${href}` : `/#${href}`)

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 border-b border-white/5"
      style={{ background: 'rgba(6,11,24,0.85)', backdropFilter: 'blur(16px)' }}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="font-bold text-lg tracking-wide text-cyan">
          Lightmeta
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={navLink(item.href)}
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a
            href="mailto:kenny.chien@gmail.com"
            className="px-5 py-2 rounded-lg bg-cyan/10 border border-cyan/20 text-cyan text-sm font-semibold hover:bg-cyan/20 transition-all"
          >
            联系我们
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-0.5 bg-gray-400 transition-transform ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-5 h-0.5 bg-gray-400 transition-opacity ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-0.5 bg-gray-400 transition-transform ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-white/5 px-6 py-4 flex flex-col gap-4" style={{ background: 'rgba(6,11,24,0.95)' }}>
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={navLink(item.href)}
              className="text-sm text-gray-400 hover:text-white transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            href="mailto:kenny.chien@gmail.com"
            className="text-sm text-cyan font-semibold"
          >
            联系我们
          </a>
        </div>
      )}
    </nav>
  )
}
