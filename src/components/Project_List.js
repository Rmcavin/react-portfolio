import React, { Component } from 'react';
import Slider from 'react-slick';
import '../App.css';

import Project_List_Item from './Project_List_Item'

const Project_List = (props) => {
  const testItems = props.projects.map((project) => {
    <div key = {project.id}>
  1
     </div>
  })

  const projectItems = props.projects.map((project) => {
   return (
       <div key = {project.id}>
         <Project_List_Item
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
