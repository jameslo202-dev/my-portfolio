import type { Experience } from "@/types";

export const experiences: Experience[] = [
  {
    id: "1",
    role: "Senior Full Stack Developer",
    company: "Freelance / Contract",
    period: "2022 – Present",
    location: "Remote",
    responsibilities: [
      "Developed and maintained full stack web applications for various clients using Next.js, React, and Node.js.",
      "Integrated OpenAI APIs to deliver AI-powered features within client products.",
      "Designed and optimized PostgreSQL and MySQL database schemas for high-traffic applications.",
      "Deployed cloud-native applications on AWS with Docker and CI/CD pipelines.",
      "Collaborated with designers and product managers in Agile sprints to ship features on time.",
    ],
    technologies: ["Next.js", "React", "Node.js", "PostgreSQL", "AWS", "OpenAI API", "Docker"],
  },
  {
    id: "2",
    role: "Full Stack Developer",
    company: "Tech Company",
    period: "2019 – 2022",
    location: "Hong Kong",
    responsibilities: [
      "Built scalable RESTful APIs with Python FastAPI and Django serving thousands of concurrent users.",
      "Developed responsive frontend interfaces with Vue.js and Angular.",
      "Optimized slow SQL queries and introduced Redis caching, reducing API response times by 40%.",
      "Participated in code reviews and mentored junior developers.",
      "Maintained CI/CD pipelines and deployment automation on AWS.",
    ],
    technologies: ["Python", "FastAPI", "Django", "Vue.js", "Angular", "MySQL", "Redis", "AWS"],
  },
  {
    id: "3",
    role: "Web Developer",
    company: "Digital Agency",
    period: "2016 – 2019",
    location: "Hong Kong",
    responsibilities: [
      "Developed client websites and e-commerce platforms using React and Node.js.",
      "Collaborated with design teams to translate Figma mockups into pixel-perfect UIs.",
      "Integrated third-party APIs including payment gateways and CRM systems.",
      "Managed MySQL databases and wrote complex queries for reporting dashboards.",
      "Maintained and improved legacy codebases, reducing technical debt.",
    ],
    technologies: ["React", "Node.js", "JavaScript", "MySQL", "HTML5", "CSS3", "Figma"],
  },
];
