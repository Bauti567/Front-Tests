import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Counter from './components/Counter.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
     {/* Ejercicio 1 */}
    <Counter/>
     {/* Ejercicio 2 */}
    
  </StrictMode>,
)
