import React, { Component } from 'react'
import { Route } from 'react-router'
import './App.css'
import SaldoPage from './components/SaldoPage/'
import LoginPage from './components/LoginPage/LoginPage'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={SaldoPage} />
        <Route path="/login" component={LoginPage} />
      </div>
    )
  }
}

export default App
