import React, { Component } from 'react'
import { Route } from 'react-router'
import './App.css'
import Appbar from './components/Appbar/Appbar'
import SaldoPage from './components/SaldoPage/'
import LoginPage from './components/LoginPage/LoginPage'
import AdminPage from './components/AdminPage/AdminPage'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Appbar />
        <Route exact path="/wallet" component={SaldoPage} />
        <Route path="/login" component={LoginPage} />
        <Route exact path="/" component={AdminPage} />
      </div>
    )
  }
}

export default App
