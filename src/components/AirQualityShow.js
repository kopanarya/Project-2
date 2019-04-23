import React from 'react'
import axios from 'axios'

class AirQualityShow extends React.Component {

  constructor(){
    super()
    this.state = {
      AirQuality: null
    }
  }

  componentDidMount() {
    axios.get('https://api.tfl.gov.uk/AirQuality/')
      .then(res => this.setState({ AirQuality: res.data }))
  }

  render() {
    if(!this.state.AirQuality) return null

    return (
      <section className="section">
        <div className="container">
          <div className="columns is-multiline">
            <div  className="column is-half-desktop is-full-tablet">
              <h1 className="title is-2">ForecastText</h1>
              <h1>{this.state.AirQuality.currentForecast[0].forecastText}</h1>
            </div>
            <div className="column is-half-desktop is-full-tablet">
              <div className="column">
                <h1 className="title is-2">Forecast Band</h1>
                <h1>{this.state.AirQuality.currentForecast[0].forecastBand}</h1>
              </div>
              <div className="column">
                <h1 className="title is-2">Forecast Summary</h1>
                <h1>{this.state.AirQuality.currentForecast[0].forecastSummary}</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }

}
export default AirQualityShow
