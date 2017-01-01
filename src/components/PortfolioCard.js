import React, { Component } from 'react'
import {Card, CardHeader, CardMedia, CardTitle} from 'material-ui/Card'
import { Link } from 'react-router'
import './PortfolioCard.scss'

class PortfolioCard extends Component {
  render () {
    const { id, firstname, nickname, avatar, mainField, fields, image } = this.props
    return (
      <Link to={{ pathname: `/portfolios/${id}` }}>
        <Card className="portfolio-card">
          <CardHeader
            title={firstname}
            subtitle={nickname}
            avatar={avatar}
          />
          <CardMedia
            overlay={<CardTitle title={mainField} subtitle={fields.join(', ')} />}
          >
            <img src={image} alt="profile" />
          </CardMedia>
        </Card>
      </Link>
    )
  }
}

export default PortfolioCard
