import Glyph from './Glyph'

const RAILS = [
  { region: 'US', detail: 'ACH / Wire' },
  { region: 'UK', detail: 'Faster Pay' },
  { region: 'EU', detail: 'SEPA' },
]

const CURRENCIES = [
  { symbol: '₦', code: 'NGN' },
  { symbol: '$', code: 'USD' },
  { symbol: '£', code: 'GBP' },
  { symbol: '€', code: 'EUR' },
]

// A connector cell: dotted vertical rail + one animated dot flowing down it.
function FlowCell({ delay }) {
  return (
    <div className="relative">
      <div className="absolute left-1/2 bottom-0 top-0 w-0 border-l-2 border-dotted border-[rgba(229,24,255,.32)]" />
      <div
        className="absolute left-1/2 top-0 -ml-[2.5px] h-[5px] w-[5px] animate-sbFlow rounded-full bg-magenta"
        style={{ animationDelay: delay }}
      />
    </div>
  )
}

export default function SwiftbonVignette({ className = '' }) {
  return (
    <div
      className={`flex min-h-[340px] flex-col justify-center px-6 py-[26px] ${className}`}
      style={{
        background:
          'radial-gradient(90% 70% at 50% 42%,rgba(80,19,227,.16) 0%,transparent 70%),rgba(236,234,243,.015)',
      }}
    >
      <div className="mb-3 text-center font-mono text-[9px] uppercase tracking-[.14em] text-ink/[.42]">
        Clients abroad pay on local rails
      </div>

      {/* Rail chips */}
      <div className="grid grid-cols-3 gap-2">
        {RAILS.map((r) => (
          <div
            key={r.region}
            className="rounded-md border border-ink/[.14] bg-ink/[.02] px-[5px] py-[9px] text-center"
          >
            <div className="font-mono text-[11px] text-ink/[.75]">{r.region}</div>
            <div className="mt-[3px] font-mono text-[8.5px] text-ink/[.38]">{r.detail}</div>
          </div>
        ))}
      </div>

      {/* Connector strip */}
      <div className="grid h-11 grid-cols-3 gap-2">
        <FlowCell delay="0s" />
        <FlowCell delay=".55s" />
        <FlowCell delay="1.1s" />
      </div>

      {/* Account card */}
      <div className="rounded-[9px] border-[1.5px] border-[rgba(229,24,255,.42)] bg-[rgba(8,7,13,.72)] p-[14px] shadow-sb-card">
        <div className="mb-[11px] flex items-baseline justify-between gap-2">
          <span className="text-[12.5px] font-bold tracking-[-.015em]">One account</span>
          <span className="font-mono text-[8.5px] text-ink/[.45]">in your company&apos;s name</span>
        </div>
        <div className="grid grid-cols-2 gap-[6px]">
          {CURRENCIES.map((c) => (
            <div
              key={c.code}
              className="flex items-center gap-[7px] rounded-[5px] bg-ink/[.05] px-[9px] py-2"
            >
              <span className="text-[13px] font-bold leading-none text-lilac">{c.symbol}</span>
              <span className="font-mono text-[10px] text-ink/[.6]">{c.code}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Second connector */}
      <div className="relative h-8">
        <div className="absolute left-1/2 bottom-0 top-0 w-0 border-l-2 border-dotted border-ink/[.22]" />
        <div
          className="absolute left-1/2 top-0 -ml-[2.5px] h-[5px] w-[5px] animate-sbOut rounded-full bg-ink/[.7]"
          style={{ animationDelay: '.3s' }}
        />
      </div>

      {/* Outlined pill */}
      <div className="rounded-full border border-ink/[.14] px-[10px] py-2 text-center font-mono text-[9.5px] text-ink/[.6]">
        Convert, control, send → NIP payout
      </div>
    </div>
  )
}
