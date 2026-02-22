export const portfolioData = {
  // Personal Information
  personal: {
    name: "Arfida",
    fullName: "Arfida Nuha Pinata",
    title: "Web Developer & Sharia Business Enthusiast",
    tagline: "Building impactful digital solutions with purpose",
    email: "arfidapinata2702@gmail.com",
    location: "Indonesia",
  },

  // Hero Section
  hero: {
    badge: "Open for Collaboration & Research",
    title: "Building meaningful digital solutions.",
    highlightWord: "meaningful",
    description:
      "I'm Arfida Nuha Pinata, a web developer with a strong interest in Islamic finance, business development, and digital systems. I build functional, clean, and purposeful web applications.",
    primaryCTA: {
      text: "Explore Projects",
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
    { name: "Research", href: "#research" },
    { name: "Contact", href: "#contact" },
  ],

  // About Section
  about: {
    label: "Background",
    title: "Technology, business, and Islamic finance in one journey.",
    paragraphs: [
      "I am a college student focusing on Sharia Business and financial analysis, while actively developing web-based systems using PHP, MySQL, and modern frontend tools. My projects often revolve around donation systems, waqf management, and small business digitalization.",
      "I believe technology should bring real impact — whether through building a waqf land acquisition system, developing a donation platform, or conducting financial ratio analysis for research and journal publication.",
    ],
    stats: [
      { value: "10+", label: "Web Projects Built" },
      { value: "3+", label: "Years Learning & Building" },
      { value: "1", label: "Regional Business Plan Champion" },
    ],
  },

  // Skills Section
  skills: {
    title: "Technical & Academic Skills",
    description:
      "A combination of web development, database management, and financial analysis.",
    categories: [
      {
        name: "Frontend",
        icon: "Layout",
        color: "from-blue-500 to-indigo-600",
        items: ["HTML", "CSS", "JavaScript", "Tailwind CSS"],
      },
      {
        name: "Backend",
        icon: "Server",
        color: "from-green-500 to-emerald-600",
        items: ["PHP", "CodeIgniter 4", "MySQL", "REST API"],
      },
      {
        name: "Tools & Deployment",
        icon: "Terminal",
        color: "from-orange-400 to-red-500",
        items: ["Git & GitHub", "Vercel", "Supabase", "VS Code"],
      },
      {
        name: "Business & Finance",
        icon: "BarChart",
        color: "from-purple-500 to-pink-600",
        items: [
          "Financial Ratio Analysis",
          "Islamic Finance",
          "Business Plan Development",
          "Academic Research Writing",
        ],
      },
    ],
  },

  // Projects Section
 projects: {
  title: "Selected Projects",
  description:
    "A collection of systems and applications that blend technology, education, finance, and real-world impact.",
  items: [
    {
      title: "Lecturely – AI Study Companion",
      description:
        "A web-based academic productivity platform that helps students organize lecture notes, summarize materials, and manage study tasks efficiently. Designed to improve structured learning with AI-assisted features.",
      image: "/images/lecturely.jpg",
      stack: ["Next.js", "Tailwind CSS", "Supabase", "AI Integration"],
      color: "from-indigo-500 to-blue-500",
      link: "#",
      github: "#",
    },
    {
      title: "Moodly – Emotion & Productivity Tracker",
      description:
        "A mood tracking application that visualizes emotional patterns and connects them with daily productivity insights. Focused on clean UI, color psychology, and interactive dashboards.",
      image: "/images/moodly.jpg",
      stack: ["React", "Tailwind CSS", "Chart.js", "Local Storage / API"],
      color: "from-pink-500 to-purple-500",
      link: "#",
      github: "#",
    },
    {
      title: "Waqf & Donation Management System",
      description:
        "A web-based system for managing waqf land acquisition and donation tracking, including donor database management, payment instructions, and real-time status updates.",
      image: "/images/waqf-project.jpg",
      stack: ["HTML", "PHP", "CodeIgniter 4", "MySQL"],
      color: "from-green-500 to-emerald-500",
      link: "#",
      github: "#",
    },
    // {
    //   title: "Financial Ratio Analysis Dashboard",
    //   description:
    //     "An interactive financial analysis dashboard that calculates liquidity, profitability, and solvency ratios based on company financial statements, designed to support academic research and financial decision-making.",
    //   image: "/images/financial-dashboard.jpg",
    //   stack: ["Next.js", "JavaScript", "Chart Visualization", "Financial Analysis"],
    //   color: "from-amber-500 to-orange-500",
    //   link: "#",
    //   github: "#",
    // },
  ],
},

  // Research Section
  research: {
    title: "Research & Academic Focus",
    description:
      "My academic interests include Islamic contracts (Istishna), financial performance analysis, and Sharia-based economic development. I aim to integrate technology with Islamic economic systems.",
  },

  // Contact Section
  contact: {
    label: "Get in touch",
    title: "Let's build something impactful.",
    description:
      "I am open to collaboration in web development, Islamic finance research, and digital business projects.",
    email: "arfidapinata2702@gmail.com",
    socials: [
      { platform: "Linkedin", url: "https://linkedin.com/in/yourprofile" },
      { platform: "Github", url: "https://github.com/yourusername" },
    ],
  },

  // Footer
  footer: {
    copyright: `© ${new Date().getFullYear()} Arfida Nuha Pinata. All rights reserved.`,
    builtWith: "Built with Next.js & Tailwind CSS",
  },
};