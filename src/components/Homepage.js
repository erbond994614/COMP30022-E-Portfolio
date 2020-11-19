import React from "react";
import { Link } from "react-router-dom";
import ".././Assets/css/homepage.min.css";
import HomepageSlideshow from "./HomepageSlideshow/Slideshow";

const Homepage = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-xl-11 col-lg-11 col-md-11 col-sm-11 col-xs-11 mt-3">
          <h1 className="text-center h1">Welcome to Quick e-Portfolio!</h1>
        </div>
        <div className="col-xl-11 col-lg-11 col-md-11 col-sm-11 col-xs-11">
          <p className="text-center h2">
            Join today, create and manage your very own e-Portfolio website in 5
            minutes!
          </p>
          <p className="text-center h2">
            Using Quick e-Portfolio to make your own Blog, Foot Print, and
            upload your resume online!
          </p>
          <p className="text-center h2">Sample of Personal e-Portfolio</p>
        </div>
      </div>
      <div className="row mt-3 justify-content-center">
        <div className="col-xl-11 col-lg-11 col-md-11 col-sm-11 col-xs-11">
          {/* <img src={homeImg} alt="home"></img> */}
          <HomepageSlideshow />
        </div>
      </div>
      <div>
        <Link to="temp">Template</Link>
      </div>
    </div>
  );
};

export default Homepage;
