export const portfolioData = {
  // Personal Info
  personal: {
    name: "Arfida",
    role: "Web Developer & Sharia Business Enthusiast",
    tagline: "Open for Collaboration & Research",
    headline: "Building meaningful digital solutions.",
    description: "I'm Arfida Nuha Pinata, a web developer with a strong interest in Islamic finance, business development, and digital systems. I build functional, clean, and purposeful web applications.",
    email: "arfidapinata2702@gmail.com",
    location: "Indonesia",
  },

  // Social Media Links
  socials: {
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourprofile",
    twitter: "https://twitter.com/yourhandle",
    instagram: "https://instagram.com/yourhandle",
  },

  // Navigation Items
  navigation: [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Research", href: "#research" },
    { name: "Contact", href: "#contact" },
  ],

  // About Section
  about: {
    title: "About Me",
    description: [
      "I am a college student focusing on Sharia Business and financial analysis, while actively developing web-based systems using PHP, MySQL, and modern frontend tools. My projects often revolve around donation systems, waqf management, and small business digitalization.",
      "I believe technology should bring real impact — whether through building a waqf land acquisition system, developing a donation platform, or conducting financial ratio analysis for research and journal publication.",
    ],
    stats: [
      { label: "Web Projects Built", value: "10+" },
      { label: "Years Learning & Building", value: "3+" },
      { label: "Regional Business Plan Champion", value: "1" },
    ],
  },

  // Skills Section
  skills: {
    title: "Technical & Academic Skills",
    subtitle: "A combination of web development, database management, and financial analysis.",
    categories: [
      {
        name: "Frontend",
        items: [
          { name: "HTML", level: 90 },
          { name: "CSS", level: 85 },
          { name: "JavaScript", level: 80 },
          { name: "Tailwind CSS", level: 85 },
        ],
      },
      {
        name: "Backend",
        items: [
          { name: "PHP", level: 85 },
          { name: "CodeIgniter 4", level: 80 },
          { name: "MySQL", level: 85 },
          { name: "REST API", level: 75 },
        ],
      },
      {
        name: "Tools & Deployment",
        items: [
          { name: "Git & GitHub", level: 85 },
          { name: "Vercel", level: 70 },
          { name: "Supabase", level: 65 },
          { name: "VS Code", level: 90 },
        ],
      },
      {
        name: "Business & Finance",
        items: [
          { name: "Financial Ratio Analysis", level: 80 },
          { name: "Islamic Finance", level: 75 },
          { name: "Business Plan Development", level: 85 },
          { name: "Academic Research Writing", level: 80 },
        ],
      },
    ],
  },

  // Projects Section
  projects: {
    title: "Selected Projects",
    subtitle: "Projects that combine technology, business, and real-world impact.",
    items: [
      {
        id: 1,
        title: "Waqf & Donation Management System",
        description: "A web-based system for managing waqf land acquisition and donations, including payment instructions, donor database, and status tracking.",
        image: "/images/waqf-project.jpg",
        tags: ["HTML", "PHP", "CodeIgniter 4", "MySQL"],
        demoUrl: "#",
        githubUrl: "#",
        featured: true,
      },
      {
        id: 2,
        title: "Pesantren-Based Business Website",
        description: "A website built to promote and manage pesantren-based economic products, integrating branding, catalog display, and basic transaction features.",
        image: "/images/pesantren-business.jpg",
        tags: ["HTML", "CSS", "JavaScript"],
        demoUrl: "#",
        githubUrl: "#",
        featured: true,
      },
      {
        id: 3,
        title: "Financial Performance Analysis Research",
        description: "Academic research analyzing liquidity, profitability, and solvency ratios of public companies using annual financial reports.",
        image: "/images/financial-research.jpg",
        tags: ["Financial Analysis", "Excel", "Journal Writing"],
        demoUrl: "#",
        githubUrl: "#",
        featured: false,
      },
    ],
  },

  // Contact Section
  contact: {
    title: "Let's Build Something Impactful",
    subtitle: "I am open to collaboration in web development, Islamic finance research, and digital business projects.",
    description: "Have a project in mind? Let's discuss how I can help bring meaningful impact through technology.",
    email: "arfidapinata2702@gmail.com",
    phone: "", // Optional
  },

  // Footer
  footer: {
    copyright: `© ${new Date().getFullYear()} Arfida Nuha Pinata. All rights reserved.`,
    builtWith: "Built with Next.js & Tailwind CSS",
  },
};

// Type definitions untuk type safety
export type PortfolioData = typeof portfolioData;
export type Project = typeof portfolioData.projects.items[0];
export type Skill = typeof portfolioData.skills.categories[0];
