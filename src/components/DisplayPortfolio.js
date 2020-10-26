import React from "react";
import { useSelector } from "react-redux";
import "./Template/Template.css";
import { studentTemplate } from "./Template/templates";
import ProfilePicture from './ProfilePicture'
import Information from './Information'
import AboutMe from './AboutMe'

const DisplayPortfolio = () => {
  var portfolio = useSelector((state) => state.portfolio.portfolio);

  if (!portfolio) {
    portfolio = studentTemplate;
  }

  return (
    <div>
      <section>
        <div className='container'>
          {portfolio.info.Name ? <h1 className='intro'>Welcome to <b>{portfolio.info.Name}'s</b> portfolio.</h1> : <h1 className='intro'>Welcome to my portfolio</h1>}
                          
          <ProfilePicture display={true}/>

          <Information display={true}/>
        </div>
        <br/>
        <AboutMe display={true}/>
      </section>
    </div>
  );
};

export default DisplayPortfolio;
