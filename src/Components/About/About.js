import React, { Component } from "react";
import "./About.css";
import Skills from "../Skills/Skill";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";
class About extends Component {
  render() {
    return (
      <div className="Container">
        <section className="about">
          <h2>About Me </h2>
          <div className="content">
            <p>
              I am an inspired ,passionate and hardworking Software developer
              with some knowledge of both front-end and back-end knowledge .{" "}
            </p>

            <p>
              I am currently pursuing a degree in Business Information
              Technology at Haaga-Helia University of Applied Sciences{" "}
            </p>
            <p>
              Most of my skills and work at the moment has been what i have been
              learning at school , i also have been working on <br />
              some projects on my own.
            </p>
            <p>
              I love writting clean and maintainable code and i keep challenging
              myself with some challaenges on a regular basis :)
            </p>
          </div>
          <h2> My skills </h2>
          <div className="content">
            <p>
              {" "}
              I have aquired an array of skills while studying but the learning
              process never ends, Some of my skills are :{" "}
            </p>
            <Skills />
          </div>
          <h2>My Projects </h2>
          <div className="content">
            <p>
              Listed below are some of my projects .Feel Free to check them out
              :){" "}
            </p>
            <Projects />
          </div>
        </section>
        <Contact />
      </div>
    );
  }
}

export default About;
