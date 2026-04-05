export type LabStatus = 'idea' | 'wip' | 'stable'

export type Lab = {
  id: string
  title: string
  tagline: string
  path: string
  status: LabStatus
  /** true면 카드는 보이지만 아직 들어갈 수 없음 */
  comingSoon?: boolean
}

export const labs: Lab[] = [
  {
    id: 'playground',
    title: 'Playground',
    tagline: '슬라이더와 미리보기로 작은 UI 실험',
    path: '/lab/playground',
    status: 'stable',
  },
  {
    id: 'pokopia-stock',
    title: 'Pokopia Stock',
    tagline: '박사님 브리핑 · 덱 뽑기 · 종목 도감 (목 데이터)',
    path: '/lab/pokopia-stock',
    status: 'wip',
  },
]

export function statusLabel(status: LabStatus): string {
  switch (status) {
    case 'idea':
      return '아이디어'
    case 'wip':
      return '진행 중'
    case 'stable':
      return '열림'
  }
}
