import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState({ p1Score: 0, p2Score: 0 })
  const p1CountUp = () => {
    setCount((prev) => {
      return { ...prev, p1Score: prev.p1Score + 1 }
    })
  }
  const p2CountUp = () => {
    setCount((prev) => {
      return { ...prev, p2Score: prev.p2Score + 1 }
    })
  }

  return (
    <div>
      p1score:{count.p1Score}:p2score:{count.p2Score}
      <button onClick={p1CountUp}>p1に加算</button>
      <button onClick={p2CountUp}>p2に加算</button>
    </div>

  )
}

export default App