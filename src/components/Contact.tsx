'use client'

import { motion } from 'framer-motion'
import { Mail, Linkedin, Github, MapPin, ArrowUpRight } from 'lucide-react'
import { profile } from '@/lib/data'

const easeOut = [0.22, 1, 0.36, 1] as const

const channels = [
  {
    label: 'Email',
    value: profile.email,
    href: `mailto:${profile.email}`,
    Icon: Mail,
    primary: true,
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/erfan-khalaji',
    href: profile.linkedin,
    Icon: Linkedin,
  },
  {
    label: 'GitHub',
    value: 'github.com/erfan-khalaji',
    href: profile.github,
    Icon: Github,
  },
]

export default function Contact() {
  return (
    <section id="contact" className="section relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-32 h-64 bg-radial-glow opacity-70 blur-2xl"
      />

      <div className="container-page">
        <div className="card relative overflow-hidden p-8 sm:p-12">
          <div
            aria-hidden
            className="pointer-events-none absolute -left-32 -top-32 h-72 w-72 rounded-full bg-accent-500/15 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -right-24 -bottom-24 h-72 w-72 rounded-full bg-accent-400/10 blur-3xl"
          />

          <div className="relative grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-14">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, ease: easeOut }}
            >
              <span className="eyebrow">Contact</span>
              <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                Let&apos;s build something <span className="gradient-text">useful</span>.
              </h2>
              <p className="mt-5 max-w-xl text-base text-ink-50 sm:text-lg">
                I&apos;m open to AI Scientist and ML research roles, collaborations on
                generative-AI products, and conversations with teams shipping ML to
                production. The best way to reach me is email — I reply quickly.
              </p>
              <p className="mt-4 inline-flex items-center gap-2 text-sm text-ink-100">
                <MapPin className="h-4 w-4 text-accent-300" aria-hidden />
                {profile.location}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, ease: easeOut, delay: 0.08 }}
              className="space-y-3"
            >
              {channels.map(({ label, value, href, Icon, primary }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className={`group flex items-center justify-between gap-4 rounded-xl border px-5 py-4 transition-all ${
                    primary
                      ? 'border-accent-400/50 bg-accent-500/10 hover:bg-accent-500/15'
                      : 'border-white/10 bg-white/[0.03] hover:border-white/20 hover:bg-white/[0.06]'
                  }`}
                >
                  <span className="flex items-center gap-3">
                    <span
                      className={`flex h-9 w-9 items-center justify-center rounded-lg ${
                        primary
                          ? 'bg-accent-500/20 text-accent-200'
                          : 'border border-white/10 bg-white/[0.04] text-accent-300'
                      }`}
                    >
                      <Icon className="h-4 w-4" aria-hidden />
                    </span>
                    <span>
                      <span className="block font-mono text-[11px] uppercase tracking-[0.18em] text-ink-100">
                        {label}
                      </span>
                      <span className="block text-sm font-medium text-white">{value}</span>
                    </span>
                  </span>
                  <ArrowUpRight
                    className="h-4 w-4 text-ink-100 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white"
                    aria-hidden
                  />
                </a>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
