import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import '../App.css';
import '../resources/font-awesome-4.7.0/css/font-awesome.css';

class NavBar extends Component {
  constructor() {
    super()

    this.openMenu = this.openMenu.bind(this);

    this.state = {
      open: false
    }
  }
    openMenu() {
      const currentState = this.state.open;
      this.setState({open: !currentState});
    }

  render() {
    return (
      <div className="App">
        <nav className = "nav">
          <a href="#" className ="toggleNav" onClick = {this.openMenu}><button className = "menuButton">☰ Menu</button></a>
          <ul className= {"navBar " + this.state.open}>
            <li className = "linkButton" ><NavLink exact to="/"><button id = "navButton">About</button></NavLink></li>
            <li className = "linkButton" ><NavLink to="/skills"><button id = "navButton">Skills</button></NavLink></li>
            <li className = "linkButton" ><NavLink to="/projects"><button id = "navButton">Projects</button></NavLink></li>
            <li className = "socialButton"><a target= "_blank" rel="noopener noreferrer" href = "https://github.com/Rmcavin"><button id = "navButton"><i className="fa fa-github" aria-hidden="true"></i></button></a></li>
            <li className = "socialButton"><a target= "_blank" rel="noopener noreferrer" href = "https://www.linkedin.com/in/rachel-cavin-79036468/"><button  id = "navButton"><i className="fa fa-linkedin" aria-hidden="true"></i></button></a></li>
            <li className = "socialButton"><a target= "_blank" rel="noopener noreferrer" href = "https://twitter.com/Rachel_Cavin"><button  id = "navButton"><i className="fa fa-twitter" aria-hidden="true"></i></button></a></li>
            <li className = "socialButton"><a target= "_blank" rel="noopener noreferrer" href = "https://codepen.io/rmcavin/pens/public/"><button  id = "navButton"><i className="fa fa-codepen" aria-hidden="true"></i></button></a></li>
            <li className = "socialButton"><a target= "_blank" rel="noopener noreferrer" href = "https://www.freecodecamp.com/rmcavin"><button  id = "navButton"><i className="fa fa-free-code-camp" aria-hidden="true"></i></button></a></li>
          </ul>
        </nav>
        <div className = "divider">
        <hr />
        </div>
      </div>
    );
  }
}

export default NavBar;
