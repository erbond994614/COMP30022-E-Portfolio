import "react-slideshow-image/dist/styles.css";
import React from "react";
import { Fade } from "react-slideshow-image";
import student from "./1.jpg";
import artist from "./2.png";
import professional from "./3.jpg";

const HomepageSlideshow = () => {
  const fadeImages = [student, artist, professional];
  return (
    <div>
      <div className="slide-container">
        <Fade>
          <div className="each-fade">
            <div>
              <img src={fadeImages[0]} alt="student" />
            </div>
            <p>Student Template</p>
          </div>
          <div className="each-fade">
            <p>Artist Template</p>
            <div>
              <img src={fadeImages[1]} alt="artist" />
            </div>
          </div>
          <div className="each-fade">
            <div>
              <img src={fadeImages[2]} alt="professional" />
            </div>
            <p>Professional Template</p>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default HomepageSlideshow;
