import React, { Component } from 'react';
import '../App.css';

class Footer extends Component {
  render() {
    return (
      <div className="App">
        <div className="Footer">
          <div className = "divider">
            <hr />
          </div>
          <p>Made with <i className="fa fa-coffee" aria-hidden="true"></i>, <i className="fa fa-heart" aria-hidden="true"></i>, and <i className="fa fa-code" aria-hidden="true"></i> by Rachel Cavin.</p>
          <p>Icons by <a target = "_blank" href = "http://fontawesome.io/">Font Awesome</a> and <a target = "_blank" href = "http://konpa.github.io/devicon/">Devicon</a></p>
      </div>
      </div>
    );
  }
}

export default Footer;
