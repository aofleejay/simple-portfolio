import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'
import App from './components/templates/App'
import Home from './components/Home'
import PortfoliosContainer from './containers/PortfoliosContainer'
import PortfolioContainer from './containers/PortfolioContainer'
import 'normalize.css'
import './index.scss'

injectTapEventPlugin()

const Root = () => (
  <MuiThemeProvider>
    <Router history={browserHistory}>
      <Route path='/' component={App}>
        <IndexRoute component={Home} />
        <Route path='portfolios'>
          <IndexRoute component={PortfoliosContainer} />
          <Route path=':id'
                 component={PortfolioContainer} />
        </Route>
      </Route>
    </Router>
  </MuiThemeProvider>
)

ReactDOM.render(
  <Root />,
  document.getElementById('root')
)
