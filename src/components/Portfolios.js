import React, { Component } from 'react'
import PortfolioCard from './PortfolioCard'
import './Portfolios.scss'

class Portfolios extends Component {
  render () {
    return (
      <div className="portfolios-container">
        {
          this.props.portfolios.map((portfolio) => (
            <PortfolioCard 
              key={portfolio.id}
              id={portfolio.id}
              firstname={portfolio.firstname}
              lastname={portfolio.lastname}
              nickname={portfolio.nickname}
              avatar={portfolio.avatar}
              image={portfolio.image}
              mainField={portfolio.mainField}
              fields={portfolio.fields}
            />
          ))
        }
      </div>
    )
  }
}

export default Portfolios
