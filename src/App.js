import React from "react"
import { Counter } from "./features/counter/Counter"
import "./App.css"

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"

import Header from "./components/Header"
import Home from "./components/Home"
import Detail from "./components/Detail"

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/detail">
            <Detail />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
