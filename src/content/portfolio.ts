import type { Experience, Metric, PortfolioCopy, Project, Language } from '../types'

export const contactEmail = 'carlosvictorlemosdasilva26@gmail.com'
export const socialLinks = {
  github: 'https://github.com/CarlosVLemos',
  linkedin: 'https://www.linkedin.com/in/carlosvlemos/',
} as const

export const copy: Record<Language, PortfolioCopy> = {
  'pt-BR': {
    skip: 'Pular para o conteúdo',
    brand: 'lemos / portfólio',
    location: 'BELÉM, PARÁ · BRASIL',
    headline: 'Engenheiro de software full stack.',
    introduction: 'Backend, APIs, integração de sistemas e manutenção de aplicações legadas. Experiência com testes, Docker e bancos de dados.',
    availability: 'disponível para oportunidades',
    portfolio: 'PORTFÓLIO',
    nav: [
      { id: 'sobre', label: '01 / Sobre' },
      { id: 'impacto', label: '02 / Impacto' },
      { id: 'projetos', label: '03 / Projetos' },
      { id: 'experiencia', label: '04 / Experiência' },
      { id: 'contato', label: '05 / Contato' },
    ],
    social: {
      label: 'Links profissionais',
      github: 'GitHub de Carlos Lemos (nova aba)',
      linkedin: 'LinkedIn de Carlos Lemos (nova aba)',
      email: 'Enviar email para Carlos Lemos',
      resume: 'Ir para seção de currículo',
    },
    langButton: 'English',
    langLabel: 'Exibir o portfólio em inglês',
    pauseLabel: 'Pausar fundo',
    resumeLabel: 'Retomar fundo',
    motionTitle: 'Pausar ou retomar a animação do fundo',
    aboutLabel: 'sobre mim', aboutTitle: 'Sobre mim',
    aboutBefore: 'Sou engenheiro de software full stack com',
    aboutEmphasis: '3 anos de experiência',
    aboutAfter: 'em desenvolvimento e modernização de sistemas institucionais. Trabalho principalmente com backend, bancos de dados, integrações e APIs.',
    aboutSecond: 'Minha experiência inclui SEPLAD, Polícia Civil do Pará e V3L0Z. Também desenvolvo projetos próprios para testar ferramentas e decisões de arquitetura.',
    impactLabel: 'resultados', impactTitle: 'Alguns resultados',
    impactAria: 'Resultados profissionais',
    impactNote: 'Na SEPLAD, o tempo de acesso a dados de contracheques caiu de aproximadamente 9 segundos para 22 ms após separar o acesso ao Oracle legado da API Laravel e criar um microserviço em FastAPI.',
    projectsLabel: 'projetos', projectsTitle: 'Projetos selecionados',
    projectsIntro: 'Seleção de projetos pessoais e produtos em que trabalhei. Repositórios institucionais não são públicos.',
    projectsFilterAria: 'Filtrar projetos por área',
    filters: { todos: 'Todos', backend: 'Backend', produto: 'Produto', institucional: 'Institucional' },
    links: { repository: 'Repositório ↗', product: 'Ver produto ↗' },
    experienceLabel: 'experiência', experienceTitle: 'Experiência',
    educationTitle: 'Formação · Análise e Desenvolvimento de Sistemas',
    educationDescription: 'Universidade da Amazônia (UNAMA), 2024–2026. Certificações em testes de software e cibersegurança.',
    toolsLabel: 'tecnologias', toolsTitle: 'Tecnologias',
    toolsDescription: 'Tecnologias com as quais trabalhei em produção, manutenção, automação e projetos próprios.',
    contactLabel: 'contato', contactTitle: 'Contato',
    contactDescription: 'Contato profissional por email ou LinkedIn. Currículo disponível em PDF.',
    emailButton: 'Enviar email ↗', resumeButton: 'Baixar currículo ↓',
    emailSubject: 'Contato profissional',
    footer: 'Projetado e desenvolvido por Carlos Lemos.',
    footerTech: 'Vue 3, TypeScript e CSS.',
    metadata: {
      title: 'Carlos Lemos — Engenheiro de Software',
      description: 'Carlos Lemos — Engenheiro de software full stack. Backend, integração de sistemas, performance e observabilidade.',
      ogDescription: 'Portfólio com experiência, projetos e resultados técnicos.',
    },
  },
  en: {
    skip: 'Skip to content',
    brand: 'lemos / portfolio',
    location: 'BELÉM, PARÁ · BRAZIL',
    headline: 'Full stack software engineer.',
    introduction: 'Backend, APIs, systems integration, and legacy application maintenance. Experience with testing, Docker, and databases.',
    availability: 'available for opportunities',
    portfolio: 'PORTFOLIO',
    nav: [
      { id: 'sobre', label: '01 / About' },
      { id: 'impacto', label: '02 / Impact' },
      { id: 'projetos', label: '03 / Projects' },
      { id: 'experiencia', label: '04 / Experience' },
      { id: 'contato', label: '05 / Contact' },
    ],
    social: {
      label: 'Professional links',
      github: 'Carlos Lemos on GitHub (new tab)',
      linkedin: 'Carlos Lemos on LinkedIn (new tab)',
      email: 'Send an email to Carlos Lemos',
      resume: 'Go to résumé section',
    },
    langButton: 'Português',
    langLabel: 'Exibir o portfólio em português',
    pauseLabel: 'Pause background',
    resumeLabel: 'Resume background',
    motionTitle: 'Pause or resume the background animation',
    aboutLabel: 'about me', aboutTitle: 'About me',
    aboutBefore: 'I am a full stack software engineer with',
    aboutEmphasis: '3 years of experience',
    aboutAfter: 'developing and modernizing institutional systems. I mainly work with backend systems, databases, integrations, and APIs.',
    aboutSecond: 'My experience includes SEPLAD, the Pará Civil Police, and V3L0Z. I also build personal projects to evaluate tools and architectural decisions.',
    impactLabel: 'results', impactTitle: 'Selected results',
    impactAria: 'Professional results',
    impactNote: 'At SEPLAD, payroll statement data access dropped from approximately 9 seconds to 22 ms after separating legacy Oracle access from the Laravel API and building a FastAPI microservice.',
    projectsLabel: 'projects', projectsTitle: 'Selected projects',
    projectsIntro: 'A selection of personal projects and products I have worked on. Institutional repositories are private.',
    projectsFilterAria: 'Filter projects by area',
    filters: { todos: 'All', backend: 'Backend', produto: 'Product', institucional: 'Institutional' },
    links: { repository: 'Repository ↗', product: 'View product ↗' },
    experienceLabel: 'experience', experienceTitle: 'Experience',
    educationTitle: 'Education · Systems Analysis and Development',
    educationDescription: 'University of the Amazon (UNAMA), 2024–2026. Certifications in software testing and cybersecurity.',
    toolsLabel: 'technologies', toolsTitle: 'Technologies',
    toolsDescription: 'Technologies I have used in production, maintenance, automation, and personal projects.',
    contactLabel: 'contact', contactTitle: 'Contact',
    contactDescription: 'For professional inquiries, contact me by email or LinkedIn. My résumé is available as a PDF.',
    emailButton: 'Send email ↗', resumeButton: 'Download résumé ↓',
    emailSubject: 'Professional inquiry',
    footer: 'Designed and developed by Carlos Lemos.',
    footerTech: 'Vue 3, TypeScript, and CSS.',
    metadata: {
      title: 'Carlos Lemos — Software Engineer',
      description: 'Carlos Lemos — Full stack software engineer. Backend, systems integration, performance, and observability.',
      ogDescription: 'Portfolio featuring experience, projects, and technical results.',
    },
  },
}

export const metrics: readonly Metric[] = [
  {
    id: 'reach',
    value: { 'pt-BR': '~200 mil', en: '~200K' },
    label: { 'pt-BR': 'servidores atendidos por plataforma institucional', en: 'public servants served by an institutional platform' },
  },
  {
    id: 'latency',
    value: { 'pt-BR': '9 s → 22 ms', en: '9 s → 22 ms' },
    label: { 'pt-BR': 'acesso a contracheques em fluxo crítico', en: 'payroll statement access in a critical workflow' },
  },
  {
    id: 'leadership',
    value: { 'pt-BR': '8 devs', en: '8 devs' },
    label: { 'pt-BR': 'liderados em duas equipes na V3L0Z', en: 'led across two teams at V3L0Z' },
  },
  {
    id: 'systems',
    value: { 'pt-BR': 'Sistemas estaduais', en: 'Statewide systems' },
    label: { 'pt-BR': 'atuação em sistemas financeiros, internos e críticos', en: 'work on financial, internal, and mission-critical systems' },
  },
]

export const projects: readonly Project[] = [
  {
    id: 'lcp', name: 'Lab Control Panel', glyph: '{ }', categories: ['backend', 'produto'],
    status: { 'pt-BR': 'projeto próprio · MVP', en: 'personal project · MVP' },
    description: {
      'pt-BR': 'Aplicação para comparar execuções e resultados de testes. API FastAPI, persistência em PostgreSQL, frontend em Vue e experimentos documentados.',
      en: 'Application for comparing test runs and results. FastAPI API, PostgreSQL persistence, Vue frontend, and documented experiments.',
    },
    tags: ['Vue 3', 'FastAPI', 'PostgreSQL', 'Testes'],
    link: 'https://github.com/CarlosVLemos/Lab-Control-Panel', linkKind: 'repository',
  },
  {
    id: 'portal', name: 'Portal do Servidor', glyph: '</>', categories: ['backend', 'institucional'],
    status: { 'pt-BR': 'SEPLAD · código privado', en: 'SEPLAD · private code' },
    description: {
      'pt-BR': 'Atuação na modernização do acesso a contracheques de uma plataforma usada por cerca de 200 mil servidores. Serviço FastAPI para consulta a dados Oracle.',
      en: 'Helped modernize payroll statement access on a platform used by approximately 200,000 public servants. FastAPI service for querying Oracle data.',
    },
    tags: ['FastAPI', 'Laravel', 'Oracle'],
  },
  {
    id: 'gestao-lab', name: 'Gestão Lab', glyph: '[]', categories: ['produto', 'institucional'],
    status: { 'pt-BR': 'V3L0Z · produto acadêmico', en: 'V3L0Z · academic product' },
    description: {
      'pt-BR': 'Atuei no produto de gestão de laboratórios da UNAMA, voltado a reservas de salas, software e ocupação dos espaços.',
      en: 'Worked on UNAMA’s laboratory management product for room reservations, software requests, and space occupancy.',
    },
    tags: ['Gestão de laboratórios', 'V3L0Z'],
    link: 'https://ecosistemaveloz.com.br/salas', linkKind: 'product',
  },
  {
    id: 'verdinho', name: 'Verdinho Eventos', glyph: '◉', categories: ['produto', 'institucional'],
    status: { 'pt-BR': 'V3L0Z · produto acadêmico', en: 'V3L0Z · academic product' },
    description: {
      'pt-BR': 'Atuei no produto para organização de eventos acadêmicos, inscrições e controle de presença. Também dei suporte a outros sistemas do ecossistema.',
      en: 'Worked on a product for organizing academic events, registrations, and attendance tracking. I also supported other systems in the ecosystem.',
    },
    tags: ['Eventos', 'V3L0Z'],
    link: 'https://eventos.ecosistemaveloz.com.br/', linkKind: 'product',
  },
]

export const experiences: readonly Experience[] = [
  {
    id: 'seplad',
    date: { 'pt-BR': 'dez 2025 — atual', en: 'Dec 2025 — present' },
    title: { 'pt-BR': 'Engenheiro de Software', en: 'Software Engineer' },
    company: 'SEPLAD · Governo do Pará',
    description: {
      'pt-BR': 'Desenvolvimento e modernização de sistemas institucionais. Integrações com Oracle, microserviços FastAPI, segurança de documentos, Docker e testes.',
      en: 'Development and modernization of institutional systems. Oracle integrations, FastAPI microservices, document security, Docker, and testing.',
    },
    tags: ['Laravel', 'FastAPI', 'Oracle', 'Docker'],
  },
  {
    id: 'policia-civil',
    date: { 'pt-BR': 'abr 2025 — out 2025', en: 'Apr 2025 — Oct 2025' },
    title: { 'pt-BR': 'Desenvolvedor Full Stack', en: 'Full Stack Developer' },
    company: 'Polícia Civil do Pará · Delegacia-Geral',
    description: {
      'pt-BR': 'Desenvolvimento e modernização de sistemas internos de alta criticidade, com foco em integridade de dados, correção de vulnerabilidade em legado e fluxos operacionais.',
      en: 'Development and modernization of mission-critical internal systems, focusing on data integrity, legacy vulnerability remediation, and operational workflows.',
    },
    tags: ['PHP', 'Zend', 'Segurança'],
  },
  {
    id: 'v3l0z',
    date: { 'pt-BR': 'mar 2024 — mar 2025', en: 'Mar 2024 — Mar 2025' },
    title: { 'pt-BR': 'Full Stack · Liderança Técnica', en: 'Full Stack · Technical Leadership' },
    company: 'V3L0Z · Belém, PA',
    description: {
      'pt-BR': 'Atuei no Gestão Lab e no Verdinho Eventos e prestei suporte a outros produtos do',
      en: 'I worked on Gestão Lab and Verdinho Eventos and supported other products in the',
    },
    link: 'https://ecosistemaveloz.com.br/#produtos',
    linkLabel: { 'pt-BR': 'Ecossistema Veloz ↗', en: 'Veloz Ecosystem ↗' },
    afterLink: {
      'pt-BR': '. Também exerci liderança técnica de duas equipes (8 desenvolvedores), com trabalho em modelagem de dados e entregas de software.',
      en: '. I also provided technical leadership for two teams (8 developers), working on data modeling and software delivery.',
    },
    tags: ['Python', 'Django', 'PostgreSQL', 'CI/CD'],
  },
]

export const skills = [
  'Python / FastAPI / Django', 'Java', 'PHP / Laravel', 'TypeScript / Vue / React',
  'Node.js / NestJS', 'PostgreSQL / Oracle / SQL Server', 'Docker / Linux / CI/CD',
  'n8n', 'Agentes locais / IA aplicada', 'Testes automatizados',
  'Pytest / PHPUnit / Playwright', 'Segurança / Observabilidade', 'Spec-Driven Development',
] as const
