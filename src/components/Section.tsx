'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

type SectionProps = {
  id: string
  eyebrow?: string
  title: string
  lede?: string
  children: ReactNode
  alt?: boolean
  headerAside?: ReactNode
}

const easeOut = [0.22, 1, 0.36, 1] as const

export default function Section({
  id,
  eyebrow,
  title,
  lede,
  children,
  alt = false,
  headerAside,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`section ${alt ? 'bg-ink-800/40' : ''}`}
    >
      {alt && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"
        />
      )}
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: easeOut }}
          className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"
        >
          <div>
            {eyebrow && <span className="eyebrow">{eyebrow}</span>}
            <h2 className={`${eyebrow ? 'mt-4' : ''} section-title`}>{title}</h2>
            {lede && <p className="section-lede">{lede}</p>}
          </div>
          {headerAside && <div className="sm:shrink-0">{headerAside}</div>}
        </motion.div>

        <div className="mt-12 sm:mt-14">{children}</div>
      </div>
    </section>
  )
}
