import React from 'react'
import {Link} from 'react-router-dom'

class Home extends  React.Component{
  constructor(){
    super()

  }

  render(){
    return(
      <section className="section has-background-light">
        <div className="container">
          <h1 className="title is-1">London Daily</h1>
          <div className="columns is-multiline">
            <div className="column is-half-desktop is-half-tablet" >
              <Link to="/air-quality" >
                <div className="card air">

                  <div className="card-content">
                    <p className="title is-2 has-text-light">Air Quality</p>
                  </div>

                </div>
              </Link>
            </div>
            <div className="column is-half-desktop is-half-tablet" >
              <Link to="/bike-point">
                <div className="card bike">

                  <div className="card-content">
                    <p className="title is-2">Bike Points</p>
                  </div>

                </div>
              </Link>
            </div>
            <div className="column is-half-desktop is-half-tablet" >
              <Link to="/weather">
                <div className="card weather">

                  <div className="card-content">
                    <p className="title is-2">Weather</p>
                  </div>

                </div>
              </Link>
            </div>
            <div className="column is-half-desktop is-half-tablet" >
              <Link to="/tube-status">
                <div className="card tube">

                  <div className="card-content">
                    <p className="title is-2 has-text-light">Tube Status</p>
                  </div>

                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    )
  }


}
export default Home
