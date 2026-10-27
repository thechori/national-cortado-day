// A Gibraltar glass drawn in SVG. `milk` is the fraction (0–1) of the
// liquid that is steamed milk; the rest is espresso.
const LIQUID_TOP = 58;
const LIQUID_BOTTOM = 212;
const LIQUID_HEIGHT = LIQUID_BOTTOM - LIQUID_TOP;

export function Glass({
  milk,
  pour = false,
  className
}: {
  milk: number;
  pour?: boolean;
  className?: string;
}) {
  const espressoOffset = LIQUID_HEIGHT * milk;

  return (
    <svg
      viewBox="0 0 220 250"
      className={className}
      role="img"
      aria-label={`A glass that is ${Math.round(milk * 100)}% steamed milk and ${Math.round((1 - milk) * 100)}% espresso`}
    >
      <defs>
        <clipPath id="glass-inside">
          <path d="M40 30 H180 L164 212 Q163 216 158 216 H62 Q57 216 56 212 Z" />
        </clipPath>
        <linearGradient id="espresso-fill" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="#6B3A1F" />
          <stop offset="0.25" stopColor="#4A2617" />
          <stop offset="1" stopColor="#2E170E" />
        </linearGradient>
        <linearGradient id="milk-fill" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="#FFFDF8" />
          <stop offset="1" stopColor="#E9CFA9" />
        </linearGradient>
      </defs>

      {pour && (
        <rect
          className="pour-stream"
          x="104"
          y="-10"
          width="12"
          height="90"
          rx="6"
          fill="#FFF7EC"
        />
      )}

      <g clipPath="url(#glass-inside)">
        <rect
          className={pour ? "milk-rise" : "liquid-shift"}
          style={
            {
              "--start": `${espressoOffset}px`
            } as React.CSSProperties
          }
          x="30"
          y={LIQUID_TOP}
          width="160"
          height={LIQUID_HEIGHT}
          fill="url(#milk-fill)"
        />
        <g
          className="liquid-shift"
          style={{ transform: `translateY(${espressoOffset}px)` }}
        >
          <rect
            x="30"
            y={LIQUID_TOP}
            width="160"
            height={LIQUID_HEIGHT + 4}
            fill="url(#espresso-fill)"
          />
          <rect
            x="30"
            y={LIQUID_TOP - 2}
            width="160"
            height="9"
            fill="#C98536"
            opacity={milk > 0.02 ? 0.85 : 1}
          />
        </g>
        {/* foam cap sits on whatever is on top */}
        <rect
          x="30"
          y={LIQUID_TOP - 4}
          width="160"
          height="6"
          fill={milk > 0.02 ? "#FFFFFF" : "#D9964A"}
          className={pour ? "foam-fade" : undefined}
        />
      </g>

      {/* glass: faceted body, thick base, highlight */}
      <path
        d="M40 30 H180 L164 212 Q163 216 158 216 H62 Q57 216 56 212 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinejoin="round"
      />
      <path
        d="M53 216 Q52 236 72 236 H148 Q168 236 167 216"
        fill="rgba(255,255,255,0.18)"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinejoin="round"
      />
      <path
        d="M42 112 H178"
        stroke="currentColor"
        strokeWidth="2.5"
        opacity="0.45"
      />
      <path
        d="M62 44 L58 92"
        stroke="#FFFFFF"
        strokeWidth="6"
        strokeLinecap="round"
        opacity="0.55"
      />
    </svg>
  );
}
