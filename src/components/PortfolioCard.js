import React, { Component } from 'react';
import {Card, CardHeader, CardMedia, CardTitle} from 'material-ui/Card';

class PortfolioCard extends Component {
  render () {
    return (
      <Card>
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
    )
  }
}

export default PortfolioCard
