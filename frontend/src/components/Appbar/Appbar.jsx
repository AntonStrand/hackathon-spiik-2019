import * as React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

class Appbar extends React.Component {
  render() {
    return (
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" color="inherit">
            Mina pengar
          </Typography>
          <Button color="inherit">Login/Register</Button>
        </Toolbar>
      </AppBar>
    )
  }
}

export default Appbar
