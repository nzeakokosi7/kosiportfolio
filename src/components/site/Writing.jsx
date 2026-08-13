import { WRITING, SITE } from '@/data/content'

export default function Writing() {
  return (
    <section
      id="writing"
      className="px-section border-t border-ink/[.09] bg-ink/[.02] py-14"
    >
      <div className="mb-6 flex items-baseline justify-between">
        <h2 className="text-[26px] font-bold tracking-[-.035em]">Writing &amp; speaking</h2>
        <a
          href={SITE.blog}
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-[11px] text-lilac"
        >
          all posts →
        </a>
      </div>
      <div className="grid grid-cols-1 gap-[14px] min-[900px]:grid-cols-3">
        {WRITING.map((post) => (
          <a
            key={post.title}
            href={post.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col gap-[11px] rounded-[9px] border border-ink/[.12] p-[22px] text-inherit no-underline transition-colors hover:border-[rgba(229,24,255,.5)]"
          >
            <span className="font-mono text-[9.5px] uppercase tracking-[.1em] text-ink/[.38]">
              {post.kicker}
            </span>
            <span className="text-[15.5px] font-semibold leading-[1.35] tracking-[-.02em]">
              {post.title}
            </span>
            <span className="mt-auto font-mono text-[10.5px] text-ink/[.35]">{post.meta}</span>
          </a>
        ))}
      </div>
    </section>
  )
}
