import React, { Component } from 'react';
import '../App.css';

class Skills extends Component {
  render() {
    return (
      <div className="SkillsContainer">
        <div className="sectionHeader">
          <h2>Skills</h2>
          </div>
          <div className = "sectionParagraph" id="skillIcons">
            <h4>Current Skills</h4>
            <div className = "flexy-icons">
              <i className="devicon-javascript-plain skills"></i>
              <i className="devicon-css3-plain-wordmark skills"></i>
              <i className="devicon-html5-plain-wordmark skills"></i>
              <i className="devicon-github-plain-wordmark skills"></i>
              <i className="devicon-bootstrap-plain-wordmark skills"></i>
              <i className="devicon-jquery-plain-wordmark skills"></i>
              <i className="devicon-react-original-wordmark skills"></i>
              <i className="devicon-git-plain-wordmark skills"></i>
              <i className="devicon-nodejs-plain-wordmark skills"></i>
              <i className="devicon-express-original-wordmark skills"></i>
              <i className="devicon-postgresql-plain-wordmark skills"></i>
              <i className="devicon-sass-original skills"></i>
              <i className="devicon-mocha-plain skills" ></i>
            </div>
          </div>

        </div>
    );
  }
}

export default Skills;
