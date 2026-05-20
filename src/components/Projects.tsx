'use client'

import { motion } from 'framer-motion'
import { Sparkles, FlaskConical, CheckCircle2 } from 'lucide-react'
import Section from './Section'
import { projects, type Project } from '@/lib/data'

const easeOut = [0.22, 1, 0.36, 1] as const

const statusStyles: Record<Project['status'], { className: string; Icon: typeof Sparkles }> = {
  Ongoing: {
    className: 'border-accent-400/40 bg-accent-500/10 text-accent-200',
    Icon: Sparkles,
  },
  'In Testing': {
    className: 'border-amber-400/40 bg-amber-400/10 text-amber-300',
    Icon: FlaskConical,
  },
  Shipped: {
    className: 'border-emerald-400/40 bg-emerald-400/10 text-emerald-300',
    Icon: CheckCircle2,
  },
}

export default function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Notable Projects"
      title="Things I'm building right now."
      lede="Independent work outside the day job — agentic AI systems aimed at creators and people seeking accessible mental-health support."
    >
      <div className="grid gap-6 lg:grid-cols-2">
        {projects.map((project, i) => {
          const status = statusStyles[project.status]
          const StatusIcon = status.Icon
          return (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, ease: easeOut, delay: i * 0.06 }}
              className="card card-hover group relative overflow-hidden"
            >
              <div
                aria-hidden
                className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-accent-500/10 blur-3xl transition-opacity duration-500 group-hover:opacity-100 opacity-60"
              />

              <header className="relative flex items-start justify-between gap-3">
                <div>
                  <span
                    className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.16em] ${status.className}`}
                  >
                    <StatusIcon className="h-3 w-3" aria-hidden />
                    {project.status}
                  </span>
                  <h3 className="mt-3 text-xl font-semibold text-white sm:text-2xl">
                    {project.title}
                  </h3>
                  <p className="mt-1 text-sm text-ink-100">{project.subtitle}</p>
                </div>
                <span className="shrink-0 font-mono text-xs uppercase tracking-[0.16em] text-ink-100">
                  {project.period}
                </span>
              </header>

              <p className="relative mt-5 text-[15px] leading-relaxed text-ink-50">
                {project.description}
              </p>

              <ul className="relative mt-5 space-y-2.5">
                {project.highlights.map((h, idx) => (
                  <li
                    key={idx}
                    className="relative pl-5 text-sm leading-relaxed text-ink-50"
                  >
                    <span
                      aria-hidden
                      className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-accent-400"
                    />
                    {h}
                  </li>
                ))}
              </ul>

              <ul className="relative mt-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <li key={tag} className="chip font-mono text-[11px] tracking-wide">
                    {tag}
                  </li>
                ))}
              </ul>
            </motion.article>
          )
        })}
      </div>
    </Section>
  )
}
