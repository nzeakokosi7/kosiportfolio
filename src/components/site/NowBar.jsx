export default function NowBar() {
  return (
    <div className="px-section flex flex-col gap-2 border-b border-ink/[.09] bg-ink/[.02] py-[22px] min-[900px]:flex-row min-[900px]:flex-wrap min-[900px]:items-center min-[900px]:gap-[18px]">
      <span className="font-mono text-[9.5px] uppercase tracking-[.14em] text-lilac">
        Now
      </span>
      <span className="text-[14px] leading-[1.5] text-ink/[.7]">
        Full-stack on rent reporting &amp; identity at{' '}
        <span className="text-ink">Esusu</span> ·{' '}
        <span className="text-ink">Swiftbon</span> pre-launch,
        FINTRAC-registered · <span className="text-ink">Nwahia</span> in private
        beta
      </span>
    </div>
  )
}
