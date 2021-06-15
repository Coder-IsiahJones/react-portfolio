import React, { useEffect } from "react"
import Header from "./components/Header"
import Nav from "./components/Nav"
import Stack from "./components/Stack"
import Project from "./components/Project"
import Aos from "aos"
import "aos/dist/aos.css"

function App() {
  useEffect(() => {
    Aos.init({})
  }, [])

  return (
    <div>
      <Nav />
      <Header />
      <Stack />
      <Project />
    </div>
  )
}

export default App
