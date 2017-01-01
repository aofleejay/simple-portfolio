import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import Home from './components/Home'
import Pages from './components/Pages'
import injectTapEventPlugin from 'react-tap-event-plugin'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

injectTapEventPlugin()

const Root = () => (
  <MuiThemeProvider>
    <Router history={browserHistory}>
      <Route path='/' component={App}>
        <IndexRoute component={Home} />
        <route path='pages'
               component={Pages} />
      </Route>
    </Router>
  </MuiThemeProvider>
)

ReactDOM.render(
  <Root />,
  document.getElementById('root')
)
