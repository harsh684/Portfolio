import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import About from './components/About/About'
import Experience from './components/Experience/Experience'
import Tech from './components/Tech/Tech'
import Works from './components/Works/Works'
import Feedbacks from './components/Feedbacks/Feedbacks'
import Contact from './components/Contact/Contact'
import StarsCanvas from '../src/components/Canvas/Stars'

function App() {
  const [count, setCount] = useState(0)

  return (
      <BrowserRouter>
        <div className='h-[100vh] relative z-0 bg-black'>
          <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
            <Navbar/>
            <Hero/>
          </div>
          <About />
          <Experience/>
          <Tech/>
          <Works/>
          <Feedbacks/>
          <div className='relative z-0 '>
            <Contact />
            <StarsCanvas/>
          </div>
        </div>
      </BrowserRouter>
  )
}

export default App
