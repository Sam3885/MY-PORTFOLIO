import { Project, Training, Certificate, Education, Achievement } from './types';

export const PERSONAL_INFO = {
  name: "Saksham Thakur",
  email: "saksham3885@gmail.com",
  mobile: "8091762292",
  linkedin: "https://linkedin.com/in/saksham-thakur-96a69a1b2/",
  github: "https://github.com/Sam3885",
};

export const SKILLS = {
  languages: ["Java", "C++", "Python", "JavaScript"],
  web: ["Node.js", "Express.js", "HTML", "CSS", "React"],
  core: ["DSA", "OOP", "Exception Handling", "File I/O"],
  databases: ["MySQL", "Git", "Spring Boot", "Power BI"],
  soft: ["Problem-Solving", "Team Player", "Leadership", "Adaptability"],
};

export const PROJECTS: Project[] = [
  {
    title: "Enterprise Smart Cafeteria Management Platform",
    period: "Nov – Dec 2026",
    description: [
      "Built a scalable full-stack cafeteria management platform supporting multi-role enterprise workflows.",
      "Implemented JWT-based authentication and role-based access control for Admin and Employee users.",
      "Built responsive React UI with reusable component architecture and optimized state management.",
      "Developed RESTful APIs using Spring Boot with validation, DTO pattern, and structured exception handling.",
      "Designed normalized PostgreSQL schema with foreign key constraints and optimized queries."
    ],
    techStack: ["React.js", "Spring Boot", "PostgreSQL", "REST APIs", "JWT", "Context API", "Git"],
    link: PERSONAL_INFO.github,
  },
  {
    title: "AI Interview Preparation Platform",
    period: "Feb – Mar 2026",
    description: [
      "Developed an AI-powered full-stack platform that analyzes user resumes against job descriptions to identify skill gaps.",
      "Integrated Google Gemini AI to generate technical/behavioral interview questions and personalized preparation plans.",
      "Implemented secure authentication using JWT and bcrypt with token blacklisting.",
      "Built a modular React frontend with Context API and Axios with Node.js/Express and MongoDB."
    ],
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Gemini AI", "JWT", "Axios", "REST APIs"],
    link: PERSONAL_INFO.github,
  },
];

export const TRAINING: Training[] = [
  {
    title: "Cypher Schools",
    period: "June - July 2025",
    description: [
      "Solved 150+ DSA problems using Java covering arrays, strings, recursion, trees, and graphs.",
      "Strengthened problem-solving skills through time and space complexity analysis.",
      "Implemented core data structures from scratch."
    ],
  },
  {
    title: "Infosys Springboard Virtual Internship 6.0",
    period: "Dec 2025 – Jan 2026",
    description: [
      "Designed a backend system to process and analyze car lease/loan contracts using LLM-based extraction.",
      "Built RESTful APIs to upload and process contract documents.",
      "Structured contract metadata storage using MongoDB schema design.",
      "Integrated third-party APIs (VIN lookup – NHTSA) for vehicle validation."
    ],
  },
];

export const CERTIFICATES: Certificate[] = [
  {
    title: "Responsive Web Design Certification",
    issuer: "freeCodeCamp",
    date: "May 2025",
    link: "https://www.freecodecamp.org",
  },
  {
    title: "Oracle Cloud Infrastructure (OCI) 2025 Certified AI Foundations Associate",
    issuer: "Oracle",
    date: "Oct 2025",
    link: "https://education.oracle.com/oracle-cloud-infrastructure-oci-2025-certified-ai-foundations-associate/pTrack_OCI25AIFAC",
  },
  {
    title: "Infosys Springboard Virtual Internship 6.0",
    issuer: "Infosys",
    date: "Aug 2025",
    link: "https://infyspringboard.onwingspan.com/",
  },
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    title: "Secured Global Rank 5903rd",
    date: "Dec 2025",
    description: "Among 21k+ participants in Leetcode Biweekly Contest 92",
  },
  {
    title: "Selected for Infosys Springboard Virtual Internship 6.0",
    date: "Jan 2026",
    description: "Developed Car Lease/Loan Contract Review & Negotiation AI Assistant.",
  },
];

export const EDUCATION: Education[] = [
  {
    institution: "Lovely Professional University",
    location: "Phagwara, Punjab, India",
    degree: "Bachelor of Technology - Computer Science and Engineering",
    period: "Aug 2023 - Present",
    score: "CGPA: 7.48",
  },
  {
    institution: "Jawahar Navodaya Vidyalaya, Pandoh Mandi",
    location: "Mandi, Himachal Pradesh",
    degree: "Intermediate",
    period: "April 2021 - March 2022",
    score: "Percentage: 82",
  },
  {
    institution: "Jawahar Navodaya Vidyalaya, Pandoh Mandi",
    location: "Mandi, Himachal Pradesh",
    degree: "Matriculation",
    period: "April 2019 - March 2020",
    score: "Percentage: 89",
  },
];
