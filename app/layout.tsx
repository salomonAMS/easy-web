import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  variable: '--font-inter'
})

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
      <head>
        {/* Preconnect pour les ressources critiques */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Script de thème inline optimisé - s'exécute immédiatement */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const savedTheme = localStorage.getItem('theme');
                  if (savedTheme) {
                    document.documentElement.classList.toggle('dark', savedTheme === 'dark');
                  } else {
                    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                    document.documentElement.classList.toggle('dark', prefersDark);
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        {children}
        <SpeedInsights />
      </body>
    </html>
  )
}
