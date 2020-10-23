import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import avatar from "./Template/avatar.png";
import DisplayFile from "./DisplayFile";

const PreviewPortfolio = ({ history }) => {
  const [template, setTemplate] = useState();

  useEffect(() => {
    const templateToSet = sessionStorage.getItem("savedTemplate");
    if (templateToSet) {
      setTemplate(JSON.parse(templateToSet));
      sessionStorage.removeItem("savedTemplate");
    } else {
      alert("You don't have a template to view");
      history.push("/aboutme");
    }
  }, []);

  return template ? (
    <div>
      <section>
        <div className="container">
          <h1 className="intro">
            Welcome to <b>{template.info.name}'s</b> Portfolio.
          </h1>

          {template.info.profilePicture ? (
            <DisplayFile
              className="avatar"
              file={template.info.profilePicture}
            />
          ) : (
            <img className="avatar" src={avatar} alt="Avatar" />
          )}

          {/* items = info.items.map((item) => {item.title}: {item.content}<br/>) for arbitrary info */}
          <div className="text">
            Name: {template.info.name}
            <br />
            Age: {template.info.age}
            <br />
            Major: {template.info.major}
          </div>
        </div>
        <br />
        <h3>About Me</h3>
        <br />
        <div className="aboutme">
          <h4>
            Paragraph 1 <br />
            <br />
            <p>{template.aboutMe.para1}</p>
          </h4>
          <h4>
            Paragraph 2 <br />
            <br />
            <p>{template.aboutMe.para2}</p>
          </h4>
          <h4>
            Paragraph 3 <br />
            <br />
            <p>{template.aboutMe.para3}</p>
          </h4>
        </div>
      </section>
    </div>
  ) : null;
};

export default withRouter(PreviewPortfolio);
