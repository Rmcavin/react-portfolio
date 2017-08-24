import React from 'react';
import '../resources/font-awesome-4.7.0/css/font-awesome.css';

import '../App.css';
import './App.js'
import ProjectList from './ProjectList';
import ProjectInfo from '../ProjectInfo';


class ProjectContainer extends React.Component {

    constructor(props) {
      super(props);

      this.state = {
        projects: ProjectInfo,
        selectedProject: ProjectInfo[0]
      }
    }
  render () {
    return (
      <div className="App">
        <div className="sectionHeader">
          <h2>Projects</h2>
          </div>
          <div className = "sectionParagraph">
              <ProjectList
                  onProjectSelect = {selectedProject => this.setState({selectedProject})}
                  projects = {this.state.projects} />
                <div className = "selectedProjectDisplay">
                  <div className = "leftContainer">
                      <img src = {this.state.selectedProject.image} className = "projectDisplayImage" alt = {this.state.selectedProject.name}/>
                  </div>
                  <div className = "rightContainer">
                      <h2 className = "projectDisplayName">{this.state.selectedProject.name}</h2>
                        <div>
                          <h4>{this.state.selectedProject.desc}</h4>
                          <button><a href = {this.state.selectedProject.demo} target="_blank" rel="noopener noreferrer">Demo</a></button>
                          <button><a href = {this.state.selectedProject.repo} target="_blank" rel="noopener noreferrer">Repo</a></button>
                        </div>
                  </div>
              </div>
          </div>
          </div>
)}
}

export default ProjectContainer;
