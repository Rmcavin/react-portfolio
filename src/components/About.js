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

              <div className = "aboutParagraph">
                <p>I'm a full stack web developer currently in the Galvanize Web Development Bootcamp in Austin, Texas. Following my graduation
                in January 2018, I will be seeking full time employment as a web developer in the Austin area.</p>

                <p>I began learning HTML and CSS when I was about 10 years old to customize my Neopets.com pages.
                In highschool, I managed websites for online gaming communities.
                I've loved web development for a long time, but I only recently began to consider a career change.
                I have worked hard for over a year to develop my skills in order to build web-based applications
                profesionally. I am a determined a driven developer who is skilled at teaching myself new techniques that
                I can readily apply to solve problems.</p>

                <p>Before learning to code, I earned an M.S. in Geography,
                worked as a researcher, and as a teacher at both the college and
                high school levels. I'm a published author, experienced data analyst
                and visualizer, and excellent teacher or trainer.</p>

                <p>I live in Round Rock, Texas with my fiance, Ben,
                our dog, Zelda, our cats, Moxie and Wiley, and our silkie chickens.
                When I'm not coding, I enjoy video games, scary movies, cooking, and hiking.</p>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default About;
