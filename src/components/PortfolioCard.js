import React, { Component } from 'react'
import {Card, CardHeader, CardMedia, CardTitle} from 'material-ui/Card'
import { Link } from 'react-router'
import './PortfolioCard.scss'

class PortfolioCard extends Component {
  render () {
    return (
      <Link to={{ pathname: `/portfolios/${this.props.id}` }}>
        <Card className="portfolio-card">
          <CardHeader
            title={this.props.firstname}
            subtitle={this.props.nickname}
            avatar={this.props.avatar}
          />
          <CardMedia
            overlay={<CardTitle title={this.props.mainField} subtitle={this.props.fields.join(', ')} />}
          >
            <img src={this.props.image} alt="profile" />
          </CardMedia>
        </Card>
      </Link>
    )
  }
}

export default PortfolioCard
