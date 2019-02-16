import * as React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'

class Appbar extends React.Component {
  render() {
    return (
      <AppBar position="static">
        <Toolbar style={{ justifyContent: 'space-between' }}>
          <Typography variant="h6" color="inherit">
            Mina pengar
          </Typography>
          <Link to="/login" style={{ textDecoration: 'none' }}>
            <Button variant="contained" color="secondary">
              Login/Register
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
    )
  }
}

export default Appbar
