import React, { Component } from 'react'
import { Route } from 'react-router'
import './App.css'
import Appbar from './components/Appbar/Appbar'
import SaldoPage from './components/SaldoPage/'
import LoginPage from './components/LoginPage/LoginPage'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Appbar />
        <Route exact path="/" component={SaldoPage} />
        <Route path="/login" component={LoginPage} />
      </div>
    )
  }
}

export default App
