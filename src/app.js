import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import 'bulma'
import Home from './components/Home'

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
