'use client'

import { motion } from 'framer-motion'
import Section from './Section'
import { skillGroups } from '@/lib/data'

const easeOut = [0.22, 1, 0.36, 1] as const

export default function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills & Stack"
      title="The tools, frameworks, and infrastructure I use."
      lede="From prototype to production — modeling, GenAI tooling, MLOps, and the cloud stack underneath."
      alt
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, i) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, ease: easeOut, delay: i * 0.05 }}
            className="card card-hover h-full"
          >
            <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-accent-300">
              {group.category}
            </h3>
            <p className="mt-3 text-sm text-ink-100">{group.description}</p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li key={item} className="chip">
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
