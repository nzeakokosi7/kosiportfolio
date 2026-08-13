/**
 * A monochrome brand/platform glyph. The source SVGs are black-on-transparent
 * (simple-icons); `filter: invert(1)` renders them white on the dark page.
 */
export default function Glyph({ src, alt = '', size = 15, className = '', style }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      title={alt || undefined}
      width={size}
      height={size}
      style={{ width: size, height: size, ...style }}
      className={`block shrink-0 invert ${className}`}
    />
  )
}
