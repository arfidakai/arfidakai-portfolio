export const portfolioData = {
  // Personal Information
  personal: {
    name: "Arfida",
    fullName: "Arfida Nuha Pinata",
    title: "AI-Curious Web Developer",
    tagline: "Vibe coding ideas into intelligent digital products",
    email: "arfidapinata2702@gmail.com",
    location: "Indonesia",
  },

  // Hero Section
  hero: {
    badge: "Exploring AI & Building Fast",
    title: "Turning ideas into intelligent web experiences.",
    highlightWord: "intelligent",
    description:
      "I'm Arfida Nuha Pinata, a web developer who loves vibe coding — rapidly transforming ideas into functional prototypes. I'm deeply interested in AI-assisted development, system design, and building experimental digital products.",
    primaryCTA: {
      text: "View My Projects",
      href: "#projects",
    },
    secondaryCTA: {
      text: "Let's Collaborate",
      href: "#contact",
    },
  },

  // Navigation
  navigation: [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ],

  // About Section
  about: {
    label: "About Me",
    title: "Curious builder. AI explorer. System thinker.",
    paragraphs: [
      "I'm a web developer with a strong curiosity for how AI can enhance everyday digital experiences. I enjoy vibe coding — building fast, iterating quickly, and experimenting with new technologies to turn abstract ideas into working products.",
      "My background in business and financial analysis helps me think beyond code. I don't just build interfaces — I design systems that are structured, scalable, and meaningful.",
      "Currently, I'm exploring AI integration, automation tools, and intelligent workflows to understand how technology can simplify learning, productivity, and real-world problems.",
    ],
    stats: [
      { value: "15+", label: "Projects & Experiments Built" },
      { value: "3+", label: "Years Learning & Coding" },
      { value: "∞", label: "Curiosity for AI" },
    ],
  },

  // Skills Section
  skills: {
    title: "Tech Stack & Exploration",
    description:
      "A blend of web fundamentals, backend logic, and AI experimentation.",
    categories: [
      {
        name: "Frontend Development",
        icon: "Layout",
        color: "from-blue-500 to-indigo-600",
        items: [
          "HTML",
          "CSS",
          "JavaScript",
          "React",
          "Next.js",
          "Tailwind CSS",
        ],
      },
      {
        name: "Backend & Systems",
        icon: "Server",
        color: "from-green-500 to-emerald-600",
        items: [
          "PHP",
          "CodeIgniter 4",
          "MySQL",
          "Supabase",
          "REST APIs",
        ],
      },
      {
        name: "AI & Experimentation",
        icon: "Sparkles",
        color: "from-purple-500 to-pink-600",
        items: [
          "OpenAI API",
          "Prompt Engineering",
          "Automation Tools",
          "Rapid Prototyping",
        ],
      },
      {
        name: "Tools & Workflow",
        icon: "Terminal",
        color: "from-orange-400 to-amber-500",
        items: [
          "Git & GitHub",
          "Vercel",
          "VS Code",
          "System Design Thinking",
        ],
      },
    ],
  },

  // Projects Section
  projects: {
    title: "Selected Projects & Experiments",
    description:
      "Creative and AI-driven web applications built from curiosity and structured problem-solving.",
    items: [
      {
        title: "Lecturely – AI-Powered Study Companion",
        description:
          "An AI-assisted academic productivity web app that helps students organize lecture notes, summarize materials, and structure study workflows. Built from my curiosity about how AI can improve learning efficiency.",
        image: "/lecturely.png",
        stack: ["Next.js", "Tailwind CSS", "Supabase", "OpenAI API"],
        color: "from-indigo-500 to-blue-500",
        type: "web",
        link: "#",
        github: "#",
      },
      {
        title: "Moodly – Reflective Mood Journal",
        description:
          "A visual mood tracking and reflection app featuring streak systems and emotional pattern tracking. Designed to explore color psychology, user motivation, and interactive UI design.",
        image: "/moodly.png",
        stack: ["React", "Tailwind CSS", "Chart.js"],
        color: "from-pink-500 to-purple-500",
        type: "mobile",
        link: "#",
        github: "#",
      },
      // {
      //   title: "Waqf & Donation Management System",
      //   description:
      //     "A structured web-based donation and waqf tracking system using MVC architecture, focusing on database design, payment flow logic, and real-world implementation.",
      //   image: "/waqaf.png",
      //   stack: ["PHP", "CodeIgniter 4", "MySQL"],
      //   color: "from-green-500 to-emerald-500",
      //   type: "web",
      //   link: "#",
      //   github: "#",
      // },
      // {
      //   title: "AI Micro Projects & Automation Tools",
      //   description:
      //     "A collection of small AI-powered experiments and productivity tools built through vibe coding. Focused on rapid iteration, API integration, and intelligent workflow automation.",
      //   image: "/ai-experiments.png",
      //   stack: ["JavaScript", "API Integration", "AI Tools"],
      //   color: "from-orange-500 to-amber-500",
      //   type: "web",
      //   link: "#",
      //   github: "#",
      // },
    ],
  },

  // Contact Section
  contact: {
    label: "Get in Touch",
    title: "Let's build something intelligent.",
    description:
      "I'm open to collaboration in web development, AI experimentation, and building digital products that solve real problems.",
    email: "arfidapinata2702@gmail.com",
    socials: [
      { platform: "LinkedIn", url: "https://linkedin.com/in/yourprofile" },
      { platform: "GitHub", url: "https://github.com/yourusername" },
    ],
  },

  // Footer
  footer: {
    copyright: `© ${new Date().getFullYear()} Arfida Nuha Pinata. All rights reserved.`,
    builtWith: "Built with Next.js, Tailwind CSS, and late-night curiosity ☕",
  },
};