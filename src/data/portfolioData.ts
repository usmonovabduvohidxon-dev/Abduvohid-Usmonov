import { Project, SkillCategory, TimelineItem } from '../types';

export const portfolioConfig = {
  name: 'Abduvohidxon Usmonov',
  shortName: 'Abduvohidxon',
  domain: 'USMONOV.DEV',
  role: 'Developer & Builder',
  tagline: 'I build modern digital products, tools and experiences.',
  availability: 'available for projects',
  location: 'Tashkent / Remote',
  currentStatus: 'Currently building new ideas.',
  heroDescription:
    'I create web applications, AI-powered tools and digital experiences with a focus on useful ideas, clean interfaces and real-world functionality.',
  mindset: 'Build. Learn. Improve.',
  year: '2026'
};

export const contactLinks = {
  github: 'YOUR_GITHUB_URL',
  telegram: 'https://t.me/JS_usmnv',
  email: 'usmonovabduvohidxon@gmail.com'
};

export const heroCodeSnippet = `const developer = {
    name: "Abduvohidxon",
    role: "Developer",
    website: "usmonov.dev",

    building: [
        "Usmonov AI",
        "Usgram"
    ],

    mindset: "Build. Learn. Improve."
};`;

export const systemMetrics = [
  { label: 'SYSTEM', value: 'Online', status: 'normal' },
  { label: 'PROJECTS', value: 'Active', status: 'highlight' },
  { label: 'MODE', value: 'Building', status: 'accent' },
  { label: 'STACK', value: 'Web / AI', status: 'normal' }
];

export const projectsData: Project[] = [
  {
    id: 'usmonov-ai',
    name: 'USMONOV AI',
    tag: 'AI / Web App',
    category: 'AI / Web App',
    description:
      'A personal AI assistant concept focused on intelligent interaction, useful tools and a modern developer-oriented interface.',
    longDescription:
      'USMONOV AI is an advanced AI productivity companion tailored specifically for developers and creators. It integrates streamlined prompt execution, context-aware code analysis, markdown generation, and a distraction-free IDE-grade UI with low latency interactions.',
    technologies: ['AI', 'JavaScript', 'Web', 'UI/UX'],
    status: 'ACTIVE DEVELOPMENT',
    activePhase: 'Development',
    image: '/src/assets/images/project_usmonov_ai_1790445017427.jpg',
    highlights: [
      'Intelligent developer-oriented assistance workflows',
      'Minimalist dark charcoal UI with precision metrics',
      'Contextual token management and memory buffers',
      'Custom snippet generator & syntax verification'
    ],
    githubUrl: undefined, // Private in closed development
    demoUrl: undefined
  },
  {
    id: 'usgram',
    name: 'USGRAM',
    tag: 'Messenger / Web App',
    category: 'Messenger / Web App',
    description:
      'A modern messaging platform concept designed around communication, clean UI and scalable architecture.',
    longDescription:
      'USGRAM focuses on essential high-velocity communication without bloat. Engineered with reactive state, clean message threading, real-time presence indicators, media compression pipelines, and responsive mobile-first architecture.',
    technologies: ['Frontend', 'Backend', 'Real-time', 'Web'],
    status: 'PROTOTYPE COMPLETE',
    activePhase: 'Architecture',
    image: '/src/assets/images/project_usgram_1790445029082.jpg',
    highlights: [
      'Ultra-clean message threads with frictionless UX',
      'Real-time socket event layer for instant delivery',
      'Zero unnecessary friction, sleek developer-level theme',
      'Designed for cross-device responsiveness'
    ],
    githubUrl: undefined, // In closed alpha
    demoUrl: undefined
  },
  {
    id: 'next-project',
    name: 'NEXT PROJECT',
    tag: 'status: developing...',
    category: 'Experimental',
    description: 'Something new is being built.',
    longDescription:
      'An exploratory software experiment combining autonomous digital tooling and clean web architecture. Currently in the architectural design and sandbox prototyping phase.',
    technologies: ['Next-Gen', 'Experimental', 'In Progress', 'Web'],
    status: 'IN REPUTABLE DISCOVERY',
    activePhase: 'Design',
    highlights: [
      'Experimental developer utility & workflow system',
      'Exploration of generative web interaction paradigms',
      'High-performance client-side state models'
    ],
    isFuture: true
  }
];

export const skillsData: SkillCategory[] = [
  {
    title: 'Frontend',
    category: 'Interface & Client Engineering',
    iconName: 'Layout',
    skills: [
      {
        name: 'HTML',
        level: 'Semantic & Accessible',
        badge: 'Core',
        description: 'Clean DOM structure, SEO-first semantics, ARIA accessibility standards'
      },
      {
        name: 'CSS',
        level: 'Modern & Responsive',
        badge: 'Layout',
        description: 'Flexbox, Grid, CSS variables, glassmorphic interfaces, and responsive fluid design'
      },
      {
        name: 'JavaScript',
        level: 'ES6+ & Asynchronous',
        badge: 'Language',
        description: 'Modern asynchronous workflows, DOM manipulation, state patterns, and API interactions'
      },
      {
        name: 'Responsive Design',
        level: 'Cross-Device & Mobile-First',
        badge: 'UX',
        description: 'Pixel-perfect mobile, tablet, and widescreen layouts without horizontal overflow'
      }
    ]
  },
  {
    title: 'Development',
    category: 'Tooling & Workflow Environment',
    iconName: 'Terminal',
    skills: [
      {
        name: 'Git',
        level: 'Version Control',
        badge: 'VCS',
        description: 'Branch management, rebasing, clean commit discipline, and conflict resolution'
      },
      {
        name: 'GitHub',
        level: 'Collaboration & Repos',
        badge: 'Platform',
        description: 'Repository architecture, issue tracking, continuous integration, and version releases'
      },
      {
        name: 'VS Code',
        level: 'IDE Configuration & Speed',
        badge: 'IDE',
        description: 'Custom snippet workspaces, debugger setup, keybinding efficiency, and linter pipelines'
      },
      {
        name: 'APIs',
        level: 'RESTful & Real-time Integration',
        badge: 'Integration',
        description: 'Consuming REST endpoints, webhook handling, authorization flows, and data parsing'
      }
    ]
  },
  {
    title: 'AI & Tools',
    category: 'Intelligence & Acceleration',
    iconName: 'Cpu',
    skills: [
      {
        name: 'AI Applications',
        level: 'Practical Implementations',
        badge: 'AI',
        description: 'Designing end-to-end intelligent software tools that solve concrete real-world tasks'
      },
      {
        name: 'Prompt Engineering',
        level: 'Structured & Deterministic',
        badge: 'System',
        description: 'System instructions, few-shot prompting, schema-constrained outputs, and guardrails'
      },
      {
        name: 'AI-assisted Development',
        level: 'High-Velocity Coding',
        badge: 'Productivity',
        description: 'Accelerating implementation cycles, automated test drafting, and refactoring'
      },
      {
        name: 'Automation',
        level: 'Workflows & Tooling',
        badge: 'Engine',
        description: 'Scripting repetitive tasks, build step optimization, and developer productivity'
      }
    ]
  }
];

export const timelineData: TimelineItem[] = [
  {
    number: '01',
    title: 'Started building websites',
    description: 'Began exploring HTML, CSS, and basic JavaScript. Discovered the thrill of turning raw code into responsive visual interfaces.',
    status: 'completed',
    date: 'Phase 1'
  },
  {
    number: '02',
    title: 'Explored programming and automation',
    description: 'Dived deeper into core computer science fundamentals, algorithmic problem solving, scripting, and developer workflows.',
    status: 'completed',
    date: 'Phase 2'
  },
  {
    number: '03',
    title: 'Started building AI-powered applications',
    description: 'Ventured into artificial intelligence and modern model capabilities, crafting software that solves real user friction.',
    status: 'completed',
    date: 'Phase 3'
  },
  {
    number: '04',
    title: 'Created USGRAM',
    description: 'Engineered USGRAM, a streamlined real-time messaging concept with high-velocity interface design and clean architecture.',
    status: 'completed',
    date: 'Milestone'
  },
  {
    number: '05',
    title: 'Created USMONOV AI',
    description: 'Architected USMONOV AI, an intelligent personal assistant experience focused on developer workflow acceleration.',
    status: 'active',
    date: 'Current'
  },
  {
    number: '06',
    title: 'More projects coming...',
    description: 'Continuously researching, iterating, and developing new web applications and digital tools.',
    status: 'upcoming',
    date: 'Continuous'
  }
];

export const buildingPipeline = [
  { step: 'Design', status: 'completed' },
  { step: 'Development', status: 'active' },
  { step: 'Testing', status: 'pending' },
  { step: 'Release', status: 'pending' }
];

export const terminalResponses: Record<string, string | string[]> = {
  help: [
    'Available commands:',
    '  whoami          — View developer identity',
    '  current_status  — Check current building status',
    '  motivation      — Core engineering mindset',
    '  projects        — List active and completed projects',
    '  skills          — Overview of technical skill stack',
    '  about           — Background and philosophy',
    '  contact         — Show direct channels to connect',
    '  clear           — Clear terminal output screen'
  ],
  whoami: [
    'Abduvohidxon Usmonov',
    'Role: Developer & Builder',
    'Focus: Web applications, AI-powered tools & modern digital experiences'
  ],
  current_status: [
    'Status: Active',
    'Building: USMONOV AI (Stage: Development)',
    'Activity: Engineering intelligent tools with clean developer ergonomics'
  ],
  motivation: [
    'Build. Learn. Improve.',
    '"I enjoy turning ideas into working digital products."'
  ],
  projects: [
    '1. USMONOV AI — Personal AI assistant concept with developer-oriented interface [Active]',
    '2. USGRAM — Modern messaging platform concept with real-time architecture [Prototype]',
    '3. NEXT PROJECT — Architectural discovery & experimental prototype [Developing...]'
  ],
  skills: [
    'Frontend: HTML · CSS · JavaScript · Responsive Design',
    'Development: Git · GitHub · VS Code · APIs',
    'AI & Tools: AI Applications · Prompt Engineering · AI-assisted Dev · Automation'
  ],
  about: [
    'Abduvohidxon Usmonov is a software developer & builder.',
    'Focused on turning conceptual ideas into reliable, well-crafted software.',
    'Interested in modern web architecture, AI systems, and refined UI engineering.'
  ],
  contact: [
    `Email: ${contactLinks.email}`,
    `GitHub: ${contactLinks.github}`,
    `Telegram: ${contactLinks.telegram}`
  ]
};
