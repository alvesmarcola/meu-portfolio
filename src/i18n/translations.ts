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

  // Itens base do marquee (o componente repete 3x para manter o efeito)
  marquee: ["Desenvolvimento front-end", "Criativos", "Sites 3D", "tráfego pago"],

  about: {
    label: "02 — SOBRE",
    // 3 linhas; a do meio é o destaque (Highlight)
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
    // Rótulos compartilhados pelos Projetos 1 e 2
    label: "PROJETO",
    typeLabel: "TIPO",
    aboutTitle: "SOBRE",
    toolsTitle: "FERRAMENTAS / CONHECIMENTOS",

    project1: {
      number: "(01) PROJETO",
      type: "SITE",
      description:
        "Website desenvolvido para apresentar uma profissional de social media e seus serviços, combinando identidade visual, comunicação estratégica e uma experiência digital moderna.",
      tools: ["UI Design", "Front-end", "Design Responsivo"],
      imageAlt: "Projeto Eduarda Alves Social Media",
    },

    project2: {
      number: "(02) PROJETO",
      type: "3D / WEB",
      description:
        "Experimento visual desenvolvido em 3D, explorando composição, interação e estética para criar uma experiência digital mais imersiva.",
      tools: ["Desenvolvimento 3D", "Design UX/UI", "Front-end", "Criatividade"],
      imageAlt: "Projeto Creative 3D",
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

  marquee: ["Front-end development", "Creatives", "3D websites", "paid traffic"],

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
    toolsTitle: "TOOLS / SKILLS",

    project1: {
      number: "(01) PROJECT",
      type: "WEBSITE",
      description:
        "Website built to showcase a social media professional and her services, combining visual identity, strategic communication and a modern digital experience.",
      tools: ["UI Design", "Front-end", "Responsive Design"],
      imageAlt: "Eduarda Alves Social Media project",
    },

    project2: {
      number: "(02) PROJECT",
      type: "3D / WEB",
      description:
        "Visual experiment built in 3D, exploring composition, interaction and aesthetics to create a more immersive digital experience.",
      tools: ["3D Development", "UX/UI Design", "Front-end", "Creativity"],
      imageAlt: "Creative 3D project",
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

export const translations: Record<Lang, Dict> = { pt, en };
