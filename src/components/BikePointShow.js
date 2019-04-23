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
    axios.get(`https://api.tfl.gov.uk/bikepoint?lat=${this.props.location.lat}&lon=${this.props.location.lon}&radius=500`)
      .then(res => this.setState({ BikePoint: res.data.places }))
  }
  render(){
    console.log(this.state.BikePoint)
    return(
      <section className="section">
        <div className="container">
          <div className="columns is-multiline">
            {this.state.BikePoint.map(bike =>
              <div key={bike.commonName} className="column is-one-quarter-desktop is-half-tablet">

                <h1 className="subtitle is-3">{bike.commonName}</h1>
                <h1 className="subtitle is-5">Avaliable Bikes :{bike.additionalProperties[6].value}</h1>
                <h2 className="subtitle is-5">Avaliable Spaces:{bike.additionalProperties[7].value}</h2>
              </div>
            )}
          </div>
        </div>
      </section>



    )
  }

}
export default BikePointShow
