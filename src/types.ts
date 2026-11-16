export type Language = 'pt-BR' | 'en'
export type Localized = Record<Language, string>
export type ProjectCategory = 'backend' | 'produto' | 'institucional'
export type ProjectFilter = ProjectCategory | 'todos'
export type SectionId = 'sobre' | 'impacto' | 'projetos' | 'experiencia' | 'contato'

export interface Project {
  id: string
  name: string
  glyph: string
  status: Localized
  description: Localized
  categories: readonly ProjectCategory[]
  tags: readonly string[]
  link?: string
  linkKind?: 'repository' | 'product'
}

export interface Experience {
  id: string
  date: Localized
  title: Localized
  company: string
  description: Localized
  tags: readonly string[]
  link?: string
  linkLabel?: Localized
  afterLink?: Localized
}

export interface Metric {
  id: string
  value: Localized
  label: Localized
}

export interface PortfolioCopy {
  skip: string
  brand: string
  location: string
  headline: string
  introduction: string
  availability: string
  portfolio: string
  nav: ReadonlyArray<{ id: SectionId; label: string }>
  social: { label: string; github: string; linkedin: string; email: string; resume: string }
  langButton: string
  langLabel: string
  pauseLabel: string
  resumeLabel: string
  motionTitle: string
  aboutLabel: string
  aboutTitle: string
  aboutBefore: string
  aboutEmphasis: string
  aboutAfter: string
  aboutSecond: string
  impactLabel: string
  impactTitle: string
  impactAria: string
  impactNote: string
  projectsLabel: string
  projectsTitle: string
  projectsIntro: string
  projectsFilterAria: string
  filters: Record<ProjectFilter, string>
  links: { repository: string; product: string }
  experienceLabel: string
  experienceTitle: string
  educationTitle: string
  educationDescription: string
  toolsLabel: string
  toolsTitle: string
  toolsDescription: string
  contactLabel: string
  contactTitle: string
  contactDescription: string
  emailButton: string
  resumeButton: string
  emailSubject: string
  footer: string
  footerTech: string
  metadata: { title: string; description: string; ogDescription: string }
}
