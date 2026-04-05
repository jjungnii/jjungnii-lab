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
    id: 'next',
    title: '다음 실험',
    tagline: 'src/data/labs.ts에 항목을 추가하고 라우트를 연결하세요',
    path: '/',
    status: 'idea',
    comingSoon: true,
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
