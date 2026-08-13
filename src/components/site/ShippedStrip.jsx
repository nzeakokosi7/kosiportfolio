import Glyph from './Glyph'
import { SHIPPED_WITH } from '@/data/content'

const wordmark =
  'text-[15.5px] font-bold tracking-[-.02em] text-ink/[.5] whitespace-nowrap'

export default function ShippedStrip() {
  return (
    <div className="px-section flex flex-wrap items-center gap-x-8 gap-y-3 border-y border-ink/[.09] py-5">
      <span className="font-mono text-[9.5px] uppercase tracking-[.14em] text-ink/[.35]">
        Shipped with
      </span>
      <div className="flex flex-nowrap items-center gap-[18px] overflow-x-auto min-[900px]:flex-wrap min-[900px]:gap-7 min-[900px]:overflow-visible [&::-webkit-scrollbar]:hidden">
        {SHIPPED_WITH.map((mark) => {
          if (mark.type === 'text') {
            return (
              <span key={mark.label} className={wordmark}>
                {mark.label}
              </span>
            )
          }
          if (mark.type === 'image') {
            return (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={mark.label}
                src={mark.src}
                alt={mark.label}
                style={{ height: mark.height, width: 'auto' }}
                className="block shrink-0 opacity-[.55]"
              />
            )
          }
          return (
            <div key={mark.label} className="flex shrink-0 items-center gap-[7px]">
              <Glyph src={mark.src} alt={mark.label} size={15} className="opacity-[.5]" />
              <span className={wordmark}>{mark.label}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
