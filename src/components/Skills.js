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
              <i className="devicon-javascript-plain" id="skills"></i>
              <i className="devicon-css3-plain-wordmark" id="skills"></i>
              <i className="devicon-html5-plain-wordmark" id="skills"></i>
              <i className="devicon-github-plain-wordmark" id="skills"></i>
              <i className="devicon-bootstrap-plain-wordmark" id="skills"></i>
              <i className="devicon-jquery-plain-wordmark" id="skills"></i>
              <i className="devicon-react-original-wordmark" id="skills"></i>
            </div>
            <h4>Coming Soon</h4>
            <div className = "flexy-icons">
              <i className="devicon-git-plain-wordmark" id="skills"></i>
              <i className="devicon-mongodb-plain-wordmark" id="skills"></i>
              <i className="devicon-nodejs-plain-wordmark" id="skills"></i>
              <i className="devicon-express-original-wordmark" id="skills"></i>
              <i className="devicon-heroku-original-wordmark" id="skills"></i>
              <i className="devicon-sass-original" id="skills"></i>
              <i className="devicon-wordpress-plain-wordmark" id="skills"></i>
            </div>
          </div>

        </div>
    );
  }
}

export default Skills;
