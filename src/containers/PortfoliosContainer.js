import React, { Component } from 'react'
import Portfolios from '../components/Portfolios'

class PortfoliosContainer extends Component {
  state = {
    portfolios: []
  }

  componentDidMount() {
    fetch('http://localhost:5000/portfolios')
      .then((response) => response.json())
      .then((portfolios) => this.setState({ portfolios }))
  }

  render () {
    return (
      <Portfolios portfolios={this.state.portfolios} />
    )
  }
}

export default PortfoliosContainer
