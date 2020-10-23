import React, { Component } from "react";
import avatar from "./avatar.png";
// import background from './background.png';
import "./Template.css";

// https://www.npmjs.com/package/react-moveable

class Template extends Component {
  render() {
    return (
      <div>
        <section>
          <div className="col-md-12">
            <h1 className="intro">
              Welcome to <b>Maddie's</b> portfolio.
            </h1>
            <img className="avatar" src={avatar} alt="Avatar" />
            <div className="text">
              Name: Maddie
              <br />
              Age: 24
              <br />
              Major: Bachelor of Arts
              <br />
              Address: -
            </div>
          </div>
          <br />
          <h3>About Me</h3>
          <div className="aboutme">
            <h4>
              Paragraph 1 <br />
              <br />
              <h6>1st Paragraph</h6>
            </h4>
            <h4>
              Paragraph 2 <br />
              <br />
              <h6>2nd Paragraph</h6>
            </h4>
            <h4>
              Paragraph 3 <br />
              <br />
              <h6>3rd Paragraph</h6>
            </h4>
          </div>
        </section>
      </div>
    );
  }
}

export default Template;
