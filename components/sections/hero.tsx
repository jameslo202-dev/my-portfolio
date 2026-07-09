"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { Download, Mail, Github, Linkedin, ArrowUpRight } from "lucide-react";
import { profile } from "@/data/profile";
import { socials } from "@/data/social";

const iconMap = { Github, Linkedin, Mail };

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};
const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden px-4 pt-24 sm:px-6"
    >
      {/* Decorative gradient orbs */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-primary/20 blur-3xl dark:bg-primary/10" />
        <div className="absolute right-0 top-40 h-96 w-96 rounded-full bg-blue-400/10 blur-3xl dark:bg-blue-500/10" />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[1.3fr_1fr]"
      >
        <div className="flex flex-col gap-6">
          <motion.span
            variants={item}
            className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-muted/40 px-3 py-1.5 text-xs font-medium text-muted-foreground"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Available for new opportunities
          </motion.span>

          <div className="flex flex-col gap-3">
            <motion.h1
              variants={item}
              className="text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl"
            >
              {profile.name}
            </motion.h1>
            <motion.p
              variants={item}
              className="text-xl font-medium text-muted-foreground sm:text-2xl"
            >
              {profile.title}
            </motion.p>
          </div>

          <motion.p
            variants={item}
            className="max-w-xl text-base text-muted-foreground sm:text-lg"
          >
            {profile.tagline}
          </motion.p>

          <motion.div variants={item} className="flex flex-wrap items-center gap-3">
            <Link href={profile.resumeUrl} download>
              <motion.span
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-shadow hover:shadow-md"
              >
                <Download className="h-4 w-4" />
                Download Resume
              </motion.span>
            </Link>
            <Link href="#contact">
              <motion.span
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 rounded-xl border border-border bg-background px-5 py-3 text-sm font-semibold transition-colors hover:bg-accent"
              >
                <Mail className="h-4 w-4" />
                Contact Me
              </motion.span>
            </Link>
          </motion.div>

          <motion.div variants={item} className="flex items-center gap-3 pt-2">
            {socials.map((s) => {
              const Icon = iconMap[s.icon as keyof typeof iconMap];
              return (
                <Link
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  aria-label={s.label}
                >
                  <motion.span
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-background text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                  >
                    <Icon className="h-5 w-5" />
                  </motion.span>
                </Link>
              );
            })}
          </motion.div>
        </div>

        {/* Profile avatar */}
        <motion.div
          variants={item}
          className="relative mx-auto hidden aspect-square w-full max-w-sm items-center justify-center lg:flex"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-tr from-primary/30 via-transparent to-blue-400/20 blur-2xl"
          />
          <div className="relative flex aspect-square w-[78%] items-center justify-center rounded-[2rem] border border-border bg-gradient-to-br from-background to-muted shadow-xl">
            <div className="flex h-full w-full flex-col items-center justify-center gap-3 rounded-[2rem] bg-background/60 backdrop-blur-sm">
              <span className="flex h-28 w-28 items-center justify-center rounded-full bg-primary/10 text-5xl font-bold text-primary">
                JL
              </span>
              <span className="text-sm font-medium text-muted-foreground">
                {profile.location}
              </span>
              <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                {profile.yearsOfExperience}+ years experience
                <ArrowUpRight className="h-3 w-3" />
              </span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
