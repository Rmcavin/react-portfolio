import React, { Component } from 'react';

import '../App.css';
import './App.js'
import Project_List from './Project_List';
import Project_Info from '../Project_Info';


class Project_Container extends React.Component {

    constructor(props) {
      super(props);

      this.state = {
        projects: Project_Info,
        selectedProject: Project_Info.Project1
      }
    }
  render () {
    return (
      <div className="App">
        <div className="sectionHeader">
          <h2>Projects</h2>
          </div>
          <div className = "sectionParagraph">
              <Project_List
                  onProjectSelect = {selectedProject => this.setState({selectedProject})}
                  projects = {this.state.projects} />
                <div className = "flexy-projects">
              </div>
          </div>
          </div>
)}
}

export default Project_Container;
