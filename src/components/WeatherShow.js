import React from 'react'
import axios from 'axios'

class WeatherShow extends React.Component {

  constructor() {
    super()
    this.state = {
      weather: []
    }
  }

  render() {
    return (
      <section className="section">
        <div className="container">
          <div className="columns is-multiline">
            <div className="column is-full-desktop">Time Zone
            </div>
            <div className="column  is-half-desktop">

              <div className="column  is-full-desktop">
              Icon
              </div>
              <div className="column  is-full-desktop">
              Summary
              </div>
            </div>
            <div className="column  is-half-desktop">
              <div className="column  is-full-desktop">
              Minutely Summary
              </div>
              <div className="column  is-full-desktop">
              Temperature
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default WeatherShow
