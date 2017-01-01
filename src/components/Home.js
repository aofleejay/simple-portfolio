import React, { Component } from 'react'
import './Home.scss'

class Home extends Component {
  render () {
    const title = 'Stupid Portfolio'
    const subTitle = 'Stupid portfolio for stupid people.'

    return (
      <div className="home-jumbotron">
        <h1 className='title'>{ title }</h1>
        <h2 className='subtitle'>{ subTitle }</h2>
      </div>
    )
  }
}

export default Home
