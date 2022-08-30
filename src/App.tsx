import { useState } from 'react'
import logo from './logo.svg'
import './App.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <h1>Zustand Demo Site</h1>
        <p>Testing</p>
    </div>
  )
}

export default App
