import React, { Component } from 'react'
import PortfolioCard from './PortfolioCard'

class Page extends Component {
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
      <div key={this.state.portfolio.id}>
        <PortfolioCard 
          firstname={this.state.portfolio.firstname}
          lastname={this.state.portfolio.lastname}
          nickname={this.state.portfolio.nickname}
          avatar={this.state.portfolio.avatar}
          image={this.state.portfolio.image}
          mainField={this.state.portfolio.mainField}
          fields={this.state.portfolio.fields}
        />
      </div>
    )
  }
}

export default Page
