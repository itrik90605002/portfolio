/**
 * EDIT THIS FILE ONLY.
 * All text and links on the site come from here.
 * Set a link to "" to hide it.
 */

export type LinkItem = { label: string; href: string };

const github = "https://github.com/itrik90605002";

export const profile = {
  name: "Kirti Purohit",
  role: "AI & Java Backend Developer",
  tagline: "B.Tech AI & ML student building backend services in Java, with hands-on experience in AI apps using Python.",
  availability: "Open to full-time roles · 2027",
  location: "Ahmedabad, India",
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
    { value: "6", label: "Projects" },
    { value: "CEH", label: "Certified" },
  ],

  about: [
    "I'm a B.Tech student in AI & ML at JIET Jodhpur, graduating in 2027 with a CGPA of 9.60. I'm aiming for AI and Java backend roles, with Core Java as my main language.",
    "My base is strong CS fundamentals: OOP, data structures and algorithms, DBMS, operating systems and computer networks. I've built backends with Spring Boot, FastAPI and Flask, working with MySQL, SQLite and ChromaDB.",
    "I also build AI applications in Python: RAG assistants, multi-agent chatbots, semantic search and OCR tools. I'm a Certified Ethical Hacker, so I keep security in mind when I build.",
  ],

  experience: [
    {
      period: "May 2026 — Present",
      role: "AI/ML Engineer Intern",
      org: "DreamTeam Technologies Pvt. Ltd.",
      href: "",
      place: "",
      summary:
        "Building AI-powered web applications, intelligent assistants, search systems and knowledge management platforms.",
      points: [
        "Backend services with Python, FastAPI, SQL and third-party APIs.",
        "Work with databases, version control and deployment workflows.",
      ],
      tech: ["Python", "FastAPI", "SQL", "REST APIs", "Git"],
      links: [{ label: "Certificate", href: "" }],
    },
    {
      period: "Apr — Jun 2025",
      role: "Web Developer Intern",
      org: "Anand Rathi Pvt. Ltd.",
      href: "",
      place: "",
      summary: "Developed responsive web applications with backend logic in Core Java and a MySQL database.",
      points: [
        "Wrote backend logic and managed the database layer.",
        "Built user-focused interfaces with HTML5 and CSS3.",
      ],
      tech: ["Core Java", "MySQL", "HTML5", "CSS3"],
      links: [{ label: "Certificate", href: "" }],
    },
  ],

  // Optional screenshots: put images in /public/projects/ and set image: "/projects/name.png"
  // The project marked featured gets the large card.
  projects: [
    {
      title: "Shoe.ai",
      featured: true,
      image: "/projects/shoe-ai.svg",
      summary:
        "An AI shopping assistant for a premium shoe store. A Spring Boot backend with Groq-based agentic workflows handles smart product search, recommendations and the shopping conversation.",
      highlights: ["Spring Boot backend", "Agentic AI workflows", "Smart search & recommendations"],
      tech: ["Java", "Spring Boot", "Groq API", "AI Agents"],
      links: [
        { label: "Code", href: `${github}/Branded_Shoes.ai` },
        { label: "Live", href: "" },
      ],
    },
    {
      title: "Lumina Academia AI",
      image: "",
      summary: "A secure college knowledge assistant using RAG, with facial authentication, a database and intelligent search.",
      highlights: [],
      tech: ["RAG", "Face Auth", "Database"],
      links: [
        { label: "Code", href: `${github}/Lumina_Academia_AI` },
        { label: "Live", href: "" },
      ],
    },
    {
      title: "CodeNexsus.ai",
      image: "",
      summary: "A full-stack multimodal, multi-agent chatbot that handles text, voice, documents, images and media.",
      highlights: [],
      tech: ["Flask", "SQL", "Gemini / OpenAI", "OCR"],
      links: [
        { label: "Code", href: `${github}/CodeNexsus.ai` },
        { label: "Live", href: "" },
      ],
    },
    {
      title: "Smart Search System",
      image: "",
      summary: "Semantic search across documents of many formats, with OCR to read scanned files.",
      highlights: [],
      tech: ["React", "Flask", "ChromaDB", "OCR"],
      links: [{ label: "Code", href: "" }],
    },
    {
      title: "AI Resume Parser",
      image: "",
      summary: "Reads résumés with OCR and matches them against a job description to help recruiters shortlist.",
      highlights: [],
      tech: ["Python", "OCR", "NLP"],
      links: [{ label: "Code", href: "" }],
    },
    {
      title: "EMOVOX",
      image: "",
      summary: "A voice assistant that detects the user's sentiment using NLP.",
      highlights: [],
      tech: ["Python", "NLP", "Speech"],
      links: [{ label: "Code", href: "" }],
    },
  ],
  allProjects: `${github}?tab=repositories`,

  // Shown as the highlighted strip at the top of Skills
  coreStack: [
    { name: "Core Java", note: "Main language" },
    { name: "Spring Boot", note: "Backend framework" },
    { name: "SQL · MySQL", note: "Databases" },
    { name: "Python", note: "AI & scripting" },
  ],

  // level: Strong | Comfortable | Familiar
  skills: [
    { area: "Languages", level: "Strong", items: ["Core Java", "Python", "C", "SQL"] },
    { area: "Core CS", level: "Strong", items: ["OOP", "Data Structures & Algorithms", "DBMS", "Operating Systems", "Computer Networks"] },
    { area: "Backend & Web", level: "Comfortable", items: ["Spring Boot", "FastAPI", "Flask", "API Integration", "HTML5", "CSS3", "JavaScript", "Streamlit"] },
    { area: "Databases", level: "Comfortable", items: ["MySQL", "SQLite", "ChromaDB"] },
    { area: "AI & Data", level: "Comfortable", items: ["NLP", "RAG", "CrewAI", "Prompt Engineering", "NumPy", "Pandas", "Matplotlib"] },
    { area: "Tools & Security", level: "Familiar", items: ["Git", "GitHub", "Linux", "Ethical Hacking (CEH)"] },
  ],

  education: [
    {
      period: "2023 — 2027",
      title: "B.Tech, Artificial Intelligence & Machine Learning",
      place: "JIET, Jodhpur",
      note: "CGPA 9.60 (till Sem VI)",
      courses: ["OOP", "DSA", "DBMS", "Operating Systems", "Computer Networks"],
    },
    { period: "", title: "Class XII (CBSE)", place: "", note: "75.6%", courses: [] },
    { period: "", title: "Class X (CBSE)", place: "", note: "81%", courses: [] },
  ],

  certifications: [
    { title: "Certified Ethical Hacker (CEH)", issuer: "EC-Council", href: "" },
    { title: "Python Programming", issuer: "Infosys Springboard", href: "" },
    { title: "C Programming", issuer: "Infosys Springboard", href: "" },
    { title: "Introduction to Prompt Engineering", issuer: "", href: "" },
  ],

  achievements: [
    { title: "2nd Runner-Up — Hack-Ito 3.0", detail: "Hackathon", href: "" },
    { title: "AI & Software Development Workshops", detail: "Took part in several workshops", href: "" },
  ],
};
