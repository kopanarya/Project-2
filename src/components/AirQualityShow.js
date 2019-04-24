import React from 'react'
import axios from 'axios'
// this needs to be installed and imported
import he from 'he'

class AirQualityShow extends React.Component {

  constructor(){
    super()
    this.state = {
      AirQuality: null
    }
  }

  //this is needed to make the decode happen
  decodeHTML(str) {
    return he.decode(str)
  }

  componentDidMount() {
    axios.get('https://cors-anywhere.herokuapp.com/https://api.tfl.gov.uk/AirQuality/')
      .then(res => this.setState({ AirQuality: res.data }))
  }

  render() {
    if(!this.state.AirQuality) return null

    return (
      <section className="section">
        <div className="container">
          <h1 className="title is-1 has-text-centered">Air Quality</h1>
          <hr />
          <div className="columns is-multiline">
            <div  className="column is-half-desktop is-full-tablet">
              <h1 className="title is-3">Air Info</h1>
              <div className="content">
                <p dangerouslySetInnerHTML={{ __html: this.decodeHTML(this.state.AirQuality.currentForecast[0].forecastText) }}></p>
              </div>
            </div>
            <div className="column is-half-desktop is-full-tablet">
              <div className="column">
                <figure className="image">
                  <img src="/images/air.jpg" />
                </figure>
                <hr/>
                <h1>Pollution is {this.state.AirQuality.currentForecast[0].forecastBand}</h1>

              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }

}
export default AirQualityShow
