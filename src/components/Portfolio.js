import React, { Component } from 'react'
import PortfolioCard from './PortfolioCard'
import './Portfolio.scss'

class Portfolio extends Component {
  render () {
    return (
      <article className="portfolios-container">
        <PortfolioCard 
          key={this.props.portfolio.id}
          id={this.props.portfolio.id}
          firstname={this.props.portfolio.firstname}
          lastname={this.props.portfolio.lastname}
          nickname={this.props.portfolio.nickname}
          avatar={this.props.portfolio.avatar}
          image={this.props.portfolio.image}
          mainField={this.props.portfolio.mainField}
          fields={this.props.portfolio.fields}
        />
      </article>
    )
  }
}

export default Portfolio
