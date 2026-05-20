'use client'

import { motion } from 'framer-motion'
import { Briefcase, MapPin } from 'lucide-react'
import Section from './Section'
import { experiences } from '@/lib/data'

const easeOut = [0.22, 1, 0.36, 1] as const

export default function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="Seven years of ML across research and production."
      lede="Roles spanning agriculture AI, applied research, clinical decision support, education analytics, and academic research."
      alt
    >
      <ol className="relative space-y-10 sm:space-y-12 sm:pl-10">
        <div
          aria-hidden
          className="absolute left-4 top-2 hidden h-[calc(100%-1rem)] w-px bg-gradient-to-b from-accent-500/50 via-white/10 to-transparent sm:block"
        />

        {experiences.map((exp, i) => (
          <motion.li
            key={`${exp.company}-${i}`}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: easeOut, delay: i * 0.04 }}
            className="relative"
          >
            <span
              aria-hidden
              className="absolute -left-[2.35rem] top-7 hidden h-3 w-3 -translate-x-px rounded-full border border-accent-400/60 bg-ink-900 sm:block"
            >
              <span className="absolute inset-0.5 rounded-full bg-accent-400 shadow-[0_0_10px_rgba(83,188,255,0.7)]" />
            </span>

            <article className="card card-hover">
              <header className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.18em] text-accent-300">
                    {exp.current ? (
                      <span className="inline-flex items-center gap-1.5">
                        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                        Current
                      </span>
                    ) : (
                      <Briefcase className="h-3.5 w-3.5" aria-hidden />
                    )}
                    <span>{exp.period}</span>
                  </div>
                  <h3 className="mt-2 text-xl font-semibold text-white sm:text-2xl">
                    {exp.role}
                  </h3>
                  <p className="mt-1 text-sm text-ink-50">
                    <span className="text-white">{exp.company}</span>
                    <span className="mx-2 text-ink-300">·</span>
                    <span className="inline-flex items-center gap-1">
                      <MapPin className="h-3.5 w-3.5" aria-hidden />
                      {exp.location}
                    </span>
                  </p>
                </div>
              </header>

              <ul className="mt-5 space-y-3">
                {exp.highlights.map((h, idx) => (
                  <li
                    key={idx}
                    className="relative pl-5 text-sm leading-relaxed text-ink-50 sm:text-[15px]"
                  >
                    <span
                      aria-hidden
                      className="absolute left-0 top-2.5 h-1.5 w-1.5 rounded-full bg-accent-400"
                    />
                    {h}
                  </li>
                ))}
              </ul>
            </article>
          </motion.li>
        ))}
      </ol>
    </Section>
  )
}
