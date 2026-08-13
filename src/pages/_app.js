import '@/styles/globals.css'
import { Public_Sans, IBM_Plex_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'

// Public Sans — all UI and display text.
const publicSans = Public_Sans({
  subsets: ['latin'],
  variable: '--font-public-sans',
  weight: ['400', '500', '600', '700'],
  style: ['normal'],
  display: 'swap',
})

// IBM Plex Mono — all metadata: eyebrows, dates, badges, stack lines, code.
const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  variable: '--font-ibm-plex-mono',
  weight: ['400', '500'],
  style: ['normal'],
  display: 'swap',
})

export default function App({ Component, pageProps }) {
  return (
    <main className={`${publicSans.variable} ${ibmPlexMono.variable} font-sans`}>
      <Component {...pageProps} />
      <Analytics />
    </main>
  )
}
