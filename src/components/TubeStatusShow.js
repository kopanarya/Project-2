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
        <div className="container">
          <h1></h1>
          <div  className="columns  is-multiline">
            {this.state.lines.map(line =>
              <div key={line.name} className="column   is-full-desktop">
                <div  className="column is-half-desktop">
                  <h2>{line.name}</h2>
                </div>
                <div className="column is-half-desktop">
                  <h2>{line.lineStatuses[0].statusSeverityDescription}</h2>
                </div>
              </div>
            )}
          </div>

        </div>
      </section>


    )
  }
}
export default TubeStatusShow
