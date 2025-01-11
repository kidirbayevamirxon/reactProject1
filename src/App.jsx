import { useState } from 'react'
import './App.css'
import { Header } from './components/header/header.jsx'
import { Section } from './components/main/section1/section.jsx'
import { About } from './components/main/section2/about.jsx'
import { Footer } from './components/footer/footer.jsx'
function App() {
  return (
    <>
      <Header />
      <Section />
      <About />
      <Footer />
    </>
  )
}

export default App
