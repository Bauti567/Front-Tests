import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import { CharacterContextProvider } from './context/CharacterContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CharacterContextProvider>
      <App/>
    </CharacterContextProvider>
  </React.StrictMode>,
)
  