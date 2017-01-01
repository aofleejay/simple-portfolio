import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar'
import { Link } from 'react-router'

class Header extends Component {
  render () {
    return (
      <AppBar
        title={<Link to={{ pathname: '/' }}>Portfolio</Link>}
        showMenuIconButton={false}
        iconElementRight={<Link to={{ pathname: '/pages' }}>Pages</Link>}
      />
    )
  }
}

export default Header
