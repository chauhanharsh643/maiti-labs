import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import AwarenessPortal from './components/AwarenessPortal'
import Career from './components/Career'
import Contact from './components/Contact'
import Video from './components/Video'
import Team from './components/Team'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Home/>
      <About/>
      <AwarenessPortal/>
      <Career/>
      <Contact/>
      <Video/>
      <Team/>
    </>
  )
}

export default App
