import React from 'react'
import Link from 'react-router-dom'
import axios from 'axios'

class AirQualityIndex extends React.Component {

  constructor(){
    super()
    this.state = {
      airquality: null
    }
  }

  componentDidMount() {
    axios.get('https://api.tfl.gov.uk/AirQuality/')
      .then(res => this.setState({ airquality: res.data }))
  }

  render() {
    return (
      <section className="section">
        <div className="container">
          <div className="columns is-multiline">
            <div className="column is-half-desktop is-full-tablet">
              <h1>Forecast Text</h1>
            </div>
            <div className="column is-half-desktop is-full-tablet">
              <div className="column">
                <h1>Forecast Band</h1>
              </div>
              <div className="column">
                <h1>Forecast summary</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }

}
export default AirQualityIndex
