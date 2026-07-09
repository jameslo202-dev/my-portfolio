"use client";

import { motion } from "framer-motion";
import { Code2, Cloud, Database, Sparkles, Zap, Users } from "lucide-react";
import { profile } from "@/data/profile";
import { SectionHeading } from "@/components/section-heading";

const stats = [
  { value: `${profile.yearsOfExperience}+`, label: "Years Experience" },
  { value: "30+", label: "Projects Delivered" },
  { value: "10+", label: "Technologies" },
  { value: "100%", label: "Commitment" },
];

const highlights = [
  {
    icon: Code2,
    title: "Full Stack Expertise",
    description:
      "End-to-end development from responsive frontends with React, Next.js, Vue, and Angular to robust backends with Node.js, Python FastAPI, and Django.",
  },
  {
    icon: Database,
    title: "Database Optimization",
    description:
      "Designed and optimized MySQL and PostgreSQL schemas for high-traffic apps, leveraging Redis caching to cut API response times by 40%.",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description:
      "Deployed cloud-native applications on AWS with Docker and CI/CD pipelines, ensuring reliable, scalable, and automated delivery.",
  },
  {
    icon: Sparkles,
    title: "AI Integration",
    description:
      "Integrated OpenAI APIs and LangChain to deliver AI-powered features that add real product value and intelligent automation.",
  },
  {
    icon: Zap,
    title: "Performance First",
    description:
      "Optimized slow queries, introduced caching layers, and built fast-loading interfaces with a relentless focus on user experience.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description:
      "Worked in Agile environments and good, mentored junior developers, and partnered with designers and product managers to ship quality software.",
  },
];

export function About() {
  return (
    <section id="about" className="relative px-4 py-16 sm:px-6 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="About Me"
          title="Crafting software that scales"
          description={profile.summary}
        />

        {/* Stats */}
        <div className="mt-14 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="rounded-2xl border border-border bg-card p-6 text-center shadow-sm"
            >
              <div className="text-3xl font-bold text-primary sm:text-4xl">
                {stat.value}
              </div>
              <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Highlights grid */}
        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {highlights.map((h, i) => {
            const Icon = h.icon;
            return (
              <motion.div
                key={h.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                whileHover={{ y: -6 }}
                className="group rounded-2xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold">{h.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{h.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mt-16 rounded-3xl border border-border bg-gradient-to-br from-muted/60 to-background p-8 sm:p-12"
        >
          <div className="mx-auto max-w-3xl text-center">
            <Sparkles className="mx-auto mb-4 h-8 w-8 text-primary" />
            <h3 className="text-xl font-semibold sm:text-2xl">Development Philosophy</h3>
            <blockquote className="mt-4 text-base text-muted-foreground sm:text-lg">
              &ldquo;{profile.philosophy}&rdquo;
            </blockquote>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
