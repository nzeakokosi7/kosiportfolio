import { SITE } from '@/data/content'

const SOCIALS = [
  { label: 'github', href: SITE.socials.github },
  { label: 'linkedin', href: SITE.socials.linkedin },
  { label: 'x', href: SITE.socials.x },
  { label: 'instagram', href: SITE.socials.instagram },
]

export default function Footer() {
  return (
    <footer className="px-section flex flex-col items-center gap-4 border-t border-ink/[.08] bg-bg-deep py-[26px] text-center min-[900px]:flex-row min-[900px]:justify-between min-[900px]:gap-6 min-[900px]:text-left">
      <div className="flex items-center gap-2">
        <span className="h-[6px] w-[6px] rounded-full bg-brand" />
        <span className="text-[13.5px] font-semibold tracking-[-.02em] text-ink/[.72]">
          Kosi Nzeako
        </span>
      </div>

      <div className="flex gap-5 font-mono text-[11px]">
        {SOCIALS.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-ink/[.45] no-underline transition-colors hover:text-magenta"
          >
            {s.label}
          </a>
        ))}
      </div>

      <span className="font-mono text-[10.5px] text-ink/[.4]">
        {SITE.domain}
        <span className="text-ink/[.25]"> · © 2026 · Lagos</span>
      </span>
    </footer>
  )
}
