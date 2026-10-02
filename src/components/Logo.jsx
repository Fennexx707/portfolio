// Custom logo: a hexagon with a heartbeat line and the letter N (original artwork)
export default function Logo({ size = 40 }) {
  return (
    <svg
      className="logo-mark"
      width={size}
      height={size}
      viewBox="0 0 64 64"
      role="img"
      aria-label="Nuha logo"
    >
      <polygon points="32,3 58,18 58,46 32,61 6,46 6,18" fill="#0E6B6B" />
      <path
        d="M10 38h10l4-10 6 18 5-14 4 6h15"
        fill="none"
        stroke="#FF7A59"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <text x="32" y="26" textAnchor="middle" fontSize="17" fontWeight="700" fill="#fff" fontFamily="Bricolage Grotesque, sans-serif">
        N
      </text>
    </svg>
  )
}
