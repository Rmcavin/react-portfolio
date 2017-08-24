import React, { Component } from 'react';
import familyPhoto from '../images/family.jpg';
import '../App.css';

class About extends Component {
  render() {
    return (
      <div className="AboutContainer">
        <div className="sectionHeader">
          <h2>About Me</h2>
          </div>

          <div className = "sectionParagraph">
            <div className = "aboutSection">
              <div className = "photoDiv">
                <div className = "border2-family">
                  <div className = "border-family">
                    <img src = {familyPhoto} className = "familyPhoto" alt = "Me and my family"/>
                  </div>
                </div>
              </div>
              <div className = "aboutParagraph">
                <p>I'm a full stack web developer currently in the Galvanize Web Dev Bootcamp in Austin, Texas. Following my graduation
                in January 2018, I will be seeking full time employment as a web developer in the Austin area.</p>

                <p>I began learning HTML and CSS when I was about 10 years old to make sweet Neopets page
                customizations. In highschool, I managed websites for online gaming communities I was part of.
                I've loved web development for a long time, but only recently, while working as a high school
                science teacher, did I begin to develop my skills in order to build web-based applications
                profesionally. As of now I can build front ends using a variety of </p>

                <p>Before learning to code, I earned an M.S. in Geography,
                worked as a researcher, and as a teacher at both the college and
                high school levels. I'm a <a target = "_blank" rel="noopener noreferrer"
                href = "https://scholar.google.com/citations?user=BRdKb-4AAAAJ&hl=en">
                published author</a>, experienced data analyst and visualizer, and excellent
                teacher or trainer.</p>

                <p>I live in Round Rock, Texas with my fiance,
                <a target= "_blank" rel="noopener noreferrer" href= "https://twitter.com/HarridiseLost"> Ben</a>,
                our dog, Zelda, and our silkie chickens.
                When I'm not coding, I enjoy <a target = "_blank" rel="noopener noreferrer"
                href = "http://steamcommunity.com/id/amallie/">video games</a>,
                picking veggies in my garden, cooking, and swimming.</p>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default About;
