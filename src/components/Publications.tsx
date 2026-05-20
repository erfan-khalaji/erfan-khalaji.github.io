'use client'

import { motion } from 'framer-motion'
import { BookOpen } from 'lucide-react'
import Section from './Section'
import { publications } from '@/lib/data'

const easeOut = [0.22, 1, 0.36, 1] as const

export default function Publications() {
  return (
    <Section
      id="publications"
      eyebrow="Publications"
      title="Peer-reviewed research."
      lede="Published work across web accessibility, autism detection, and renewable energy forecasting."
    >
      <ul className="space-y-4">
        {publications.map((pub, i) => (
          <motion.li
            key={pub.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, ease: easeOut, delay: i * 0.05 }}
            className="card card-hover flex flex-col gap-3 sm:flex-row sm:items-start sm:gap-5"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-accent-300">
              <BookOpen className="h-4 w-4" aria-hidden />
            </div>

            <div className="flex-1">
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <h3 className="text-base font-semibold text-white sm:text-lg">
                  {pub.title}
                </h3>
                <span className="font-mono text-xs uppercase tracking-[0.16em] text-ink-100">
                  {pub.year}
                </span>
              </div>
              <p className="mt-1 text-sm text-ink-100">{pub.authors}</p>
              <p className="mt-2 text-sm italic text-ink-50">{pub.venue}</p>
            </div>
          </motion.li>
        ))}
      </ul>
    </Section>
  )
}
