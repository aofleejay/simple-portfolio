import React, { Component } from 'react'

class Home extends Component {
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
      <div>
        {
          this.state.portfolios.map((portfolio) => (
            <div key={portfolio.id}>
              <span>{portfolio.firstname}</span>
              <span>{portfolio.lastname}</span>
              <span>{portfolio.nickname}</span>
            </div>
          ))
        }
      </div>
    )
  }
}

export default Home
