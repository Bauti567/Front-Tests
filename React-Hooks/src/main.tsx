import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Counter from './components/basic/Counter.tsx'
import Form from './components/basic/Form.tsx'
import ShowComponent from './components/basic/ShowComponent.tsx'
import List from './components/basic/List.tsx'
import CounterOwn from './components/owned/CounterOwn.tsx'
import ColorChanger from './components/basic/Theme.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ColorChanger/>
  </StrictMode>,
)
