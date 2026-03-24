import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6">
      {/* Hero */}
      <div className="text-center max-w-3xl">
        <p className="text-cyan text-xs font-bold tracking-[3px] uppercase mb-6 flex items-center justify-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan" />
          AI-Native Enterprise Operating System
        </p>

        <h1 className="text-7xl md:text-8xl font-black tracking-tighter leading-none bg-gradient-to-r from-accent via-purple to-cyan bg-clip-text text-transparent mb-6">
          LightMeta
        </h1>

        <p className="text-lg md:text-xl text-gray-400 font-light leading-relaxed mb-4">
          用 AI 智能体重新定义企业核心系统
        </p>
        <p className="text-gray-500 mb-12">
          AOS · GnuBot · AI-Consumption Model
        </p>

        <div className="flex gap-4 justify-center flex-wrap">
          <Link
            to="/pitch"
            className="px-8 py-3 rounded-xl bg-gradient-to-r from-accent to-purple text-white font-semibold text-sm tracking-wide hover:opacity-90 transition-opacity"
          >
            查看 Pitch Deck →
          </Link>
          <a
            href="mailto:hello@lightmeta.cc"
            className="px-8 py-3 rounded-xl border border-white/10 text-gray-300 font-semibold text-sm tracking-wide hover:border-white/25 transition-colors"
          >
            联系我们
          </a>
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-8 text-gray-600 text-xs font-mono">
        lightmeta.cc
      </div>
    </div>
  )
}
