// Dicionários de Internacionalização (Português & Inglês)
// Refatoração MONOFORM Minimalist Architecture + Graphic Design 2026
// Mantém total compatibilidade retroativa para todos os módulos existentes

export type Lang = "pt" | "en";

const pt = {
  meta: {
    title: "Marco Alves — Desenvolvedor Frontend & Digital Designer",
    htmlLang: "pt-BR",
  },

  nav: {
    logo: "MARCO ALVES",
    role: "FRONTEND & DIGITAL EXPERIENCES",
    projects: "Projetos",
    about: "Sobre",
    skills: "Habilidades",
    resume: "Currículo",
    contact: "Contato",
    switchLabel: "Mudar idioma para inglês",
  },

  hero: {
    label: "00 / INTRODUÇÃO",
    location: "BRASIL — 2026",
    status: "DISPONÍVEL PARA PROJETOS",
    name: "MARCO ALVES",
    titleLine1: "DESENVOLVEDOR FRONTEND",
    titleLine2: "& EXPERIÊNCIAS DIGITAIS",
    description:
      "Desenvolvedor especializado em interfaces modernas, design digital e construção de experiências web funcionais, intuitivas e esteticamente precisas.",
    ctaProjects: "Conhecer projetos",
    ctaContact: "Entrar em contato",
    metaItems: [
      { label: "FOCO", value: "UI/UX & Front-End" },
      { label: "STACK", value: "React • TypeScript • Next.js" },
      { label: "VIVÊNCIA", value: "E-commerce & Web Apps" },
      { label: "BASE", value: "Nova Petrópolis — RS" },
    ],
  },

  projects: {
    sectionTag: "01 / TRABALHOS SELECIONADOS",
    title: "Projetos em Destaque",
    subtitle:
      "Apresentação editorial de projetos desenvolvidos com foco em performance, identidade visual e usabilidade.",
    viewProject: "Acessar Projeto",
    label: "PROJETO",
    typeLabel: "TIPO",
    aboutTitle: "SOBRE",
    featuresTitle: "FUNCIONALIDADES EM DESTAQUE",
    toolsTitle: "FERRAMENTAS / CONHECIMENTOS",
    project1: {
      number: "01",
      name: "Imports Alves",
      type: "E-COMMERCE",
      category: "E-COMMERCE & LOJA VIRTUAL",
      description:
        "Loja virtual desenvolvida para comércio e vestuário esportivo. Foco no desenvolvimento da experiência de compra fluida e moderna, catálogo dinâmico de produtos, carrinho responsivo e fluxo de pagamento seguro integrado.",
      features: [
        "Catálogo de produtos dinâmico",
        "Carrinho de compras",
        "Sistema de pedidos",
        "Fluxo de pagamento seguro",
      ],
      tools: ["Next.js", "React", "Supabase", "Tailwind CSS", "Mercado Pago"],
      link: "https://www.importsalves.com.br/",
      alt: "Projeto Imports Alves E-commerce",
    },
    project2: {
      number: "02",
      name: "Mbrulhos Seguros",
      type: "WEBSITE",
      category: "WEBSITE INSTITUCIONAL & SIMULAÇÃO",
      description:
        "Plataforma desenvolvida para corretora de seguros com foco na clareza da identidade visual, usabilidade da interface, facilidade para simulação de seguros e direcionamento ágil para atendimento direto.",
      features: [
        "Simulação de seguros",
        "Identidade visual moderna",
        "Atendimento via WhatsApp",
      ],
      tools: ["UI Design", "Front-end", "Design Responsivo", "UX/UI"],
      link: "https://corretora-mbruno.vercel.app/",
      alt: "Projeto Mbrulhos Seguros",
    },
  },

  about: {
    label: "02 — SOBRE",
    name: "MARCO ALVES",
    focusTitle: "FOCO",
    baseTitle: "BASE",
    baseText: "Brasil — 2026",
    skills: ["LANDING PAGES", "CRIATIVOS", "TRÁFEGO PAGO", "SITES 3D"],
    sectionTag: "02 / SOBRE MIM",
    title: ["EU CRIO", "EXPERIÊNCIAS", "DIGITAIS."],
    titleLine1: "INTERFACES PRECISAS,",
    titleLine2: "EXPERIÊNCIAS QUE CONVERTEM.",
    description:
      "Atuo na criação de interfaces digitais contemporâneas, unindo sensibilidade estética para design minimalista ao rigor técnico de desenvolvimento de software.",
    paragraph1:
      "Atuo na criação de interfaces digitais contemporâneas, unindo sensibilidade estética para design minimalista ao rigor técnico de desenvolvimento de software.",
    paragraph2:
      "Minha trajetória combina o domínio do ecossistema moderno de desenvolvimento frontend (React, TypeScript e Next.js), a gestão prática de e-commerce real e a disciplina metódica adquirida na graduação em Educação Física e extensão em saúde. O resultado é uma atuação pautada em clareza, pontualidade e foco em soluções funcionais.",
    cards: [
      {
        number: "01",
        title: "Tecnologia & Front-end",
        desc: "Desenvolvimento com código limpo, arquitetura modular de componentes, alto desempenho e fidelidade de design.",
      },
      {
        number: "02",
        title: "Experiência do Usuário (UX)",
        desc: "Atenção meticulosa à navegação intuitiva, microinterações fluidas, acessibilidade e responsividade em qualquer dispositivo.",
      },
      {
        number: "03",
        title: "Visão Prática de Negócio",
        desc: "Experiência real como fundador de e-commerce, entendendo na prática como interface e velocidade impactam a conversão.",
      },
    ],
  },

  skills: {
    sectionTag: "03 / CAPACIDADES TÉCNICAS",
    title: "Tecnologias & Habilidades",
    subtitle:
      "Competências técnicas consolidadas e aplicadas em projetos reais de produção.",
    pillars: [
      {
        number: "01",
        category: "Front-End & Frameworks",
        skills: ["React", "TypeScript", "Next.js", "JavaScript (ES6+)", "HTML5 & CSS3"],
      },
      {
        number: "02",
        category: "Estilização & Design",
        skills: ["Styled Components", "Tailwind CSS", "UI/UX Design", "Design Responsivo", "Microinterações"],
      },
      {
        number: "03",
        category: "Back-End & Dados",
        skills: ["Supabase", "PostgreSQL", "APIs RESTful", "Node.js", "Mercado Pago"],
      },
      {
        number: "04",
        category: "Ferramentas & Fluxo",
        skills: ["Git & GitHub", "Vite", "Deploy Vercel", "Clean Code", "Otimização Web"],
      },
    ],
  },

  resume: {
    sectionTag: "04 / CURRÍCULO PROFISSIONAL",
    title: "Currículo",
    subtitle:
      "Acesse o documento completo em formato PDF estruturado no padrão ATS com histórico detalhado de experiências, projetos e formação acadêmica.",
    downloadButton: "Baixar currículo",
    viewButton: "Visualizar no navegador",
    badge: "PDF • Padrão ATS • Pronto para download",
    infoText:
      "Desenvolvedor Full-Stack, Gestor de E-commerce e graduando em Educação Física.",
  },

  contact: {
    sectionTag: "05 / CONTATO",
    titleLine1: "VAMOS CRIAR",
    titleLine2: "ALGO MARCANTE?",
    subtitle:
      "Disponível para novos projetos, desenvolvimento de interfaces digitais e parcerias profissionais. Fique à vontade para me contatar.",
    primaryButton: "Iniciar conversa no WhatsApp",
    email: "alvesbmarco@gmail.com",
    whatsapp: "+55 (54) 99705-3527",
    whatsappLink: "https://wa.me/54997053527",
    linkedin: "linkedin.com/in/omarcoalvess",
    linkedinLink: "https://linkedin.com/in/omarcoalvess",
    github: "github.com/omarcoalvess",
    githubLink: "https://github.com/omarcoalvess",
    location: "Nova Petrópolis — RS, Brasil",
  },

  footer: {
    name: "MARCO ALVES",
    tagline: "Desenvolvimento Frontend & Interfaces Digitais",
    thanks: "Obrigado.",
    contactTitle: "* CONTATO *",
    email: "EMAIL",
    instagram: "INSTAGRAM",
    linkedin: "LINKEDIN",
    copyright: "© 2026 Marco Alves. Todos os direitos reservados.",
    backToTop: "Voltar ao topo ↑",
  },

  // Chaves de compatibilidade para componentes herdados
  header: {
    switchLabel: "Mudar idioma para inglês",
    date: "2026",
    subtitle: "Desenvolvimento criativo",
    portfolioLabel: "PORTFOLIO — 01",
    name: "MARCO ALVES",
    jobFrontend: "DESENVOLVEDOR FRONT-END",
    jobTraffic: "GESTOR DE TRÁFEGO",
    roles: ["Desenvolvedor", "Design Digital", "Criativos"],
    bigTitle: "Portfolio",
  },

  marquee: [
    "Desenvolvimento front-end",
    "Criativos",
    "Interfaces Digitais",
    "Performance Web",
  ],

  services: {
    label: "03 — SERVIÇOS",
    title: ["O QUE EU", "POSSO CRIAR."],
    items: [
      {
        title: "LANDING PAGES",
        description:
          "Páginas desenvolvidas para apresentar marcas, produtos e serviços com clareza, personalidade e foco na experiência.",
      },
      {
        title: "APLICAÇÕES WEB",
        description:
          "Interfaces completas e responsivas desenvolvidas em React, Next.js e TypeScript com alta performance.",
      },
      {
        title: "DESIGN DE INTERFACE",
        description:
          "Experiências digitais desenhadas com precisão tipográfica, espaçamento elegante e atenção a cada detalhe.",
      },
    ],
  },

  cta: {
    label: "05 — COMEÇAR UMA PARCERIA",
    tagline: "VAMOS TRABALHAR",
    title: ["Tem um", "projeto", "em mente?"],
    text: "Landing pages, experiências digitais e interfaces pensadas para transformar ideias em projetos visualmente marcantes.",
    button: "INICIAR UM PROJETO",
  },
};

export type Dict = typeof pt;

const en: Dict = {
  meta: {
    title: "Marco Alves — Frontend Developer & Digital Designer",
    htmlLang: "en",
  },

  nav: {
    logo: "MARCO ALVES",
    role: "FRONTEND & DIGITAL EXPERIENCES",
    projects: "Projects",
    about: "About",
    skills: "Skills",
    resume: "Resume",
    contact: "Contact",
    switchLabel: "Switch language to Portuguese",
  },

  hero: {
    label: "00 / INTRODUCTION",
    location: "BRAZIL — 2026",
    status: "AVAILABLE FOR WORK",
    name: "MARCO ALVES",
    titleLine1: "FRONTEND DEVELOPER",
    titleLine2: "& DIGITAL EXPERIENCES",
    description:
      "Developer specializing in modern interfaces, digital design, and building functional, intuitive, and aesthetically precise web experiences.",
    ctaProjects: "Explore projects",
    ctaContact: "Get in touch",
    metaItems: [
      { label: "FOCUS", value: "UI/UX & Front-End" },
      { label: "STACK", value: "React • TypeScript • Next.js" },
      { label: "BACKGROUND", value: "E-commerce & Web Apps" },
      { label: "BASE", value: "Nova Petrópolis — Brazil" },
    ],
  },

  projects: {
    sectionTag: "01 / SELECTED WORKS",
    title: "Featured Projects",
    subtitle:
      "Editorial presentation of projects built with a commitment to performance, visual identity, and usability.",
    viewProject: "Visit Project",
    label: "PROJECT",
    typeLabel: "TYPE",
    aboutTitle: "ABOUT",
    featuresTitle: "FEATURED HIGHLIGHTS",
    toolsTitle: "TOOLS / TECHNOLOGIES",
    project1: {
      number: "01",
      name: "Imports Alves",
      type: "E-COMMERCE",
      category: "E-COMMERCE & ONLINE STORE",
      description:
        "Modern online store built for sports merchandise and apparel. Focused on delivering a seamless shopping experience, dynamic product catalog, responsive cart flow, and secure payment integration.",
      features: [
        "Dynamic product catalog",
        "Shopping cart",
        "Order management system",
        "Secure payment flow",
      ],
      tools: ["Next.js", "React", "Supabase", "Tailwind CSS", "Mercado Pago"],
      link: "https://www.importsalves.com.br/",
      alt: "Imports Alves E-commerce Project",
    },
    project2: {
      number: "02",
      name: "Mbrulhos Seguros",
      type: "WEBSITE",
      category: "INSTITUTIONAL WEBSITE & QUOTING",
      description:
        "Digital platform built for an insurance broker with an emphasis on crisp brand identity, interface clarity, streamlined insurance quoting, and immediate connection to direct support channels.",
      features: [
        "Insurance quoting",
        "Modern visual identity",
        "WhatsApp integration",
      ],
      tools: ["UI Design", "Front-end", "Responsive Design", "UX/UI"],
      link: "https://corretora-mbruno.vercel.app/",
      alt: "Mbrulhos Seguros Project",
    },
  },

  about: {
    label: "02 — ABOUT",
    name: "MARCO ALVES",
    focusTitle: "FOCUS",
    baseTitle: "BASE",
    baseText: "Brazil — 2026",
    skills: ["LANDING PAGES", "CREATIVES", "PAID TRAFFIC", "3D WEBSITES"],
    sectionTag: "02 / ABOUT ME",
    title: ["I CREATE", "DIGITAL", "EXPERIENCES."],
    titleLine1: "PRECISE INTERFACES,",
    titleLine2: "HIGH-CONVERTING EXPERIENCES.",
    description:
      "I create contemporary digital interfaces, fusing minimalist design sensibilities with software engineering precision.",
    paragraph1:
      "I create contemporary digital interfaces, fusing minimalist design sensibilities with software engineering precision.",
    paragraph2:
      "My background brings together mastery of the modern front-end ecosystem (React, TypeScript, Next.js), hands-on operational leadership of an active e-commerce store, and the analytical discipline from my Physical Education and health extension degree. This yields clarity, reliability, and pragmatic technical execution.",
    cards: [
      {
        number: "01",
        title: "Technology & Front-End",
        desc: "Clean-code development, modular components, high-speed rendering, and faithful design fidelity.",
      },
      {
        number: "02",
        title: "User Experience (UX)",
        desc: "Meticulous care for intuitive navigation, subtle micro-interactions, accessibility, and multi-device fluidity.",
      },
      {
        number: "03",
        title: "Commercial Acumen",
        desc: "Real founder experience managing an online store, understanding firsthand how interface speed drives conversion.",
      },
    ],
  },

  skills: {
    sectionTag: "03 / TECHNICAL CAPABILITIES",
    title: "Technologies & Skills",
    subtitle:
      "Consolidated technical skills verified and applied in real production projects.",
    pillars: [
      {
        number: "01",
        category: "Front-End & Frameworks",
        skills: ["React", "TypeScript", "Next.js", "JavaScript (ES6+)", "HTML5 & CSS3"],
      },
      {
        number: "02",
        category: "Styling & Interface Design",
        skills: ["Styled Components", "Tailwind CSS", "UI/UX Design", "Responsive Design", "Micro-interactions"],
      },
      {
        number: "03",
        category: "Back-End & Data",
        skills: ["Supabase", "PostgreSQL", "RESTful APIs", "Node.js", "Payment Gateways"],
      },
      {
        number: "04",
        category: "Tools & Workflow",
        skills: ["Git & GitHub", "Vite", "Vercel Deploy", "Clean Code", "Web Performance"],
      },
    ],
  },

  resume: {
    sectionTag: "04 / PROFESSIONAL RESUME",
    title: "Resume",
    subtitle:
      "Access the complete ATS-standard PDF document with full professional background, project history, and academic education.",
    downloadButton: "Download resume",
    viewButton: "View in browser",
    badge: "PDF • ATS Standard • Ready for download",
    infoText:
      "Full-Stack Developer, E-commerce Manager and Physical Education undergraduate.",
  },

  contact: {
    sectionTag: "05 / CONTACT",
    titleLine1: "LET'S BUILD",
    titleLine2: "SOMETHING REMARKABLE?",
    subtitle:
      "Available for new projects, digital interface development, and professional partnerships. Feel free to reach out directly.",
    primaryButton: "Start a conversation on WhatsApp",
    email: "alvesbmarco@gmail.com",
    whatsapp: "+55 (54) 99705-3527",
    whatsappLink: "https://wa.me/54997053527",
    linkedin: "linkedin.com/in/omarcoalvess",
    linkedinLink: "https://linkedin.com/in/omarcoalvess",
    github: "github.com/omarcoalvess",
    githubLink: "https://github.com/omarcoalvess",
    location: "Nova Petrópolis — RS, Brazil",
  },

  footer: {
    name: "MARCO ALVES",
    tagline: "Frontend Development & Digital Interfaces",
    thanks: "Thank you.",
    contactTitle: "* CONTACT ME *",
    email: "EMAIL",
    instagram: "INSTAGRAM",
    linkedin: "LINKEDIN",
    copyright: "© 2026 Marco Alves. All rights reserved.",
    backToTop: "Back to top ↑",
  },

  // Backward compatibility keys
  header: {
    switchLabel: "Switch language to Portuguese",
    date: "2026",
    subtitle: "Creative development",
    portfolioLabel: "PORTFOLIO — 01",
    name: "MARCO ALVES",
    jobFrontend: "FRONT-END DEVELOPER",
    jobTraffic: "PAID TRAFFIC MANAGER",
    roles: ["Developer", "Digital Design", "Creatives"],
    bigTitle: "Portfolio",
  },

  marquee: [
    "Front-end development",
    "Creatives",
    "Digital Interfaces",
    "Web Performance",
  ],

  services: {
    label: "03 — SERVICES",
    title: ["WHAT I", "CAN CREATE."],
    items: [
      {
        title: "LANDING PAGES",
        description:
          "Pages built to present brands, products and services with clarity, personality and a focus on experience.",
      },
      {
        title: "WEB APPLICATIONS",
        description:
          "Responsive, high-performance interfaces engineered with React, Next.js and TypeScript.",
      },
      {
        title: "INTERFACE DESIGN",
        description:
          "Digital experiences crafted with precise typography, elegant spacing and meticulous care.",
      },
    ],
  },

  cta: {
    label: "05 — START A PARTNERSHIP",
    tagline: "LET'S WORK TOGETHER",
    title: ["Got a", "project", "in mind?"],
    text: "Landing pages, digital experiences and interfaces designed to turn ideas into visually striking projects.",
    button: "START A PROJECT",
  },
};

export const translations: Record<Lang, Dict> = {
  pt,
  en,
};
