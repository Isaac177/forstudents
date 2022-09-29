import React from "react"
import './App.css';
import Navbar from "./compoent/head/Navbar"
import Home from "./compoent/head/Home"
import About from "./compoent/head/About"
import Skills from "./compoent/head/Skills"
import Contact from "./compoent/head/Contact"
import Services from "./compoent/head/Services"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' component={Home} exact>
            <Home />
          </Route>
          <Route path='/about' component={About} exact>
            <About />
          </Route>
          <Route path='/skills' component={Skills} exact>
            <Skills />
          </Route>
          <Route path='/contact' component={Contact} exact>
            <Contact />
          </Route>
          <Route path='/services' component={Services} exact>
            <Services />
          </Route>
        </Switch>
      </Router>
    </>
  )
}

export default App
