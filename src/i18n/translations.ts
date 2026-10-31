// Todas as traduções do site ficam aqui.
// Para editar um texto, basta mudar o valor em `pt` ou em `en`.
// O tipo `Dict` garante que o inglês tenha exatamente as mesmas chaves do português.

export type Lang = "pt" | "en";

const pt = {
  meta: {
    title: "Marco Alves - Desenvolvedor Frontend",
    htmlLang: "pt-BR",
  },

  header: {
    switchLabel: "Mudar idioma para inglês",
    date: "25 SEP, 2026",
    subtitle: "Desenvolvimento criativo",
    portfolioLabel: "PORTFOLIO — 01",
    name: "MARCO ALVES",
    jobFrontend: "DESENVOLVEDOR FRONT-END",
    jobTraffic: "GESTOR DE TRÁFEGO",
    roles: ["Desenvolvedor", "Desenvolvimento 3D", "Criativos"],
    bigTitle: "Portfolio",
  },

  marquee: [
    "Desenvolvimento front-end",
    "Criativos",
    "Sites 3D",
    "tráfego pago",
  ],

  about: {
    label: "02 — SOBRE",
    title: ["EU CRIO", "EXPERIÊNCIAS", "DIGITAIS."],
    name: "MARCO ALVES",
    description:
      "Desenvolvedor criativo focado em criar experiências digitais funcionais, estratégicas e visualmente marcantes.",
    focusTitle: "FOCO",
    skills: ["LANDING PAGES", "CRIATIVOS", "TRÁFEGO PAGO", "SITES 3D"],
    baseTitle: "BASE",
    baseText: "Brasil — 2026",
  },

  projects: {
    label: "PROJETO",
    typeLabel: "TIPO",
    aboutTitle: "SOBRE",
    featuresTitle: "FUNCIONALIDADES EM DESTAQUE",
    toolsTitle: "FERRAMENTAS / CONHECIMENTOS",

    project1: {
      number: "(01) PROJETO",
      name: "M Bruno Corretora de Seguros",
      type: "WEBSITE",
      description:
        "Website desenvolvido para apresentar a corretora, facilitar a simulação de seguros e conectar clientes ao atendimento pelo WhatsApp.",
      tools: ["UI Design", "Front-end", "Design Responsivo"],
      alt: "Projeto M Bruno Corretora de Seguros",
      link: "https://corretora-mbruno.vercel.app/",
    },

    project2: {
      number: "(02) PROJETO",
      name: "Resenha Sports Cia",
      type: "E-COMMERCE",
      description:
        "Plataforma de e-commerce moderna desenvolvida para venda de camisas de futebol, kits retro e vestuário esportivo.",
      features: [
        "Catálogo de produtos dinâmico",
        "Carrinho de compras",
        "Sistema de pedidos",
        "Fluxo de pagamento seguro",
      ],
      tools: [
        "Next.js",
        "React",
        "Supabase",
        "Tailwind CSS",
        "Mercado Pago",
      ],
      alt: "Projeto E-commerce Resenha Sports Cia",
      link: "https://alves-store-green.vercel.app/",
    },
  },

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
        title: "GESTÃO DE TRÁFEGO",
        description:
          "Design, tipografia, animações e interações pensados para transformar uma página comum em uma experiência visual.",
      },
      {
        title: "SITES 3D",
        description:
          "Desenvolvimento de experiências digitais com o produto apresentado em 3D.",
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

  footer: {
    thanks: "Obrigado.",
    contactTitle: "* ME CHAME *",
    email: "EMAIL",
    instagram: "INSTAGRAM",
    linkedin: "LINKEDIN",
    copyright: "© 2026 MARCO ALVES",
  },
};

export type Dict = typeof pt;

const en: Dict = {
  meta: {
    title: "Marco Alves - Front-end Developer",
    htmlLang: "en",
  },

  header: {
    switchLabel: "Switch language to Portuguese",
    date: "SEP 25, 2026",
    subtitle: "Creative development",
    portfolioLabel: "PORTFOLIO — 01",
    name: "MARCO ALVES",
    jobFrontend: "FRONT-END DEVELOPER",
    jobTraffic: "PAID TRAFFIC MANAGER",
    roles: ["Developer", "3D Development", "Creatives"],
    bigTitle: "Portfolio",
  },

  marquee: [
    "Front-end development",
    "Creatives",
    "3D websites",
    "paid traffic",
  ],

  about: {
    label: "02 — ABOUT",
    title: ["I CREATE", "DIGITAL", "EXPERIENCES."],
    name: "MARCO ALVES",
    description:
      "Creative developer focused on building functional, strategic and visually striking digital experiences.",
    focusTitle: "FOCUS",
    skills: ["LANDING PAGES", "CREATIVES", "PAID TRAFFIC", "3D WEBSITES"],
    baseTitle: "BASE",
    baseText: "Brazil — 2026",
  },

  projects: {
    label: "PROJECT",
    typeLabel: "TYPE",
    aboutTitle: "ABOUT",
    featuresTitle: "FEATURED HIGHLIGHTS",
    toolsTitle: "TOOLS / TECHNOLOGIES",

    project1: {
      number: "(01) PROJECT",
      name: "M Bruno Insurance Broker",
      type: "WEBSITE",
      description:
        "Website designed to present the insurance broker, simplify insurance quotes and connect clients directly with WhatsApp support.",
      tools: ["UI Design", "Front-end", "Responsive Design"],
      alt: "M Bruno Insurance Broker project",
      link: "https://corretora-mbruno.vercel.app/",
    },

    project2: {
      number: "(02) PROJECT",
      name: "Resenha Sports Cia",
      type: "E-COMMERCE",
      description:
        "Modern e-commerce platform built for selling football jerseys, retro kits and sportswear.",
      features: [
        "Dynamic product catalog",
        "Shopping cart",
        "Order management system",
        "Secure payment flow",
      ],
      tools: [
        "Next.js",
        "React",
        "Supabase",
        "Tailwind CSS",
        "Mercado Pago",
      ],
      alt: "Resenha Sports Cia E-commerce Project",
      link: "https://alves-store-green.vercel.app/",
    },
  },

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
        title: "TRAFFIC MANAGEMENT",
        description:
          "Design, typography, animations and interactions crafted to turn an ordinary page into a visual experience.",
      },
      {
        title: "3D WEBSITES",
        description:
          "Development of digital experiences with the product presented in 3D.",
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

  footer: {
    thanks: "Thank you.",
    contactTitle: "* CONTACT ME *",
    email: "EMAIL",
    instagram: "INSTAGRAM",
    linkedin: "LINKEDIN",
    copyright: "© 2026 MARCO ALVES",
  },
};

export const translations: Record<Lang, Dict> = {
  pt,
  en,
};