import React from 'react';

const Project_List_Item = ({project, onProjectSelect}) => {
  return (
  <div className = "projectItem" onClick = {() => onProjectSelect(project)}>
    <a className = 'imageAnchor'><img src= {process.env.PUBLIC_URL + project.image} className = "projectIMG" alt = {project.name} /></a>
    <span className = "projectName">{project.name}</span>
  </div>
)
}

export default Project_List_Item;
