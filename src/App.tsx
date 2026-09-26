import { useState } from 'react'

import './App.css'
import { Header } from './components/Header'
import { Marquee } from './components/Marquee'
import { About } from './components/About'
import { Footer } from './components/Footer'
import { Projects } from './components/Projects'

function App() {

  return (
    <>
      <Header />
      <Marquee />
      <About />
      <Projects />
      <Footer />
    </>
  )
}

export default App
