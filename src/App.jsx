import { useState } from 'react'
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
