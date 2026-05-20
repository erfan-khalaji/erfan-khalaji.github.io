'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Mail, MapPin } from 'lucide-react'
import { profile, heroStats, focusAreas } from '@/lib/data'
import NeuralBackground from './NeuralBackground'

const easeOut = [0.22, 1, 0.36, 1] as const

export default function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden pt-32 pb-24 sm:pt-36 lg:pt-44">
      <NeuralBackground />

      <div className="container-page relative">
        <div className="grid items-center gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: easeOut }}
              className="eyebrow"
            >
              <MapPin className="h-3 w-3 text-accent-300" aria-hidden />
              {profile.location}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: easeOut, delay: 0.05 }}
              className="mt-5 font-display text-5xl font-semibold leading-[1.05] tracking-tight text-balance sm:text-6xl lg:text-7xl"
            >
              <span className="gradient-text">{profile.name}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: easeOut, delay: 0.12 }}
              className="mt-3 font-mono text-sm uppercase tracking-[0.22em] text-accent-300 sm:text-base"
            >
              {profile.title}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: easeOut, delay: 0.2 }}
              className="mt-6 max-w-2xl text-lg text-ink-50 text-balance sm:text-xl"
            >
              {profile.tagline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: easeOut, delay: 0.28 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <a href="#contact" className="btn-primary">
                <Mail className="h-4 w-4" aria-hidden />
                Get in touch
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <Linkedin className="h-4 w-4" aria-hidden />
                LinkedIn
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="btn-ghost h-10 w-10 !px-0"
              >
                <Github className="h-4 w-4" aria-hidden />
              </a>
            </motion.div>

            <motion.ul
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: easeOut, delay: 0.36 }}
              className="mt-10 flex flex-wrap gap-2"
              aria-label="Focus areas"
            >
              {focusAreas.map((area) => (
                <li key={area} className="chip">
                  {area}
                </li>
              ))}
            </motion.ul>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: easeOut, delay: 0.1 }}
            className="relative mx-auto w-full max-w-sm lg:max-w-none"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-white/10 bg-ink-700">
              <div className="absolute inset-0 bg-gradient-to-tr from-accent-500/20 via-transparent to-transparent" />
              <Image
                src="/images/hero-photo.jpg"
                alt={`${profile.name} — portrait`}
                fill
                priority
                sizes="(max-width: 1024px) 320px, 380px"
                className="object-cover object-center"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink-900/90 via-ink-900/30 to-transparent p-5">
                <div className="flex items-center gap-2 text-xs text-ink-50">
                  <MapPin className="h-3.5 w-3.5 text-accent-300" aria-hidden />
                  {profile.location}
                </div>
              </div>
            </div>

            <div className="pointer-events-none absolute -inset-6 -z-10 rounded-[2rem] bg-radial-glow opacity-70 blur-2xl" />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: easeOut, delay: 0.45 }}
          className="mt-16 grid grid-cols-2 gap-3 sm:mt-20 sm:grid-cols-4 sm:gap-4"
        >
          {heroStats.map((stat) => (
            <div
              key={stat.label}
              className="card card-hover flex flex-col gap-1 !p-5"
            >
              <span className="font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                {stat.value}
              </span>
              <span className="text-sm font-medium text-ink-50">{stat.label}</span>
              <span className="text-xs text-ink-100">{stat.sub}</span>
            </div>
          ))}
        </motion.div>

        <a
          href="#about"
          aria-label="Scroll to about"
          className="mt-16 inline-flex items-center gap-2 text-sm text-ink-100 transition hover:text-white sm:mt-20"
        >
          <span className="font-mono uppercase tracking-[0.18em]">Scroll</span>
          <ArrowDown className="h-4 w-4 animate-bounce" aria-hidden />
        </a>
      </div>
    </section>
  )
}
