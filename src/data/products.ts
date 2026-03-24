export interface ProductPhase {
  step: string
  title: string
  description: string
}

export interface ProductFeature {
  icon: string
  title: string
  description: string
}

export interface ProductUseCase {
  department: string
  title: string
  description: string
}

export interface CrossSellItem {
  slug: string
  name: string
  icon: string
  tagline: string
  color: 'cyan' | 'accent' | 'purple'
}

export interface ProductData {
  slug: string
  name: string
  icon: string
  color: 'cyan' | 'accent' | 'purple'
  heroHeadline: string
  heroSubtitle: string
  phases: ProductPhase[]
  features: ProductFeature[]
  useCases: ProductUseCase[]
  architectureDesc: string
  stackPosition: 'top' | 'middle' | 'bottom'
  crossSell: CrossSellItem[]
}

// Static Tailwind class map to avoid dynamic class generation issues
export const colorStyles = {
  cyan: {
    text: 'text-cyan',
    bg10: 'bg-cyan/10',
    bg20: 'bg-cyan/20',
    border20: 'border-cyan/20',
    border25: 'border-cyan/25',
    from: 'from-cyan/20',
    to: 'to-cyan/5',
    gradientFrom: 'from-cyan/20',
    gradientTo: 'to-accent/20',
    glowHover: 'glow-card-cyan',
    stepBg: 'bg-cyan/15',
  },
  accent: {
    text: 'text-accent',
    bg10: 'bg-accent/10',
    bg20: 'bg-accent/20',
    border20: 'border-accent/20',
    border25: 'border-accent/25',
    from: 'from-accent/20',
    to: 'to-accent/5',
    gradientFrom: 'from-accent/20',
    gradientTo: 'to-purple/20',
    glowHover: 'glow-card-accent',
    stepBg: 'bg-accent/15',
  },
  purple: {
    text: 'text-purple',
    bg10: 'bg-purple/10',
    bg20: 'bg-purple/20',
    border20: 'border-purple/20',
    border25: 'border-purple/25',
    from: 'from-purple/20',
    to: 'to-purple/5',
    gradientFrom: 'from-purple/20',
    gradientTo: 'to-cyan/20',
    glowHover: 'glow-card-purple',
    stepBg: 'bg-purple/15',
  },
}

export const products: ProductData[] = [
  {
    slug: 'gnubot',
    name: 'GnuBot',
    icon: '⚡',
    color: 'cyan',
    heroHeadline: '让 AI 智能体代替人工执行企业流程',
    heroSubtitle:
      'GnuBot 自动从工单、日志、消息中学习企业真实运作方式，部署可审计的 AI 运营智能体，并带有置信度评分——知道什么时候自动执行，什么时候交给人类判断。',
    phases: [
      {
        step: '01',
        title: '发现',
        description:
          'GnuBot 读取企业现有的工单、日志、对话记录和文档，逆向还原业务真实运作流程——无需任何访谈或咨询研讨，一周内产出结果。',
      },
      {
        step: '02',
        title: '自动化',
        description:
          '部署可审计的智能体，按照企业专属流程在现有系统内直接执行操作。每条规则可追溯、每个决策可审计，你清楚知道智能体为什么这样做。',
      },
      {
        step: '03',
        title: '持续学习',
        description:
          'GnuBot 自动检测流程变更、知识缺口和不一致之处，持续更新知识库。企业在演进，智能体的知识也同步演进。',
      },
    ],
    features: [
      {
        icon: '🎯',
        title: '置信度评分',
        description: '系统为每个决策评估置信度，高于阈值自动执行，低于阈值转交人类——不是黑盒全自动。',
      },
      {
        icon: '🔍',
        title: '可审计执行',
        description: '每个操作留有完整追溯链，清楚记录智能体的决策依据、执行路径和结果。',
      },
      {
        icon: '🔗',
        title: '多系统集成',
        description: '直接对接 ServiceNow、JIRA、SAP、Salesforce、企业微信等现有系统，零迁移开始工作。',
      },
      {
        icon: '⚙️',
        title: '无代码部署',
        description: '业务人员无需编写代码即可配置和部署智能体，降低技术门槛。',
      },
      {
        icon: '🤝',
        title: '人机协作',
        description: '智能体遇到不确定性时主动升级给人类处理，形成反馈闭环持续提升准确率。',
      },
      {
        icon: '📈',
        title: '持续优化',
        description: '基于执行结果和人类反馈自动优化流程知识，越用越聪明。',
      },
    ],
    useCases: [
      {
        department: 'IT 运维',
        title: '智能工单处理与故障自愈',
        description:
          'GnuBot 自动分类、路由和处理 IT 工单，对常见故障执行自愈操作，将平均解决时间缩短 70%。',
      },
      {
        department: '客户支持',
        title: '知识驱动的智能客服',
        description:
          '从历史工单中学习最佳实践，自动回复常见问题，复杂问题精准升级给专业团队。',
      },
      {
        department: 'HR',
        title: '员工入职自动化',
        description:
          '自动完成账号开通、权限配置、培训安排等入职流程，新员工第一天即可高效工作。',
      },
      {
        department: '财务',
        title: '智能对账与异常检测',
        description:
          '自动完成跨系统数据对账，实时检测异常交易，将人工对账时间减少 80%。',
      },
      {
        department: '供应链',
        title: '供应链中断响应',
        description:
          '实时监控供应链状态，检测中断风险并自动触发备选方案，响应速度从数周缩短到数小时。',
      },
    ],
    architectureDesc:
      'GnuBot 位于 LightMeta 技术栈最顶层，直接面向业务操作。它依赖 AOS 提供的可执行知识进行决策，而 AOS 的知识来源于 DataWeave 汇聚的企业全域数据。',
    stackPosition: 'top',
    crossSell: [
      { slug: 'aos', name: 'AOS', icon: '△', tagline: '企业 AI 的统一操作系统', color: 'accent' },
      { slug: 'dataweave', name: 'DataWeave', icon: '◈', tagline: '零迁移打通企业数据孤岛', color: 'purple' },
    ],
  },
  {
    slug: 'aos',
    name: 'AOS',
    icon: '△',
    color: 'accent',
    heroHeadline: '企业 AI 的统一操作系统',
    heroSubtitle:
      'AOS 将企业数据转化为 AI 可执行的知识，管理智能体全生命周期——从知识构建、编排调度到治理监控，一个平台搞定。',
    phases: [
      {
        step: '01',
        title: '知识构建',
        description:
          '从企业数据中自动提取、结构化和验证业务知识，生成人类可读、AI 可执行的标准化指令库。',
      },
      {
        step: '02',
        title: '智能体编排',
        description:
          '可视化编排多个智能体的协作流程，定义触发条件、执行顺序和异常处理策略，无需编写代码。',
      },
      {
        step: '03',
        title: '治理与可观测',
        description:
          '实时监控所有智能体的运行状态、决策质量和资源消耗。完整的权限管理、审计日志和合规报告。',
      },
    ],
    features: [
      {
        icon: '🧠',
        title: '知识图谱',
        description: '自动构建企业业务知识图谱，将散落在各系统中的隐性知识显性化、结构化。',
      },
      {
        icon: '🎛️',
        title: '可视化编排',
        description: '拖拽式智能体编排界面，业务人员可直接配置复杂的多智能体协作流程。',
      },
      {
        icon: '🔐',
        title: '权限与治理',
        description: '细粒度的角色权限控制，确保智能体只能访问授权范围内的数据和操作。',
      },
      {
        icon: '📊',
        title: '实时监控',
        description: '全方位仪表盘，实时展示智能体运行状态、成功率、响应时间和资源消耗。',
      },
      {
        icon: '🔌',
        title: 'API 网关',
        description: '统一的 API 网关管理所有智能体对外接口，支持限流、认证和版本管理。',
      },
      {
        icon: '🤖',
        title: '多模型支持',
        description: '兼容 Kimi、DeepSeek、OpenAI 等主流大模型，按场景选择最优模型组合。',
      },
    ],
    useCases: [
      {
        department: '企业 IT',
        title: '智能体统一管控',
        description:
          '在一个平台管理企业所有 AI 智能体的部署、运行和退役，避免「智能体蔓延」问题。',
      },
      {
        department: '运营管理',
        title: '跨部门流程自动化',
        description:
          '编排涉及多个部门的复杂业务流程，如「从订单到交付」的端到端自动化。',
      },
      {
        department: '合规审计',
        title: '智能体行为合规审查',
        description:
          '完整记录每个智能体的决策过程，满足金融、医疗等行业的合规审查要求。',
      },
      {
        department: '数据团队',
        title: '企业知识资产化',
        description:
          '将分散在人脑、文档和系统中的业务知识提取并资产化，避免人员流失导致的知识丢失。',
      },
      {
        department: '产品开发',
        title: '快速构建 AI 能力',
        description:
          '通过 AOS 的 API 和 SDK，产品团队可快速为业务系统注入 AI 智能体能力。',
      },
    ],
    architectureDesc:
      'AOS 是 LightMeta 技术栈的核心中枢。它从 DataWeave 获取统一的企业数据，将其转化为可执行知识，并为上层的 GnuBot 智能体提供决策支撑和运行环境。',
    stackPosition: 'middle',
    crossSell: [
      { slug: 'gnubot', name: 'GnuBot', icon: '⚡', tagline: 'AI 运营智能体，自动执行企业流程', color: 'cyan' },
      { slug: 'dataweave', name: 'DataWeave', icon: '◈', tagline: '零迁移打通企业数据孤岛', color: 'purple' },
    ],
  },
  {
    slug: 'dataweave',
    name: 'DataWeave',
    icon: '◈',
    color: 'purple',
    heroHeadline: '零迁移打通企业数据孤岛',
    heroSubtitle:
      'DataWeave 是安全数据编织层，在不改变现有系统的前提下，将 ERP、MES、MRP、CRM 等孤岛数据统一为 AI 智能体可理解的语义层。',
    phases: [
      {
        step: '01',
        title: '连接',
        description:
          '预置 100+ 企业系统连接器，覆盖 SAP、Oracle、金蝶、用友等主流 ERP 及各类业务系统，开箱即用。',
      },
      {
        step: '02',
        title: '映射',
        description:
          '自动识别跨系统数据的语义关系，建立统一的数据模型和映射规则，消除数据口径不一致。',
      },
      {
        step: '03',
        title: '统一',
        description:
          '构建企业级语义数据层，为 AOS 和 GnuBot 提供一致、可信、实时的数据视图。',
      },
    ],
    features: [
      {
        icon: '🔌',
        title: '零配置集成',
        description: '预置连接器自动发现数据结构和字段关系，无需手动配置即可完成系统对接。',
      },
      {
        icon: '🗺️',
        title: '语义层构建',
        description: '自动构建业务语义模型，让 AI 以业务语言理解数据，而非底层表结构。',
      },
      {
        icon: '⚡',
        title: '实时同步',
        description: '基于变更数据捕获（CDC）技术实现近实时数据同步，确保数据新鲜度。',
      },
      {
        icon: '🛡️',
        title: '数据治理',
        description: '内置数据质量检测、血缘追踪和敏感数据脱敏，满足企业级数据治理要求。',
      },
      {
        icon: '🏗️',
        title: '兼容遗留系统',
        description: '在现有系统之上工作，不要求迁移或改造——保护企业既有投资。',
      },
      {
        icon: '🔒',
        title: '企业级安全',
        description: '端到端加密、细粒度访问控制、完整审计日志，满足金融和政府级安全要求。',
      },
    ],
    useCases: [
      {
        department: 'ERP 集成',
        title: '多 ERP 系统数据统一',
        description:
          '集团企业使用不同 ERP 系统（SAP + 金蝶 + 用友），DataWeave 统一数据视图，消除信息孤岛。',
      },
      {
        department: 'MES/MRP',
        title: '生产数据与计划系统打通',
        description:
          '实时同步生产执行数据与物料计划数据，实现生产全流程的数据贯通。',
      },
      {
        department: 'CRM',
        title: '客户 360° 视图',
        description:
          '汇聚销售、服务、营销等多系统客户数据，构建统一的客户全景画像。',
      },
      {
        department: '数据仓库',
        title: '数据仓库现代化',
        description:
          '替代传统 ETL 管道，以语义层方式实现数据整合，大幅降低维护成本。',
      },
      {
        department: '跨部门',
        title: '统一经营报表',
        description:
          '打通财务、运营、销售等部门数据，生成口径一致的跨部门经营分析报表。',
      },
    ],
    architectureDesc:
      'DataWeave 是 LightMeta 技术栈的数据基座。它连接企业所有数据源，构建统一语义层，为 AOS 的知识构建和 GnuBot 的流程执行提供可信的数据基础。',
    stackPosition: 'bottom',
    crossSell: [
      { slug: 'gnubot', name: 'GnuBot', icon: '⚡', tagline: 'AI 运营智能体，自动执行企业流程', color: 'cyan' },
      { slug: 'aos', name: 'AOS', icon: '△', tagline: '企业 AI 的统一操作系统', color: 'accent' },
    ],
  },
]

export function getProduct(slug: string): ProductData | undefined {
  return products.find((p) => p.slug === slug)
}
