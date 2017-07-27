import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import '../App.css';
import '../resources/font-awesome-4.7.0/css/font-awesome.css';

class NavBar extends Component {
  render() {
    return (
      <div className="App">
        <div className = "navDiv">
          <ul className="navBar">
            <li><NavLink exact to="/"><button id = "navButton">About</button></NavLink></li>
            <li><NavLink to="/skills"><button id = "navButton">Skills</button></NavLink></li>
            <li><NavLink to="/projects"><button id = "navButton">Projects</button></NavLink></li>
            <li><a target= "_blank" rel="noopener noreferrer" href = "https://github.com/Rmcavin"><button id = "navButton" className = "social"><i className="fa fa-github" aria-hidden="true"></i></button></a></li>
            <li><a target= "_blank" rel="noopener noreferrer" href = "https://www.linkedin.com/in/rachel-cavin-79036468/"><button id = "navButton" className = "social"><i className="fa fa-linkedin" aria-hidden="true"></i></button></a></li>
            <li><a target= "_blank" rel="noopener noreferrer" href = "https://twitter.com/Rachel_Cavin"><button id = "navButton" className = "social"><i className="fa fa-twitter" aria-hidden="true"></i></button></a></li>
            <li><a target= "_blank" rel="noopener noreferrer" href = "https://codepen.io/rmcavin/pens/public/"><button id = "navButton" className = "social"><i className="fa fa-codepen" aria-hidden="true"></i></button></a></li>
            <li><a target= "_blank" rel="noopener noreferrer" href = "https://www.freecodecamp.com/rmcavin"><button id = "navButton" className = "social"><i className="fa fa-free-code-camp" aria-hidden="true"></i></button></a></li>
          </ul>
        </div>
        <div className = "divider">
        <hr />
        </div>
      </div>
    );
  }
}

export default NavBar;
