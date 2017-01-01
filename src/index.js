import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import Home from './components/Home'
import Pages from './components/Pages'
import Page from './components/Page'
import injectTapEventPlugin from 'react-tap-event-plugin'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import 'normalize.css'
import './index.scss'

injectTapEventPlugin()

const Root = () => (
  <MuiThemeProvider>
    <Router history={browserHistory}>
      <Route path='/' component={App}>
        <IndexRoute component={Home} />
        <Route path='pages'>
          <IndexRoute component={Pages} />
          <Route path=':id'
                 component={Page} />
        </Route>
      </Route>
    </Router>
  </MuiThemeProvider>
)

ReactDOM.render(
  <Root />,
  document.getElementById('root')
)
