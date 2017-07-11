import React, { Component } from 'react';
import '../App.css';

import Project_List_Item from './Project_List_Item'

const Project_List = (props) => {

  const projectItems = props.projects.map((project) => {
   return (
         <ul>
         <Project_List_Item
           onProjectSelect={props.onProjectSelect}
           key = {project.id}
           project = {project} />
          </ul>
   )
});
  return (
     <div className = "projectGallery">
        <ul>
          {projectItems}
        </ul>
    </div>
  )
};

export default Project_List;




//  {Object.keys(this.props.projects)
//    .map(key => <Project_List_Item
//                    key = {this.props.project.id}
//                    details = {props.projects[key]} />)}
