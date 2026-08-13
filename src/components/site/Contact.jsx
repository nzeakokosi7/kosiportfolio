import { useState } from 'react'
import { SITE } from '@/data/content'

const fieldClass =
  'w-full min-h-[48px] rounded-[9px] border border-ink/[.2] bg-ink/[.025] px-4 py-3 text-[14px] text-ink placeholder:text-ink/[.4] outline-none transition-colors focus:border-magenta'

export default function Contact() {
  const [status, setStatus] = useState('idle') // idle | submitting | success | error
  const [error, setError] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()
    if (!SITE.formspreeId) {
      setStatus('error')
      setError('The form isn’t wired up yet — email me directly for now.')
      return
    }
    setStatus('submitting')
    setError('')
    const form = e.currentTarget
    const data = new FormData(form)
    try {
      const res = await fetch(`https://formspree.io/f/${SITE.formspreeId}`, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })
      if (res.ok) {
        setStatus('success')
        form.reset()
      } else {
        const body = await res.json().catch(() => ({}))
        setStatus('error')
        setError(body?.errors?.[0]?.message || 'Something went wrong. Please try again.')
      }
    } catch {
      setStatus('error')
      setError('Network error. Please try again, or email me directly.')
    }
  }

  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-ink/[.09] px-section pb-[60px] pt-[72px]"
      style={{
        background:
          'radial-gradient(80% 130% at 50% 0%,rgba(80,19,227,.22) 0%,transparent 60%),#08070d',
      }}
    >
      <div
        className="pointer-events-none absolute left-1/2 top-10 h-0 w-[300px] border-t-2 border-dotted border-[rgba(229,24,255,.3)]"
        style={{ transform: 'rotate(18deg)', transformOrigin: 'left center' }}
      />

      <div className="relative mx-auto mb-[34px] max-w-[34ch] text-center">
        <h2 className="mb-[14px] text-[34px] font-bold leading-[1.12] tracking-[-.038em]">
          Building something for this market? Let&apos;s compare notes.
        </h2>
        <p className="m-0 text-[15px] leading-[1.6] text-ink/[.55]">
          Hiring, partnering, or just want to argue about settlement
          infrastructure — I read everything.
        </p>
      </div>

      <div className="relative mb-9 flex flex-col justify-center gap-[11px] min-[900px]:flex-row min-[900px]:flex-wrap">
        <a
          href={`mailto:${SITE.email}`}
          className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-brand px-[26px] text-[14.5px] font-semibold text-white transition-[filter] hover:brightness-[1.15]"
        >
          {SITE.email}
        </a>
        <a
          href={SITE.bookingUrl}
          className="inline-flex min-h-[48px] items-center justify-center rounded-full border border-ink/[.22] px-6 text-[14.5px] font-medium text-ink transition-colors hover:border-ink/[.55]"
        >
          Book 20 minutes
        </a>
      </div>

      {/* Contact form */}
      <form
        id="contact-form"
        onSubmit={handleSubmit}
        className="relative mx-auto flex max-w-[520px] scroll-mt-24 flex-col gap-[10px]"
      >
        <div className="flex flex-col gap-[10px] min-[560px]:flex-row">
          <input
            className={fieldClass}
            type="text"
            name="name"
            placeholder="Your name"
            required
            autoComplete="name"
          />
          <input
            className={fieldClass}
            type="email"
            name="email"
            placeholder="Email"
            required
            autoComplete="email"
          />
        </div>
        <textarea
          className={`${fieldClass} min-h-[120px] resize-y`}
          name="message"
          placeholder="What are you building?"
          rows={4}
          required
        />
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="mt-1 inline-flex min-h-[48px] items-center justify-center rounded-full bg-brand px-[26px] text-[14.5px] font-semibold text-white transition-[filter] hover:brightness-[1.15] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === 'submitting' ? 'Sending…' : 'Send message'}
        </button>

        <div aria-live="polite" className="min-h-[20px] text-center text-[13px]">
          {status === 'success' && (
            <span className="text-signal-green">
              Thanks — your message is in. I&apos;ll get back to you soon.
            </span>
          )}
          {status === 'error' && <span className="text-pink-badge">{error}</span>}
        </div>
      </form>
    </section>
  )
}
