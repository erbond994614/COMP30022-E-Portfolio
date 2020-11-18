import React from "react";
import { useSelector } from "react-redux";
import "./Template/Template.css";
import { studentTemplate } from "./Template/templates";
import ProfilePicture from "./ProfilePicture";
import Information from "./Information";
import AboutMe from "./AboutMe";
import Preview from "./Preview";
import Downloads from "./Downloads";
import Avatar from "./Artist/Avatar";

const Portfolio = () => {
  var portfolio = useSelector((state) => state.userAuth.user.portfolio);
  const user = useSelector((state) => state.userAuth.user);
  if (!portfolio) {
    portfolio = studentTemplate;
  }

  return (
    <div>
      <section>
        <div className="d-flex flex-column justify-content-center align-items-center">
          {portfolio.info.Name ? (
            <h1 className="intro">
              Welcome to <b>{portfolio.info.Name}'s</b> portfolio.
            </h1>
          ) : (
            <h1 className="intro">Welcome to my portfolio</h1>
          )}
          <Avatar avatar={user.avatar && user.avatar.data} />
          <Information />
        </div>
        <br />
        <AboutMe />

        <Downloads />
      </section>
      <Preview />
    </div>
  );
};

export default Portfolio;
