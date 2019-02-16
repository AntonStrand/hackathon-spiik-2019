import * as React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import { Button, TextField } from '@material-ui/core'

class LoginPage extends React.Component {
  state = {
    value: 0
  }

  style = {
    parentDiv: {
      marginTop: '10px'
    }
  }

  handleChange = (event, value) => {
    this.setState({ value })
  }

  handleInputChange = name => event => {
    this.setState({ [name]: event.target.value })
  }

  registerUser = () => {
    fetch('/api/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: this.state.name,
        password: this.state.password,
        email: this.state.email
      })
    }).then(apiRes => console.log(apiRes))
  }

  loginUser = () => {
    fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: this.state.name,
        password: this.state.password
      })
    })
      .then(apiRes => {
        if (apiRes.ok) {
          return apiRes.json()
        }
      })
      .then(token => {
        localStorage.setItem('token', token.token)
      })
  }

  login = () => {
    return (
      <div style={this.style.parentDiv}>
        <div>
          <TextField
            value={this.state.name}
            onChange={this.handleInputChange('name')}
            label="Name"
          />
          <TextField
            onChange={this.handleInputChange('password')}
            value={this.state.password}
            label="Password"
            type="password"
          />
        </div>
        <Button onClick={() => this.loginUser()} variant="contained">
          Login
        </Button>
      </div>
    )
  }

  register = () => {
    return (
      <div style={this.style.parentDiv}>
        <div>
          <TextField
            value={this.state.email}
            onChange={this.handleInputChange('email')}
            label="Email"
          />
          <TextField
            value={this.state.name}
            onChange={this.handleInputChange('name')}
            label="Name"
          />
          <TextField
            value={this.state.password}
            onChange={this.handleInputChange('password')}
            type="password"
            label="Password"
          />
        </div>
        <Button onClick={() => this.registerUser()} variant="contained">
          Register
        </Button>
      </div>
    )
  }

  render() {
    const { value } = this.state
    return (
      <div id="login-wrapper" style={{ width: '320px' }}>
        <AppBar variant="fullWidth" position="static" color="default">
          <Tabs value={value} onChange={this.handleChange}>
            <Tab label="Login" />
            <Tab label="Register" />
          </Tabs>
        </AppBar>
        {value === 0 && this.login()}
        {value === 1 && this.register()}
      </div>
    )
  }
}

export default LoginPage
