import React, { Component } from 'react'
import PortfolioCard from './PortfolioCard'

class Pages extends Component {
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
              <PortfolioCard 
                firstname={portfolio.firstname}
                lastname={portfolio.lastname}
                nickname={portfolio.nickname}
                avatar={portfolio.avatar}
                image={portfolio.image}
                mainField={portfolio.mainField}
                fields={portfolio.fields}
              />
            </div>
          ))
        }
      </div>
    )
  }
}

export default Pages
