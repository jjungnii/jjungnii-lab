import { Route, Routes } from 'react-router-dom'
import { RootLayout } from './components/RootLayout'
import { Dashboard } from './pages/Dashboard'
import { NotFound } from './pages/NotFound'
import { PlaygroundLab } from './pages/PlaygroundLab'
import { PokopiaStockLab } from './pages/PokopiaStockLab'

export default function App() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="lab/playground" element={<PlaygroundLab />} />
        <Route path="lab/pokopia-stock" element={<PokopiaStockLab />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
