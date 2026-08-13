import Image from 'next/image'
import { ABOUT_CHIPS } from '@/data/content'

const chipBase =
  'inline-flex items-center gap-2 rounded-full border border-ink/[.16] px-[15px] py-[9px] text-[13px]'

export default function About() {
  return (
    <section
      id="about"
      className="px-section grid grid-cols-1 items-start gap-[46px] border-t border-ink/[.09] py-[66px] min-[900px]:grid-cols-[.82fr_1.18fr]"
    >
      {/* Portrait with dotted corner bracket */}
      <div className="relative">
        <div className="pointer-events-none absolute -right-[10px] -top-[10px] h-[120px] w-[120px] rounded-[0_12px_0_0] border-r-2 border-t-2 border-dotted border-[rgba(229,24,255,.4)]" />
        <Image
          src="/kosiImg.png"
          alt="Kosi Nzeako"
          width={312}
          height={321}
          className="relative block h-auto w-full rounded-[10px]"
        />
      </div>

      {/* Copy */}
      <div>
        <div className="mb-[18px] font-mono text-[9.5px] uppercase tracking-[.14em] text-lilac">
          About
        </div>
        <h2 className="mb-[18px] max-w-[28ch] text-[28px] font-bold leading-[1.22] tracking-[-.035em]">
          Hi, I&apos;m Kosi — pronounced{' '}
          <span className="font-mono text-[22px] font-medium tracking-[-.01em] text-lilac">
            K.OW.SEE
          </span>
          . Good to have you here.
        </h2>
        <p className="mb-[15px] max-w-[54ch] text-[15px] leading-[1.68] text-ink/[.62]">
          Building solutions sits at the centre of every career choice I make. I
          like to think of it as debugging the world, one technical solution at a
          time — which is why the through-line of my work isn&apos;t a stack,
          it&apos;s a market. Nigerian businesses can build anything; they just
          shouldn&apos;t have to build the rails first.
        </p>

        <div className="my-[26px] rounded-[0_8px_8px_0] border-l-2 border-dotted border-[rgba(229,24,255,.5)] bg-ink/[.03] px-[22px] py-5">
          <p className="mb-3 text-[16px] italic leading-[1.5] text-ink/[.82]">
            &quot;Man shall not live by bread alone, but by the codes that proceed
            from his fingers and keyboard…&quot;
          </p>
          <p className="m-0 text-[14px] leading-[1.6] text-ink/[.55]">
            Okay — maybe that was a poorly thought-out coding quote. But what can I
            say? I&apos;m your friendly neighbourhood nerd.
          </p>
        </div>

        <p className="mb-5 max-w-[54ch] text-[15px] leading-[1.68] text-ink/[.62]">
          I make it a duty to unwind often — music (UK grime, to be exact), puzzle
          quizzes, and travelling to new cities to explore the cultures.
          That&apos;s it on me.
        </p>

        <div className="flex flex-wrap gap-[9px]">
          {ABOUT_CHIPS.map((chip) =>
            chip.href ? (
              <a
                key={chip.label}
                href={chip.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`${chipBase} text-ink/[.78] no-underline transition-colors hover:border-magenta hover:text-ink`}
              >
                {chip.label}
              </a>
            ) : (
              <span key={chip.label} className={`${chipBase} text-ink/[.5]`}>
                {chip.label}
              </span>
            )
          )}
        </div>
      </div>
    </section>
  )
}
