import { useCallback, useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ALL_STOCK_IDS,
  MOCK_DECKS,
  MOCK_STOCKS,
  type MockStock,
  type Rarity,
  drawStocksFromDeck,
  getDailyBriefing,
  loadDex,
  saveDex,
} from '../data/pokopiaStockMock'

function initialDex(): Set<string> {
  if (typeof window === 'undefined') return new Set()
  return loadDex()
}

const CARD_COUNT = 4

function rarityStyle(r: Rarity): string {
  switch (r) {
    case 'common':
      return 'border-[3px] border-white/80 bg-white/95 shadow-[6px_6px_0_0_rgba(15,23,42,0.12)]'
    case 'rare':
      return 'border-[3px] border-sky-400 bg-gradient-to-br from-sky-50 to-cyan-100 shadow-[6px_6px_0_0_rgba(14,165,233,0.35)]'
    case 'legendary':
      return 'border-[3px] border-amber-400 bg-gradient-to-br from-amber-50 via-yellow-100 to-orange-100 shadow-[6px_6px_0_0_rgba(245,158,11,0.45)]'
  }
}

function Sparkline({ prices, className }: { prices: number[]; className?: string }) {
  const { d, last } = useMemo(() => {
    const min = Math.min(...prices)
    const max = Math.max(...prices)
    const pad = max === min ? 1 : 0
    const w = 120
    const h = 40
    const pts = prices.map((p, i) => {
      const x = (i / (prices.length - 1 || 1)) * w
      const t = (p - min + pad) / (max - min + pad * 2 || 1)
      const y = h - t * (h - 6) - 3
      return `${x},${y}`
    })
    return { d: pts.join(' '), last: prices[prices.length - 1] }
  }, [prices])

  return (
    <div className={className}>
      <svg viewBox="0 0 120 40" className="h-10 w-full max-w-[120px]" aria-hidden>
        <polyline
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          points={d}
          className="text-fuchsia-500/90"
        />
      </svg>
      <p className="mt-1 text-right font-mono text-[10px] font-medium text-slate-500">
        최근(목) · {last.toFixed(2)}
      </p>
    </div>
  )
}

function MoodDot({ mood }: { mood: 'up' | 'down' | 'flat' }) {
  const color =
    mood === 'up' ? 'bg-emerald-400' : mood === 'down' ? 'bg-rose-400' : 'bg-slate-300'
  return <span className={`inline-block size-2 rounded-full ${color}`} aria-hidden />
}

export function PokopiaStockLab() {
  const briefing = useMemo(() => getDailyBriefing(), [])
  const spotlight = MOCK_STOCKS[briefing.spotlightStockId]

  const [dex, setDex] = useState<Set<string>>(() => initialDex())

  const registerDex = useCallback((stocks: MockStock[]) => {
    setDex((prev) => {
      const next = new Set(prev)
      for (const s of stocks) next.add(s.id)
      saveDex(next)
      return next
    })
  }, [])

  const [selectedDeckId, setSelectedDeckId] = useState<string | null>(MOCK_DECKS[0]?.id ?? null)
  const [drawn, setDrawn] = useState<MockStock[] | null>(null)
  const [flipped, setFlipped] = useState<Record<string, boolean>>({})
  const [revealStep, setRevealStep] = useState(0)

  const openDeck = () => {
    if (!selectedDeckId) return
    const cards = drawStocksFromDeck(selectedDeckId, CARD_COUNT)
    setDrawn(cards)
    setFlipped({})
    setRevealStep(0)
    registerDex(cards)
  }

  useEffect(() => {
    if (!drawn?.length) return
    if (revealStep >= drawn.length) return
    const t = window.setTimeout(() => setRevealStep((s) => s + 1), 220)
    return () => window.clearTimeout(t)
  }, [drawn, revealStep])

  const toggleFlip = (id: string) => {
    setFlipped((f) => ({ ...f, [id]: !f[id] }))
  }

  return (
    <div className="min-h-[calc(100vh-8rem)] rounded-3xl border-4 border-white/60 bg-gradient-to-b from-pink-200/95 via-violet-200/90 to-sky-200/95 p-4 shadow-inner shadow-white/40 sm:p-6">
      <Link
        to="/"
        className="inline-flex items-center gap-1 rounded-full bg-white/80 px-3 py-1 text-sm font-semibold text-violet-700 shadow-sm ring-2 ring-violet-200/80 transition hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-500"
      >
        ← 실험실 홈
      </Link>

      <header className="mt-5 text-center">
        <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-violet-600/90">
          ★ pokopia stock ★
        </p>
        <h1 className="mt-2 text-2xl font-extrabold tracking-tight text-slate-800 sm:text-3xl">
          오늘의 시장 도감
        </h1>
        <p className="mx-auto mt-2 max-w-md text-sm font-medium text-slate-600">
          투자 권유가 아니라 <span className="text-fuchsia-600">공부용 실험</span>이에요. 목 데이터로
          연출만 먼저 올렸어요 ♪
        </p>
      </header>

      {/* 박사님 */}
      <section
        className="relative mx-auto mt-8 max-w-3xl overflow-hidden rounded-3xl border-4 border-white bg-gradient-to-r from-yellow-100 via-amber-50 to-orange-100 p-5 shadow-[8px_8px_0_0_rgba(251,191,36,0.35)]"
        aria-labelledby="professor-heading"
      >
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
          <div
            className="flex size-20 shrink-0 items-center justify-center rounded-2xl border-4 border-amber-300 bg-white text-4xl shadow-md"
            aria-hidden
          >
            🧑‍🔬
          </div>
          <div className="min-w-0 flex-1 space-y-3">
            <h2 id="professor-heading" className="text-lg font-extrabold text-amber-900">
              박사님의 오늘 브리핑
            </h2>
            <div className="rounded-2xl border-2 border-dashed border-amber-300/80 bg-white/90 px-4 py-3 text-sm leading-relaxed text-slate-700">
              <p className="font-bold text-amber-800">{briefing.headline}</p>
              <p className="mt-1">{briefing.body}</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {briefing.indicators.map((ind) => (
                <div
                  key={ind.label}
                  className="inline-flex items-center gap-2 rounded-full border-2 border-white bg-white/90 px-3 py-1 text-xs font-bold text-slate-700 shadow-sm"
                >
                  <MoodDot mood={ind.mood} />
                  <span className="text-slate-500">{ind.label}</span>
                  <span>{ind.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {spotlight && (
          <div className="mt-5 rounded-2xl border-4 border-fuchsia-300 bg-gradient-to-br from-fuchsia-50 to-pink-100 p-4">
            <p className="text-center font-mono text-[10px] font-bold uppercase tracking-widest text-fuchsia-700">
              오늘의 스포트라이트 종목
            </p>
            <div className="mt-2 flex flex-col items-center gap-2 sm:flex-row sm:justify-between sm:gap-4">
              <div className="text-center sm:text-left">
                <p className="text-xl font-black text-slate-800">{spotlight.name}</p>
                <p className="font-mono text-sm text-fuchsia-700">{spotlight.symbol}</p>
                <p className="mt-1 text-xs text-slate-600">{spotlight.tagline}</p>
              </div>
              <Sparkline prices={spotlight.prices} className="w-full max-w-[140px]" />
            </div>
          </div>
        )}
      </section>

      {/* 덱 선택 */}
      <section className="mx-auto mt-10 max-w-3xl space-y-4">
        <h2 className="text-center text-sm font-extrabold uppercase tracking-widest text-violet-700">
          덱을 골라요 · 카드 {CARD_COUNT}장
        </h2>
        <div className="grid gap-3 sm:grid-cols-3">
          {MOCK_DECKS.map((deck) => {
            const on = selectedDeckId === deck.id
            return (
              <button
                key={deck.id}
                type="button"
                onClick={() => setSelectedDeckId(deck.id)}
                className={`rounded-2xl border-4 p-4 text-left transition ${
                  on
                    ? 'border-violet-600 bg-white shadow-[6px_6px_0_0_rgba(124,58,237,0.35)]'
                    : 'border-white/80 bg-white/70 hover:border-violet-300'
                }`}
              >
                <span className="text-2xl" aria-hidden>
                  {deck.emoji}
                </span>
                <p className="mt-2 font-extrabold text-slate-800">{deck.title}</p>
                <p className="mt-1 text-xs font-medium text-slate-600">{deck.blurb}</p>
              </button>
            )
          })}
        </div>
        <div className="flex justify-center">
          <button
            type="button"
            onClick={openDeck}
            disabled={!selectedDeckId}
            className="rounded-full border-4 border-slate-800 bg-gradient-to-r from-pink-400 to-fuchsia-500 px-8 py-3 text-sm font-extrabold uppercase tracking-wide text-white shadow-[6px_6px_0_0_rgba(15,23,42,0.85)] transition enabled:hover:translate-y-0.5 enabled:hover:shadow-[4px_4px_0_0_rgba(15,23,42,0.85)] disabled:opacity-40"
          >
            덱 열기! ✨
          </button>
        </div>
      </section>

      {/* 뽑은 카드 */}
      {drawn && drawn.length > 0 && (
        <section className="mx-auto mt-10 max-w-4xl">
          <h2 className="mb-4 text-center text-sm font-extrabold uppercase tracking-widest text-slate-700">
            오늘의 카드
          </h2>
          <ul className="grid gap-4 sm:grid-cols-2">
            {drawn.map((stock, i) => {
              const visible = i < revealStep
              const isBack = flipped[stock.id]
              return (
                <li
                  key={`${stock.id}-${i}`}
                  className={`transition duration-500 ${
                    visible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => visible && toggleFlip(stock.id)}
                    className={`w-full rounded-2xl p-4 text-left transition ${rarityStyle(stock.rarity)} ${
                      visible ? 'cursor-pointer hover:brightness-[1.02]' : 'pointer-events-none'
                    }`}
                    aria-pressed={isBack}
                    disabled={!visible}
                  >
                    {!isBack ? (
                      <>
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <p className="font-mono text-xs font-bold text-slate-500">{stock.symbol}</p>
                            <p className="text-lg font-extrabold text-slate-900">{stock.name}</p>
                            <p className="mt-1 inline-block rounded-full bg-fuchsia-500/15 px-2 py-0.5 text-[10px] font-bold text-fuchsia-800">
                              {stock.sector}
                            </p>
                          </div>
                          <span className="text-xs font-bold uppercase text-slate-500">{stock.rarity}</span>
                        </div>
                        <p className="mt-3 text-sm font-bold text-slate-700">{stock.tagline}</p>
                        <Sparkline prices={stock.prices} className="mt-3" />
                        <p className="mt-2 text-center text-[10px] font-bold text-slate-400">
                          탭해서 뒤집기 · 근거와 설명
                        </p>
                      </>
                    ) : (
                      <div className="space-y-2 text-sm text-slate-800">
                        <p className="font-extrabold text-violet-700">추천 근거 (목)</p>
                        <p className="leading-relaxed">{stock.rationale}</p>
                        <p className="font-extrabold text-violet-700">종목 설명</p>
                        <p className="leading-relaxed">{stock.description}</p>
                        <Sparkline prices={stock.prices} className="pt-2" />
                        <p className="text-center text-[10px] font-bold text-slate-400">다시 탭하면 앞면</p>
                      </div>
                    )}
                  </button>
                </li>
              )
            })}
          </ul>
        </section>
      )}

      {/* 도감 */}
      <section className="mx-auto mt-12 max-w-4xl rounded-3xl border-4 border-white/90 bg-white/50 p-5 backdrop-blur-sm">
        <h2 className="text-center text-sm font-extrabold uppercase tracking-widest text-slate-700">
          나의 종목 도감
        </h2>
        <p className="mt-1 text-center text-xs text-slate-500">
          뽑은 종목은 컬러로 기록돼요 (브라우저에만 저장)
        </p>
        <ul className="mt-4 grid grid-cols-3 gap-2 sm:grid-cols-4 md:grid-cols-6">
          {ALL_STOCK_IDS.map((id) => {
            const s = MOCK_STOCKS[id]
            const caught = dex.has(id)
            return (
              <li
                key={id}
                className={`flex flex-col items-center justify-center rounded-xl border-2 px-1 py-3 text-center ${
                  caught
                    ? 'border-violet-400 bg-white shadow-sm'
                    : 'border-slate-300/80 bg-slate-200/60 opacity-70 grayscale'
                }`}
              >
                <span className="text-lg">{caught ? '✓' : '?'}</span>
                <span className="mt-1 font-mono text-[10px] font-bold leading-tight text-slate-700">
                  {caught ? s.symbol : '???'}
                </span>
              </li>
            )
          })}
        </ul>
      </section>
    </div>
  )
}
