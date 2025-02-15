import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Counter from './components/basic/Counter.tsx'
//import Form from './components/basic/Form.tsx'
import ShowComponent from './components/basic/ShowComponent.tsx'
import List from './components/basic/List.tsx'
import CounterOwn from './components/owned/CounterOwn.tsx'
import ColorChanger from './components/basic/ColorChanger.tsx'
import ChangeTheme from './components/owned/ChangeTheme.tsx'
import Cronometer from './components/intermediate/Cronometer.tsx'
import FetchAPI from './components/intermediate/FetchAPI.tsx'
import Form from './components/intermediate/Form.tsx'
import Hide from './components/basic/Hide.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Form/>
  </StrictMode>,
)
