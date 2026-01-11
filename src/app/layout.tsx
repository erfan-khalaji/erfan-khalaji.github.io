import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Erfan Khalaji - AI & ML Scientist | Data Scientist | ML Engineer',
  description: 'Senior Data Scientist with 6+ years of experience in machine learning, predictive analytics, and production ML systems. Specialized in AI, ML, and data science roles.',
  keywords: ['Data Scientist', 'Machine Learning', 'AI Scientist', 'ML Engineer', 'Predictive Analytics', 'Python', 'AWS', 'GCP'],
  authors: [{ name: 'Erfan Khalaji' }],
  openGraph: {
    title: 'Erfan Khalaji - AI & ML Scientist',
    description: 'Senior Data Scientist with 6+ years of experience in machine learning and predictive analytics',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

