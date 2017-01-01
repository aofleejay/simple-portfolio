import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar'
import FlatButton from 'material-ui/FlatButton'
import { Link } from 'react-router'
import './Header.scss'

class Header extends Component {
  render () {
    return (
      <AppBar
        className='app-bar'
        title={
          <Link 
            className='title' 
            to={{ pathname: '/' }}
          >
            Stupid Portfolio
          </Link>
        }
        showMenuIconButton={false}
        iconElementRight={
          <FlatButton 
            label="Portfolios" 
            containerElement={<Link to="/portfolios"/>} 
          />
        }
        zDepth={0}
      />
    )
  }
}

export default Header
