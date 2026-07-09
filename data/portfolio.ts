import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "1",
    title: "Ant Design System",
    description:
      "Contributed to a comprehensive enterprise-grade UI design system with AI-friendly components, flexible theming, and a modern React ecosystem. Integrated CI workflows and automated component documentation.",
    image: "/images/1.png",
    technologies: ["React", "TypeScript", "CSS-in-JS", "Storybook", "Jest"],
    githubUrl: "#",
    liveUrl: "#",
    featured: true,
  },
  {
    id: "2",
    title: "UIkit Theme Builder",
    description:
      "Built a visual theme and page builder for WordPress & Joomla using UIkit, enabling clients to construct layouts via drag-and-drop with live preview and full style control without writing code.",
    image: "/images/2.png",
    technologies: ["Vue.js", "UIkit", "PHP", "WordPress", "Joomla"],
    githubUrl: "#",
    liveUrl: "#",
    featured: true,
  },
  {
    id: "3",
    title: "Floating UI Library",
    description:
      "Developed a JavaScript library for precise positioning of floating elements including tooltips, popovers, and dropdowns with smart anchor collision avoidance and smooth interaction design.",
    image: "/images/3.png",
    technologies: ["TypeScript", "JavaScript", "CSS", "Rollup", "Vitest"],
    githubUrl: "#",
    liveUrl: "#",
    featured: true,
  },
  {
    id: "4",
    title: "AI-Powered SaaS Platform",
    description:
      "Full stack SaaS application integrating OpenAI GPT-4 for intelligent content generation, user authentication, subscription billing, and a real-time dashboard built with Next.js and FastAPI.",
    image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["Next.js", "FastAPI", "OpenAI API", "PostgreSQL", "Stripe"],
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    id: "5",
    title: "E-Commerce Platform",
    description:
      "Scalable multi-vendor e-commerce platform with real-time inventory management, dynamic product catalog, secure checkout, and an admin dashboard with analytics and order management.",
    image: "https://images.pexels.com/photos/5632398/pexels-photo-5632398.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["React", "Node.js", "MySQL", "Redis", "AWS", "Docker"],
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    id: "6",
    title: "Real-Time Analytics Dashboard",
    description:
      "Cloud-native analytics dashboard visualizing millions of events in real time with WebSocket streams, interactive charts, customizable widgets, and team collaboration features.",
    image: "https://images.pexels.com/photos/7947543/pexels-photo-7947543.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["Angular", "Python", "PostgreSQL", "WebSocket", "AWS Lambda"],
    githubUrl: "#",
    liveUrl: "#",
  },
];
