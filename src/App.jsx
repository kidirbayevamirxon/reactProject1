import { useState } from 'react'
import './App.css'
import { Header } from './components/header/header.jsx'
import { Footer } from './components/footer/footer.jsx'
import { Main } from './components/main/man.jsx'
function App() {
  return (
    <>
      <Header />
      <Main/>
      <Footer />
    </>
  )
}

export default App
