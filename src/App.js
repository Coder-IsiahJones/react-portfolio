import React, { useEffect } from "react"
import Header from "./components/Header"
import Nav from "./components/Nav"
import Stack from "./components/Stack"
import Project from "./components/Project"
import Aos from "aos"
import "aos/dist/aos.css"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"

function App() {
  useEffect(() => {
    Aos.init({})
  }, [])

  return (
    <Router>
      <Nav />
      <Header />
      <Stack />
      <Project />
    </Router>
  )
}

export default App
