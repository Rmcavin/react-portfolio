import React, { Component } from 'react';
import img from '../images/MeResize.jpg';
import '../App.css';

class Header extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
        <div className = "border2">
          <div className = "border">
            <img src={img} className="Me-Photo" alt="Me" />
          </div>
        </div>
        <h1>Rachel Cavin</h1>
        </div>
        <div className = "divider">
        <hr />
        </div>
      </div>
    );
  }
}

export default Header;
