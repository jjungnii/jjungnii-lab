/**
 * 포코피아 느낌의 오리지널 꼬마 파트너들 (비상업·실험용 UI).
 * 공식 포켓몬 자산/캐릭터는 사용하지 않습니다.
 */

import type { CritterKind } from './critterKinds'
import { CRITTER_LABELS } from './critterKinds'

type CritterSvgProps = {
  kind: CritterKind
  className?: string
  title?: string
}

export function CritterSvg({ kind, className = 'h-14 w-14', title }: CritterSvgProps) {
  const label = title ?? CRITTER_LABELS[kind]
  return (
    <svg viewBox="0 0 64 64" className={className} role="img" aria-label={label}>
      <title>{label}</title>
      {kind === 'mumu' && <Mumu />}
      {kind === 'blip' && <Blip />}
      {kind === 'zzip' && <Zzip />}
      {kind === 'leafy' && <Leafy />}
      {kind === 'puff' && <Puff />}
      {kind === 'wink' && <Wink />}
    </svg>
  )
}

function Mumu() {
  return (
    <>
      <ellipse cx="22" cy="18" rx="9" ry="11" fill="#fb7185" opacity="0.9" />
      <ellipse cx="42" cy="18" rx="9" ry="11" fill="#fb7185" opacity="0.9" />
      <circle cx="32" cy="38" r="22" fill="#fda4af" stroke="#9f1239" strokeWidth="2.2" />
      <ellipse cx="32" cy="42" rx="14" ry="11" fill="#fecdd3" opacity="0.85" />
      <circle cx="24" cy="36" r="5" fill="white" stroke="#881337" strokeWidth="1.2" />
      <circle cx="40" cy="36" r="5" fill="white" stroke="#881337" strokeWidth="1.2" />
      <circle cx="25" cy="36" r="2.2" fill="#1e293b" />
      <circle cx="41" cy="36" r="2.2" fill="#1e293b" />
      <ellipse cx="20" cy="44" rx="3" ry="2" fill="#fda4af" opacity="0.7" />
      <ellipse cx="44" cy="44" rx="3" ry="2" fill="#fda4af" opacity="0.7" />
      <path
        d="M28 46 Q32 50 36 46"
        fill="none"
        stroke="#9f1239"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </>
  )
}

function Blip() {
  return (
    <>
      <path
        d="M32 8 C48 8 54 24 54 36 C54 50 44 58 32 58 C20 58 10 50 10 36 C10 22 18 8 32 8 Z"
        fill="#38bdf8"
        stroke="#0369a1"
        strokeWidth="2"
      />
      <ellipse cx="32" cy="40" rx="16" ry="14" fill="#7dd3fc" opacity="0.5" />
      <path d="M46 22 L54 12 L52 24 Z" fill="#0ea5e9" stroke="#0369a1" strokeWidth="1.2" />
      <circle cx="26" cy="34" r="4.5" fill="white" stroke="#0369a1" strokeWidth="1" />
      <circle cx="40" cy="34" r="4.5" fill="white" stroke="#0369a1" strokeWidth="1" />
      <circle cx="27" cy="34" r="2" fill="#0f172a" />
      <circle cx="41" cy="34" r="2" fill="#0f172a" />
      <path d="M28 46 Q32 49 36 46" fill="none" stroke="#0369a1" strokeWidth="1.5" strokeLinecap="round" />
      <ellipse cx="32" cy="50" rx="3" ry="1.5" fill="#bae6fd" opacity="0.9" />
    </>
  )
}

function Zzip() {
  return (
    <>
      <path
        d="M18 14 L24 6 L28 14 L34 4 L38 14 L46 8 L44 18 L52 20 L44 26 L48 32 L40 30 L38 40 L32 32 L26 40 L24 30 L16 32 L20 26 L12 22 L20 18 Z"
        fill="#facc15"
        stroke="#a16207"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <circle cx="32" cy="40" r="20" fill="#fde047" stroke="#a16207" strokeWidth="2" />
      <circle cx="25" cy="38" r="5" fill="white" stroke="#854d0e" strokeWidth="1" />
      <circle cx="39" cy="38" r="5" fill="white" stroke="#854d0e" strokeWidth="1" />
      <circle cx="26" cy="38" r="2.2" fill="#1e293b" />
      <circle cx="40" cy="38" r="2.2" fill="#1e293b" />
      <path d="M30 46 Q32 48 34 46" fill="none" stroke="#854d0e" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="44" cy="36" r="2.5" fill="#f97316" opacity="0.9" />
    </>
  )
}

function Leafy() {
  return (
    <>
      <path
        d="M32 6 C40 10 46 18 46 28 C46 38 40 46 32 50 C24 46 18 38 18 28 C18 16 24 8 32 6 Z"
        fill="#4ade80"
        stroke="#166534"
        strokeWidth="2"
      />
      <path d="M32 12 C28 18 26 26 28 34" fill="none" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" />
      <circle cx="32" cy="36" r="18" fill="#86efac" stroke="#166534" strokeWidth="2" />
      <ellipse cx="32" cy="40" rx="12" ry="10" fill="#bbf7d0" opacity="0.6" />
      <circle cx="25" cy="36" r="4.5" fill="white" stroke="#166534" strokeWidth="1" />
      <circle cx="39" cy="36" r="4.5" fill="white" stroke="#166534" strokeWidth="1" />
      <circle cx="26" cy="36" r="2" fill="#14532d" />
      <circle cx="40" cy="36" r="2" fill="#14532d" />
      <path d="M28 44 Q32 47 36 44" fill="none" stroke="#14532d" strokeWidth="1.5" strokeLinecap="round" />
    </>
  )
}

function Puff() {
  return (
    <>
      <circle cx="22" cy="28" r="14" fill="#e9d5ff" stroke="#7e22ce" strokeWidth="1.8" />
      <circle cx="42" cy="28" r="14" fill="#ddd6fe" stroke="#7e22ce" strokeWidth="1.8" />
      <circle cx="32" cy="20" r="12" fill="#f5d0fe" stroke="#7e22ce" strokeWidth="1.8" />
      <ellipse cx="32" cy="42" rx="18" ry="16" fill="#ede9fe" stroke="#6b21a8" strokeWidth="2" />
      <circle cx="26" cy="40" r="4" fill="white" stroke="#5b21b6" strokeWidth="1" />
      <circle cx="38" cy="40" r="4" fill="white" stroke="#5b21b6" strokeWidth="1" />
      <circle cx="27" cy="40" r="1.8" fill="#1e293b" />
      <circle cx="39" cy="40" r="1.8" fill="#1e293b" />
      <path d="M28 48 Q32 51 36 48" fill="none" stroke="#5b21b6" strokeWidth="1.5" strokeLinecap="round" />
    </>
  )
}

function Wink() {
  return (
    <>
      <rect x="12" y="18" width="40" height="36" rx="16" fill="#fda4af" stroke="#9f1239" strokeWidth="2" />
      <ellipse cx="32" cy="36" rx="14" ry="12" fill="#fecdd3" opacity="0.7" />
      <circle cx="25" cy="34" r="5" fill="white" stroke="#9f1239" strokeWidth="1" />
      <circle cx="26" cy="34" r="2.2" fill="#0f172a" />
      <path d="M36 32 Q40 34 36 36" fill="none" stroke="#9f1239" strokeWidth="2" strokeLinecap="round" />
      <path d="M26 44 Q32 48 38 44" fill="none" stroke="#9f1239" strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="44" cy="26" r="4" fill="#fef08a" stroke="#ca8a04" strokeWidth="1.2" />
    </>
  )
}

export function CritterParty({ className }: { className?: string }) {
  return (
    <div className={`flex items-end justify-center gap-1 sm:gap-2 ${className ?? ''}`}>
      {(['mumu', 'blip', 'zzip'] as const).map((k, i) => (
        <div
          key={k}
          className="motion-safe:animate-bounce"
          style={{ animationDuration: '2.2s', animationDelay: `${i * 0.15}s` }}
        >
          <CritterSvg kind={k} className="h-12 w-12 drop-shadow sm:h-14 sm:w-14" />
        </div>
      ))}
    </div>
  )
}
