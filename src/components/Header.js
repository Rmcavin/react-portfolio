import React, { Component } from 'react';
import img from '../images/MeResize.jpg';
import '../App.css';

class Header extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Hello</h1>
        <div className = "border2">
          <div className = "border">
            <img src={img} className="Me-Photo" alt="Picture of Me" />
          </div>
        </div>
          <h2>I'm Rachel Cavin</h2>
        </div>
        <div className = "divider">
        <hr />
        </div>
      </div>
    );
  }
}

export default Header;
