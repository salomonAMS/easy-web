import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

const siteUrl = 'https://easy-webco.vercel.app' 
export const metadata: Metadata = {
  title: 'Easy Web - Transformation Digitale & IA | Agence web',
  description: 'Easy Web : Agence web spécialisée en transformation digitale. Nous modernisons votre site web et automatisons vos processus avec l\'intelligence artificielle pour générer plus de clients.',
  keywords: [
    'Easy Web',
    'Agence IA',
    'transformation digitale',
    'intelligence artificielle',
    'automatisation IA',
    'modernisation web',
    'agence web IA',
    'développement IA',
    'chatbot IA',
    'site web moderne',
  ],
  authors: [{ name: 'Easy Web' }],
  creator: 'Easy Web',
  publisher: 'Easy Web',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/icon.svg',
    apple: '/icon.svg',
  },
  verification: {
    google: 'OM85iugrZcw-_s0oioQsu5ccs1XxuaWFvPI_GzONvrk',
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: siteUrl,
    siteName: 'Easy Web',
    title: 'Easy Web - Transformation Digitale & IA | Agence IA',
    description: 'Agence IA spécialisée en transformation digitale. Nous modernisons votre site web et automatisons vos processus avec l\'IA pour booster vos ventes.',
    images: [
      {
        url: `${siteUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'Easy Web - Agence IA et Transformation Digitale',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Easy Web - Transformation Digitale & IA | Agence IA',
    description: 'Agence IA spécialisée en transformation digitale. Modernisez votre site web et automatisez vos processus avec l\'intelligence artificielle.',
    images: [`${siteUrl}/og-image.jpg`],
    creator: '@easyweb',
  },
  alternates: {
    canonical: siteUrl,
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
