import Head from 'next/head'
import { SITE } from '@/data/content'
import Header from '@/components/site/Header'
import Hero from '@/components/site/Hero'
import ShippedStrip from '@/components/site/ShippedStrip'
import NowBar from '@/components/site/NowBar'
import Ventures from '@/components/site/Ventures'
import Featured from '@/components/site/Featured'
import RecentWork from '@/components/site/RecentWork'
import Timeline from '@/components/site/Timeline'
import Writing from '@/components/site/Writing'
import About from '@/components/site/About'
import Contact from '@/components/site/Contact'
import Footer from '@/components/site/Footer'

const TITLE =
  'Kosi Nzeako — Serial founder building the money rails for Nigerian businesses'
const DESCRIPTION =
  'Serial founder building the tools — and the money rails — for Nigerian businesses to compete on the world stage. Founder of Swiftbon and Nwahia; Senior Software Engineer at Esusu.'

export default function Home() {
  const ogImage = `${SITE.url}/api/og`
  return (
    <>
      <Head>
        <title>{TITLE}</title>
        <meta name="description" content={DESCRIPTION} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href={SITE.url} />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#0b0a12" />

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Kosi Nzeako" />
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:url" content={SITE.url} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={TITLE} />
        <meta name="twitter:description" content={DESCRIPTION} />
        <meta name="twitter:image" content={ogImage} />
      </Head>

      <div className="mx-auto max-w-[1120px]">
        <Header />
        <Hero />
        <ShippedStrip />
        <NowBar />
        <Ventures />
        <Featured />
        <RecentWork />
        <Timeline />
        <Writing />
        <About />
        <Contact />
        <Footer />
      </div>
    </>
  )
}
