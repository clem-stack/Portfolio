// ─────────────────────────────────────────────────────────────────────────────
//  data.js  –  Edit this file to personalise your portfolio
// ─────────────────────────────────────────────────────────────────────────────

import trustlinkPreview from "./assets/project-previews/trustlink-preview.svg";
import bellyDelightPreview from "./assets/project-previews/belly.png";
import kargoPreview from "./assets/project-previews/kargo.png";
import LanaraPreview from "./assets/project-previews/lanara.png";
import PortfolioPreview from "./assets/project-previews/portfolio.png";
import Resume from "./assets/project-previews/resume.pdf";

export const OWNER = {
  name: "Clement Ukhureigbe",
  tagline: "A software engineer who ",
  typedPhrases: [
    "builds performant web apps.",
    "loves clean, elegant code.",
    "deploys to the cloud.",
    "crafts delightful UX.",
  ],
  bio1:
    "I'm a full-stack software engineer with 5+ years of experience turning complex problems into clean, maintainable products. I care deeply about performance, accessibility, and developer experience.",
  bio2:
    "From pixel-perfect React UIs to robust Node.js APIs and cloud infrastructure, I own the entire stack — and I bring the same attention to detail to every layer.",
  available: true,
  cvUrl: Resume,
};

export const SKILLS = [
  {
    name: "React",
    logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    color: "#61DAFB",
  },
  {
    name: "Tailwind CSS",
    logoUrl: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
    color: "#38BDF8",
  },
  {
    name: "Node.js",
    logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    color: "#68A063",
  },
  {
    name: "WordPress",
    logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg",
    color: "#21759B",
  },
  {
    name: "Framer Motion",
    logoUrl: "https://www.vectorlogo.zone/logos/framer/framer-icon.svg",
    color: "#BB4BFF",
  },
  {
    name: "MongoDB",
    logoUrl: "https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg",
    color: "#FF9900",
  },
  {
    name: "MySQL",
    logoUrl: "https://www.vectorlogo.zone/logos/mysql/mysql-official.svg",
    color: "#FF9900",
  },
];

export const PROJECTS = [
  {
    id: 1,
    title: "Trustlink Online Banking",
    description:
      "A full-stack online banking application built with React, Node.js, and MongoDB. Features include user authentication, account management, and real-time transaction updates.",
    tags: ["React", "Node.js", "MongoDb", "Tailwind CSS"],
    githubUrl: "https://github.com/clem-stack/Fullstack-BankingApp.git",       // ← replace with your real GitHub URL
    liveUrl: "https://trustlinkbk.com",    // ← replace with your live site URL
    previewImg: trustlinkPreview,
  },
  {
    id: 2,
    title: "BellyDelight Food Delivery",
    description:
      "A responsive food delivery website built with HTML, CSS, and JavaScript. It features a dynamic menu, shopping cart functionality, and a user-friendly interface for ordering food online.",
    tags: ["Javascrip", "Css"],
    githubUrl: "https://github.com/clem-stack/Burger-SIte.git",
    liveUrl: "https://foodiedelights.netlify.app/",
    previewImg: bellyDelightPreview,
  },
  {
    id: 3,
    title: "The Kargo Delivery",
    description:
      " A WordPress-based delivery service website with a custom MySQL database. It includes features such as order tracking, user registration, and a responsive design for mobile and desktop users.",
    tags: ["Wordpress", "MySQL"],
    githubUrl: "https://github.com",
    liveUrl: "https:/thekargodelivery.com",
    previewImg: kargoPreview,
  },
    {
    id: 4,
    title: "Lanara Makeup Website",
    description:
      " A modern and responsive makeup website built with React, Tailwind CSS, and Redux. It features a product catalog, shopping cart, and user authentication for a seamless online shopping experience.",
    tags: ["React", "Tailwind CSS", "Redux"],
    githubUrl: "https://github.com/clem-stack/MakeUp-Project.git",
    liveUrl: "https://make-up-project.vercel.app/",
    previewImg: LanaraPreview,
  }, {
    id: 5,
    title: "Portfolio Website",
    description:
      " A personal portfolio website built with React and Tailwind CSS. It showcases my projects, skills, and contact information, providing a professional online presence for potential clients and employers.",
    tags: ["React", "Tailwind CSS"],
    githubUrl: "https://github.com/clem-stack/MakeUp-Project.git",
    liveUrl: "https://oseborclement.netlify.app/",
    previewImg: PortfolioPreview,
  },
];

export const CONTACT_LINKS = [
  { label: "GitHub",      icon: "github",   href: "https://github.com/clem-stack" },
  { label: "LinkedIn",    icon: "linkedin", href: "https://linkedin.com/in/junior-osebor" },
  { label: "Twitter / X", icon: "twitter",  href: "https://twitter.com/that_clem" },
  { label: "Email",       icon: "email",    href: "mailto:osebsclem@gmail.com" },
];
