import React, { Component } from 'react';
import '../App.css';
import './App.js'
import ProjectInfo from '../ProjectInfo'
import ProjectContainer from './ProjectContainer'



class Projects extends Component {
  constructor(props) {
    super(props);

    this.state = {ProjectInfo}
  }

  render() {
    return (
      <div className="App">
        <div className="sectionHeader">
          <h2>Projects</h2>
          </div>
          <div className = "sectionParagraph">
              <div className = "flexy-projects">
                <ul>
                  
                </ul>
              </div>
          </div>
          </div>


    );
  }
}

export default Projects;
