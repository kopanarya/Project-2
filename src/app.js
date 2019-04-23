import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'

import 'bulma'

import Home from './components/Home'
import AirQualityShow from './components/AirQualityShow'
import BikePointShow from './components/BikePointShow'

class App extends React.Component{
  constructor(){
    super()
    this.state ={
      data: []
    }
  }

  componentDidMount() {
    navigator.geolocation.watchPosition((position) => {
      const { latitude, longitude } = position.coords
      this.setState({ location: { lat: latitude, lon: longitude } })
    })
  }

  render(){
    console.log(this.state)
    if(!this.state.location) return null
    return (
      <Router>
        <BikePointShow location={this.state.location} />
        <Switch>
          <Route path="/BikePoint" component={BikePointShow} />
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
