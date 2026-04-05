/** 목 데이터 — 나중에 API로 교체 가능 */

export type Rarity = 'common' | 'rare' | 'legendary'

export type MockStock = {
  id: string
  symbol: string
  name: string
  sector: string
  rarity: Rarity
  tagline: string
  rationale: string
  description: string
  /** 최근 종가 흐름 (목) */
  prices: number[]
}

export type MockDeck = {
  id: string
  title: string
  emoji: string
  accent: string
  blurb: string
  stockIds: string[]
}

export const MOCK_STOCKS: Record<string, MockStock> = {
  nvda: {
    id: 'nvda',
    symbol: 'NVDA',
    name: '엔비디아',
    sector: '반도체 · AI',
    rarity: 'legendary',
    tagline: 'GPU 짐승, 연산의 왕',
    rationale:
      '데이터센터 매출 성장과 AI 인프라 수요가 겹친 구간에서 유동성이 몰리기 쉬운 대표 종목이에요. (목 시뮬레이션)',
    description:
      '그래픽 처리장치(GPU)와 AI 연산용 칩을 만드는 미국 반도체 회사입니다. 생성형 AI 붐 이후 데이터센터 쪽 비중이 커졌다는 식으로 공부해 두면 좋아요.',
    prices: [420, 432, 428, 445, 451, 448, 462, 470, 465, 478, 482, 490, 488, 502],
  },
  amd: {
    id: 'amd',
    symbol: 'AMD',
    name: 'AMD',
    sector: '반도체',
    rarity: 'rare',
    tagline: '라이벌은 친구',
    rationale:
      'x86 CPU·GPU 양쪽에서 경쟁 구도가 뉴스에 자주 올라와요. 섹터 전체 변동성을 체감하기 좋은 표본이에요.',
    description:
      'CPU와 GPU를 설계하는 반도체 업체입니다. 엔비디아·인텔과의 점유율 싸움이 재미있는 공부 포인트예요.',
    prices: [118, 122, 119, 125, 128, 124, 131, 129, 135, 138, 134, 142, 140, 145],
  },
  tsm: {
    id: 'tsm',
    symbol: 'TSM',
    name: 'TSMC',
    sector: '파운드리',
    rarity: 'legendary',
    tagline: '세계의 공장',
    rationale:
      '첨단 공정 가동률과 글로벌 IT 수요를 동시에 떠올리게 만드는 이름이에요. 공급망 이슈와도 자주 엮입니다.',
    description:
      '대만의 위탁생산(파운드리) 1위 기업입니다. 반도체를 “누가 설계했는지”와 “누가 찍어내는지”를 나눠 생각할 때 필수 등장인물이에요.',
    prices: [92, 94, 91, 96, 95, 98, 97, 101, 100, 103, 102, 105, 104, 108],
  },
  avgo: {
    id: 'avgo',
    symbol: 'AVGO',
    name: '브로드컴',
    sector: '반도체 · 인프라',
    rarity: 'rare',
    tagline: '빔! 네트워크 연결 완료',
    rationale:
      '데이터센터 네트워킹·맞춤형 칩 이야기가 함께 따라와요. “AI 수혜” 서사를 넓게 볼 때 등장합니다.',
    description:
      '유·무선 통신 칩과 인프라 소프트웨어를 다루는 기업입니다. M&A로 사업 범위가 넓다는 점이 특징이에요.',
    prices: [880, 895, 888, 902, 910, 905, 918, 922, 915, 930, 928, 938, 935, 948],
  },
  ko: {
    id: 'ko',
    symbol: 'KO',
    name: '코카콜라',
    sector: '필수소비재',
    rarity: 'common',
    tagline: '기분 좋은 캔 따는 소리',
    rationale:
      '현금흐름이 안정적인 대형주로, 방어적인 포트에서 자주 예시로 등장해요. 금리·성장주 롤러코스터와 대비하기 좋아요.',
    description:
      '글로벌 음료 브랜드를 보유한 소비재 기업입니다. 배당과 브랜드 해자에 대해 공부할 때 전형적인 사례예요.',
    prices: [58.2, 58.5, 58.1, 58.8, 58.6, 59.0, 58.9, 59.2, 59.1, 59.4, 59.3, 59.6, 59.5, 59.8],
  },
  pg: {
    id: 'pg',
    symbol: 'PG',
    name: 'P&G',
    sector: '필수소비재',
    rarity: 'common',
    tagline: '욕실 선반의 별',
    rationale:
      '생활용품 반복 구매 구조 덕분에 실적 변동이 상대적으로 완만한 편이라는 인상을 주기 쉬워요.',
    description:
      '세제·기저귀·면도기 등 생활 소비재를 만드는 다국적 기업입니다. 유통·브랜드 파워를 함께 보세요.',
    prices: [156, 157, 156.5, 158, 157.8, 158.4, 158.1, 159, 158.7, 159.3, 159.0, 159.8, 159.5, 160.1],
  },
  jnj: {
    id: 'jnj',
    symbol: 'JNJ',
    name: '존슨앤존슨',
    sector: '헬스케어',
    rarity: 'common',
    tagline: '반창고부터 시작해요',
    rationale:
      '의약품·의료기기·소비자 건강이 섞인 복합 구조라, “방어주” 이야기할 때 예시로 자주 나와요.',
    description:
      '미국 대표 헬스케어 기업입니다. 사업 부문을 나눠 보는 연습을 하기 좋은 표본이에요.',
    prices: [148, 149, 148.5, 150, 149.8, 150.5, 150.2, 151, 150.6, 151.2, 150.9, 151.5, 151.1, 151.8],
  },
  pep: {
    id: 'pep',
    symbol: 'PEP',
    name: '펩시코',
    sector: '필수소비재',
    rarity: 'common',
    tagline: '스낵도 실력이지!',
    rationale:
      '음료+스낵 포트폴리오라 채널·원가 이슈를 이해하는 데 도움이 돼요. 배당주 입문용으로 자주 거론돼요.',
    description:
      '펩시·도리토스 등을 보유한 식음료 기업입니다. 코카콜라와 비교하며 읽으면 재미가 배가돼요.',
    prices: [162, 163, 162.5, 164, 163.8, 164.5, 164.1, 165, 164.6, 165.2, 164.9, 165.6, 165.2, 165.9],
  },
  msft: {
    id: 'msft',
    symbol: 'MSFT',
    name: '마이크로소프트',
    sector: '클라우드 · AI',
    rarity: 'legendary',
    tagline: '클라우드 위에 앉은 집',
    rationale:
      'Azure와 M365, 그리고 AI 코파일럿 서사가 한꺼번에 얹혀 있어요. “플랫폼주” 감각을 익히기 좋습니다.',
    description:
      '윈도우·오피스·클라우드·게임까지 아우르는 빅테크입니다. B2B 반복 매출을 숫자로 추적해 보는 연습을 추천해요.',
    prices: [380, 385, 382, 390, 388, 395, 392, 400, 398, 405, 402, 410, 408, 415],
  },
  snow: {
    id: 'snow',
    symbol: 'SNOW',
    name: '스노우플레이크',
    sector: '데이터 · SaaS',
    rarity: 'rare',
    tagline: '눈송이처럼 가벼운 데이터',
    rationale:
      '데이터 웨어하우스 SaaS라 성장주 서사와 밸류에이션 민감도를 같이 느끼기 좋아요. 변동성도 큰 편이에요.',
    description:
      '클라우드 기반 데이터 분석 플랫폼을 제공하는 기업입니다. 소프트웨어 매출 인식 방식도 공부 포인트예요.',
    prices: [142, 148, 145, 152, 149, 155, 151, 158, 154, 160, 157, 163, 160, 166],
  },
  crwd: {
    id: 'crwd',
    symbol: 'CRWD',
    name: '크라우드스트라이크',
    sector: '사이버보안',
    rarity: 'rare',
    tagline: '해커 퇴치 요정',
    rationale:
      '엔드포인트 보안 수요는 IT 지출 사이클과 연결돼요. 성장주 중에서도 테마가 또렷한 편이에요.',
    description:
      '클라우드 네이티브 보안 솔루션 기업입니다. 구독 매출과 랜섬웨어 뉴스를 같이 보면 이해가 빨라져요.',
    prices: [220, 228, 224, 232, 229, 238, 235, 242, 239, 246, 243, 250, 247, 255],
  },
  net: {
    id: 'net',
    symbol: 'NET',
    name: '클라우드플레어',
    sector: '인프라 · 보안',
    rarity: 'rare',
    tagline: '인터넷의 교통정리',
    rationale:
      'CDN·보안·엣지 컴퓨팅을 한 번에 이야기할 수 있어요. AI 트래픽 증가 서사와도 자주 연결돼요.',
    description:
      '웹 성능과 보안 인프라를 제공하는 기업입니다. “데이터가 지나가는 길”을 상상하며 보면 재미있어요.',
    prices: [78, 81, 79, 84, 82, 86, 84, 88, 86, 90, 88, 92, 90, 94],
  },
}

export const MOCK_DECKS: MockDeck[] = [
  {
    id: 'ai-infra',
    title: 'AI 인프라 덱',
    emoji: '✨',
    accent: 'from-fuchsia-300/90 to-violet-400/90',
    blurb: '연산·클라우드·데이터가 한 판에!',
    stockIds: ['nvda', 'amd', 'tsm', 'avgo', 'msft', 'snow', 'net'],
  },
  {
    id: 'dividend-chill',
    title: '배당 힐링 덱',
    emoji: '☕',
    accent: 'from-amber-200/95 to-orange-300/90',
    blurb: '천천히, 든든하게, 소비재 친구들',
    stockIds: ['ko', 'pg', 'jnj', 'pep'],
  },
  {
    id: 'growth-spark',
    title: '성장 스파크 덱',
    emoji: '⚡',
    accent: 'from-cyan-300/90 to-sky-400/90',
    blurb: '변동은 크지만 테마는 또렷!',
    stockIds: ['snow', 'crwd', 'net', 'amd', 'msft'],
  },
]

const BRIEFING_POOL = [
  {
    headline: '시장 분위기는 “기대와 불안이 동시에!”',
    body: '금리 인하 기대감과 지정학 리스크가 동시에 뉴스에 올라오는 날이에요. 변동성 지수도 같이 보면 재미있답니다. (목 데모)',
    indicators: [
      { label: '기분 지수', value: '호기심 MAX', mood: 'up' as const },
      { label: '금리 뉴스', value: '말 많음', mood: 'flat' as const },
      { label: '기술주 온도', value: '따뜻', mood: 'up' as const },
    ],
    spotlightStockId: 'nvda',
  },
  {
    headline: '오늘의 필드: 방어 모드 돌입?',
    body: '성장주 쉬어가고 필수소비재가 언급되는 흐름을 가정해 볼게요. “현금흐름이 보이는 친구들”을 도감에 추가해 보세요!',
    indicators: [
      { label: '성장주 텐션', value: '살짝 낮음', mood: 'down' as const },
      { label: '배당 관심', value: '쑥', mood: 'up' as const },
      { label: '환율 잡담', value: '열림', mood: 'flat' as const },
    ],
    spotlightStockId: 'ko',
  },
  {
    headline: '데이터가 쏟아지는 계절!',
    body: 'AI 인프라·보안·클라우드 이슈가 한꺼번에 몰리는 컨셉이에요. 뉴스 헤드라인만 따라가도 공부 거리가 넘쳐요.',
    indicators: [
      { label: 'AI 키워드', value: '북적', mood: 'up' as const },
      { label: '보안 뉴스', value: '주의', mood: 'up' as const },
      { label: '현금 버닝', value: '화제', mood: 'flat' as const },
    ],
    spotlightStockId: 'crwd',
  },
] as const

/** YYYY-MM-DD 기준으로 하루에 하나의 브리핑 고정 */
export function getDailyBriefing() {
  const key = new Date().toISOString().slice(0, 10)
  let hash = 0
  for (let i = 0; i < key.length; i++) hash = (hash + key.charCodeAt(i) * (i + 1)) % 997
  const idx = hash % BRIEFING_POOL.length
  return { ...BRIEFING_POOL[idx], dateKey: key }
}

export function drawStocksFromDeck(deckId: string, count = 4): MockStock[] {
  const deck = MOCK_DECKS.find((d) => d.id === deckId)
  if (!deck) return []
  const pool = deck.stockIds
    .map((id) => MOCK_STOCKS[id])
    .filter(Boolean) as MockStock[]
  const shuffled = [...pool].sort(() => Math.random() - 0.5)
  const out: MockStock[] = []
  const used = new Set<string>()
  for (const s of shuffled) {
    if (used.size >= count) break
    if (!used.has(s.id)) {
      used.add(s.id)
      out.push(s)
    }
  }
  while (out.length < count && pool.length > 0) {
    out.push(pool[out.length % pool.length])
  }
  return out.slice(0, count)
}

export const DEX_STORAGE_KEY = 'pokopia-stock-dex'

export function loadDex(): Set<string> {
  try {
    const raw = localStorage.getItem(DEX_STORAGE_KEY)
    if (!raw) return new Set()
    const arr = JSON.parse(raw) as unknown
    if (!Array.isArray(arr)) return new Set()
    return new Set(arr.filter((x): x is string => typeof x === 'string'))
  } catch {
    return new Set()
  }
}

export function saveDex(ids: Set<string>) {
  localStorage.setItem(DEX_STORAGE_KEY, JSON.stringify([...ids]))
}

export const ALL_STOCK_IDS = Object.keys(MOCK_STOCKS)
