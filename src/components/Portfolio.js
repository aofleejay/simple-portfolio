import React, { Component } from 'react'
import PortfolioCard from './PortfolioCard'
import './Portfolio.scss'

class Portfolio extends Component {
  render () {
    const { id, firstname, lastname, nickname, avatar, image, mainField, fields } = this.props.portfolio
    return (
      <article className="portfolios-container">
        <PortfolioCard 
          key={id}
          id={id}
          firstname={firstname}
          lastname={lastname}
          nickname={nickname}
          avatar={avatar}
          image={image}
          mainField={mainField}
          fields={fields}
        />
      </article>
    )
  }
}

export default Portfolio
