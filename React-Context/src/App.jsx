import { useState } from 'react'
import ComponentA from './components/ComponentA'
import Container from './components/Container'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Container/>     
    </>
  )
}

export default App
