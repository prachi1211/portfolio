import React from "react";

const HAIR = "#13111a";
const HAIR_HILITE = "#2c2640";
const SKIN = "#e7b692";
const GLASSES = "#161420";

export function AvatarBody() {
  return (
    <svg
      className="hero-avatar-svg"
      viewBox="0 0 300 300"
      preserveAspectRatio="xMidYMid slice"
      role="img"
      aria-label="Illustrated avatar of Prachi typing on her laptop"
    >
      <defs>
        <radialGradient id="avatarBg" cx="50%" cy="30%" r="80%">
          <stop offset="0%" stopColor="#3a2a5e" />
          <stop offset="100%" stopColor="#1f1742" />
        </radialGradient>
        <linearGradient id="hoodieGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#c084fc" />
          <stop offset="100%" stopColor="#9333ea" />
        </linearGradient>
      </defs>

      <rect width="300" height="300" fill="url(#avatarBg)" />

      {/* sparkles — curious mind */}
      <path
        d="M32 280 L35 288 L43 291 L35 294 L32 302 L29 294 L21 291 L29 288 Z"
        fill="#2dd4bf"
        opacity="0.7"
      />
      <circle cx="268" cy="284" r="3.5" fill="#ec4899" opacity="0.7" />

      {/* hoodie / shoulders */}
      <path
        d="M84 300 C84 224 110 188 150 188 C190 188 216 224 216 300 Z"
        fill="url(#hoodieGrad)"
      />
      <path
        d="M150 188 C140 188 131 192 124 198 L132 222 L150 214 L168 222 L176 198 C169 192 160 188 150 188 Z"
        fill="#a855f7"
      />

      {/* laptop */}
      <rect x="103" y="234" width="94" height="6" rx="3" fill="#3d2e63" />
      <path d="M100 240 L200 240 L210 268 L90 268 Z" fill="#ece7f7" />
      <rect
        x="116"
        y="186"
        width="68"
        height="50"
        rx="5"
        fill="#1a1330"
        stroke="#3d2e63"
        strokeWidth="2"
      />
      <text
        x="150"
        y="216"
        fontFamily="'Space Grotesk', monospace"
        fontSize="15"
        fill="#2dd4bf"
        textAnchor="middle"
      >
        {"</>"}
      </text>

      {/* hands typing */}
      <ellipse cx="128" cy="253" rx="9" ry="6" fill={SKIN} />
      <ellipse cx="170" cy="253" rx="9" ry="6" fill={SKIN} />
    </svg>
  );
}

export function AvatarPeek() {
  return (
    <svg
      className="hero-avatar-peek-svg"
      viewBox="0 0 260 280"
      role="img"
      aria-label="Prachi peeking out and waving hello"
    >
      {/* long curly hair — big bushy back volume */}
      <ellipse cx="130" cy="90" rx="100" ry="85" fill={HAIR} />
      <circle cx="72" cy="38" r="17" fill={HAIR} />
      <circle cx="100" cy="18" r="18" fill={HAIR} />
      <circle cx="130" cy="10" r="19" fill={HAIR} />
      <circle cx="160" cy="18" r="18" fill={HAIR} />
      <circle cx="188" cy="38" r="17" fill={HAIR} />
      <circle cx="50" cy="78" r="24" fill={HAIR} />
      <circle cx="210" cy="78" r="24" fill={HAIR} />
      <circle cx="68" cy="108" r="17" fill={HAIR} />
      <circle cx="192" cy="108" r="17" fill={HAIR} />

      {/* subtle dark highlight streaks for dimension (still black hair) */}
      <path
        d="M70,40 Q92,70 76,112"
        stroke={HAIR_HILITE}
        strokeWidth="6"
        fill="none"
        strokeLinecap="round"
        opacity="0.55"
      />
      <path
        d="M190,40 Q168,70 184,112"
        stroke={HAIR_HILITE}
        strokeWidth="6"
        fill="none"
        strokeLinecap="round"
        opacity="0.55"
      />

      {/* long open curly strands flowing past the shoulders */}
      <path
        d="M46,118 C28,160 24,208 38,252 C44,270 62,278 78,272 C66,236 62,190 70,143 C73,123 62,110 46,118 Z"
        fill={HAIR}
      />
      <path
        d="M214,118 C232,160 236,208 222,252 C216,270 198,278 182,272 C194,236 198,190 190,143 C187,123 198,110 214,118 Z"
        fill={HAIR}
      />
      <circle cx="38" cy="150" r="16" fill={HAIR} />
      <circle cx="44" cy="190" r="18" fill={HAIR} />
      <circle cx="40" cy="228" r="15" fill={HAIR} />
      <circle cx="50" cy="260" r="13" fill={HAIR} />
      <circle cx="222" cy="150" r="16" fill={HAIR} />
      <circle cx="216" cy="190" r="18" fill={HAIR} />
      <circle cx="220" cy="228" r="15" fill={HAIR} />
      <circle cx="210" cy="260" r="13" fill={HAIR} />

      {/* hoodie collar peeking up (same color as the body layer below) */}
      <path
        d="M64,280 C64,225 93,205 130,205 C167,205 196,225 196,280 Z"
        fill="#a855f7"
      />

      {/* face */}
      <circle cx="130" cy="150" r="41" fill={SKIN} />

      {/* curls framing the forehead */}
      <circle cx="90" cy="126" r="15" fill={HAIR} />
      <circle cx="170" cy="126" r="15" fill={HAIR} />

      {/* neck */}
      <rect x="118" y="186" width="24" height="26" rx="9" fill="#caa07a" />

      {/* eyebrows */}
      <path d="M98,120 Q112,113 126,120" stroke={HAIR} strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M134,120 Q148,113 162,120" stroke={HAIR} strokeWidth="3" fill="none" strokeLinecap="round" />

      {/* glasses — thick black rounded-rectangle frame */}
      <rect x="95" y="131" width="34" height="28" rx="10" fill="none" stroke={GLASSES} strokeWidth="4" />
      <rect x="131" y="131" width="34" height="28" rx="10" fill="none" stroke={GLASSES} strokeWidth="4" />
      <line x1="129" y1="145" x2="131" y2="145" stroke={GLASSES} strokeWidth="4" />
      <line x1="95" y1="138" x2="85" y2="132" stroke={GLASSES} strokeWidth="4" strokeLinecap="round" />
      <line x1="165" y1="138" x2="175" y2="132" stroke={GLASSES} strokeWidth="4" strokeLinecap="round" />

      {/* eyes */}
      <circle cx="112" cy="146" r="3" fill="#1a1330" />
      <circle cx="148" cy="146" r="3" fill="#1a1330" />

      {/* big joyful smile with teeth */}
      <path
        d="M108,160 Q130,182 152,160 Q130,168 108,160 Z"
        fill="#3a2418"
      />
      <path
        d="M113,160 Q130,170 147,160 Q130,164 113,160 Z"
        fill="#ffffff"
      />

      {/* blush */}
      <circle cx="100" cy="155" r="5" fill="#ec4899" opacity="0.25" />
      <circle cx="160" cy="155" r="5" fill="#ec4899" opacity="0.25" />

      {/* waving hand */}
      <g transform="rotate(-10 207 92)">
        <rect x="195" y="100" width="26" height="24" rx="9" fill="#a855f7" />
        <ellipse cx="207" cy="92" rx="17" ry="20" fill={SKIN} />
        <ellipse cx="195" cy="62" rx="5.5" ry="15" fill={SKIN} />
        <ellipse cx="205" cy="56" rx="5.5" ry="16" fill={SKIN} />
        <ellipse cx="216" cy="59" rx="5.5" ry="15" fill={SKIN} />
        <ellipse cx="224" cy="67" rx="5.5" ry="13" fill={SKIN} />
      </g>

      {/* little "hi" sparkles by the wave */}
      <circle cx="240" cy="42" r="3.5" fill="#2dd4bf" opacity="0.8" />
      <circle cx="248" cy="58" r="2.5" fill="#ec4899" opacity="0.6" />
    </svg>
  );
}
