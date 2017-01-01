import React, { Component } from 'react'
import Portfolio from '../components/Portfolio'

class PortfolioContainer extends Component {
  state = {
    portfolio: {
      firstname: '',
      lastname: '',
      nickname: '',
      avatar: '',
      image: '',
      mainField: '',
      fields: []
    }
  }

  componentDidMount() {
    fetch(`http://localhost:5000/portfolios/${this.props.params.id}`)
      .then((response) => response.json())
      .then((portfolio) => this.setState({ portfolio }))
  }

  render () {
    return (
      <Portfolio portfolio={this.state.portfolio} />
    )
  }
}

export default PortfolioContainer
