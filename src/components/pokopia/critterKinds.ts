export type CritterKind = 'mumu' | 'blip' | 'zzip' | 'leafy' | 'puff' | 'wink'

export const CRITTER_LABELS: Record<CritterKind, string> = {
  mumu: '무무',
  blip: '블립',
  zzip: '찌릿이',
  leafy: '새싹몽',
  puff: '폭신이',
  wink: '윙크몽',
}

export function critterForDeck(deckId: string): CritterKind {
  const map: Record<string, CritterKind> = {
    'ai-infra': 'zzip',
    'dividend-chill': 'puff',
    'growth-spark': 'leafy',
  }
  return map[deckId] ?? 'mumu'
}

export function critterForStock(stockId: string): CritterKind {
  const kinds: CritterKind[] = ['mumu', 'blip', 'zzip', 'leafy', 'puff', 'wink']
  let h = 0
  for (let i = 0; i < stockId.length; i++) h = (h + stockId.charCodeAt(i) * (i + 1)) % 997
  return kinds[h % kinds.length]
}
