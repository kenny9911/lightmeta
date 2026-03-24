import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-8 px-6">
      <div className="max-w-6xl mx-auto flex items-center justify-between flex-wrap gap-4">
        <span className="text-sm text-gray-600 font-mono">lightmeta.cc</span>
        <div className="flex items-center gap-6">
          <a href="mailto:kenny.chien@gmail.com" className="text-xs text-gray-500 hover:text-gray-300 transition-colors">
            联系我们
          </a>
          <Link to="/pitch" className="text-xs text-gray-500 hover:text-gray-300 transition-colors">
            详情
          </Link>
        </div>
      </div>
    </footer>
  )
}
