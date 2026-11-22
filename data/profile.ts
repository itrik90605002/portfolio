/**
 * EDIT THIS FILE ONLY.
 * All text and links on the site come from here.
 * Set a link to "" to hide it.
 */

export type LinkItem = { label: string; href: string };

const github = "https://github.com/itrik90605002";

export const profile = {
  name: "Kirti Purohit",
  role: "Backend Developer · AI/ML Graduate",
  tagline: "B.Tech AI & ML student building backend services with Spring Boot and FastAPI, and AI assistants powered by RAG and agentic workflows.",
  availability: "Open to full-time roles · 2027",
  location: "",
  email: "purohitkirti965@gmail.com",
  learning: "", // e.g. "Spring Boot in depth" — empty hides the line

  // Put your resume at /public/resume.pdf (or paste a Google Drive link)
  resume: "/resume.pdf",

  // icon: github | linkedin | leetcode | code | mail | link
  socials: [
    { label: "GitHub", href: github, icon: "github" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/kirti-purohit-334976352", icon: "linkedin" },
    { label: "NeetCode (DSA in Java)", href: `${github}/neetcode-submissions`, icon: "code" },
    { label: "LeetCode", href: "", icon: "leetcode" },
  ],

  stats: [
    { value: "9.60", label: "CGPA" },
    { value: "2", label: "Internships" },
    { value: "4", label: "Projects" },
    { value: "CEH", label: "Certified" },
  ],

  about: [
    "I'm a B.Tech student in Artificial Intelligence & Machine Learning at JIET Jodhpur (2023–2027), with a CGPA of 9.60 through Semester VI. I focus on Java and Python backends and the AI features built on top of them.",
    "I've built backends with Spring Boot, FastAPI and Flask on MySQL, PostgreSQL, SQLite and ChromaDB, and front ends with HTML5, CSS3, JavaScript and React + TypeScript. My foundation is OOP, DSA, DBMS, operating systems and computer networks.",
    "On the AI side I build RAG assistants, agentic workflows with Groq and CrewAI, and plain-English interfaces over business data. I'm currently an AI/ML Engineer Intern at DreamTeam Technologies, and I hold a Certified Ethical Hacking (CEH) certification.",
  ],

  experience: [
    {
      period: "May 2026 — Present",
      role: "AI/ML Engineer Intern",
      org: "DreamTeam Technologies Pvt. Ltd.",
      href: "",
      place: "",
      summary: "Building an AI-powered code enhancement web app using Python, FastAPI, SQL and APIs.",
      points: [],
      tech: ["Python", "FastAPI", "SQL", "APIs"],
      links: [{ label: "Certificate", href: "" }],
    },
    {
      period: "Apr — Jun 2025",
      role: "Web Developer Intern",
      org: "Anand Rathi Pvt. Ltd.",
      href: "",
      place: "",
      summary:
        "Developed responsive web applications with HTML5, CSS3, Core Java and MySQL, covering backend logic and database management.",
      points: [],
      tech: ["Core Java", "MySQL", "HTML5", "CSS3"],
      links: [{ label: "Certificate", href: "" }],
    },
  ],

  // The project marked featured gets the large card.
  projects: [
    {
      title: "StockPilot",
      featured: true,
      summary:
        "An AI warehouse inventory system. A multi-warehouse platform for stock tracking, supplier purchasing and inter-warehouse transfers, with a plain-English assistant on top.",
      highlights: [
        "Spring Boot + PostgreSQL backend, React + TypeScript front end",
        "Asks like \u201cWhich items will run out next week?\u201d via Gemini/OpenAI",
        "Role-based access per warehouse",
      ],
      tech: ["Spring Boot", "PostgreSQL", "React", "TypeScript", "Gemini / OpenAI"],
      links: [
        { label: "Code", href: `${github}/stock-mind` },
        { label: "Live", href: "https://stock-mind-xi.vercel.app" },
      ],
    },
    {
      title: "Shoe.ai",
      summary:
        "An AI shoe store assistant built with Spring Boot and Groq-based agentic workflows, delivering smart product search, recommendations and seamless shopping interactions.",
      highlights: [],
      tech: ["Spring Boot", "Groq", "Agentic AI"],
      links: [
        { label: "Code", href: `${github}/Branded_Shoes.ai` },
        { label: "Live", href: "" },
      ],
    },
    {
      title: "Lumina Academia AI",
      summary: "A secure, RAG-based college knowledge assistant with facial authentication, database integration and intelligent search.",
      highlights: [],
      tech: ["RAG", "Face Auth", "Database"],
      links: [
        { label: "Code", href: `${github}/Lumina_Academia_AI` },
        { label: "Live", href: "" },
      ],
    },
    {
      title: "EMOVOX",
      summary: "A sentiment-aware voice assistant that detects the user's sentiment using NLP techniques.",
      highlights: [],
      tech: ["NLP", "Voice Assistant"],
      links: [{ label: "Code", href: "" }],
    },
  ],
  allProjects: `${github}?tab=repositories`,

  // Shown as the highlighted strip at the top of Skills
  coreStack: [
    { name: "Core Java · Spring Boot", note: "Backend" },
    { name: "Python · FastAPI", note: "AI services" },
    { name: "SQL", note: "MySQL · SQLite" },
    { name: "RAG · CrewAI", note: "AI applications" },
  ],

  // level: Strong | Comfortable | Familiar
  skills: [
    { area: "Languages", level: "Strong", items: ["Core Java", "Python", "C", "SQL"] },
    { area: "Core CS", level: "Strong", items: ["OOP", "Data Structures & Algorithms", "DBMS", "Operating Systems", "Computer Networks"] },
    { area: "Backend & Web", level: "Comfortable", items: ["Spring Boot", "FastAPI", "Flask", "Streamlit", "HTML5", "CSS3", "JavaScript"] },
    { area: "Databases", level: "Comfortable", items: ["MySQL", "SQLite", "ChromaDB"] },
    { area: "AI & Data", level: "Comfortable", items: ["NLP", "RAG", "CrewAI", "Prompt Engineering", "NumPy", "Pandas", "Matplotlib"] },
    { area: "Tools & Security", level: "Familiar", items: ["Git", "GitHub", "Linux", "Ethical Hacking (CEH)"] },
  ],

  education: [
    {
      period: "2023 — 2027",
      title: "B.Tech, Artificial Intelligence & Machine Learning",
      place: "Jodhpur Institute of Engineering & Technology (JIET)",
      note: "CGPA 9.60 (till Sem VI)",
      courses: ["OOP", "DSA", "DBMS", "Operating Systems", "Computer Networks"],
    },
  ],

  certifications: [
    { title: "Certified Ethical Hacking (CEH)", issuer: "", href: "" },
    { title: "Python Programming", issuer: "Infosys Springboard", href: "" },
    { title: "C Programming", issuer: "Infosys Springboard", href: "" },
    { title: "Introduction to Prompt Engineering", issuer: "", href: "" },
  ],

  achievements: [
    { title: "2nd Runner-Up — Hack-Ito 3.0", detail: "", href: "" },
    { title: "AI & Software Development Workshops", detail: "", href: "" },
  ],
};
