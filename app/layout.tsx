import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Easy Web - Transformation Digitale & IA',
  description: 'Nous transformons votre présence web obsolète en une machine à générer des clients grâce à l\'IA',
  icons: {
    icon: '/icon.svg',
    apple: '/icon.svg',
  },
  verification: {
    google: 'OM85iugrZcw-_s0oioQsu5ccs1XxuaWFvPI_GzONvrk',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
