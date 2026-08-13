function Chapter({ kicker, desc }) {
  return (
    <div className="grid grid-cols-[14px_1fr] gap-3">
      <div className="flex flex-col items-center">
        <div className="mt-1.5 h-[7px] w-[7px] shrink-0 rounded-full bg-lilac" />
        <div className="w-0 flex-1 border-l-2 border-dotted border-ink/[.22]" />
      </div>
      <div className="pb-[18px]">
        <div className="mb-1.5 font-mono text-[10px] uppercase tracking-[.08em] text-ink/[.5]">
          {kicker}
        </div>
        <div className="text-[14px] leading-[1.6] text-ink/[.68]">{desc}</div>
      </div>
    </div>
  )
}

function FeaturedCard({ header, date, title, chapters, stack, rule }) {
  return (
    <div className="overflow-hidden rounded-[10px] border border-ink/[.14] bg-ink/[.03]">
      <div className={`h-[2px] ${rule}`} />
      <div className="p-[26px]">
        <div className="mb-4 flex items-center justify-between gap-3">
          {header}
          <span className="font-mono text-[9.5px] uppercase tracking-[.08em] text-ink/[.4]">
            {date}
          </span>
        </div>
        <h3 className="mb-[18px] max-w-[24ch] text-[20px] font-bold leading-[1.25] tracking-[-.028em]">
          {title}
        </h3>
        {chapters.map((c) => (
          <Chapter key={c.kicker} {...c} />
        ))}
        <div className="border-t border-ink/[.1] pt-1.5 font-mono text-[10.5px] leading-[1.7] text-ink/[.35]">
          {stack}
        </div>
      </div>
    </div>
  )
}

export default function Featured() {
  return (
    <section className="px-section pb-[62px] pt-2">
      <h2 className="mb-2 text-[30px] font-bold tracking-[-.035em]">
        The two that built the rest
      </h2>
      <p className="mb-[26px] max-w-[60ch] text-[14.5px] leading-[1.6] text-ink/[.5]">
        Neither of these is a line on a résumé. Okra is where the money-rails
        thesis came from, and Varscon is the company the work still runs through —
        both across two separate chapters.
      </p>
      <div className="grid grid-cols-1 gap-4 min-[900px]:grid-cols-2">
        <FeaturedCard
          rule="bg-brand"
          date="Two chapters · 2022—2025"
          header={
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src="/okra-mark.png"
              alt="Okra"
              style={{ height: 21, width: 'auto' }}
              className="block opacity-90"
            />
          }
          title="Where the money-rails thesis came from"
          chapters={[
            {
              kicker: 'Platform Engineer · 2022—24',
              desc: 'Rebuilt SDK delivery for an open-banking API across four African markets. A two-week manual release ritual became a same-day pipeline, and partner integration went from weeks to an afternoon.',
            },
            {
              kicker: 'Senior Backend Engineer, Nebula by Okra · 2025',
              desc: 'Led the Cloud Integration team building cloud-native services for the engineering org — the work was system resilience and availability, and holding the bar on both.',
            },
          ]}
          stack="Flutter · Kotlin / gRPC · Swift · React Native · Cloud-native"
        />
        <FeaturedCard
          rule="bg-brand-rev"
          date="Two chapters · 2021—present"
          header={<span className="text-[19px] font-bold tracking-[-.025em]">Varscon</span>}
          title="The company the work still runs through"
          chapters={[
            {
              kicker: 'Senior Project Manager & Team Lead · 2021—22',
              desc: 'Ran delivery across three engineering pods and owned the client-to-engineering interface nobody else wanted — the role that taught me how software actually gets shipped on a deadline.',
            },
            {
              kicker: 'Building under Varscon · present',
              desc: 'Nwahia ships as a Varscon product, and the MCP platform behind it lets a business train its own structured and unstructured data, then talk to it through Nwahia or an endpoint.',
            },
          ]}
          stack="varscon.com · Agile delivery · Product · Platform"
        />
      </div>
    </section>
  )
}
