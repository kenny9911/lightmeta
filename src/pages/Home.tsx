import { Link } from 'react-router-dom'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import ScrollFadeSection from '../components/ScrollFadeSection'

const PRODUCTS = [
  {
    slug: 'gnubot',
    name: 'GnuBot',
    icon: '⚡',
    color: 'cyan' as const,
    desc: 'AI 运营智能体，自动学习企业流程并在现有系统中可靠执行。',
  },
  {
    slug: 'aos',
    name: 'AOS',
    icon: '△',
    color: 'accent' as const,
    desc: 'AI 原生操作系统，将企业数据转化为 AI Agent 可执行的知识。',
  },
  {
    slug: 'dataweave',
    name: 'DataWeave',
    icon: '◈',
    color: 'purple' as const,
    desc: '安全数据编织层，打通企业孤岛数据源，构建统一语义层。',
  },
]

const TEAM = [
  { name: 'Henry', role: '联合创始人', initials: 'H' },
  { name: 'Kenny', role: '联合创始人', initials: 'K' },
]

// Static class maps for Tailwind
const cardColors = {
  cyan: { iconBg: 'bg-cyan/10', iconBorder: 'border-cyan/20', iconText: 'text-cyan', linkText: 'text-cyan' },
  accent: { iconBg: 'bg-accent/10', iconBorder: 'border-accent/20', iconText: 'text-accent', linkText: 'text-accent' },
  purple: { iconBg: 'bg-purple/10', iconBorder: 'border-purple/20', iconText: 'text-purple', linkText: 'text-purple' },
}

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Nav />

      {/* ===== HERO ===== */}
      <section className="relative min-h-screen flex items-center mesh-bg grid-pattern">
        <div className="hero-glow" style={{ width: 500, height: 500, background: 'rgba(0,212,255,0.06)', top: '10%', left: '5%' }} />
        <div className="hero-glow" style={{ width: 400, height: 400, background: 'rgba(139,92,246,0.05)', top: '20%', right: '10%' }} />
        <div className="hero-glow" style={{ width: 300, height: 300, background: 'rgba(79,143,255,0.06)', bottom: '15%', left: '40%' }} />

        <div className="relative max-w-7xl mx-auto px-6 pt-24 pb-20 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-[1.05] mb-6">
              <span className="gradient-text">LIGHTMETA</span>
              <br />
              <span className="text-white">构建明天的智能基础设施</span>
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-lg">
              我们构建能够自动学习企业真实运作方式的 AI 智能体，并可靠地执行这些流程。把企业已有的数据，变成 AI 可执行的知识。
            </p>
            <div className="flex gap-4 flex-wrap">
              <a href="#thesis" className="px-7 py-3 rounded-xl bg-gradient-to-r from-cyan/20 to-accent/20 border border-cyan/25 text-cyan font-semibold text-sm hover:border-cyan/40 transition-all">
                探索我们的理念
              </a>
              <Link to="/pitch" className="px-7 py-3 rounded-xl border border-white/10 text-gray-300 font-semibold text-sm hover:border-white/20 transition-all">
                了解更多
              </Link>
            </div>
          </div>

          <div className="relative flex items-center justify-center">
            <div className="relative w-80 h-80 md:w-96 md:h-96">
              <div className="absolute inset-0 rounded-full border border-cyan/10 animate-[spin_30s_linear_infinite]" />
              <div className="absolute inset-4 rounded-full border border-purple/10 animate-[spin_25s_linear_infinite_reverse]" />
              <div className="absolute inset-12 rounded-2xl border border-cyan/15 bg-gradient-to-br from-cyan/5 to-purple/5 backdrop-blur-sm flex items-center justify-center" style={{ transform: 'rotate(12deg)' }}>
                <div className="rounded-xl border border-accent/20 bg-gradient-to-br from-accent/10 to-cyan/5 w-3/4 h-3/4 flex items-center justify-center" style={{ transform: 'rotate(-6deg)' }}>
                  <div className="text-center">
                    <div className="text-4xl font-black gradient-text mb-2">AOS</div>
                    <div className="text-[10px] text-gray-500 tracking-[2px] uppercase">AI Operating System</div>
                  </div>
                </div>
              </div>
              <div className="absolute top-8 right-8 w-12 h-12 rounded-full bg-cyan/10 border border-cyan/20 flex items-center justify-center text-xs font-bold text-cyan animate-bounce" style={{ animationDuration: '3s' }}>AI</div>
              <div className="absolute bottom-12 left-4 w-10 h-10 rounded-full bg-purple/10 border border-purple/20 flex items-center justify-center text-xs font-bold text-purple animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }}>⚡</div>
              <div className="absolute top-1/2 right-0 w-8 h-8 rounded-full bg-green/10 border border-green/20 flex items-center justify-center text-[10px] font-bold text-green animate-bounce" style={{ animationDuration: '3.5s', animationDelay: '0.5s' }}>◈</div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <div className="w-px h-8 bg-gradient-to-b from-transparent to-cyan/30" />
          <div className="text-[10px] text-gray-600 tracking-[2px] uppercase">Scroll</div>
        </div>
      </section>

      {/* ===== THESIS ===== */}
      <ScrollFadeSection id="thesis" className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-sm font-bold tracking-[3px] uppercase text-cyan mb-4">我们的理念</h2>
          <p className="text-gray-500 mb-8">我们专注于 AI 原生操作系统。</p>
          <div className="glow-card rounded-2xl p-10 md:p-14">
            <p className="text-xl md:text-2xl font-light text-gray-200 leading-relaxed">
              我们深耕 <strong className="text-white font-semibold">AI 原生操作系统</strong>与
              <strong className="text-white font-semibold">企业知识基础设施</strong>——
              下一个数字时代的核心骨架。
            </p>
          </div>
        </div>
      </ScrollFadeSection>

      {/* ===== ECOSYSTEM ===== */}
      <ScrollFadeSection id="ecosystem" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-sm font-bold tracking-[3px] uppercase text-cyan mb-4">产品生态</h2>
          <p className="text-gray-500 mb-10">AI 原生的核心产品矩阵。</p>
          <div className="grid md:grid-cols-3 gap-5">
            {PRODUCTS.map((p) => {
              const cs = cardColors[p.color]
              return (
                <div key={p.name} className="glow-card rounded-2xl p-7 group cursor-default">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-10 h-10 rounded-xl ${cs.iconBg} border ${cs.iconBorder} flex items-center justify-center text-lg ${cs.iconText}`}>
                      {p.icon}
                    </div>
                    <h3 className="font-bold text-white">{p.name}</h3>
                  </div>
                  <p className="text-sm text-gray-400 leading-relaxed mb-4">{p.desc}</p>
                  <Link to={`/products/${p.slug}`} className={`${cs.linkText} text-xs font-semibold tracking-wide group-hover:underline`}>
                    查看详情 →
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
      </ScrollFadeSection>

      {/* ===== TEAM ===== */}
      <ScrollFadeSection id="team" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-sm font-bold tracking-[3px] uppercase text-cyan mb-4">创始团队</h2>
          <p className="text-gray-500 mb-10">共同创造卓越。</p>
          <div className="flex flex-wrap gap-12 justify-center">
            {TEAM.map((m) => (
              <div key={m.name} className="flex flex-col items-center gap-3 w-36">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-cyan/20 to-purple/20 border border-white/10 flex items-center justify-center text-2xl font-bold text-cyan">
                  {m.initials}
                </div>
                <div className="text-center">
                  <p className="text-base font-semibold text-white">{m.name}</p>
                  <p className="text-sm text-gray-500">{m.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </ScrollFadeSection>

      {/* ===== INSIGHTS ===== */}
      <ScrollFadeSection id="insights" className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-sm font-bold tracking-[3px] uppercase text-cyan mb-4">洞察</h2>
          <p className="text-gray-500 mb-10">来自 LightMeta 的思考。</p>
          <div className="glow-card rounded-2xl p-10">
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              "AI 模型是通用的，但企业流程是专属的。
              企业自动化最难的从来不是 AI 本身 —— <strong className="text-white">而是捕获那些知识。</strong>"
            </p>
            <p className="text-sm text-gray-500">— LightMeta 创始理念, 2026</p>
          </div>
        </div>
      </ScrollFadeSection>

      <Footer />
    </div>
  )
}
