import { Github, Linkedin, Mail } from 'lucide-react'
import { profile } from '@/lib/data'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-white/[0.06] bg-ink-900">
      <div className="container-page flex flex-col items-center justify-between gap-4 py-8 sm:flex-row">
        <p className="text-sm text-ink-100">
          © {year} {profile.name} · Built with Next.js & Tailwind.
        </p>
        <div className="flex items-center gap-2">
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="btn-ghost h-9 w-9 !px-0"
          >
            <Mail className="h-4 w-4" aria-hidden />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="btn-ghost h-9 w-9 !px-0"
          >
            <Linkedin className="h-4 w-4" aria-hidden />
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="btn-ghost h-9 w-9 !px-0"
          >
            <Github className="h-4 w-4" aria-hidden />
          </a>
        </div>
      </div>
    </footer>
  )
}
