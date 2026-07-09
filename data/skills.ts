import type { SkillCategory } from "@/types";

export const skillCategories: SkillCategory[] = [
  {
    name: "Frontend",
    skills: ["React", "Next.js", "Vue.js", "Angular", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Redux"],
  },
  {
    name: "Backend",
    skills: ["Node.js", "Python", "FastAPI", "Django", "REST APIs", "GraphQL", "Express.js"],
  },
  {
    name: "Database",
    skills: ["MySQL", "PostgreSQL", "SQL", "MongoDB", "Redis"],
  },
  {
    name: "Cloud & DevOps",
    skills: ["AWS", "Docker", "CI/CD", "Linux", "Nginx", "Vercel"],
  },
  {
    name: "AI & Integrations",
    skills: ["OpenAI API", "LangChain", "AI Solutions", "Webhook Integration"],
  },
  {
    name: "Tools & Workflow",
    skills: ["Git", "GitHub", "Agile", "Scrum", "Jira", "Figma", "VS Code"],
  },
];
