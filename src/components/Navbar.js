import React  from 'react'
import {Link, withRouter} from 'react-router-dom'

class Navbar extends React.Component{
  constructor(props){
    super(props)

    const now = new Date()
    this.state = { active: false, now: now.toLocaleTimeString() }
    this.toggleActive = this.toggleActive.bind(this)
  }

  componentDidMount() {
    setInterval(() => {
      const now = new Date()
      this.setState({ now: now.toLocaleTimeString() })
    }, 1000)
  }

  toggleActive() {
    this.setState({ active: !this.state.active })
  }

  componentDidUpdate(prevProps) {
    if(prevProps.location.pathname !==
     this.props.location.pathname) {
      this.setState({ active: false })
    }
  }

  render() {
    return(
      <nav className="navbar has-background-grey">
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item has-text-primary"><strong>Home</strong></Link>
            <div className="navbar-item has-text-white">Time: { this.state.now }</div>
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
              <Link to="/air-quality" className="navbar-item has-text-primary">Air Quality</Link>
              <Link to="/bike-point" className="navbar-item has-text-primary">Bike Points</Link>
              <Link to="/tube-status" className="navbar-item has-text-primary">Tube Status</Link>
              <Link to="/weather" className="navbar-item has-text-primary">Weather</Link>


            </div>
          </div>
        </div>
      </nav>
    )
  }


}

export default withRouter(Navbar)
