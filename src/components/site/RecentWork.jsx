import Glyph from './Glyph'
import { RECENT_WORK } from '@/data/content'

export default function RecentWork() {
  return (
    <section className="px-section pb-[58px]">
      <div className="mb-2 flex items-baseline gap-[14px]">
        <h2 className="text-[26px] font-bold tracking-[-.035em]">Recent engineering</h2>
        <span className="font-mono text-[11px] text-ink/[.32]">hands on the keyboard</span>
      </div>
      <p className="mb-6 max-w-[58ch] text-[14.5px] leading-[1.6] text-ink/[.5]">
        Founding doesn&apos;t mean I stopped shipping. Android, backend and
        full-stack, across three markets.
      </p>
      <div className="grid grid-cols-1 gap-[14px] min-[900px]:grid-cols-3">
        {RECENT_WORK.map((card) => (
          <div
            key={card.company}
            className="flex flex-col gap-[10px] rounded-[9px] border border-ink/[.12] bg-ink/[.02] p-[22px]"
          >
            <div className="flex items-baseline justify-between gap-[10px]">
              <span className="text-[16px] font-bold tracking-[-.025em]">{card.company}</span>
              <span className="whitespace-nowrap font-mono text-[9.5px] text-ink/[.38]">
                {card.when}
              </span>
            </div>
            <div className="font-mono text-[10.5px] tracking-[.03em] text-periwinkle">
              {card.role}
            </div>
            <p className="m-0 text-[13.5px] leading-[1.6] text-ink/[.58]">{card.blurb}</p>
            {card.stackIcons.length > 0 ? (
              <div className="mt-auto flex flex-wrap items-center gap-[10px] pt-[10px]">
                {card.stackIcons.map((icon) => (
                  <Glyph key={icon.label} src={icon.src} alt={icon.label} size={14} className="opacity-[.55]" />
                ))}
                <span className="font-mono text-[10px] text-ink/[.35]">{card.stackText}</span>
              </div>
            ) : (
              <div className="mt-auto pt-2 font-mono text-[10px] leading-[1.7] text-ink/[.35]">
                {card.stackText}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
