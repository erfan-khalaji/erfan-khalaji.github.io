import type { Metadata, Viewport } from 'next'
import { Inter, Space_Grotesk, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://erfan-khalaji.github.io'),
  title: {
    default: 'Erfan Khalaji — AI Scientist',
    template: '%s · Erfan Khalaji',
  },
  description:
    'AI Scientist with 7+ years building production ML systems across generative AI, computer vision, and NLP. Shipped a 2026 U.S. patent-awarded AI product running at 1.5M+ acres and 50M+ inferences/month.',
  keywords: [
    'Erfan Khalaji',
    'AI Scientist',
    'Machine Learning',
    'Generative AI',
    'Computer Vision',
    'NLP',
    'RAG',
    'LLM',
    'PyTorch',
    'MLOps',
    'Edmonton',
    'Canada',
  ],
  authors: [{ name: 'Erfan Khalaji', url: 'https://erfan-khalaji.github.io' }],
  creator: 'Erfan Khalaji',
  openGraph: {
    title: 'Erfan Khalaji — AI Scientist',
    description:
      'AI Scientist shipping production-scale generative AI, computer vision, and NLP systems.',
    url: 'https://erfan-khalaji.github.io',
    siteName: 'Erfan Khalaji',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Erfan Khalaji — AI Scientist',
    description:
      'AI Scientist shipping production-scale generative AI, computer vision, and NLP systems.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  themeColor: '#0a0a0b',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
    >
      <body className="antialiased selection:bg-accent-500/30 selection:text-white">
        {children}
      </body>
    </html>
  )
}
