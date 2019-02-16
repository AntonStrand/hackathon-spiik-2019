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

  login = () => {
    return (
      <div style={this.style.parentDiv}>
        <div>
          <TextField label="Name" />
          <TextField label="Password" />
        </div>
        <Button variant="contained">Login</Button>
      </div>
    )
  }

  register = () => {
    return (
      <div style={this.style.parentDiv}>
        <div>
          <TextField label="Email" />
          <TextField label="Name" />
          <TextField label="Password" />
        </div>
        <Button variant="contained">Register</Button>
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
