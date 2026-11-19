/**
 * Centralized Portfolio Configuration for Subhodh Rakesh
 * All details can be easily updated or customized here.
 */

export const personalInfo = {
  name: "Subhodh Rakesh",
  initials: "SR",
  roleHeadline: "Building Ideas Into Digital Experiences",
  tagline: "Senior Full-Stack Engineer & UI/UX Architect crafting high-performance, accessible, and aesthetically captivating digital products.",
  typingRoles: [
    "Full-Stack Software Engineer",
    "Frontend & UI/UX Architect",
    "React & Next.js Specialist",
    "Cloud & Distributed Systems Builder",
    "Open-Source Contributor"
  ],
  bioIntro: "I am a passionate software craftsman dedicated to engineering seamless user experiences paired with resilient backend architectures. With a strong blend of design sensitivity and engineering rigor, I transform complex ideas into intuitive, scalable software.",
  status: "Available for new opportunities & select consulting",
  statusColor: "#10B981", // green dot
  location: "Bangalore, India",
  email: "subhodh.rakesh.dev@gmail.com", // [EDITABLE PLACEHOLDER]
  phone: "+91 98765 43210", // [EDITABLE PLACEHOLDER]
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  twitter: "https://twitter.com",
  yearsExperience: "4+",
  projectsCompleted: "28+",
  codeCommits: "2,400+",
  clientSatisfaction: "99%",
  resumeUrl: "#resume", // Linked to resume modal / download
};

export const aboutData = {
  biography: [
    "Hello! I'm Subhodh Rakesh, a software engineer who thrives at the intersection of high-fidelity user interface design and bulletproof backend engineering. Over the past 4+ years, I have worked across fast-growing startups and product teams, architecting platforms that serve thousands of daily active users.",
    "My engineering philosophy revolves around three core pillars: user-obsessed simplicity, performant architecture, and maintainable, clean code. I believe technology should feel invisible and empowering, elevating human capability through thoughtfully crafted interactions.",
    "When I'm not coding or refining micro-interactions in Figma, you'll find me exploring emerging AI workflows, contributing to developer communities, or dissecting open-source system architectures."
  ],
  stats: [
    { label: "Years of Experience", value: "4+", description: "Crafting modern production applications" },
    { label: "Completed Projects", value: "28+", description: "From initial design to global deployment" },
    { label: "Code Commits", value: "2.4k+", description: "Consistent open-source & team contributions" },
    { label: "Happy Collaborators", value: "99%", description: "Focus on delivery excellence & speed" }
  ],
  pillars: [
    {
      title: "UI/UX & Frontend Craft",
      description: "Pixel-perfect implementations, micro-interactions, responsive fluid layouts, and strict accessibility (WCAG AA).",
      icon: "Palette"
    },
    {
      title: "Scalable Full-Stack Engineering",
      description: "Robust APIs, event-driven architectures, relational & NoSQL databases, and optimized caching layers.",
      icon: "Cpu"
    },
    {
      title: "Cloud & DevOps Automation",
      description: "Continuous integration, automated testing, containerized workloads, and edge-native deployments.",
      icon: "Cloud"
    },
    {
      title: "Collaborative Leadership",
      description: "Mentoring junior engineers, conducting thorough code reviews, and partnering with product managers to shape roadmaps.",
      icon: "Users"
    }
  ],
  careerGoals: [
    "Pioneering AI-augmented developer tooling and generative interfaces",
    "Architecting resilient high-throughput cloud distributed systems",
    "Championing open-source software and design system standards"
  ]
};

export const skillsData = {
  categories: [
    { id: "all", label: "All Skills" },
    { id: "technical", label: "Technical Skills" },
    { id: "frontend", label: "Frontend & UI/UX" },
    { id: "backend", label: "Backend & Cloud" },
    { id: "professional", label: "Professional Skills" }
  ],
  skills: [
    // Technical & Frontend
    { name: "React.js / Next.js", category: "frontend", level: "Expert", levelScore: 95, icon: "Code2", tags: ["SSR", "RSC", "Hooks", "Suspense"] },
    { name: "TypeScript / JavaScript", category: "technical", level: "Expert", levelScore: 94, icon: "FileCode", tags: ["ESNext", "Type-safety", "Generics"] },
    { name: "Tailwind CSS & CSS3", category: "frontend", level: "Expert", levelScore: 96, icon: "Paintbrush", tags: ["Responsive", "Custom Design Systems", "Flex/Grid"] },
    { name: "Framer Motion / Animations", category: "frontend", level: "Advanced", levelScore: 90, icon: "Sparkles", tags: ["Layout Animations", "Gestures", "Transitions"] },
    { name: "State Management", category: "frontend", level: "Advanced", levelScore: 92, icon: "Layers", tags: ["Zustand", "Redux Toolkit", "React Query"] },
    
    // Technical & Backend
    { name: "Node.js & Express", category: "backend", level: "Advanced", levelScore: 90, icon: "Server", tags: ["REST APIs", "Microservices", "JWT Auth"] },
    { name: "PostgreSQL & Prisma / Supabase", category: "backend", level: "Advanced", levelScore: 88, icon: "Database", tags: ["Relational Modeling", "Migrations", "Indexing"] },
    { name: "MongoDB & Mongoose", category: "backend", level: "Advanced", levelScore: 86, icon: "DatabaseZap", tags: ["Document DB", "Aggregation Pipelines"] },
    { name: "RESTful & GraphQL APIs", category: "backend", level: "Advanced", levelScore: 90, icon: "Network", tags: ["Apollo", "Schema Design", "Rate Limiting"] },
    { name: "Python / Fast-API", category: "backend", level: "Proficient", levelScore: 82, icon: "Terminal", tags: ["AsyncIO", "Data Pipelines", "AI Integrations"] },
    
    // Cloud & DevOps Tools
    { name: "Docker & Containerization", category: "technical", level: "Advanced", levelScore: 85, icon: "Boxes", tags: ["Multi-stage builds", "Compose", "Deployment"] },
    { name: "AWS Cloud & Cloudflare", category: "technical", level: "Proficient", levelScore: 84, icon: "CloudRain", tags: ["S3", "Lambda", "Workers", "CloudFront"] },
    { name: "Git, GitHub & CI/CD", category: "technical", level: "Expert", levelScore: 94, icon: "GitBranch", tags: ["Actions", "Branching Workflows", "Releases"] },
    { name: "Figma & UI Prototyping", category: "frontend", level: "Advanced", levelScore: 88, icon: "Figma", tags: ["Design Systems", "Auto-layout", "Handoff"] },
    
    // Professional Skills
    { name: "System Architecture Design", category: "professional", level: "Advanced", levelScore: 90, icon: "Workflow", tags: ["Modular", "Clean Code", "SOLID"] },
    { name: "Performance Optimization", category: "professional", level: "Expert", levelScore: 94, icon: "Zap", tags: ["Lighthouse 95+", "Core Web Vitals", "Bundle Splitting"] },
    { name: "Agile & Product Delivery", category: "professional", level: "Advanced", levelScore: 92, icon: "CheckCircle", tags: ["Scrum", "Sprint Planning", "Jira"] },
    { name: "Cross-Functional Collaboration", category: "professional", level: "Expert", levelScore: 95, icon: "MessageSquare", tags: ["Design-Dev Bridge", "Stakeholder Reviews"] }
  ]
};

export const timelineData = {
  experience: [
    {
      id: "exp-1",
      role: "Senior Full-Stack Engineer",
      company: "Apex Digital Solutions", // [EDITABLE PLACEHOLDER]
      period: "2023 — Present",
      location: "Bangalore, India (Hybrid)",
      type: "Full-Time",
      description: "Spearheading the core enterprise platform development, leading frontend modernization, and standardizing reusable design system tokens across multi-repo micro-frontends.",
      achievements: [
        "Architected and deployed a multi-tenant analytics dashboard serving 120,000+ monthly active users with sub-second page loads.",
        "Reduced client-side bundle size by 38% via code splitting, asset optimizations, and modern tree-shaking workflows.",
        "Mentored a team of 5 junior and mid-level engineers through structured pairing and code architecture reviews."
      ],
      technologies: ["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS", "AWS"]
    },
    {
      id: "exp-2",
      role: "Full-Stack Software Developer",
      company: "Nexus Technologies", // [EDITABLE PLACEHOLDER]
      period: "2021 — 2023",
      location: "Bangalore, India",
      type: "Full-Time",
      description: "Engineered scalable cloud web applications, implemented high-security payment integrations, and built real-time collaborative workspace features.",
      achievements: [
        "Delivered a real-time collaborative document and kanban workspace using WebSockets and optimistic UI mutations.",
        "Built resilient asynchronous webhook processing pipelines handling 50,000+ events daily with zero transaction loss.",
        "Improved unit and end-to-end test coverage from 45% to 85% using Vitest and Playwright."
      ],
      technologies: ["React", "Express.js", "MongoDB", "Redux", "Docker", "Tailwind CSS", "Jest"]
    },
    {
      id: "exp-3",
      role: "Frontend Engineer Intern",
      company: "InnoWave Labs", // [EDITABLE PLACEHOLDER]
      period: "2020 — 2021",
      location: "Bangalore, India",
      type: "Internship",
      description: "Collaborated with product designers to implement responsive landing pages, interactive product tours, and client dashboards.",
      achievements: [
        "Converted 15+ complex Figma mockups into accessible, pixel-perfect React components.",
        "Integrated third-party analytics, CRM workflows, and email notification systems."
      ],
      technologies: ["JavaScript", "React", "CSS3", "Git", "REST APIs"]
    }
  ],
  education: [
    {
      id: "edu-1",
      degree: "Bachelor of Technology in Computer Science & Engineering",
      institution: "Visvesvaraya Technological University (VTU)", // [EDITABLE PLACEHOLDER]
      period: "2017 — 2021",
      location: "Karnataka, India",
      score: "First Class with Distinction",
      details: "Focus on Data Structures, Algorithms, Distributed Computing, Database Management Systems, and Software Engineering Methodologies.",
      highlights: ["Dean's Honor List", "President of Developer Student Club", "Top 5% in Capstone Project"]
    },
    {
      id: "edu-2",
      degree: "Higher Secondary Certificate (Physics, Chemistry, Mathematics & CS)",
      institution: "State Board of Pre-University Education", // [EDITABLE PLACEHOLDER]
      period: "2015 — 2017",
      location: "India",
      score: "Graduated with Honors (92%)",
      details: "Foundational training in Advanced Mathematics, Analytical Problem Solving, and Computer Science fundamentals."
    }
  ]
};

export const projectsData = [
  {
    id: "proj-1",
    title: "Apex Cloud Console — Enterprise Analytics Platform",
    subtitle: "High-throughput operational analytics dashboard with real-time telemetries",
    category: "fullstack",
    featured: true,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    description: "A comprehensive cloud operations dashboard that empowers engineering teams to monitor microservice latencies, serverless invocation metrics, and cloud spending with granular drill-down filters.",
    highlights: [
      "Sub-200ms real-time metric updates via WebSockets",
      "Dynamic customizable widget layout with drag-and-drop",
      "Automated alerting triggers integrated with Slack & PagerDuty"
    ],
    technologies: ["React 18", "TypeScript", "Tailwind CSS", "Recharts", "Node.js", "Redis", "Docker"],
    liveUrl: "https://example.com/demo-cloud", // [EDITABLE PLACEHOLDER]
    githubUrl: "https://github.com/subhodhrakesh/apex-cloud-console", // [EDITABLE PLACEHOLDER]
    stats: "120k MAU • 99.98% Uptime"
  },
  {
    id: "proj-2",
    title: "Verdant — Next-Gen Headless E-Commerce Suite",
    subtitle: "Blazing fast headless store with instant checkout & dynamic personalization",
    category: "fullstack",
    featured: true,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    description: "An ultra-performant e-commerce experience featuring optimistic cart updates, server-side search indexing, multi-currency support, and Stripe checkout integration.",
    highlights: [
      "Lighthouse 98/100 performance score across mobile & desktop",
      "Faceted instant search with debounced fuzzy matching",
      "Secure webhook verification and multi-stage inventory sync"
    ],
    technologies: ["Next.js", "React", "Tailwind CSS", "Stripe API", "PostgreSQL", "Prisma", "Framer Motion"],
    liveUrl: "https://example.com/demo-verdant", // [EDITABLE PLACEHOLDER]
    githubUrl: "https://github.com/subhodhrakesh/verdant-ecommerce", // [EDITABLE PLACEHOLDER]
    stats: "$2.4M GMV Processed"
  },
  {
    id: "proj-3",
    title: "Synthetix — AI Workflow & Prompt Orchestrator",
    subtitle: "Visual workflow builder for LLM agent chains and data transformation",
    category: "ai-systems",
    featured: true,
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
    description: "A node-based visual workflow automation tool allowing developers and operators to chain generative AI models, vector stores, and custom Python lambdas into automated pipelines.",
    highlights: [
      "Infinite zoomable node canvas with reactive connection graphs",
      "Live output streaming with token velocity indicators",
      "One-click pipeline deployment to edge endpoints"
    ],
    technologies: ["React", "React Flow", "TypeScript", "Tailwind CSS", "FastAPI", "OpenAI SDK", "Python"],
    liveUrl: "https://example.com/demo-synthetix", // [EDITABLE PLACEHOLDER]
    githubUrl: "https://github.com/subhodhrakesh/synthetix-ai", // [EDITABLE PLACEHOLDER]
    stats: "4,500+ Pipeline Runs / Day"
  },
  {
    id: "proj-4",
    title: "CollabCanvas — Real-Time Spatial Whiteboard",
    subtitle: "Low-latency multiplayer collaborative drawing & architecture design board",
    category: "frontend",
    featured: false,
    image: "https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=1200&q=80",
    description: "A collaborative virtual whiteboard built on HTML5 Canvas and WebSockets. Supports multi-user concurrent drawing, shape snapping, sticky notes, and export to SVG/PDF.",
    highlights: [
      "Custom bezier curve smoothing algorithm for pen inputs",
      "Conflict-free replicated data types (CRDTs) for offline sync",
      "Multi-cursor presence with avatar tags and chat bubbles"
    ],
    technologies: ["React", "TypeScript", "HTML5 Canvas", "WebSockets", "Zustand", "Tailwind CSS"],
    liveUrl: "https://example.com/demo-collab", // [EDITABLE PLACEHOLDER]
    githubUrl: "https://github.com/subhodhrakesh/collab-canvas", // [EDITABLE PLACEHOLDER]
    stats: "Multiplayer 60 FPS"
  },
  {
    id: "proj-5",
    title: "PulseGuard — Distributed API Gateway & Rate Limiter",
    subtitle: "High-performance edge reverse proxy with token-bucket rate limiting",
    category: "backend",
    featured: false,
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
    description: "A lightweight API security middleware and reverse proxy providing DDoS protection, distributed rate-limiting, and detailed request tracing logs.",
    highlights: [
      "Token bucket & sliding window algorithms using Redis clusters",
      "Detailed latency telemetry and GeoIP threat detection",
      "Configurable rule sets with hot-reload capabilities"
    ],
    technologies: ["Node.js", "Express", "Redis", "Docker", "Prometheus", "Grafana"],
    liveUrl: "https://example.com/demo-pulseguard", // [EDITABLE PLACEHOLDER]
    githubUrl: "https://github.com/subhodhrakesh/pulseguard-proxy", // [EDITABLE PLACEHOLDER]
    stats: "15k req/sec throughput"
  },
  {
    id: "proj-6",
    title: "OmniUI — Accessible Headless Component Design System",
    subtitle: "A modern design system crafted for accessibility, themeability & speed",
    category: "frontend",
    featured: false,
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80",
    description: "An open-source design library offering 40+ accessible UI primitives with full keyboard navigation, automated contrast checking, and multi-brand token theming.",
    highlights: [
      "100% WCAG 2.1 AA compliant component suite",
      "Complete Storybook documentation with live interaction playground",
      "Zero runtime CSS overhead with Tailwind CSS utility presets"
    ],
    technologies: ["React", "TypeScript", "Tailwind CSS", "Storybook", "Radix Primitives"],
    liveUrl: "https://example.com/demo-omniui", // [EDITABLE PLACEHOLDER]
    githubUrl: "https://github.com/subhodhrakesh/omni-ui-system", // [EDITABLE PLACEHOLDER]
    stats: "1.2k GitHub Stars"
  }
];

export const achievementsData = [
  {
    id: "ach-1",
    title: "AWS Certified Solutions Architect — Associate",
    issuer: "Amazon Web Services",
    date: "2023",
    badge: "Verified Credential",
    description: "Demonstrated advanced proficiency in architecting secure, resilient, high-performing, and cost-optimized cloud architectures.",
    credentialId: "AWS-PSA-98234-EXP", // [EDITABLE PLACEHOLDER]
    icon: "Award"
  },
  {
    id: "ach-2",
    title: "First Place Winner — National FinTech Hackathon",
    issuer: "FinTech Builders Summit",
    date: "2022",
    badge: "Champion",
    description: "Engineered an AI-driven automated micro-lending fraud detection platform in under 36 hours among 180+ competitive engineering teams.",
    credentialId: "HACK-2022-GOLD", // [EDITABLE PLACEHOLDER]
    icon: "Trophy"
  },
  {
    id: "ach-3",
    title: "Meta Certified Professional Full-Stack Developer",
    issuer: "Meta (Coursera Professional)",
    date: "2022",
    badge: "Professional Certification",
    description: "Rigorous curriculum covering React, modern asynchronous JavaScript, relational databases, and enterprise test-driven development.",
    credentialId: "META-DEV-66512", // [EDITABLE PLACEHOLDER]
    icon: "CheckCircle2"
  },
  {
    id: "ach-4",
    title: "Speaker & Workshop Lead: 'Mastering Modern React Architecture'",
    issuer: "DevCommunity Bangalore Meetup",
    date: "2023",
    badge: "Community Keynote",
    description: "Conducted an interactive hands-on workshop for 250+ developers on React 18 Concurrent features, Server Components, and state architecture.",
    credentialId: "SPEAKER-BLR-84", // [EDITABLE PLACEHOLDER]
    icon: "Mic"
  }
];
