import { ImageResponse } from '@vercel/og'

export const config = { runtime: 'edge' }

// 1200×630 link-preview card: the name lockup on the near-black page with the
// signature gradient rule, per the launch spec. Note Satori (the render engine)
// only takes a solid backgroundColor plus a single backgroundImage gradient,
// and every element with more than one child must set display:flex.
export default function handler() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          backgroundColor: '#0b0a12',
          padding: '72px 80px',
          fontFamily: 'sans-serif',
        }}
      >
        {/* Gradient glow overlay */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: 'flex',
            backgroundImage:
              'radial-gradient(60% 80% at 85% 0%, rgba(229,24,255,.22) 0%, rgba(11,10,18,0) 55%)',
          }}
        />

        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div
            style={{
              width: 18,
              height: 18,
              borderRadius: 99,
              marginRight: 16,
              backgroundImage: 'linear-gradient(96deg, #5013e3, #e518ff)',
            }}
          />
          <div
            style={{
              fontSize: 30,
              fontWeight: 700,
              color: '#eceaf3',
              letterSpacing: '-0.02em',
            }}
          >
            Kosi Nzeako
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            fontSize: 58,
            fontWeight: 700,
            color: '#eceaf3',
            lineHeight: 1.1,
            letterSpacing: '-0.035em',
            maxWidth: 960,
          }}
        >
          Serial founder building the tools — and the money rails — for Nigerian
          businesses.
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              width: 220,
              height: 4,
              borderRadius: 99,
              marginBottom: 22,
              backgroundImage: 'linear-gradient(96deg, #5013e3, #e518ff)',
            }}
          />
          <div style={{ display: 'flex', fontSize: 24, color: 'rgba(236,234,243,.55)' }}>
            Swiftbon · Nwahia · Esusu · nzeakokosi.com
          </div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  )
}
