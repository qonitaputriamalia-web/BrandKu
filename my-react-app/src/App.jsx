// import { useState } from 'react'
import Header from "./components/Header"
import Hero from "./components/Hero"
import WhyUs from "./components/WhyUs"


function App() {

  return (
    <div>
      <Header />
      <main class="pb-10">
        <Hero />
        <WhyUs />
      </main>
    </div>
  )
}

export default App
