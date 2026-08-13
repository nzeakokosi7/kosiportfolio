// ---------------------------------------------------------------------------
// Site content + config. This is the single place to swap placeholders for
// real content as the client supplies it (see "Content gaps" in the handoff).
// ---------------------------------------------------------------------------

export const SITE = {
  name: 'Kosi Nzeako',
  domain: 'nzeakokosi.com',
  url: 'https://nzeakokosi.com',
  // Current live blog. Once the custom domain blog.nzeakokosi.com is mapped to
  // this Hashnode publication, switch this one line (slugs stay the same).
  blog: 'https://kosi-nzeako.hashnode.dev',
  email: 'hello@nzeakokosi.com',
  resumeUrl: '/resume.pdf',
  // PLACEHOLDER: dead until the client supplies a personal booking link.
  bookingUrl: '#contact',
  // Formspree form id — set NEXT_PUBLIC_FORMSPREE_ID in the environment.
  formspreeId: process.env.NEXT_PUBLIC_FORMSPREE_ID || '',
  socials: {
    github: 'https://github.com/nzeakokosi7',
    linkedin: 'https://linkedin.com/in/nzeakokosi7',
    x: 'https://x.com/nzeakokosi7',
    instagram: 'https://instagram.com/nzeakokosi7',
  },
  playlist: 'https://music.apple.com/ng/playlist/trap/pl.u-PDb4zE5te9k8aD8?ls',
}

export const NAV_LINKS = [
  { label: 'Ventures', href: '#ventures' },
  { label: 'Track record', href: '#track-record' },
  { label: 'Writing', href: '#writing' },
  { label: 'About', href: '#about' },
]

// "Shipped with" strip. `type` is 'text' (wordmark) or 'icon' (glyph + label).
export const SHIPPED_WITH = [
  { type: 'image', label: 'Esusu', src: '/esusu-mark.svg', height: 15 },
  { type: 'image', label: 'Okra', src: '/okra-mark.png', height: 17 },
  { type: 'text', label: 'Andela' },
  { type: 'icon', label: 'Google', src: '/icons/google.svg' },
  { type: 'icon', label: 'Meta', src: '/icons/meta.svg' },
  { type: 'image', label: 'Varscon', src: '/varscon-mark.svg', height: 15 },
]

// Recent engineering — three cards.
export const RECENT_WORK = [
  {
    company: 'Esusu',
    when: 'Present',
    role: 'Senior Software Engineer, Full-stack',
    blurb:
      'Rent reporting to Experian, Equifax and TransUnion, plus identity and income verification that catches falsified paystubs and stolen IDs before a lease is signed.',
    stackText: 'Full-stack · Fintech · Credit infrastructure',
    stackIcons: [],
  },
  {
    company: 'MyCashi',
    when: 'Dec 25—Jul 26',
    role: 'Android Developer · alsoug · Cashi',
    blurb:
      'Mobile banking for the Sudanese market. Co-architected a Server-Driven UI system for backend-controlled screens, rebuilt the full auth flow with Arabic RTL and English localisation, and shipped offline Favorites on Room. 50+ merged PRs.',
    stackText: 'MVVM/UDF · Clean Architecture',
    stackIcons: [
      { src: '/icons/kotlin.svg', label: 'Kotlin' },
      { src: '/icons/jetpackcompose.svg', label: 'Jetpack Compose' },
      { src: '/icons/android.svg', label: 'Android' },
    ],
  },
  {
    company: 'Deimos',
    when: 'Aug 24—Jul 26',
    role: 'Senior Android Engineer',
    blurb:
      'Two years of senior Android delivery for a Lagos-based engineering team, remote — shared design-system and domain modules, and the review bar that keeps them usable.',
    stackText: 'Design systems',
    stackIcons: [
      { src: '/icons/kotlin.svg', label: 'Kotlin' },
      { src: '/icons/android.svg', label: 'Android' },
    ],
  },
]

// Full track record — eleven roles. `current: true` gets the magenta halo dot.
export const TIMELINE = [
  {
    // Joined Feb 9 2026; shown year-only to match the other current roles and
    // fit the fixed 100px timeline date column (avoids the date-wrap layout trap).
    date: '2026—Present',
    current: true,
    company: 'Esusu',
    role: 'Senior Software Engineer, Full-stack',
    blurb:
      'Rent reporting to all three US credit bureaus, plus identity and income verification for property teams.',
  },
  {
    // Start date = swiftbon.com domain registration (2022-06-09).
    date: '2022—Present',
    current: true,
    company: 'Swiftbon',
    role: 'Founder',
    blurb:
      'Multi-currency accounts and cross-border collections for Nigerian businesses earning abroad.',
  },
  {
    // Start date = nwahia.com domain registration (2024-05-19).
    date: '2024—Present',
    current: true,
    company: 'Nwahia',
    role: 'Founder · a Varscon product',
    blurb:
      'Unified customer-support inbox across WhatsApp, Instagram, TikTok, email and web chat.',
  },
  {
    date: 'Dec 25—Jul 26',
    company: 'alsoug · Cashi',
    role: 'Android Developer',
    blurb: 'MyCashi, a mobile banking app for the Sudanese market. Egypt, remote.',
  },
  {
    date: 'Aug 24—Jul 26',
    company: 'Deimos',
    role: 'Senior Android Engineer',
    blurb: 'Two years of senior Android delivery. Lagos, remote.',
  },
  {
    date: 'Jan—Sep 2025',
    company: 'Nebula by Okra',
    role: 'Senior Backend Engineer',
    blurb: 'Led the Cloud Integration team on cloud-native resilience and availability.',
  },
  {
    date: '2022—24',
    current: true,
    company: 'Okra',
    role: 'Platform Engineer',
    blurb: 'Open-banking SDK delivery across four African markets.',
  },
  {
    date: '2021—22',
    company: 'Varscon',
    role: 'Senior Project Manager, Team Lead',
    blurb: 'Delivery across three engineering pods; owned the client-to-engineering interface.',
  },
  {
    date: '2020—22',
    company: 'Google',
    role: 'GDSC Lead',
    blurb: 'Built a 400-member developer community and ran its speaker programme.',
  },
  {
    date: '2019—21',
    company: 'eMenu',
    role: 'Project Lead, Android Developer',
    blurb: 'Restaurant ordering platform, prototype through storefront.',
  },
  {
    date: '2018—19',
    company: 'The Csaen',
    role: 'Product Owner, Android Developer',
    blurb: 'Roadmap ownership and the first two production releases.',
  },
]

// Writing & speaking. Real Hashnode articles (slugs, read-times and years
// verified against the live posts on kosi-nzeako.hashnode.dev).
export const WRITING = [
  {
    kicker: 'Essay · 2023',
    title: 'Property Based Testing',
    meta: '7 min read',
    href: `${SITE.blog}/property-based-testing`,
  },
  {
    kicker: 'Essay · 2024',
    title: 'Using AI to Predict User Health Prospect — A Hackathon Story',
    meta: '4 min read',
    href: `${SITE.blog}/using-ai-to-predict-user-health-prospecta-hackathon-story`,
  },
]

export const ABOUT_CHIPS = [
  { label: 'The playlist I build to', href: SITE.playlist },
  { label: 'UK grime' },
  { label: 'Puzzle quizzes' },
  { label: 'New cities' },
]
