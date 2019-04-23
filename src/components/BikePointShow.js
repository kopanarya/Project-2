import React from 'react'
import axios from 'axios'

class BikePointShow extends React.Component {

  constructor() {
    super()
    this.state = {
      BikePoint: []
    }
  }


  componentDidMount() {
    axios.get('https://api.tfl.gov.uk/BikePoint/')
      .then(res => this.setState({ BikePoint: res.data }))
  }
  render(){
    return(
      <section className="section">
        <div className="container">
          <div className="field is-grouped">
            <p className="control is-expanded">
              <input className="input" type="text" placeholder="Find a repository" />
            </p>
            <p className="control">
              <a className="button is-info">
                Search
              </a>
            </p>
          </div>
          <div className="columns is-multiline">
            {this.state.BikePoint.map(bike =>
              <div key={bike.id} className="column is-one-quarter-desktop is-half-tablet">

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
