'use client'

import { motion } from 'framer-motion'
import { GraduationCap, MapPin } from 'lucide-react'
import Section from './Section'
import { education } from '@/lib/data'

const easeOut = [0.22, 1, 0.36, 1] as const

export default function Education() {
  return (
    <Section
      id="education"
      eyebrow="Education"
      title="Academic foundation."
    >
      <div className="grid gap-5 md:grid-cols-2">
        {education.map((edu, i) => (
          <motion.article
            key={edu.degree}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, ease: easeOut, delay: i * 0.05 }}
            className="card card-hover"
          >
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-accent-300">
                <GraduationCap className="h-5 w-5" aria-hidden />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">{edu.degree}</h3>
                <p className="mt-1 text-sm text-ink-50">
                  <span className="text-white">{edu.institution}</span>
                  <span className="mx-2 text-ink-300">·</span>
                  <span className="inline-flex items-center gap-1">
                    <MapPin className="h-3.5 w-3.5" aria-hidden />
                    {edu.location}
                  </span>
                </p>
                <p className="mt-3 inline-flex rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 font-mono text-xs uppercase tracking-[0.16em] text-ink-50">
                  {edu.detail}
                </p>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  )
}
