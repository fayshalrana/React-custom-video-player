import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ReactVideoPlayer from './ReactVideoPlayer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ReactVideoPlayer/>
    </>
  )
}

export default App
