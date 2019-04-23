import React  from 'react'
import {Link, withRouter} from 'react-router-dom'

class Navbar extends React.Component{
  constructor(props){
    super(props)
    this.state ={ active: false}
  }
  render(){
    return(
      <nav className="navbar has-background-grey-darker">
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item has-text-danger"><strong>Home</strong></Link>
            <a role="button" className={`navbar-burger${this.state.active ? ' is-active' : '' }`} onClick={this.toggleActive}>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>

          <div className={`navbar-menu${this.state.active ? ' is-active' : ''}`}>
            {/*everything else*/}

            <div className="navbar-start">

            </div>

            <div className="navbar-end">
              <Link to="/air-quality" className="navbar-item has-text-danger">Air Quality</Link>
              <Link to="/bike-point" className="navbar-item has-text-danger">Bike Points</Link>
              <Link to="/tube-status" className="navbar-item has-text-danger">Tube Status</Link>
              <Link to="/weather" className="navbar-item has-text-danger">Weather</Link>


            </div>
          </div>
        </div>
      </nav>
    )
  }


}

export default withRouter(Navbar)
