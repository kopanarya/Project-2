import React from 'react'
import axios from 'axios'

class TubeStatusShow extends React.Component {

  constructor() {
    super()
    this.state = {
      lines: []
    }

  }
  componentDidMount(){
    axios.get('https://api.tfl.gov.uk/line/mode/tube/status')
      .then(res => this.setState({ lines: res.data }))
    const statusInterval = setInterval(this.timer, 30000)
    this.setState({ statusInterval: statusInterval })
  }

  render(){

    return(
      <section className="section">
        <div className="container ">
          <h1 className="title is-1 has-text-centered">Tube Status</h1>
          {this.state.lines.map(line =>
            <div key={line.name} className="columns tube-columns is-mobile">
              <div  className={`column has-text-centered tube-color ${line.name} is-half`}>
                <h2>{line.name}</h2>
              </div>
              <div className="column is-half has-text-centered status">
                <h2>{line.lineStatuses[0].statusSeverityDescription}</h2>
              </div>
            </div>
          )}
        </div>
      </section>


    )
  }
}
export default TubeStatusShow
