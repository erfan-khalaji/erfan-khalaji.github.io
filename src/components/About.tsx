'use client'

import { motion } from 'framer-motion'
import { Award, BookOpen, Globe2, Sparkles } from 'lucide-react'
import Section from './Section'
import { profile } from '@/lib/data'

const easeOut = [0.22, 1, 0.36, 1] as const

const pillars = [
  {
    icon: Sparkles,
    title: 'Generative AI in production',
    body: 'From multimodal RAG over millions of field images to RLHF-based voice models, shipping LLM systems that learn from real user behavior.',
  },
  {
    icon: Globe2,
    title: 'Research that meets the field',
    body: 'Production deployments span agriculture, healthcare, and accessibility — applying ML where research rigor and real-world impact both matter.',
  },
  {
    icon: BookOpen,
    title: 'Peer-reviewed work',
    body: 'Published research across web accessibility, autism detection, and renewable energy forecasting, anchored in measurable evidence.',
  },
  {
    icon: Award,
    title: 'Recognition',
    body: 'Google Scholarship for Web Accessibility (W4A 2021), and contributor to a 2026 U.S. patent-awarded AI product.',
  },
] as const

export default function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title="ML systems that ship and stay shipped."
      lede="I lead end-to-end ML work — from problem framing and research, through model design, to production deployment and monitoring."
    >
      <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-14">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: easeOut }}
          className="space-y-5 text-base leading-relaxed text-ink-50 sm:text-lg"
        >
          <p>{profile.summary}</p>
          <p className="text-ink-100">
            Currently leading AI at{' '}
            <span className="text-white">Croptimistic Technology</span>, where my models
            power <span className="text-white">SWAT CAM</span> across western Canada.
            Outside of work, I&apos;m building agentic systems for content creators and
            mental-health support — putting GenAI in the hands of people who need it.
          </p>
        </motion.div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
          {pillars.map((p, i) => {
            const Icon = p.icon
            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, ease: easeOut, delay: i * 0.05 }}
                className="card card-hover"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-accent-300">
                  <Icon className="h-4 w-4" aria-hidden />
                </div>
                <h3 className="mt-4 text-base font-semibold text-white">{p.title}</h3>
                <p className="mt-1.5 text-sm text-ink-100">{p.body}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </Section>
  )
}
