import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'

export function PlaygroundLab() {
  const [hue, setHue] = useState(175)
  const [radius, setRadius] = useState(24)
  const [blur, setBlur] = useState(12)

  const previewStyle = useMemo(
    () => ({
      background: `linear-gradient(135deg, hsl(${hue} 85% 52%), hsl(${(hue + 40) % 360} 70% 40%))`,
      borderRadius: `${radius}px`,
      boxShadow: `0 ${blur}px ${blur * 2}px rgba(0, 0, 0, 0.45)`,
    }),
    [hue, radius, blur],
  )

  return (
    <div className="space-y-10">
      <div>
        <Link
          to="/"
          className="font-mono text-sm text-zinc-500 transition-colors hover:text-cyan-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-500"
        >
          ← 대시보드로
        </Link>
        <h1 className="mt-4 text-2xl font-semibold tracking-tight text-zinc-50 sm:text-3xl">
          Playground
        </h1>
        <p className="mt-2 max-w-lg text-zinc-400">
          슬라이더로 그라데이션과 모양을 바꿔 보는 작은 데모입니다. 다른 실험
          페이지도 같은 패턴으로 추가하면 됩니다.
        </p>
      </div>

      <div className="grid gap-10 lg:grid-cols-[1fr_minmax(0,280px)] lg:items-start">
        <div
          className="flex min-h-[220px] items-center justify-center rounded-xl border border-lab-border bg-lab-surface/60 p-8 sm:min-h-[280px]"
          aria-live="polite"
        >
          <div
            className="h-36 w-full max-w-xs transition-[border-radius,box-shadow] duration-200 sm:h-44"
            style={previewStyle}
            role="img"
            aria-label="슬라이더 설정에 따른 미리보기 블록"
          />
        </div>

        <div className="space-y-6 rounded-xl border border-lab-border bg-lab-elevated/50 p-6">
          <Slider
            id="hue"
            label="색상 (hue)"
            min={0}
            max={360}
            value={hue}
            onChange={setHue}
            display={`${hue}°`}
          />
          <Slider
            id="radius"
            label="모서리 둥글기"
            min={0}
            max={64}
            value={radius}
            onChange={setRadius}
            display={`${radius}px`}
          />
          <Slider
            id="blur"
            label="그림자 번짐"
            min={0}
            max={48}
            value={blur}
            onChange={setBlur}
            display={`${blur}px`}
          />
        </div>
      </div>
    </div>
  )
}

type SliderProps = {
  id: string
  label: string
  min: number
  max: number
  value: number
  onChange: (n: number) => void
  display: string
}

function Slider({ id, label, min, max, value, onChange, display }: SliderProps) {
  return (
    <div className="space-y-2">
      <div className="flex items-baseline justify-between gap-2">
        <label htmlFor={id} className="text-sm font-medium text-zinc-300">
          {label}
        </label>
        <span className="font-mono text-xs text-cyan-400/90">{display}</span>
      </div>
      <input
        id={id}
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="h-2 w-full cursor-pointer appearance-none rounded-full bg-zinc-800 accent-cyan-500"
      />
    </div>
  )
}
