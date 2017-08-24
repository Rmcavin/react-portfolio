import React from 'react';
import '../App.css';

import ProjectListItem from './ProjectListItem'

const Project_List = (props) => {

  const projectItems = props.projects.map((project) => {
   return (
       <div key = {project.id}>
         <ProjectListItem
           onProjectSelect={props.onProjectSelect}
           key = {project.id}
           project = {project} />
        </div>
   )
});

  return (
    <div className = "projectGallery">
      {projectItems}
    </div>
  )
};

export default Project_List;
