import React, { Component } from 'react'
import PortfolioCard from './PortfolioCard'
import { Link } from 'react-router'
import './Pages.scss'

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
      <div className="pages-container">
        {
          this.state.portfolios.map((portfolio) => (
            <Link key={portfolio.id}
                  to={{ pathname: `/pages/${portfolio.id}` }}>
              <PortfolioCard 
                firstname={portfolio.firstname}
                lastname={portfolio.lastname}
                nickname={portfolio.nickname}
                avatar={portfolio.avatar}
                image={portfolio.image}
                mainField={portfolio.mainField}
                fields={portfolio.fields}
              />
            </Link>
          ))
        }
      </div>
    )
  }
}

export default Pages
