"use client";

import { motion } from "framer-motion";
import { Briefcase, MapPin, Calendar, CheckCircle2 } from "lucide-react";
import { experiences } from "@/data/experience";
import { SectionHeading } from "@/components/section-heading";

export function Experience() {
  return (
    <section id="experience" className="relative px-4 py-24 sm:px-6 sm:py-32">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          eyebrow="Experience"
          title="My professional journey"
          description="A track record of building and shipping full stack products across freelance, in-house, and agency environments."
        />

        <div className="relative mt-16">
          {/* Vertical line */}
          <div className="absolute left-4 top-2 h-full w-px bg-border sm:left-1/2 sm:-translate-x-1/2" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6 }}
                className={`relative flex flex-col gap-4 pl-14 sm:flex-row sm:gap-8 sm:pl-0 ${
                  i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
                }`}
              >
                {/* Node */}
                <div className="absolute left-4 top-1.5 z-10 -translate-x-1/2 sm:left-1/2">
                  <motion.span
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-primary bg-background text-primary"
                  >
                    <Briefcase className="h-4 w-4" />
                  </motion.span>
                </div>

                {/* Spacer for alternating layout on desktop */}
                <div className="hidden sm:block sm:flex-1" />

                {/* Card */}
                <div className="sm:flex-1">
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="rounded-2xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
                  >
                    <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                      <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-2.5 py-1 font-medium text-primary">
                        <Calendar className="h-3 w-3" />
                        {exp.period}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        {exp.location}
                      </span>
                    </div>

                    <h3 className="mt-3 text-lg font-semibold">{exp.role}</h3>
                    <p className="text-sm font-medium text-primary">{exp.company}</p>

                    <ul className="mt-4 space-y-2">
                      {exp.responsibilities.map((r) => (
                        <li
                          key={r}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary/70" />
                          <span>{r}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {exp.technologies.map((t) => (
                        <span
                          key={t}
                          className="rounded-full border border-border bg-background px-2.5 py-1 text-xs font-medium text-muted-foreground"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
