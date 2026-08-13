import Image from 'next/image'
import { SITE } from '@/data/content'

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden"
      style={{
        background:
          'radial-gradient(90% 120% at 82% 0%,rgba(229,24,255,.13) 0%,transparent 55%),radial-gradient(70% 100% at 8% 20%,rgba(80,19,227,.16) 0%,transparent 60%),#0b0a12',
      }}
    >
      {/* Decorative background layers (pointer-events:none) */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(rgba(236,234,243,.045) 1px,transparent 1px),linear-gradient(90deg,rgba(236,234,243,.045) 1px,transparent 1px)',
          backgroundSize: '52px 52px',
        }}
      />
      <div
        className="pointer-events-none absolute left-[-60px] top-[118px] h-0 w-[420px] border-t-2 border-dotted border-[#7c3aed] opacity-[.28]"
        style={{ transform: 'rotate(32deg)', transformOrigin: 'left center' }}
      />
      <div
        className="pointer-events-none absolute bottom-20 right-[-40px] h-0 w-[340px] border-t-2 border-dotted border-magenta opacity-[.22]"
        style={{ transform: 'rotate(-24deg)', transformOrigin: 'right center' }}
      />

      <div className="px-section relative grid grid-cols-1 items-end gap-7 pt-[74px] min-[900px]:grid-cols-[1.62fr_.78fr]">
        {/* Left column */}
        <div className="pb-16">
          <div className="mb-7 inline-flex items-center gap-[9px] rounded-full border border-ink/[.16] px-[13px] py-[6px] font-mono text-[10.5px] tracking-[.06em] text-ink/[.65]">
            <span className="h-[6px] w-[6px] rounded-full bg-magenta" />
            <span className="hidden min-[900px]:inline">
              Senior Software Engineer at Esusu &nbsp;·&nbsp; Lagos ↔ Remote
            </span>
            <span className="min-[900px]:hidden">Senior SWE at Esusu · Lagos</span>
          </div>

          <h1 className="m-0 text-[32px] font-bold leading-[1.08] tracking-[-.035em] [text-wrap:pretty] min-[900px]:text-[46px]">
            Serial founder building the tools — and the{' '}
            <span className="text-lilac">money rails</span> — for Nigerian
            businesses to compete on the world stage.
          </h1>

          <p className="mt-[26px] max-w-[48ch] text-[16.5px] leading-[1.6] text-ink/[.6]">
            Two ventures, three markets, ten years of shipping, and one
            recurring thesis: African businesses don&apos;t lack ambition, they
            lack infrastructure. I build the missing layer — payments,
            platforms, and the engineering teams that keep them standing.
          </p>

          <div className="mt-[34px] flex flex-col gap-[9px] min-[900px]:flex-row min-[900px]:flex-wrap min-[900px]:gap-[11px]">
            <a
              href="#ventures"
              className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-brand px-6 py-[14px] text-[14px] font-semibold text-white transition-[filter] hover:brightness-[1.15] min-[900px]:min-h-0"
            >
              See the ventures
            </a>
            <a
              href={SITE.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full border border-ink/[.2] px-[22px] py-[14px] text-[14px] font-medium text-ink transition-colors hover:border-ink/[.55] min-[900px]:min-h-0"
            >
              Résumé{' '}
              <span className="font-mono text-[10px] text-ink/[.45]">
                PDF ↗
              </span>
            </a>
          </div>

          <div className="mt-[34px] animate-kzDrift rounded-l-none rounded-r-[7px] border-l-2 border-dotted border-[rgba(229,24,255,.45)] bg-ink/[.03] px-4 py-[14px] font-mono text-[11px] leading-[1.85] text-ink/[.42]">
            <span className="text-pink-badge">POST</span> /v1/transfers
            <br />
            &nbsp;&nbsp;currency: <span className="text-ink/[.62]">&quot;NGN&quot;</span>
            <br />
            &nbsp;&nbsp;rails: <span className="text-ink/[.62]">[&quot;nip&quot;,&quot;swift&quot;]</span>
          </div>
        </div>

        {/* Right column — portrait */}
        <div className="relative mx-auto -mb-[30px] flex w-[62%] items-end justify-center min-[900px]:mx-0 min-[900px]:mb-0 min-[900px]:w-auto">
          <div
            className="absolute bottom-0 h-[270px] w-[270px] rounded-full"
            style={{
              background:
                'radial-gradient(circle,rgba(229,24,255,.3) 0%,transparent 68%)',
            }}
          />
          <Image
            src="/Kosihero.png"
            alt="Kosi Nzeako"
            width={553}
            height={724}
            priority
            className="relative block h-auto w-full max-w-[260px] grayscale contrast-[1.06]"
          />
        </div>
      </div>
    </section>
  )
}
