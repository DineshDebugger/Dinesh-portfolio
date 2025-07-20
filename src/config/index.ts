import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Dinesh Babu — Full-stack Developer",
  author: "Dinesh Babu",
  description:
    "Software Engineer based in San Francisco, USA. I specialize in UI design, web and mobile application development and maintenance.",
  lang: "en",
  siteLogo: "/pic2.jpg",
  navLinks: [
    { text: "Experience", href: "#experience" },
    { text: "Projects", href: "#projects" },
    { text: "About", href: "#about" },
  ],
  socialLinks: [
    // { text: "Twitter", href: "https://github.com/immois/astro-zen" },
    {
      text: "LinkedIn",
      href: "https://www.linkedin.com/in/dinesh-babu-628b97235/",
    },
    { text: "Github", href: "https://github.com/DineshDebugger" },
    // { text: "Youtube", href: "https://github.com/immois/astro-zen" },
    // { text: "Dribbble", href: "https://github.com/immois/astro-zen" },
  ],
  socialImage: "/zen-og.png",
  canonicalURL: "https://astro-zen.vercel.app",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Dinesh Babu",
    specialty: "Full-stack Developer",
    // summary: "I create and design responsive websites and web applications",
    summary: "responsive websites and web applications",
    email: "dineshrvd1403@email.com",
  },
  experience: [
    {
      company: "ADAMSBRIDGE GLOBAL",
      position: "Software Engineer",
      startDate: "March 2024",
      endDate: "present",
      summary: [
        "Integrated SharePoint and AWS S3 file storage solutions into a centralized Node.js service, enabling seamless and secure file upload functionality across all modules.",
        "Designed and implemented a reusable, high-performance data table component from scratch, featuring advanced pagination, sorting, and filtering capabilities, optimized for large datasets.",
        "Hands-on experience with Redis, utilizing it for efficient caching and session management, contributing to improved application performance and scalability.",
        "Developed and customized end-to-end Form.io components, leveraging its full capabilities to build dynamic and configurable form-based applications across multiple projects",
      ],
    },
    {
      company: "AOSTA INDIA PRIVATE LIMITED",
      position: "Software Engineer",
      startDate: "Jul 2022",
      endDate: "Mar 2024",
      summary: [
        "Contributed to successful execution of multiple projects by developing and maintaining robust and scalable applications using React, NEXT.js, Angular and .NET.",
        "Developed Back-end systems with enhanced efficiency and security by leveraging Express and Node.js",
        "Used React and Angular, Implemented RESTFUL API's, and Integrated Authentication and Authorization mechanisms to create Dynamic and Interactive user interfaces.",
      ],
    },
  ],
  projects: [
    {
      name: "Spotifu Music",
      summary: "A music streaming app that emulates Spotify's core features.",
      linkPreview: "/",
      linkSource: "https://github.com/immois/astro-zen",
      image: "/spotifu.png",
    },
    {
      name: "Shopp App",
      summary: "An e-commerce platform that replicates Shopify's key features.",
      linkPreview: "/",
      linkSource: "https://github.com/immois/astro-zen",
      image: "/shopify-clon.png",
    },
    {
      name: "ClonTagram",
      summary: "A social network that replicates the features of Instagram",
      linkPreview: "/",
      linkSource: "https://github.com/immois/astro-zen",
      image: "/clone-ig.png",
    },
  ],
  about: {
    description: `
  👋 Hi, I’m <strong>Dinesh Babu</strong> — a passionate <strong>Full-Stack Developer</strong> from India.<br><br>

  I specialize in building modern, responsive, and scalable web applications. Whether it's a sleek front-end interface or a complex backend service, I enjoy creating impactful digital solutions that solve real-world problems.<br><br>

  💻 <strong>Tech Stack</strong><br>
  <strong>Frontend:</strong> React · Angular · Next.js · Nuxt.js<br>
  <strong>Styling:</strong> HTML5 · CSS3 · Tailwind CSS · Bootstrap<br>
  <strong>Backend:</strong> Node.js · Express · ASP.NET<br>
  <strong>Tools:</strong> Git · GitHub · Jenkins · Figma · VS Code<br>
  <strong>Integrations:</strong> AWS S3 · Redis · SharePoint · Form.io<br><br>

  🤝 <strong>Let’s Collaborate!</strong><br>
  I’m always excited to connect with like-minded developers, work on exciting projects, or explore new tech ideas together.
  `,
    image: "/pic.jpg",
  },
};

// #5755ff
