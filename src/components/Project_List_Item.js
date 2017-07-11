import React from 'react';

const Project_List_Item = ({project, onProjectSelect}) => {
  return (
  <li onClick = {() => onProjectSelect(project)}>
    <a className = 'imageAnchor'><img src= {project.image} className = "projectIMG" /></a>
    <span className = "projectName">{project.name}</span>
  </li>
)
}

export default Project_List_Item;
