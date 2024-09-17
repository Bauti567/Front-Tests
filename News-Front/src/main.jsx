import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import News from './Components/News.jsx'
import NewsList from './Components/NewsList.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <News/>
    <NewsList/>
  </StrictMode>,
)
