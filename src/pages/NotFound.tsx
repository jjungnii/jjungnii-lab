import { Link } from 'react-router-dom'

export function NotFound() {
  return (
    <div className="py-16 text-center">
      <p className="font-mono text-sm text-zinc-500">404</p>
      <h1 className="mt-2 text-2xl font-semibold text-zinc-100">이 경로엔 실험이 없어요</h1>
      <p className="mt-2 text-zinc-400">주소를 확인하거나 대시보드로 돌아가 주세요.</p>
      <Link
        to="/"
        className="mt-8 inline-block rounded-lg border border-lab-border bg-lab-surface px-4 py-2 text-sm font-medium text-cyan-300 transition-colors hover:border-cyan-800/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-500"
      >
        홈으로
      </Link>
    </div>
  )
}
