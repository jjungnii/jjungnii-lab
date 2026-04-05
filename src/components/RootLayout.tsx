import { Link, Outlet, useLocation } from 'react-router-dom'

export function RootLayout() {
  const { pathname } = useLocation()
  const isHome = pathname === '/'

  return (
    <div className="relative min-h-svh">
      <div
        className="pointer-events-none fixed inset-0 opacity-[0.35]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(39, 39, 42, 0.35) 1px, transparent 1px),
            linear-gradient(90deg, rgba(39, 39, 42, 0.35) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
        }}
        aria-hidden
      />
      <div className="pointer-events-none fixed inset-0 bg-gradient-to-b from-cyan-950/20 via-transparent to-transparent" aria-hidden />

      <header className="relative z-10 border-b border-lab-border/80 bg-lab-bg/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
          <Link
            to="/"
            className="group flex flex-col gap-0.5 rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-500"
          >
            <span className="font-mono text-xs font-medium uppercase tracking-widest text-zinc-500 transition-colors group-hover:text-cyan-400/90">
              personal dashboard
            </span>
            <span className="text-lg font-semibold tracking-tight text-zinc-100 sm:text-xl">
              jjungnii&apos;s lab
            </span>
          </Link>
          <nav className="flex items-center gap-3 text-sm">
            <Link
              to="/"
              className={`rounded-md px-3 py-1.5 font-medium transition-colors ${
                isHome
                  ? 'bg-lab-elevated text-cyan-300'
                  : 'text-zinc-400 hover:bg-lab-surface hover:text-zinc-200'
              }`}
            >
              홈
            </Link>
          </nav>
        </div>
      </header>

      <main className="relative z-10 mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-14">
        <Outlet />
      </main>

      <footer className="relative z-10 border-t border-lab-border/60 py-8 text-center">
        <p className="font-mono text-xs text-zinc-600">
          실험용 공간 — 배포 전엔 로컬에서만 써도 괜찮아요
        </p>
      </footer>
    </div>
  )
}
