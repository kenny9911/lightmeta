import { useParams, Navigate, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getProduct, colorStyles } from '../data/products'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import ScrollFadeSection from '../components/ScrollFadeSection'

const STACK = [
  { slug: 'gnubot', name: 'GnuBot', label: '智能体执行层', color: 'cyan' as const },
  { slug: 'aos', name: 'AOS', label: '知识与编排层', color: 'accent' as const },
  { slug: 'dataweave', name: 'DataWeave', label: '数据基座层', color: 'purple' as const },
]

export default function ProductPage() {
  const { slug } = useParams<{ slug: string }>()
  const product = getProduct(slug || '')
  const [activeUseCase, setActiveUseCase] = useState(0)

  useEffect(() => {
    window.scrollTo(0, 0)
    setActiveUseCase(0)
  }, [slug])

  if (!product) return <Navigate to="/" replace />

  const cs = colorStyles[product.color]

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Nav />

      {/* ===== SECTION 1: HERO ===== */}
      <section className="relative min-h-[85vh] flex items-center mesh-bg grid-pattern">
        <div className="hero-glow" style={{ width: 500, height: 500, background: product.color === 'cyan' ? 'rgba(0,212,255,0.08)' : product.color === 'accent' ? 'rgba(79,143,255,0.08)' : 'rgba(139,92,246,0.08)', top: '10%', left: '5%' }} />
        <div className="hero-glow" style={{ width: 350, height: 350, background: 'rgba(139,92,246,0.05)', bottom: '20%', right: '10%' }} />

        <div className="relative max-w-7xl mx-auto px-6 pt-28 pb-20 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${cs.bg10} border ${cs.border20} mb-6`}>
              <span className={`text-lg ${cs.text}`}>{product.icon}</span>
              <span className={`text-sm font-semibold ${cs.text}`}>{product.name}</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-[1.1] text-white mb-6">
              {product.heroHeadline}
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-lg">
              {product.heroSubtitle}
            </p>
            <div className="flex gap-4 flex-wrap">
              <a
                href="mailto:kenny.chien@gmail.com"
                className={`px-7 py-3 rounded-xl bg-gradient-to-r ${cs.gradientFrom} ${cs.gradientTo} border ${cs.border25} ${cs.text} font-semibold text-sm hover:opacity-90 transition-all`}
              >
                预约演示
              </a>
              <a href="#how-it-works" className="px-7 py-3 rounded-xl border border-white/10 text-gray-300 font-semibold text-sm hover:border-white/20 transition-all">
                了解原理 ↓
              </a>
            </div>
          </div>

          {/* Abstract visual */}
          <div className="relative flex items-center justify-center">
            <div className="relative w-72 h-72 md:w-80 md:h-80">
              <div className={`absolute inset-0 rounded-full border ${cs.border20} animate-[spin_25s_linear_infinite]`} />
              <div className="absolute inset-6 rounded-full border border-white/5 animate-[spin_20s_linear_infinite_reverse]" />
              <div className={`absolute inset-14 rounded-2xl border ${cs.border20} bg-gradient-to-br ${cs.from} ${cs.to} backdrop-blur-sm flex items-center justify-center`} style={{ transform: 'rotate(8deg)' }}>
                <div className="text-center" style={{ transform: 'rotate(-8deg)' }}>
                  <div className={`text-5xl mb-3`}>{product.icon}</div>
                  <div className={`text-2xl font-black ${cs.text}`}>{product.name}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 2: THREE PHASES ===== */}
      <ScrollFadeSection id="how-it-works" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-sm font-bold tracking-[3px] uppercase text-cyan mb-4">工作原理</h2>
          <p className="text-gray-500 mb-12">三步实现从数据到执行的闭环。</p>
          <div className="grid md:grid-cols-3 gap-6">
            {product.phases.map((phase) => (
              <div key={phase.step} className="glow-card rounded-2xl p-8 relative">
                <div className={`inline-flex items-center justify-center w-10 h-10 rounded-xl ${cs.stepBg} ${cs.text} font-black text-sm mb-5`}>
                  {phase.step}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{phase.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </ScrollFadeSection>

      {/* ===== SECTION 3: FEATURE GRID ===== */}
      <ScrollFadeSection className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-sm font-bold tracking-[3px] uppercase text-cyan mb-4">核心能力</h2>
          <p className="text-gray-500 mb-12">{product.name} 的六大核心能力。</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {product.features.map((f) => (
              <div key={f.title} className="glow-card rounded-2xl p-6">
                <div className="text-2xl mb-4">{f.icon}</div>
                <h3 className="text-base font-bold text-white mb-2">{f.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </ScrollFadeSection>

      {/* ===== SECTION 4: USE CASES ===== */}
      <ScrollFadeSection className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-sm font-bold tracking-[3px] uppercase text-cyan mb-4">应用场景</h2>
          <p className="text-gray-500 mb-10">按部门和业务场景落地。</p>

          {/* Tabs */}
          <div className="flex gap-2 flex-wrap mb-8">
            {product.useCases.map((uc, i) => (
              <button
                key={uc.department}
                onClick={() => setActiveUseCase(i)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all border ${
                  i === activeUseCase
                    ? `${cs.text} ${cs.border20} ${cs.bg10}`
                    : 'text-gray-500 border-white/5 hover:border-white/10'
                }`}
              >
                {uc.department}
              </button>
            ))}
          </div>

          {/* Active use case */}
          <div className="glow-card rounded-2xl p-8 md:p-10">
            <h3 className="text-xl font-bold text-white mb-4">
              {product.useCases[activeUseCase].title}
            </h3>
            <p className="text-gray-400 leading-relaxed text-base">
              {product.useCases[activeUseCase].description}
            </p>
          </div>
        </div>
      </ScrollFadeSection>

      {/* ===== SECTION 5: ARCHITECTURE STACK ===== */}
      <ScrollFadeSection className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-sm font-bold tracking-[3px] uppercase text-cyan mb-4">技术架构</h2>
          <p className="text-gray-500 mb-12">{product.name} 在 LightMeta 技术栈中的位置。</p>

          {/* Stack diagram */}
          <div className="flex flex-col items-center gap-3">
            {STACK.map((layer) => {
              const isActive = layer.slug === product.slug
              const lcs = colorStyles[layer.color]
              return (
                <Link
                  key={layer.slug}
                  to={`/products/${layer.slug}`}
                  className={`w-full max-w-md rounded-2xl p-5 border text-center transition-all ${
                    isActive
                      ? `${lcs.bg10} ${lcs.border20} scale-105 shadow-lg`
                      : 'bg-white/[0.02] border-white/5 hover:border-white/10'
                  }`}
                >
                  <div className={`text-lg font-bold ${isActive ? lcs.text : 'text-gray-400'}`}>
                    {layer.name}
                  </div>
                  <div className="text-xs text-gray-500 mt-1">{layer.label}</div>
                </Link>
              )
            })}
          </div>

          {/* Connectors */}
          <div className="flex justify-center my-[-6px]">
            <div className="w-0.5 h-0 bg-transparent" />
          </div>

          <p className="text-sm text-gray-400 leading-relaxed mt-10 text-center max-w-lg mx-auto">
            {product.architectureDesc}
          </p>
        </div>
      </ScrollFadeSection>

      {/* ===== SECTION 6: CROSS-SELL ===== */}
      <ScrollFadeSection className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-sm font-bold tracking-[3px] uppercase text-cyan mb-4">更强大的组合</h2>
          <p className="text-gray-500 mb-10">三个产品协同，构建完整的企业 AI 操作系统。</p>
          <div className="grid md:grid-cols-2 gap-5">
            {product.crossSell.map((item) => {
              const ics = colorStyles[item.color]
              return (
                <Link
                  key={item.slug}
                  to={`/products/${item.slug}`}
                  className="glow-card rounded-2xl p-7 group block"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`w-10 h-10 rounded-xl ${ics.bg10} border ${ics.border20} flex items-center justify-center text-lg ${ics.text}`}>
                      {item.icon}
                    </div>
                    <h3 className="font-bold text-white">{item.name}</h3>
                  </div>
                  <p className="text-sm text-gray-400 mb-3">{item.tagline}</p>
                  <span className={`${ics.text} text-xs font-semibold group-hover:underline`}>
                    了解详情 →
                  </span>
                </Link>
              )
            })}
          </div>
        </div>
      </ScrollFadeSection>

      {/* ===== SECTION 7: BOTTOM CTA ===== */}
      <ScrollFadeSection className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            准备好让 {product.name} 为您工作了吗？
          </h2>
          <p className="text-gray-400 mb-10">
            与我们的团队交流，了解 {product.name} 如何为您的企业创造价值。
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="mailto:kenny.chien@gmail.com"
              className={`px-8 py-3 rounded-xl bg-gradient-to-r ${cs.gradientFrom} ${cs.gradientTo} border ${cs.border25} ${cs.text} font-semibold text-sm hover:opacity-90 transition-all`}
            >
              预约演示
            </a>
            <Link to="/" className="px-8 py-3 rounded-xl border border-white/10 text-gray-300 font-semibold text-sm hover:border-white/20 transition-all">
              返回首页
            </Link>
          </div>
        </div>
      </ScrollFadeSection>

      <Footer />
    </div>
  )
}
