import { TIMELINE } from '@/data/content'

function Row({ item, last }) {
  const dateColor = item.current ? 'text-lilac' : 'text-ink/[.42]'
  return (
    <div className="grid grid-cols-[16px_1fr] min-[900px]:grid-cols-[100px_20px_1fr]">
      {/* Date column — desktop only */}
      <div
        className={`hidden whitespace-nowrap pt-[22px] font-mono text-[11.5px] min-[900px]:block ${dateColor}`}
      >
        {item.date}
      </div>

      {/* Rail */}
      <div className="flex flex-col items-center">
        <div
          className={`mt-6 h-[9px] w-[9px] shrink-0 rounded-full ${
            item.current ? 'bg-magenta shadow-dot-halo' : 'bg-ink/[.3]'
          }`}
        />
        {!last && (
          <div className="min-h-[34px] w-0 flex-1 border-l-2 border-dotted border-ink/[.22]" />
        )}
      </div>

      {/* Content */}
      <div
        className={`py-5 pl-5 ${last ? '' : 'border-b border-ink/[.09]'}`}
      >
        {/* Date reflows above the company name on mobile */}
        <div className={`mb-1 whitespace-nowrap font-mono text-[9.5px] min-[900px]:hidden ${dateColor}`}>
          {item.date}
        </div>
        <div className="flex flex-wrap items-baseline gap-[11px]">
          <span className="text-[16.5px] font-semibold tracking-[-.02em]">{item.company}</span>
          <span className="text-[13.5px] text-ink/[.5]">{item.role}</span>
        </div>
        <div className="mt-[5px] text-[13.5px] leading-[1.55] text-ink/[.45]">{item.blurb}</div>
      </div>
    </div>
  )
}

export default function Timeline() {
  return (
    <section id="track-record" className="px-section pb-[62px]">
      <h2 className="mb-1.5 text-[30px] font-bold tracking-[-.035em]">Full track record</h2>
      <p className="mb-[30px] max-w-[58ch] text-[14.5px] leading-[1.6] text-ink/[.5]">
        Eleven roles, one job description: find what&apos;s slowing a team down and
        remove it permanently.
      </p>
      <div className="flex flex-col">
        {TIMELINE.map((item, i) => (
          <Row key={`${item.company}-${i}`} item={item} last={i === TIMELINE.length - 1} />
        ))}
      </div>
    </section>
  )
}
