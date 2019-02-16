import React, { Component } from 'react'
import { Route } from 'react-router'
import './App.css'
import Appbar from './components/Appbar/Appbar'
import SaldoPage from './components/SaldoPage/'
import LoginPage from './components/LoginPage/LoginPage'
import WelcomePage from './components/WelcomePage/welcomePage'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Appbar />
        <Route
          exact
          path="/"
          component={() =>
            SaldoPage({ childID: 12, name: 'Andreas', amount: 192 })
          }
        />
        <Route path="/login" component={LoginPage} />
        <Route path="/welcome" component={WelcomePage} />
      </div>
    )
  }
}

export default App
