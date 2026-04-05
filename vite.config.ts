import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// GitHub Pages 프로젝트 사이트는 /저장소이름/ 경로 — CI에서 VITE_BASE_PATH 설정
// Vercel·커스텀 도메인(루트)은 비우거나 '/' (기본값)
const base = process.env.VITE_BASE_PATH ?? '/'

// https://vite.dev/config/
export default defineConfig({
  base,
  plugins: [react(), tailwindcss()],
})
