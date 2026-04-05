import { Link } from 'react-router-dom'
import { labs, statusLabel } from '../data/labs'

function StatusPill({ status }: { status: (typeof labs)[0]['status'] }) {
  const base =
    'inline-flex items-center rounded-full px-2 py-0.5 font-mono text-[10px] font-medium uppercase tracking-wide'
  const styles = {
    idea: `${base} border border-zinc-600/60 text-zinc-500`,
    wip: `${base} border border-lab-warn/40 text-lab-warn`,
    stable: `${base} border border-cyan-600/50 text-cyan-300/90`,
  }
  return <span className={styles[status]}>{statusLabel(status)}</span>
}

export function Dashboard() {
  return (
    <div className="space-y-12">
      <section className="space-y-4">
        <p className="font-mono text-sm text-cyan-400/80">안녕하세요 —</p>
        <h1 className="max-w-2xl text-3xl font-semibold leading-tight tracking-tight text-zinc-50 sm:text-4xl">
          여기는 신기능·프로토타입·작은 웹 도구를 붙여 나가는{' '}
          <span className="text-cyan-400">개인 실험실</span>입니다.
        </h1>
        <p className="max-w-xl text-base leading-relaxed text-zinc-400">
          카드 하나가 곧 하나의 미니 앱이에요. 필요할 때마다 라우트와 페이지를
          추가해서 대시보드만 키워 가면 됩니다.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="font-mono text-xs font-medium uppercase tracking-widest text-zinc-500">
          실험 목록
        </h2>
        <ul className="grid gap-4 sm:grid-cols-2">
          {labs.map((lab) => {
            const inner = (
              <>
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-lg font-semibold text-zinc-100">{lab.title}</h3>
                  <StatusPill status={lab.status} />
                </div>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">{lab.tagline}</p>
                {lab.comingSoon ? (
                  <span className="mt-4 inline-block font-mono text-xs text-zinc-600">
                    준비 중
                  </span>
                ) : (
                  <span className="mt-4 inline-block font-mono text-xs text-cyan-500/90">
                    들어가기 →
                  </span>
                )}
              </>
            )

            if (lab.comingSoon) {
              return (
                <li key={lab.id}>
                  <div className="h-full rounded-xl border border-dashed border-lab-border bg-lab-surface/40 p-5 opacity-70">
                    {inner}
                  </div>
                </li>
              )
            }

            return (
              <li key={lab.id}>
                <Link
                  to={lab.path}
                  className="block h-full rounded-xl border border-lab-border bg-lab-surface/80 p-5 shadow-sm shadow-black/20 transition-all hover:border-cyan-800/60 hover:bg-lab-elevated/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-500"
                >
                  {inner}
                </Link>
              </li>
            )
          })}
        </ul>
      </section>
    </div>
  )
}
