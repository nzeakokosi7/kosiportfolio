import { useState } from 'react'
import { NAV_LINKS } from '@/data/content'

function LogoLockup() {
  return (
    <a href="#top" className="flex items-center gap-[9px]">
      <span className="h-[7px] w-[7px] rounded-full bg-brand" />
      <span className="text-[15px] font-bold tracking-[-.025em]">Kosi Nzeako</span>
    </a>
  )
}

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-[5] border-b border-ink/[.09] bg-[rgba(11,10,18,.85)] backdrop-blur-[10px]">
      <div className="px-section flex items-center justify-between py-[18px]">
        <LogoLockup />

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 text-[13px] min-[900px]:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-ink/[.55] transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="inline-flex items-center gap-[7px] rounded-full bg-brand px-[15px] py-2 text-[12.5px] font-semibold text-white transition-[filter] hover:brightness-[1.15]"
          >
            Let&apos;s talk
          </a>
        </nav>

        {/* Mobile hamburger — 44px tap target */}
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-11 w-11 flex-col items-end justify-center gap-[5px] min-[900px]:hidden"
        >
          <span
            className={`h-[2px] rounded-full bg-ink/70 transition-all ${
              open ? 'w-5 translate-y-[7px] rotate-45' : 'w-5'
            }`}
          />
          <span
            className={`h-[2px] rounded-full bg-ink/70 transition-all ${
              open ? 'w-5 -translate-y-0 -rotate-45' : 'w-[14px]'
            }`}
          />
        </button>
      </div>

      {/* Mobile menu panel */}
      {open && (
        <nav className="px-section flex flex-col gap-1 border-t border-ink/[.09] pb-4 pt-2 min-[900px]:hidden">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="py-[10px] text-[15px] text-ink/[.7] transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex min-h-[48px] items-center justify-center rounded-full bg-brand px-[15px] text-[14px] font-semibold text-white"
          >
            Let&apos;s talk
          </a>
        </nav>
      )}
    </header>
  )
}
