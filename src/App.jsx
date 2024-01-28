import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import GrayHour2 from './components/GrayHour2'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <GrayHour2 />
    </>
  )
}

export default App;
