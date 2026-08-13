import Glyph from './Glyph'
import SwiftbonVignette from './SwiftbonVignette'
import NwahiaVignette from './NwahiaVignette'

function Metric({ value, label, color }) {
  return (
    <div>
      <div className={`text-[25px] font-bold tracking-[-.025em] ${color}`}>{value}</div>
      <div className="mt-1 font-mono text-[9.5px] uppercase tracking-[.08em] text-ink/[.4]">
        {label}
      </div>
    </div>
  )
}

const cardShell =
  'overflow-hidden rounded-[10px] border border-ink/[.13] bg-ink/[.025]'
const copyPad = 'p-[18px] min-[900px]:p-8'

export default function Ventures() {
  return (
    <section id="ventures" className="px-section pb-2 pt-[66px]">
      <div className="mb-2 flex items-baseline justify-between">
        <h2 className="text-[30px] font-bold tracking-[-.035em]">Selected ventures</h2>
        <span className="font-mono text-[11px] text-ink/[.32]">two in depth</span>
      </div>
      <p className="mb-[30px] max-w-[58ch] text-[14.5px] leading-[1.6] text-ink/[.5]">
        Two live bets on the same thesis — one on the rails, one on the storefront.
      </p>

      {/* Swiftbon — copy left, vignette right */}
      <div className={`${cardShell} mb-[18px]`}>
        <div className="grid grid-cols-1 min-[900px]:grid-cols-[1.05fr_.95fr]">
          <div className={`order-2 min-[900px]:order-none ${copyPad}`}>
            <div className="mb-4 flex flex-wrap items-center gap-3">
              <span className="text-[19px] font-bold tracking-[-.025em]">Swiftbon</span>
              <span className="rounded-full bg-[rgba(229,24,255,.14)] px-[9px] py-1 font-mono text-[10px] tracking-[.04em] text-pink-badge">
                Founder · pre-launch
              </span>
            </div>
            <h3 className="mb-3 max-w-[26ch] text-[23px] font-bold leading-[1.2] tracking-[-.03em]">
              The money rails: one account a Nigerian business can actually get paid into
            </h3>
            <p className="mb-[14px] text-[14.5px] leading-[1.62] text-ink/[.62]">
              Nigerian businesses that earn from clients abroad are stuck between
              domiciliary accounts that make receiving foreign currency slow and
              painful, and consumer wallets that hand you a balance with no controls.
            </p>
            <p className="mb-[22px] text-[14.5px] leading-[1.62] text-ink/[.62]">
              Swiftbon is the account in between. Clients abroad get local details
              on US, UK, EU and Nigerian rails; the money lands in your company&apos;s
              name; then you convert, control and send it with the approval rules a
              finance team actually needs.
            </p>
            <div className="flex gap-[30px] border-t border-ink/[.11] pt-5">
              <Metric value="4" label="Currencies" color="text-lilac" />
              <Metric value="10" label="Payment corridors" color="text-lilac" />
              <Metric value="MSB" label="FINTRAC registered" color="text-lilac" />
            </div>
            <div className="mt-5 font-mono text-[10.5px] leading-[1.7] text-ink/[.35]">
              NGN · USD · GBP · EUR &nbsp;·&nbsp; Global collections · FX conversion ·
              NIP payouts · Treasury API
            </div>
          </div>
          <SwiftbonVignette className="order-1 border-b border-ink/[.13] min-[900px]:order-none min-[900px]:border-b-0 min-[900px]:border-l" />
        </div>
      </div>

      {/* Nwahia — vignette left, copy right */}
      <div className={cardShell}>
        <div className="grid grid-cols-1 min-[900px]:grid-cols-[.95fr_1.05fr]">
          <NwahiaVignette className="border-b border-ink/[.13] min-[900px]:border-b-0 min-[900px]:border-r" />
          <div className={copyPad}>
            <div className="mb-4 flex flex-wrap items-center gap-3">
              <span className="text-[19px] font-bold tracking-[-.025em]">Nwahia</span>
              <span className="rounded-full bg-[rgba(80,19,227,.24)] px-[9px] py-1 font-mono text-[10px] tracking-[.04em] text-periwinkle">
                Founder · private beta · under Varscon
              </span>
            </div>
            <h3 className="mb-3 max-w-[26ch] text-[23px] font-bold leading-[1.2] tracking-[-.03em]">
              The tools: the conversation is the storefront
            </h3>
            <p className="mb-[14px] text-[14.5px] leading-[1.62] text-ink/[.62]">
              African SMEs sell in DMs — WhatsApp, Instagram, TikTok — and as the
              team grows they end up fighting over who has the phone. Context dies
              every time an agent rotates.
            </p>
            <p className="mb-[22px] text-[14.5px] leading-[1.62] text-ink/[.62]">
              Nwahia pulls every channel into one shared inbox: multi-agent support,
              role-based permissions, saved customer profiles, and an assistant you
              customise to keep conversations moving when nobody&apos;s online.
            </p>
            <div className="flex gap-[30px] border-t border-ink/[.11] pt-5">
              <Metric value="6" label="Channels, one inbox" color="text-periwinkle" />
              <Metric value="AWS · Meta" label="Recognised by" color="text-periwinkle" />
            </div>
            <div className="mt-5 flex flex-wrap items-center gap-[14px]">
              {['whatsapp', 'instagram', 'facebook', 'tiktok'].map((ch) => (
                <Glyph key={ch} src={`/icons/${ch}.svg`} alt={ch} size={15} className="opacity-[.55]" />
              ))}
              <span className="font-mono text-[10.5px] text-ink/[.35]">Email · Web chat</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
