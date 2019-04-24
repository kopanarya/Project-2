import React from 'react'
import axios from 'axios'

class WeatherShow extends React.Component {

  constructor() {
    super()
    this.state = {
      weather: null
    }
  }

  componentDidMount() {
    axios.get('https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/a08db7927c4bfc952399c6fe4b908204/51.5074,0.1278')
      .then(res => this.setState({ weather: res.data }))
  }

  render() {
    if(!this.state.weather) return null
    const checkIcon = this.state.weather.currently.icon
    console.log(checkIcon)
    return (

      <section className="section">
        <div className="container">
          <div className="columns is-multiline">
            <div className="column is-full-desktop">
              <h2 className="title is-2">London</h2>
            </div>
            <div className="column  is-half-desktop">

              <div className="column  is-full-desktop">
                <p className="subtitle is-3">{this.state.weather.currently.temperature}</p>
              </div>
              <div className="column  is-full-desktop">
                <div className={`weather-icon ${checkIcon}`}>

                </div>
              </div>
            </div>
            <div className="column  is-half-desktop">
              <div className="column  is-full-desktop">
                <p className="subtitle is-3">{this.state.weather.currently.summary}</p>
              </div>
              <div className="column  is-full-desktop">
                <p className="subtitle is-3">{this.state.weather.minutely.summary}</p>
              </div>


            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default WeatherShow
