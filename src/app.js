import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'

import 'bulma'

import Home from './components/Home'
import AirQualityShow from './components/AirQualityShow'

class App extends React.Component{
  constructor(){
    super()
    this.state ={
      data: []
    }
  }

  render(){
    return (
      <Router>
        <Switch>
          <Route path="/AirQuality" component={AirQualityShow} />
          <Route path="/" component={Home} />

        </Switch>
      </Router>
    )

  }
}
ReactDOM.render(
  <App />,
  document.getElementById('root')
)
