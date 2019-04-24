import React from 'react'
import axios from 'axios'

class BikePointShow extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      BikePoint: []
    }
  }

  componentDidMount() {
    axios.get(`https://cors-anywhere.herokuapp.com/https://api.tfl.gov.uk/bikepoint?lat=${this.props.location.lat}&lon=${this.props.location.lon}&radius=500`)
      .then(res => this.setState({ BikePoint: res.data.places }))
  }
  render(){
    console.log(this.state.BikePoint)
    return(
      <section className="section">
        <div className="container">
          <h1 className="title is-1 has-text-centered">Bike Points Near You</h1>
          <hr />
          <div className="columns is-multiline">
            {this.state.BikePoint.map(bike =>
              <div key={bike.commonName} className="column is-one-third-desktop is-half-tablet has-text-centered bikepoints">

                <h4 className="subtitle is-4">{bike.commonName}</h4>
                <p><strong>Avaliable Bikes:</strong> {bike.additionalProperties[6].value}</p>
                <p><strong>Avaliable Spaces:</strong> {bike.additionalProperties[7].value}</p>
              </div>
            )}
          </div>
        </div>
      </section>



    )
  }

}
export default BikePointShow
