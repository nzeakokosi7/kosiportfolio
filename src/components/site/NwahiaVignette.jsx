import Glyph from './Glyph'

const CHANNELS = ['whatsapp', 'instagram', 'tiktok']

const MESSAGES = [
  { icon: 'whatsapp', sender: 'Adaeze O.', bars: ['78%', '52%'], time: '2m', delay: '0s' },
  { icon: 'instagram', sender: '@lagos.fits', bars: ['64%', '40%'], time: '5m', delay: '.6s' },
  { icon: 'tiktok', sender: 'Chuka', bars: ['82%', '46%'], time: '11m', delay: '1.2s' },
]

export default function NwahiaVignette({ className = '' }) {
  return (
    <div
      className={`flex min-h-[300px] flex-col justify-center p-6 ${className}`}
      style={{
        background:
          'radial-gradient(90% 70% at 50% 26%,rgba(229,24,255,.14) 0%,transparent 70%),rgba(236,234,243,.015)',
      }}
    >
      {/* Channel circles — centred flex, 16px gap, 30px cells (layout trap: the
          connector strip below MUST use the same coordinate system). */}
      <div className="flex justify-center gap-4">
        {CHANNELS.map((ch) => (
          <div
            key={ch}
            className="flex h-[30px] w-[30px] items-center justify-center rounded-full border border-ink/[.16] bg-ink/[.04]"
          >
            <Glyph src={`/icons/${ch}.svg`} alt={ch} size={13} className="opacity-70" />
          </div>
        ))}
      </div>

      {/* Connector strip — identical centred flex / 16px gap / 30px cells */}
      <div className="flex h-[34px] justify-center gap-4">
        {MESSAGES.map((m) => (
          <div key={m.icon} className="relative w-[30px]">
            <div className="absolute left-1/2 bottom-0 top-0 w-0 border-l-2 border-dotted border-[rgba(229,24,255,.3)]" />
            <div
              className="absolute left-1/2 top-0 -ml-[2.5px] h-[5px] w-[5px] animate-nwFlow rounded-full bg-magenta"
              style={{ animationDelay: m.delay }}
            />
          </div>
        ))}
      </div>

      {/* Inbox card */}
      <div className="rounded-[9px] border border-ink/[.16] bg-[rgba(8,7,13,.72)] px-[14px] py-[13px] shadow-nw-card">
        <div className="flex items-center justify-between gap-2 pb-[9px]">
          <span className="text-[12px] font-bold tracking-[-.015em]">Shared inbox</span>
          <span className="inline-flex items-center gap-[5px] font-mono text-[8.5px] text-ink/[.45]">
            <span className="h-[5px] w-[5px] rounded-full bg-signal-green" />3 agents
          </span>
        </div>
        {MESSAGES.map((m) => (
          <div
            key={m.sender}
            className="flex animate-nwIn items-center gap-[9px] border-t border-ink/[.08] py-[9px]"
            style={{ animationDelay: m.delay }}
          >
            <Glyph src={`/icons/${m.icon}.svg`} alt="" size={11} className="opacity-50" />
            <div className="min-w-0 flex-1">
              <div className="mb-[5px] font-mono text-[9.5px] text-ink/[.62]">{m.sender}</div>
              <div className="h-[5px] rounded-[3px] bg-ink/[.14]" style={{ width: m.bars[0] }} />
              <div
                className="mt-1 h-[5px] rounded-[3px] bg-ink/[.08]"
                style={{ width: m.bars[1] }}
              />
            </div>
            <span className="shrink-0 font-mono text-[8.5px] text-ink/[.3]">{m.time}</span>
          </div>
        ))}
      </div>

      <div className="mt-3 text-center font-mono text-[9px] uppercase tracking-[.12em] text-ink/[.42]">
        Every agent, full context
      </div>
    </div>
  )
}
