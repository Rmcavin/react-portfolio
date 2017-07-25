import React, { Component } from 'react';
import familyPhoto from '../resources/images/family.jpg';
import '../App.css';

class About extends Component {
  render() {
    return (
      <div className="AboutContainer">
        <div className="sectionHeader">
          <h2>About Me</h2>
          </div>

          <div className = "sectionParagraph">
            <div className = "photoDiv">
              <div className = "border2-family">
                <div className = "border-family">
                  <img src = {familyPhoto} className = "familyPhoto" alt = "family photo"/>
                </div>
              </div>
            </div>
            <p>I'm an aspiring full stack web developer.
            I began learning to code in fall of 2016 while working as a high school
            science and social studies teacher. I quickly realized that coding
            was awesome and approachable, and
            began considering it as a career. Since beginning a few months ago, I have learned
            HTML5, CSS3, Javascript, and have additional practice using JQuery, React, and other libraries
            and frameworks. Next I intend to learn Node.js, Express, and MongoDB,
            then build apps using the MERN stack. </p>

            <p>Before learning to code, I earned an M.S. in Geography,
            worked as a researcher, and as a teacher at both the college and
            high school levels. I'm a <a target = "_blank"
            href = "https://scholar.google.com/citations?user=BRdKb-4AAAAJ&hl=en">
            published author</a>, experienced data analyst and visualizer, and excellent
            teacher or trainer.</p>

            <p>I live in Round Rock, Texas with my fiance,
            <a target= "_blank" href= "https://twitter.com/HarridiseLost"> Ben</a>,
            our dog, Zelda, and our silkie chickens.
            When I'm not coding, I enjoy <a target = "_blank"
            href = "http://steamcommunity.com/id/amallie/">video games</a>,
            picking veggies in my garden, cooking, and swimming.</p>
          </div>
        </div>
    );
  }
}

export default About;
